// Generated from Main/Industrial/joey1.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_joey1() {
    Stat.RegisterMissionGiven()
    $.flag_player_on_mission = 1
    $.flag_player_on_joey_mission = 1
    $.mission_passed_for_lips_finished = 0
    // SCRIPT_NAME joey1
    await asyncWait(0)

    $.flag_displayed_wanted_message_jm1 = 0

    {
        Streaming.LoadSpecialCharacter(1, $.joey)
        Streaming.LoadSpecialCharacter(2, $.misty)
        Streaming.LoadSpecialModel(hier`cutobj01`, JOEDOOR)
        Streaming.LoadSpecialModel(hier`cutobj02`, JOEYH)
        Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH)
        Streaming.LoadSpecialModel(hier`cutobj04`, MISTYH)
        Streaming.RequestModel(car`IDAHO`)
        Streaming.RequestModel(jogarageext)
        Streaming.RequestModel(jogarageint)

        Streaming.LoadAllModelsNow()

        while (!Streaming.HasModelLoaded(jogarageext) || !Streaming.HasModelLoaded(jogarageint)) {
            await asyncWait(0)
        }

        while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasSpecialCharacterLoaded(2) || !Streaming.HasModelLoaded(car`IDAHO`)) {
            await asyncWait(0)
        }

        while (
            !Streaming.HasModelLoaded(hier`cutobj01`) ||
            !Streaming.HasModelLoaded(hier`cutobj02`) ||
            !Streaming.HasModelLoaded(hier`cutobj03`) ||
            !Streaming.HasModelLoaded(hier`cutobj04`)
        ) {
            await asyncWait(0)
        }

        Cutscene.Load(J1_LFL)
        Cutscene.SetOffset(1190.079, -869.861, 13.977)

        $.cut_car2_lm3 = Car.Create(84 /* CAR_IDAHO */, 1182.5, -857.0, 14.1)
        $.cut_car2_lm3.setHeading(291.2)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)
        $.cs_player.setAnim($.player)

        $.cs_joey = CutsceneObject.Create(ped`SPECIAL1`)
        $.cs_joey.setAnim($.joey)

        $.cs_misty = CutsceneObject.Create(ped`SPECIAL2`)
        $.cs_misty.setAnim($.misty)

        $.cs_joeyhead = CutsceneHead.Create($.cs_joey, hier`cutobj02`)
        $.cs_joeyhead.setAnim($.joey)

        $.cs_mistyhead = CutsceneHead.Create($.cs_misty, hier`cutobj04`)
        $.cs_mistyhead.setAnim($.misty)

        $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`)
        $.cs_playerhead.setAnim($.player)

        $.cs_joedoor = CutsceneObject.Create(hier`cutobj01`)
        $.cs_joedoor.setAnim(JOEDOOR)

        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1375 /* joey_door1 */, false /* FALSE */)
        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1374 /* joey_door2 */, false /* FALSE */)

        World.ClearArea(1191.9, -870.4, 15.0, 1.0, true /* TRUE */)
        $.player.setCoordinates(1191.9, -870.4, -100.0)

        $.player.setHeading(230.0)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SwitchRubbish(false /* OFF */)
        Streaming.Switch(true /* ON */)
        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 433) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_A', 10000, 2) // Mission brief

        while ($.cs_time < 2739) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_B', 10000, 2) // Mission brief

        while ($.cs_time < 6344) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_C', 10000, 2) // Mission brief

        while ($.cs_time < 8362) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_D', 10000, 2) // Mission brief

        while ($.cs_time < 10700) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_E', 10000, 2) // Mission brief

        while ($.cs_time < 12688) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_F', 10000, 2) // Mission brief

        while ($.cs_time < 15858) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_G', 10000, 2) // Mission brief

        while ($.cs_time < 19969) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_H', 10000, 2) // Mission brief

        while ($.cs_time < 21519) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_I', 3000, 2) // Mission brief

        while ($.cs_time < 24979) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_J', 10000, 2) // Mission brief

        while ($.cs_time < 27466) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('JM1_K', 10000, 2) // Mission brief

        while ($.cs_time < 29204) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearPrints()

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

        World.SwitchRubbish(true /* ON */)
        Cutscene.Clear()
        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1375 /* joey_door1 */, true /* TRUE */)
        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1374 /* joey_door2 */, true /* TRUE */)
        Camera.SetInFrontOfPlayer()

        $.blip2_jm1 = Blip.AddSpriteForCoord(1282.0, -104.0, -100.0, 2 /* RADAR_SPRITE_BOMB */)
        $.blip4_jm1 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */)
        $.blip3_jm1 = Blip.AddForCoord(1335.0, -455.0, -100.0)
        $.blip2_jm1.remove()
        $.blip3_jm1.remove()
        $.blip4_jm1.remove()

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        Streaming.UnloadSpecialCharacter(1)
        Streaming.UnloadSpecialCharacter(2)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`)
        Streaming.MarkModelAsNoLongerNeeded(car`IDAHO`)
        Streaming.MarkModelAsNoLongerNeeded(jogarageext)
        Streaming.MarkModelAsNoLongerNeeded(jogarageint)

        $.cut_car2_lm3.delete()

        // START OF MISSION

        Streaming.LoadSpecialCharacter(3, $.lips)
        Streaming.RequestModel(car`IDAHO`)

        while (!Streaming.HasModelLoaded(car`IDAHO`) || !Streaming.HasSpecialCharacterLoaded(3)) {
            await asyncWait(0)
        }

        if ($.timer_help_message_displayed == 0) {
            Text.PrintHelp('TIMER')
            $.timer_help_message_displayed = 1
        }

        $.mike_car = Car.Create(84 /* CAR_IDAHO */, 1336.2, -460.8, -100.0)
        $.mike_car.makeABitStronger(true /* TRUE */)
        $.mike_car.lockDoors(6 /* CARLOCK_FORCE_SHUT_DOORS */)
        $.mike_car.setHeading(90.0)
        $.mike_car.setCanRespray(false /* OFF */)
        $.blip1_jm1 = Blip.AddForCar($.mike_car)
        $.countdown_jm1 = 361000
        Hud.DisplayTimer($.countdown_jm1)

        if (Car.IsDead($.mike_car)) {
            Text.PrintNow('WRECKED', 5000, 1)
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
        }

        while (!$.player.isInCar($.mike_car)) {
            await asyncWait(0)
            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.countdown_jm1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
        }

        Text.PrintNow('JM1_1', 5000, 1) //"Go to 8 Balls"

        Game.SetFreeBombs(true /* On */)
    }

    async function Go_to_8Balls() {
        $.flag_car_blip_displayed_jm1 = 1 /* TRUE */

        while (!$.mike_car.isArmedWithBomb(2 /* CARBOMB_ONIGNITION */) && !$.mike_car.isArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */)) {
            await asyncWait(0)
            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.countdown_jm1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.player.isInCar($.mike_car)) {
                if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
                    if (!$.mike_car.isArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */) || !$.mike_car.isArmedWithBomb(2 /* CARBOMB_ONIGNITION */)) {
                        $.blip2_jm1.remove()
                        $.blip2_jm1 = Blip.AddSpriteForCoord(1282.0, -104.0, -100.0, 2 /* RADAR_SPRITE_BOMB */)
                        $.blip1_jm1.remove()
                    }
                    $.flag_car_blip_displayed_jm1 = 0 /* FALSE */
                }
            }
            if (!$.player.isInCar($.mike_car)) {
                if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
                    $.blip1_jm1 = Blip.AddForCar($.mike_car)
                    $.blip2_jm1.remove()
                    Text.PrintNow('IN_VEH', 5000, 1) //"Get back in the car!"
                    $.flag_car_blip_displayed_jm1 = 1 /* TRUE */
                }
            }
            if (!$.mike_car.isHealthGreater(700) || $.mike_car.isVisiblyDamaged()) {
                Text.PrintSoon('JM1_4', 5000, 2) //Repair the car!
                $.blip1_jm1.remove()
                $.blip1_jm1 = Blip.AddForCar($.mike_car)
                $.blip1_jm1.changeDisplay(2 /* BLIP_ONLY */)
                $.flag_car_blip_displayed_jm1 = 1 /* TRUE */
                while ($.mike_car.isVisiblyDamaged()) {
                    await asyncWait(0)
                    if (Car.IsDead($.mike_car)) {
                        Text.PrintNow('WRECKED', 5000, 1)
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
                    }
                    if ($.mike_car.isArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */) || $.mike_car.isArmedWithBomb(2 /* CARBOMB_ONIGNITION */)) {
                        $.blip2_jm1.remove()
                    }
                    if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                        Text.PrintNow('WRECKED', 5000, 1)
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
                    }
                    if ($.countdown_jm1 == 0) {
                        Text.PrintNow('OUTTIME', 5000, 1)
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
                    }
                    if ($.player.isInCar($.mike_car)) {
                        if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
                            $.blip4_jm1.remove()
                            $.blip4_jm1 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */)
                            $.blip1_jm1.remove()
                            $.flag_car_blip_displayed_jm1 = 0 /* FALSE */
                        }
                    }
                    if (!$.player.isInCar($.mike_car)) {
                        if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
                            $.blip1_jm1 = Blip.AddForCar($.mike_car)
                            $.blip4_jm1.remove()
                            Text.PrintNow('IN_VEH', 5000, 1) //"Get back in the car!"
                            $.flag_car_blip_displayed_jm1 = 1 /* TRUE */
                        }
                    }
                }
                $.blip4_jm1.remove()
                // SCM GOTO → Go_to_8Balls (not lowered; manual jump required)
                throw new Error('unresolved GOTO Go_to_8Balls') // fallback: would break linear control flow
            }
        }

        await asyncWait(4000)

        Text.PrintNow('jm1_2', 5000, 2) // Car rigged
        $.blip1_jm1.remove()
        $.blip2_jm1.remove()
        $.blip4_jm1.remove()
    }

    async function one_before_joey_label1() {
        Game.SetFreeBombs(false /* Off */)
    }

    async function joey_label1() {
        await asyncWait(0)
        $.flag_car_blip_displayed_jm1 = 1 /* TRUE */

        if (Car.IsDead($.mike_car)) {
            Text.PrintNow('WRECKED', 5000, 1)
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
        }

        $.blob_flag = 1

        while (!$.mike_car.isStoppedInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, $.blob_flag) || $.player.isWantedLevelGreater(0) || $.mike_car.isVisiblyDamaged()) {
            await asyncWait(0)
            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.countdown_jm1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.player.isInCar($.mike_car)) {
                if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
                    $.blip3_jm1.remove()
                    $.blip3_jm1 = Blip.AddForCoord(1335.0, -455.0, -100.0)
                    $.blip1_jm1.remove()
                    $.blob_flag = 1
                    $.flag_car_blip_displayed_jm1 = 0 /* FALSE */
                }
            }
            if (!$.player.isInCar($.mike_car)) {
                if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
                    $.blip1_jm1 = Blip.AddForCar($.mike_car)
                    $.blip3_jm1.remove()
                    Text.PrintNow('IN_VEH', 5000, 1) //"Get back in the car!"
                    $.blob_flag = 0
                    $.flag_car_blip_displayed_jm1 = 1 /* TRUE */
                }
            }
            if (!$.mike_car.isHealthGreater(700) || $.mike_car.isVisiblyDamaged()) {
                Text.PrintSoon('JM1_4', 5000, 2) //Repair the car!
                $.blip3_jm1.remove()
                $.blip1_jm1.remove()
                $.blip1_jm1 = Blip.AddForCar($.mike_car)
                $.blip1_jm1.changeDisplay(2 /* BLIP_ONLY */)
                $.flag_car_blip_displayed_jm1 = 1 /* TRUE */
                while ($.mike_car.isVisiblyDamaged()) {
                    await asyncWait(0)
                    if (Car.IsDead($.mike_car)) {
                        Text.PrintNow('WRECKED', 5000, 1)
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
                    }
                    if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                        Text.PrintNow('WRECKED', 5000, 1)
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
                    }
                    if ($.countdown_jm1 == 0) {
                        Text.PrintNow('OUTTIME', 5000, 1)
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
                    }
                    if ($.player.isInCar($.mike_car)) {
                        if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
                            $.blip4_jm1.remove()
                            $.blip4_jm1 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */)
                            $.blip1_jm1.remove()
                            $.blob_flag = 1
                            $.flag_car_blip_displayed_jm1 = 0 /* FALSE */
                        }
                    }
                    if (!$.player.isInCar($.mike_car)) {
                        if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
                            $.blip1_jm1 = Blip.AddForCar($.mike_car)
                            $.blip4_jm1.remove()
                            Text.PrintNow('IN_VEH', 5000, 1) //"Get back in the car!"
                            $.blob_flag = 0
                            $.flag_car_blip_displayed_jm1 = 1 /* TRUE */
                        }
                    }
                }
                $.blip4_jm1.remove()
                // SCM GOTO → joey_label1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO joey_label1') // fallback: would break linear control flow
            }
            if ($.player.isInAreaInCar3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, false /* FALSE */)) {
                if ($.player.isWantedLevelGreater(0)) {
                    if ($.flag_displayed_wanted_message_jm1 == 0) {
                        Text.PrintNow('WANTED1', 4000, 1)
                        $.flag_displayed_wanted_message_jm1 = 1
                    }
                }
            } else {
                if (!$.player.isInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, false /* FALSE */)) {
                    $.flag_displayed_wanted_message_jm1 = 0
                }
            }
        }

        $.blip1_jm1.remove()
        $.blip2_jm1.remove()
        $.blip3_jm1.remove()
        $.blip4_jm1.remove()

        if ($.countdown_jm1 == 0) {
            Text.PrintNow('OUTTIME', 5000, 1)
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
        }

        if (!Car.IsDead($.mike_car)) {
            $.mikes_car_heading = $.mike_car.getHeading()
            if ($.mikes_car_heading > 100.0 || $.mikes_car_heading < 80.0) {
                Text.PrintNow('JM1_6', 5000, 1) //Put the car back in the correct position
                // SCM GOTO → joey_label1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO joey_label1') // fallback: would break linear control flow
            }
            if ($.player.isInCar($.mike_car)) {
                Text.PrintNow('JM1_3', 5000, 2) //Activate the car bomb then get out of there!
            }
        }
    }

    async function cars_rigged() {
        await asyncWait(0)

        if (Car.IsDead($.mike_car)) {
            Text.PrintNow('WRECKED', 5000, 1)
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
        }

        while (
            !$.mike_car.isStoppedInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, true /* TRUE */) ||
            $.player.isInArea3D(1306.0, -482.0, 49.0, 1350.0, -444.0, 59.0, false /* FALSE */) ||
            !$.player.isInArea3D(1306.0, -484.0, 49.0, 1370.0, -434.0, 69.0, false /* FALSE */)
        ) {
            await asyncWait(0)
            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.countdown_jm1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if (!$.mike_car.isInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, false /* FALSE */)) {
                Text.PrintNow('JM1_6', 5000, 1)
                // SCM GOTO → joey_label1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO joey_label1') // fallback: would break linear control flow
            }
            $.mikes_car_heading = $.mike_car.getHeading()
            if ($.mikes_car_heading > 100.0 || $.mikes_car_heading < 80.0) {
                Text.PrintNow('JM1_6', 5000, 1)
                // SCM GOTO → joey_label1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO joey_label1') // fallback: would break linear control flow
            }
            if (!$.mike_car.isHealthGreater(700) || $.mike_car.isVisiblyDamaged()) {
                // SCM GOTO → joey_label1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO joey_label1') // fallback: would break linear control flow
            }
        }

        if ($.countdown_jm1 == 0) {
            Text.PrintNow('OUTTIME', 5000, 1)
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
        }

        if (!$.mike_car.isArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */)) {
            Text.PrintNow('JM1_5', 5000, 1) // The vehicle bomb's not set!
            // SCM GOTO → cars_rigged (not lowered; manual jump required)
            throw new Error('unresolved GOTO cars_rigged') // fallback: would break linear control flow
        }

        //LIPS CUT_SCENE

        World.ClearArea(1325.5, -452.5, 54.0, 4.0, true /* TRUE */)
        World.ClearArea(1328.4, -453.0, 54.0, 4.0, true /* TRUE */)
        World.ClearArea(1330.0, -466.1, 49.0, 4.0, true /* TRUE */)
        World.ClearArea(1333.6, -465.3, 49.0, 4.0, true /* TRUE */)

        Hud.ClearTimer($.countdown_jm1)
        Game.SetPoliceIgnorePlayer($.player, true /* On */)
        $.player.setControl(false /* Off */)
        Hud.SwitchWidescreen(true /* ON */)

        $.lips = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL3`, 1325.5, -452.5, -100.0)
        $.lips.setHeading(270.0)

        Camera.SetFixedPosition(1337.814, -468.631, 49.774, 0.0, 0.0, 0.0)
        Camera.PointAtPoint(1337.053, -468.016, 49.982, 2 /* JUMP_CUT */)

        $.lips.setObjGotoCoordOnFoot(1328.4, -453.0)

        if (Char.IsDead($.lips)) {
            // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_passed') // fallback: would break linear control flow
        }

        TIMERB = 0

        if (!Char.IsDead($.lips)) {
            while (!$.lips.isObjectivePassed()) {
                await asyncWait(0)
                if (Car.IsDead($.mike_car)) {
                    Text.PrintNow('WRECKED', 5000, 1)
                    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
                }
                if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                    Text.PrintNow('WRECKED', 5000, 1)
                    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
                }
                if (Char.IsDead($.lips)) {
                    // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey1_passed') // fallback: would break linear control flow
                }
                if (TIMERB > 10000) {
                    if (!Char.IsDead($.lips)) {
                        $.lips.setCoordinates(1328.4, -453.0, -100.0)
                    }
                }
            }
        }

        TIMERB = 0

        if (!Char.IsDead($.lips)) {
            $.lips.setObjGotoCoordOnFoot(1330.0, -466.1)
        }

        while (!$.lips.isObjectivePassed()) {
            await asyncWait(0)
            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if (Char.IsDead($.lips)) {
                // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_passed') // fallback: would break linear control flow
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.lips)) {
                    $.lips.setCoordinates(1330.0, -466.1, -100.0)
                }
            }
        }

        TIMERB = 0

        if (!Char.IsDead($.lips)) {
            $.lips.setObjGotoCoordOnFoot(1333.6, -465.3)
        }

        Camera.SetFixedPosition(1344.8, -471.2, 54.0, 0.0, 0.0, 0.0)

        if (!Car.IsDead($.mike_car)) {
            Camera.PointAtCar($.mike_car, 15 /* FIXED */, 2 /* JUMP_CUT */)
        }

        if (!Char.IsDead($.lips)) {
            while (!$.lips.isObjectivePassed()) {
                await asyncWait(0)
                if (Car.IsDead($.mike_car)) {
                    Text.PrintNow('WRECKED', 5000, 1)
                    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
                }
                if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                    Text.PrintNow('WRECKED', 5000, 1)
                    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
                }
                if (Char.IsDead($.lips)) {
                    // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey1_passed') // fallback: would break linear control flow
                }
                if (TIMERB > 10000) {
                    if (!Char.IsDead($.lips)) {
                        $.lips.setCoordinates(1333.6, -465.3, -100.0)
                    }
                }
            }
        }

        if (!Char.IsDead($.lips) && !Car.IsDead($.mike_car)) {
            $.lips.setObjEnterCarAsDriver($.mike_car)
        }

        while (!$.lips.isInCar($.mike_car)) {
            await asyncWait(0)
            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed') // fallback: would break linear control flow
            }
            if (Char.IsDead($.lips)) {
                // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_passed') // fallback: would break linear control flow
            }
        }

        Game.SetAllCarsCanBeDamaged(true /* TRUE */)

        await asyncWait(2500)
        Audio.PlayMissionPassedTune(1)
        Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1) //"Mission Passed!"
        $.player.addScore(10000)
        $.mission_passed_for_lips_finished = 1
        await asyncWait(5000)

        $.player.setControl(true /* On */)
        Hud.SwitchWidescreen(false /* OFF */)
        Game.SetPoliceIgnorePlayer($.player, false /* Off */)
    }

    // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_joey1_passed') // fallback: would break linear control flow

    // Mission joey1 failed
}

async function mission_joey1_failed() {
    Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed"
    return

    // mission joey1 passed
}

async function mission_joey1_passed() {
    $.flag_joey_mission1_passed = 1

    if ($.mission_passed_for_lips_finished == 0) {
        Audio.PlayMissionPassedTune(1)
        Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1) //"Mission Passed!"
        $.player.addScore(10000)
        $.mission_passed_for_lips_finished = 1
    }

    Stat.RegisterMissionPassed('JM1')
    Stat.PlayerMadeProgress(1)
    $.lips.removeElegantly()
    // START_NEW_SCRIPT joey_mission2_loop
    return

    // mission cleanup
}

async function mission_cleanup_joey1() {
    $.flag_player_on_mission = 0
    $.flag_player_on_joey_mission = 0
    $.blip1_jm1.remove()
    $.blip2_jm1.remove()
    $.blip3_jm1.remove()
    $.blip4_jm1.remove()
    Streaming.MarkModelAsNoLongerNeeded(car`IDAHO`)
    Streaming.UnloadSpecialCharacter(3)
    Hud.ClearTimer($.countdown_jm1)
    if (!Car.IsDead($.mike_car)) {
        $.mike_car.setCanRespray(true /* ON */)
        $.mike_car.lockDoors(1 /* CARLOCK_UNLOCKED */)
        $.mike_car.makeABitStronger(false /* FALSE */)
    }
    Game.SetFreeBombs(false /* Off */)
    Mission.Finish()
    return
}

export async function joey1() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Joey mission 1****************************************
    // ************************************Kill Mike Lips*****************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_joey1
    await mission_start_joey1()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_joey1_failed
        await mission_joey1_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_joey1
    await mission_cleanup_joey1()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT mike_car

    // VAR_FLOAT mikes_car_heading

    // VAR_INT blip1_jm1 blip2_jm1 blip3_jm1 blip4_jm1

    // VAR_INT flag_player_got_joey1_message flag_car_blip_displayed_jm1

    // VAR_INT flag_displayed_wanted_message_jm1

    // VAR_INT countdown_jm1 mission_passed_for_lips_finished

    // ***************************************Mission Start*************************************
}
