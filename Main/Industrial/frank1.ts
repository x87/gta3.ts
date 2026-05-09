// Generated from Main/Industrial/frank1.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_frankie1() {
    $.flag_player_on_mission = 1
    $.flag_player_on_frankie_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    // SCRIPT_NAME frank1

    $.chico_message_flag = 0
    $.flag_blip_on_limo = 0
    $.timera_reset = 0
    $.timerb_reset = 0
    $.clubbers_flee_flag = 0
    $.clubber3_car1 = 0
    $.clubber5_car2 = 0
    $.clubber8_car3 = 0
    $.flag_blip_on_maria = 0
    $.create_more_swat1 = 0
    $.create_more_swat2 = 0
    $.swat1_exit_car = 0
    $.swat2_exit_car = 0
    $.maria_blip = 0
    $.add_sound_flag = 0
    $.locate_dome_flag = 0
    $.chico_audio_flag = 0
    $.swat_cam_needs_restoring = 0
    $.skip_cutscene_flag = 0

    $.timerc_reset_flag_f1a = 0
    $.timerc_current_f1a = 0
    $.timerc_started_f1a = 0
    $.timerc_f1a = 0
    $.timerc_reset_flag_f1b = 0
    $.timerc_current_f1b = 0
    $.timerc_started_f1b = 0
    $.timerc_f1b = 0
    $.fuckup_flag = 0
    $.fuckup_timer_start = 0
    $.fuckup_timer_current = 0
    $.fuckup_timer = 0

    $.shadow_counter = 0

    $.inside_warehouse_x = 1273.0
    $.inside_warehouse_y = -1107.4
    $.inside_warehouse_z = 11.5

    $.outside_warehouse_x = 1261.0
    $.outside_warehouse_y = -1108.0

    $.swat1_stuck_x = 0.0
    $.swat1_stuck_y = 0.0
    $.swat1_stuck_z = 0.0

    $.swat2_stuck_x = 0.0
    $.swat2_stuck_y = 0.0
    $.swat2_stuck_z = 0.0

    $.R = 0
    $.G = 0
    $.R1 = 0
    $.G1 = 0
    $.R2 = 0
    $.G2 = 0
    $.R3 = 0
    $.G3 = 0
    $.R4 = 0
    $.G4 = 0
    $.R5 = 0
    $.G5 = 0

    {
        Streaming.LoadSpecialCharacter(1, $.frankie)
        Streaming.LoadSpecialCharacter(2, $.maria)
        Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH)
        Streaming.LoadSpecialModel(hier`cutobj02`, FRANKH)
        Streaming.LoadSpecialModel(hier`cutobj03`, MARIAH)
        Streaming.RequestModel(ped`GANG_MAFIA_B`)
        Streaming.RequestModel(salvsdetail)
        Streaming.RequestModel(swank_inside)
        Streaming.RequestModel(franksclb02)

        Streaming.LoadAllModelsNow()

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasSpecialCharacterLoaded(2) ||
            !Streaming.HasModelLoaded(ped`GANG_MAFIA_B`) ||
            !Streaming.HasModelLoaded(hier`cutobj01`) ||
            !Streaming.HasModelLoaded(hier`cutobj02`) ||
            !Streaming.HasModelLoaded(hier`cutobj03`)
        ) {
            await asyncWait(0)
        }

        while (!Streaming.HasModelLoaded(salvsdetail) || !Streaming.HasModelLoaded(swank_inside) || !Streaming.HasModelLoaded(franksclb02)) {
            await asyncWait(0)
        }

        if ($.maria_exists == 1) {
            // SCM GOSUB delete_char_maria
            await delete_char_maria()
            // fallback if label was not emitted as async function: no-op continues linearly
        }
        $.maria_exists = 0

        $.frankie_garage.changeType(19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */)
        $.frankie_garage.close()

        World.SwitchRubbish(false /* OFF */)
        World.ClearArea(1444.99, -186.9, 56.0, 35.0, true /* TRUE */)

        Cutscene.Load(S1_PF)

        Cutscene.SetOffset(1457.776, -185.348, 54.925)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)

        $.cs_player.setAnim($.player)

        $.cs_frankie = CutsceneObject.Create(ped`SPECIAL1`)

        $.cs_frankie.setAnim($.frankie)

        $.cs_maria = CutsceneObject.Create(ped`SPECIAL2`)

        $.cs_maria.setAnim($.maria)

        $.cs_mafia = CutsceneObject.Create(ped`GANG_MAFIA_B`)

        $.cs_mafia.setAnim(gang02)

        $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`)
        $.cs_playerhead.setAnim($.player)

        $.cs_frankiehead = CutsceneHead.Create($.cs_frankie, hier`cutobj02`)
        $.cs_frankiehead.setAnim(frank)

        $.cs_mariahead = CutsceneHead.Create($.cs_maria, hier`cutobj03`)
        $.cs_mariahead.setAnim($.maria)

        $.player.setCoordinates(1418.0, -186.0, -100.0)

        $.player.setHeading(270.0)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        //SWITCH_STREAMING ON

        Cutscene.Start()

        $.cs_time = Cutscene.GetTime()
        while ($.cs_time < 219) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_A', 15000, 1)
        while ($.cs_time < 1849) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_B', 15000, 1)
        while ($.cs_time < 4493) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_C', 15000, 1)
        while ($.cs_time < 7519) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_D', 15000, 1)
        while ($.cs_time < 10505) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_E', 15000, 1)
        while ($.cs_time < 14239) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_F', 15000, 1)
        while ($.cs_time < 15964) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_G', 15000, 1)
        while ($.cs_time < 18485) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_H', 15000, 1)
        while ($.cs_time < 21608) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_I', 15000, 1)
        while ($.cs_time < 24863) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_J', 15000, 1)
        while ($.cs_time < 28287) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_K', 15000, 1)
        while ($.cs_time < 31451) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_L', 15000, 1)
        while ($.cs_time < 34679) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_M', 15000, 1)
        while ($.cs_time < 36802) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_N', 15000, 1)
        while ($.cs_time < 39747) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM1_O', 15000, 1)
        while ($.cs_time < 43500) {
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

        $.player.setCoordinates(1418.0, -186.0, -100.0)

        Cutscene.Clear()

        Camera.DoFade(0, 0 /* FADE_OUT */)

        Streaming.UnloadSpecialCharacter(1)
        Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_B`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`)
        Streaming.MarkModelAsNoLongerNeeded(salvsdetail)
        Streaming.MarkModelAsNoLongerNeeded(swank_inside)
        Streaming.MarkModelAsNoLongerNeeded(franksclb02)

        Streaming.RequestModel(car`STRETCH`)
        Streaming.RequestModel(ped`CRIMINAL1`)

        World.ClearArea(1444.99, -186.9, 56.0, 35.0, true /* TRUE */)

        World.SwitchRubbish(true /* ON */)

        Streaming.LoadAllModelsNow()

        while (!Streaming.HasModelLoaded(car`STRETCH`) || !Streaming.HasModelLoaded(ped`CRIMINAL1`)) {
            await asyncWait(0)
        }

        $.frankies_limo = Car.Create(92 /* CAR_STRETCH */, 1436.0, -183.0, 50.0)
        Audio.SetRadioChannel(3, -1)
        $.frankies_limo.setHeading(90.0)
        $.frankies_limo.changeColor(0, 0) // FRANKIES LIMO NEEDS A UNIQUE COLOUR
        $.frankies_limo.setStrong(true /* TRUE */)
        $.frankies_limo.setCanRespray(false /* FALSE */)

        $.player.setControl(false /* OFF */)
        Hud.SwitchWidescreen(true /* ON */)

        $.maria_exists = 1
        $.maria = Char.CreateAsPassenger($.frankies_limo, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1)
        $.maria.clearThreatSearch()
        $.maria.addArmor(100)
        $.maria.setCantBeDraggedOut(true /* TRUE */)
        $.maria.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */)

        if (!$.maria.isInCar($.frankies_limo)) {
            $.maria.setObjEnterCarAsPassenger($.frankies_limo)
        }

        $.chico = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`CRIMINAL1`, 770.2257, -565.9869, 13.8)
        $.chico.setHeading(265.2053)
        $.chico.clearThreatSearch()
        $.chico.setIdle()
        $.chico.setStayInSamePlace(true /* TRUE */)

        Path.SwitchPedRoadsOff(759.0, -616.0, 11.0, 782.0, -536.0, 26.0)

        $.camera_mode = Math.RandomIntInRange(0, 4)

        if ($.camera_mode < 1) {
            Camera.SetFixedPosition(1405.736, -190.179, 62.455, 0.0, 0.0, 0.0)
            Camera.PointAtPoint(1427.2837, -183.5375, 49.4573, 2 /* JUMP_CUT */)
        }

        if ($.camera_mode == 1) {
            Camera.SetFixedPosition(1425.685, -178.463, 50.184, 0.0, 0.0, 0.0)
            Camera.PointAtCar($.frankies_limo, 15 /* FIXED */, 2 /* JUMP_CUT */)
        }

        if ($.camera_mode == 2) {
            Camera.SetFixedPosition(1432.161, -179.705, 50.643, 0.0, 0.0, 0.0)
            Camera.PointAtCar($.frankies_limo, 15 /* FIXED */, 2 /* JUMP_CUT */)
        }

        if ($.camera_mode > 2) {
            Camera.SetFixedPosition(1421.134, -193.771, 63.916, 0.0, 0.0, 0.0)
            Camera.PointAtCar($.frankies_limo, 15 /* FIXED */, 2 /* JUMP_CUT */)
        }

        $.player.warpIntoCar($.frankies_limo)

        Camera.DoFade(0, 0 /* FADE_OUT */)

        const _res227 = $.chico.getCoordinates()
        $.chico_x = _res227.x
        $.chico_y = _res227.y
        $.chico_z = _res227.z

        $.fm1_blip = Blip.AddForCoord(775.5, -557.3, 14.0)

        Streaming.RequestModel(ped`GANG_MAFIA_A`)
        Streaming.RequestModel(car`SENTINEL`)
        Streaming.RequestModel(car`CHEETAH`)
        Streaming.RequestModel(car`MANANA`)

        Streaming.LoadAllModelsNow()

        while (
            !Streaming.HasModelLoaded(ped`GANG_MAFIA_A`) ||
            !Streaming.HasModelLoaded(car`SENTINEL`) ||
            !Streaming.HasModelLoaded(car`CHEETAH`) ||
            !Streaming.HasModelLoaded(car`MANANA`)
        ) {
            await asyncWait(0)
        }

        Streaming.Switch(true /* ON */)

        if (Char.IsDead($.maria)) {
            Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
            // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
        }

        if (Car.IsDead($.frankies_limo)) {
            // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
        }

        if (!$.maria.isInCar($.frankies_limo)) {
            $.maria.setObjEnterCarAsPassenger($.frankies_limo)
        }

        Camera.DoFade(1500, 1 /* FADE_IN */)

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        if (Char.IsDead($.maria)) {
            Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
            // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
        }

        if (Car.IsDead($.frankies_limo)) {
            // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
        }

        if (!$.maria.isInCar($.frankies_limo)) {
            $.maria.setObjEnterCarAsPassenger($.frankies_limo)
        }

        $.frankie_garage.changeType(19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */)
        $.frankie_garage.open()
        $.frankies_limo.gotoCoordinatesAccurate(1416.1118, -189.4448, 49.5264)

        while (!$.frankies_limo.locate2D(1420.5, -189.1, 3.0, 3.0, false)) {
            await asyncWait(0)
            if (Car.IsDead($.frankies_limo)) {
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
        }

        $.frankie_garage.close()
        $.player.applyBrakesToCar(true /* ON */)

        if (Char.IsDead($.maria)) {
            Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
            // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
        }

        Camera.SetInFrontOfPlayer()
        Camera.RestoreJumpcut()
        $.player.setControl(true /* ON */)
        $.frankies_limo.setStatus(0 /* STATUS_PLAYER */)
        Hud.SwitchWidescreen(false /* OFF */)

        $.locate_dome_flag = 1

        Streaming.RequestModel(car`ENFORCER`)
        Streaming.RequestModel(ped`SWAT`)
        Streaming.RequestModel(ped`P_MAN1`)
        Streaming.RequestModel(ped`FEMALE1`)
        Streaming.RequestModel(ped`FEMALE2`)

        //WHILE NOT LOCATE_STOPPED_CHAR_IN_CAR_2D maria chico_x chico_y 10.0 10.0 0

        while (!$.maria.locateStoppedInCar3D(775.5, -557.3, 14.0, 3.0, 3.0, 2.0, $.locate_dome_flag)) {
            await asyncWait(0)
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Char.IsDead($.chico)) {
                Text.PrintNow('FM1_8', 5000, 1) // "You killed Chico!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (!$.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 0) {
                $.locate_dome_flag = 0
                $.fm1_blip.remove()
                $.fm1_blip = Blip.AddForCar($.frankies_limo)
                Text.PrintNow('FM1_1', 5000, 1) //"Get back into the limo!"
                $.flag_blip_on_limo = 1
            }
            if ($.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
                $.locate_dome_flag = 1
                $.fm1_blip.remove()
                $.fm1_blip = Blip.AddForChar($.chico)
                $.flag_blip_on_limo = 0
            }
            const _res228 = $.chico.getCoordinates()
            $.chico_x = _res228.x
            $.chico_y = _res228.y
            $.chico_z = _res228.z
            if ($.player.locateInCar2D($.chico_x, $.chico_y, 30.0, 30.0, false) && $.chico_message_flag == 0) {
                Text.PrintNow('FM1_P', 5000, 1) //THATS CHICO OVER THERE, STOP NEXT TO HIM AND I'LL GET OUT
                $.chico_message_flag = 1
            }
            if ($.chico_message_flag == 1 && !$.player.locateInCar2D($.chico_x, $.chico_y, 30.0, 30.0, false)) {
                Text.PrintNow('FM1_6', 5000, 1) //WHERE ARE YOU GOING, I WANT TO SEE CHICO
                $.chico_message_flag = 0
            }
        }

        $.player.setControl(false /* OFF */)
        Game.SetEveryoneIgnorePlayer($.player, true /* TRUE */)
        Hud.SwitchWidescreen(true /* ON */)
        //MAKE_PLAYER_SAFE player

        Game.SetAllCarsCanBeDamaged(false /* FALSE */)

        //SET_FIXED_CAMERA_POSITION 769.86 -569.95 14.462 0.0 0.0 0.0
        //POINT_CAMERA_AT_CHAR maria FIXED JUMP_CUT

        Camera.SetFixedPosition(770.7659, -569.9462, 14.3248, 0.0, 0.0, 0.0)
        Camera.PointAtPoint(770.7453, -568.9474, 14.4, 2 /* JUMP_CUT */)

        $.fm1_blip.remove()

        $.frankie_garage.close()

        $.maria.setObjLeaveCar($.frankies_limo)

        while ($.maria.isInAnyCar()) {
            await asyncWait(0)
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Char.IsDead($.chico)) {
                Text.PrintNow('FM1_8', 5000, 1) // "You killed Chico!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (!$.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 0) {
                $.fm1_blip = Blip.AddForCar($.frankies_limo)
                Text.PrintNow('FM1_1', 5000, 1) //"Get back into the limo!"
                $.flag_blip_on_limo = 1
            }
            if ($.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
                $.fm1_blip.remove()
                $.flag_blip_on_limo = 0
            }
            if (!$.player.locateAnyMeansChar2D($.maria, 20.0, 20.0, false)) {
                Text.PrintNow('FM1_3', 5000, 1) //COMEBACK
            }
        }

        $.maria.setObjGotoCharOnFoot($.chico)

        const _res229 = $.chico.getCoordinates()
        $.chico_x = _res229.x
        $.chico_y = _res229.y
        $.chico_z = _res229.z

        while (!$.maria.locateStoppedOnFoot2D($.chico_x, $.chico_y, 3.0, 3.0, false)) {
            await asyncWait(0)
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Char.IsDead($.chico)) {
                Text.PrintNow('FM1_8', 5000, 1) // "You killed Chico!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            const _res230 = $.chico.getCoordinates()
            $.chico_x = _res230.x
            $.chico_y = _res230.y
            $.chico_z = _res230.z
            if (!$.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 0) {
                $.fm1_blip = Blip.AddForCar($.frankies_limo)
                Text.PrintNow('FM1_1', 5000, 1) //"Get back into the limo!"
                $.flag_blip_on_limo = 1
            }
            if ($.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
                $.fm1_blip.remove()
                $.flag_blip_on_limo = 0
            }
            if (!$.player.locateAnyMeansChar2D($.maria, 20.0, 20.0, false)) {
                Text.PrintNow('FM1_3', 5000, 1) //COMEBACK
            }
        }

        Text.ClearSmallPrints()

        while (!($.chico_audio_flag == 15)) {
            await asyncWait(0)
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                Audio.ClearMissionAudio()
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                Audio.ClearMissionAudio()
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Char.IsDead($.chico)) {
                Text.PrintNow('FM1_8', 5000, 1) // "You killed Chico!"
                Audio.ClearMissionAudio()
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if ($.skip_cutscene_flag == 0) {
                if (!Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                    $.skip_cutscene_flag = 1
                }
            }
            if ($.skip_cutscene_flag == 1) {
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                    $.skip_cutscene_flag = 2
                }
            }
            if ($.skip_cutscene_flag == 2) {
                if (!Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                    Audio.ClearMissionAudio()
                    Audio.LoadMissionAudio(S1_F)
                    $.chico.setWaitState(0 /* WAITSTATE_FALSE */, 100)
                    $.maria.setWaitState(0 /* WAITSTATE_FALSE */, 100)
                    $.chico_audio_flag = 15
                    $.skip_cutscene_flag = 3
                }
            }
            if ($.chico_audio_flag == 0) {
                $.chico.turnToFaceChar($.maria)
                $.maria.turnToFaceChar($.chico)
                Audio.LoadMissionAudio(S1_A)
                $.chico_audio_flag = 1
            }
            if ($.chico_audio_flag == 14) {
                if (Audio.HasMissionAudioFinished()) {
                    Audio.LoadMissionAudio(S1_F)
                    $.chico.setWaitState(0 /* WAITSTATE_FALSE */, 100)
                    $.chico_audio_flag = 15
                }
            }
            if ($.chico_audio_flag == 13) {
                if (Audio.HasMissionAudioLoaded()) {
                    const _res231 = $.chico.getCoordinates()
                    $.chico_x = _res231.x
                    $.chico_y = _res231.y
                    $.chico_z = _res231.z
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_U', 2000, 1) //"Ciao baby."
                    $.chico.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000)
                    $.chico_audio_flag = 14
                }
            }
            if ($.chico_audio_flag == 12) {
                if (Audio.HasMissionAudioFinished()) {
                    $.chico.turnToFaceChar($.maria)
                    $.maria.turnToFaceChar($.chico)
                    Audio.LoadMissionAudio(S1_E)
                    $.maria.setWaitState(0 /* WAITSTATE_FALSE */, 100)
                    $.chico_audio_flag = 13
                }
            }
            if ($.chico_audio_flag == 11) {
                if (Audio.HasMissionAudioLoaded()) {
                    const _res232 = $.maria.getCoordinates()
                    $.chico_x = _res232.x
                    $.chico_y = _res232.y
                    $.chico_z = _res232.z
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_T', 4000, 2) //"Thanks for the tip. C'mon, let's go party. See you around Chico."
                    $.maria.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000)
                    $.chico_audio_flag = 12
                }
            }
            if ($.chico_audio_flag == 10) {
                if (Audio.HasMissionAudioFinished()) {
                    $.chico.turnToFaceChar($.maria)
                    $.maria.turnToFaceChar($.chico)
                    Audio.LoadMissionAudio(S1_D)
                    $.chico.setWaitState(0 /* WAITSTATE_FALSE */, 100)
                    $.chico_audio_flag = 11
                }
            }
            if ($.chico_audio_flag == 9) {
                if (Audio.HasMissionAudioLoaded()) {
                    const _res233 = $.chico.getCoordinates()
                    $.chico_x = _res233.x
                    $.chico_y = _res233.y
                    $.chico_z = _res233.z
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_S1', 15000, 2) //"You should check out the warehouse party going down at the North end of Portland Harbour."
                    $.chico_audio_flag = 10
                }
            }
            if ($.chico_audio_flag == 8) {
                if (Audio.HasMissionAudioFinished()) {
                    $.chico.turnToFaceChar($.maria)
                    $.maria.turnToFaceChar($.chico)
                    Audio.LoadMissionAudio(S1_C1)
                    $.chico_audio_flag = 9
                }
            }
            if ($.chico_audio_flag == 7) {
                if (Audio.HasMissionAudioLoaded()) {
                    const _res234 = $.chico.getCoordinates()
                    $.chico_x = _res234.x
                    $.chico_y = _res234.y
                    $.chico_z = _res234.z
                    $.chico.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000)
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_S', 5000, 2) //"Here you go lady"
                    $.chico_audio_flag = 8
                }
            }
            if ($.chico_audio_flag == 6) {
                if (Audio.HasMissionAudioFinished()) {
                    $.chico.turnToFaceChar($.maria)
                    $.maria.turnToFaceChar($.chico)
                    Audio.LoadMissionAudio(S1_C)
                    $.maria.setWaitState(0 /* WAITSTATE_FALSE */, 100)
                    $.chico_audio_flag = 7
                }
            }
            if ($.chico_audio_flag == 5) {
                if (Audio.HasMissionAudioLoaded()) {
                    const _res235 = $.maria.getCoordinates()
                    $.chico_x = _res235.x
                    $.chico_y = _res235.y
                    $.chico_z = _res235.z
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_R', 6000, 2) //"Hi Chico. Yeah just the usual."
                    $.maria.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000)
                    $.chico_audio_flag = 6
                }
            }
            if ($.chico_audio_flag == 4) {
                if (Audio.HasMissionAudioFinished()) {
                    $.chico.turnToFaceChar($.maria)
                    $.maria.turnToFaceChar($.chico)
                    Audio.LoadMissionAudio(S1_B)
                    $.chico.setWaitState(0 /* WAITSTATE_FALSE */, 100)
                    $.chico_audio_flag = 5
                }
            }
            if ($.chico_audio_flag == 3) {
                if (Audio.HasMissionAudioLoaded()) {
                    const _res236 = $.chico.getCoordinates()
                    $.chico_x = _res236.x
                    $.chico_y = _res236.y
                    $.chico_z = _res236.z
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_Q1', 6000, 2) //"You looking for some spank?"
                    $.chico_audio_flag = 4
                }
            }
            if ($.chico_audio_flag == 2) {
                if (Audio.HasMissionAudioFinished()) {
                    $.chico.turnToFaceChar($.maria)
                    $.maria.turnToFaceChar($.chico)
                    Audio.LoadMissionAudio(S1_A1)
                    $.chico_audio_flag = 3
                }
            }
            if ($.chico_audio_flag == 1) {
                if (Audio.HasMissionAudioLoaded()) {
                    const _res237 = $.chico.getCoordinates()
                    $.chico_x = _res237.x
                    $.chico_y = _res237.y
                    $.chico_z = _res237.z
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_Q', 6000, 2) //"Hey it's my favourite lady!"
                    $.chico.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000)
                    $.chico_audio_flag = 2
                }
            }
        }
    }

    async function maria_getting_into_car() {
        if (Char.IsDead($.maria)) {
            Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
            // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
        }

        if (Car.IsDead($.frankies_limo)) {
            Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
            // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
        }

        Text.ClearSmallPrints()
        $.maria.setObjEnterCarAsPassenger($.frankies_limo)
        $.maria.setRunning(true /* TRUE */)

        $.chico.markAsNoLongerNeeded()

        Path.SwitchPedRoadsOn(759.0, -616.0, 11.0, 782.0, -536.0, 26.0)

        while (!$.maria.isInCar($.frankies_limo)) {
            await asyncWait(0)
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
        }

        if ($.flag_player_on_mission == 0) {
            $.fm1_blip = Blip.AddForCar($.frankies_limo)
            $.maria_blip = Blip.AddForChar($.maria)
        }

        $.player.setControl(true /* ON */)
        Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
        Hud.SwitchWidescreen(false /* OFF */)
        Game.SetAllCarsCanBeDamaged(true /* TRUE */)
        $.maria.setRunning(false /* FALSE */)

        Camera.RestoreJumpcut()
        Camera.SetInFrontOfPlayer()

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0)
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
        }

        Audio.PlayMissionAudio()

        Text.PrintNow('FM1_V', 5000, 1) //"C'mon Fido, let's go check out this party!"

        $.fm1_blip.remove()
        $.maria_blip.remove()
        $.fm1_blip = Blip.AddForCoord(1256.6, -1099.3, -11.7)

        $.doorman1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, 1267.73, -1109.24, 11.0)
        $.doorman1.setHeading(90.0)
        $.doorman1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
        $.doorman1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
        $.doorman1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 99)
        $.doorman1.setObjWaitOnFoot()
        $.doorman1.setHeedThreats(true /* TRUE */)

        $.doorman2 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, 1267.73, -1105.62, 11.0)
        $.doorman2.setHeading(90.0)
        $.doorman2.setThreatSearch(13 /* THREAT_GANG_HOOD */)
        $.doorman2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
        $.doorman2.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 99)
        $.doorman2.setObjWaitOnFoot()
        $.doorman2.setHeedThreats(true /* TRUE */)

        $.parked_car1 = Car.Create(88 /* CAR_SENTINEL */, 1243.0, -1112.0, 11.0)
        $.parked_car2 = Car.Create(98 /* CAR_CHEETAH */, 1247.0, -1112.0, 11.0)
        $.parked_car3 = Car.Create(93 /* CAR_MANANA */, 1251.0, -1112.0, 11.0)

        /////////////CLUB STUFF////

        Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1270.843, -1107.7288, 11.1079, 0.0, 1.0, 0, 255, 0, 0) // ShadowType X Y Z Rotation Scale Transparency Red Green Blue
        Fx.DrawLight(1273.1917, -1107.3098, 11.1079, 255, 0, 0)
        $.warehouse_rave_loop = Sound.AddContinuous(1269.7494, -1100.4137, 14.0, 73 /* SOUND_RAVE_LOOP_INDUSTRIAL_L */)
        Fx.AddParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, 1273.0, -1107.2, 10.7, false)
        Fx.AddParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, 1273.0522, -1107.2312, 10.7, false)
        Fx.AddParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, 1273.1, -1107.1, 10.7, false)
        Fx.AddParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, 1273.2, -1107.0, 10.7, false)
        Fx.AddParticleEffect(3 /* POBJECT_WALL_STEAM_SLOWMOTION */, 1270.0, -1107.35, 10.8, false)
        Fx.AddParticleEffect(1 /* POBJECT_PAVEMENT_STEAM_SLOWMOTION */, 1271.5223, -1107.5471, 10.6, false)
        $.add_sound_flag = 1
        $.locate_dome_flag = 1
        $.chico_message_flag = 0
        $.flag_blip_on_limo = 0

        ///////////////////////////

        while (!$.maria.locateStoppedInCar2D(1259.041, -1107.7825, 3.0, 3.0, $.locate_dome_flag)) {
            await asyncWait(0)
            // SCM GOSUB draw_disco_lights
            await draw_disco_lights()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if ($.chico_message_flag == 0) {
                if ($.maria.locateAnyMeans2D(1258.0, -1100.0, 50.0, 50.0, false)) {
                    Text.PrintNow('FM1_9', 5000, 1) //"Thats the club up ahead"
                    $.chico_message_flag = 1
                }
            }
            if (!$.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 0) {
                $.fm1_blip.remove()
                $.fm1_blip = Blip.AddForCar($.frankies_limo)
                Text.PrintNow('FM1_1', 5000, 1) //"Get back into the limo!"
                $.locate_dome_flag = 0
                $.flag_blip_on_limo = 1
            }
            if ($.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
                $.fm1_blip.remove()
                $.fm1_blip = Blip.AddForCoord(1262.1, -1099.4, -100.0)
                $.locate_dome_flag = 1
                $.flag_blip_on_limo = 0
            }
            if ($.chico_audio_flag == 16) {
                if (Audio.HasMissionAudioLoaded()) {
                    $.chico_audio_flag = 17
                }
            }
            if ($.chico_audio_flag == 15) {
                if (Audio.HasMissionAudioFinished()) {
                    Audio.LoadMissionAudio(S1_G)
                    $.chico_audio_flag = 16
                }
            }
        }

        if (!($.chico_audio_flag == 17)) {
            await asyncWait(0)
            while (!Audio.HasMissionAudioLoaded()) {
                await asyncWait(0)
                if (Char.IsDead($.maria)) {
                    Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
                }
                if (Car.IsDead($.frankies_limo)) {
                    Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
                }
            }
            $.chico_audio_flag = 17
        }

        const _res238 = $.maria.getCoordinates()
        $.chico_x = _res238.x
        $.chico_y = _res238.y
        $.chico_z = _res238.z
        Audio.PlayMissionAudio()

        $.player.setControl(false /* OFF */)
        Game.SetEveryoneIgnorePlayer($.player, true /* TRUE */)
        Game.SetAllCarsCanBeDamaged(false /* FALSE */)

        Text.PrintNow('FM1_W', 5000, 1) //"OK Fido, you wait here and look after the car while I go and shake my butt."

        await asyncWait(0)

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0)
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
        }

        $.player.setControl(true /* ON */)
        Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
        Game.SetAllCarsCanBeDamaged(true /* TRUE */)

        $.maria.setObjLeaveCar($.frankies_limo)

        while ($.maria.isInCar($.frankies_limo)) {
            await asyncWait(0)
            // SCM GOSUB draw_disco_lights
            await draw_disco_lights()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if ($.chico_audio_flag == 17) {
                if (Audio.HasMissionAudioFinished()) {
                    Audio.LoadMissionAudio(S1_H)
                    $.chico_audio_flag = 18
                }
            }
        }

        $.maria.setObjGotoCoordOnFoot(1266.85, -1107.65)
        TIMERA = 0

        while (!$.maria.locateOnFoot2D(1266.85, -1107.65, 1.0, 1.0, false)) {
            await asyncWait(0)
            // SCM GOSUB draw_disco_lights
            await draw_disco_lights()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (TIMERA > 20000) {
                World.ClearArea(1267.665, -1107.569, 11.38, 3.0, false /* FALSE */)
            }
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if ($.chico_audio_flag == 17) {
                if (Audio.HasMissionAudioFinished()) {
                    Audio.LoadMissionAudio(S1_H)
                    $.chico_audio_flag = 18
                }
            }
        }

        $.maria.setObjGotoCoordOnFoot($.inside_warehouse_x, $.inside_warehouse_y)

        while (!$.maria.locateOnFoot2D($.inside_warehouse_x, $.inside_warehouse_y, 1.0, 1.0, false)) {
            await asyncWait(0)
            // SCM GOSUB draw_disco_lights
            await draw_disco_lights()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (TIMERA > 20000) {
                World.ClearArea(1267.665, -1107.569, 11.38, 4.0, false /* FALSE */)
            }
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if ($.chico_audio_flag == 17) {
                if (Audio.HasMissionAudioFinished()) {
                    Audio.LoadMissionAudio(S1_H)
                    $.chico_audio_flag = 18
                }
            }
        }

        $.maria_exists = 0
        $.maria.delete()
    }

    async function wait_for_maria() {
        // SCM GOTO → wait_for_maria lowered to endless loop
        while (true) {
            await asyncWait(0)

            // SCM GOSUB draw_disco_lights
            await draw_disco_lights()
            // fallback if label was not emitted as async function: no-op continues linearly

            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }

            TIMERA = 0

            while ($.player.locateAnyMeans2D(1262.1, -1099.4, 22.0, 22.0, false)) {
                await asyncWait(0)
                // SCM GOSUB draw_disco_lights
                await draw_disco_lights()
                // fallback if label was not emitted as async function: no-op continues linearly
                if (TIMERA > 10000) {
                    // SCM GOTO → club_busted (not lowered; manual jump required)
                    throw new Error('unresolved GOTO club_busted') // fallback: would break linear control flow
                }
                if (Car.IsDead($.frankies_limo)) {
                    Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
                }
                if ($.chico_audio_flag == 17) {
                    if (Audio.HasMissionAudioFinished()) {
                        Audio.LoadMissionAudio(S1_H)
                        $.chico_audio_flag = 18
                    }
                }
            }

            Text.PrintNow('FM1_4', 500, 2) //You're supposed to be waiting for Maria! Get back to the warehouse!
        }
    }

    async function club_busted() {
        while (
            !Streaming.HasModelLoaded(car`ENFORCER`) ||
            !Streaming.HasModelLoaded(ped`SWAT`) ||
            !Streaming.HasModelLoaded(ped`P_MAN1`) ||
            !Streaming.HasModelLoaded(ped`FEMALE1`) ||
            !Streaming.HasModelLoaded(ped`FEMALE2`)
        ) {
            await asyncWait(0)
        }
    }

    async function swat_car_one() {
        $.swatvan_fm1 = Car.Create(110 /* CAR_ENFORCER */, 1293.0, -925.0, -100.0)
        $.swatvan_fm1.setHeading(225.0)
        $.swatvan_fm1.setCruiseSpeed(40.0)
        $.swatvan_fm1.setDrivingStyle(2)
        $.swatvan_fm1.switchSiren(true /* ON */)
        $.swatvan_fm1.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */)

        $.cop1_fm1 = Char.CreateInsideCar($.swatvan_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`)
        $.cop1_fm1.setThreatSearch(7 /* THREAT_GANG_MAFIA */)
        $.cop1_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
        $.cop1_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 99)

        $.cop2_fm1 = Char.CreateAsPassenger($.swatvan_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 0)
        $.cop2_fm1.setThreatSearch(7 /* THREAT_GANG_MAFIA */)
        $.cop2_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
        $.cop2_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 99)

        $.cop3_fm1 = Char.CreateAsPassenger($.swatvan_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 1)
        $.cop3_fm1.setThreatSearch(7 /* THREAT_GANG_MAFIA */)
        $.cop3_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
        $.cop3_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 99)

        $.cop4_fm1 = Char.CreateAsPassenger($.swatvan_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 2)
        $.cop4_fm1.setThreatSearch(7 /* THREAT_GANG_MAFIA */)
        $.cop4_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
        $.cop4_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 99)

        $.swatvan_fm1.gotoCoordinates(1252.0, -1086.0, -100.0)

        if ($.create_more_swat1 == 1) {
            $.create_more_swat1 = 0
            return
        }
    }

    async function swat_car_two() {
        $.swatvan2_fm1 = Car.Create(110 /* CAR_ENFORCER */, 1084.0, -1012.0, -100.0)
        $.swatvan2_fm1.setHeading(180.0)
        $.swatvan2_fm1.setCruiseSpeed(40.0)
        $.swatvan2_fm1.setDrivingStyle(2)
        $.swatvan2_fm1.switchSiren(true /* ON */)
        $.swatvan2_fm1.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */)

        $.cop5_fm1 = Char.CreateInsideCar($.swatvan2_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`)
        $.cop5_fm1.setThreatSearch(7 /* THREAT_GANG_MAFIA */)
        $.cop5_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
        $.cop5_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 99)

        $.cop6_fm1 = Char.CreateAsPassenger($.swatvan2_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 0)
        $.cop6_fm1.setThreatSearch(7 /* THREAT_GANG_MAFIA */)
        $.cop6_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
        $.cop6_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 99)

        $.cop7_fm1 = Char.CreateAsPassenger($.swatvan2_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 1)
        $.cop7_fm1.setThreatSearch(7 /* THREAT_GANG_MAFIA */)
        $.cop7_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
        $.cop7_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 99)

        $.cop8_fm1 = Char.CreateAsPassenger($.swatvan2_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 2)
        $.cop8_fm1.setThreatSearch(7 /* THREAT_GANG_MAFIA */)
        $.cop8_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
        $.cop8_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 99)

        $.swatvan2_fm1.gotoCoordinates(1235.0, -1099.0, -100.0)

        $.player.setControl(false /* OFF */)
        Game.SetEveryoneIgnorePlayer($.player, true /* TRUE */)
        Hud.SwitchWidescreen(true /* ON */)
        Game.SetAllCarsCanBeDamaged(false /* FALSE */)
        Camera.SetFixedPosition(1309.913, -1061.354, 15.691, 0.0, 0.0, 0.0)
        Camera.PointAtCar($.swatvan_fm1, 15 /* FIXED */, 2 /* JUMP_CUT */)
        Camera.SetGenerateCarsAround(true /* TRUE */)
        $.swat_cam_needs_restoring = 1

        if ($.create_more_swat2 == 1) {
            $.create_more_swat2 = 0
            return
        }

        if (!($.chico_audio_flag == 18)) {
            while (!Audio.HasMissionAudioFinished()) {
                await asyncWait(0)
                if (Car.IsDead($.frankies_limo)) {
                    Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
                }
            }
            Audio.LoadMissionAudio(S1_H)
            $.chico_audio_flag = 18
        }

        await asyncWait(0)

        if ($.chico_audio_flag == 18) {
            while (!Audio.HasMissionAudioLoaded()) {
                await asyncWait(0)
                if (Car.IsDead($.frankies_limo)) {
                    Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
                }
            }
            $.chico_audio_flag = 19
        }

        Audio.PlayMissionAudio()
        Text.PrintNow('FM1_SS', 4000, 2) //"Calling all cars, request back-up for narcotics raid. Warehouse party Portland Harbour East."

        while ($.swat1_exit_car == 0 || $.swat2_exit_car == 0) {
            await asyncWait(0)
            if ($.fuckup_flag == 0) {
                $.fuckup_timer_start = Clock.GetGameTimer()
                $.fuckup_flag = 1
            }
            if ($.fuckup_flag == 1) {
                $.fuckup_timer_current = Clock.GetGameTimer()
                $.fuckup_timer = $.fuckup_timer_current - $.fuckup_timer_start
                if ($.fuckup_timer > 180000) {
                    $.swat1_exit_car = 1
                    $.swat2_exit_car = 1
                    if ($.swat_cam_needs_restoring == 1) {
                        Camera.SetBehindPlayer()
                        Camera.RestoreJumpcut()
                        $.player.setControl(true /* ON */)
                        Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
                        Hud.SwitchWidescreen(false /* OFF */)
                        Game.SetAllCarsCanBeDamaged(true /* TRUE */)
                        Camera.SetGenerateCarsAround(false /* FALSE */)
                        $.swat_cam_needs_restoring = 0
                    }
                    $.fuckup_flag = 2
                }
            }
            // SCM GOSUB draw_disco_lights
            await draw_disco_lights()
            // fallback if label was not emitted as async function: no-op continues linearly
            if ($.chico_audio_flag == 20) {
                if (Audio.HasMissionAudioLoaded()) {
                    $.chico_audio_flag = 21
                }
            }
            if ($.chico_audio_flag == 19) {
                if (Audio.HasMissionAudioFinished()) {
                    Audio.LoadMissionAudio(S1_I)
                    $.chico_audio_flag = 20
                }
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.swatvan_fm1)) {
                $.swatvan_fm1.markAsNoLongerNeeded()
                $.cop1_fm1.markAsNoLongerNeeded()
                $.cop2_fm1.markAsNoLongerNeeded()
                $.cop3_fm1.markAsNoLongerNeeded()
                $.cop4_fm1.markAsNoLongerNeeded()
                $.create_more_swat1 = 1
                // SCM GOSUB swat_car_one
                await swat_car_one()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if ($.swatvan_fm1.isUpsidedown() && $.swatvan_fm1.isStopped()) {
                $.swatvan_fm1.markAsNoLongerNeeded()
                $.cop1_fm1.markAsNoLongerNeeded()
                $.cop2_fm1.markAsNoLongerNeeded()
                $.cop3_fm1.markAsNoLongerNeeded()
                $.cop4_fm1.markAsNoLongerNeeded()
                $.create_more_swat1 = 1
                // SCM GOSUB swat_car_one
                await swat_car_one()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if ($.swatvan_fm1.isInWater()) {
                $.swatvan_fm1.markAsNoLongerNeeded()
                $.cop1_fm1.markAsNoLongerNeeded()
                $.cop2_fm1.markAsNoLongerNeeded()
                $.cop3_fm1.markAsNoLongerNeeded()
                $.cop4_fm1.markAsNoLongerNeeded()
                $.create_more_swat1 = 1
                // SCM GOSUB swat_car_one
                await swat_car_one()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if ($.timera_reset == 1) {
                if (!$.swatvan_fm1.isStopped()) {
                    $.timera_reset = 0
                }
            }
            if ($.swatvan_fm1.isStopped()) {
                if ($.timera_reset == 0) {
                    TIMERA = 0
                    $.timera_reset = 1
                }
                if (TIMERA > 5000 && $.timera_reset == 1) {
                    $.swatvan_fm1.markAsNoLongerNeeded()
                    $.cop1_fm1.markAsNoLongerNeeded()
                    $.cop2_fm1.markAsNoLongerNeeded()
                    $.cop3_fm1.markAsNoLongerNeeded()
                    $.cop4_fm1.markAsNoLongerNeeded()
                    $.create_more_swat1 = 1
                    // SCM GOSUB swat_car_one
                    await swat_car_one()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
            }
            if ($.swatvan_fm1.locate3D($.swat1_stuck_x, $.swat1_stuck_y, $.swat1_stuck_z, 2.0, 2.0, 2.0, false)) {
                if ($.timerc_reset_flag_f1a == 0) {
                    $.timerc_started_f1a = Clock.GetGameTimer()
                    $.timerc_reset_flag_f1a = 1
                }
                if ($.timerc_reset_flag_f1a == 1) {
                    $.timerc_current_f1a = Clock.GetGameTimer()
                    $.timerc_f1a = $.timerc_current_f1a - $.timerc_started_f1a
                    if ($.timerc_f1a > 8000) {
                        $.swatvan_fm1.markAsNoLongerNeeded()
                        $.cop1_fm1.markAsNoLongerNeeded()
                        $.cop2_fm1.markAsNoLongerNeeded()
                        $.cop3_fm1.markAsNoLongerNeeded()
                        $.cop4_fm1.markAsNoLongerNeeded()
                        $.create_more_swat1 = 1
                        // SCM GOSUB swat_car_one
                        await swat_car_one()
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                }
            }
            if (!$.swatvan_fm1.locate3D($.swat1_stuck_x, $.swat1_stuck_y, $.swat1_stuck_z, 2.0, 2.0, 2.0, false)) {
                const _res239 = $.swatvan_fm1.getCoordinates()
                $.swat1_stuck_x = _res239.x
                $.swat1_stuck_y = _res239.y
                $.swat1_stuck_z = _res239.z
                $.timerc_reset_flag_f1a = 0
            }
            if (Car.IsDead($.swatvan2_fm1)) {
                $.swatvan2_fm1.markAsNoLongerNeeded()
                $.cop5_fm1.markAsNoLongerNeeded()
                $.cop6_fm1.markAsNoLongerNeeded()
                $.cop7_fm1.markAsNoLongerNeeded()
                $.cop8_fm1.markAsNoLongerNeeded()
                $.create_more_swat2 = 1
                // SCM GOSUB swat_car_two
                await swat_car_two()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if ($.swatvan2_fm1.isUpsidedown() && $.swatvan2_fm1.isStopped()) {
                $.swatvan2_fm1.markAsNoLongerNeeded()
                $.cop5_fm1.markAsNoLongerNeeded()
                $.cop6_fm1.markAsNoLongerNeeded()
                $.cop7_fm1.markAsNoLongerNeeded()
                $.cop8_fm1.markAsNoLongerNeeded()
                $.create_more_swat2 = 1
                // SCM GOSUB swat_car_two
                await swat_car_two()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if ($.swatvan2_fm1.isInWater()) {
                $.swatvan2_fm1.markAsNoLongerNeeded()
                $.cop5_fm1.markAsNoLongerNeeded()
                $.cop6_fm1.markAsNoLongerNeeded()
                $.cop7_fm1.markAsNoLongerNeeded()
                $.cop8_fm1.markAsNoLongerNeeded()
                $.create_more_swat2 = 1
                // SCM GOSUB swat_car_two
                await swat_car_two()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if ($.timerb_reset == 1) {
                if (!$.swatvan2_fm1.isStopped()) {
                    $.timerb_reset = 0
                }
            }
            if ($.swatvan2_fm1.isStopped()) {
                if ($.timerb_reset == 0) {
                    TIMERB = 0
                    $.timerb_reset = 1
                }
                if (TIMERB > 5000 && $.timerb_reset == 1) {
                    $.swatvan2_fm1.markAsNoLongerNeeded()
                    $.cop5_fm1.markAsNoLongerNeeded()
                    $.cop6_fm1.markAsNoLongerNeeded()
                    $.cop7_fm1.markAsNoLongerNeeded()
                    $.cop8_fm1.markAsNoLongerNeeded()
                    $.create_more_swat2 = 1
                    // SCM GOSUB swat_car_two
                    await swat_car_two()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
            }
            if ($.swatvan2_fm1.locate3D($.swat2_stuck_x, $.swat2_stuck_y, $.swat2_stuck_z, 2.0, 2.0, 2.0, false)) {
                if ($.timerc_reset_flag_f1b == 0) {
                    $.timerc_started_f1b = Clock.GetGameTimer()
                    $.timerc_reset_flag_f1b = 1
                }
                if ($.timerc_reset_flag_f1b == 1) {
                    $.timerc_current_f1b = Clock.GetGameTimer()
                    $.timerc_f1b = $.timerc_current_f1b - $.timerc_started_f1b
                    if ($.timerc_f1b > 8000) {
                        $.swatvan2_fm1.markAsNoLongerNeeded()
                        $.cop5_fm1.markAsNoLongerNeeded()
                        $.cop6_fm1.markAsNoLongerNeeded()
                        $.cop7_fm1.markAsNoLongerNeeded()
                        $.cop8_fm1.markAsNoLongerNeeded()
                        $.create_more_swat2 = 1
                        // SCM GOSUB swat_car_two
                        await swat_car_two()
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                }
            }
            if (!$.swatvan2_fm1.locate3D($.swat2_stuck_x, $.swat2_stuck_y, $.swat2_stuck_z, 2.0, 2.0, 2.0, false)) {
                const _res240 = $.swatvan2_fm1.getCoordinates()
                $.swat2_stuck_x = _res240.x
                $.swat2_stuck_y = _res240.y
                $.swat2_stuck_z = _res240.z
                $.timerc_reset_flag_f1b = 0
            }
            if ($.swatvan_fm1.locate2D(1252.0, -1086.0, 8.0, 8.0, false) && $.swat1_exit_car == 0) {
                if ($.swat_cam_needs_restoring == 1) {
                    Camera.SetBehindPlayer()
                    Camera.RestoreJumpcut()
                    $.player.setControl(true /* ON */)
                    Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
                    Hud.SwitchWidescreen(false /* OFF */)
                    Game.SetAllCarsCanBeDamaged(true /* TRUE */)
                    Camera.SetGenerateCarsAround(false /* FALSE */)
                    $.swat_cam_needs_restoring = 0
                }
                if ($.chico_audio_flag == 21) {
                    if (!Char.IsDead($.doorman1)) {
                        const _res241 = $.doorman1.getCoordinates()
                        $.chico_x = _res241.x
                        $.chico_y = _res241.y
                        $.chico_z = _res241.z
                        Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z)
                    } else {
                        $.doorman1.markAsNoLongerNeeded()
                        if (!Char.IsDead($.doorman2)) {
                            const _res242 = $.doorman2.getCoordinates()
                            $.chico_x = _res242.x
                            $.chico_y = _res242.y
                            $.chico_z = _res242.z
                            Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z)
                        } else {
                            $.doorman2.markAsNoLongerNeeded()
                        }
                    }
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_TT', 5000, 1) //"IT'S A POLICE RAID! EVERYBODY FOR THEMSELVES!!"
                    $.chico_audio_flag = 22
                }
                $.swatvan_fm1.setCruiseSpeed(0.0)
                if (!Char.IsDead($.cop1_fm1)) {
                    $.cop1_fm1.setObjLeaveCar($.swatvan_fm1)
                    $.cop1_fm1.setHeedThreats(true /* TRUE */)
                } else {
                    $.cop1_fm1.markAsNoLongerNeeded()
                }
                if (!Char.IsDead($.cop2_fm1)) {
                    $.cop2_fm1.setObjLeaveCar($.swatvan_fm1)
                    $.cop2_fm1.setHeedThreats(true /* TRUE */)
                } else {
                    $.cop2_fm1.markAsNoLongerNeeded()
                }
                if (!Char.IsDead($.cop3_fm1)) {
                    $.cop3_fm1.setObjLeaveCar($.swatvan_fm1)
                    $.cop3_fm1.setHeedThreats(true /* TRUE */)
                } else {
                    $.cop3_fm1.markAsNoLongerNeeded()
                }
                if (!Char.IsDead($.cop4_fm1)) {
                    $.cop4_fm1.setObjLeaveCar($.swatvan_fm1)
                    $.cop4_fm1.setHeedThreats(true /* TRUE */)
                } else {
                    $.cop4_fm1.markAsNoLongerNeeded()
                }
                if (!Char.IsDead($.doorman2) && !Char.IsDead($.cop1_fm1)) {
                    $.doorman2.setObjKillCharOnFoot($.cop1_fm1)
                }
                $.swat1_exit_car = 1
            }
            if ($.swatvan2_fm1.locate2D(1235.0, -1099.0, 8.0, 8.0, false) && $.swat2_exit_car == 0) {
                if ($.swat_cam_needs_restoring == 1) {
                    Camera.RestoreJumpcut()
                    Camera.SetBehindPlayer()
                    $.player.setControl(true /* ON */)
                    Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
                    Hud.SwitchWidescreen(false /* OFF */)
                    Game.SetAllCarsCanBeDamaged(true /* TRUE */)
                    Camera.SetGenerateCarsAround(false /* FALSE */)
                    $.swat_cam_needs_restoring = 0
                }
                if ($.chico_audio_flag == 21) {
                    if (!Char.IsDead($.doorman1)) {
                        const _res243 = $.doorman1.getCoordinates()
                        $.chico_x = _res243.x
                        $.chico_y = _res243.y
                        $.chico_z = _res243.z
                        Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z)
                    } else {
                        if (!Char.IsDead($.doorman2)) {
                            const _res244 = $.doorman2.getCoordinates()
                            $.chico_x = _res244.x
                            $.chico_y = _res244.y
                            $.chico_z = _res244.z
                            Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z)
                        }
                    }
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_TT', 5000, 1) //"IT'S A POLICE RAID! EVERYBODY FOR THEMSELVES!!"
                    $.chico_audio_flag = 22
                }
                $.swatvan2_fm1.setCruiseSpeed(0.0)
                if (!Char.IsDead($.cop5_fm1)) {
                    $.cop5_fm1.setObjLeaveCar($.swatvan2_fm1)
                    $.cop5_fm1.setHeedThreats(true /* TRUE */)
                } else {
                    $.cop5_fm1.markAsNoLongerNeeded()
                }
                if (!Char.IsDead($.cop6_fm1)) {
                    $.cop6_fm1.setObjLeaveCar($.swatvan2_fm1)
                    $.cop6_fm1.setHeedThreats(true /* TRUE */)
                } else {
                    $.cop6_fm1.markAsNoLongerNeeded()
                }
                if (!Char.IsDead($.cop7_fm1)) {
                    $.cop7_fm1.setObjLeaveCar($.swatvan2_fm1)
                    $.cop7_fm1.setHeedThreats(true /* TRUE */)
                } else {
                    $.cop7_fm1.markAsNoLongerNeeded()
                }
                if (!Char.IsDead($.cop8_fm1)) {
                    $.cop8_fm1.setObjLeaveCar($.swatvan2_fm1)
                    $.cop8_fm1.setHeedThreats(true /* TRUE */)
                } else {
                    $.cop8_fm1.markAsNoLongerNeeded()
                }
                if (!Char.IsDead($.doorman1) && !Char.IsDead($.cop5_fm1)) {
                    $.doorman1.setObjKillCharOnFoot($.cop5_fm1)
                }
                $.swat2_exit_car = 1
            }
        }

        if ($.swat_cam_needs_restoring == 1) {
            Camera.SetBehindPlayer()
            Camera.RestoreJumpcut()
            $.player.setControl(true /* ON */)
            Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
            Hud.SwitchWidescreen(false /* OFF */)
            Game.SetAllCarsCanBeDamaged(true /* TRUE */)
            Camera.SetGenerateCarsAround(false /* FALSE */)
            $.swat_cam_needs_restoring = 0
        }

        while ($.clubbers_flee_flag < 10) {
            await asyncWait(0)
            // SCM GOSUB draw_disco_lights
            await draw_disco_lights()
            // fallback if label was not emitted as async function: no-op continues linearly
            if ($.chico_audio_flag == 23) {
                if (Audio.HasMissionAudioLoaded()) {
                    $.chico_audio_flag = 24
                }
            }
            if ($.chico_audio_flag == 22) {
                if (Audio.HasMissionAudioFinished()) {
                    Audio.LoadMissionAudio(S1_J)
                    $.chico_audio_flag = 23
                }
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if ($.clubbers_flee_flag == 0) {
                $.clubber1_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`P_MAN1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                $.clubber1_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                $.clubber1_fm1.giveWeapon(3 /* WEAPONTYPE_UZI */, 99)
                $.clubber1_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                $.clubber1_fm1.setRunning(true /* TRUE */)
                $.clubber1_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                $.clubbers_flee_flag = 1
            }
            if ($.clubbers_flee_flag == 1) {
                if (Char.IsDead($.clubber1_fm1)) {
                    $.clubber1_fm1.markAsNoLongerNeeded()
                    $.clubber2_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                    $.clubber2_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                    $.clubber2_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.clubber2_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                    $.clubber2_fm1.setRunning(true /* TRUE */)
                    $.clubber2_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                    $.clubbers_flee_flag = 2
                } else {
                    if (!$.clubber1_fm1.locateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, false)) {
                        $.clubber2_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                        $.clubber2_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                        $.clubber2_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                        $.clubber2_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.clubber2_fm1.setRunning(true /* TRUE */)
                        $.clubber2_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                        $.clubbers_flee_flag = 2
                    }
                }
            }
            if ($.clubbers_flee_flag == 2) {
                if (Char.IsDead($.clubber2_fm1)) {
                    $.clubber2_fm1.markAsNoLongerNeeded()
                    $.clubber3_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`CRIMINAL1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                    $.clubber3_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                    $.clubber3_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.clubber3_fm1.setRunning(true /* TRUE */)
                    $.clubber3_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                    $.clubber3_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                    $.clubbers_flee_flag = 3
                    $.clubber3_car1 = 1
                } else {
                    if (!$.clubber2_fm1.locateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, false)) {
                        $.clubber3_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`CRIMINAL1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                        $.clubber3_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                        $.clubber3_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.clubber3_fm1.setRunning(true /* TRUE */)
                        $.clubber3_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                        $.clubber3_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                        $.clubbers_flee_flag = 3
                        $.clubber3_car1 = 1
                    }
                }
            }
            if ($.clubbers_flee_flag == 3) {
                if (Char.IsDead($.clubber3_fm1)) {
                    $.clubber3_fm1.markAsNoLongerNeeded()
                    $.clubber4_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE2`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                    $.clubber4_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                    $.clubber4_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.clubber4_fm1.giveWeapon(3 /* WEAPONTYPE_UZI */, 99)
                    $.clubber4_fm1.setRunning(true /* TRUE */)
                    $.clubber4_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                    $.clubbers_flee_flag = 4
                } else {
                    if (!$.clubber3_fm1.locateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, false)) {
                        $.clubber4_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE2`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                        $.clubber4_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                        $.clubber4_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.clubber4_fm1.giveWeapon(3 /* WEAPONTYPE_UZI */, 99)
                        $.clubber4_fm1.setRunning(true /* TRUE */)
                        $.clubber4_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                        $.clubbers_flee_flag = 4
                    }
                }
            }
            if ($.clubbers_flee_flag == 4) {
                if (Char.IsDead($.clubber4_fm1)) {
                    $.clubber4_fm1.markAsNoLongerNeeded()
                    $.clubber5_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                    $.clubber5_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                    $.clubber5_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.clubber5_fm1.setRunning(true /* TRUE */)
                    $.clubber5_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                    $.clubber5_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                    $.clubbers_flee_flag = 5
                    $.clubber5_car2 = 1
                } else {
                    if (!$.clubber4_fm1.locateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, false)) {
                        $.clubber5_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                        $.clubber5_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                        $.clubber5_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.clubber5_fm1.setRunning(true /* TRUE */)
                        $.clubber5_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                        $.clubber5_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                        $.clubbers_flee_flag = 5
                        $.clubber5_car2 = 1
                    }
                }
            }
            if ($.clubbers_flee_flag == 5) {
                if (Char.IsDead($.clubber5_fm1)) {
                    $.clubber5_fm1.markAsNoLongerNeeded()
                    $.clubber6_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`CRIMINAL1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                    $.clubber6_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                    $.clubber6_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.clubber6_fm1.setRunning(true /* TRUE */)
                    $.clubber6_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                    $.clubber6_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                    $.clubbers_flee_flag = 6
                } else {
                    if (!$.clubber5_fm1.locateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, false)) {
                        $.clubber6_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`CRIMINAL1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                        $.clubber6_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                        $.clubber6_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.clubber6_fm1.setRunning(true /* TRUE */)
                        $.clubber6_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                        $.clubber6_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                        $.clubbers_flee_flag = 6
                    }
                }
            }
            if ($.clubbers_flee_flag == 6) {
                if (Char.IsDead($.clubber6_fm1)) {
                    $.clubber6_fm1.markAsNoLongerNeeded()
                    $.clubber7_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                    $.clubber7_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                    $.clubber7_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.clubber7_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                    $.clubber7_fm1.setRunning(true /* TRUE */)
                    $.clubber7_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                    $.clubbers_flee_flag = 7
                } else {
                    if (!$.clubber6_fm1.locateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, false)) {
                        $.clubber7_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                        $.clubber7_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                        $.clubber7_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.clubber7_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                        $.clubber7_fm1.setRunning(true /* TRUE */)
                        $.clubber7_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                        $.clubbers_flee_flag = 7
                    }
                }
            }
            if ($.clubbers_flee_flag == 7) {
                if (Char.IsDead($.clubber7_fm1)) {
                    $.clubber7_fm1.markAsNoLongerNeeded()
                    $.clubber8_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                    $.clubber8_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                    $.clubber8_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.clubber8_fm1.setRunning(true /* TRUE */)
                    $.clubber8_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                    $.clubber8_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                    $.clubbers_flee_flag = 8
                    $.clubber8_car3 = 1
                } else {
                    if (!$.clubber7_fm1.locateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, false)) {
                        $.clubber8_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                        $.clubber8_fm1.setThreatSearch(13 /* THREAT_GANG_HOOD */)
                        $.clubber8_fm1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.clubber8_fm1.setRunning(true /* TRUE */)
                        $.clubber8_fm1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 50)
                        $.clubber8_fm1.setObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y)
                        $.clubbers_flee_flag = 8
                        $.clubber8_car3 = 1
                    }
                }
            }
            if ($.clubbers_flee_flag == 8) {
                if (Char.IsDead($.clubber8_fm1)) {
                    $.clubber8_fm1.markAsNoLongerNeeded()
                    if ($.swat_cam_needs_restoring == 1) {
                        Camera.RestoreJumpcut()
                        Camera.SetBehindPlayer()
                        $.player.setControl(true /* ON */)
                        Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
                        Hud.SwitchWidescreen(false /* OFF */)
                        Game.SetAllCarsCanBeDamaged(true /* TRUE */)
                        Camera.SetGenerateCarsAround(false /* FALSE */)
                        $.swat_cam_needs_restoring = 0
                    }
                    $.maria_exists = 1
                    $.maria = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                    $.maria.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */)
                    $.maria.addArmor(100)
                    $.maria.clearThreatSearch()
                    $.fm1_blip.remove()
                    $.fm1_blip = Blip.AddForChar($.maria)
                    Text.PrintNow('FM1_5', 4000, 2) //"Get Maria out of there and back to Frankie's"
                    $.player.alterWantedLevelNoDrop(2)
                    $.maria.setRunning(true /* TRUE */)
                    const _res245 = $.player.getCoordinates()
                    $.chico_x = _res245.x
                    $.chico_y = _res245.y
                    $.chico_z = _res245.z
                    $.maria.setObjRunToCoord($.chico_x, $.chico_y)
                    $.clubbers_flee_flag = 9
                } else {
                    if (!$.clubber8_fm1.locateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, false)) {
                        if ($.swat_cam_needs_restoring == 1) {
                            Camera.RestoreJumpcut()
                            Camera.SetBehindPlayer()
                            $.player.setControl(true /* ON */)
                            Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
                            Hud.SwitchWidescreen(false /* OFF */)
                            Game.SetAllCarsCanBeDamaged(true /* TRUE */)
                            Camera.SetGenerateCarsAround(false /* FALSE */)
                            $.swat_cam_needs_restoring = 0
                        }
                        $.maria_exists = 1
                        $.maria = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z)
                        $.maria.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */)
                        $.maria.addArmor(100)
                        $.maria.clearThreatSearch()
                        $.fm1_blip.remove()
                        $.fm1_blip = Blip.AddForChar($.maria)
                        Text.PrintNow('FM1_5', 4000, 2) //"Get Maria out of there and back to Frankie's"
                        $.player.alterWantedLevelNoDrop(2)
                        $.maria.setRunning(true /* TRUE */)
                        const _res246 = $.player.getCoordinates()
                        $.chico_x = _res246.x
                        $.chico_y = _res246.y
                        $.chico_z = _res246.z
                        $.maria.setObjRunToCoord($.chico_x, $.chico_y)
                        $.clubbers_flee_flag = 9
                    }
                }
            }
            if ($.clubbers_flee_flag == 9) {
                if (Char.IsDead($.maria)) {
                    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
                } else {
                    $.maria.setObjGotoPlayerOnFoot($.player)
                    if ($.player.locateAnyMeansChar2D($.maria, 4.0, 4.0, false)) {
                        $.maria.followPlayer($.player)
                        $.fm1_blip.remove()
                        $.clubbers_flee_flag = 10
                    }
                }
            }
            if (!($.clubber3_car1 == 3) || !($.clubber5_car2 == 3) || !($.clubber8_car3 == 3)) {
                // SCM GOSUB clubbers_into_cars
                await clubbers_into_cars()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            // SCM GOSUB police_idle_checks
            await police_idle_checks()
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB clubber_idle_checks
            await clubber_idle_checks()
            // fallback if label was not emitted as async function: no-op continues linearly
            if ($.fuckup_flag == 2) {
                $.swat1_exit_car = 0
                $.swat2_exit_car = 0
                $.fuckup_flag = 3
            }
            if ($.swat1_exit_car == 0) {
                if ($.swatvan_fm1.locateStopped2D(1252.0, -1086.0, 18.0, 18.0, false)) {
                    if ($.chico_audio_flag == 21) {
                        if (!Char.IsDead($.doorman1)) {
                            const _res247 = $.doorman1.getCoordinates()
                            $.chico_x = _res247.x
                            $.chico_y = _res247.y
                            $.chico_z = _res247.z
                            Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z)
                        } else {
                            $.doorman1.markAsNoLongerNeeded()
                            if (!Char.IsDead($.doorman2)) {
                                const _res248 = $.doorman2.getCoordinates()
                                $.chico_x = _res248.x
                                $.chico_y = _res248.y
                                $.chico_z = _res248.z
                                Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z)
                            } else {
                                $.doorman2.markAsNoLongerNeeded()
                            }
                        }
                        Audio.PlayMissionAudio()
                        Text.PrintNow('FM1_TT', 5000, 1) //"IT'S A POLICE RAID! EVERYBODY FOR THEMSELVES!!"
                        $.chico_audio_flag = 22
                    }
                    if (!Char.IsDead($.cop1_fm1)) {
                        $.cop1_fm1.setObjLeaveCar($.swatvan_fm1)
                        $.cop1_fm1.setHeedThreats(true /* TRUE */)
                    } else {
                        $.cop1_fm1.markAsNoLongerNeeded()
                    }
                    if (!Char.IsDead($.cop2_fm1)) {
                        $.cop2_fm1.setObjLeaveCar($.swatvan_fm1)
                        $.cop2_fm1.setHeedThreats(true /* TRUE */)
                    } else {
                        $.cop2_fm1.markAsNoLongerNeeded()
                    }
                    if (!Char.IsDead($.cop3_fm1)) {
                        $.cop3_fm1.setObjLeaveCar($.swatvan_fm1)
                        $.cop3_fm1.setHeedThreats(true /* TRUE */)
                    } else {
                        $.cop3_fm1.markAsNoLongerNeeded()
                    }
                    if (!Char.IsDead($.cop4_fm1)) {
                        $.cop4_fm1.setObjLeaveCar($.swatvan_fm1)
                        $.cop4_fm1.setHeedThreats(true /* TRUE */)
                    } else {
                        $.cop4_fm1.markAsNoLongerNeeded()
                    }
                    if (!Char.IsDead($.doorman2) && !Char.IsDead($.cop1_fm1)) {
                        $.doorman2.setObjKillCharOnFoot($.cop1_fm1)
                    }
                    $.swat1_exit_car = 1
                }
            }
            if ($.swat2_exit_car == 0) {
                if ($.swatvan2_fm1.locateStopped2D(1235.0, -1099.0, 18.0, 18.0, false)) {
                    if ($.chico_audio_flag == 21) {
                        if (!Char.IsDead($.doorman1)) {
                            const _res249 = $.doorman1.getCoordinates()
                            $.chico_x = _res249.x
                            $.chico_y = _res249.y
                            $.chico_z = _res249.z
                            Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z)
                        } else {
                            $.doorman1.markAsNoLongerNeeded()
                            if (!Char.IsDead($.doorman2)) {
                                const _res250 = $.doorman2.getCoordinates()
                                $.chico_x = _res250.x
                                $.chico_y = _res250.y
                                $.chico_z = _res250.z
                                Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z)
                            } else {
                                $.doorman2.markAsNoLongerNeeded()
                            }
                        }
                        Audio.PlayMissionAudio()
                        Text.PrintNow('FM1_TT', 5000, 1) //"IT'S A POLICE RAID! EVERYBODY FOR THEMSELVES!!"
                        $.chico_audio_flag = 22
                    }
                    if (!Char.IsDead($.cop5_fm1)) {
                        $.cop5_fm1.setObjLeaveCar($.swatvan2_fm1)
                        $.cop5_fm1.setHeedThreats(true /* TRUE */)
                    } else {
                        $.cop5_fm1.markAsNoLongerNeeded()
                    }
                    if (!Char.IsDead($.cop6_fm1)) {
                        $.cop6_fm1.setObjLeaveCar($.swatvan2_fm1)
                        $.cop6_fm1.setHeedThreats(true /* TRUE */)
                    } else {
                        $.cop6_fm1.markAsNoLongerNeeded()
                    }
                    if (!Char.IsDead($.cop7_fm1)) {
                        $.cop7_fm1.setObjLeaveCar($.swatvan2_fm1)
                        $.cop7_fm1.setHeedThreats(true /* TRUE */)
                    } else {
                        $.cop7_fm1.markAsNoLongerNeeded()
                    }
                    if (!Char.IsDead($.cop8_fm1)) {
                        $.cop8_fm1.setObjLeaveCar($.swatvan2_fm1)
                        $.cop8_fm1.setHeedThreats(true /* TRUE */)
                    } else {
                        $.cop8_fm1.markAsNoLongerNeeded()
                    }
                    if (!Char.IsDead($.doorman1) && !Char.IsDead($.cop5_fm1)) {
                        $.doorman1.setObjKillCharOnFoot($.cop5_fm1)
                    }
                    $.swat2_exit_car = 1
                }
            }
        }

        $.swatvan_fm1.markAsNoLongerNeeded()
        $.swatvan2_fm1.markAsNoLongerNeeded()

        while (!$.maria.isInAnyCar()) {
            await asyncWait(0)
            // SCM GOSUB draw_disco_lights
            await draw_disco_lights()
            // fallback if label was not emitted as async function: no-op continues linearly
            if ($.chico_audio_flag == 23) {
                if (Audio.HasMissionAudioLoaded()) {
                    $.chico_audio_flag = 24
                }
            }
            if ($.chico_audio_flag == 22) {
                if (Audio.HasMissionAudioFinished()) {
                    Audio.LoadMissionAudio(S1_J)
                    $.chico_audio_flag = 23
                }
            }
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (!$.maria.isInPlayersGroup($.player) && $.flag_blip_on_maria == 0) {
                Text.PrintNow('FM1_10', 5000, 1) //"Hey wait for me!"
                $.fm1_blip.remove()
                $.fm1_blip = Blip.AddForChar($.maria)
                $.flag_blip_on_maria = 1
            }
            if ($.player.locateAnyMeansChar2D($.maria, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_maria == 1) {
                $.maria.followPlayer($.player)
                $.fm1_blip.remove()
                $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0)
                $.flag_blip_on_maria = 0
            }
            if ($.flag_blip_on_maria == 0) {
                if (!$.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 0) {
                    $.fm1_blip.remove()
                    $.fm1_blip = Blip.AddForCar($.frankies_limo)
                    Text.PrintNow('FM1_1', 5000, 1) //"Get back into the limo!"
                    $.flag_blip_on_limo = 1
                }
                if ($.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
                    $.fm1_blip.remove()
                    $.fm1_blip = Blip.AddForChar($.maria)
                    $.flag_blip_on_limo = 0
                }
            }

            //	IF NOT IS_PLAYER_IN_CAR player frankies_limo
            //	AND flag_blip_on_limo = 0
            //		REMOVE_BLIP fm1_blip
            //		ADD_BLIP_FOR_CAR frankies_limo fm1_blip
            //		PRINT_NOW (FM1_1) 5000 1 //"Get back into the limo!"
            //		flag_blip_on_limo = 1
            //	ENDIF
            //
            //	IF IS_PLAYER_IN_CAR player frankies_limo
            //	AND flag_blip_on_limo = 1
            //		REMOVE_BLIP fm1_blip
            //		ADD_BLIP_FOR_CHAR maria fm1_blip//COORD 1424.0 -183.5 50.0 fm1_blip
            //		flag_blip_on_limo = 0
            //	ENDIF

            if (!($.clubber3_car1 == 3) || !($.clubber5_car2 == 3) || !($.clubber8_car3 == 3)) {
                // SCM GOSUB clubbers_into_cars
                await clubbers_into_cars()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            // SCM GOSUB police_idle_checks
            await police_idle_checks()
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB clubber_idle_checks
            await clubber_idle_checks()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        $.fm1_blip.remove()
        $.flag_blip_on_maria = 0
        $.flag_blip_on_limo = 0
        $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0)

        await asyncWait(0)

        if (!($.chico_audio_flag == 24)) {
            while (!Audio.HasMissionAudioLoaded()) {
                await asyncWait(0)
                // SCM GOSUB draw_disco_lights
                await draw_disco_lights()
                // fallback if label was not emitted as async function: no-op continues linearly
                if (!($.clubber3_car1 == 3) || !($.clubber5_car2 == 3) || !($.clubber8_car3 == 3)) {
                    // SCM GOSUB clubbers_into_cars
                    await clubbers_into_cars()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                // SCM GOSUB police_idle_checks
                await police_idle_checks()
                // fallback if label was not emitted as async function: no-op continues linearly
                // SCM GOSUB clubber_idle_checks
                await clubber_idle_checks()
                // fallback if label was not emitted as async function: no-op continues linearly
                if (Char.IsDead($.maria)) {
                    Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
                }
                if (Car.IsDead($.frankies_limo)) {
                    Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
                }
                if (!$.maria.isInPlayersGroup($.player) && $.flag_blip_on_maria == 0) {
                    Text.PrintNow('FM1_10', 5000, 1) //"Hey wait for me!"
                    $.fm1_blip.remove()
                    $.fm1_blip = Blip.AddForChar($.maria)
                    $.flag_blip_on_maria = 1
                }
                if ($.player.locateAnyMeansChar2D($.maria, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_maria == 1) {
                    $.maria.followPlayer($.player)
                    $.fm1_blip.remove()
                    $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0)
                    $.flag_blip_on_maria = 0
                }
                if ($.flag_blip_on_maria == 0) {
                    if (!$.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 0) {
                        $.fm1_blip.remove()
                        $.fm1_blip = Blip.AddForCar($.frankies_limo)
                        Text.PrintNow('FM1_1', 5000, 1) //"Get back into the limo!"
                        $.flag_blip_on_limo = 1
                    }
                    if ($.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
                        $.fm1_blip.remove()
                        $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0)
                        $.flag_blip_on_limo = 0
                    }
                }
                // SCM GOSUB police_idle_checks
                await police_idle_checks()
                // fallback if label was not emitted as async function: no-op continues linearly
                // SCM GOSUB clubber_idle_checks
                await clubber_idle_checks()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            $.chico_audio_flag = 24
        }

        Audio.PlayMissionAudio()
        Text.PrintNow('FM1_X', 5000, 1) //"OK Fido, let's get out of here. YeeEEHAAA"

        $.frankie_garage.changeType(21 /* GARAGE_MISSION_KEEPCAR_REMAINCLOSED */)

        if (!Car.IsDead($.frankies_limo)) {
            $.frankie_garage.setTargetCarForMission($.frankies_limo)
        }

        //WHILE NOT LOCATE_PLAYER_IN_CAR_2D player 1424.0 -183.5 10.0 10.0 0
        //WHILE NOT IS_PLAYER_STOPPED_IN_AREA_3D player 1428.8 -187.0 50.0 1442.5 -179.9 53.0 0

        while (!$.frankie_garage.isCarInMission()) {
            await asyncWait(0)
            // SCM GOSUB draw_disco_lights
            await draw_disco_lights()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.frankies_limo)) {
                Text.PrintNow('WRECKED', 5000, 1) // "The vehicle is wrecked!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if ($.frankies_limo.locate2D(1424.8, -183.0, 20.0, 20.0, false)) {
                $.player.clearWantedLevel()
            }
            if (!$.maria.isInPlayersGroup($.player) && $.flag_blip_on_maria == 0) {
                Text.PrintNow('FM1_10', 5000, 1) //"Hey wait for me!"
                $.fm1_blip.remove()
                $.fm1_blip = Blip.AddForChar($.maria)
                $.flag_blip_on_maria = 1
            }
            if ($.player.locateAnyMeansChar2D($.maria, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_maria == 1) {
                $.maria.followPlayer($.player)
                $.fm1_blip.remove()
                $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0)
                $.flag_blip_on_limo = 0
                $.flag_blip_on_maria = 0
            }
            if ($.flag_blip_on_maria == 0) {
                if (!$.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 0) {
                    $.fm1_blip.remove()
                    $.fm1_blip = Blip.AddForCar($.frankies_limo)
                    Text.PrintNow('FM1_1', 5000, 1) //"Get back into the limo!"
                    $.flag_blip_on_limo = 1
                }
                if ($.player.isInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
                    $.fm1_blip.remove()
                    $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0)
                    $.flag_blip_on_limo = 0
                }
            }
            if (!($.clubber3_car1 == 3) || !($.clubber5_car2 == 3) || !($.clubber8_car3 == 3)) {
                // SCM GOSUB clubbers_into_cars
                await clubbers_into_cars()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            // SCM GOSUB police_idle_checks
            await police_idle_checks()
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB clubber_idle_checks
            await clubber_idle_checks()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        $.player.clearWantedLevel()

        Camera.DoFade(500, 0 /* FADE_OUT */)

        await asyncWait(500)

        $.player.setControl(false /* OFF */)
        Hud.SwitchWidescreen(true /* ON */)
        Game.SetEveryoneIgnorePlayer($.player, true /* TRUE */)
        Game.SetAllCarsCanBeDamaged(false /* FALSE */)

        if (Char.IsDead($.maria)) {
            Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
            // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
        }

        $.maria.leaveGroup()

        $.player.clearWantedLevel()

        $.player.warpFromCarToCoord(1435.7676, -176.4341, 52.2953)
        $.player.setHeading(184.9588)
        $.maria_exists = 0
        $.maria.delete()
        $.maria = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1435.9358, -178.4347, 54.0279)
        $.maria_exists = 1
        $.maria.setHeading(184.9134)

        $.script_controlled_player = $.player.getChar()

        $.maria.clearThreatSearch()
        $.script_controlled_player.clearThreatSearch()

        Camera.SetFixedPosition(1433.4507, -173.6104, 55.66595, 0.0, 0.0, 0.0)
        Camera.PointAtChar($.maria, 15 /* FIXED */, 2 /* JUMP_CUT */)

        $.maria.setObjGotoCoordOnFoot(1436.2628, -180.6451)
        $.script_controlled_player.setObjGotoCoordOnFoot(1436.2628, -180.6451)

        $.frankies_limo.delete()

        World.ClearArea(1423.9675, -189.2235, 49.2032, 5.0, false /* FALSE */)

        Camera.DoFade(500, 1 /* FADE_IN */)

        Audio.LoadMissionAudio(S1_K)

        //camera 1433.4507 -173.6104 56.66595
        //point at maria maybe 1433.9979 -174.4381 56.542

        //chat
        //maria goto 1453.5276 -179.3224
        //player goto 1443.6184 -188.2894

        $.flag_blip_on_maria = 0
        $.skip_cutscene_flag = 0
        while (!($.flag_blip_on_maria == 8)) {
            await asyncWait(0)
            if (Char.IsDead($.maria)) {
                Text.PrintNow('FM1_7', 5000, 1) // "You failed to protect Maria!"
                // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie1_failed') // fallback: would break linear control flow
            }
            if ($.skip_cutscene_flag == 0) {
                if (!Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                    $.skip_cutscene_flag = 1
                }
            }
            if ($.skip_cutscene_flag == 1) {
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                    $.skip_cutscene_flag = 2
                }
            }
            if ($.skip_cutscene_flag == 2) {
                if (!Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                    Camera.DoFade(0, 0 /* FADE_OUT */)
                    await asyncWait(0)
                    Audio.ClearMissionAudio()
                    Text.ClearSmallPrints()
                    Hud.SwitchWidescreen(false /* OFF */)
                    $.player.setControl(true /* ON */)
                    Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
                    Game.SetAllCarsCanBeDamaged(true /* TRUE */)
                    $.maria.delete()
                    $.player.setCoordinates(1443.6184, -188.2894, 55.0)
                    $.player.setHeading(180.0)
                    Camera.SetBehindPlayer()
                    Camera.RestoreJumpcut()
                    Camera.DoFade(500, 1 /* FADE_IN */)
                    $.skip_cutscene_flag = 3
                    // SCM GOTO → mission_frankie1_passed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie1_passed') // fallback: would break linear control flow
                }
            }
            if ($.flag_blip_on_maria == 7) {
                if ($.player.locateAnyMeans2D(1443.6184, -188.2894, 1.0, 1.0, false)) {
                    if (!$.maria.isOnScreen()) {
                        $.maria_exists = 0
                        $.maria.delete()
                        $.flag_blip_on_maria = 8
                    }
                }
            }
            if ($.flag_blip_on_maria == 6) {
                if (Audio.HasMissionAudioFinished()) {
                    Text.ClearSmallPrints()
                    $.maria.setWaitState(0 /* WAITSTATE_FALSE */, 100)
                    $.script_controlled_player.setObjGotoCoordOnFoot(1443.6184, -188.2894)
                    $.maria.setObjGotoCoordOnFoot(1453.5276, -179.3224)
                    $.flag_blip_on_maria = 7
                }
            }
            if ($.flag_blip_on_maria == 5) {
                if (Audio.HasMissionAudioLoaded()) {
                    const _res251 = $.maria.getCoordinates()
                    $.chico_x = _res251.x
                    $.chico_y = _res251.y
                    $.chico_z = _res251.z
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_AA', 8000, 1) //"I'd better go I'll see you around I hope."
                    $.flag_blip_on_maria = 6
                }
            }
            if ($.flag_blip_on_maria == 4) {
                if (Audio.HasMissionAudioFinished()) {
                    $.script_controlled_player.turnToFaceChar($.maria)
                    $.maria.turnToFaceChar($.script_controlled_player)
                    Audio.LoadMissionAudio(S1_L)
                    $.flag_blip_on_maria = 5
                }
            }
            if ($.flag_blip_on_maria == 3) {
                if (Audio.HasMissionAudioLoaded()) {
                    $.script_controlled_player.turnToFaceChar($.maria)
                    $.maria.turnToFaceChar($.script_controlled_player)
                    const _res252 = $.maria.getCoordinates()
                    $.chico_x = _res252.x
                    $.chico_y = _res252.y
                    $.chico_z = _res252.z
                    Audio.PlayMissionAudio()
                    Text.PrintNow('FM1_Y', 8000, 1) //"I enjoyed myself for the first time in a long while,"
                    $.maria.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 20000)
                    $.flag_blip_on_maria = 4
                }
            }
            if ($.flag_blip_on_maria == 2) {
                if ($.maria.locateStoppedOnFoot2D(1440.5144, -179.1538, 1.0, 1.0, false)) {
                    $.swat1_stuck_x = $.maria.getHeading()
                    $.swat1_stuck_x -= 3.0
                    if ($.swat1_stuck_x < 0.0) {
                        $.swat1_stuck_x = 359.0
                    }
                    if ($.swat1_stuck_x < 180.0) {
                        $.swat1_stuck_x = 180.0
                    }
                    $.maria.setHeading($.swat1_stuck_x)
                    $.maria.lookAtPlayerAlways($.player)
                    if ($.player.locateStoppedOnFoot2D(1440.6287, -181.4022, 1.0, 1.0, false)) {
                        $.maria.stopLooking()
                        Camera.SetFixedPosition(1442.1001, -173.1516, 55.8166, 0.0, 0.0, 0.0)
                        Camera.PointAtPoint(1441.78, -174.0602, 55.6919, 2 /* JUMP_CUT */)
                        $.player.setHeading(0.0)
                        $.script_controlled_player.turnToFaceChar($.maria)
                        $.player.turnToFaceChar($.maria)
                        $.maria.turnToFaceChar($.script_controlled_player)
                        $.flag_blip_on_maria = 3
                    }
                }
            }
            if ($.flag_blip_on_maria == 1) {
                if ($.player.locateOnFoot2D(1436.2628, -180.6451, 1.0, 1.0, false)) {
                    $.script_controlled_player.setObjGotoCoordOnFoot(1440.6287, -181.4022)
                    $.flag_blip_on_maria = 2
                }
            }
            if ($.flag_blip_on_maria == 0) {
                if ($.maria.locateOnFoot2D(1436.2628, -180.6451, 1.0, 1.0, false)) {
                    $.maria.setObjGotoCoordOnFoot(1440.5144, -179.1538)
                    $.flag_blip_on_maria = 1
                }
            }
        }

        Camera.SetBehindPlayer()
        Camera.RestoreJumpcut()
        Hud.SwitchWidescreen(false /* OFF */)
        $.player.setControl(true /* ON */)
        Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
        Game.SetAllCarsCanBeDamaged(true /* TRUE */)

        // SCM GOTO → mission_frankie1_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_frankie1_passed') // fallback: would break linear control flow
    }

    // Mission Frankie1 failed
}

async function mission_frankie1_failed() {
    Text.PrintBig('m_fail', 5000, 1)
    return

    // mission Frankie1 passed
}

async function mission_frankie1_passed() {
    $.flag_frankie_mission1_passed = 1
    if ($.flag_luigi_mission4_terminated == 1) {
        // START_NEW_SCRIPT luigi_mission4_loop
        $.luigi_contact_blip.remove()
        $.luigi_contact_blip = Blip.AddSpriteForContactPoint(892.8, -425.8, 13.9, 13 /* RADAR_SPRITE_LUIGI */)
        //	ADD_SPRITE_BLIP_FOR_CONTACT_POINT 886.2 -417.1 -100.0 RADAR_SPRITE_LUIGI luigi_contact_blip
    }
    if ($.flag_luigi_mission5_terminated == 1) {
        // START_NEW_SCRIPT luigi_mission5_loop
        $.luigi_contact_blip.remove()
        $.luigi_contact_blip = Blip.AddSpriteForContactPoint(886.2, -417.1, -100.0, 13 /* RADAR_SPRITE_LUIGI */)
    }
    if ($.flag_joey_mission5_terminated == 1) {
        // START_NEW_SCRIPT joey_mission5_loop
        $.joey_contact_blip.remove()
        $.joey_contact_blip = Blip.AddSpriteForContactPoint(1191.7, -870.0, -100.0, 10 /* RADAR_SPRITE_JOEY */)
    }
    if ($.flag_joey_mission6_terminated == 1) {
        // START_NEW_SCRIPT joey_mission6_loop
        $.joey_contact_blip.remove()
        $.joey_contact_blip = Blip.AddSpriteForContactPoint(1191.7, -870.0, -100.0, 10 /* RADAR_SPRITE_JOEY */)
    }
    Text.PrintWithNumberBig('m_pass', 10000, 5000, 1)
    $.player.addScore(10000)
    $.player.clearWantedLevel()
    Audio.PlayMissionPassedTune(1)
    Stat.RegisterMissionPassed('FM1')
    Stat.PlayerMadeProgress(1)
    $.toni_contact_blip = Blip.AddSpriteForContactPoint(1219.6, -321.0, 26.4, 19 /* RADAR_SPRITE_TONY */)
    // START_NEW_SCRIPT toni_mission4_loop
    // START_NEW_SCRIPT frankie_mission2_loop
    // START_NEW_SCRIPT imp_exp_pager
    return

    // mission cleanup
}

async function mission_cleanup_frankie1() {
    $.flag_player_on_mission = 0
    $.flag_player_on_frankie_mission = 0

    Camera.RestoreJumpcut()
    Hud.SwitchWidescreen(false /* OFF */)
    $.player.setControl(true /* ON */)

    if ($.add_sound_flag == 1) {
        $.warehouse_rave_loop.remove()
    }

    World.RemoveParticleEffectsInArea(1264.0, -1111.0, 5.0, 1275.0, -1103.0, 15.0)

    Streaming.MarkModelAsNoLongerNeeded(ped`CRIMINAL1`)
    Streaming.MarkModelAsNoLongerNeeded(car`STRETCH`)
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_A`)
    Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`)
    Streaming.MarkModelAsNoLongerNeeded(car`CHEETAH`)
    Streaming.MarkModelAsNoLongerNeeded(car`MANANA`)
    Streaming.MarkModelAsNoLongerNeeded(car`ENFORCER`)
    Streaming.MarkModelAsNoLongerNeeded(ped`SWAT`)
    Streaming.MarkModelAsNoLongerNeeded(ped`P_MAN1`)
    Streaming.MarkModelAsNoLongerNeeded(ped`FEMALE1`)
    Streaming.MarkModelAsNoLongerNeeded(ped`FEMALE2`)

    $.fm1_blip.remove()

    $.frankie_garage.changeType(14 /* GARAGE_MISSION_KEEPCAR */)
    $.frankie_garage.setTargetCarForMission(-1)

    Streaming.UnloadSpecialCharacter(1)
    Streaming.UnloadSpecialCharacter(2)

    Mission.Finish()
    return

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////// Functions ///////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////
}

async function clubbers_into_cars() {
    if ($.clubbers_flee_flag > 2) {
        if ($.clubber3_car1 == 1) {
            if (!Char.IsDead($.clubber3_fm1)) {
                if ($.clubber3_fm1.locateOnFoot2D($.outside_warehouse_x, $.outside_warehouse_y, 3.0, 3.0, false)) {
                    if (Car.IsStillAlive($.parked_car1)) {
                        if ($.parked_car1.locate2D(1243.0, -1112.0, 8.0, 8.0, false)) {
                            $.clubber3_fm1.setObjEnterCarAsDriver($.parked_car1)
                            $.clubber3_car1 = 2
                        } else {
                            $.clubber3_fm1.setHeedThreats(true /* TRUE */)
                            $.parked_car1.markAsNoLongerNeeded()
                            $.clubber3_fm1.markAsNoLongerNeeded()
                            $.clubber3_car1 = 3
                        }
                    } else {
                        $.clubber3_fm1.setHeedThreats(true /* TRUE */)
                        $.parked_car1.markAsNoLongerNeeded()
                        $.clubber3_fm1.markAsNoLongerNeeded()
                        $.clubber3_car1 = 3
                    }
                }
            } else {
                $.clubber3_fm1.markAsNoLongerNeeded()
                $.parked_car1.markAsNoLongerNeeded()
                $.clubber3_car1 = 3
            }
        }
        if ($.clubber3_car1 == 2) {
            if (!Char.IsDead($.clubber3_fm1)) {
                if (!Car.IsDead($.parked_car1)) {
                    if ($.clubber3_fm1.isInCar($.parked_car1)) {
                        $.parked_car1.setDrivingStyle(2)
                        $.parked_car1.setCruiseSpeed(100.0)
                        $.parked_car1.wanderRandomly()
                        $.parked_car1.setAvoidLevelTransitions(true /* TRUE */)
                        $.parked_car1.markAsNoLongerNeeded()
                        //					MARK_CHAR_AS_NO_LONGER_NEEDED clubber3_fm1
                        $.clubber3_car1 = 3
                    }
                } else {
                    $.clubber3_fm1.setHeedThreats(true /* TRUE */)
                    $.clubber3_fm1.markAsNoLongerNeeded()
                    $.parked_car1.markAsNoLongerNeeded()
                    $.clubber3_car1 = 3
                }
            } else {
                $.parked_car1.markAsNoLongerNeeded()
                $.clubber3_fm1.markAsNoLongerNeeded()
                $.clubber3_car1 = 3
            }
        }
    }

    if ($.clubbers_flee_flag > 4) {
        if ($.clubber5_car2 == 1) {
            if (!Char.IsDead($.clubber5_fm1)) {
                if ($.clubber5_fm1.locateOnFoot2D($.outside_warehouse_x, $.outside_warehouse_y, 3.0, 3.0, false)) {
                    if (Car.IsStillAlive($.parked_car2)) {
                        if ($.parked_car2.locate2D(1243.0, -1112.0, 8.0, 8.0, false)) {
                            $.clubber5_fm1.setObjEnterCarAsDriver($.parked_car2)
                            $.clubber5_car2 = 2
                        } else {
                            $.clubber5_fm1.setHeedThreats(true /* TRUE */)
                            $.clubber5_fm1.markAsNoLongerNeeded()
                            $.parked_car2.markAsNoLongerNeeded()
                            $.clubber5_car2 = 3
                        }
                    } else {
                        $.clubber5_fm1.setHeedThreats(true /* TRUE */)
                        $.clubber5_fm1.markAsNoLongerNeeded()
                        $.parked_car2.markAsNoLongerNeeded()
                        $.clubber5_car2 = 3
                    }
                }
            } else {
                $.clubber5_fm1.markAsNoLongerNeeded()
                $.parked_car2.markAsNoLongerNeeded()
                $.clubber5_car2 = 3
            }
        }
        if ($.clubber5_car2 == 2) {
            if (!Char.IsDead($.clubber5_fm1)) {
                if (!Car.IsDead($.parked_car2)) {
                    if ($.clubber5_fm1.isInCar($.parked_car2)) {
                        $.parked_car2.setDrivingStyle(2)
                        $.parked_car2.setCruiseSpeed(100.0)
                        $.parked_car2.wanderRandomly()
                        $.parked_car2.setAvoidLevelTransitions(true /* TRUE */)
                        $.parked_car2.markAsNoLongerNeeded()
                        //					MARK_CHAR_AS_NO_LONGER_NEEDED clubber5_fm1
                        $.clubber5_car2 = 3
                    }
                } else {
                    $.clubber5_fm1.setHeedThreats(true /* TRUE */)
                    $.parked_car2.markAsNoLongerNeeded()
                    $.clubber5_fm1.markAsNoLongerNeeded()
                    $.clubber5_car2 = 3
                }
            } else {
                $.parked_car2.markAsNoLongerNeeded()
                $.clubber5_fm1.markAsNoLongerNeeded()
                $.clubber5_car2 = 3
            }
        }
    }

    if ($.clubbers_flee_flag > 7) {
        if ($.clubber8_car3 == 1) {
            if (!Char.IsDead($.clubber8_fm1)) {
                if ($.clubber8_fm1.locateOnFoot2D($.outside_warehouse_x, $.outside_warehouse_y, 3.0, 3.0, false)) {
                    if (Car.IsStillAlive($.parked_car3)) {
                        if ($.parked_car3.locate2D(1243.0, -1112.0, 8.0, 8.0, false)) {
                            $.clubber8_fm1.setObjEnterCarAsDriver($.parked_car3)
                            $.clubber8_car3 = 2
                        } else {
                            $.clubber8_fm1.setHeedThreats(true /* TRUE */)
                            $.clubber8_fm1.markAsNoLongerNeeded()
                            $.parked_car3.markAsNoLongerNeeded()
                            $.clubber8_car3 = 3
                        }
                    } else {
                        $.clubber8_fm1.setHeedThreats(true /* TRUE */)
                        $.clubber8_fm1.markAsNoLongerNeeded()
                        $.parked_car3.markAsNoLongerNeeded()
                        $.clubber8_car3 = 3
                    }
                }
            } else {
                $.parked_car3.markAsNoLongerNeeded()
                $.clubber8_fm1.markAsNoLongerNeeded()
                $.clubber8_car3 = 3
            }
        }
        if ($.clubber8_car3 == 2) {
            if (!Char.IsDead($.clubber8_fm1)) {
                if (!Car.IsDead($.parked_car3)) {
                    if ($.clubber8_fm1.isInCar($.parked_car3)) {
                        $.parked_car3.setDrivingStyle(2)
                        $.parked_car3.setCruiseSpeed(100.0)
                        $.parked_car3.wanderRandomly()
                        $.parked_car3.setAvoidLevelTransitions(true /* TRUE */)
                        $.parked_car3.markAsNoLongerNeeded()
                        //					MARK_CHAR_AS_NO_LONGER_NEEDED clubber8_fm1
                        $.clubber8_car3 = 3
                    }
                } else {
                    $.clubber8_fm1.setHeedThreats(true /* TRUE */)
                    $.clubber8_fm1.markAsNoLongerNeeded()
                    $.parked_car3.markAsNoLongerNeeded()
                    $.clubber8_car3 = 3
                }
            } else {
                $.clubber8_fm1.markAsNoLongerNeeded()
                $.parked_car3.markAsNoLongerNeeded()
                $.clubber8_car3 = 3
            }
        }
    }

    return
}

async function clubber_idle_checks() {
    if (Char.IsDead($.cop1_fm1) && Char.IsDead($.cop2_fm1) && Char.IsDead($.cop3_fm1) && Char.IsDead($.cop4_fm1) && Char.IsDead($.cop5_fm1) && Char.IsDead($.cop6_fm1)) {
        if (Char.IsDead($.cop7_fm1) && Char.IsDead($.cop8_fm1)) {
            if (!Char.IsDead($.clubber1_fm1)) {
                $.clubber1_fm1.setObjFleePlayerOnFootAlways($.player)
                $.clubber1_fm1.markAsNoLongerNeeded()
            } else {
                $.clubber1_fm1.markAsNoLongerNeeded()
            }
            if (!Char.IsDead($.clubber2_fm1)) {
                $.clubber2_fm1.wanderDir(-1)
                $.clubber2_fm1.markAsNoLongerNeeded()
            } else {
                $.clubber2_fm1.markAsNoLongerNeeded()
            }
            if (!Char.IsDead($.clubber4_fm1)) {
                $.clubber4_fm1.setObjFleePlayerOnFootAlways($.player)
                $.clubber4_fm1.markAsNoLongerNeeded()
            } else {
                $.clubber4_fm1.markAsNoLongerNeeded()
            }
            if (!Char.IsDead($.clubber6_fm1)) {
                $.clubber6_fm1.wanderDir(-1)
                $.clubber6_fm1.markAsNoLongerNeeded()
            } else {
                $.clubber6_fm1.markAsNoLongerNeeded()
            }
            if (!Char.IsDead($.clubber7_fm1)) {
                $.clubber7_fm1.setObjFleePlayerOnFootAlways($.player)
                $.clubber7_fm1.markAsNoLongerNeeded()
            } else {
                $.clubber7_fm1.markAsNoLongerNeeded()
            }
        } else {
            if (!Char.IsDead($.clubber1_fm1)) {
                if ($.clubber1_fm1.isStopped()) {
                    if (!$.clubber1_fm1.isShooting()) {
                        $.clubber1_fm1.wanderDir(-1)
                    }
                }
            } else {
                $.clubber1_fm1.markAsNoLongerNeeded()
            }
            if (!Char.IsDead($.clubber2_fm1)) {
                if ($.clubber2_fm1.isStopped()) {
                    if (!$.clubber2_fm1.isShooting()) {
                        $.clubber2_fm1.setObjFleePlayerOnFootAlways($.player)
                    }
                }
            } else {
                $.clubber2_fm1.markAsNoLongerNeeded()
            }
            if (!Char.IsDead($.clubber4_fm1)) {
                if ($.clubber4_fm1.isStopped()) {
                    if (!$.clubber4_fm1.isShooting()) {
                        $.clubber4_fm1.wanderDir(-1)
                    }
                }
            } else {
                $.clubber4_fm1.markAsNoLongerNeeded()
            }
            if (!Char.IsDead($.clubber6_fm1)) {
                if ($.clubber6_fm1.isStopped()) {
                    if (!$.clubber6_fm1.isShooting()) {
                        $.clubber6_fm1.setObjFleePlayerOnFootAlways($.player)
                    }
                }
            } else {
                $.clubber6_fm1.markAsNoLongerNeeded()
            }
            if (!Char.IsDead($.clubber7_fm1)) {
                if ($.clubber7_fm1.isStopped()) {
                    if (!$.clubber7_fm1.isShooting()) {
                        $.clubber7_fm1.wanderDir(-1)
                    }
                }
            } else {
                $.clubber7_fm1.markAsNoLongerNeeded()
            }
        }
    } else {
        if (!Char.IsDead($.clubber1_fm1)) {
            if ($.clubber1_fm1.isStopped()) {
                if (!$.clubber1_fm1.isShooting()) {
                    $.clubber1_fm1.wanderDir(-1)
                }
            }
        } else {
            $.clubber1_fm1.markAsNoLongerNeeded()
        }
        if (!Char.IsDead($.clubber2_fm1)) {
            if ($.clubber2_fm1.isStopped()) {
                if (!$.clubber2_fm1.isShooting()) {
                    $.clubber2_fm1.setObjFleePlayerOnFootAlways($.player)
                }
            }
        } else {
            $.clubber2_fm1.markAsNoLongerNeeded()
        }
        if (!Char.IsDead($.clubber4_fm1)) {
            if ($.clubber4_fm1.isStopped()) {
                if (!$.clubber4_fm1.isShooting()) {
                    $.clubber4_fm1.wanderDir(-1)
                }
            }
        } else {
            $.clubber4_fm1.markAsNoLongerNeeded()
        }
        if (!Char.IsDead($.clubber6_fm1)) {
            if ($.clubber6_fm1.isStopped()) {
                if (!$.clubber6_fm1.isShooting()) {
                    $.clubber6_fm1.setObjFleePlayerOnFootAlways($.player)
                }
            }
        } else {
            $.clubber6_fm1.markAsNoLongerNeeded()
        }
        if (!Char.IsDead($.clubber7_fm1)) {
            if ($.clubber7_fm1.isStopped()) {
                if (!$.clubber7_fm1.isShooting()) {
                    $.clubber7_fm1.wanderDir(-1)
                }
            }
        } else {
            $.clubber7_fm1.markAsNoLongerNeeded()
        }
    }

    return
}

async function police_idle_checks() {
    if (!Char.IsDead($.cop1_fm1)) {
        $.cop1_fm1.setSay(101 /* SOUND_SWAT_PED_SHOUT */)
        if ($.cop1_fm1.isStopped()) {
            if (!$.cop1_fm1.isShooting()) {
                if (!Char.IsDead($.clubber1_fm1)) {
                    $.cop1_fm1.setObjKillCharOnFoot($.clubber1_fm1)
                } else {
                    if (!Char.IsDead($.clubber2_fm1)) {
                        $.cop1_fm1.setObjKillCharOnFoot($.clubber2_fm1)
                    } else {
                        if (!Char.IsDead($.clubber4_fm1)) {
                            $.cop1_fm1.setObjKillCharOnFoot($.clubber4_fm1)
                        } else {
                            if (!Char.IsDead($.clubber6_fm1)) {
                                $.cop1_fm1.setObjKillCharOnFoot($.clubber6_fm1)
                            } else {
                                if (!Char.IsDead($.clubber7_fm1)) {
                                    $.cop1_fm1.setObjKillCharOnFoot($.clubber7_fm1)
                                } else {
                                    $.cop1_fm1.setObjKillPlayerOnFoot($.player)
                                    $.cop1_fm1.markAsNoLongerNeeded()
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        $.cop1_fm1.markAsNoLongerNeeded()
    }

    if (!Char.IsDead($.cop2_fm1)) {
        $.cop2_fm1.setSay(101 /* SOUND_SWAT_PED_SHOUT */)
        if ($.cop2_fm1.isStopped()) {
            if (!$.cop2_fm1.isShooting()) {
                if (!Char.IsDead($.clubber7_fm1)) {
                    $.cop2_fm1.setObjKillCharOnFoot($.clubber7_fm1)
                } else {
                    if (!Char.IsDead($.clubber4_fm1)) {
                        $.cop2_fm1.setObjKillCharOnFoot($.clubber4_fm1)
                    } else {
                        if (!Char.IsDead($.clubber6_fm1)) {
                            $.cop2_fm1.setObjKillCharOnFoot($.clubber6_fm1)
                        } else {
                            if (!Char.IsDead($.clubber2_fm1)) {
                                $.cop2_fm1.setObjKillCharOnFoot($.clubber2_fm1)
                            } else {
                                if (!Char.IsDead($.clubber1_fm1)) {
                                    $.cop2_fm1.setObjKillCharOnFoot($.clubber1_fm1)
                                } else {
                                    $.cop2_fm1.setObjKillPlayerOnFoot($.player)
                                    $.cop2_fm1.markAsNoLongerNeeded()
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        $.cop2_fm1.markAsNoLongerNeeded()
    }

    if (!Char.IsDead($.cop3_fm1)) {
        $.cop3_fm1.setSay(101 /* SOUND_SWAT_PED_SHOUT */)
        if ($.cop3_fm1.isStopped()) {
            if (!$.cop3_fm1.isShooting()) {
                if (!Char.IsDead($.clubber7_fm1)) {
                    $.cop3_fm1.setObjKillCharOnFoot($.clubber7_fm1)
                } else {
                    if (!Char.IsDead($.clubber4_fm1)) {
                        $.cop3_fm1.setObjKillCharOnFoot($.clubber4_fm1)
                    } else {
                        if (!Char.IsDead($.clubber6_fm1)) {
                            $.cop3_fm1.setObjKillCharOnFoot($.clubber6_fm1)
                        } else {
                            if (!Char.IsDead($.clubber2_fm1)) {
                                $.cop3_fm1.setObjKillCharOnFoot($.clubber2_fm1)
                            } else {
                                if (!Char.IsDead($.clubber1_fm1)) {
                                    $.cop3_fm1.setObjKillCharOnFoot($.clubber1_fm1)
                                } else {
                                    $.cop3_fm1.setObjKillPlayerOnFoot($.player)
                                    $.cop3_fm1.markAsNoLongerNeeded()
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        $.cop3_fm1.markAsNoLongerNeeded()
    }

    if (!Char.IsDead($.cop4_fm1)) {
        $.cop4_fm1.setSay(101 /* SOUND_SWAT_PED_SHOUT */)
        if ($.cop4_fm1.isStopped()) {
            if (!$.cop4_fm1.isShooting()) {
                if (!Char.IsDead($.clubber4_fm1)) {
                    $.cop4_fm1.setObjKillCharOnFoot($.clubber4_fm1)
                } else {
                    if (!Char.IsDead($.clubber7_fm1)) {
                        $.cop4_fm1.setObjKillCharOnFoot($.clubber7_fm1)
                    } else {
                        if (!Char.IsDead($.clubber2_fm1)) {
                            $.cop4_fm1.setObjKillCharOnFoot($.clubber2_fm1)
                        } else {
                            if (!Char.IsDead($.clubber6_fm1)) {
                                $.cop4_fm1.setObjKillCharOnFoot($.clubber6_fm1)
                            } else {
                                if (!Char.IsDead($.clubber1_fm1)) {
                                    $.cop4_fm1.setObjKillCharOnFoot($.clubber1_fm1)
                                } else {
                                    $.cop4_fm1.setObjKillPlayerOnFoot($.player)
                                    $.cop4_fm1.markAsNoLongerNeeded()
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        $.cop4_fm1.markAsNoLongerNeeded()
    }

    if (!Char.IsDead($.cop5_fm1)) {
        $.cop5_fm1.setSay(101 /* SOUND_SWAT_PED_SHOUT */)
        if ($.cop5_fm1.isStopped()) {
            if (!$.cop5_fm1.isShooting()) {
                if (!Char.IsDead($.clubber4_fm1)) {
                    $.cop5_fm1.setObjKillCharOnFoot($.clubber4_fm1)
                } else {
                    if (!Char.IsDead($.clubber7_fm1)) {
                        $.cop5_fm1.setObjKillCharOnFoot($.clubber7_fm1)
                    } else {
                        if (!Char.IsDead($.clubber2_fm1)) {
                            $.cop5_fm1.setObjKillCharOnFoot($.clubber2_fm1)
                        } else {
                            if (!Char.IsDead($.clubber6_fm1)) {
                                $.cop5_fm1.setObjKillCharOnFoot($.clubber6_fm1)
                            } else {
                                if (!Char.IsDead($.clubber1_fm1)) {
                                    $.cop5_fm1.setObjKillCharOnFoot($.clubber1_fm1)
                                } else {
                                    $.cop5_fm1.setObjKillPlayerOnFoot($.player)
                                    $.cop5_fm1.markAsNoLongerNeeded()
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        $.cop5_fm1.markAsNoLongerNeeded()
    }

    if (!Char.IsDead($.cop6_fm1)) {
        $.cop6_fm1.setSay(101 /* SOUND_SWAT_PED_SHOUT */)
        if ($.cop6_fm1.isStopped()) {
            if (!$.cop6_fm1.isShooting()) {
                if (!Char.IsDead($.clubber4_fm1)) {
                    $.cop6_fm1.setObjKillCharOnFoot($.clubber4_fm1)
                } else {
                    if (!Char.IsDead($.clubber1_fm1)) {
                        $.cop6_fm1.setObjKillCharOnFoot($.clubber1_fm1)
                    } else {
                        if (!Char.IsDead($.clubber2_fm1)) {
                            $.cop6_fm1.setObjKillCharOnFoot($.clubber2_fm1)
                        } else {
                            if (!Char.IsDead($.clubber7_fm1)) {
                                $.cop6_fm1.setObjKillCharOnFoot($.clubber7_fm1)
                            } else {
                                if (!Char.IsDead($.clubber6_fm1)) {
                                    $.cop6_fm1.setObjKillCharOnFoot($.clubber6_fm1)
                                } else {
                                    $.cop6_fm1.setObjKillPlayerOnFoot($.player)
                                    $.cop6_fm1.markAsNoLongerNeeded()
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        $.cop6_fm1.markAsNoLongerNeeded()
    }

    if (!Char.IsDead($.cop7_fm1)) {
        $.cop7_fm1.setSay(101 /* SOUND_SWAT_PED_SHOUT */)
        if ($.cop7_fm1.isStopped()) {
            if (!$.cop7_fm1.isShooting()) {
                if (!Char.IsDead($.clubber4_fm1)) {
                    $.cop7_fm1.setObjKillCharOnFoot($.clubber4_fm1)
                } else {
                    if (!Char.IsDead($.clubber1_fm1)) {
                        $.cop7_fm1.setObjKillCharOnFoot($.clubber1_fm1)
                    } else {
                        if (!Char.IsDead($.clubber2_fm1)) {
                            $.cop7_fm1.setObjKillCharOnFoot($.clubber2_fm1)
                        } else {
                            if (!Char.IsDead($.clubber7_fm1)) {
                                $.cop7_fm1.setObjKillCharOnFoot($.clubber7_fm1)
                            } else {
                                if (!Char.IsDead($.clubber6_fm1)) {
                                    $.cop7_fm1.setObjKillCharOnFoot($.clubber6_fm1)
                                } else {
                                    $.cop7_fm1.setObjKillPlayerOnFoot($.player)
                                    $.cop7_fm1.markAsNoLongerNeeded()
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        $.cop7_fm1.markAsNoLongerNeeded()
    }

    if (!Char.IsDead($.cop8_fm1)) {
        $.cop8_fm1.setSay(101 /* SOUND_SWAT_PED_SHOUT */)
        if ($.cop8_fm1.isStopped()) {
            if (!$.cop8_fm1.isShooting()) {
                if (!Char.IsDead($.clubber6_fm1)) {
                    $.cop8_fm1.setObjKillCharOnFoot($.clubber6_fm1)
                } else {
                    if (!Char.IsDead($.clubber1_fm1)) {
                        $.cop8_fm1.setObjKillCharOnFoot($.clubber1_fm1)
                    } else {
                        if (!Char.IsDead($.clubber2_fm1)) {
                            $.cop8_fm1.setObjKillCharOnFoot($.clubber2_fm1)
                        } else {
                            if (!Char.IsDead($.clubber7_fm1)) {
                                $.cop8_fm1.setObjKillCharOnFoot($.clubber7_fm1)
                            } else {
                                if (!Char.IsDead($.clubber4_fm1)) {
                                    $.cop8_fm1.setObjKillCharOnFoot($.clubber4_fm1)
                                } else {
                                    $.cop8_fm1.setObjKillPlayerOnFoot($.player)
                                    $.cop8_fm1.markAsNoLongerNeeded()
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        $.cop8_fm1.markAsNoLongerNeeded()
    }

    return
}

async function draw_disco_lights() {
    ++$.shadow_counter

    if ($.shadow_counter > 28 && $.shadow_counter < 32) {
        Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1272.5963, -1107.4248, 12.0, 30.0, 0.8, 0, $.R, $.G, 0) // ShadowType X Y Z Rotation Scale Transparency Red Green Blue
        Fx.DrawLight(1272.45, -1107.6, 13.1, $.R, $.G, 0)
    } else {
        $.G = Math.RandomIntInRange(0, 101)
        $.R = Math.RandomIntInRange(0, 101)
    }

    if ($.shadow_counter > 15 && $.shadow_counter < 20) {
        Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1270.9584, -1107.6783, 12.0, 0.0, 1.2, 0, $.R1, $.G1, 0) // ShadowType X Y Z Rotation Scale Transparency Red Green Blue
        Fx.DrawLight(1272.45, -1107.18, 13.1, $.R1, $.G1, 0)
    } else {
        $.G1 = Math.RandomIntInRange(0, 101)
        $.R1 = Math.RandomIntInRange(0, 101)
    }

    if ($.shadow_counter > 20 && $.shadow_counter < 40) {
        Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1273.3, -1107.0, 12.0, 80.0, 1.0, 0, $.R2, $.G2, 0) // ShadowType X Y Z Rotation Scale Transparency Red Green Blue
        Fx.DrawLight(1272.45, -1107.6, 12.8, $.R2, $.G2, 0)
    } else {
        $.G2 = Math.RandomIntInRange(0, 101)
        $.R2 = Math.RandomIntInRange(0, 101)
    }

    if ($.shadow_counter > 18 && $.shadow_counter < 40) {
        Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1273.3, -1107.7, 12.0, 140.0, 0.8, 0, $.R3, $.G3, 0) // ShadowType X Y Z Rotation Scale Transparency Red Green Blue
        Fx.DrawLight(1272.45, -1107.18, 12.8, $.R3, $.G3, 0)
    } else {
        $.G3 = Math.RandomIntInRange(0, 101)
        $.R3 = Math.RandomIntInRange(0, 101)
    }

    if ($.shadow_counter > 5 && $.shadow_counter < 14) {
        Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1271.4812, -1108.0588, 12.0, 235.0, 1.1, 0, $.R4, $.G4, 0) // ShadowType X Y Z Rotation Scale Transparency Red Green Blue
        Fx.DrawLight(1272.45, -1107.6, 12.5, $.R4, $.G4, 0)
    } else {
        $.G4 = Math.RandomIntInRange(0, 101)
        $.R4 = Math.RandomIntInRange(0, 101)
    }

    if ($.shadow_counter > 9 && $.shadow_counter < 26) {
        Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1271.557, -1107.0217, 12.0, 325.0, 1.8, 0, $.R5, $.G5, 0) // ShadowType X Y Z Rotation Scale Transparency Red Green Blue
        Fx.DrawLight(1272.45, -1107.18, 12.5, $.R5, $.G5, 0)
    } else {
        $.G5 = Math.RandomIntInRange(0, 101)
        $.R5 = Math.RandomIntInRange(0, 101)
    }

    if ($.shadow_counter == 40 || $.shadow_counter > 40) {
        $.shadow_counter = 0
    }

    return
}

async function delete_char_maria() {
    $.maria.delete()

    return
}

export async function frank1() {
    // MissionBoundary
    // *****************************************************************************************
    // ********************************* Frankie Mission 1 *************************************
    // *********************************   Pulp Friction   *************************************
    // *****************************************************************************************
    // *** Frankie wants to discuss war with his lieutenants. He needs Maria out of the house***
    // *** for the evening so Claude has to chaperone her. Drive Maria to a dealer to get her***
    // *** party gear. Then on to an illegal warehouse party and wait for her outside. While ***
    // *** waiting for Maria the police will decide to 'raid the joint'. The player must get ***
    // *** Maria out and back to Frankie's safely.											 ***
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_frankie1
    await mission_start_frankie1()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_frankie1_failed
        await mission_frankie1_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_frankie1
    await mission_cleanup_frankie1()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT frankies_limo chico chico_message_flag fm1_blip flag_blip_on_limo doorman1 doorman2 parked_car1 parked_car2 parked_car3 timera_reset timerb_reset
    // VAR_INT swatvan_fm1 swatvan2_fm1 cop1_fm1 cop2_fm1 cop3_fm1 cop4_fm1 cop5_fm1 cop6_fm1 cop7_fm1 cop8_fm1 clubbers_flee_flag
    // VAR_INT R G R1 G1 R2 G2 R3 G3 R4 G4 R5 G5 shadow_counter add_sound_flag camera_mode chico_audio_flag
    // VAR_INT clubber1_fm1 clubber2_fm1 clubber3_fm1 clubber4_fm1 clubber5_fm1 clubber6_fm1 clubber7_fm1 clubber8_fm1 maria_blip warehouse_rave_loop
    // VAR_INT clubber3_car1 clubber5_car2 clubber8_car3 flag_blip_on_maria create_more_swat1 create_more_swat2 swat1_exit_car swat2_exit_car
    // VAR_INT timerc_reset_flag_f1a timerc_current_f1a timerc_started_f1a timerc_f1a fuckup_flag fuckup_timer_start fuckup_timer_current fuckup_timer
    // VAR_INT timerc_reset_flag_f1b timerc_current_f1b timerc_started_f1b timerc_f1b locate_dome_flag swat_cam_needs_restoring skip_cutscene_flag

    // VAR_FLOAT swat1_stuck_x swat1_stuck_y swat1_stuck_z
    // VAR_FLOAT swat2_stuck_x swat2_stuck_y swat2_stuck_z
    // VAR_FLOAT chico_x chico_y chico_z inside_warehouse_x inside_warehouse_y inside_warehouse_z outside_warehouse_x outside_warehouse_y

    // ****************************************Mission Start************************************
}
