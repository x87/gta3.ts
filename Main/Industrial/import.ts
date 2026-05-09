// Generated from Main/Industrial/import.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_import_start() {
    {
        await asyncWait(100)

        // START_NEW_SCRIPT import1_loop
        // START_NEW_SCRIPT military_crane_loop
        // START_NEW_SCRIPT import2_loop
        // START_NEW_SCRIPT check_packages
    }

    async function mission_import_start_inner() {
        await asyncWait(500)

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                if ($.player.isInZone('REDLIGH')) {
                    if ($.player.isInArea3D(828.9, -283.8, 0.0, 894.2, -323.5, 26.0, false /* FALSE */)) {
                        if ($.bonus_weapons_created == 0) {
                            if ($.earned_free_pistol == 1) {
                                $.bonus_gun1 = Pickup.CreateWithAmmo(154 /* WEAPON_COLT45 */, 14 /* PICKUP_ON_STREET_SLOW */, 90, 876.8, -317.1, 10.0)
                            }
                            if ($.earned_free_uzi == 1) {
                                $.bonus_gun2 = Pickup.CreateWithAmmo(159 /* WEAPON_UZI */, 14 /* PICKUP_ON_STREET_SLOW */, 250, 874.8, -317.1, 10.0)
                            }
                            if ($.earned_free_grenades == 1) {
                                $.bonus_gun3 = Pickup.CreateWithAmmo(151 /* WEAPON_GRENADE */, 14 /* PICKUP_ON_STREET_SLOW */, 10, 872.8, -317.1, 10.0)
                            }
                            if ($.earned_free_shotgun == 1) {
                                $.bonus_gun4 = Pickup.CreateWithAmmo(157 /* WEAPON_SHOTGUN */, 14 /* PICKUP_ON_STREET_SLOW */, 50, 870.8, -317.1, 10.0)
                            }
                            if ($.earned_free_armour == 1) {
                                $.bonus_gun5 = Pickup.Create(1364 /* bodyarmour */, 14 /* PICKUP_ON_STREET_SLOW */, 868.8, -317.1, 10.0)
                            }
                            if ($.earned_free_molotovs == 1) {
                                $.bonus_gun6 = Pickup.CreateWithAmmo(155 /* WEAPON_MOLOTOV */, 14 /* PICKUP_ON_STREET_SLOW */, 10, 866.8, -317.1, 10.0)
                            }
                            if ($.earned_free_ak47 == 1) {
                                $.bonus_gun7 = Pickup.CreateWithAmmo(152 /* WEAPON_AK47 */, 14 /* PICKUP_ON_STREET_SLOW */, 300, 864.8, -317.1, 10.0)
                            }
                            if ($.earned_free_sniper == 1) {
                                $.bonus_gun8 = Pickup.CreateWithAmmo(158 /* WEAPON_SNIPER */, 14 /* PICKUP_ON_STREET_SLOW */, 50, 862.8, -317.1, 10.0)
                            }
                            if ($.earned_free_m16 == 1) {
                                $.bonus_gun9 = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 14 /* PICKUP_ON_STREET_SLOW */, 600, 860.8, -317.1, 10.0)
                            }
                            if ($.earned_free_flamethrower == 1) {
                                $.bonus_gunflame = Pickup.CreateWithAmmo(162 /* WEAPON_FLAME */, 14 /* PICKUP_ON_STREET_SLOW */, 2000, 858.8, -317.1, 10.0)
                            }
                            if ($.earned_free_launcher == 1) {
                                $.bonus_gun10 = Pickup.CreateWithAmmo(156 /* WEAPON_ROCKET */, 14 /* PICKUP_ON_STREET_SLOW */, 50, 856.8, -317.1, 10.0)
                            }
                            if ($.ind_copcar_kills > 9) {
                                $.bonus_bribe1 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 877.6, -313.8, 8.5)
                            }
                            if ($.ind_copcar_kills > 19) {
                                $.bonus_bribe2 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 875.6, -313.8, 8.5)
                            }
                            if ($.com_copcar_kills > 9) {
                                $.bonus_bribe3 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 873.6, -313.8, 8.5)
                            }
                            if ($.com_copcar_kills > 19) {
                                $.bonus_bribe4 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 871.6, -313.8, 8.5)
                            }
                            if ($.sub_copcar_kills > 9) {
                                $.bonus_bribe5 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 869.6, -313.8, 8.5)
                            }
                            if ($.sub_copcar_kills > 19) {
                                $.bonus_bribe6 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 867.6, -313.8, 8.5)
                            }
                            if ($.total_saved_peds > 34) {
                                $.bonus_health = Pickup.Create(1362 /* HEALTH */, 14 /* PICKUP_ON_STREET_SLOW */, 878.9, -299.0, 8.2)
                            }
                            if ($.total_saved_peds > 69) {
                                $.bonus_adrenaline = Pickup.Create(1363 /* ADRENALINE */, 14 /* PICKUP_ON_STREET_SLOW */, 876.9, -299.0, 8.2)
                            }
                            $.bonus_weapons_created = 1
                        }
                    } else {
                        if ($.bonus_weapons_created == 1) {
                            // SCM GOSUB remove_bonus_pickups
                            await remove_bonus_pickups()
                            // fallback if label was not emitted as async function: no-op continues linearly
                            $.bonus_weapons_created = 0
                        }
                    }
                } else {
                    if ($.bonus_weapons_created == 1) {
                        // SCM GOSUB remove_bonus_pickups
                        await remove_bonus_pickups()
                        // fallback if label was not emitted as async function: no-op continues linearly
                        $.bonus_weapons_created = 0
                    }
                }
            }

            if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
                if ($.player.isInZone('PARK')) {
                    if ($.player.isInArea3D(39.5, -443.8, 53.0, 167.5, -484.6, 15.0, false /* FALSE */)) {
                        if ($.bonus_weapons_created == 0) {
                            if ($.earned_free_pistol == 1) {
                                $.bonus_gun1 = Pickup.CreateWithAmmo(154 /* WEAPON_COLT45 */, 14 /* PICKUP_ON_STREET_SLOW */, 90, 132.7, -477.9, 15.9)
                            }
                            if ($.earned_free_uzi == 1) {
                                $.bonus_gun2 = Pickup.CreateWithAmmo(159 /* WEAPON_UZI */, 14 /* PICKUP_ON_STREET_SLOW */, 250, 132.7, -479.9, 15.9)
                            }
                            if ($.earned_free_grenades == 1) {
                                $.bonus_gun3 = Pickup.CreateWithAmmo(151 /* WEAPON_GRENADE */, 14 /* PICKUP_ON_STREET_SLOW */, 10, 129.1, -477.9, 15.9)
                            }
                            if ($.earned_free_shotgun == 1) {
                                $.bonus_gun4 = Pickup.CreateWithAmmo(157 /* WEAPON_SHOTGUN */, 14 /* PICKUP_ON_STREET_SLOW */, 50, 129.1, -479.9, 15.9)
                            }
                            if ($.earned_free_armour == 1) {
                                $.bonus_gun5 = Pickup.Create(1364 /* bodyarmour */, 14 /* PICKUP_ON_STREET_SLOW */, 125.6, -477.9, 15.9)
                            }
                            if ($.earned_free_molotovs == 1) {
                                $.bonus_gun6 = Pickup.CreateWithAmmo(155 /* WEAPON_MOLOTOV */, 14 /* PICKUP_ON_STREET_SLOW */, 10, 125.6, -479.9, 15.9)
                            }
                            if ($.earned_free_ak47 == 1) {
                                $.bonus_gun7 = Pickup.CreateWithAmmo(152 /* WEAPON_AK47 */, 14 /* PICKUP_ON_STREET_SLOW */, 300, 122.1, -477.9, 15.9)
                            }
                            if ($.earned_free_sniper == 1) {
                                $.bonus_gun8 = Pickup.CreateWithAmmo(158 /* WEAPON_SNIPER */, 14 /* PICKUP_ON_STREET_SLOW */, 50, 122.1, -479.9, 15.9)
                            }
                            if ($.earned_free_m16 == 1) {
                                $.bonus_gun9 = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 14 /* PICKUP_ON_STREET_SLOW */, 600, 118.7, -477.9, 15.9)
                            }
                            if ($.earned_free_flamethrower == 1) {
                                $.bonus_gunflame = Pickup.CreateWithAmmo(162 /* WEAPON_FLAME */, 14 /* PICKUP_ON_STREET_SLOW */, 2000, 118.7, -479.9, 15.9)
                            }
                            if ($.earned_free_launcher == 1) {
                                $.bonus_gun10 = Pickup.CreateWithAmmo(156 /* WEAPON_ROCKET */, 14 /* PICKUP_ON_STREET_SLOW */, 50, 125.6, -475.9, 15.9)
                            }
                            if ($.ind_copcar_kills > 9) {
                                $.bonus_bribe1 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 114.5, -458.0, 15.5)
                            }
                            if ($.ind_copcar_kills > 19) {
                                $.bonus_bribe2 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 112.5, -458.0, 15.5)
                            }
                            if ($.com_copcar_kills > 9) {
                                $.bonus_bribe3 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 110.5, -458.0, 15.5)
                            }
                            if ($.com_copcar_kills > 19) {
                                $.bonus_bribe4 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 108.5, -458.0, 15.5)
                            }
                            if ($.sub_copcar_kills > 9) {
                                $.bonus_bribe5 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 106.5, -458.0, 15.5)
                            }
                            if ($.sub_copcar_kills > 19) {
                                $.bonus_bribe6 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, 104.5, -458.0, 15.5)
                            }
                            if ($.total_saved_peds > 34) {
                                $.bonus_health = Pickup.Create(1362 /* HEALTH */, 14 /* PICKUP_ON_STREET_SLOW */, 94.6, -472.5, 15.5)
                            }
                            if ($.total_saved_peds > 69) {
                                $.bonus_adrenaline = Pickup.Create(1363 /* ADRENALINE */, 14 /* PICKUP_ON_STREET_SLOW */, 92.6, -472.5, 15.5)
                            }
                            $.bonus_weapons_created = 1
                        }
                    } else {
                        if ($.bonus_weapons_created == 1) {
                            // SCM GOSUB remove_bonus_pickups
                            await remove_bonus_pickups()
                            // fallback if label was not emitted as async function: no-op continues linearly
                            $.bonus_weapons_created = 0
                        }
                    }
                } else {
                    if ($.bonus_weapons_created == 1) {
                        // SCM GOSUB remove_bonus_pickups
                        await remove_bonus_pickups()
                        // fallback if label was not emitted as async function: no-op continues linearly
                        $.bonus_weapons_created = 0
                    }
                }
            }

            if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                if ($.player.isInZone('PROJECT')) {
                    if ($.player.isInArea3D(-595.8, -68.2, 10.0, -700.7, 3.1, 30.0, false /* FALSE */)) {
                        if ($.bonus_weapons_created == 0) {
                            if ($.earned_free_pistol == 1) {
                                $.bonus_gun1 = Pickup.CreateWithAmmo(154 /* WEAPON_COLT45 */, 14 /* PICKUP_ON_STREET_SLOW */, 90, -650.5, -24.8, 18.8)
                            }
                            if ($.earned_free_uzi == 1) {
                                $.bonus_gun2 = Pickup.CreateWithAmmo(159 /* WEAPON_UZI */, 14 /* PICKUP_ON_STREET_SLOW */, 250, -648.5, -24.8, 18.8)
                            }
                            if ($.earned_free_grenades == 1) {
                                $.bonus_gun3 = Pickup.CreateWithAmmo(151 /* WEAPON_GRENADE */, 14 /* PICKUP_ON_STREET_SLOW */, 10, -646.5, -24.8, 18.8)
                            }
                            if ($.earned_free_shotgun == 1) {
                                $.bonus_gun4 = Pickup.CreateWithAmmo(157 /* WEAPON_SHOTGUN */, 14 /* PICKUP_ON_STREET_SLOW */, 50, -644.5, -24.8, 18.8)
                            }
                            if ($.earned_free_armour == 1) {
                                $.bonus_gun5 = Pickup.Create(1364 /* bodyarmour */, 14 /* PICKUP_ON_STREET_SLOW */, -642.5, -24.8, 18.8)
                            }
                            if ($.earned_free_molotovs == 1) {
                                $.bonus_gun6 = Pickup.CreateWithAmmo(155 /* WEAPON_MOLOTOV */, 14 /* PICKUP_ON_STREET_SLOW */, 10, -640.5, -24.8, 18.8)
                            }
                            if ($.earned_free_ak47 == 1) {
                                $.bonus_gun7 = Pickup.CreateWithAmmo(152 /* WEAPON_AK47 */, 14 /* PICKUP_ON_STREET_SLOW */, 300, -638.5, -24.8, 18.8)
                            }
                            if ($.earned_free_sniper == 1) {
                                $.bonus_gun8 = Pickup.CreateWithAmmo(158 /* WEAPON_SNIPER */, 14 /* PICKUP_ON_STREET_SLOW */, 50, -636.5, -24.8, 18.8)
                            }
                            if ($.earned_free_m16 == 1) {
                                $.bonus_gun9 = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 14 /* PICKUP_ON_STREET_SLOW */, 600, -634.5, -24.8, 18.8)
                            }
                            if ($.earned_free_flamethrower == 1) {
                                $.bonus_gunflame = Pickup.CreateWithAmmo(162 /* WEAPON_FLAME */, 14 /* PICKUP_ON_STREET_SLOW */, 2000, -632.5, -24.8, 18.8)
                            }
                            if ($.earned_free_launcher == 1) {
                                $.bonus_gun10 = Pickup.CreateWithAmmo(156 /* WEAPON_ROCKET */, 14 /* PICKUP_ON_STREET_SLOW */, 20, -630.5, -24.8, 18.8)
                            }
                            if ($.ind_copcar_kills > 9) {
                                $.bonus_bribe1 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, -663.0, -28.0, 18.3)
                            }
                            if ($.ind_copcar_kills > 19) {
                                $.bonus_bribe2 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, -665.0, -28.0, 18.3)
                            }
                            if ($.com_copcar_kills > 9) {
                                $.bonus_bribe3 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, -667.0, -28.0, 18.3)
                            }
                            if ($.com_copcar_kills > 19) {
                                $.bonus_bribe4 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, -669.0, -28.0, 18.3)
                            }
                            if ($.sub_copcar_kills > 9) {
                                $.bonus_bribe5 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, -671.0, -28.0, 18.3)
                            }
                            if ($.sub_copcar_kills > 19) {
                                $.bonus_bribe6 = Pickup.Create(1383 /* BRIBE */, 14 /* PICKUP_ON_STREET_SLOW */, -673.0, -28.0, 18.3)
                            }
                            if ($.total_saved_peds > 34) {
                                $.bonus_health = Pickup.Create(1362 /* HEALTH */, 14 /* PICKUP_ON_STREET_SLOW */, -654.3, -21.7, 18.3)
                            }
                            if ($.total_saved_peds > 69) {
                                $.bonus_adrenaline = Pickup.Create(1363 /* ADRENALINE */, 14 /* PICKUP_ON_STREET_SLOW */, -654.3, -19.7, 18.3)
                            }
                            $.bonus_weapons_created = 1
                        }
                    } else {
                        if ($.bonus_weapons_created == 1) {
                            // SCM GOSUB remove_bonus_pickups
                            await remove_bonus_pickups()
                            // fallback if label was not emitted as async function: no-op continues linearly
                            $.bonus_weapons_created = 0
                        }
                    }
                } else {
                    if ($.bonus_weapons_created == 1) {
                        // SCM GOSUB remove_bonus_pickups
                        await remove_bonus_pickups()
                        // fallback if label was not emitted as async function: no-op continues linearly
                        $.bonus_weapons_created = 0
                    }
                }
            }
        }

        // SCM GOTO → mission_import_start_inner (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_import_start_inner') // fallback: would break linear control flow
    }

    // MissionBoundary
}

async function import1_loop() {
    {
        //	Should be called in mission_import_start
        // SCRIPT_NAME IMPORT1
    }

    async function import1_loop_inner() {
        // SCM GOTO → import1_loop_inner lowered to endless loop
        while (true) {
            await asyncWait(500)

            if ($.player.isPlaying()) {
                if ($.player.isInZone('PORT_E')) {
                    if (!($.industrial_garage_slots_filled == 16)) {
                        if ($.collect_all_cars1.hasSlotBeenFilled(1) && $.industrial_slot1 == 0) {
                            $.industrial_garage_slots_filled++
                            $.securicar_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -674.578, 13.582)
                            $.securicar_score_off.dontRemove()
                            $.securicar_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot1 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(2) && $.industrial_slot2 == 0) {
                            $.industrial_garage_slots_filled++
                            $.moonbeam_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -674.578, 13.385)
                            $.moonbeam_score_off.dontRemove()
                            $.moonbeam_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot2 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(3) && $.industrial_slot3 == 0) {
                            $.industrial_garage_slots_filled++
                            $.coach_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -674.578, 13.18)
                            $.coach_score_off.dontRemove()
                            $.coach_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot3 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(4) && $.industrial_slot4 == 0) {
                            $.industrial_garage_slots_filled++
                            $.flatbed_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -674.578, 12.972)
                            $.flatbed_score_off.dontRemove()
                            $.flatbed_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot4 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(5) && $.industrial_slot5 == 0) {
                            $.industrial_garage_slots_filled++
                            $.linerunner_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -674.578, 12.75)
                            $.linerunner_score_off.dontRemove()
                            $.linerunner_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot5 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(6) && $.industrial_slot6 == 0) {
                            $.industrial_garage_slots_filled++
                            $.trashmaster_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -674.578, 12.549)
                            $.trashmaster_score_off.dontRemove()
                            $.trashmaster_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot6 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(7) && $.industrial_slot7 == 0) {
                            $.industrial_garage_slots_filled++
                            $.patriot_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -674.578, 12.35)
                            $.patriot_score_off.dontRemove()
                            $.patriot_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot7 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(8) && $.industrial_slot8 == 0) {
                            $.industrial_garage_slots_filled++
                            $.whoopee_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -674.578, 12.131)
                            $.whoopee_score_off.dontRemove()
                            $.whoopee_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot8 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(9) && $.industrial_slot9 == 0) {
                            $.industrial_garage_slots_filled++
                            $.blista_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -675.459, 13.582)
                            $.blista_score_off.dontRemove()
                            $.blista_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot9 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(10) && $.industrial_slot10 == 0) {
                            $.industrial_garage_slots_filled++
                            $.mule_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -675.474, 13.361)
                            $.mule_score_off.dontRemove()
                            $.mule_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot10 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(11) && $.industrial_slot11 == 0) {
                            $.industrial_garage_slots_filled++
                            $.yankee_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -675.474, 13.151)
                            $.yankee_score_off.dontRemove()
                            $.yankee_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot11 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(12) && $.industrial_slot12 == 0) {
                            $.industrial_garage_slots_filled++
                            $.bobcat_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -675.474, 12.966)
                            $.bobcat_score_off.dontRemove()
                            $.bobcat_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot12 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(13) && $.industrial_slot13 == 0) {
                            $.industrial_garage_slots_filled++
                            $.dodo_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -675.474, 12.757)
                            $.dodo_score_off.dontRemove()
                            $.dodo_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot13 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(14) && $.industrial_slot14 == 0) {
                            $.industrial_garage_slots_filled++
                            $.bus_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -675.474, 12.52)
                            $.bus_score_off.dontRemove()
                            $.bus_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot14 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(15) && $.industrial_slot15 == 0) {
                            $.industrial_garage_slots_filled++
                            $.rumpo_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -675.474, 12.322)
                            $.rumpo_score_off.dontRemove()
                            $.rumpo_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot15 = 1
                        }
                        if ($.collect_all_cars1.hasSlotBeenFilled(16) && $.industrial_slot16 == 0) {
                            $.industrial_garage_slots_filled++
                            $.pony_score_off = ScriptObject.CreateNoOffset(1379 /* line */, 1496.036, -675.474, 12.131)
                            $.pony_score_off.dontRemove()
                            $.pony_score_off.setHeading(270.0)
                            Stat.PlayerMadeProgress(1)
                            $.industrial_slot16 = 1
                        }
                    } else {
                        //IF industrial_garage_slots_filled = 16

                        if ($.changed_industrial_garage_before == 0) {
                            $.collect_all_cars1.changeType(19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */)
                            $.changed_industrial_garage_before = 1
                        }
                        // SCM label pick_up_pick_ups
                        await asyncWait(0)
                        if ($.player.isPlaying()) {
                            if ($.player.isInArea2D(1486.9, -686.2, 1524.1, -666.8, false /* FALSE */)) {
                                if ($.create_car_pickups_industrial == 0) {
                                    $.securicar_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 1, 1501.0, -683.0, 12.1)
                                    $.moonbeam_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 2, 1505.0, -683.0, 12.1)
                                    $.coach_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 3, 1509.0, -683.0, 12.1)
                                    $.flatbed_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 4, 1513.0, -683.0, 12.1)
                                    $.linerunner_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 5, 1517.0, -683.0, 12.1)
                                    $.trashmaster_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 6, 1521.0, -683.0, 12.1)
                                    $.patriot_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 7, 1521.0, -680.0, 12.1)
                                    $.whoopee_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 8, 1521.0, -677.0, 12.1)
                                    $.blista_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 9, 1521.0, -674.0, 12.1)
                                    $.mule_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 10, 1521.0, -671.0, 12.1)
                                    $.yankee_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 11, 1521.0, -668.0, 12.1)
                                    $.bobcat_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 12, 1517.0, -668.0, 12.1)
                                    $.dodo_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 13, 1513.0, -668.0, 12.1)
                                    $.bus_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 14, 1509.0, -668.0, 12.1)
                                    $.rumpo_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 15, 1505.0, -668.0, 12.1)
                                    $.pony_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 16, 1501.0, -668.0, 12.1)
                                    await asyncWait(1000)
                                    $.collect_all_cars1.open()
                                    $.create_car_pickups_industrial = 1
                                }

                                if ($.import_car_been_created_before == 0) {
                                    if ($.securicar_pickup.hasBeenCollected()) {
                                        $.import_car_type = 118
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.moonbeam_pickup.hasBeenCollected()) {
                                        $.import_car_type = 108
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.coach_pickup.hasBeenCollected()) {
                                        $.import_car_type = 127
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.flatbed_pickup.hasBeenCollected()) {
                                        $.import_car_type = 145
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.linerunner_pickup.hasBeenCollected()) {
                                        $.import_car_type = 93
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.trashmaster_pickup.hasBeenCollected()) {
                                        $.import_car_type = 98
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.patriot_pickup.hasBeenCollected()) {
                                        $.import_car_type = 96
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.whoopee_pickup.hasBeenCollected()) {
                                        $.import_car_type = 113
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.blista_pickup.hasBeenCollected()) {
                                        $.import_car_type = 102
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.mule_pickup.hasBeenCollected()) {
                                        $.import_car_type = 104
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.yankee_pickup.hasBeenCollected()) {
                                        $.import_car_type = 146
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.bobcat_pickup.hasBeenCollected()) {
                                        $.import_car_type = 112
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.dodo_pickup.hasBeenCollected()) {
                                        $.import_car_type = 126
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.bus_pickup.hasBeenCollected()) {
                                        $.import_car_type = 121
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.rumpo_pickup.hasBeenCollected()) {
                                        $.import_car_type = 130
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    if ($.pony_pickup.hasBeenCollected()) {
                                        $.import_car_type = 103
                                        // SCM GOTO → load_vehicle (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle') // fallback: would break linear control flow
                                    }
                                    // SCM GOTO → pick_up_pick_ups (not lowered; manual jump required)
                                    throw new Error('unresolved GOTO pick_up_pick_ups') // fallback: would break linear control flow
                                    // SCM label load_vehicle
                                    Text.PrintNow('IMPORT1', 5000, 2)
                                    // SCM GOSUB mission_remove_pickups_ind
                                    await mission_remove_pickups_ind()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    if ($.player.isPlaying()) {
                                        while (!$.player.isInArea2D(1486.9, -686.2, 1495.5, -674.1, false /* FALSE */)) {
                                            await asyncWait(0)
                                            if ($.player.isPlaying()) {
                                            }
                                        }
                                    }
                                    if ($.player.isPlaying()) {
                                        $.player.setControl(false /* Off */)
                                    }
                                    $.collect_all_cars1.close()
                                    while (!$.collect_all_cars1.isClosed()) {
                                        await asyncWait(0)
                                    }
                                    Streaming.RequestModel($.import_car_type)
                                    while (!Streaming.HasModelLoaded($.import_car_type)) {
                                        await asyncWait(0)
                                    }
                                    $.imported_car = Car.Create($.import_car_type, 1504.1, -680.1, 12.1)
                                    Streaming.MarkModelAsNoLongerNeeded($.import_car_type)
                                    $.imported_car.setHeading(90.0)
                                    $.imported_car.lockDoors(1 /* CARLOCK_UNLOCKED */)
                                    await asyncWait(1000)
                                    $.collect_all_cars1.open()
                                    if ($.player.isPlaying()) {
                                        $.player.setControl(true /* On */)
                                    }
                                    $.import_car_been_created_before = 1
                                }
                            } else {
                                if ($.create_car_pickups_industrial == 1) {
                                    $.collect_all_cars1.close()
                                    while (!$.collect_all_cars1.isClosed()) {
                                        await asyncWait(0)
                                    }
                                    // SCM GOSUB mission_remove_pickups_ind
                                    await mission_remove_pickups_ind()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    if ($.import_car_been_created_before == 1) {
                                        if (!Car.IsDead($.imported_car)) {
                                            if ($.imported_car.isInArea2D(1496.8, -686.2, 1523.3, -666.8, false /* FALSE */)) {
                                                $.imported_car.delete()
                                            } else {
                                                $.imported_car.markAsNoLongerNeeded()
                                            }
                                        }
                                    }
                                    $.import_car_been_created_before = 0
                                    $.create_car_pickups_industrial = 0
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

async function military_crane_loop() {
    {
        //	Should be called in mission_import_start
        // SCRIPT_NAME M_CRANE
    }

    async function military_crane_loop_inner() {
        // SCM GOTO → military_crane_loop_inner lowered to endless loop
        while (true) {
            await asyncWait(500)

            if ($.player.isPlaying()) {
                if ($.player.isInArea2D(1548.1, -745.5, 1583.0, -675.1, false /* FALSE */)) {
                    if (Crane.HasMilitaryCollectedAllCars()) {
                        if ($.cran_activated_before == 0) {
                            Crane.Deactivate(1570.3, -675.4)
                            Crane.Activate(1570.3, -675.4, 1638.7, -687.1, 1647.9, -700.1, 1571.1, -696.5, 16.0, 0.0)
                            $.player.addScore(200000)
                            Stat.PlayerMadeProgress(7)
                            $.cran_activated_before = 1
                        }
                        if (
                            !World.IsAreaOccupied(
                                1565.9,
                                -706.7,
                                9.0,
                                1577.2,
                                -686.3,
                                20.0,
                                false /* FALSE */,
                                true /* TRUE */,
                                false /* FALSE */,
                                false /* FALSE */,
                                false /* FALSE */
                            )
                        ) {
                            if ($.create_military_pickups == 0 && $.military_car_been_created_before == 0) {
                                $.copcar_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 39, 1571.0, -687.0, 11.8)
                                $.swatvan_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 35, 1571.0, -691.0, 11.8)
                                $.fbi_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 36, 1571.0, -694.0, 11.8)
                                $.tank_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 37, 1571.0, -697.0, 11.8)
                                $.barracks_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 38, 1571.0, -700.0, 11.8)
                                $.ambulance_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 34, 1571.0, -703.0, 11.8)
                                $.firetruck_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 33, 1571.0, -706.0, 11.8)
                                $.create_military_pickups = 1
                            }
                        }

                        //IF IS_PLAYER_IN_AREA_2D player 1558.1 -716.4 1583.0 -675.1 FALSE

                        if ($.military_car_been_created_before == 0) {
                            if ($.copcar_pickup.hasBeenCollected()) {
                                $.military_car_type3 = 116
                                // SCM GOTO → load_vehicle3 (not lowered; manual jump required)
                                throw new Error('unresolved GOTO load_vehicle3') // fallback: would break linear control flow
                            }
                            if ($.swatvan_pickup.hasBeenCollected()) {
                                $.military_car_type3 = 117
                                // SCM GOTO → load_vehicle3 (not lowered; manual jump required)
                                throw new Error('unresolved GOTO load_vehicle3') // fallback: would break linear control flow
                            }
                            if ($.fbi_pickup.hasBeenCollected()) {
                                $.military_car_type3 = 107
                                // SCM GOTO → load_vehicle3 (not lowered; manual jump required)
                                throw new Error('unresolved GOTO load_vehicle3') // fallback: would break linear control flow
                            }
                            if ($.barracks_pickup.hasBeenCollected()) {
                                $.military_car_type3 = 123
                                // SCM GOTO → load_vehicle3 (not lowered; manual jump required)
                                throw new Error('unresolved GOTO load_vehicle3') // fallback: would break linear control flow
                            }
                            if ($.tank_pickup.hasBeenCollected()) {
                                $.military_car_type3 = 122
                                // SCM GOTO → load_vehicle3 (not lowered; manual jump required)
                                throw new Error('unresolved GOTO load_vehicle3') // fallback: would break linear control flow
                            }
                            if ($.ambulance_pickup.hasBeenCollected()) {
                                $.military_car_type3 = 106
                                // SCM GOTO → load_vehicle3 (not lowered; manual jump required)
                                throw new Error('unresolved GOTO load_vehicle3') // fallback: would break linear control flow
                            }
                            if ($.firetruck_pickup.hasBeenCollected()) {
                                $.military_car_type3 = 97
                                // SCM GOTO → load_vehicle3 (not lowered; manual jump required)
                                throw new Error('unresolved GOTO load_vehicle3') // fallback: would break linear control flow
                            }
                            // SCM GOTO → military_crane_loop_inner (not lowered; manual jump required)
                            throw new Error('unresolved GOTO military_crane_loop_inner') // fallback: would break linear control flow
                            // SCM label load_vehicle3
                            // SCM GOSUB mission_remove_pickups_military
                            await mission_remove_pickups_military()
                            // fallback if label was not emitted as async function: no-op continues linearly
                            Streaming.RequestModel($.military_car_type3)
                            while (!Streaming.HasModelLoaded($.military_car_type3)) {
                                await asyncWait(0)
                            }
                            $.military_car = Car.Create($.military_car_type3, 1643.2, -693.2, -100.0)
                            Streaming.MarkModelAsNoLongerNeeded($.military_car_type3)
                            $.military_car.setHeading(0.0)
                            $.military_car.lockDoors(1 /* CARLOCK_UNLOCKED */)
                            $.military_car_been_created_before = 1
                        }
                    }
                } else {
                    if ($.create_military_pickups == 1) {
                        // SCM GOSUB mission_remove_pickups_military
                        await mission_remove_pickups_military()
                        // fallback if label was not emitted as async function: no-op continues linearly
                        $.create_military_pickups = 0
                    }
                    if ($.player.isPlaying()) {
                        if ($.military_car_been_created_before == 1) {
                            if (Car.IsDead($.military_car)) {
                                $.military_car_been_created_before = 0
                            } else {
                                if (!$.military_car.isInArea2D(1668.6, -685.7, 1548.1, -745.5, false /* FALSE */)) {
                                    $.military_car.markAsNoLongerNeeded()
                                    $.military_car_been_created_before = 0
                                }
                                if (!$.player.isInZone('PORT_E')) {
                                    $.military_car.markAsNoLongerNeeded()
                                    $.military_car_been_created_before = 0
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

async function import2_loop() {
    {
        //	Should be called in mission_import_start
        // SCRIPT_NAME IMPORT2
    }

    async function import2_loop_inner() {
        // SCM GOTO → import2_loop_inner lowered to endless loop
        while (true) {
            await asyncWait(500)

            if ($.player.isPlaying()) {
                //IMPORT EXPORT GARAGE2***************************************************************************************

                if ($.player.isInZone('BIG_DAM')) {
                    if (!($.suburban_garage_slots_filled == 16)) {
                        if ($.collect_all_cars2.hasSlotBeenFilled(1) && $.suburban_slot1 == 0) {
                            $.suburban_garage_slots_filled++
                            $.sentinet_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1106.161, 151.191, 60.529)
                            $.sentinet_score_off.dontRemove()
                            $.sentinet_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot1 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(2) && $.suburban_slot2 == 0) {
                            $.suburban_garage_slots_filled++
                            $.cheetah_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1106.161, 151.191, 60.332)
                            $.cheetah_score_off.dontRemove()
                            $.cheetah_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot2 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(3) && $.suburban_slot3 == 0) {
                            $.suburban_garage_slots_filled++
                            $.banshee_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1106.161, 151.191, 60.127)
                            $.banshee_score_off.dontRemove()
                            $.banshee_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot3 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(4) && $.suburban_slot4 == 0) {
                            $.suburban_garage_slots_filled++
                            $.idaho_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1106.161, 151.191, 59.919)
                            $.idaho_score_off.dontRemove()
                            $.idaho_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot4 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(5) && $.suburban_slot5 == 0) {
                            $.suburban_garage_slots_filled++
                            $.infernus_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1106.161, 151.191, 59.697)
                            $.infernus_score_off.dontRemove()
                            $.infernus_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot5 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(6) && $.suburban_slot6 == 0) {
                            $.suburban_garage_slots_filled++
                            $.taxi_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1106.161, 151.191, 59.497)
                            $.taxi_score_off.dontRemove()
                            $.taxi_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot6 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(7) && $.suburban_slot7 == 0) {
                            $.suburban_garage_slots_filled++
                            $.kuruma_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1106.161, 151.191, 59.298)
                            $.kuruma_score_off.dontRemove()
                            $.kuruma_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot7 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(8) && $.suburban_slot8 == 0) {
                            $.suburban_garage_slots_filled++
                            $.stretch_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1106.161, 151.191, 59.079)
                            $.stretch_score_off.dontRemove()
                            $.stretch_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot8 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(9) && $.suburban_slot9 == 0) {
                            $.suburban_garage_slots_filled++
                            $.perennial_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1107.042, 151.191, 60.529)
                            $.perennial_score_off.dontRemove()
                            $.perennial_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot9 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(10) && $.suburban_slot10 == 0) {
                            $.suburban_garage_slots_filled++
                            $.stinger_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1107.042, 151.191, 60.309)
                            $.stinger_score_off.dontRemove()
                            $.stinger_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot10 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(11) && $.suburban_slot11 == 0) {
                            $.suburban_garage_slots_filled++
                            $.manana_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1107.042, 151.191, 60.098)
                            $.manana_score_off.dontRemove()
                            $.manana_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot11 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(12) && $.suburban_slot12 == 0) {
                            $.suburban_garage_slots_filled++
                            $.landstalker_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1107.042, 151.191, 59.919)
                            $.landstalker_score_off.dontRemove()
                            $.landstalker_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot12 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(13) && $.suburban_slot13 == 0) {
                            $.suburban_garage_slots_filled++
                            $.stallion_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1107.042, 151.191, 59.697)
                            $.stallion_score_off.dontRemove()
                            $.stallion_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot13 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(14) && $.suburban_slot14 == 0) {
                            $.suburban_garage_slots_filled++
                            $.injection_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1107.042, 151.191, 59.497)
                            $.injection_score_off.dontRemove()
                            $.injection_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot14 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(15) && $.suburban_slot15 == 0) {
                            $.suburban_garage_slots_filled++
                            $.cabbie_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1107.042, 151.191, 59.298)
                            $.cabbie_score_off.dontRemove()
                            $.cabbie_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot15 = 1
                        }
                        if ($.collect_all_cars2.hasSlotBeenFilled(16) && $.suburban_slot16 == 0) {
                            $.suburban_garage_slots_filled++
                            $.esperanto_score_off = ScriptObject.CreateNoOffset(1379 /* line */, -1107.042, 151.191, 59.079)
                            $.esperanto_score_off.dontRemove()
                            $.esperanto_score_off.setHeading(180.0)
                            Stat.PlayerMadeProgress(1)
                            $.suburban_slot16 = 1
                        }
                    } else {
                        //IF suburban_garage_slots_filled = 16

                        if ($.changed_suburban_garage_before == 0) {
                            $.collect_all_cars2.changeType(19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */)
                            $.changed_suburban_garage_before = 1
                        }
                        // SCM label pick_up_pick_ups2
                        await asyncWait(0)
                        if ($.player.isPlaying()) {
                            if ($.player.isInArea2D(-1117.4, 158.1, -1098.0, 121.5, false /* FALSE */)) {
                                if ($.create_car_pickups_suburban == 0) {
                                    $.sentinet_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 17, -1115.0, 145.5, 59.0)
                                    $.cheetah_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 18, -1115.0, 142.0, 59.0)
                                    $.banshee_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 19, -1115.0, 138.5, 59.0)
                                    $.idaho_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 20, -1115.0, 135.0, 59.0)
                                    $.infernus_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 21, -1115.0, 131.5, 59.0)
                                    $.taxi_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 22, -1115.0, 128.0, 59.0)
                                    $.kuruma_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 23, -1112.0, 128.0, 59.0)
                                    $.stretch_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 24, -1109.0, 128.0, 59.0)
                                    $.perennial_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 25, -1106.0, 128.0, 59.0)
                                    $.stinger_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 26, -1103.0, 128.0, 59.0)
                                    $.manana_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 27, -1100.0, 128.0, 59.0)
                                    $.landstalker_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 28, -1100.0, 131.5, 59.0)
                                    $.stallion_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 29, -1100.0, 135.0, 59.0)
                                    $.injection_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 30, -1100.0, 138.5, 59.0)
                                    $.cabbie_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 31, -1100.0, 142.0, 59.0)
                                    $.esperanto_pickup = Pickup.CreateWithAmmo(1384 /* bonus */, 3 /* PICKUP_ONCE */, 32, -1100.0, 145.5, 59.0)
                                    await asyncWait(1000)
                                    $.collect_all_cars2.open()
                                    $.create_car_pickups_suburban = 1
                                }

                                if ($.import_car_been_created_before2 == 0) {
                                    if ($.sentinet_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 95
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.cheetah_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 105
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.banshee_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 119
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.idaho_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 91
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.infernus_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 101
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.taxi_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 110
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.kuruma_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 111
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.stretch_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 99
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.perennial_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 94
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.stinger_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 92
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.manana_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 100
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.landstalker_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 90
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.stallion_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 129
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.injection_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 114
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.cabbie_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 128
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    if ($.esperanto_pickup.hasBeenCollected()) {
                                        $.import_car_type2 = 109
                                        // SCM GOTO → load_vehicle2 (not lowered; manual jump required)
                                        throw new Error('unresolved GOTO load_vehicle2') // fallback: would break linear control flow
                                    }
                                    // SCM GOTO → pick_up_pick_ups2 (not lowered; manual jump required)
                                    throw new Error('unresolved GOTO pick_up_pick_ups2') // fallback: would break linear control flow
                                    // SCM label load_vehicle2
                                    Text.PrintNow('IMPORT1', 5000, 2)
                                    // SCM GOSUB mission_remove_pickups_sub
                                    await mission_remove_pickups_sub()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    if ($.player.isPlaying()) {
                                        while (!$.player.isInArea2D(-1117.4, 158.1, -1105.0, 150.9, false /* FALSE */)) {
                                            await asyncWait(0)
                                            if ($.player.isPlaying()) {
                                            }
                                        }
                                    }
                                    if ($.player.isPlaying()) {
                                        $.player.setControl(false /* Off */)
                                    }
                                    $.collect_all_cars2.close()
                                    while (!$.collect_all_cars2.isClosed()) {
                                        await asyncWait(0)
                                    }
                                    Streaming.RequestModel($.import_car_type2)
                                    while (!Streaming.HasModelLoaded($.import_car_type2)) {
                                        await asyncWait(0)
                                    }
                                    $.imported_car2 = Car.Create($.import_car_type2, -1112.0, 143.2, 59.0)
                                    Streaming.MarkModelAsNoLongerNeeded($.import_car_type2)
                                    $.imported_car2.setHeading(0.0)
                                    $.imported_car2.lockDoors(1 /* CARLOCK_UNLOCKED */)
                                    await asyncWait(1000)
                                    $.collect_all_cars2.open()
                                    if ($.player.isPlaying()) {
                                        $.player.setControl(true /* On */)
                                    }
                                    $.import_car_been_created_before2 = 1
                                }
                            } else {
                                if ($.create_car_pickups_suburban == 1) {
                                    $.collect_all_cars2.close()
                                    while (!$.collect_all_cars2.isClosed()) {
                                        await asyncWait(0)
                                    }
                                    // SCM GOSUB mission_remove_pickups_sub
                                    await mission_remove_pickups_sub()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    if ($.import_car_been_created_before2 == 1) {
                                        if (!Car.IsDead($.imported_car2)) {
                                            if ($.imported_car2.isInArea2D(-1117.4, 149.8, -1098.0, 121.5, false /* FALSE */)) {
                                                $.imported_car2.delete()
                                            } else {
                                                $.imported_car2.markAsNoLongerNeeded()
                                            }
                                        }
                                    }
                                    $.import_car_been_created_before2 = 0
                                    $.create_car_pickups_suburban = 0
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

async function check_packages() {
    {
        //	Should be called in mission_import_start

        // SCRIPT_NAME PACKAGE

        await asyncWait(300)

        $.number_of_packages_collected = Game.GetCollectablesCollected()

        while ($.number_of_packages_collected < 10) {
            await asyncWait(500)
            $.number_of_packages_collected = Game.GetCollectablesCollected()
        }

        Stat.PlayerMadeProgress(1)
        Pager.AddMessage('PAGEB1', 140, 2, 0)
        $.earned_free_pistol = 1

        while ($.number_of_packages_collected < 20) {
            await asyncWait(500)
            $.number_of_packages_collected = Game.GetCollectablesCollected()
        }

        Stat.PlayerMadeProgress(1)
        Pager.AddMessage('PAGEB2', 140, 2, 0)
        $.earned_free_uzi = 1

        while ($.number_of_packages_collected < 30) {
            await asyncWait(500)
            $.number_of_packages_collected = Game.GetCollectablesCollected()
        }

        Stat.PlayerMadeProgress(1)
        Pager.AddMessage('PAGEB5', 140, 2, 0)
        $.earned_free_grenades = 1

        while ($.number_of_packages_collected < 40) {
            await asyncWait(500)
            $.number_of_packages_collected = Game.GetCollectablesCollected()
        }

        Stat.PlayerMadeProgress(1)
        Pager.AddMessage('PAGEB4', 140, 2, 0)
        $.earned_free_shotgun = 1

        while ($.number_of_packages_collected < 50) {
            await asyncWait(500)
            $.number_of_packages_collected = Game.GetCollectablesCollected()
        }

        Stat.PlayerMadeProgress(1)
        Pager.AddMessage('PAGEB3', 140, 2, 0)
        $.earned_free_armour = 1

        while ($.number_of_packages_collected < 60) {
            await asyncWait(500)
            $.number_of_packages_collected = Game.GetCollectablesCollected()
        }

        Stat.PlayerMadeProgress(1)
        Pager.AddMessage('PAGEB6', 140, 2, 0)
        $.earned_free_molotovs = 1

        while ($.number_of_packages_collected < 70) {
            await asyncWait(500)
            $.number_of_packages_collected = Game.GetCollectablesCollected()
        }

        Stat.PlayerMadeProgress(1)
        Pager.AddMessage('PAGEB7', 140, 2, 0)
        $.earned_free_ak47 = 1

        while ($.number_of_packages_collected < 80) {
            await asyncWait(500)
            $.number_of_packages_collected = Game.GetCollectablesCollected()
        }

        Stat.PlayerMadeProgress(1)
        Pager.AddMessage('PAGEB8', 140, 2, 0)
        $.earned_free_sniper = 1

        while ($.number_of_packages_collected < 90) {
            await asyncWait(500)
            $.number_of_packages_collected = Game.GetCollectablesCollected()
        }

        Stat.PlayerMadeProgress(1)
        Pager.AddMessage('PAGEB9', 140, 2, 0)
        $.earned_free_m16 = 1

        while ($.number_of_packages_collected < 100) {
            await asyncWait(500)
            $.number_of_packages_collected = Game.GetCollectablesCollected()
        }

        Stat.PlayerMadeProgress(1)
        Pager.AddMessage('PAGEB10', 140, 2, 0)
        $.earned_free_launcher = 1

        return // TERMINATE_THIS_SCRIPT
    }
}

async function mission_remove_pickups_ind() {
    {
        $.securicar_pickup.remove()
        $.moonbeam_pickup.remove()
        $.coach_pickup.remove()
        $.flatbed_pickup.remove()
        $.linerunner_pickup.remove()
        $.trashmaster_pickup.remove()
        $.patriot_pickup.remove()
        $.whoopee_pickup.remove()
        $.blista_pickup.remove()
        $.mule_pickup.remove()
        $.yankee_pickup.remove()
        $.bobcat_pickup.remove()
        $.dodo_pickup.remove()
        $.bus_pickup.remove()
        $.rumpo_pickup.remove()
        $.pony_pickup.remove()
    }

    return
}

async function mission_remove_pickups_sub() {
    {
        $.sentinet_pickup.remove()
        $.cheetah_pickup.remove()
        $.banshee_pickup.remove()
        $.idaho_pickup.remove()
        $.infernus_pickup.remove()
        $.taxi_pickup.remove()
        $.kuruma_pickup.remove()
        $.stretch_pickup.remove()
        $.perennial_pickup.remove()
        $.stinger_pickup.remove()
        $.manana_pickup.remove()
        $.landstalker_pickup.remove()
        $.stallion_pickup.remove()
        $.injection_pickup.remove()
        $.cabbie_pickup.remove()
        $.esperanto_pickup.remove()
    }

    return
}

async function mission_remove_pickups_military() {
    {
        $.copcar_pickup.remove()
        $.swatvan_pickup.remove()
        $.fbi_pickup.remove()
        $.tank_pickup.remove()
        $.barracks_pickup.remove()
        $.ambulance_pickup.remove()
        $.firetruck_pickup.remove()
    }

    return
}

async function remove_bonus_pickups() {
    {
        $.bonus_gun1.remove()
        $.bonus_gun2.remove()
        $.bonus_gun3.remove()
        $.bonus_gun4.remove()
        $.bonus_gun5.remove()
        $.bonus_gun6.remove()
        $.bonus_gun7.remove()
        $.bonus_gun8.remove()
        $.bonus_gun9.remove()
        $.bonus_gunflame.remove()
        $.bonus_gun10.remove()
        $.bonus_bribe1.remove()
        $.bonus_bribe2.remove()
        $.bonus_bribe3.remove()
        $.bonus_bribe4.remove()
        $.bonus_bribe5.remove()
        $.bonus_bribe6.remove()
        $.bonus_health.remove()
        $.bonus_adrenaline.remove()
    }

    return
}

export async function import_() {
    // MissionBoundary

    //IMPORT EXPORT VARIABLES

    // VAR_INT imported_car import_car_been_created_before import_car_type
    // VAR_INT imported_car2 import_car_been_created_before2 import_car_type2

    // VAR_INT industrial_garage_slots_filled create_car_pickups_industrial changed_industrial_garage_before
    // VAR_INT industrial_slot1 industrial_slot2 industrial_slot3 industrial_slot4 industrial_slot5 industrial_slot6 industrial_slot7 industrial_slot8
    // VAR_INT industrial_slot9 industrial_slot10 industrial_slot11 industrial_slot12 industrial_slot13 industrial_slot14 industrial_slot15 industrial_slot16
    // VAR_INT securicar_pickup moonbeam_pickup coach_pickup flatbed_pickup linerunner_pickup trashmaster_pickup patriot_pickup whoopee_pickup
    // VAR_INT blista_pickup mule_pickup yankee_pickup bobcat_pickup dodo_pickup bus_pickup rumpo_pickup pony_pickup
    // VAR_INT securicar_score_off moonbeam_score_off coach_score_off flatbed_score_off linerunner_score_off trashmaster_score_off patriot_score_off whoopee_score_off
    // VAR_INT blista_score_off mule_score_off yankee_score_off bobcat_score_off dodo_score_off bus_score_off rumpo_score_off pony_score_off

    // VAR_INT suburban_garage_slots_filled create_car_pickups_suburban changed_suburban_garage_before
    // VAR_INT suburban_slot1 suburban_slot2 suburban_slot3 suburban_slot4 suburban_slot5 suburban_slot6 suburban_slot7 suburban_slot8
    // VAR_INT suburban_slot9 suburban_slot10 suburban_slot11 suburban_slot12 suburban_slot13 suburban_slot14 suburban_slot15 suburban_slot16
    // VAR_INT sentinet_pickup cheetah_pickup banshee_pickup idaho_pickup infernus_pickup taxi_pickup kuruma_pickup stretch_pickup
    // VAR_INT perennial_pickup stinger_pickup manana_pickup landstalker_pickup stallion_pickup injection_pickup cabbie_pickup esperanto_pickup
    // VAR_INT sentinet_score_off cheetah_score_off banshee_score_off idaho_score_off infernus_score_off taxi_score_off kuruma_score_off stretch_score_off
    // VAR_INT perennial_score_off stinger_score_off manana_score_off landstalker_score_off stallion_score_off injection_score_off cabbie_score_off esperanto_score_off

    // VAR_INT military_car military_car_been_created_before military_car_type3
    // VAR_INT military_slots_filled create_military_pickups cran_activated_before

    // VAR_INT copcar_pickup swatvan_pickup fbi_pickup tank_pickup firetruck_pickup ambulance_pickup barracks_pickup

    // VAR_INT number_of_packages_collected bonus_weapons_created

    // VAR_INT earned_free_pistol earned_free_uzi earned_free_armour earned_free_shotgun earned_free_grenades
    // VAR_INT earned_free_molotovs earned_free_ak47 earned_free_sniper earned_free_m16 earned_free_launcher earned_free_flamethrower

    // VAR_INT bonus_gun1 bonus_gun2 bonus_gun3 bonus_gun4 bonus_gun5 bonus_gun6 bonus_gun7 bonus_gun8 bonus_gun9 bonus_gun10 bonus_gunflame
    // VAR_INT bonus_bribe1 bonus_bribe2 bonus_bribe3 bonus_bribe4 bonus_bribe5 bonus_bribe6 bonus_health bonus_adrenaline
    // VAR_INT ind_copcar_kills com_copcar_kills sub_copcar_kills total_saved_peds ambulance_pager_flag play_pager_message1 play_pager_message2 play_pager_message3
    // VAR_INT ind_fires_exting com_fires_exting sub_fires_exting

    $.earned_free_pistol = 0
    $.earned_free_uzi = 0
    $.earned_free_armour = 0
    $.earned_free_shotgun = 0
    $.earned_free_grenades = 0
    $.earned_free_molotovs = 0
    $.earned_free_ak47 = 0
    $.earned_free_sniper = 0
    $.earned_free_m16 = 0
    $.earned_free_launcher = 0
    $.earned_free_flamethrower = 0
    $.ind_copcar_kills = 0
    $.com_copcar_kills = 0
    $.sub_copcar_kills = 0
    $.ind_fires_exting = 0
    $.com_fires_exting = 0
    $.sub_fires_exting = 0
    $.total_saved_peds = 0

    $.play_pager_message1 = 0
    $.play_pager_message2 = 0
    $.play_pager_message3 = 0
    $.ambulance_pager_flag = 0

    $.bonus_weapons_created = 0

    $.import_car_been_created_before = 0
    $.import_car_been_created_before2 = 0
    $.military_car_been_created_before = 0

    $.industrial_garage_slots_filled = 0
    $.suburban_garage_slots_filled = 0
    $.military_slots_filled = 0

    $.create_car_pickups_industrial = 0
    $.create_car_pickups_suburban = 0
    $.create_military_pickups = 0

    $.changed_suburban_garage_before = 0
    $.changed_industrial_garage_before = 0
    $.cran_activated_before = 0

    // SCRIPT_NAME import

    // SET_DEATHARREST_STATE(false /* OFF */);

    //IMPORT EXPORT GARAGE1***************************************************************************************
}
