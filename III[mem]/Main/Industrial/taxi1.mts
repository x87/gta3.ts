// Generated from Main/Industrial/taxi1.sc
import { Counter, DisplayedCounter, DisplayedTimer, Timer } from '../../utils/scm.mts';
import { $ } from '../../utils';

// *******************************************************************************************
// *******************************************************************************************
// *************************************CRRRRRAZY TAXI****************************************
// *******************************LETS MAKE SOME CRRRRRAZY MONEY!*****************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

let taxi_countdown: DisplayedTimer;
let taxi_passed_this_shot: DisplayedCounter;

async function body() {
    // Mission start stuff

    // GOSUB mission_start_taxi1

    // GOSUB mission_cleanup_taxi1

    // MISSION_END

    // Variables for mission

    // VAR_INT blip1_ct1 blip2_ct1 spray_blip_onscreen

    // VAR_INT taxi_car1 taxi_countdown_already_started

    // VAR_INT taxi_ped1 taxi_passed_this_shot taxi_fucked_flag

    //VAR_INT special_ped1

    // VAR_INT taxi_countdown taxi_score taxi_distance_int taxi_distance_int_old

    // VAR_INT taxi_finish_time taxi_start_time total_taxi_time_taken

    // VAR_FLOAT taxi_destx1 taxi_desty1 taxi_destz1
    // VAR_FLOAT taxi_destx2 taxi_desty2 taxi_destz2
    // VAR_FLOAT taxi_blipx taxi_blipy taxi_blipz

    // VAR_FLOAT taxi_ped_x taxi_ped_y taxi_ped_z
    // VAR_FLOAT x_diff y_diff x_diff_sq y_diff_sq taxi_distance_sq taxi_distance
    // VAR_INT score_for_this_fare speedbonus in_a_row_cash in_a_row_number

    // ***************************************Mission Start*************************************
    // SCRIPT_NAME TAXI

    // SET_DEATHARREST_STATE(false /* OFF */); // GSW - does deatharrest have to be switched off?  YES! well maybe...

    ONMISSION = true;
    $.taxi_countdown_already_started = 0;
    $.taxi_countdown = 0;
    $.taxi_passed_this_shot = 0;
    $.taxi_score = 0;
    $.taxi_ped1 = -1 as any;
    $.spray_blip_onscreen = 0;
    $.taxi_fucked_flag = 0;
    $.in_a_row_number = 5;
    $.in_a_row_cash = 2000;

    await asyncWait(0);

    taxi_passed_this_shot = new Counter({ key: 'FARES', type: 0 /* COUNTER_DISPLAY_NUMBER */ }).display(); // xxx: Hud.DisplayCounterWithString($.taxi_passed_this_shot, 0 /* COUNTER_DISPLAY_NUMBER */, 'FARES'); //TEST STUFF!!!!!!!!!!!!!

    if (!$.player.isPlaying()) {
        return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
    }

    if ($.player.isInAnyCar()) {
        $.taxi_car1 = $.player.storeCarIsIn();
    } else {
        return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
    }

    //SWITCH_TAXI_TIMER ON
    $.taxi_car1.setTaxiLights(true /* On */);
    Text.PrintNow('TAXI1', 1500, 1); //Pick up a fare
    //WAIT 1500
    await asyncWait(0);

    Start_taxi_mission: while (true) {
        if ($.done_taxi_help == 0) {
            Text.PrintHelp('TAXIH1');
            $.done_taxi_help = 1;
        }

        $.score_for_this_fare = 0;

        if (!$.player.isPlaying()) {
            return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
        }

        if (Car.IsDead($.taxi_car1)) {
            return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
        }

        if (!$.player.isInCar($.taxi_car1)) {
            return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
        }

        /*
        IF taxi_passed = 0	   				//SPECIAL MISSIONS???
        AND IS_PLAYER_IN_ZONE player REDLIGH
        GOTO special_ped_mission1
        ENDIF
        */

        //	random_ped_grabber:

        if (!($.controlmode == 3)) {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && ONMISSION) {
                return taxi_fail_button_pressed(); // SCM GOTO → taxi_fail_button_pressed
            }
        } else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && ONMISSION) {
                return taxi_fail_button_pressed(); // SCM GOTO → taxi_fail_button_pressed
            }
        }

        if ($.taxi_countdown_already_started == 1 && taxi_countdown.value == 0) {
            //PRINT_NOW ( TAXI2 ) 5000 2 //You SUCK!
            return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
        }

        if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
            $.taxi_ped1 = Zone.GetRandomChar('IND_ZON');
        }

        if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
            $.taxi_ped1 = Zone.GetRandomChar('COM_ZON');
        }

        if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
            $.taxi_ped1 = Zone.GetRandomChar('SUB_ZON');
        }
        //IF IS_PLAYER_IN_ZONE player SUB_ZON
        //	GET_RANDOM_CHAR_IN_ZONE IND_ZON taxi_ped1
        //ENDIF

        if ($.taxi_ped1 == (-1 as any)) {
            await asyncWait(0);
            continue Start_taxi_mission; // SCM GOTO → Start_taxi_mission
        }

        //been_in_taxi1_before = 7

        // START OF TAXI MISSION

        $.taxi_ped1.setIdle();
        $.taxi_ped1.clearThreatSearch();
        $.taxi_ped1.setHeedThreats(false /* False */);
        $.blip1_ct1 = Blip.AddForChar($.taxi_ped1);
        $.taxi_ped1.setObjHailTaxi();

        //PRINT_NOW ( TAXI1 ) 2000 2 //Pick up a fare

        ped_get_in_taxi: while (true) {
            while (!$.player.locateInCarChar3D($.taxi_ped1, 7.0, 7.0, 2.0, false /* FALSE */) || !$.taxi_car1.isStopped()) {
                //	OR NOT IS_PLAYER_IN_CAR player taxi_car1

                await asyncWait(0);
                if (!$.player.isPlaying()) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if (Car.IsDead($.taxi_car1)) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if (Char.IsDead($.taxi_ped1)) {
                    await mission_taxi1_passed(); // SCM GOTO → mission_taxi1_passed
                    continue Start_taxi_mission; // SCM GOTO → Start_taxi_mission
                }
                if (!$.player.isInCar($.taxi_car1)) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if (!$.player.locateInCarChar3D($.taxi_ped1, 90.0, 90.0, 20.0, false /* FALSE */)) {
                    await mission_taxi1_passed(); // SCM GOTO → mission_taxi1_passed
                    continue Start_taxi_mission; // SCM GOTO → Start_taxi_mission
                }
                if (!($.controlmode == 3)) {
                    if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && ONMISSION) {
                        return taxi_fail_button_pressed(); // SCM GOTO → taxi_fail_button_pressed
                    }
                } else {
                    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && ONMISSION) {
                        return taxi_fail_button_pressed(); // SCM GOTO → taxi_fail_button_pressed
                    }
                }
                if ($.taxi_countdown_already_started == 1 && taxi_countdown.value == 0) {
                    //PRINT_NOW ( TAXI2 ) 5000 2 //You SUCK!
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if ($.taxi_car1.isHealthGreater(500) && $.spray_blip_onscreen == 1) {
                    $.spray_taxi.remove();
                    $.spray_blip_onscreen = 0;
                    $.taxi_fucked_flag = 0;
                }
                if (!Char.IsDead($.taxi_ped1)) {
                    $.taxi_ped1.turnToFacePlayer($.player);
                }
            }

            if (!$.taxi_car1.isHealthGreater(500)) {
                Text.PrintNow('TAXI7', 4000, 1); //I ain't getting in that heap of shit!!
                if ($.spray_blip_onscreen == 0) {
                    $.spray_taxi.remove();
                    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                        $.spray_taxi = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
                    }
                    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
                        $.spray_taxi = Blip.AddSpriteForCoord(379.0, -493.8, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
                    }
                    if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                        $.spray_taxi = Blip.AddSpriteForCoord(-1128.0, 32.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
                    }
                    $.spray_blip_onscreen = 1;
                    $.taxi_fucked_flag = 1;
                }
                await mission_taxi1_passed(); // SCM GOTO → mission_taxi1_passed
                continue Start_taxi_mission; // SCM GOTO → Start_taxi_mission
            }

            $.taxi_ped1.setRunning(true /* TRUE */);
            $.taxi_ped1.setObjEnterCarAsPassenger($.taxi_car1);

            while (!$.taxi_ped1.isInCar($.taxi_car1)) {
                await asyncWait(0);
                if (!$.player.isPlaying()) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if (Car.IsDead($.taxi_car1)) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if (Char.IsDead($.taxi_ped1)) {
                    await mission_taxi1_passed(); // SCM GOTO → mission_taxi1_passed
                    continue Start_taxi_mission; // SCM GOTO → Start_taxi_mission
                }
                if (!$.player.isInCar($.taxi_car1)) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if (!$.player.locateInCarChar3D($.taxi_ped1, 90.0, 90.0, 20.0, false /* FALSE */)) {
                    await mission_taxi1_passed(); // SCM GOTO → mission_taxi1_passed
                    continue Start_taxi_mission; // SCM GOTO → Start_taxi_mission
                }
                if (!($.controlmode == 3)) {
                    if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && ONMISSION) {
                        return taxi_fail_button_pressed(); // SCM GOTO → taxi_fail_button_pressed
                    }
                } else {
                    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && ONMISSION) {
                        return taxi_fail_button_pressed(); // SCM GOTO → taxi_fail_button_pressed
                    }
                }
                if ($.taxi_countdown_already_started == 1 && taxi_countdown.value == 0) {
                    //PRINT_NOW ( TAXI2 ) 5000 2 //You SUCK!
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if ($.taxi_car1.isHealthGreater(500) && $.spray_blip_onscreen == 1) {
                    $.spray_taxi.remove();
                    $.spray_blip_onscreen = 0;
                }
                if (!$.player.locateInCarChar3D($.taxi_ped1, 7.0, 7.0, 2.0, false /* FALSE */)) {
                    continue ped_get_in_taxi; // SCM GOTO → ped_get_in_taxi
                }
            }

            const _res286 = $.taxi_ped1.getCoordinates();
            $.taxi_ped_x = _res286.x;
            $.taxi_ped_y = _res286.y;
            $.taxi_ped_z = _res286.z;

            $.blip1_ct1.remove();
            $.taxi_car1.setTaxiLights(false /* Off */);

            //GET_GAME_TIMER taxi_start_time

            break; // xxx: fallthrough
        }

        passenger_destination: while (true) {
            await asyncWait(0);

            if (!$.player.isPlaying()) {
                return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
            }

            if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                //OR IS_PLAYER_IN_ZONE player SUB_ZON

                $.been_in_taxi1_before = Math.RandomIntInRange(1, 11);
                if (!$.player.isPlaying()) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if ($.been_in_taxi1_before == 1) {
                    if ($.player.isInZone('REDLIGH')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE1', 5000, 1); //Take me to Meeouch Sex Kitten Club
                    $.taxi_destx1 = 936.3;
                    $.taxi_desty1 = -462.6;
                    $.taxi_destz1 = 14.4;
                    $.taxi_destx2 = 913.7;
                    $.taxi_desty2 = -456.0;
                    $.taxi_destz2 = 16.4;
                }
                if ($.been_in_taxi1_before == 2) {
                    if ($.player.isInZone('S_VIEW')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE2', 5000, 1); //Take me to Supa Save
                    $.taxi_destx1 = 1268.5;
                    $.taxi_desty1 = -616.4;
                    $.taxi_destz1 = 11.7;
                    $.taxi_destx2 = 1288.3;
                    $.taxi_desty2 = -627.6;
                    $.taxi_destz2 = 13.7;
                }
                if ($.been_in_taxi1_before == 3) {
                    if ($.player.isInZone('CHINA')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE3', 5000, 1); //Take me to the old School hall
                    $.taxi_destx1 = 1008.9;
                    $.taxi_desty1 = -871.9;
                    $.taxi_destz1 = 14.4;
                    $.taxi_destx2 = 995.3;
                    $.taxi_desty2 = -881.9;
                    $.taxi_destz2 = 16.4;
                }
                if ($.been_in_taxi1_before == 4) {
                    if ($.player.isInZone('PORT_W')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE4', 5000, 1); //Take me to greasy Joes
                    $.taxi_destx1 = 849.3;
                    $.taxi_desty1 = -990.1;
                    $.taxi_destz1 = 4.5;
                    $.taxi_destx2 = 869.4;
                    $.taxi_desty2 = -1002.6;
                    $.taxi_destz2 = 6.5;
                }
                if ($.been_in_taxi1_before == 5) {
                    if ($.player.isInZone('REDLIGH')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE5', 5000, 1); //Take me to Ammo Nation
                    $.taxi_destx1 = 1065.4;
                    $.taxi_desty1 = -394.1;
                    $.taxi_destz1 = 14.3;
                    $.taxi_destx2 = 1057.9;
                    $.taxi_desty2 = -408.9;
                    $.taxi_destz2 = 16.3;
                }
                if ($.been_in_taxi1_before == 6) {
                    if ($.player.isInZone('LITTLEI')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE6', 5000, 1); //Take me to Easy Credit Autos
                    $.taxi_destx1 = 1207.0;
                    $.taxi_desty1 = -122.0;
                    $.taxi_destz1 = 14.0;
                    $.taxi_destx2 = 1224.0;
                    $.taxi_desty2 = -108.0;
                    $.taxi_destz2 = 16.0;
                }
                if ($.been_in_taxi1_before == 7) {
                    if ($.player.isInZone('REDLIGH')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE7', 5000, 1); //Take us to Woodys topless bar
                    $.taxi_destx1 = 912.9;
                    $.taxi_desty1 = -419.0;
                    $.taxi_destz1 = 14.0;
                    $.taxi_destx2 = 919.5;
                    $.taxi_desty2 = -401.3;
                    $.taxi_destz2 = 16.0;
                }
                if ($.been_in_taxi1_before == 8) {
                    if ($.player.isInZone('LITTLEI')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE8', 5000, 1); //Take me to The Bistro
                    $.taxi_destx1 = 1345.8;
                    $.taxi_desty1 = -461.8;
                    $.taxi_destz1 = 49.4;
                    $.taxi_destx2 = 1334.7;
                    $.taxi_desty2 = -447.0;
                    $.taxi_destz2 = 51.4;
                }
                if ($.been_in_taxi1_before == 9) {
                    if ($.player.isInZone('PORT_E')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE9', 5000, 1); //Take me to the Import/Export garage
                    $.taxi_destx1 = 1475.0;
                    $.taxi_desty1 = -686.0;
                    $.taxi_destz1 = 11.3;
                    $.taxi_destx2 = 1485.3;
                    $.taxi_desty2 = -667.5;
                    $.taxi_destz2 = 13.3;
                }
                if ($.been_in_taxi1_before == 10) {
                    if ($.player.isInZone('CHINA')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE10', 5000, 1); //Take me to the 'Punk Noodles'
                    $.taxi_destx1 = 1039.1;
                    $.taxi_desty1 = -660.1;
                    $.taxi_destz1 = 14.4;
                    $.taxi_destx2 = 1043.9;
                    $.taxi_desty2 = -647.9;
                    $.taxi_destz2 = 16.4;
                }
            }

            if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
                //OR IS_PLAYER_IN_ZONE player SUB_ZON

                $.been_in_taxi1_before = Math.RandomIntInRange(11, 21);
                if (!$.player.isPlaying()) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if ($.been_in_taxi1_before == 11) {
                    if ($.player.isInZone('CONSTRU')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE11', 5000, 1); //Take me to the constuction site
                    $.taxi_destx1 = 441.86;
                    $.taxi_desty1 = -193.0;
                    $.taxi_destz1 = 20.36;
                    $.taxi_destx2 = 447.42;
                    $.taxi_desty2 = -201.93;
                    $.taxi_destz2 = 22.21;
                }
                if ($.been_in_taxi1_before == 12) {
                    if ($.player.isInZone('STADIUM')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE12', 5000, 1); //Take me to the stadium
                    $.taxi_destx1 = -27.05;
                    $.taxi_desty1 = -269.61;
                    $.taxi_destz1 = 14.95;
                    $.taxi_destx2 = -11.73;
                    $.taxi_desty2 = -278.88;
                    $.taxi_destz2 = 16.93;
                }
                if ($.been_in_taxi1_before == 13) {
                    if ($.player.isInZone('SHOPING')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE13', 5000, 1); //Take me to the Church
                    $.taxi_destx1 = 22.07;
                    $.taxi_desty1 = -1136.95;
                    $.taxi_destz1 = 25.14;
                    $.taxi_destx2 = 28.95;
                    $.taxi_desty2 = -1125.66;
                    $.taxi_destz2 = 27.12;
                }
                if ($.been_in_taxi1_before == 14) {
                    if ($.player.isInZone('YAKUSA')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE14', 5000, 1); //Casino
                    $.taxi_destx1 = 421.42;
                    $.taxi_desty1 = -1390.83;
                    $.taxi_destz1 = 24.95;
                    $.taxi_destx2 = 415.45;
                    $.taxi_desty2 = -1401.24;
                    $.taxi_destz2 = 26.92;
                }
                if ($.been_in_taxi1_before == 15) {
                    if ($.player.isInZone('UNIVERS')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE15', 5000, 1); //Uni
                    $.taxi_destx1 = 183.15;
                    $.taxi_desty1 = -215.5;
                    $.taxi_destz1 = 17.02;
                    $.taxi_destx2 = 167.21;
                    $.taxi_desty2 = -221.22;
                    $.taxi_destz2 = 19.29;
                }
                if ($.been_in_taxi1_before == 16) {
                    if ($.player.isInZone('PARK')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE16', 5000, 1); //Shopping Mall
                    $.taxi_destx1 = 193.77;
                    $.taxi_desty1 = -626.22;
                    $.taxi_destz1 = 25.12;
                    $.taxi_destx2 = 180.83;
                    $.taxi_desty2 = -616.51;
                    $.taxi_destz2 = 27.12;
                }
                if ($.been_in_taxi1_before == 17) {
                    if ($.player.isInZone('COM_EAS')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE17', 5000, 1); //Museum
                    $.taxi_destx1 = 326.1;
                    $.taxi_desty1 = -1001.7;
                    $.taxi_destz1 = 29.05;
                    $.taxi_destx2 = 316.3;
                    $.taxi_desty2 = -1012.4;
                    $.taxi_destz2 = 24.44;
                }
                if ($.been_in_taxi1_before == 18) {
                    if ($.player.isInZone('YAKUSA')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE18', 5000, 1); //(AMco)
                    $.taxi_destx1 = 246.2;
                    $.taxi_desty1 = -1192.75;
                    $.taxi_destz1 = 24.71;
                    $.taxi_destx2 = 256.67;
                    $.taxi_desty2 = -1184.17;
                    $.taxi_destz2 = 26.71;
                }
                if ($.been_in_taxi1_before == 19) {
                    if ($.player.isInZone('SHOPING')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE19', 5000, 1); //Bolt Burgers
                    $.taxi_destx1 = 28.69;
                    $.taxi_desty1 = -1066.66;
                    $.taxi_destz1 = 26.72;
                    $.taxi_destx2 = 34.07;
                    $.taxi_desty2 = -1078.96;
                    $.taxi_destz2 = 24.97;
                }
                if ($.been_in_taxi1_before == 20) {
                    if ($.player.isInZone('PARK')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE20', 5000, 1); //Take me to the park
                    $.taxi_destx1 = 27.56;
                    $.taxi_desty1 = -776.42;
                    $.taxi_destz1 = 26.26;
                    $.taxi_destx2 = 38.79;
                    $.taxi_desty2 = -765.06;
                    $.taxi_destz2 = 28.57;
                }
            }

            if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                $.been_in_taxi1_before = Math.RandomIntInRange(21, 27);
                if (!$.player.isPlaying()) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if ($.been_in_taxi1_before == 21) {
                    if ($.player.isInZone('AIRPORT')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE21', 5000, 1); //Take me to the Airport
                    $.taxi_destx1 = -744.5;
                    $.taxi_desty1 = -598.6;
                    $.taxi_destz1 = 8.0;
                    $.taxi_destx2 = -752.0;
                    $.taxi_desty2 = -617.2;
                    $.taxi_destz2 = 15.0;
                }
                if ($.been_in_taxi1_before == 22) {
                    if ($.player.isInZone('BIG_DAM')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE22', 5000, 1); //Take me to the DAM
                    $.taxi_destx1 = -1111.3;
                    $.taxi_desty1 = 522.9;
                    $.taxi_destz1 = 65.0;
                    $.taxi_destx2 = -1101.0;
                    $.taxi_desty2 = 516.7;
                    $.taxi_destz2 = 70.0;
                }
                if ($.been_in_taxi1_before == 23) {
                    if ($.player.isInZone('SUB_IND')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE23', 5000, 1); //Take me to the Import/Export garage
                    $.taxi_destx1 = -1107.9;
                    $.taxi_desty1 = 163.5;
                    $.taxi_destz1 = 50.0;
                    $.taxi_destx2 = -1115.4;
                    $.taxi_desty2 = 155.6;
                    $.taxi_destz2 = 68.0;
                }
                if ($.been_in_taxi1_before == 24) {
                    if ($.player.isInZone('SUB_IND')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE24', 5000, 1); //Take me to the Hospital
                    $.taxi_destx1 = -1253.0;
                    $.taxi_desty1 = -136.6;
                    $.taxi_destz1 = 55.0;
                    $.taxi_destx2 = -1260.3;
                    $.taxi_desty2 = -148.4;
                    $.taxi_destz2 = 62.0;
                }
                if ($.been_in_taxi1_before == 25) {
                    if ($.player.isInZone('SUB_ZO2') || $.player.isInZone('SUB_ZO3')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE25', 5000, 1); //Park
                    $.taxi_destx1 = -230.1;
                    $.taxi_desty1 = 311.5;
                    $.taxi_destz1 = 0.0;
                    $.taxi_destx2 = -220.2;
                    $.taxi_desty2 = 322.5;
                    $.taxi_destz2 = 10.0;
                }
                if ($.been_in_taxi1_before == 26) {
                    if ($.player.isInZone('PROJECT') || $.player.isInZone('SWANKS')) {
                        continue passenger_destination; // SCM GOTO → passenger_destination
                    }
                    Text.PrintNow('FARE26', 5000, 1); //Projects
                    $.taxi_destx1 = -682.5;
                    $.taxi_desty1 = 95.3;
                    $.taxi_destz1 = 10.0;
                    $.taxi_destx2 = -673.0;
                    $.taxi_desty2 = 88.4;
                    $.taxi_destz2 = 25.0;
                }
            }

            $.taxi_blipx = $.taxi_destx1 + $.taxi_destx2;
            $.taxi_blipx /= 2.0;

            $.taxi_blipy = $.taxi_desty1 + $.taxi_desty2;
            $.taxi_blipy /= 2.0;

            $.blip2_ct1 = Blip.AddForCoord($.taxi_blipx, $.taxi_blipy, -100.0);
            $.blip2_ct1.changeDisplay(2 /* BLIP_ONLY */);

            if (Car.IsDead($.taxi_car1)) {
                return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
            }

            $.x_diff = $.taxi_ped_x - $.taxi_blipx;
            $.y_diff = $.taxi_ped_y - $.taxi_blipy;

            $.x_diff_sq = $.x_diff * $.x_diff;
            $.y_diff_sq = $.y_diff * $.y_diff;

            $.taxi_distance_sq = $.x_diff_sq + $.y_diff_sq;
            $.taxi_distance = Math.sqrt($.taxi_distance_sq);
            $.taxi_distance_int = $.taxi_distance;
            $.taxi_distance_int_old = $.taxi_distance_int;

            if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                if (taxi_passed_this_shot.value == 0) {
                    $.taxi_distance_int = $.taxi_distance_int * 100;
                }
            }

            if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
                if (taxi_passed_this_shot.value == 0) {
                    $.taxi_distance_int = $.taxi_distance_int * 95;
                }
            }

            if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                if (taxi_passed_this_shot.value == 0) {
                    $.taxi_distance_int = $.taxi_distance_int * 115;
                }
            }

            if (taxi_passed_this_shot.value == 1) {
                $.taxi_distance_int = $.taxi_distance_int * 90;
            }

            if (taxi_passed_this_shot.value == 2) {
                $.taxi_distance_int = $.taxi_distance_int * 85;
            }

            if (taxi_passed_this_shot.value == 3) {
                $.taxi_distance_int = $.taxi_distance_int * 84;
            }

            if (taxi_passed_this_shot.value == 4) {
                $.taxi_distance_int = $.taxi_distance_int * 83;
            }

            if (taxi_passed_this_shot.value == 5) {
                $.taxi_distance_int = $.taxi_distance_int * 82;
            }

            if (taxi_passed_this_shot.value > 5 && taxi_passed_this_shot.value <= 10) {
                $.taxi_distance_int = $.taxi_distance_int * 80;
            }

            if (taxi_passed_this_shot.value > 11 && taxi_passed_this_shot.value <= 20) {
                $.taxi_distance_int = $.taxi_distance_int * 75;
            }

            if (taxi_passed_this_shot.value > 20 && taxi_passed_this_shot.value <= 50) {
                $.taxi_distance_int = $.taxi_distance_int * 70;
            }

            if (taxi_passed_this_shot.value > 50) {
                $.taxi_distance_int = $.taxi_distance_int * 60;
            }

            
            $.speedbonus = $.taxi_distance_int;
            $.speedbonus = $.speedbonus / 100;
            $.speedbonus = $.speedbonus * 65;
            
            TIMERB = 0;
            
            if ($.taxi_countdown_already_started == 0) {
                taxi_countdown = new Timer($.taxi_countdown).display(); // xxx: Hud.DisplayTimer($.taxi_countdown);
                $.taxi_countdown_already_started = 1;
            }
            
            taxi_countdown.value += $.taxi_distance_int;

            if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                if (taxi_passed_this_shot.value == 0) {
                    taxi_countdown.value = taxi_countdown.value + 15000;
                }
            } else {
                if (taxi_passed_this_shot.value == 0) {
                    taxi_countdown.value = taxi_countdown.value + 10000;
                }
            }

            while (!$.taxi_car1.isStoppedInArea3D($.taxi_destx1, $.taxi_desty1, $.taxi_destz1, $.taxi_destx2, $.taxi_desty2, $.taxi_destz2, true /* TRUE */)) {
                await asyncWait(0);
                if (!$.player.isPlaying()) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if (Car.IsDead($.taxi_car1)) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                if (!$.player.isInCar($.taxi_car1)) {
                    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
                }
                $.controlmode = Pad.GetControllerMode();
                if (!($.controlmode == 3)) {
                    if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && ONMISSION) {
                        return taxi_fail_button_pressed(); // SCM GOTO → taxi_fail_button_pressed
                    }
                } else {
                    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && ONMISSION) {
                        return taxi_fail_button_pressed(); // SCM GOTO → taxi_fail_button_pressed
                    }
                }
                if (taxi_countdown.value == 0) {
                    return taxi_out_of_time(); // SCM GOTO → taxi_out_of_time
                }
                if (!$.taxi_car1.isHealthGreater(500)) {
                    if ($.spray_blip_onscreen == 0) {
                        $.spray_taxi.remove();
                        if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                            $.spray_taxi = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
                        }
                        if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
                            $.spray_taxi = Blip.AddSpriteForCoord(379.0, -493.8, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
                        }
                        if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                            $.spray_taxi = Blip.AddSpriteForCoord(-1128.0, 32.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
                        }
                        $.spray_blip_onscreen = 1;

                        await taxi_fucked(false); // SCM GOSUB taxi_fucked
                        await mission_taxi1_passed(); // SCM GOTO → mission_taxi1_passed
                        continue Start_taxi_mission; // SCM GOTO → Start_taxi_mission
                    }
                }
                if (!Car.IsDead($.taxi_car1)) {
                    if ($.taxi_car1.isHealthGreater(500) && $.spray_blip_onscreen == 1) {
                        $.spray_taxi.remove();
                        $.spray_blip_onscreen = 0;
                        $.taxi_fucked_flag = 0;
                    }
                }
                if ($.taxi_car1.isUpsidedown() && $.taxi_car1.isStopped()) {
                    return taxi_fucked(); // SCM GOTO → taxi_fucked
                }
            }


            score: {
                if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                    if (TIMERB > $.speedbonus) {
                        $.score_for_this_fare = $.taxi_distance_int_old;
                        Text.PrintBig('TAXI4', 5000, 5); //Fare delivered
                    } else {
                        $.score_for_this_fare = $.taxi_distance_int_old * 2;
                        Text.PrintBig('TAXI5', 5000, 5); //Speed Bonus!!
                    }
                } else {
                    if (TIMERB > $.speedbonus) {
                        $.score_for_this_fare = $.taxi_distance_int_old / 2;
                        Text.PrintBig('TAXI4', 5000, 5); //Fare delivered
                    } else {
                        $.score_for_this_fare = $.taxi_distance_int_old;
                        Text.PrintBig('TAXI5', 5000, 5); //Speed Bonus!!
                    }
                }
            }

            //score_for_this_fare = taxi_distance_int_old

            $.player.addScore($.score_for_this_fare);
            Text.PrintWithNumberBig('TSCORE2', $.score_for_this_fare, 6000, 6); //Your score is...
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
            $.taxi_score = $.taxi_score + $.score_for_this_fare;

            $.taxi_passed++;
            Stat.RegisterPassengerDroppedOffTaxi();
            taxi_passed_this_shot.value++;

            //CREATE NEW TAXI AFTER COMPLETING 100 TAXI MISSIONS

            if ($.new_taxi_created_before == 0 && $.taxi_passed == 100) {
                Pager.AddMessage('NEW_TAX', 140, 2, 0);
                $.swank_taxi.switch(101);
                Stat.PlayerMadeProgress(1);
                $.new_taxi_created_before = 1;
            }

            taxi_countdown.value = taxi_countdown.value + 10000;

            await mission_taxi1_failed(false); // SCM GOSUB mission_taxi1_failed

            if (taxi_passed_this_shot.value == $.in_a_row_number) {
                Text.PrintWith2NumbersBig('IN_ROW', taxi_passed_this_shot.value, $.in_a_row_cash, 5000, 6); //Bonus!
                $.player.addScore($.in_a_row_cash);
                $.taxi_score = $.taxi_score + $.in_a_row_cash;
                $.in_a_row_number = $.in_a_row_number + 5;
                $.in_a_row_cash = $.in_a_row_cash + 2000;
            }

            /*
            IF taxi_passed_this_shot = 10
            PRINT_WITH_2_NUMBERS_BIG  ( IN_ROW ) taxi_passed_this_shot 2000 6000 6 //Bonus!
            taxi_score = taxi_score + 2000
            ADD_SCORE player 1000
            ENDIF

            IF taxi_passed_this_shot = 15
            PRINT_WITH_2_NUMBERS_BIG  ( IN_ROW ) taxi_passed_this_shot 4000 6000 6 //Bonus!
            taxi_score = taxi_score + 4000
            ADD_SCORE player 2000
            ENDIF

            IF taxi_passed_this_shot = 20
            PRINT_WITH_2_NUMBERS_BIG  ( IN_ROW ) taxi_passed_this_shot 8000 6000 6 //Bonus!
            taxi_score = taxi_score + 8000
            ADD_SCORE player 4000
            ENDIF

            IF taxi_passed_this_shot = 25
            PRINT_WITH_2_NUMBERS_BIG  ( IN_ROW ) taxi_passed_this_shot 16000 6000 6 //Bonus!
            taxi_score = taxi_score + 16000
            ADD_SCORE player 8000
            ENDIF

            IF taxi_passed_this_shot = 30
            PRINT_WITH_2_NUMBERS_BIG  ( IN_ROW ) taxi_passed_this_shot 32000 6000 6 //Bonus!
            taxi_score = taxi_score + 32000
            ADD_SCORE player 16000
            ENDIF
            */

            await mission_taxi1_passed(); // SCM GOTO → mission_taxi1_passed
            continue Start_taxi_mission; // SCM GOTO → Start_taxi_mission
        }
    } //xxx: end of Start_taxi_mission;
}

//Taxi_fail_conditions
async function taxi_out_of_time() {
    Text.PrintNow('TAXI2', 5000, 1); //Out of time
    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
}

async function taxi_fucked(cancel_mission: boolean = true) {
    await asyncWait(0);

    Text.PrintNow('TAXI3', 5000, 1); //Taxi is trashed

    if (!Char.IsDead($.taxi_ped1)) {
        //SET_CHAR_PERSONALITY taxi_ped1 PEDSTAT_TOURIST
        $.taxi_ped1.setObjFleeOnFootTillSafe();
        //SET_CHAR_THREAT_SEARCH taxi_ped1 THREAT_PLAYER1
    }
    $.taxi_fucked_flag = 1;

    return mission_taxi1_failed(cancel_mission); // SCM GOTO → mission_taxi1_failed
}

async function taxi_fail_button_pressed() {
    $.controlmode = Pad.GetControllerMode();
    if (!($.controlmode == 3)) {
        while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
            await asyncWait(0);
            if (!$.player.isPlaying()) {
                return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
            }
        }
    } else {
        while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
            await asyncWait(0);
            if (!$.player.isPlaying()) {
                return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed
            }
        }
    }

    return mission_taxi1_failed(); // SCM GOTO → mission_taxi1_failed

    /*
    mission_taxi1_failed:
    
    GOSUB taxi_ped_leave
    
    RETURN
    */
}

// mission taxi1 passed
async function mission_taxi1_passed() {
    $.blip1_ct1.remove();
    $.blip2_ct1.remove();
    $.taxi_ped1.markAsNoLongerNeeded();

    if (!Car.IsDead($.taxi_car1)) {
        $.taxi_car1.setTaxiLights(true /* On */);
    }

    //WAIT 1000

    await asyncWait(0);
    Text.PrintSoon('TAXI1', 1500, 1); //Pick up a fare
}

// Mission taxi1 failed
async function mission_taxi1_failed(cancel_mission: boolean = true) {
    ped_check: {
        if (!Char.IsDead($.taxi_ped1)) {
            if (!Car.IsDead($.taxi_car1)) {
                if ($.taxi_ped1.isInCar($.taxi_car1)) {
                    $.taxi_ped1.setObjLeaveCar($.taxi_car1);
                    if ($.player.isPlaying()) {
                        $.player.setControl(false /* OFF */);
                    }
                    while ($.taxi_ped1.isInCar($.taxi_car1)) {
                        await asyncWait(0);
                        if (Char.IsDead($.taxi_ped1) || Car.IsDead($.taxi_car1)) {
                            break ped_check; // SCM GOTO → taxi_ped_leave2
                        }
                        if (!$.player.isPlaying()) {
                            break ped_check; // SCM GOTO → taxi_ped_leave2
                        }
                        if (!$.player.isInCar($.taxi_car1)) {
                            break ped_check; // SCM GOTO → taxi_ped_leave2
                        }
                        $.controlmode = Pad.GetControllerMode();
                        if (!($.controlmode == 3)) {
                            if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && ONMISSION) {
                                break ped_check; // SCM GOTO → taxi_ped_leave2
                            }
                        } else {
                            if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && ONMISSION) {
                                break ped_check; // SCM GOTO → taxi_ped_leave2
                            }
                        }
                    }
                }
            }
        }

        if ($.player.isPlaying()) {
            $.player.setControl(true /* ON */);
        }

        if ($.taxi_fucked_flag == 1) {
            if (cancel_mission) {
                throw new Error('unresolved GOTO mission_taxi1_failed');
            }
            return;
        }
    }

    taxi_ped_leave2: {
        await asyncWait(0);

        if (!Char.IsDead($.taxi_ped1)) {
            if (!Car.IsDead($.taxi_car1)) {
                if (!$.taxi_ped1.isInCar($.taxi_car1)) {
                    $.taxi_ped1.wanderDir(0);
                    $.taxi_ped1.markAsNoLongerNeeded();
                }
            }
        }

        if ($.player.isPlaying()) {
            $.player.setControl(true /* ON */);
        }
    }

    if (cancel_mission) {
        throw new Error('unresolved GOTO mission_taxi1_failed');
    }
    return;
}

// mission cleanup
async function cleanup() {
    taxi_countdown?.clear(); // xxx: Hud.ClearTimer($.taxi_countdown);
    taxi_passed_this_shot.clear(); // xxx: Hud.ClearCounter($.taxi_passed_this_shot); //TEST STUFF!!!!!!!!
    if (!Car.IsDead($.taxi_car1)) {
        $.taxi_car1.setTaxiLights(false /* Off */);
    }
    //SWITCH_TAXI_TIMER OFF

    $.blip1_ct1.remove();
    $.blip2_ct1.remove();
    $.spray_taxi.remove();
    $.taxi_ped1.markAsNoLongerNeeded();
    Text.PrintBig('TAXI6', 5000, 5); //Taxi mission over
    Text.PrintWithNumberBig('TSCORE', $.taxi_score, 6000, 6); //Your score is...
    Stat.RegisterMoneyMadeTaxi($.taxi_score);
    // SET_DEATHARREST_STATE(true /* on */);
    ONMISSION = false;
    $.flag_taxi1_mission_launched = 0;
    if ($.player.isPlaying()) {
        $.player.setControl(true /* ON */);
    }
    Text.ClearHelp();
    Mission.Finish();
}

export default () => body().finally(cleanup);
