// Generated from Main/Industrial/rampage.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function rampage_pickup_loop() {
    // SCM GOTO → rampage_pickup_loop lowered to endless loop
    while (true) {
        await asyncWait(500)

        //IF IS_GERMAN_GAME
        //OR IS_FRENCH_GAME
        //	GOTO german_rampage_over
        //ENDIF

        if ($.rampage_01_flag == 0) {
            if ($.rampage_01.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 6 /* WEAPONTYPE_M16 */, 120000, $.rampage_01_kills, ped`GANG_DIABLO_A`, ped`GANG_DIABLO_B`, -1, -1, false /* FALSE */) // "Murder 20 Diablos in 120 seconds!"
                Streaming.RequestModel(ped`GANG_DIABLO_A`)
                Streaming.RequestModel(ped`GANG_DIABLO_B`)
                World.ForceRandomPedType(9 /* PEDTYPE_GANG_DIABLO */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_01', $.rampage_01_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_01_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    $.rampage_01.remove()
                    if ($.rampage_01_failed == 0) {
                        $.rampage_01 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 987.6, -907.3, 15.3) //NEXT TO FUZZBALL
                        $.rampage_01_failed = 1
                    } else {
                        $.rampage_01 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 958.0, -431.0, 14.5) //OPPOSITE LUIGI'S IN AN ALLEYWAY
                        $.rampage_01_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_DIABLO_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_DIABLO_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_02_flag == 0) {
            if ($.rampage_02.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 8 /* WEAPONTYPE_ROCKET */, 120000, $.rampage_02_kills, -2, -1, -1, -1, false /* FALSE */) // "Destroy 20 vehicles in 120 seconds!"
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_02', $.rampage_02_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_02_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    $.rampage_02.remove()
                    if ($.rampage_02_failed == 0) {
                        $.rampage_02 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 982.4, -1009.4, 14.9) //EAST OF GREASY JOES
                        $.rampage_02_failed = 1
                    } else {
                        $.rampage_02 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1076.9, -859.9, 15.2) //BOTTOM OF CALAHAN BRIDGE
                        $.rampage_02_failed = 0
                    }
                }
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_03_flag == 0) {
            if ($.rampage_03.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 5 /* WEAPONTYPE_CHAINGUN */, 120000, $.rampage_03_kills, ped`GANG_MAFIA_A`, ped`GANG_MAFIA_B`, -1, -1, false /* FALSE */) // "Kill 20 Mafia in 120 seconds!"
                Streaming.RequestModel(ped`GANG_MAFIA_A`)
                Streaming.RequestModel(ped`GANG_MAFIA_B`)
                World.ForceRandomPedType(7 /* PEDTYPE_GANG_MAFIA */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_03', $.rampage_03_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_03_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_03_failed == 0) {
                        $.rampage_03 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1209.5, -380.1, 25.5) //JUST SOUTH OF TONI'S BEHIND WALL
                        $.rampage_03_failed = 1
                    } else {
                        $.rampage_03 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1312.3, -315.7, 42.6) //ST MARKS BEHIND TONI'S
                        $.rampage_03_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_04_flag == 0) {
            if ($.rampage_04.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 3 /* WEAPONTYPE_UZI */, 120000, $.rampage_04_kills, ped`GANG_TRIAD_A`, ped`GANG_TRIAD_B`, -1, -1, false /* FALSE */) // "Kill 20 Triads in 120 seconds!"
                Streaming.RequestModel(ped`GANG_TRIAD_A`)
                Streaming.RequestModel(ped`GANG_TRIAD_B`)
                World.ForceRandomPedType(8 /* PEDTYPE_GANG_TRIAD */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_04', $.rampage_04_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_04_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_04_failed == 0) {
                        $.rampage_04 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1253.9, -572.9, 12.5) //SUPASAVE
                        $.rampage_04_failed = 1
                    } else {
                        $.rampage_04 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 883.3, -806.2, 15.0) //BEHIND BUILDING CHINATOWN NEAR BRIDGE
                        $.rampage_04_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_05_flag == 0) {
            if ($.rampage_05.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 4 /* WEAPONTYPE_SHOTGUN */, 120000, $.rampage_05_kills, ped`GANG_TRIAD_A`, ped`GANG_TRIAD_B`, -1, -1, false /* FALSE */) // "Kill 20 Triads in 120 seconds!"
                Streaming.RequestModel(ped`GANG_TRIAD_A`)
                Streaming.RequestModel(ped`GANG_TRIAD_B`)
                World.ForceRandomPedType(8 /* PEDTYPE_GANG_TRIAD */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_05', $.rampage_05_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_05_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_05_failed == 0) {
                        $.rampage_05 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1179.2, -566.0, 27.3) //ON TOP OF HOSPITAL ROOF
                        $.rampage_05_failed = 1
                    } else {
                        $.rampage_05 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1274.7, -742.7, 15.0) //IN ALLEY NEAR DOG FOOD FACTORY
                        $.rampage_05_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_06_flag == 0) {
            if ($.rampage_06.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 11 /* WEAPONTYPE_GRENADE */, 120000, $.rampage_06_kills, -2, -1, -1, -1, false /* FALSE */) // "Destroy 20 vehicles in 120 seconds!"
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_06', $.rampage_06_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_06_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_06_failed == 0) {
                        $.rampage_06 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1124.6, -816.8, 26.5) //ON TOP OF TRAIN TRACKS NEAR FUZZ BALL
                        $.rampage_06_failed = 1
                    } else {
                        $.rampage_06 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1195.3, -497.9, 39.3) //ON TOP TRAIN TRACKS BY HOSPITAL
                        $.rampage_06_failed = 0
                    }
                }
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_07_flag == 0) {
            if ($.rampage_07.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.StartHeadshot('PAGE_00', 7 /* WEAPONTYPE_SNIPERRIFLE */, 120000, $.rampage_07_kills, ped`GANG_YARDIE_A`, ped`GANG_YARDIE_B`, -1, -1, false /* FALSE */) // "Pop 20 Yardie heads in 120 seconds!"
                Streaming.RequestModel(ped`GANG_YARDIE_A`)
                Streaming.RequestModel(ped`GANG_YARDIE_B`)
                World.ForceRandomPedType(11 /* PEDTYPE_GANG_YARDIE */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_07', $.rampage_07_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_07_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_07_failed == 0) {
                        $.rampage_07 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 440.3, -1391.2, 44.2) //ON TOP OF CASINO
                        $.rampage_07_failed = 1
                    } else {
                        $.rampage_07 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 204.1, -1237.4, 45.1) //ON ROOF ON AMCO BUILDING COMMERCIAL
                        $.rampage_07_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_08_flag == 0) {
            if ($.rampage_08.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 9 /* WEAPONTYPE_FLAMETHROWER */, 120000, $.rampage_08_kills, ped`GANG_YAKUZA_A`, ped`GANG_YAKUZA_B`, -1, -1, false /* FALSE */) // "Burn 20 Yakuza in 120 seconds!"
                Streaming.RequestModel(ped`GANG_YAKUZA_A`)
                Streaming.RequestModel(ped`GANG_YAKUZA_B`)
                World.ForceRandomPedType(10 /* PEDTYPE_GANG_YAKUZA */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_08', $.rampage_08_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_08_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_08_failed == 0) {
                        $.rampage_08 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -22.7, -1116.7, 26.1) //SOUTH END OF CATHEDRAL
                        $.rampage_08_failed = 1
                    } else {
                        $.rampage_08 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -22.1, -1526.9, 26.1) //CARPARK AREA OPPOSITE LOVES BUILDING
                        $.rampage_08_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_09_flag == 0) {
            if ($.rampage_09.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 4 /* WEAPONTYPE_SHOTGUN */, 120000, $.rampage_09_kills, -2, -1, -1, -1, false /* FALSE */) // "Destroy 20 vehicles in 120 seconds!"
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_09', $.rampage_09_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_09_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_09_failed == 0) {
                        $.rampage_09 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 134.2, -552.8, 26.0) //NORTH EAST CORNER OF PARK
                        $.rampage_09_failed = 1
                    } else {
                        $.rampage_09 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 8.0, -910.0, 26.5) //SOUTH WEST CORNER OF PARK
                        $.rampage_09_failed = 0
                    }
                }
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_10_flag == 0) {
            if ($.rampage_10.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 6 /* WEAPONTYPE_M16 */, 120000, $.rampage_10_kills, -2, -1, -1, -1, false /* FALSE */) // "Destroy 20 vehicles in 120 seconds!"
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_10', $.rampage_10_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_10_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_10_failed == 0) {
                        $.rampage_10 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 434.3, -147.8, 20.9) //IN CONTRUCTION YARD NE
                        $.rampage_10_failed = 1
                    } else {
                        $.rampage_10 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 181.1, -338.2, 16.5) //BEHIND UNIVERSITY	SOUTH
                        $.rampage_10_failed = 0
                    }
                }
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_11_flag == 0) {
            if ($.rampage_11.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 8 /* WEAPONTYPE_ROCKET */, 120000, $.rampage_11_kills, ped`GANG_YARDIE_A`, ped`GANG_YARDIE_B`, -1, -1, false /* FALSE */) // "Annihialate 20 Yardies in 120 seconds!"
                Streaming.RequestModel(ped`GANG_YARDIE_A`)
                Streaming.RequestModel(ped`GANG_YARDIE_B`)
                World.ForceRandomPedType(11 /* PEDTYPE_GANG_YARDIE */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_11', $.rampage_11_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_11_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_11_failed == 0) {
                        $.rampage_11 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -101.4, -1386.8, 26.3) //BY LIBERTY TREE BUILDING
                        $.rampage_11_failed = 1
                    } else {
                        $.rampage_11 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -57.5, -1070.8, 26.3) //IN GRAVEYARD BY CATHEDRAL
                        $.rampage_11_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_12_flag == 0) {
            if ($.rampage_12.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 10 /* WEAPONTYPE_MOLOTOV */, 120000, $.rampage_12_kills, ped`GANG_YAKUZA_A`, ped`GANG_YAKUZA_B`, -1, -1, false /* FALSE */) // "Torch 20 Yakuza in 120 seconds!"
                Streaming.RequestModel(ped`GANG_YAKUZA_A`)
                Streaming.RequestModel(ped`GANG_YAKUZA_B`)
                World.ForceRandomPedType(10 /* PEDTYPE_GANG_YAKUZA */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_12', $.rampage_12_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_12_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_12_failed == 0) {
                        $.rampage_12 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 374.4, -609.4, 26.7) //BEHIND MULTISTOREY
                        $.rampage_12_failed = 1
                    } else {
                        $.rampage_12 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 392.9, -795.4, 31.3) //BETWEEN OVERPASS LANES NEAR ASUKA'S KENDO
                        $.rampage_12_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_13_flag == 0) {
            if ($.rampage_13.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 11 /* WEAPONTYPE_GRENADE */, 120000, $.rampage_13_kills, ped`GANG_YARDIE_A`, ped`GANG_YARDIE_B`, -1, -1, false /* FALSE */) // "Explode 20 Yardies in 120 seconds!"
                Streaming.RequestModel(ped`GANG_YARDIE_A`)
                Streaming.RequestModel(ped`GANG_YARDIE_B`)
                World.ForceRandomPedType(11 /* PEDTYPE_GANG_YARDIE */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_13', $.rampage_13_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_13_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_13_failed == 0) {
                        $.rampage_13 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 176.8, -360.1, 16.2) //ALLEYWAY BETWEEN STADIUM AND PARK
                        $.rampage_13_failed = 1
                    } else {
                        $.rampage_13 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -41.6, -451.8, 16.6) //BEHIND FIRESTATION
                        $.rampage_13_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_14_flag == 0) {
            if ($.rampage_14.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 9 /* WEAPONTYPE_FLAMETHROWER */, 120000, $.rampage_14_kills, ped`GANG_COLOMBIAN_A`, ped`GANG_COLOMBIAN_B`, -1, -1, false /* FALSE */) // "Fry 20 Colombians in 120 seconds!"
                Streaming.RequestModel(ped`GANG_COLOMBIAN_A`)
                Streaming.RequestModel(ped`GANG_COLOMBIAN_B`)
                World.ForceRandomPedType(12 /* PEDTYPE_GANG_COLOMBIAN */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_14', $.rampage_14_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_14_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_14_failed == 0) {
                        $.rampage_14 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -1149.2, 160.5, 58.9) //NORTH PIKE CREEK IN WAREHOUSE COURTYARD
                        $.rampage_14_failed = 1
                    } else {
                        $.rampage_14 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -585.4, 284.7, 64.0) //BEHIND A GARAGE IN THE MANSION AREA SUBURBIA
                        $.rampage_14_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_15_flag == 0) {
            if ($.rampage_15.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 4 /* WEAPONTYPE_SHOTGUN */, 120000, $.rampage_15_kills, ped`GANG_HOOD_A`, ped`GANG_HOOD_B`, -1, -1, false /* FALSE */) // "Splatter 20 Hoods in 120 seconds!"
                Streaming.RequestModel(ped`GANG_HOOD_A`)
                Streaming.RequestModel(ped`GANG_HOOD_B`)
                World.ForceRandomPedType(13 /* PEDTYPE_GANG_HOOD */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_15', $.rampage_15_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_15_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_15_failed == 0) {
                        $.rampage_15 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -632.1, -413.8, 18.0) //BEHIND BILLBOARD NEAR AIRPORT
                        $.rampage_15_failed = 1
                    } else {
                        $.rampage_15 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -560.3, -23.6, 9.3) //ONTOP OF A GARAGE IN THE PROJECTS AREA UNDER OVERPASS
                        $.rampage_15_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_HOOD_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_HOOD_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_16_flag == 0) {
            if ($.rampage_16.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 8 /* WEAPONTYPE_ROCKET */, 120000, $.rampage_16_kills, -2, -1, -1, -1, false /* FALSE */) // "Destroy 20 vehicles in 120 seconds!"
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_16', $.rampage_16_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_16_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_16_failed == 0) {
                        $.rampage_16 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -939.0, -303.3, 33.6) //BEHIND BILLBOARD BETWEEN AIRPORT & PIKE CREEK
                        $.rampage_16_failed = 1
                    } else {
                        $.rampage_16 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -867.0, -145.4, 49.8) //ONTOP OF WAREHOUSE PIKE CREEK AIRPORT END
                        $.rampage_16_failed = 0
                    }
                }
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_17_flag == 0) {
            if ($.rampage_17.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 17 /* WEAPONTYPE_RUNOVERBYCAR */, 120000, $.rampage_17_kills, ped`GANG_COLOMBIAN_A`, ped`GANG_COLOMBIAN_B`, -1, -1, false /* FALSE */) // "Splatter 20 Colombians with a car in 120 seconds!"
                Streaming.RequestModel(ped`GANG_COLOMBIAN_A`)
                Streaming.RequestModel(ped`GANG_COLOMBIAN_B`)
                World.ForceRandomPedType(12 /* PEDTYPE_GANG_COLOMBIAN */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_17', $.rampage_17_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_17_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_17_failed == 0) {
                        $.rampage_17 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -1181.9, -264.8, 46.0) //IN GRASSY HILLY AREA NORTH OF AIRPORT
                        $.rampage_17_failed = 1
                    } else {
                        $.rampage_17 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -705.9, -617.5, 16.4) //BEHIND BILLBOARD AT AIRPORT
                        $.rampage_17_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_18_flag == 0) {
            if ($.rampage_18.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.Start('PAGE_00', 19 /* WEAPONTYPE_UZI_DRIVEBY */, 120000, $.rampage_18_kills, -2, -1, -1, -1, false /* FALSE */) // "Driveby and Destroy 20 vehicles in 120 seconds!"
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_18', $.rampage_18_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()

                //		IF flag_done_drive_by_help = 0
                //			GET_CONTROLLER_MODE	controlmode
                //			IF controlmode = 0
                //				PRINT_HELP ( DRIVE_A ) //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
                //				flag_done_drive_by_help = 1
                //			ENDIF
                //			IF controlmode = 1
                //				PRINT_HELP ( DRIVE_A ) //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
                //				flag_done_drive_by_help = 1
                //			ENDIF
                //			IF controlmode = 2
                //				PRINT_HELP ( DRIVE_A ) //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
                //				flag_done_drive_by_help = 1
                //			ENDIF
                //			IF controlmode = 3
                //				PRINT_HELP ( DRIVE_B ) //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~R1 button~w~ to fire."
                //				flag_done_drive_by_help = 1
                //			ENDIF
                //		ENDIF

                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_18_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_18_failed == 0) {
                        $.rampage_18 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -1080.2, 208.4, 3.7) //BEHIND ROCK AT BOTTOM OF DAM
                        $.rampage_18_failed = 1
                    } else {
                        $.rampage_18 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -987.7, -206.1, 33.6) //BEHIND A GUARD BOX SOUTH PIKE CREEK
                        $.rampage_18_failed = 0
                    }
                }
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_19_flag == 0) {
            if ($.rampage_19.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.StartHeadshot(
                    'PAGE_00',
                    7 /* WEAPONTYPE_SNIPERRIFLE */,
                    120000,
                    $.rampage_19_kills,
                    ped`GANG_COLOMBIAN_A`,
                    ped`GANG_COLOMBIAN_B`,
                    -1,
                    -1,
                    false /* FALSE */
                ) // "Remove 20 Colombian heads in 120 seconds!"
                Streaming.RequestModel(ped`GANG_COLOMBIAN_A`)
                Streaming.RequestModel(ped`GANG_COLOMBIAN_B`)
                World.ForceRandomPedType(12 /* PEDTYPE_GANG_COLOMBIAN */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_19', $.rampage_19_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_19_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_19_failed == 0) {
                        $.rampage_19 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -1170.2, -42.2, 59.2) //ONTOP OF ROOF SOUTH OF BAIT WAREHOUSE
                        $.rampage_19_failed = 1
                    } else {
                        $.rampage_19 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -1186.3, 41.0, 68.8) //BEHIND BOX IN THE BAIT WAREHOUSE
                        $.rampage_19_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.rampage_20_flag == 0) {
            if ($.rampage_20.hasBeenCollected()) {
                $.flag_player_on_mission = 1
                KillFrenzy.StartHeadshot('PAGE_00', 6 /* WEAPONTYPE_M16 */, 120000, $.rampage_20_kills, ped`GANG_HOOD_A`, ped`GANG_HOOD_B`, -1, -1, false /* FALSE */) // "Behead 20 Hoods in 120 seconds!"
                Streaming.RequestModel(ped`GANG_HOOD_A`)
                Streaming.RequestModel(ped`GANG_HOOD_B`)
                World.ForceRandomPedType(13 /* PEDTYPE_GANG_HOOD */)
                Text.PrintBig('RAMPAGE', 5000, 5)
                Text.PrintWithNumberBig('PAGE_20', $.rampage_20_kills, 6000, 6)
                $.frenzy_status = KillFrenzy.ReadStatus()
                while ($.frenzy_status == 1) {
                    await asyncWait(0)
                    $.frenzy_status = KillFrenzy.ReadStatus()
                }
                if ($.frenzy_status == 2) {
                    $.rampage_20_flag = 1
                    // SCM GOSUB rampage_rewards
                    await rampage_rewards()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
                if ($.frenzy_status == 3) {
                    Text.PrintBig('RAMP_F', 5000, 5)
                    if ($.rampage_20_failed == 0) {
                        $.rampage_20 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -798.4, 126.0, 29.0) //BEHIND BILLBOARD NW PROJECTS
                        $.rampage_20_failed = 1
                    } else {
                        $.rampage_20 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -431.6, 110.9, 15.6) //BEHIND BILLBOARD NORTH PROJECTS
                        $.rampage_20_failed = 0
                    }
                }
                World.ForceRandomPedType(-1)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_HOOD_A`)
                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_HOOD_B`)
                $.flag_player_on_mission = 0
            }
        }

        if ($.total_rampages_passed == 20) {
            // SCM GOTO → rampage_passed (not lowered; manual jump required)
            throw new Error('unresolved GOTO rampage_passed') // fallback: would break linear control flow
        }
    }
}

async function rampage_passed() {
    Mission.Finish()

    //german_rampage_over:

    Stat.PlayerMadeProgress(1)
    // MissionBoundary
}

async function rampage_rewards() {
    ++$.total_rampages_passed
    $.rampage_reward = $.total_rampages_passed * 5000
    $.player.clearWantedLevel()

    if ($.total_rampages_passed < 20) {
        $.player.addScore($.rampage_reward)
        Text.PrintBig('RAMP_P', 5000, 5)
        Text.PrintWithNumberBig('REWARD', $.rampage_reward, 6000, 6)
    } else {
        $.player.addScore(1000000)
        Text.PrintBig('RAMP_A', 5000, 5) //"ALL RAMPAGES COMPLETED!"
        Text.PrintWithNumberBig('REWARD', 1000000, 6000, 6)
    }

    return
}

export async function rampage() {
    // MissionBoundary

    // SET_DEATHARREST_STATE(false /* OFF */);

    // SCRIPT_NAME rampage

    // VAR_INT rampage_reward frenzy_status total_rampages_passed

    // VAR_INT rampage_01 rampage_02 rampage_03 rampage_04 rampage_05
    // VAR_INT rampage_06 rampage_07 rampage_08 rampage_09 rampage_10
    // VAR_INT rampage_11 rampage_12 rampage_13 rampage_14 rampage_15
    // VAR_INT rampage_16 rampage_17 rampage_18 rampage_19 rampage_20

    // VAR_INT rampage_01_flag rampage_02_flag rampage_03_flag rampage_04_flag rampage_05_flag
    // VAR_INT rampage_06_flag rampage_07_flag rampage_08_flag rampage_09_flag rampage_10_flag
    // VAR_INT rampage_11_flag rampage_12_flag rampage_13_flag rampage_14_flag rampage_15_flag
    // VAR_INT rampage_16_flag rampage_17_flag rampage_18_flag rampage_19_flag rampage_20_flag

    // VAR_INT rampage_01_failed rampage_02_failed rampage_03_failed rampage_04_failed rampage_05_failed
    // VAR_INT rampage_06_failed rampage_07_failed rampage_08_failed rampage_09_failed rampage_10_failed
    // VAR_INT rampage_11_failed rampage_12_failed rampage_13_failed rampage_14_failed rampage_15_failed
    // VAR_INT rampage_16_failed rampage_17_failed rampage_18_failed rampage_19_failed rampage_20_failed

    // VAR_INT rampage_01_kills rampage_02_kills rampage_03_kills rampage_04_kills rampage_05_kills
    // VAR_INT rampage_06_kills rampage_07_kills rampage_08_kills rampage_09_kills rampage_10_kills
    // VAR_INT rampage_11_kills rampage_12_kills rampage_13_kills rampage_14_kills rampage_15_kills
    // VAR_INT rampage_16_kills rampage_17_kills rampage_18_kills rampage_19_kills rampage_20_kills

    $.rampage_reward = 5000
    $.frenzy_status = 0
    $.total_rampages_passed = 0

    $.rampage_01_flag = 0
    $.rampage_02_flag = 0
    $.rampage_03_flag = 0
    $.rampage_04_flag = 0
    $.rampage_05_flag = 0
    $.rampage_06_flag = 0
    $.rampage_07_flag = 0
    $.rampage_08_flag = 0
    $.rampage_09_flag = 0
    $.rampage_10_flag = 0
    $.rampage_11_flag = 0
    $.rampage_12_flag = 0
    $.rampage_13_flag = 0
    $.rampage_14_flag = 0
    $.rampage_15_flag = 0
    $.rampage_16_flag = 0
    $.rampage_17_flag = 0
    $.rampage_18_flag = 0
    $.rampage_19_flag = 0
    $.rampage_20_flag = 0

    $.rampage_01_failed = 0
    $.rampage_02_failed = 0
    $.rampage_03_failed = 0
    $.rampage_04_failed = 0
    $.rampage_05_failed = 0
    $.rampage_06_failed = 0
    $.rampage_07_failed = 0
    $.rampage_08_failed = 0
    $.rampage_09_failed = 0
    $.rampage_10_failed = 0
    $.rampage_11_failed = 0
    $.rampage_12_failed = 0
    $.rampage_13_failed = 0
    $.rampage_14_failed = 0
    $.rampage_15_failed = 0
    $.rampage_16_failed = 0
    $.rampage_17_failed = 0
    $.rampage_18_failed = 0
    $.rampage_19_failed = 0
    $.rampage_20_failed = 0

    $.rampage_01 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 958.0, -431.0, 14.5) //OPPOSITE LUIGI'S IN AN ALLEYWAY
    $.rampage_02 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1076.9, -859.9, 15.2) //BOTTOM OF CALAHAN BRIDGE
    $.rampage_03 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1312.3, -315.7, 42.6) //ST MARKS BEHIND TONI'S
    $.rampage_04 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 883.3, -806.2, 15.0) //BEHIND BUILDING CHINATOWN NEAR BRIDGE
    $.rampage_05 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1274.7, -742.7, 15.0) //IN ALLEY NEAR DOG FOOD FACTORY
    $.rampage_06 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 1195.3, -497.9, 39.3) //ON TOP TRAIN TRACKS BY HOSPITAL

    $.rampage_07 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 204.1, -1237.4, 45.1) //ON ROOF ON AMCO BUILDING COMMERCIAL
    $.rampage_08 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -22.1, -1526.9, 26.1) //CARPARK AREA OPPOSITE LOVES BUILDING
    $.rampage_09 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 8.0, -910.0, 26.5) //SOUTH WEST CORNER OF PARK
    $.rampage_10 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 181.1, -338.2, 16.5) //BEHIND UNIVERSITY	SOUTH
    $.rampage_11 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -57.5, -1070.8, 26.3) //IN GRAVEYARD BY CATHEDRAL
    $.rampage_12 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, 392.9, -795.4, 31.3) //BETWEEN OVERPASS LANES NEAR ASUKA'S KENDO
    $.rampage_13 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -41.6, -451.8, 16.6) //BEHIND FIRESTATION

    $.rampage_14 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -585.4, 284.7, 64.0) //BEHIND A GARAGE IN THE MANSION AREA SUBURBIA
    $.rampage_15 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -560.3, -23.6, 9.3) //ONTOP OF A GARAGE IN THE PROJECTS AREA UNDER OVERPASS
    $.rampage_16 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -867.0, -145.4, 49.8) //ONTOP OF WAREHOUSE PIKE CREEK AIRPORT END
    $.rampage_17 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -705.9, -617.5, 16.4) //BEHIND BILLBOARD AT AIRPORT
    $.rampage_18 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -987.7, -206.1, 33.6) //BEHIND A GUARD BOX SOUTH PIKE CREEK
    $.rampage_19 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -1186.3, 41.0, 68.8) //BEHIND BOX IN THE BAIT WAREHOUSE
    $.rampage_20 = Pickup.Create(1392 /* killfrenzy */, 3 /* PICKUP_ONCE */, -431.6, 110.9, 15.6) //BEHIND BILLBOARD NORTH PROJECTS

    Stat.SetTotalNumberOfKillFrenzies(20)

    $.rampage_01_kills = 30
    $.rampage_02_kills = 13
    $.rampage_03_kills = 20
    $.rampage_04_kills = 25
    $.rampage_05_kills = 20
    $.rampage_06_kills = 10
    $.rampage_07_kills = 17
    $.rampage_08_kills = 25
    $.rampage_09_kills = 8
    $.rampage_10_kills = 15
    $.rampage_11_kills = 30
    $.rampage_12_kills = 16
    $.rampage_13_kills = 25
    $.rampage_14_kills = 20
    $.rampage_15_kills = 20
    $.rampage_16_kills = 15
    $.rampage_17_kills = 20
    $.rampage_18_kills = 7
    $.rampage_19_kills = 15
    $.rampage_20_kills = 20

    //START_KILL_FRENZY StartMessage WeaponType TimeLimit TargetNumber PedOrCarModel ExtraModel1 ExtraModel2 ExtraModel3 FrenzyText
    //				   | TEXT LABEL	|		   | MILLISEC |		  	  |	-1 ALL PEDS	 |									 | True	- Has Kill Frenzy text
    //				   | 			|		   |		  |			  |	-2 ALL CARS	 |		-1 TO IGNORE THESE			 | False - No text
}
