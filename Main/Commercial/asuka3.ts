// Generated from Main/Commercial/asuka3.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_asuka3() {
    Stat.RegisterMissionGiven()
    $.flag_player_on_mission = 1
    $.flag_player_on_asuka_mission = 1
    $.help1_displayed = 0
    $.help2_displayed = 0
    // SCRIPT_NAME asuka3
    await asyncWait(0)

    $.been_in_cop_boat_before = 0

    {
        Streaming.LoadSpecialModel(hier`cutobj01`, 'PLAYERH')
        Streaming.LoadSpecialModel(hier`cutobj02`, 'NOTE')
        Streaming.RequestModel(ped`MALE1`)
        Streaming.RequestModel(car`REEFER`)
        Streaming.RequestModel(car`SPEEDER`)
        Streaming.RequestModel(car`PREDATOR`)
        Streaming.RequestModel(car`STALLION`)
        Streaming.RequestModel(2216 /* condo_ivy */)
        Streaming.RequestModel(2215 /* kmricndo01 */)

        Streaming.LoadAllModelsNow()

        while (
            !Streaming.HasModelLoaded(hier`cutobj01`) ||
            !Streaming.HasModelLoaded(hier`cutobj02`) ||
            !Streaming.HasModelLoaded(2216 /* condo_ivy */) ||
            !Streaming.HasModelLoaded(2215 /* kmricndo01 */)
        ) {
            await asyncWait(0)
        }

        Cutscene.Load('A2_PP')
        Cutscene.SetOffset(523.102, -636.96, 15.616)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)
        $.cs_player.setAnim('player')

        $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`)
        $.cs_playerhead.setAnim('player')

        $.cs_note = CutsceneObject.Create(hier`cutobj02`)
        $.cs_note.setAnim('NOTE')

        World.ClearArea(523.6, -639.4, 16.6, 1.0, true /* TRUE */)
        $.player.setCoordinates(523.6, -639.4, 16.0)

        $.player.setHeading(180.0)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SwitchRubbish(false /* OFF */)
        Streaming.Switch(true /* ON */)
        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 3406) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('AM3_A', 10000, 1)

        while ($.cs_time < 5677) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('AM3_B', 10000, 1)

        while ($.cs_time < 11354) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('AM3_C', 10000, 1)

        while ($.cs_time < 16000) {
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
        Camera.SetInFrontOfPlayer()

        await asyncWait(1000)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
        Streaming.MarkModelAsNoLongerNeeded(2216 /* condo_ivy */)
        Streaming.MarkModelAsNoLongerNeeded(2215 /* kmricndo01 */)

        while (
            !Streaming.HasModelLoaded(ped`MALE1`) ||
            !Streaming.HasModelLoaded(car`SPEEDER`) ||
            !Streaming.HasModelLoaded(car`STALLION`) ||
            !Streaming.HasModelLoaded(car`PREDATOR`) ||
            !Streaming.HasModelLoaded(car`REEFER`)
        ) {
            await asyncWait(0)
        }

        World.ClearArea(640.0, -608.0, 0.0, 6.0, true /* TRUE */)
        $.spy_boat = Car.Create(135 /* BOAT_SPEEDER */, 612.0, -597.0, 0.0)
        $.spy_boat.setHeading(0.0)
        $.spy_boat.setOnlyDamagedByPlayer(true /* TRUE */)
        $.spy_boat.setHealth(1500)
        $.spy_boat.setStrong(true /* TRUE */)

        $.spy_bloke = Char.CreateInsideCar($.spy_boat, 4 /* PEDTYPE_CIVMALE */, ped`MALE1`)

        World.ClearArea(568.0, -686.0, 0.0, 6.0, true /* TRUE */)
        $.asuka_boat = Car.Create(136 /* BOAT_REEFER */, 568.0, -686.0, 0.0)
        $.asuka_boat.setHeading(180.0)

        World.ClearArea(554.8, -767.6, 0.0, 6.0, true /* TRUE */)
        $.cop_boat = Car.Create(113 /* BOAT_PREDATOR */, 554.8, -767.6, 0.0)
        $.blip1_as3 = Blip.AddForCar($.cop_boat)

        // START MISSION

        if (!Char.IsDead($.spy_bloke)) {
            $.blip2_as3 = Blip.AddForChar($.spy_bloke)
            $.blip2_as3.changeDisplay(1 /* MARKER_ONLY */)
        }

        await asyncWait(1500)

        $.player.setControl(false /* OFF */)
        Hud.SwitchWidescreen(true /* ON */)

        Camera.SetFixedPosition(526.0, -643.3, 19.6, 0.0, 0.0, 0.0)

        if (!Car.IsDead($.spy_boat)) {
            Camera.PointAtCar($.spy_boat, 15 /* FIXED */, 2 /* JUMP_CUT */)
        }

        await asyncWait(3000)

        $.player.setControl(true /* ON */)
        Hud.SwitchWidescreen(false /* OFF */)
        Camera.Restore()

        if (!Car.IsDead($.spy_boat)) {
            $.boat_health = $.spy_boat.getHealth()
            Hud.DisplayCounterWithString($.boat_health, 1 /* COUNTER_DISPLAY_BAR */, 'DAM')
            // SCM GOSUB boat_health
            await $.boat_health()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        TIMERB = 0

        while (!$.player.locateAnyMeansCar2D($.spy_boat, 55.0, 55.0, false /* FALSE */) && $.spy_boat.isHealthGreater(1499)) {
            await asyncWait(0)
            if ($.help1_displayed == 0) {
                if (TIMERB > 4000) {
                    $.controlmode = Pad.GetControllerMode()
                    if ($.controlmode == 3) {
                        Text.PrintHelp('BOATIN3')
                    } else {
                        Text.PrintHelp('BOATIN1')
                    }
                    $.help1_displayed = 1
                }
            }
            if ($.help2_displayed == 0) {
                if (TIMERB > 11000) {
                    $.controlmode = Pad.GetControllerMode()
                    if ($.controlmode == 3) {
                        Text.PrintHelp('BOATIN4')
                    } else {
                        Text.PrintHelp('BOATIN2')
                    }
                    $.help2_displayed = 1
                }
            }
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.setOnlyDamagedByPlayer(false /* FALSE */)
            $.spy_boat.setCruiseSpeed(48.0)
        }

        await asyncWait(0)
        //LOCATION1

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(744.8, -350.1, 0.0)
        }

        while (!$.spy_boat.locate3D(744.8, -350.1, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION2

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(728.9, -133.7, 0.0)
            $.spy_boat.setCruiseSpeed(45.0)
        }

        while (!$.spy_boat.locate3D(728.9, -133.7, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION3

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(635.5, 24.7, 0.0)
        }

        while (!$.spy_boat.locate3D(635.5, 24.7, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION4

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(746.6, 252.9, 0.0)
        }

        while (!$.spy_boat.locate3D(746.6, 252.9, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION5

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(872.1, 335.9, 0.0)
        }

        while (!$.spy_boat.locate3D(872.1, 335.9, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION6

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(1064.5, 180.8, 0.0)
        }

        while (!$.spy_boat.locate3D(1064.5, 180.8, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION7

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(1262.0, 166.0, 0.0)
        }

        while (!$.spy_boat.locate3D(1262.0, 166.0, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION8

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(1566.0, 52.0, 0.0)
        }

        while (!$.spy_boat.locate3D(1566.0, 52.0, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION9

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(1595.0, -154.0, 0.0)
        }

        while (!$.spy_boat.locate3D(1595.0, -154.0, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION10

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(1555.0, -299.0, 0.0)
        }

        while (!$.spy_boat.locate3D(1555.0, -299.0, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }

            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION11

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(1617.0, -600.0, 0.0)
        }

        while (!$.spy_boat.locate3D(1617.0, -600.0, 0.0, 5.0, 5.0, 5.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }

            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION12

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(1617.0, -762.0, 0.0)
        }

        while (!$.spy_boat.locate3D(1617.0, -762.0, 0.0, 5.0, 5.0, 5.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION13

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(1637.0, -950.0, 0.0)
        }

        while (!$.spy_boat.locate3D(1637.0, -950.0, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION14

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(1535.0, -1173.0, 0.0)
        }

        while (!$.spy_boat.locate3D(1535.0, -1173.0, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION15

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(1268.0, -1273.0, 0.0)
        }

        while (!$.spy_boat.locate3D(1268.0, -1273.0, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }

            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION16

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.goto(938.1, -1226.4, 0.0)
        }

        while (!$.spy_boat.locate3D(938.1, -1226.4, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }

            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION17

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.setCruiseSpeed(45.0)
            $.spy_boat.goto(618.0, -1083.0, 0.0)
        }

        while (!$.spy_boat.locate3D(618.0, -1083.0, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION18

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.setCruiseSpeed(35.0)
            $.spy_boat.goto(560.0, -899.0, 0.0)
        }

        while (!$.spy_boat.locate3D(560.0, -899.0, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        //LOCATION19

        if (!Car.IsDead($.spy_boat)) {
            $.spy_boat.setCruiseSpeed(20.0)
            $.spy_boat.goto(548.0, -795.0, 0.0)
        }

        while (!$.spy_boat.locate3D(548.0, -795.0, 0.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_boat)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_boat)) {
                if (!$.player.locateAnyMeansCar2D($.spy_boat, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
                        $.spy_boat.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!Car.IsDead($.spy_boat)) {
                // SCM GOSUB boat_health
                await $.boat_health()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        await asyncWait(1000)

        if (!Car.IsDead($.spy_boat) && !Char.IsDead($.spy_bloke)) {
            $.spy_boat.stop()
            $.spy_boat.anchor(true /* TRUE */)
            $.spy_bloke.warpFromCarToCoord(547.3, -778.4, -100.0)
            Hud.ClearCounter($.boat_health)
        }

        $.spy_car = Car.Create(122 /* CAR_STALLION */, 499.7, -734.4, -100.0)
        $.spy_car.setHeading(90.0)

        $.spy_bloke.setRunning(true /* TRUE */)
        $.spy_bloke.setObjRunToCoord(510.0, -775.6)

        while (!$.spy_bloke.isObjectivePassed()) {
            await asyncWait(0)
            if (Char.IsDead($.spy_bloke)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        $.spy_bloke.setObjRunToCoord(505.2, -751.1)

        while (!$.spy_bloke.isObjectivePassed()) {
            await asyncWait(0)
            if (Char.IsDead($.spy_bloke)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        $.spy_bloke.setObjRunToCoord(501.1, -749.5)

        while (!$.spy_bloke.isObjectivePassed()) {
            await asyncWait(0)
            if (Char.IsDead($.spy_bloke)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        if (!Car.IsDead($.spy_car)) {
            $.spy_bloke.setObjEnterCarAsDriver($.spy_car)
        }

        while (!$.spy_bloke.isInCar($.spy_car)) {
            await asyncWait(0)
            if (Char.IsDead($.spy_bloke)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.spy_car) && !Char.IsDead($.spy_bloke)) {
                // SCM GOTO → is_he_dead_yet (not lowered; manual jump required)
                throw new Error('unresolved GOTO is_he_dead_yet') // fallback: would break linear control flow
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        if (!Car.IsDead($.spy_car)) {
            $.spy_car.gotoCoordinatesAccurate(463.0, -727.4, 16.1)
            $.spy_car.setMission(13 /* MISSION_GOTOCOORDS_STRAIGHT_ACCURATE */)
            $.spy_car.setDrivingStyle(1)
            $.spy_car.setCruiseSpeed(15.0)
        }

        while (!$.spy_car.locate3D(463.0, -727.4, 16.1, 3.0, 3.0, 3.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_car)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (Char.IsDead($.spy_bloke)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!$.spy_bloke.isInCar($.spy_car)) {
                // SCM GOTO → is_he_dead_yet (not lowered; manual jump required)
                throw new Error('unresolved GOTO is_he_dead_yet') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_car)) {
                if (!$.player.locateAnyMeansCar2D($.spy_car, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_car) && !Char.IsDead($.spy_bloke)) {
                        $.spy_car.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        if (!Car.IsDead($.spy_car)) {
            $.spy_car.gotoCoordinatesAccurate(456.0, -707.1, 16.0)
            $.spy_car.setMission(13 /* MISSION_GOTOCOORDS_STRAIGHT_ACCURATE */)
        }

        while (!$.spy_car.locate3D(456.0, -707.1, 16.0, 3.0, 3.0, 3.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_car)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (Char.IsDead($.spy_bloke)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!$.spy_bloke.isInCar($.spy_car)) {
                // SCM GOTO → is_he_dead_yet (not lowered; manual jump required)
                throw new Error('unresolved GOTO is_he_dead_yet') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_car)) {
                if (!$.player.locateAnyMeansCar2D($.spy_car, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_car) && !Char.IsDead($.spy_bloke)) {
                        $.spy_car.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        if (!Car.IsDead($.spy_car)) {
            $.spy_car.gotoCoordinatesAccurate(459.0, -678.1, 16.0)
            $.spy_car.setMission(13 /* MISSION_GOTOCOORDS_STRAIGHT_ACCURATE */)
        }

        while (!$.spy_car.locate3D(459.0, -678.1, 16.0, 3.0, 3.0, 3.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.spy_car)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (Char.IsDead($.spy_bloke)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!$.spy_bloke.isInCar($.spy_car)) {
                // SCM GOTO → is_he_dead_yet (not lowered; manual jump required)
                throw new Error('unresolved GOTO is_he_dead_yet') // fallback: would break linear control flow
            }
            if (!Car.IsDead($.spy_car)) {
                if (!$.player.locateAnyMeansCar2D($.spy_car, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Car.IsDead($.spy_car) && !Char.IsDead($.spy_bloke)) {
                        $.spy_car.delete()
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        if (!Car.IsDead($.spy_car)) {
            $.spy_car.wanderRandomly()
            $.spy_car.setDrivingStyle(2)
            $.spy_car.setCruiseSpeed(25.0)
        }

        while (!Char.IsDead($.spy_bloke)) {
            await asyncWait(0)
            if (!Char.IsDead($.spy_bloke)) {
                if (!$.player.locateAnyMeansChar2D($.spy_bloke, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Char.IsDead($.spy_bloke)) {
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            if (Car.IsDead($.spy_car)) {
                // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
            }
            if (!$.spy_bloke.isInCar($.spy_car)) {
                // SCM GOTO → is_he_dead_yet (not lowered; manual jump required)
                throw new Error('unresolved GOTO is_he_dead_yet') // fallback: would break linear control flow
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
        }
    }

    async function is_he_dead_yet() {
        $.spy_bloke.setObjFleePlayerOnFootAlways($.player)

        while (!Char.IsDead($.spy_bloke)) {
            await asyncWait(0)
            if (!Char.IsDead($.spy_bloke)) {
                if (!$.player.locateAnyMeansChar2D($.spy_bloke, 160.0, 160.0, false /* FALSE */)) {
                    Text.PrintNow('AWAY', 5000, 2) // Mission brief
                    if (!Char.IsDead($.spy_bloke)) {
                        $.spy_bloke.delete()
                    }
                    // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka3_failed') // fallback: would break linear control flow
                }
            }
            // SCM GOSUB check_boats_dead
            await check_boats_dead()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_asuka3_passed') // fallback: would break linear control flow
    }

    // Mission asuka3 failed
}

async function mission_asuka3_failed() {
    Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed"
    return

    // mission asuka3 passed
}

async function mission_asuka3_passed() {
    Hud.ClearCounter($.boat_health)
    $.flag_asuka_mission3_passed = 1
    Audio.PlayMissionPassedTune(1)
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1) //"Mission Passed!"
    $.player.clearWantedLevel()
    $.player.addScore(10000)
    Stat.RegisterMissionPassed('AM3')
    Stat.PlayerMadeProgress(1)
    // START_NEW_SCRIPT asuka_mission4_loop
    return

    // mission cleanup
}

async function mission_cleanup_asuka3() {
    $.flag_player_on_mission = 0
    $.flag_player_on_asuka_mission = 0
    $.blip1_as3.remove()
    $.blip2_as3.remove()
    Streaming.MarkModelAsNoLongerNeeded(ped`MALE1`)
    Streaming.MarkModelAsNoLongerNeeded(car`SPEEDER`)
    Streaming.MarkModelAsNoLongerNeeded(car`REEFER`)
    Streaming.MarkModelAsNoLongerNeeded(car`PREDATOR`)
    Streaming.MarkModelAsNoLongerNeeded(car`STALLION`)
    Hud.ClearCounter($.boat_health)
    Mission.Finish()
    return
}

async function boat_health() {
    {
        $.boat_health = $.spy_boat.getHealth()

        $.boat_health2 = 1500 - $.boat_health

        if ($.boat_health2 > 1500) {
            $.boat_health2 = 1500
        }

        $.boat_health = $.boat_health2 / 15

        return
    }
}

async function check_boats_dead() {
    {
        if (!Car.IsDead($.cop_boat)) {
            if ($.player.isInCar($.cop_boat) && $.been_in_cop_boat_before == 0) {
                $.controlmode = Pad.GetControllerMode()
                if (!($.controlmode == 3)) {
                    Text.PrintHelp('PBOAT_1')
                } else {
                    Text.PrintHelp('PBOAT_2')
                }
                $.blip1_as3.remove()
                $.been_in_cop_boat_before = 1
            }
        } else {
            if ($.been_in_cop_boat_before == 0) {
                $.blip1_as3.remove()
                $.been_in_cop_boat_before = 1
            }
        }

        return
    }
}

export async function asuka3() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *************************************Asuka mission 3*************************************
    // *************************************Boat Spy thing**************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_asuka3
    await mission_start_asuka3()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_asuka3_failed
        await mission_asuka3_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_asuka3
    await mission_cleanup_asuka3()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT blip1_as3 blip2_as3 cop_boat been_in_cop_boat_before
    // VAR_INT spy_boat spy_bloke spy_car
    // VAR_INT spy_blokes_car asuka_boat
    // VAR_INT boat_coord_number boat_health boat_health2
    // VAR_INT help1_displayed help2_displayed
    // ****************************************Mission Start************************************
}
