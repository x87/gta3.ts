// Generated from main.sc
import { $, GOSUB_FILE, run_on_newgame, START_NEW_SCRIPT, verbose, run_gated, wait_for } from './utils';

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// ****************************************Main Script**************************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************

async function main() {
    await run_on_newgame(async () => {
        // SCRIPT_NAME Main

        verbose('[*] Starting a new game.');

        $.one_sixteenth = 0.0625;
        $.one_thirtysecond = $.one_sixteenth / 2.0;
        $.one_sixtyfourth = $.one_thirtysecond / 2.0;
        $.mission_trigger_wait_time = 250;

        // ***************************************Frankie 3 Warp Stuff******************************
        // ******************************************DO NOT REMOVE!*********************************

        $.flag_taken_money_off_fm3 = 0;

        // ********************************************Help Message*********************************
        // ********************************************DO NOT REMOVE********************************

        $.flag_player_had_gun_message = 0;

        // *********************************8Ball/Luigi Girls Warp Stuff****************************
        // ***************************************DO NOT REMOVE*************************************

        $.flag_reached_hideout = 0;
        $.flag_had_luigi_help_message = 0;

        // *************************************LOCATE BLOB VARIABLE STUFF**************************
        // ********************************************DO NOT REMOVE********************************

        $.blob_flag = 0;

        // zero = false no blob displayed
        // one = true blob is displayed
        // before the loop set this flag to the way you want it displayed or nothing will happen

        // *********************************TOTAL NUMBER OF MISSIONS********************************
        // *****************************************************************************************

        Stat.SetTotalNumberOfMissions(73);
        Stat.SetProgressTotal(154);

        // ********************************Player name for Cut-scene stuff**************************

        // VAR_INT script_controlled_player

        // ********************************CREATE INDUSTRIAL OBJECTS********************************

        // VAR_INT explosive_drum1 explosive_drum2

        $.playersdoor = ScriptObject.CreateNoOffset(1380 /* playersdoor */, 890.883, -307.74, 8.75);
        $.playersdoor.dontRemove();

        $.target1 = ScriptObject.CreateNoOffset(1385 /* faketarget */, 1078.7, -384.8, 15.4);
        $.target1.dontRemove();

        $.target2 = ScriptObject.CreateNoOffset(1385 /* faketarget */, 1080.5, -384.8, 15.4);
        $.target2.dontRemove();

        $.target3 = ScriptObject.CreateNoOffset(1385 /* faketarget */, 1082.3, -384.8, 15.4);
        $.target3.dontRemove();

        $.misty_door1 = ScriptObject.CreateNoOffset(382 /* Mistydoor */, 945.68, -272.31, 4.854);
        $.misty_door1.dontRemove();
        $.misty_door2 = ScriptObject.CreateNoOffset(382 /* Mistydoor */, 942.746, -273.712, 4.854);
        $.misty_door2.dontRemove();
        $.misty_door2.setHeading(180.0);

        $.laundrete_door1 = ScriptObject.CreateNoOffset(1326 /* laundrtdoor1 */, 845.773, -662.8, 15.07);
        $.laundrete_door1.dontRemove();
        $.laundrete_door2 = ScriptObject.CreateNoOffset(1326 /* laundrtdoor1 */, 845.773, -664.824, 15.07);
        $.laundrete_door2.dontRemove();
        $.laundrete_door2.setHeading(180.0);

        $.joeys_garage_door2 = ScriptObject.CreateNoOffset(1375 /* joey_door1 */, 1192.23, -867.252, 14.124); //The moving one
        $.joeys_garage_door2.dontRemove();
        $.joeys_garage_door2.setHeading(45.0);

        $.joeys_garage_door3 = ScriptObject.CreateNoOffset(1374 /* joey_door2 */, 1190.12, -869.339, 14.19);
        $.joeys_garage_door3.dontRemove();
        $.joeys_garage_door3.setHeading(45.0);

        $.dogfood_factory_gate = ScriptObject.CreateNoOffset(1278 /* electricgate */, 1250.4, -812.0, 13.97);
        $.dogfood_factory_gate.dontRemove();
        $.dogfood_factory_gate.setHeading(225.0);

        $.doggy_door = ScriptObject.CreateNoOffset(407 /* dogfoodoor01 */, 1205.298, -802.908, 15.0);
        $.doggy_door.dontRemove();
        $.doggy_door.setHeading(45.0);

        $.fish_factory_gate = ScriptObject.CreateNoOffset(1278 /* electricgate */, 1016.0, -1107.955, 12.294);
        $.fish_factory_gate.dontRemove();
        $.fish_factory_gate.setHeading(90.0);

        $.Bank_job_door = ScriptObject.CreateNoOffset(391 /* bankjobdoor */, 1087.523, -233.801, 11.012);
        $.Bank_job_door.dontRemove();

        $.bankdoor1 = ScriptObject.CreateNoOffset(1386 /* chnabankdoor */, 1035.6, -700.793, 15.334); //chnabankdoor 1035.479 -700.743 15.334
        $.bankdoor1.dontRemove();

        $.bankdoor2 = ScriptObject.CreateNoOffset(1386 /* chnabankdoor */, 1035.6, -699.408, 15.334); //chnabankdoor
        $.bankdoor2.dontRemove();
        $.bankdoor2.setHeading(180.0);

        $.backdoor = ScriptObject.CreateNoOffset(1376 /* backdoor */, 891.056, -416.4373, 14.955);
        $.backdoor.dontRemove();

        $.fuzz_door1 = ScriptObject.CreateNoOffset(1330 /* fuzballdoor */, 1001.673, -887.855, 15.775);
        $.fuzz_door1.setHeading(180.0);
        $.fuzz_door1.dontRemove();

        $.fuzz_door2 = ScriptObject.CreateNoOffset(1330 /* fuzballdoor */, 998.33, -887.94, 15.775);
        $.fuzz_door2.setHeading(0.0);
        $.fuzz_door2.dontRemove();

        $.subway_gate_industrial = ScriptObject.CreateNoOffset(1280 /* subwaygate */, 988.963, -471.778, 5.2);
        $.subway_gate_industrial.dontRemove();
        $.subway_gate_industrial.setHeading(90.0);

        $.tunnel_gate_industrial = ScriptObject.CreateNoOffset(1281 /* tunnelentrance */, 730.331, 172.467, -21.075);
        $.tunnel_gate_industrial.dontRemove();

        // ********************************CREATE COMMERCIAL OBJECTS********************************

        $.helix_barrier = ScriptObject.CreateNoOffset(1299 /* helix_barrier */, -73.137, -630.333, 25.932);
        $.helix_barrier.dontRemove();

        $.plysav_lftdr_lft = ScriptObject.CreateNoOffset(1252 /* plysav_lftdr_lft */, 103.85, -482.8, 16.25);
        $.plysav_lftdr_lft.dontRemove();

        $.plysav_lftdr_rght = ScriptObject.CreateNoOffset(1253 /* plysav_lftdr_rght */, 102.192, -482.8, 16.25);
        $.plysav_lftdr_rght.dontRemove();
        $.plysav_lftdr_rght.setHeading(180.0);

        $.police_door_one = ScriptObject.CreateNoOffset(1278 /* electricgate */, 366.158, -1128.522, 21.941);
        $.police_door_one.dontRemove();
        $.police_door_one.setHeading(180.0);

        $.police_door_two = ScriptObject.CreateNoOffset(1278 /* electricgate */, 326.3, -1128.522, 21.941);
        $.police_door_two.dontRemove();
        $.police_door_two.setHeading(180.0);

        $.colombian_gate = ScriptObject.CreateNoOffset(1278 /* electricgate */, 91.589, -318.592, 15.296);
        $.colombian_gate.dontRemove();
        $.colombian_gate.setHeading(270.0);

        $.phils_compnd_gate = ScriptObject.CreateNoOffset(1278 /* electricgate */, 147.249, 207.323, 10.599);
        $.phils_compnd_gate.dontRemove();
        $.phils_compnd_gate.setHeading(270.0);

        $.inside_fence = ScriptObject.CreateNoOffset(1409 /* fixed_inside */, 362.827, -341.883, 17.186);
        $.inside_fence.dontRemove();

        $.outside_fence = ScriptObject.CreateNoOffset(1412 /* fixed_outside */, 360.852, -391.405, 22.622);
        $.outside_fence.dontRemove();

        // ********************************CREATE SUBURBAN OBJECTS*********************************

        $.newtowerdoor1 = ScriptObject.CreateNoOffset(1286 /* newtowerdoor1 */, -664.313, 2.883, 19.51);
        $.newtowerdoor1.dontRemove();
        $.newtowerdoor1.setHeading(180.0);

        $.Columbian_gate2 = ScriptObject.CreateNoOffset(1284 /* Columbiangate */, -363.05, 250.455, 61.355);
        $.Columbian_gate2.dontRemove();
        $.Columbian_gate2.setHeading(180.0);

        $.airportdoor1 = ScriptObject.CreateNoOffset(1371 /* airportdoor1 */, -770.414, -599.292, 11.847);
        $.airportdoor1.dontRemove();

        $.airportdoor2 = ScriptObject.CreateNoOffset(1372 /* airportdoor2 */, -770.414, -601.369, 11.846);
        $.airportdoor2.dontRemove();

        // ******************************************Police Levels**********************************

        Game.SetMaxWantedLevel(4);

        // **************************************Industrial Garages*********************************

        // VAR_INT special_garage1

        $.save_cars1 = Garage.Create(891.3, -311.1, 7.7, 898.4, -315.5, 12.7, 16 /* GARAGE_HIDEOUT_INDUSTRIAL */); //Saves current car to memory

        $.collect_all_cars1 = Garage.Create(1496.8, -686.2, 11.0, 1523.3, -666.8, 17.0, 8 /* GARAGE_COLLECTCARS_1 */); //Inport/Export garage industrial
        $.collect_all_cars1.noSpecialCameraForThisGarage();

        $.bombshop1 = Garage.Create(1284.6, -100.5, 13.6, 1278.0, -111.0, 18.6, 3 /* GARAGE_BOMBSHOP2 */); //bomb shop - once armed waits for ped to enter car before detonation

        $.sprayshop1 = Garage.Create(921.0, -367.5, 9.8, 928.7, -355.1, 14.8, 5 /* GARAGE_RESPRAY */); //spray/repair shop

        $.frankie_garage = Garage.Create(1428.8, -187.0, 49.7, 1442.5, -179.9, 54.7, 21 /* GARAGE_MISSION_KEEPCAR_REMAINCLOSED */); //Toni 3 and Frankie 1
        $.frankie_garage.setRotatingDoor();

        $.Garage_bank = Garage.Create(1440.7, -805.6, 10.9, 1449.8, -782.1, 15.9, 1 /* GARAGE_MISSION */); //Joey 3

        $.garage_lm2 = Garage.Create(1074.0, -578.0, 13.0, 1085.0, -568.0, 17.0, 1 /* GARAGE_MISSION */); //Luigi 2

        // **************************************Commercial Garages*********************************

        $.garage_min_x_yd3 = 257.0;
        $.garage_min_y_yd3 = -803.0;
        $.garage_max_x_yd3 = 263.0;
        $.garage_max_y_yd3 = -795.5;

        $.save_cars2 = Garage.Create(115.1, -475.3, 15.0, 106.9, -487.1, 19.0, 17 /* GARAGE_HIDEOUT_COMMERCIAL */); //Saves current cars to memory

        $.bombshop2 = Garage.Create(386.0, -573.0, 25.2, 376.6, -580.1, 30.2, 2 /* GARAGE_BOMBSHOP1 */); // bomb shop - once armed waits 5 seconds then detonates

        $.sprayshop2 = Garage.Create(386.0, -490.0, 25.2, 376.6, -497.0, 30.2, 5 /* GARAGE_RESPRAY */); // Spray shop

        $.rays_prize_garage = Garage.Create(245.4, -992.2, 20.0, 234.4, -1000.5, 24.0, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */); //RAY 6 - MARKED MAN (BY SPRAYSHOP)
        $.rays_prize_garage.setRotatingDoor();

        $.witsec_garage = Garage.Create(375.0, -441.5, 20.0837, 386.0, -434.0, 25.0837, 11 /* GARAGE_FORCARTOCOMEOUTOF */); //RAY 1 - SILENCE THE SNEAK (BEHIND CARPARK)

        $.garage_km2 = Garage.Create(377.3, -511.4, 25.1132, 383.7, -502.0, 30.0, 1 /* GARAGE_MISSION */); //Kenji 2

        $.garage1_love1 = Garage.Create(63.8, -307.9, 15.2, 70.0, -316.7, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */); //Love 1
        $.garage2_love1 = Garage.Create(53.0, -308.0, 15.2, 60.0, -316.7, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */); //Love 1
        $.garage3_love1 = Garage.Create(24.9, -344.0, 15.2, 30.6, -337.1, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */); //Love 1
        $.garage4_love1 = Garage.Create(24.5, -355.0, 15.2, 30.6, -346.0, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */); //Love 1
        $.garage5_love1 = Garage.Create(52.5, -388.0, 15.2, 42.0, -374.1, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */); //Love 1

        $.garage_yd3 = Garage.Create($.garage_min_x_yd3, $.garage_min_y_yd3, 26.8, $.garage_max_x_yd3, $.garage_max_y_yd3, 31.8, 1 /* GARAGE_MISSION */); //Yardie 3

        // ****************************************Suburban Garages*********************************

        // VAR_INT save_cars3 bombshop3 garage_hm3 garage_hm4 escort_garage collect_all_cars2 sprayshop3

        $.save_cars3 = Garage.Create(-662.5, -47.4, 17.0, -670.7, -30.0, 22.0, 18 /* GARAGE_HIDEOUT_SUBURBAN */); //Saves current car to memory
        $.save_cars3.setRotatingDoor();
        $.save_cars3.noSpecialCameraForThisGarage();

        $.sprayshop3 = Garage.Create(-1139.0, 37.8, 55.0, -1148.5, 32.1, 65.0, 5 /* GARAGE_RESPRAY */); // Spray shop

        $.bombshop3 = Garage.Create(-1078.9, 58.0, 56.0, -1086.0, 49.0, 65.0, 4 /* GARAGE_BOMBSHOP3 */); // bomb shop - detonator

        $.collect_all_cars2 = Garage.Create(-1117.5, 150.9, 55.0, -1097.7, 121.2, 65.0, 9 /* GARAGE_COLLECTCARS_2 */); //Inport/Export garage industrial
        $.collect_all_cars2.noSpecialCameraForThisGarage();

        $.garage_hm3 = Garage.Create(1346.9, -315.5, 49.0, 1352.5, -310.7, 53.0, 14 /* GARAGE_MISSION_KEEPCAR */); //Hoods 3

        $.garage_hm4 = Garage.Create(-824.7, -165.5, 32.8, -843.5, -171.7, 37.0, 20 /* GARAGE_KEEPS_OPENING_FOR_SPECIFIC_CAR */); //Hoods 4

        $.escort_garage = Garage.Create(-1049.17, -77.47, 37.8, -1037.21, -69.17, 42.8, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */); //LOVE 5 - ESCORT SERVICE (WAREHOUSE)
        $.escort_garage.setRotatingDoor();

        // ************************************Industrial Crane Positions***************************

        Crane.ActivateMilitary(1570.3, -675.4, 1565.7, -686.5, 1576.8, -706.6, 1639.9, -696.7, 26.0, 0.0); //Docks crane for the Police cars onto boat height for area 10.8

        Crane.ActivateCrusher(1119.8, 51.8, 1135.8, 56.1, 1149.8, 46.3, 1143.0, 59.9, 5.0, 180.0); //Crusher crane 1135.8 56.1 -1.0 1149.8 46.3 7.0

        // ****************************************Restart Zones************************************

        // **************************************GLOBAL ZONES*****************************************

        Zone.SetPedInfo('CITYZON', 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20);
        Zone.SetPedInfo('CITYZON', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('CITYZON', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 20, 240, 240, 240, 240, 0, 0);
        Zone.SetCarInfo('CITYZON', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10, 240, 240, 240, 240, 0, 0);
        Zone.SetGroup('CITYZON', 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
        Zone.SetGroup('CITYZON', 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);

        Zone.SetPedInfo('IND_ZON', 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20);
        Zone.SetPedInfo('IND_ZON', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('IND_ZON', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 450, 0, 0);
        Zone.SetCarInfo('IND_ZON', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 450, 0, 0);
        Zone.SetGroup('IND_ZON', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('IND_ZON', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('COM_ZON', 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20);
        Zone.SetPedInfo('COM_ZON', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('COM_ZON', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 20, 0, 300, 450, 150, 0, 0);
        Zone.SetCarInfo('COM_ZON', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10, 0, 300, 450, 150, 0, 0);
        Zone.SetGroup('COM_ZON', 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
        Zone.SetGroup('COM_ZON', 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);

        Zone.SetPedInfo('SUB_ZON', 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20);
        Zone.SetPedInfo('SUB_ZON', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('SUB_ZON', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 20, 0, 500, 450, 0, 0, 0);
        Zone.SetCarInfo('SUB_ZON', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10, 0, 500, 450, 0, 0, 0);
        Zone.SetGroup('SUB_ZON', 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
        Zone.SetGroup('SUB_ZON', 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);

        // Gang1 in industrial = MAFIA
        // Gang2 in industrial = TRIADS
        // Gang3 in industrial = DIABLOS
        // Gang4 in commercial = YAKUZA
        // Gang5 in commercial = YARDDIES
        // Gang6 in commercial = COLUMBIANS
        // Gang7 in commercial = HOODS
        // PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police
        // CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police PoorFamily RichFamily Executive Worker Special Big

        //GANG ZONES

        Zone.SetPedInfo('LITTLEI', 1 /* DAY */, 17, 300, 0, 0, 0, 0, 0, 0, 20); //St Marks
        Zone.SetPedInfo('LITTLEI', 0 /* NIGHT */, 11, 400, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('LITTLEI', 1 /* DAY */, 10, 100, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 350, 20, 0);
        Zone.SetCarInfo('LITTLEI', 0 /* NIGHT */, 8, 150, 0, 0, 0, 0, 0, 0, 10, 550, 0, 0, 150, 0, 0);
        Zone.SetGroup('LITTLEI', 1 /* DAY */, 3 /* LITTLEITALY_PEDGRP */);
        Zone.SetGroup('LITTLEI', 0 /* NIGHT */, 4 /* LITTLEITALY_NIGHT_PEDGRP */);

        Zone.SetPedInfo('CHINA', 1 /* DAY */, 20, 0, 300, 0, 0, 0, 0, 0, 20); //China town
        Zone.SetPedInfo('CHINA', 0 /* NIGHT */, 12, 0, 400, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('CHINA', 1 /* DAY */, 10, 0, 100, 0, 0, 0, 0, 0, 10, 400, 0, 0, 350, 0, 0);
        Zone.SetCarInfo('CHINA', 0 /* NIGHT */, 8, 0, 150, 0, 0, 0, 0, 0, 20, 550, 0, 0, 200, 0, 0);
        Zone.SetGroup('CHINA', 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
        Zone.SetGroup('CHINA', 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);

        Zone.SetPedInfo('TOWERS', 1 /* DAY */, 15, 0, 0, 300, 0, 0, 0, 0, 0); //Hepburn heoghts
        Zone.SetPedInfo('TOWERS', 0 /* NIGHT */, 10, 0, 0, 400, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('TOWERS', 1 /* DAY */, 8, 0, 0, 100, 0, 0, 0, 0, 20, 400, 0, 0, 350, 0, 0);
        Zone.SetCarInfo('TOWERS', 0 /* NIGHT */, 6, 0, 0, 150, 0, 0, 0, 0, 10, 550, 0, 0, 200, 0, 0);
        Zone.SetGroup('TOWERS', 1 /* DAY */, 9 /* PROJECTS_PEDGRP */);
        Zone.SetGroup('TOWERS', 0 /* NIGHT */, 10 /* PROJECTS_NIGHT_PEDGRP */);

        Zone.SetPedInfo('REDLIGH', 1 /* DAY */, 6, 0, 0, 0, 0, 0, 0, 0, 20); //Redlight district
        Zone.SetPedInfo('REDLIGH', 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('REDLIGH', 1 /* DAY */, 5, 0, 0, 0, 0, 0, 0, 0, 10, 550, 0, 0, 350, 0, 0);
        Zone.SetCarInfo('REDLIGH', 0 /* NIGHT */, 7, 0, 0, 0, 0, 0, 0, 0, 20, 600, 0, 0, 200, 0, 0);
        Zone.SetGroup('REDLIGH', 1 /* DAY */, 1 /* REDLIGHT_PEDGRP */);
        Zone.SetGroup('REDLIGH', 0 /* NIGHT */, 2 /* REDLIGHT_NIGHT_PEDGRP */);

        //NAVIGATION ZONES

        Zone.SetPedInfo('PORT_I', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0); //Trenton
        Zone.SetPedInfo('PORT_I', 0 /* NIGHT */, 7, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('PORT_I', 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 400, 20, 0);
        Zone.SetCarInfo('PORT_I', 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
        Zone.SetGroup('PORT_I', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('PORT_I', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('PORT_E', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0); //Portland Harbour
        Zone.SetPedInfo('PORT_E', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('PORT_E', 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 400, 20, 0);
        Zone.SetCarInfo('PORT_E', 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
        Zone.SetGroup('PORT_E', 1 /* DAY */, 7 /* DOCKS_PEDGRP */);
        Zone.SetGroup('PORT_E', 0 /* NIGHT */, 8 /* DOCKS_NIGHT_PEDGRP */);

        Zone.SetPedInfo('PORT_S', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0); //Atlantic Quays
        Zone.SetPedInfo('PORT_S', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('PORT_S', 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 500, 20, 0);
        Zone.SetCarInfo('PORT_S', 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
        Zone.SetGroup('PORT_S', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('PORT_S', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('PORT_W', 1 /* DAY */, 10, 0, 10, 0, 0, 0, 0, 0, 0); //Callahan Point
        Zone.SetPedInfo('PORT_W', 0 /* NIGHT */, 5, 0, 10, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('PORT_W', 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 400, 0, 0);
        Zone.SetCarInfo('PORT_W', 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
        Zone.SetGroup('PORT_W', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('PORT_W', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('HARWOOD', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0); //Harwood
        Zone.SetPedInfo('HARWOOD', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('HARWOOD', 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 300, 0, 0);
        Zone.SetCarInfo('HARWOOD', 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 600, 0, 0, 200, 0, 0);
        Zone.SetGroup('HARWOOD', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('HARWOOD', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('EASTBAY', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0); //Portland Beach
        Zone.SetPedInfo('EASTBAY', 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('EASTBAY', 1 /* DAY */, 5, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 480, 0, 0);
        Zone.SetCarInfo('EASTBAY', 0 /* NIGHT */, 4, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 490, 0, 0);
        Zone.SetGroup('EASTBAY', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('EASTBAY', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('S_VIEW', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 30); //Portland View
        Zone.SetPedInfo('S_VIEW', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 20);
        Zone.SetCarInfo('S_VIEW', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 30, 400, 0, 0, 300, 100, 0);
        Zone.SetCarInfo('S_VIEW', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 200, 100, 0);
        Zone.SetGroup('S_VIEW', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('S_VIEW', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        //OTHER ZONES

        Zone.SetPedInfo('COPS_1', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 60); //Police station in Portland View
        Zone.SetPedInfo('COPS_1', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 60);
        Zone.SetCarInfo('COPS_1', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
        Zone.SetCarInfo('COPS_1', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
        Zone.SetGroup('COPS_1', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('COPS_1', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('HOSPI_1', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 60); //Hospital in Portland View
        Zone.SetPedInfo('HOSPI_1', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 60);
        Zone.SetCarInfo('HOSPI_1', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
        Zone.SetCarInfo('HOSPI_1', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
        Zone.SetGroup('HOSPI_1', 1 /* DAY */, 17 /* HOSPITAL_PEDGRP */);
        Zone.SetGroup('HOSPI_1', 0 /* NIGHT */, 18 /* HOSPITAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('ROADBR1', 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 0); //com/ind bridge east side
        Zone.SetPedInfo('ROADBR1', 0 /* NIGHT */, 20, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('ROADBR1', 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 400, 0, 100);
        Zone.SetCarInfo('ROADBR1', 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10, 400, 0, 0, 400, 0, 100);
        Zone.SetGroup('ROADBR1', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('ROADBR1', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('FISHFAC', 1 /* DAY */, 2, 0, 1000, 0, 0, 0, 0, 0, 0); //Fish factory
        Zone.SetPedInfo('FISHFAC', 0 /* NIGHT */, 2, 0, 1000, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('FISHFAC', 1 /* DAY */, 6, 0, 0, 0, 0, 0, 0, 0, 20, 200, 0, 0, 600, 0, 0);
        Zone.SetCarInfo('FISHFAC', 0 /* NIGHT */, 4, 0, 0, 0, 0, 0, 0, 0, 10, 200, 0, 0, 600, 0, 0);
        Zone.SetGroup('FISHFAC', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('FISHFAC', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('FILLIN1', 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0); //Fills a gap in the zones
        Zone.SetPedInfo('FILLIN1', 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('FILLIN1', 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 400, 0, 0);
        Zone.SetCarInfo('FILLIN1', 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 400, 0, 0, 400, 0, 0);
        Zone.SetGroup('FILLIN1', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('FILLIN1', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('MAIN_D1', 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20); //SOUTH CHINATOWN
        Zone.SetPedInfo('MAIN_D1', 0 /* NIGHT */, 10, 0, 500, 0, 0, 0, 0, 0, 10); //P R X  W   S	B
        Zone.SetCarInfo('MAIN_D1', 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
        Zone.SetCarInfo('MAIN_D1', 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
        Zone.SetGroup('MAIN_D1', 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
        Zone.SetGroup('MAIN_D1', 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);

        Zone.SetPedInfo('MAIN_D2', 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20); //CHINATOWN
        Zone.SetPedInfo('MAIN_D2', 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('MAIN_D2', 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
        Zone.SetCarInfo('MAIN_D2', 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
        Zone.SetGroup('MAIN_D2', 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
        Zone.SetGroup('MAIN_D2', 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);

        Zone.SetPedInfo('MAIN_D3', 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20); //CHINATOWN
        Zone.SetPedInfo('MAIN_D3', 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('MAIN_D3', 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
        Zone.SetCarInfo('MAIN_D3', 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
        Zone.SetGroup('MAIN_D3', 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
        Zone.SetGroup('MAIN_D3', 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);

        Zone.SetPedInfo('MAIN_D4', 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20); //NORTH CHINATOWN
        Zone.SetPedInfo('MAIN_D4', 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('MAIN_D4', 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
        Zone.SetCarInfo('MAIN_D4', 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
        Zone.SetGroup('MAIN_D4', 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
        Zone.SetGroup('MAIN_D4', 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);

        Zone.SetPedInfo('MAIN_D5', 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20); //REDLIGHT
        Zone.SetPedInfo('MAIN_D5', 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('MAIN_D5', 1 /* DAY */, 24, 0, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 300, 20, 100);
        Zone.SetCarInfo('MAIN_D5', 0 /* NIGHT */, 18, 0, 0, 0, 0, 0, 0, 0, 10, 300, 0, 0, 400, 20, 100);
        Zone.SetGroup('MAIN_D5', 1 /* DAY */, 1 /* REDLIGHT_PEDGRP */);
        Zone.SetGroup('MAIN_D5', 0 /* NIGHT */, 2 /* REDLIGHT_NIGHT_PEDGRP */);

        Zone.SetPedInfo('MAIN_D6', 1 /* DAY */, 15, 0, 0, 300, 0, 0, 0, 0, 20); //TOWERS
        Zone.SetPedInfo('MAIN_D6', 0 /* NIGHT */, 10, 0, 0, 400, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('MAIN_D6', 1 /* DAY */, 24, 0, 0, 100, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
        Zone.SetCarInfo('MAIN_D6', 0 /* NIGHT */, 18, 0, 0, 150, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
        Zone.SetGroup('MAIN_D6', 1 /* DAY */, 9 /* PROJECTS_PEDGRP */);
        Zone.SetGroup('MAIN_D6', 0 /* NIGHT */, 10 /* PROJECTS_NIGHT_PEDGRP */);

        // ****************************Industrial switched off Road and Ped Nodes*******************

        Path.SwitchRoadsOff(619.6, -911.5, 45.0, 834.3, -954.5, 32.0); //Industrial to commercial Bridge
        Path.MarkRoadsBetweenLevels(619.6, -911.5, 45.0, 834.3, -954.5, 32.0);

        Path.SwitchRoadsOff(1381.0, -293.7, 48.0, 1435.8, -140.1, 58.0); //Frankies Driveway
        Path.SwitchRoadsOff(1358.9, -901.9, 10.0, 1609.6, -615.1, 16.0); //Docks

        Path.SwitchRoadsOff(659.6, 200.0, -20.0, 945.8, 147.5, 5.0); //Tunnel
        Path.MarkRoadsBetweenLevels(659.6, 200.0, -20.0, 945.8, 147.5, 5.0);

        Path.SwitchPedRoadsOff(659.6, 200.0, -25.0, 945.8, 147.5, 5.0); //Tunnel
        Path.MarkRoadsBetweenLevels(659.6, 200.0, -25.0, 945.8, 147.5, 5.0);

        Path.SwitchPedRoadsOff(773.6, 191.8, -25.0, 819.7, 182.8, 5.0); //Tunnel
        Path.MarkRoadsBetweenLevels(773.6, 191.8, -25.0, 819.7, 182.8, 5.0);

        Path.SwitchPedRoadsOff(1609.0, -896.0, 8.0, 1393.7, -967.4, 30.0); //Colubian Boat

        Path.SwitchPedRoadsOff(1048.3, -1103.4, 5.0, 1040.0, -1074.4, 30.0); //Fish Factory

        Path.SwitchPedRoadsOff(900.09, -297.05, 6.0, 842.83, -325.58, 15.0); //Players hideout

        Path.SwitchPedRoadsOff(900.5, -427.1, 14.0, 879.1, -404.2, 17.0); //Luigis alleyway

        Path.SwitchPedRoadsOff(847.9, -640.6, 10.0, 887.9, -685.8, 20.0); //Toni2 alleyway

        Path.SwitchPedRoadsOffAngled(1222.9, -838.4, 13.5, 1256.3, -804.9, 16.0, 58.0); //Bitch'n Dog Food Factory

        Path.SwitchPedRoadsOff(1005.59, -880.96, 12.0, 995.9, -893.34, 20.0); //Fuzz Ball

        Path.SwitchPedRoadsOff(1070.6, -401.6, 10.0, 1067.8, -397.2, 25.0); //AMMUNATION

        // ***************************************Commercial City Zones*****************************

        // Gang1 in industrial = MAFIA
        // Gang2 in industrial = TRIADS
        // Gang3 in industrial = DIABLOS
        // Gang4 in commercial = YAKUZA
        // Gang5 in commercial = YARDDIES
        // Gang6 in commercial = COLUMBIANS
        // Gang7 in commercial = HOODS
        // PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police
        // CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police PoorFamily RichFamily Executive Worker Special Big

        //NAVIGATION ZONES

        Zone.SetPedInfo('STADIUM', 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 0); //Aspatria
        Zone.SetPedInfo('STADIUM', 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('STADIUM', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 150, 0, 250, 0, 200);
        Zone.SetCarInfo('STADIUM', 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 150, 0, 250, 0, 200);
        Zone.SetGroup('STADIUM', 1 /* DAY */, 15 /* STADIUM_PEDGRP */);
        Zone.SetGroup('STADIUM', 0 /* NIGHT */, 16 /* STADIUM_NIGHT_PEDGRP */);

        Zone.SetPedInfo('HOSPI_2', 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 0); //Rockford
        Zone.SetPedInfo('HOSPI_2', 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('HOSPI_2', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 150, 0, 250, 0, 200);
        Zone.SetCarInfo('HOSPI_2', 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 150, 0, 250, 0, 200);
        Zone.SetGroup('HOSPI_2', 1 /* DAY */, 17 /* HOSPITAL_PEDGRP */);
        Zone.SetGroup('HOSPI_2', 0 /* NIGHT */, 18 /* HOSPITAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('UNIVERS', 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20); //Liberty Campus
        Zone.SetPedInfo('UNIVERS', 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('UNIVERS', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 20, 0);
        Zone.SetCarInfo('UNIVERS', 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 300, 0, 20, 0);
        Zone.SetGroup('UNIVERS', 1 /* DAY */, 23 /* UNIVERSITY_PEDGRP */);
        Zone.SetGroup('UNIVERS', 0 /* NIGHT */, 24 /* UNIVERSITY_NIGHT_PEDGRP */);

        Zone.SetPedInfo('CONSTRU', 1 /* DAY */, 30, 0, 0, 0, 0, 0, 300, 0, 20); //Fort staunton
        Zone.SetPedInfo('CONSTRU', 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 400, 0, 10);
        Zone.SetCarInfo('CONSTRU', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 100, 0, 20, 300, 100, 0, 250, 0, 150);
        Zone.SetCarInfo('CONSTRU', 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 150, 0, 10, 300, 100, 0, 250, 0, 150);
        Zone.SetGroup('CONSTRU', 1 /* DAY */, 19 /* CONSTRUCTION_PEDGRP */);
        Zone.SetGroup('CONSTRU', 0 /* NIGHT */, 20 /* CONSTRUCTION_NIGHT_PEDGRP */);

        Zone.SetPedInfo('PARK', 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20); //Belleville Park
        Zone.SetPedInfo('PARK', 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('PARK', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 0, 0);
        Zone.SetCarInfo('PARK', 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 300, 0, 0, 0);
        Zone.SetGroup('PARK', 1 /* DAY */, 25 /* PARK_PEDGRP */);
        Zone.SetGroup('PARK', 0 /* NIGHT */, 26 /* PARK_NIGHT_PEDGRP */);

        Zone.SetPedInfo('COM_EAS', 1 /* DAY */, 30, 0, 0, 0, 0, 300, 0, 0, 20); // Newport
        Zone.SetPedInfo('COM_EAS', 0 /* NIGHT */, 16, 0, 0, 0, 0, 400, 0, 0, 10);
        Zone.SetCarInfo('COM_EAS', 1 /* DAY */, 20, 0, 0, 0, 0, 100, 0, 0, 20, 400, 250, 0, 0, 0, 150);
        Zone.SetCarInfo('COM_EAS', 0 /* NIGHT */, 17, 0, 0, 0, 0, 150, 0, 0, 10, 400, 250, 0, 0, 0, 100);
        Zone.SetGroup('COM_EAS', 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
        Zone.SetGroup('COM_EAS', 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);

        Zone.SetPedInfo('SHOPING', 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20); //Bedford Point
        Zone.SetPedInfo('SHOPING', 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('SHOPING', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 30, 300, 250, 250, 0, 0, 100);
        Zone.SetCarInfo('SHOPING', 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 20, 300, 250, 250, 0, 0, 100);
        Zone.SetGroup('SHOPING', 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
        Zone.SetGroup('SHOPING', 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);

        Zone.SetPedInfo('YAKUSA', 1 /* DAY */, 30, 0, 0, 0, 300, 0, 0, 0, 20); //Torrington
        Zone.SetPedInfo('YAKUSA', 0 /* NIGHT */, 16, 0, 0, 0, 400, 0, 0, 0, 10);
        Zone.SetCarInfo('YAKUSA', 1 /* DAY */, 20, 0, 0, 0, 100, 0, 0, 0, 40, 350, 200, 250, 0, 0, 0);
        Zone.SetCarInfo('YAKUSA', 0 /* NIGHT */, 17, 0, 0, 0, 150, 0, 0, 0, 20, 350, 200, 200, 0, 0, 0);
        Zone.SetGroup('YAKUSA', 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
        Zone.SetGroup('YAKUSA', 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);

        //OTHER ZONES

        Zone.SetPedInfo('ROADBR2', 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20);
        Zone.SetPedInfo('ROADBR2', 0 /* NIGHT */, 20, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('ROADBR2', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 30, 300, 250, 250, 0, 0, 100);
        Zone.SetCarInfo('ROADBR2', 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 20, 300, 250, 250, 0, 0, 100);
        Zone.SetGroup('ROADBR2', 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
        Zone.SetGroup('ROADBR2', 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);

        // ****************************Commercial switched off Road and Ped Nodes*******************

        Path.SwitchPedRoadsOff(106.1, -1278.3, 24.0, 96.3, -1273.5, 27.0); //Hyaku Dojo for Kenji one
        Path.SwitchPedRoadsOff(120.0, 170.0, 10.0, 190.0, 246.0, 25.0); //Phil's place
        Path.SwitchPedRoadsOff(31.0, -317.0, 14.0, 91.0, -394.0, 25.0); // Colombian compound

        Path.SwitchRoadsOff(120.0, 170.0, 10.0, 190.0, 246.0, 25.0); //Phil's place

        Path.SwitchRoadsOff(121.814, -46.429, 14.0, 363.858, 54.312, 20.0); //Ambulance
        Path.SwitchPedRoadsOff(121.814, -46.429, 14.0, 363.858, 54.312, 20.0); //Ambulance

        Path.SwitchRoadsOff(353.5, -459.0, 18.0, 397.5, -431.6, 30.0); // Witness protection house

        Path.SwitchRoadsOff(465.7, -634.3, 10.0, 429.9, -610.1, 25.0); // By Asukas condo

        Path.SwitchRoadsOff(-46.8, -648.0, 39.0, -69.1, -614.0, 50.0); //Commercial to Suburbia Bridge
        Path.MarkRoadsBetweenLevels(-46.8, -648.0, 39.0, -69.1, -614.0, 50.0);

        Path.SwitchPedRoadsOff(56.5, -1544.2, 10.0, 87.9, -1556.0, 30.0); // Loves building

        Path.SwitchPedRoadsOff(413.5, -480.2, 20.0, 420.9, -499.0, 36.0); //ped island
        Path.SwitchPedRoadsOff(419.5, -708.1, 20.0, 412.5, -717.9, 36.0); //ped island
        Path.SwitchPedRoadsOff(-76.9, -985.4, 20.0, -68.8, -992.6, 36.0); //ped island
        Path.SwitchPedRoadsOff(-76.5, -934.4, 20.0, -70.4, -928.4, 36.0); //ped island
        Path.SwitchPedRoadsOff(-55.9, -934.6, 20.0, -46.4, -927.2, 36.0); //ped island

        Path.SwitchPedRoadsOff(-76.4, -999.6, 20.0, -68.8, -628.5, 36.0); //ped island

        Path.SwitchPedRoadsOff(199.3, -935.9, 20.0, 134.8, -927.4, 40.0); //ped island

        Path.SwitchRoadsOff(529.6, 106.5, -30.0, 581.4, 65.7, 0.0); //tunnel from commercial to intersection for sub and ind

        // ****************************************Suburban City Zones******************************

        // Gang1 in industrial = MAFIA
        // Gang2 in industrial = TRIADS
        // Gang3 in industrial = DIABLOS
        // Gang4 in commercial = YAKUZA
        // Gang5 in commercial = YARDDIES
        // Gang6 in commercial = COLUMBIANS
        // Gang7 in commercial = HOODS
        // PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police
        // CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police PoorFamily RichFamily Executive Worker Special Big

        //NAVIGATION ZONES

        Zone.SetPedInfo('AIRPORT', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20); //FRANCIS INTI. AIRPORT
        Zone.SetPedInfo('AIRPORT', 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('AIRPORT', 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 40, 300, 300, 300, 0, 0, 0);
        Zone.SetCarInfo('AIRPORT', 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 0, 0);
        Zone.SetGroup('AIRPORT', 1 /* DAY */, 27 /* AIRPORT_PEDGRP */);
        Zone.SetGroup('AIRPORT', 0 /* NIGHT */, 28 /* AIRPORT_NIGHT_PEDGRP */);

        Zone.SetPedInfo('PROJECT', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 300, 0); //WICHITA GARDENS
        Zone.SetPedInfo('PROJECT', 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 400, 0);
        Zone.SetCarInfo('PROJECT', 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 100, 20, 500, 150, 0, 150, 0, 0);
        Zone.SetCarInfo('PROJECT', 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 150, 10, 500, 100, 0, 150, 0, 0);
        Zone.SetGroup('PROJECT', 1 /* DAY */, 9 /* PROJECTS_PEDGRP */);
        Zone.SetGroup('PROJECT', 0 /* NIGHT */, 10 /* PROJECTS_NIGHT_PEDGRP */);

        Zone.SetPedInfo('SUB_IND', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20); //PIKE CREEK
        Zone.SetPedInfo('SUB_IND', 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('SUB_IND', 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 0, 0);
        Zone.SetCarInfo('SUB_IND', 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 300, 0, 0, 0);
        Zone.SetGroup('SUB_IND', 1 /* DAY */, 7 /* DOCKS_PEDGRP */);
        Zone.SetGroup('SUB_IND', 0 /* NIGHT */, 8 /* DOCKS_NIGHT_PEDGRP */);

        Zone.SetPedInfo('SWANKS', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 70, 0, 30); //CEDAR CROVE
        Zone.SetPedInfo('SWANKS', 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 90, 0, 20);
        Zone.SetCarInfo('SWANKS', 1 /* DAY */, 15, 0, 0, 0, 0, 0, 70, 0, 30, 0, 400, 400, 0, 20, 0);
        Zone.SetCarInfo('SWANKS', 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 90, 0, 20, 0, 400, 400, 0, 20, 0);
        Zone.SetGroup('SWANKS', 1 /* DAY */, 29 /* SWANKSVILLE_PEDGRP */);
        Zone.SetGroup('SWANKS', 0 /* NIGHT */, 30 /* SWANKSVILLE_NIGHT_PEDGRP */);

        Zone.SetPedInfo('BIG_DAM', 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 0); //COCHRANE DAM
        Zone.SetPedInfo('BIG_DAM', 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('BIG_DAM', 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 0, 300, 0, 0);
        Zone.SetCarInfo('BIG_DAM', 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 0, 300, 0, 0);
        Zone.SetGroup('BIG_DAM', 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
        Zone.SetGroup('BIG_DAM', 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);

        Zone.SetPedInfo('SUB_ZO2', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20); //SHORESIDE VALE
        Zone.SetPedInfo('SUB_ZO2', 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('SUB_ZO2', 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20, 0, 500, 450, 0, 0, 0);
        Zone.SetCarInfo('SUB_ZO2', 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10, 0, 500, 450, 0, 0, 0);
        Zone.SetGroup('SUB_ZO2', 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
        Zone.SetGroup('SUB_ZO2', 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);

        Zone.SetPedInfo('SUB_ZO3', 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20); //SHORESIDE VALE
        Zone.SetPedInfo('SUB_ZO3', 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
        Zone.SetCarInfo('SUB_ZO3', 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20, 0, 500, 450, 0, 0, 0);
        Zone.SetCarInfo('SUB_ZO3', 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10, 0, 500, 450, 0, 0, 0);
        Zone.SetGroup('SUB_ZO3', 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
        Zone.SetGroup('SUB_ZO3', 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);

        Zone.SetPedInfo('WEE_DAM', 1 /* DAY */, 8, 0, 0, 0, 0, 0, 100, 0, 0);
        Zone.SetPedInfo('WEE_DAM', 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 100, 0, 0);
        Zone.SetCarInfo('WEE_DAM', 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetCarInfo('WEE_DAM', 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        Zone.SetGroup('WEE_DAM', 1 /* DAY */, 7 /* DOCKS_PEDGRP */);
        Zone.SetGroup('WEE_DAM', 0 /* NIGHT */, 8 /* DOCKS_NIGHT_PEDGRP */);

        // ****************************Suburban switched off Road and Ped Nodes*********************

        Path.SwitchRoadsOff(-1052.6693, -78.043, 50.0, -988.0153, -67.1608, 30.0); // warehouse in Suburbia
        Path.SwitchPedRoadsOff(-1052.6693, -78.043, 50.0, -988.0153, -67.1608, 30.0); // warehouse in Suburbia

        Path.SwitchRoadsOff(-952.5, 361.4, 10.0, -939.3, 374.0, 30.0); // DAM

        Path.SwitchRoadsOff(-241.7, 251.8, 0.0, -256.2, 241.4, 20.0); // park area (north east)

        Path.SwitchRoadsOff(-1367.769, -731.4872, 20.0, -743.1906, -410.1961, 5.0); // Airport
        Path.SwitchRoadsOff(-1591.4, -931.5, 10.0, -1572.9, -914.6, 25.0); // Airport

        Path.SwitchPedRoadsOff(-1310.8053, -568.7556, 5.0, -1224.9248, -483.4936, 20.0); // Airport

        Path.SwitchRoadsOff(496.7, 75.5, -30.0, 484.0, 44.2, 0.0); //tunnel to suburbia
        Path.MarkRoadsBetweenLevels(496.7, 75.5, -30.0, 484.0, 44.2, 0.0);

        Path.SwitchRoadsOff(-287.8, 396.5, 70.0, -269.0, 418.0, 100.0); //tunnel to Miami	(EAST)
        Path.SwitchRoadsOff(-877.1, 545.9, 60.0, -901.3, 575.0, 100.0); //tunnel to Miami	(WEST)

        Path.SwitchRoadsOff(-690.4, 101.2, 10.0, -704.4, 78.9, 30.0); // players savehouse

        Path.SwitchRoadsOff(-1194.1, 98.6, 50.0, -1234.0, 119.2, 80.0); //

        // **************************************CAR GENERATORS**********************************************

        GOSUB_FILE(__dirname + '/Main/Industrial/car_gen.mts');

        //SPECIAL CAR GENERATORS****************************************************************************

        $.joeys_buggy = CarGenerator.Create(930.93, -267.63, -100.0, 340.0, 114 /* CAR_BFINJECT */, -1, -1, false, 100, 0, 0, 10000); //Joeys Buggy
        $.joeys_buggy.switch(0);

        $.swank_taxi = CarGenerator.Create(933.7, -65.6, -100.0, 0.0, 148 /* CAR_BORGNINE */, -1, -1, false, 50, 0, 0, 10000); //Car park behind radio station
        $.swank_taxi.switch(0);

        // *****************************************PICK_UPS**************************************************

        GOSUB_FILE(__dirname + '/Main/Industrial/pickups.mts');

        //AMMU NATION*****************************************************************************************

        //Industrial

        $.SHOP_COLT45 = Pickup.Create(173 /* WEAPON_COLT45 */, 6 /* PICKUP_IN_SHOP_OUT_OF_STOCK */, 1068.5, -400.8, 15.2); //AMMUNATION
        $.SHOP_UZI = Pickup.Create(178 /* WEAPON_UZI */, 6 /* PICKUP_IN_SHOP_OUT_OF_STOCK */, 1070.5, -400.8, 15.2); //AMMUNATION

        //Commercial

        $.SHOP_AK47_2 = Pickup.Create(171 /* WEAPON_AK47 */, 1 /* PICKUP_IN_SHOP */, 342.5, -713.0, 26.4); //AMMUNATION
        $.SHOP_SNIPER_2 = Pickup.Create(177 /* WEAPON_SNIPER */, 1 /* PICKUP_IN_SHOP */, 342.5, -716.0, 26.4); //AMMUNATION
        $.SHOP_GRENADE2 = Pickup.Create(170 /* WEAPON_GRENADE */, 1 /* PICKUP_IN_SHOP */, 344.5, -719.0, 26.4); //AMMUNATION
        $.SHOP_UZI_2 = Pickup.Create(178 /* WEAPON_UZI */, 1 /* PICKUP_IN_SHOP */, 346.5, -719.0, 26.4); //AMMUNATION
        $.SHOP_ARMOUR = Pickup.Create(1364 /* bodyarmour */, 1 /* PICKUP_IN_SHOP */, 342.5, -719.0, 26.4); //AMMUNATION

        //Suburbia

        $.SHOP_FLAME = Pickup.Create(181 /* WEAPON_FLAME */, 1 /* PICKUP_IN_SHOP */, -1206.6, -6.6, 53.3); //AMMUNATION
        $.SHOP_MOLOTOV = Pickup.Create(174 /* WEAPON_MOLOTOV */, 1 /* PICKUP_IN_SHOP */, -1210.6, -6.6, 53.3); //AMMUNATION

        //BONUS PICKUPS**************************************************************************************

        Game.SetCollectableTotal(100);

        //INDUSTRIAL*****************************************************************************************

        Game.CreateCollectable(1105.3, -1020.0, 25.1); //Trenton Sawmill (rooftop)
        Game.CreateCollectable(877.6, -788.0, 27.6); //chinatown (rooftop)
        Game.CreateCollectable(1254.0, -611.2, 22.8); //Supasave (rooftop)
        Game.CreateCollectable(1045.8, -967.1, 16.0); //power plant
        Game.CreateCollectable(942.1, -793.4, 14.9); //chinatown (alleyway)

        Game.CreateCollectable(934.0, -718.9, 14.8); //chinatown (market)
        Game.CreateCollectable(898.1, -414.7, 26.5); //Redlight (Luigi's)
        Game.CreateCollectable(846.9, -442.5, 23.2); //Redlight (rooftop)
        Game.CreateCollectable(927.1, -404.4, 29.1); //Redlight (rooftop opposite Luigis)
        Game.CreateCollectable(864.3, -171.5, 3.5); //Towers

        Game.CreateCollectable(1538.3, -174.4, 19.2); //beach
        Game.CreateCollectable(1213.1, -127.1, 15.1); //Easy Credit Autos
        Game.CreateCollectable(753.6, 137.0, 3.5); //Harwood
        Game.CreateCollectable(1162.0, -101.8, 12.0); //petrol station
        Game.CreateCollectable(1155.6, -191.5, 14.4); //Back of building behind petrol station

        Game.CreateCollectable(1285.5, -247.5, 42.4); //little Italy (park)
        Game.CreateCollectable(1007.2, -219.6, 6.7); //Towers (Between trees)
        Game.CreateCollectable(1138.2, -250.0, 24.3); //little Italy (building site)
        Game.CreateCollectable(1023.6, -423.7, 14.9); //Redlight In building (smash glass)
        Game.CreateCollectable(1237.5, -854.1, 20.6); //Liberty Pharmaceuticals (roof)

        Game.CreateCollectable(1478.3, -1150.7, 12.0); //docks	9 (pier)
        Game.CreateCollectable(1018.9, -56.8, 21.0); //Radio station (Rooftop)
        Game.CreateCollectable(1465.7, -166.5, 55.5); //Frankies mansion
        Game.CreateCollectable(1120.2, -926.2, 16.0); //chinatown (near the bridge behind some buildings)
        Game.CreateCollectable(1206.5, -821.5, 15.0); //dogfood factory

        Game.CreateCollectable(940.2, -199.9, 5.0); //Towers (in bushes)
        Game.CreateCollectable(979.3, -1143.1, 13.1); //fishfactory
        Game.CreateCollectable(1195.5, -908.8, 14.9); //Trenton (in front of Joeys)
        Game.CreateCollectable(1470.4, -811.4, 22.4); //Docks (rooftop)
        Game.CreateCollectable(1320.5, -365.5, 15.2); //tramp tunnel

        Game.CreateCollectable(932.6, -477.3, -10.8); //Subway Industrial side
        Game.CreateCollectable(1305.9, -380.9, 39.5); //Little Italy (back alley)
        Game.CreateCollectable(938.2, -1258.3, 3.5); //Island south ofindustrial

        //COMMERCIAL********************************************************************************

        Game.CreateCollectable(36.8, -530.2, 26.0); //Top of Uncle BJs deli & groceries under suburban bridge
        Game.CreateCollectable(414.4, -279.3, 23.6); //Building site (small building)
        Game.CreateCollectable(203.5, -1252.6, 59.3); //Torrington (AMco Roof top)
        Game.CreateCollectable(77.7, -352.3, 16.1); //Garage at save the OOG bit
        Game.CreateCollectable(120.9, 243.7, 11.4); //Far North of map (Phils bit)

        Game.CreateCollectable(49.4, 36.3, 16.7); //Behind Stadium
        Game.CreateCollectable(68.1, -773.3, 22.8); //Under bridge (In park)
        Game.CreateCollectable(-4.0, -1129.1, 26.0); //Behind Church
        Game.CreateCollectable(-134.7, -1386.9, 26.2); //Doorway Bedford point (South west)
        Game.CreateCollectable(-23.5, -1472.4, 19.7); //Underground carpark Bedford point (South west)

        Game.CreateCollectable(112.1, -1227.6, 26.0); //Alley way (South central)
        Game.CreateCollectable(218.3, -1237.8, 20.4); //Underground carpark Torrington (South east)
        Game.CreateCollectable(308.0, -1533.4, 23.6); //Behind star statue logo (South east)
        Game.CreateCollectable(468.6, -1457.2, 44.3); //Top of Kenji's casino (heli Pad)
        Game.CreateCollectable(355.1, -1085.7, 25.9); //Behind Police station

        Game.CreateCollectable(312.4, -483.8, 29.0); //Multi story carpark (1st floor)
        Game.CreateCollectable(322.3, -447.1, 23.4); //Garage next to multi story carpark
        Game.CreateCollectable(586.7, -795.0, 1.6); // Jetty (North of industrial bridge)
        Game.CreateCollectable(504.3, -1027.8, 1.7); //Jetty (South of industrial bridge)
        Game.CreateCollectable(174.1, -1259.5, 32.1); //Upstairs in smashable glass building (Bedford point central)

        Game.CreateCollectable(248.8, -958.3, 26.0); //L shaped alley way (Central near industrial bridge)
        Game.CreateCollectable(54.8, -566.5, 26.1); //Basketball court
        Game.CreateCollectable(-77.0, -1490.1, 26.0); //Behind building in Project like area (South)
        Game.CreateCollectable(556.0, -231.4, 22.8); //on top of small bridge (north east)
        Game.CreateCollectable(-38.2, -1434.3, 31.8); //on roof near poject area (south west)

        Game.CreateCollectable(194.8, -0.5, 19.8); //on top of hospital (north east)
        Game.CreateCollectable(223.1, -272.2, 16.1); //east side of university (north)
        Game.CreateCollectable(-18.1, -222.3, 29.8); //Stadium entrance
        Game.CreateCollectable(-69.3, -469.2, 16.1); //alleyway south of stadium
        Game.CreateCollectable(-270.7, -631.6, 72.3); //commercial to suburban bridge

        Game.CreateCollectable(-59.2, -579.8, 15.9); //under road tunnel (far west) Bedford point
        Game.CreateCollectable(392.8, -1135.6, 15.9); //just outside Police station
        Game.CreateCollectable(145.0, -1584.0, 30.7); //ped walk way (south central)
        Game.CreateCollectable(428.1, -340.4, 16.2); //Construction site
        Game.CreateCollectable(351.1, -980.5, 33.1); //museum

        Game.CreateCollectable(-221.8, -1487.6, 5.8); //Pier south west coast (behind rocks)

        //SUBURBIA************************************************************************************

        Game.CreateCollectable(-1193.1, -75.8, 47.4); //Industrial estate  (Behind Burke)
        Game.CreateCollectable(-1090.5, 131.7, 58.7); //Industrial estate  (Behind import/export garage)
        Game.CreateCollectable(-1015.5, -13.0, 49.1); //Industrial estate (Behind Liberty Pharmaceuticals)
        Game.CreateCollectable(-821.8, -184.9, 33.8); //Industrial estate  (Behind Turtel Head Fish Co)

        Game.CreateCollectable(-849.1, -209.4, 41.8); //Industrial estate on roof (Behind Turtel Head Fish Co)
        Game.CreateCollectable(-736.4, 304.7, 54.1); //Behind the furthest west Swank house
        Game.CreateCollectable(-678.1, 308.6, 59.8); //Behind the 2nd furthest west Swank house
        Game.CreateCollectable(-609.2, 286.7, 65.1); //I front of 3rd furthest west Swank house
        Game.CreateCollectable(-329.6, 320.1, 60.7); //columbian mansion (swimming pool)

        Game.CreateCollectable(-1221.1, 562.8, 68.6); //Left Dam dome
        Game.CreateCollectable(-1131.9, 605.4, 68.6); //right Dam dome
        Game.CreateCollectable(-1098.4, 471.3, 35.5); //First lower Dam Tower
        Game.CreateCollectable(-1208.1, 325.2, 3.4); //Just to the west of the Dam
        Game.CreateCollectable(-1216.2, 347.9, 30.4); //Lower dam (last mission heli pad bit)

        Game.CreateCollectable(-1211.9, -166.9, 58.7); //behind hospital
        Game.CreateCollectable(-1195.2, -7.7, 59.8); //behind cop station on roof
        Game.CreateCollectable(-206.9, 328.8, 3.4); //Picnic Park (Shoreside vale)
        Game.CreateCollectable(-753.2, 142.0, 10.1); //in tunnel behind save house
        Game.CreateCollectable(-697.9, -182.1, 9.2); //under twisted bridge

        Game.CreateCollectable(-748.4, -807.0, -13.6); //Subway
        Game.CreateCollectable(-489.9, -44.9, 3.8); //Projects
        Game.CreateCollectable(-632.9, 67.6, 18.8); //Projects (behind save house)
        Game.CreateCollectable(-546.8, 10.7, 3.9); //Projects (door way)
        Game.CreateCollectable(-1032.6, -573.4, 10.9); //Airport (west side of Dome)

        Game.CreateCollectable(-542.0, -1046.6, 3.4); //Airport (end of a runway)
        Game.CreateCollectable(-1556.4, -905.8, 14.5); //Airport (Heli Pad)
        Game.CreateCollectable(-1327.0, -624.7, 11.1); //Airport under plane (furthest west)
        Game.CreateCollectable(-737.4, -745.4, 9.7); //In front of Airport (behind billbords)
        Game.CreateCollectable(-1278.7, -776.0, 11.1); //Airport under plane (furthest south)

        Game.CreateCollectable(-1494.7, -1097.3, 3.4); //Airport Far south by shore
        Game.CreateCollectable(-837.8, -469.2, 10.8); //Airport next to car park (firestation)

        // ********************************************AUDIO*********************************************
        //INDUSTRIAL

        //China Town

        $.sound_loop1 = Sound.AddContinuous(850.8, -663.7, 15.0, 41 /* SOUND_LAUNDERETTE_LOOP_L */); //Mr Wongs Laundrette
        $.sound_loop2 = Sound.AddContinuous(913.6, -805.5, 15.0, 42 /* SOUND_RESTAURANT_CHINATOWN_LOOP_S */); // Chinese Restaurant1
        $.sound_loop3 = Sound.AddContinuous(970.0, -674.8, 15.0, 53 /* SOUND_SHOP_LOOP_L */); //China market
        $.sound_loop4 = Sound.AddContinuous(975.1, -724.0, 15.0, 53 /* SOUND_SHOP_LOOP_L */); //China market

        //Little Italy (St Marks)

        $.sound_loop5 = Sound.AddContinuous(1220.0, -310.0, 32.0, 44 /* SOUND_RESTAURANT_ITALY_LOOP_S */); //Toni's Restaurant
        $.sound_loop6 = Sound.AddContinuous(1318.4, -463.6, 57.0, 48 /* SOUND_RESTAURANT_GENERIC_LOOP_2_S */); //Lips Bistro

        //docks

        $.sound_loop13 = Sound.AddContinuous(1579.8, -655.2, 13.0, 57 /* SOUND_DOCKS_LOOP_L */); //Docks
        $.sound_loop14 = Sound.AddContinuous(1504.8, -873.2, 19.0, 57 /* SOUND_DOCKS_LOOP_L */); //Docks2

        //Towers

        $.sound_loop15 = Sound.AddContinuous(962.3, -259.7, 10.0, 59 /* SOUND_HOME_LOOP_1_L */); //Tower Block1
        $.sound_loop16 = Sound.AddContinuous(952.5, -148.2, 8.0, 7 /* SOUND_CLUB_LOOP_2_L */); //Tower Block2
        $.sound_loop17 = Sound.AddContinuous(861.5, -247.2, 8.0, 5 /* SOUND_CLUB_LOOP_1_L */); //Tower Block3

        //Unsecific Areas

        $.sound_loop18 = Sound.AddContinuous(1469.0, -181.0, 56.0, 60 /* SOUND_PIANO_BAR_LOOP_1_S */); // Frankies Club
        $.sound_loop19 = Sound.AddContinuous(1120.7, -1023.3, 23.0, 37 /* SOUND_SAWMILL_LOOP_L */); // Sawmills

        //COMMERCIAL

        //SUBURBIA

        $.sound_loop20 = Sound.AddContinuous(-744.7, -604.1, 10.0, 51 /* SOUND_AIRPORT_LOOP_L */); //Airport

        // *****************************************SPECIAL CHARACTERS********************************
        // Cutscene stuff

        $.flag_failed_luigi1 = 0;

        // *****************************************CREATE PLAYER***************************************

        // xxx: this belongs to stripped MAIN.SCM
        // $.player = Player.Create(0, 811.9, -939.95, 35.8); //8Ball mission
        // $.player.setHeading(180.0);
        // $.script_controlled_player = $.player.getChar();

        // *****************************************Industrial Default Gangs****************************

        Gang.SetCarModel(0 /* GANG_MAFIA */, 134 /* CAR_MAFIA */); //The Mafia
        Gang.SetCarModel(1 /* GANG_TRIAD */, 132 /* CAR_BELLYUP */); //The Triads
        Gang.SetCarModel(2 /* GANG_DIABLO */, 137 /* CAR_DIABLOS */); //The Diablos

        Gang.SetWeapons(0 /* GANG_MAFIA */, 2 /* WEAPONTYPE_PISTOL */, 2 /* WEAPONTYPE_PISTOL */); //The Mafia
        Gang.SetWeapons(1 /* GANG_TRIAD */, 2 /* WEAPONTYPE_PISTOL */, 1 /* WEAPONTYPE_BASEBALLBAT */); //The Triads
        Gang.SetWeapons(2 /* GANG_DIABLO */, 1 /* WEAPONTYPE_BASEBALLBAT */, 0 /* WEAPONTYPE_UNARMED */); //The Diablos

        // *************************************Commercial Default Gangs****************************

        Game.SetThreatForPedType(12 /* PEDTYPE_GANG_COLOMBIAN */, 1 /* THREAT_PLAYER1 */);

        Gang.SetCarModel(3 /* GANG_YAKUZA */, 136 /* CAR_YAKUZA */); //The YAKUZA
        Gang.SetCarModel(5 /* GANG_COLOMBIAN */, 138 /* CAR_COLUMB */); //The COLUMBIANS
        Gang.SetCarModel(4 /* GANG_YARDIE */, 135 /* CAR_YARDIE */); //The YARDIES

        Gang.SetWeapons(3 /* GANG_YAKUZA */, 2 /* WEAPONTYPE_PISTOL */, 3 /* WEAPONTYPE_UZI */); //The YAKUZA
        Gang.SetWeapons(5 /* GANG_COLOMBIAN */, 2 /* WEAPONTYPE_PISTOL */, 3 /* WEAPONTYPE_UZI */); //The COLUMBIANS
        Gang.SetWeapons(4 /* GANG_YARDIE */, 1 /* WEAPONTYPE_BASEBALLBAT */, 2 /* WEAPONTYPE_PISTOL */); //The YARDIES

        // *************************************Suburban Default Gangs****************************

        Gang.SetCarModel(6 /* GANG_HOOD */, 139 /* CAR_HOODS */); //The HOODS

        Gang.SetWeapons(6 /* GANG_HOOD */, 3 /* WEAPONTYPE_UZI */, 2 /* WEAPONTYPE_PISTOL */); //The HOODS

        // **************************************Game variables*************************************

        // Global variables for missions
        ONMISSION = false;
        $.flag_industrial_passed = 0;
        $.flag_commercial_passed = 0;
        $.flag_suburban_passed = 0;

        // Radar Contact Blips
        $.created_ind_blip_before = 0;
        $.created_com_blip_before = 0;
        $.created_sub_blip_before = 0;

        // Death Arrest Variables
        $.flag_player_on_eightball_mission = 0;
        $.flag_player_on_luigi_mission = 0;
        $.flag_player_on_joey_mission = 0;
        $.flag_player_on_toni_mission = 0;
        $.flag_player_on_frankie_mission = 0;
        $.flag_player_on_diablo_mission = 0;
        $.flag_player_on_asuka_mission = 0;
        $.flag_player_on_kenji_mission = 0;
        $.flag_player_on_love_mission = 0;
        $.flag_player_on_yardie_mission = 0;
        $.flag_player_on_ray_mission = 0;
        $.flag_player_on_asuka_suburban_mission = 0;
        $.flag_player_on_hood_mission = 0;
        $.flag_player_on_meat_mission = 0;

        // xxx: this belongs to stripped MAIN.SCM
        // Death Arrest Stuff

        // DECLARE_MISSION_FLAG(ONMISSION);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(12 /* CONTACT_8BALL */, $.flag_player_on_eightball_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(0 /* CONTACT_LUIGI */, $.flag_player_on_luigi_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(1 /* CONTACT_JOEY */, $.flag_player_on_joey_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(2 /* CONTACT_TONI */, $.flag_player_on_toni_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(3 /* CONTACT_FRANKIE */, $.flag_player_on_frankie_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(13 /* CONTACT_HISPANIC */, $.flag_player_on_diablo_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(4 /* CONTACT_ASUKA */, $.flag_player_on_asuka_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(5 /* CONTACT_KENJI */, $.flag_player_on_kenji_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(7 /* CONTACT_LOVE */, $.flag_player_on_love_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(14 /* CONTACT_YARDIE */, $.flag_player_on_yardie_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(6 /* CONTACT_RAY */, $.flag_player_on_ray_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(10 /* CONTACT_ASUKA_SUBURBAN */, $.flag_player_on_asuka_suburban_mission);
        // DECLARE_MISSION_FLAG_FOR_CONTACT(15 /* CONTACT_HOODS */, $.flag_player_on_hood_mission);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(12 /* CONTACT_8BALL */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(0 /* CONTACT_LUIGI */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(1 /* CONTACT_JOEY */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(2 /* CONTACT_TONI */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(3 /* CONTACT_FRANKIE */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(13 /* CONTACT_HISPANIC */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(4 /* CONTACT_ASUKA */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(5 /* CONTACT_KENJI */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(7 /* CONTACT_LOVE */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(14 /* CONTACT_YARDIE */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(6 /* CONTACT_RAY */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(10 /* CONTACT_ASUKA_SUBURBAN */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(9 /* CONTACT_RAY_SUBURBAN */, 1000);
        // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(15 /* CONTACT_HOODS */, 1000);

        // Death Arrest Setting
        // SET_DEATHARREST_STATE(true /* ON */);

        // ***********************************Industrial Variables**********************************

        // 8ball Missions
        $.flag_eightball_mission_passed = 0;
        $.flag_eightball_mission_launched = 0;
        $.flag_eightball_switched_off = 0;

        // Luigi variables for missions
        $.flag_luigi_mission1_passed = 0;
        $.flag_luigi_mission2_passed = 0;
        $.flag_luigi_mission3_passed = 0;
        $.flag_luigi_mission4_passed = 0;
        $.flag_luigi_mission5_passed = 0;
        $.flag_all_luigi_missions_passed = 0;

        // Joey variables for missions
        $.flag_joey_mission1_passed = 0;
        $.flag_joey_mission2_passed = 0;
        $.flag_joey_mission3_passed = 0;
        $.flag_joey_mission4_passed = 0;
        $.flag_joey_mission5_passed = 0;
        $.flag_joey_mission6_passed = 0;
        $.flag_all_joey_missions_passed = 0;

        // Toni variables for missions
        $.flag_toni_mission1_passed = 0;
        $.flag_toni_mission2_passed = 0;
        $.flag_toni_mission3_passed = 0;
        $.flag_toni_mission4_passed = 0;
        $.flag_toni_mission5_passed = 0;
        $.flag_all_toni_missions_passed = 0;

        // Frankie variables for missions
        $.flag_frankie_mission3_part2_launched = 0;
        $.flag_frankie_mission1_passed = 0;
        $.flag_frankie_mission2_passed = 0;
        $.flag_frankie_mission2_1_passed = 0;
        $.flag_frankie_mission3_passed = 0;
        $.flag_frankie_mission4_passed = 0;
        $.flag_frankie_switched_off = 0;
        $.flag_all_frankie_missions_passed = 0;
        $.flag_player_had_cut1_fm3 = 0;

        // Final Industrial Mission
        $.flag_final_mission1_passed = 0;
        $.flag_final_mission1_launched = 0;

        // Diablo Industrial Missions
        $.flag_diablo_mission1_passed = 0;
        $.flag_diablo_mission2_passed = 0;
        $.flag_diablo_mission3_passed = 0;
        $.flag_diablo_mission4_passed = 0;
        $.flag_diablo_switched_off = 0;
        $.flag_all_diablo_missions_passed = 0;
        $.flag_diablo1_phone_message = 0;
        $.flag_diablo2_phone_message = 0;
        $.flag_diablo3_phone_message = 0;
        $.flag_diablo4_phone_message = 0;

        // Dog Food Factory Mission
        $.flag_meat_mission1_passed = 0;
        $.flag_meat_mission2_passed = 0;
        $.flag_meat_mission3_passed = 0;
        $.flag_meat_mission4_passed = 0;
        $.flag_meat_phone_ringing = 0;
        $.flag_meat1_phone_message = 0;
        $.flag_meat2_phone_message = 0;
        $.flag_meat3_phone_message = 0;
        $.flag_meat4_phone_message = 0;

        // **************************Industrial phone Variables*************************************

        $.flag_diablo1_passed_before = 0;
        $.blip_diablo_created_before = 0;
        $.Diablo_phone = Phone.Grab(937.9, -230.1);

        // Dog Food Phone
        $.meat_phone = Phone.Grab(1224.46, -839.78);

        //--------------------YARDIE--------------------------------------------

        $.pager_yardie_diplayed = 0;
        $.yardie_phone = Phone.Grab(120.0, -272.0);

        //-------------------PAY DAY FOR RAY PHONES-----------------------------

        $.Ray_phone1 = Phone.Grab(229.1, -1537.6);
        $.Ray_phone2 = Phone.Grab(-53.5, -699.0);
        $.Ray_phone3 = Phone.Grab(204.7, -135.1);
        $.Ray_phone4 = Phone.Grab(60.2, -964.8);

        // ********************************Suburban Phone Variables*********************************

        $.flag_blip_hood_created = 0;
        $.flag_hood1_phone_message = 0;
        $.flag_hood2_phone_message = 0;
        $.flag_hood3_phone_message = 0;
        $.flag_hood4_phone_message = 0;
        $.flag_hood5_phone_message = 0;

        $.hood_phone = Phone.Grab(-443.5, -6.6);

        // ***********************************Commercial Variables**********************************

        // Asuka variables for missions
        $.flag_asuka_mission1_passed = 0;
        $.flag_asuka_mission2_passed = 0;
        $.flag_asuka_mission3_passed = 0;
        $.flag_asuka_mission4_passed = 0;
        $.flag_asuka_mission5_passed = 0;
        $.flag_all_asuka_missions_passed = 0;

        // Ray variables for missions
        $.flag_ray_mission1_passed = 0;
        $.flag_ray_mission2_passed = 0;
        $.flag_ray_mission3_passed = 0;
        $.flag_ray_mission4_passed = 0;
        $.flag_ray_mission5_passed = 0;
        $.flag_ray_mission6_passed = 0;
        $.flag_all_ray_missions_passed = 0;

        // Kenji variables for missions
        $.flag_kenji_mission1_passed = 0;
        $.flag_kenji_mission2_passed = 0;
        $.flag_kenji_mission3_passed = 0;
        $.flag_kenji_mission4_passed = 0;
        $.flag_kenji_mission5_passed = 0;
        $.flag_all_kenji_missions_passed = 0;

        // love variables for missions
        $.flag_love1_launched = 0;
        $.flag_love_mission1_passed = 0;
        $.flag_love_mission2_passed = 0;
        $.flag_love_mission3_passed = 0;

        // Yardie Commercial Missions
        $.flag_yardie_mission1_passed = 0;
        $.flag_yardie_mission2_passed = 0;
        $.flag_yardie_mission3_passed = 0;
        $.flag_yardie_mission4_passed = 0;
        $.flag_yardie_switched_off = 0;
        $.flag_all_yardie_missions_passed = 0;
        $.flag_yardie1_phone_message = 0;
        $.flag_yardie2_phone_message = 0;
        $.flag_yardie3_phone_message = 0;
        $.flag_yardie4_phone_message = 0;

        // ***************************************Suburban Variables********************************

        // Love Mission variables

        $.flag_love_mission4_passed = 0;
        $.flag_love_mission5_passed = 0;
        $.flag_love_mission6_passed = 0;
        $.flag_love_mission7_passed = 0;
        $.flag_all_love_missions_passed = 0;

        // Asuka Suburban variables for missions
        $.flag_asuka_suburban_mission1_passed = 0;
        $.flag_asuka_suburban_mission2_passed = 0;
        $.flag_asuka_suburban_mission3_passed = 0;
        $.flag_asuka_suburban_mission4_passed = 0;
        $.flag_all_asuka_suburban_missions_passed = 0;

        // Hood variables for missions
        $.flag_done_drive_by_help = 0;
        $.flag_hood_mission1_passed = 0;
        $.flag_hood_mission2_passed = 0;
        $.flag_hood_mission3_passed = 0;
        $.flag_hood_mission4_passed = 0;
        $.flag_hood_mission5_passed = 0;
        $.flag_hood_switched_off = 0;
        $.flag_all_hood_missions_passed = 0;

        //Final Strand variables
        $.flag_player_on_cat_mission = 0;
        $.flag_cat_mission1_passed = 0;
        $.flag_cat_mission2_passed = 0;

        // Odd job variables
        $.got_siren_help_before = 0;
        $.passed_usj_counter = 0;

        // 4x4/carpark Missions
        $.flag_intro1_before = 0;
        $.flag_intro2_before = 0;
        $.flag_intro3_before = 0;
        $.flag_intro_mayhem_before = 0;

        $.flag_4x4_mission1_passed = 0;
        $.flag_4x4_mission2_passed = 0;
        $.flag_4x4_mission3_passed = 0;
        $.flag_mayhem_mission1_passed = 0;

        $.flag_4x4one_trigger = 0;
        $.flag_4x4two_trigger = 0;
        $.flag_4x4three_trigger = 0;
        $.flag_mayhem_trigger = 0;

        // Taxi mission
        $.flag_taxi1_mission_launched = 0;
        $.been_in_a_taxi_before = 0;
        $.been_in_taxi1_before = 0;
        $.taxi_passed = 0;
        $.done_taxi_help = 0;
        $.new_taxi_created_before = 0;

        // RC Demolition
        $.flag_just_done_rc_mission = 0;
        $.rec_rc1 = 0;
        $.rec_rc2 = 0;
        $.rec_rc3 = 0;
        $.rec_rc4 = 0;
        $.rec_rc5 = 0;
        $.rec_rc6 = 0;
        $.flag_rc1_passed = 0;
        $.flag_rc2_passed = 0;
        $.flag_rc3_passed = 0;
        $.flag_rc4_passed = 0;

        //OTHER STUFF
        $.ammu2_blip_added = 0;
        $.flag_bridge_created_8ball = 0;
        $.flag_done_radio_8ball = 0;
        $.timer_help_message_displayed = 0;
        $.flag_joey_mission5_terminated = 0;
        $.flag_joey_mission6_terminated = 0;
        $.flag_luigi_mission4_terminated = 0;
        $.flag_luigi_mission5_terminated = 0;
        $.the_scripts_started_again = 0;
        $.phils_guns_created_before = 0;
        $.started_buggy_generator_before = 0;
        $.nicked_half_a_mil_before = 0;
        $.van_once_a_day = 0;
        $.breakout_timer = 0;
        $.breakout_timer_start = 0;
        $.breakout_diff = 0;
        $.maria_exists = 0;
        $.door_crash_flag = 0;
        $.door_position_a1 = 0.0;
        $.barriers_been_added = 0;

        // ********************************************Odd Jobs*************************************

        // START_NEW_SCRIPT t4x4_mission1_loop // xxx: moved to mission monitor
        // START_NEW_SCRIPT t4x4_mission2_loop // xxx: moved to mission monitor
        // START_NEW_SCRIPT t4x4_mission3_loop // xxx: moved to mission monitor
        // START_NEW_SCRIPT multistorey_mission_loop // xxx: moved to mission monitor
        // START_NEW_SCRIPT taxi_mission1_loop // xxx: moved to mission monitor
        // START_NEW_SCRIPT fire_truck_mission_loop // xxx: moved to mission monitor
        // START_NEW_SCRIPT ambulance_mission_loop // xxx: moved to mission monitor
        // START_NEW_SCRIPT cop_mission_loop // xxx: moved to mission monitor
        // START_NEW_SCRIPT rc_loop // xxx: moved to mission monitor

        // LaunchMission hj.sc // xxx: moved before the main loop
        // LaunchMission usj.sc // xxx: moved before the main loop
        // LaunchMission genstuf.sc // xxx: moved before the main loop
        // LaunchMission rampage.sc // xxx: moved before the main loop
        // LaunchMission import.sc // xxx: moved before the main loop
        // LaunchMission camera.sc // xxx: moved before the main loop
        // LaunchMission gates.sc // xxx: moved before the main loop
        // await asyncWait(0); // xxx: moved before the main loop

        // ********************************create and delete all the contact bips**************************

        // xxx: disabled as this is just a no-op
        // $.luigi_contact_blip = Blip.AddSpriteForContactPoint(892.8, -425.8, 13.9, 13 /* RADAR_SPRITE_LUIGI */);
        // $.luigi_contact_blip.remove();
        // $.joey_contact_blip = Blip.AddSpriteForContactPoint(1191.7, -870.0, -100.0, 10 /* RADAR_SPRITE_JOEY */);
        // $.joey_contact_blip.remove();
        // $.toni_contact_blip = Blip.AddSpriteForContactPoint(1219.6, -321.0, -100.0, 19 /* RADAR_SPRITE_TONY */);
        // $.toni_contact_blip.remove();
        // $.frankie_contact_blip = Blip.AddSpriteForContactPoint(1455.7, -187.3, -100.0, 16 /* RADAR_SPRITE_SAL */);
        // $.frankie_contact_blip.remove();
        // $.eightball_contact_blip = Blip.AddSpriteForContactPoint(1272.2, -92.9, -100.0, 7 /* RADAR_SPRITE_EIGHT */);
        // $.eightball_contact_blip.remove();
        // $.diablo_contact_blip = Blip.AddSpriteForContactPoint(938.4, -230.5, -100.0, 8 /* RADAR_SPRITE_EL */);
        // $.diablo_contact_blip.remove();

        // $.asuka_contact_blip = Blip.AddSpriteForContactPoint(523.6, -639.4, 16.6, 1 /* RADAR_SPRITE_ASUKA */);
        // $.asuka_contact_blip.remove();
        // $.kenji_contact_blip = Blip.AddSpriteForContactPoint(459.1, -1413.0, 26.1, 11 /* RADAR_SPRITE_KENJI */);
        // $.kenji_contact_blip.remove();
        // $.ray_contact_blip = Blip.AddSpriteForContactPoint(38.8, -725.4, -100.0, 15 /* RADAR_SPRITE_RAY */);
        // $.ray_contact_blip.remove();
        // $.love_contact_blip = Blip.AddSpriteForContactPoint(86.1, -1548.7, 28.3, 6 /* RADAR_SPRITE_DON */);
        // $.love_contact_blip.remove();
        // $.yardie_contact_blip = Blip.AddSpriteForContactPoint(120.7, -272.1, 16.1, 12 /* RADAR_SPRITE_LIZ */);
        // $.yardie_contact_blip.remove();

        // $.maria_contact_blip = Blip.AddSpriteForContactPoint(-363.7, 246.1, 60.0, 3 /* RADAR_SPRITE_CAT */);
        // $.maria_contact_blip.remove();
        // $.hood_contact_blip = Blip.AddSpriteForContactPoint(-443.5, -6.1, 3.8, 9 /* RADAR_SPRITE_ICE */);
        // $.hood_contact_blip.remove();

        // $.industrail_save_blip = Blip.AddSpriteForContactPoint(893.5, -306.1, -100.0, 17 /* RADAR_SPRITE_SAVE */);
        // $.industrail_save_blip.remove();
        // $.commercial_save_blip = Blip.AddSpriteForContactPoint(103.0, -484.2, -100.0, 17 /* RADAR_SPRITE_SAVE */);
        // $.commercial_save_blip.remove();
        // $.suburban_save_blip = Blip.AddSpriteForContactPoint(-665.0, -6.5, -100.0, 17 /* RADAR_SPRITE_SAVE */);
        // $.suburban_save_blip.remove();
        // $.spray_taxi = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
        // $.spray_taxi.remove();

        //Targettable objects

        $.target1.makeTargetable();
        $.target2.makeTargetable();
        $.target3.makeTargetable();

        World.SetVisibilityOfClosestObjectOfType(1027.26, -933.796, 15.042, 50.0, 855 /* indhelix_barrier */, false /* FALSE */);
        World.SwapNearestBuildingModel(1027.26, -933.796, 15.042, 50.0, 855 /* indhelix_barrier */, 218 /* LOD_land014 */);

        if ($.player.isPlaying()) {
            $.player.setControl(false /* Off */);
        }

        Camera.SetFadingColor(0, 0, 0);

        Camera.DoFade(0, 0 /* FADE_OUT */);

        //DEBUG SETUP*************************************************************************************
        /*
            SWITCH_WORLD_PROCESSING OFF //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            WAIT 1500 //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            SWITCH_WORLD_PROCESSING ON //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            LOAD_SCENE 916.3 -413.6 15.0  //START LUIGIS***************************************************************
            flag_eightball_mission_passed = 1 //TEST SO SAVE HOUSE WORKS
            IF IS_PLAYER_PLAYING player
            SET_INTRO_IS_PLAYING FALSE
            SET_TIME_OF_DAY 9 00
            SET_PLAYER_COORDINATES Player 916.3 -413.6 -100.0
            SET_PLAYER_HEADING player 140.0
            SET_CAMERA_BEHIND_PLAYER
            LAUNCH_MISSION debug.sc
            DO_FADE 1000 FADE_IN
            ADD_SCORE player 1000000

            //SWAP BRIDGE FROM FIXED TO DAMAGED
            SWAP_NEAREST_BUILDING_MODEL	525.362 -927.066 71.841	20.0 nbbridgcabls01 nbbridgfk2
            SWAP_NEAREST_BUILDING_MODEL	706.432 -935.82  67.071	20.0 nbbridgcabls01 nbbridgfk2
            SWAP_NEAREST_BUILDING_MODEL	529.023 -920.098 43.504 20.0 nbbridgerdb damgbridgerdb
            SWAP_NEAREST_BUILDING_MODEL	702.763 -939.963 38.736	20.0 nbbridgerdb damgbridgerdb
            SWAP_NEAREST_BUILDING_MODEL	529.023 -942.94  43.504	20.0 nbbridgerda damgbbridgerda
            SWAP_NEAREST_BUILDING_MODEL	702.764 -919.963 38.736	20.0 nbbridgerda damgbbridgerda

            SWAP_NEAREST_BUILDING_MODEL	525.362 -927.066 71.841	20.0 lodridgcabls01 lodridgfk2
            SWAP_NEAREST_BUILDING_MODEL	706.432 -935.82  67.071	20.0 lodridgcabls01 lodridgfk2
            SWAP_NEAREST_BUILDING_MODEL	521.146 -922.94  43.504 20.0 lodridgerdb lodgbridgerdb
            SWAP_NEAREST_BUILDING_MODEL	702.763 -939.963 38.736	20.0 lodridgerdb lodgbridgerdb
            SWAP_NEAREST_BUILDING_MODEL	529.023 -940.098 43.504	20.0 lodridgerda lodgbbridgerda
            SWAP_NEAREST_BUILDING_MODEL	702.764 -919.963 38.736	20.0 lodridgerda lodgbbridgerda

            GOSUB_FILE switch_car_generator switch.sc

            START_NEW_SCRIPT ind_save_loop
            START_NEW_SCRIPT sub_save_loop
            START_NEW_SCRIPT com_save_loop
            START_NEW_SCRIPT ind_restart
            START_NEW_SCRIPT com_restart
            START_NEW_SCRIPT sub_restart

            IF IS_PLAYER_PLAYING Player
            SET_PLAYER_CONTROL Player on
            ENDIF

            GOTO mission_start
            ENDIF
        */
    });

    //FULL GAME LOAD***********************************************************************************************

    // Start Monitors
    START_NEW_SCRIPT(__dirname + '/Main/missionMon.ts'); // must run as a separate script as it mutates ONMISSION flag and enables mission-only behavior
    GOSUB_FILE(__dirname + '/Main/Industrial/hj.mts');
    GOSUB_FILE(__dirname + '/Main/Industrial/usj.mts');
    GOSUB_FILE(__dirname + '/Main/Industrial/genstuf.mts');
    // await import(__dirname + '/Main/Industrial/rampage.ts');
    // await import(__dirname + '/Main/Industrial/import.ts');
    // await import(__dirname + '/Main/Industrial/camera.ts');
    // await import(__dirname + '/Main/Industrial/gates.ts');

    // Save monitor
    ind_save_loop(); // START_NEW_SCRIPT ind_save_loop
    com_save_loop(); // START_NEW_SCRIPT com_save_loop
    sub_save_loop(); // START_NEW_SCRIPT sub_save_loop

    // Phone monitor
    meat_phone_loop();
    diablo_phone_loop();
    yardie_phone_loop();
    hood_phone_loop();

    // Restart monitor
    run_gated('_flag_ind_restart_complete', ind_restart); // START_NEW_SCRIPT ind_restart
    run_gated('_flag_com_restart_complete', com_restart); // START_NEW_SCRIPT com_restart
    run_gated('_flag_sub_restart_complete', sub_restart); // START_NEW_SCRIPT sub_restart
    run_gated('_flag_luigi_message_complete', luigi_message);
    run_gated('_flag_blob_help_loop_complete', blob_help_loop);
    run_gated('_flag_diablo_phone_start_complete', diablo_phone_start);
    run_gated('_flag_diablo_blip_loop_complete', diablo_blip_loop);
    run_gated('_flag_joeys_buggy_loop_complete', joeys_buggy_loop);
    run_gated('_flag_toni5_flames_loop_complete', toni5_flames_loop);
    run_gated('_flag_toni4_pager_loop_complete', toni4_pager_loop);
    run_gated('_flag_toni5_pager_loop_complete', toni5_pager_loop);
    run_gated('_flag_yardie_phone_start_complete', yardie_phone_start);
    run_gated('_flag_yardie_blip_loop_complete', yardie_blip_loop);
    run_gated('_flag_hood_phone_start_complete', hood_phone_start);
    run_gated('_flag_hood_blip_loop_complete', hood_blip_loop);
    run_gated('_flag_pistol_message_complete', pistol_message);
    run_gated('_flag_uzi_message_complete', uzi_message);
    run_gated('_flag_imp_exp_pager_complete', imp_exp_pager);
    run_gated('_flag_emergency_crane_pager_complete', emergency_crane_pager);
    run_gated('_flag_van_heist_garage_pager_complete', van_heist_garage_pager);

    // START_NEW_SCRIPT hospital_info_loop // xxx: moved to mission monitor
    // START_NEW_SCRIPT police_info_loop // xxx: moved to mission monitor

    if ($.player.isPlaying()) {
        $.player.setControl(true /* on */);
    }

    await asyncWait(0);

    $._flag_is_loaded_game = 1;
    verbose('[*] Game Initialization Complete. Starting Main Loop');

    mission_start: {
        while (true) {
            await asyncWait(1000);

            if ($.player.isPlaying()) {
                //INDUSTRIAL BLOCK********************************************************************************************************

                if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                    //HOSPITAL INFO PICKUPS
                    if (!ONMISSION && $.heal_info_trip == 0 && $.flag_health_info == 0) {
                        $.heal_info = Pickup.Create(1361 /* info */, 3 /* PICKUP_ONCE */, 1144.2, -596.9, 14.9); //hospital info cut
                        $.heal_info_trip = 1;
                    }
                    if (ONMISSION && $.heal_info_trip == 1) {
                        $.heal_info.remove(); //hospital info cut
                        $.heal_info_trip = 0;
                    }

                    //POLICE INFO PICKUPS
                    if (!ONMISSION && $.wanted_info_trip == 0 && $.flag_wanted_info == 0) {
                        $.wanted_info = Pickup.Create(1361 /* info */, 3 /* PICKUP_ONCE */, 1143.9, -675.2, 15.0); //police info cut
                        $.wanted_info_trip = 1;
                    }
                    if (ONMISSION && $.wanted_info_trip == 1) {
                        $.wanted_info.remove(); //police info cut
                        $.wanted_info_trip = 0;
                    }
                    /*
                        IF IS_PLAYER_IN_ZONE Player LITTLEI
                            IF are_objects_targettable = 0
                                MAKE_OBJECT_TARGETTABLE target1
                                MAKE_OBJECT_TARGETTABLE target2
                                MAKE_OBJECT_TARGETTABLE target3
                                are_objects_targettable = 1
                            ENDIF
                        ELSE
                            IF are_objects_targettable = 1
                                are_objects_targettable = 0
                            ENDIF
                        ENDIF
                    */
                }
            }
        }
    }
}

// ***************************************Industrial Level**********************************

async function meat_phone_loop() {
    while (true) {
        if ($.flag_meat_mission1_passed && $.flag_meat_mission2_passed && $.flag_meat_mission3_passed && $.flag_meat_mission4_passed) {
            return; // TERMINATE_THIS_SCRIPT
        }

        await asyncWait($.mission_trigger_wait_time);

        // xxx: activated after luigi mission 3
        if (!$.flag_luigi_mission3_passed) {
            continue;
        }

        if (!ONMISSION) {
            const { hours, minutes } = Clock.GetTimeOfDay();
            if (hours >= 9 && hours < 19) {
                $.meat_phone.turnOn();
            } else {
                $.meat_phone.turnOff();
            }
        } else {
            $.meat_phone.turnOff();
        }

        if ($.player.isPlaying()) {
            if ($.player.locateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
                if (!ONMISSION) {
                    if ($.player.canStartMission()) {
                        $.meat_phone.turnOff();
                    }
                    if (!$.player.isPlaying()) {
                        continue;
                    }
                    while ($.player.locateOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
                        await asyncWait(0);
                        if (!$.player.isPlaying()) {
                            break;
                        }
                    }
                }
            }
        }
    }
}

async function ind_save_loop() {
    //	Should be called before main loop
    // SCRIPT_NAME I_SAVE

    if ($._flag_is_loaded_game && $.player.isInAreaOnFoot3D(891.2, -309.7, 7.7, 899.3, -303.3, 12.7, false /* FALSE */)) {
        log('[*] Loading from industrial area save...');
        await postSave();
    }

    ind_save_loop_inner: while (true) {
        await asyncWait(250);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                //SAVE HOUSE BLIP
                if ($.created_ind_blip_before == 0) {
                    $.industrail_save_blip.remove();
                    $.industrail_save_blip = Blip.AddSpriteForContactPoint(870.0, -308.2, -100.0, 17 /* RADAR_SPRITE_SAVE */);
                    $.industrail_save_blip.changeDisplay(2 /* BLIP_ONLY */);
                    $.created_ind_blip_before = 1;
                }

                //SAVE HOUSE DOOR
                if ($.player.isInZone('REDLIGH')) {
                    if ($.flag_eightball_mission_passed == 1) {
                        if (!ONMISSION) {
                            while (!$.playersdoor.rotate(210.0, 10.0, false /* FALSE */)) {
                                await asyncWait(0);
                            }
                        } else {
                            while (!$.playersdoor.rotate(0.0, 10.0, false /* FALSE */)) {
                                await asyncWait(0);
                            }
                        }
                    }

                    //INDUSTRIAL SAVE HOUSE
                    if ($.player.isPlaying()) {
                        if ($.player.canStartMission()) {
                            if (!ONMISSION) {
                                if ($.player.isInAreaOnFoot3D(891.2, -309.7, 7.7, 899.3, -303.3, 12.7, false /* FALSE */)) {
                                    $.player.setControl(false /* Off */);
                                    Camera.SetFixedPosition(884.56, -305.35, 13.53, 0.0, 0.0, 0.0);
                                    Camera.PointAtPoint(885.25, -305.85, 13.0, 2 /* JUMP_CUT */);
                                    Audio.LoadMissionAudio('door_1' as any);
                                    while (!Audio.HasMissionAudioLoaded()) {
                                        await asyncWait(0);
                                    }
                                    Audio.PlayMissionAudio();
                                    while (!$.playersdoor.rotate(0.0, 8.0, false /* FALSE */)) {
                                        await asyncWait(0);
                                    }
                                    while (!Audio.HasMissionAudioFinished()) {
                                        await asyncWait(0);
                                    }
                                    Game.ActivateSaveMenu(); //THE GAME SAVES/RE-LOADS HERE!!!!!
                                    await asyncWait(0);
                                    while (!Game.HasSaveGameFinished()) {
                                        await asyncWait(0);
                                    }
                                    await postSave();
                                }
                            }
                        }
                    }
                }
            } else {
                if ($.created_ind_blip_before == 1) {
                    $.industrail_save_blip.remove();
                    $.created_ind_blip_before = 0;
                }
            }
        }
    }

    async function postSave() {
        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        if ($.player.isPlaying()) {
            $.player.setControl(false /* Off */);
        }
        await asyncWait(1000);
        /*
            LOAD_MISSION_AUDIO DOOR_2
            WHILE NOT HAS_MISSION_AUDIO_LOADED
            WAIT 0
            ENDWHILE
            PLAY_MISSION_AUDIO
            */
        while (!$.playersdoor.rotate(210.0, 10.0, false /* FALSE */)) {
            await asyncWait(0);
        }
        World.ClearArea(888.6, -308.4, -100.0, 1.0, true /* TRUE */);
        if ($.player.isPlaying()) {
            $.player.setCoordinates(888.6, -308.4, -100.0);
            $.player.setHeading(90.0);
            Camera.DoFade(1000, 1 /* FADE_IN */);
            Camera.RestoreJumpcut();
            Camera.SetInFrontOfPlayer();
        }
        await asyncWait(1000);
        if ($.player.isPlaying()) {
            $.player.setControl(true /* on */);
        }
    }
}

async function ind_restart() {
    //	Should be called before main loop
    // SCRIPT_NAME I_RSTRT
    
    ind_restart_inner: while (true) {
        await asyncWait(1000);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                Restart.AddHospital(1144.3, -596.9, 13.9, 90.0);
                Restart.AddPolice(1143.9, -675.2, -100.0, 90.0);
                verbose('Added industrial restart points');
                return; // TERMINATE_THIS_SCRIPT
            }
        }
    }
}

async function diablo_phone_start() {
    //	Should be called in joey3 mission passed
    await wait_for('flag_joey_mission3_passed');
    verbose('[+] Activating subscript "diablo_phone_start"');
    // SCRIPT_NAME DIAB_PH

    diablo_phone_start_inner: while (true) {
        await asyncWait(10000);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                // Diablo Phone
                if (!ONMISSION) {
                    Pager.AddMessage('DIAB1_A', 140, 2, 0);
                    // START_NEW_SCRIPT diablo_mission1_loop // xxx: moved to mission monitor
                    // START_NEW_SCRIPT diablo_blip_loop // xxx: implemented as a gated script
                    return; // TERMINATE_THIS_SCRIPT
                }
            }
        }
    }
}

async function diablo_phone_loop() {
    while (true) {
        if ($.flag_diablo_mission1_passed && $.flag_diablo_mission2_passed && $.flag_diablo_mission3_passed && $.flag_diablo_mission4_passed) {
            return; // TERMINATE_THIS_SCRIPT
        }

        await asyncWait($.mission_trigger_wait_time);

        // xxx: activated after joey mission 3
        if (!$.flag_joey_mission3_passed) {
            continue;
        }

        if (!ONMISSION) {
            $.Diablo_phone.turnOn();
        } else {
            $.Diablo_phone.turnOff();
        }

        if ($.player.isPlaying()) {
            if ($.player.locateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false /* FALSE */)) {
                if (!ONMISSION) {
                    if ($.player.canStartMission()) {
                        $.Diablo_phone.turnOff();
                    }
                    if (!$.player.isPlaying()) {
                        continue;
                    }
                    while ($.player.locateOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false /* FALSE */)) {
                        await asyncWait(0);
                        if (!$.player.isPlaying()) {
                            break;
                        }
                    }
                }
            }
        }
    }
}

async function diablo_blip_loop() {
    //	Should be called in diablo_phone_start
    await wait_for('_flag_diablo_phone_start_complete');
    verbose('[+] Activating subscript "diablo_blip_loop"');
    // SCRIPT_NAME DIAB_BP
    
    diablo_blip_loop_inner: while (true) {
        await asyncWait(1000);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                if ($.blip_diablo_created_before == 0) {
                    $.diablo_contact_blip.remove();
                    $.diablo_contact_blip = Blip.AddSpriteForContactPoint(938.4, -230.5, -100.0, 8 /* RADAR_SPRITE_EL */);
                    $.blip_diablo_created_before = 1;
                }
            } else {
                if ($.blip_diablo_created_before == 1) {
                    $.diablo_contact_blip.remove();
                    $.blip_diablo_created_before = 0;
                }
            }
        }
    }
}

async function joeys_buggy_loop() {
    // Should be called in asuka1 mission passed
    await wait_for('flag_asuka_mission1_passed');
    verbose('[+] Activating subscript "joeys_buggy_loop"');
    // SCRIPT_NAME JOE_BUG

    joeys_buggy_loop_inner: while (true) {
        await asyncWait(500);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                //START JOEYS BUGGY GENERATOR AT MISTYS
                const _res360 = Clock.GetTimeOfDay();
                $.hours = _res360.hours;
                $.minutes = _res360.minutes;
                if ($.hours > 17 && $.hours < 24) {
                    if ($.started_buggy_generator_before == 0) {
                        $.joeys_buggy.switch(101);
                        $.misty_joey_loop = Sound.AddContinuous(937.1, -275.5, 8.9, 91 /* SOUND_MISTYS_HOUSE_LOOP_L */); //misty and joey
                        $.started_buggy_generator_before = 1;
                    }
                } else {
                    if ($.started_buggy_generator_before == 1) {
                        $.joeys_buggy.switch(0);
                        $.misty_joey_loop.remove();
                        $.started_buggy_generator_before = 0;
                    }
                }
            }
        }
    }
}

async function toni5_flames_loop() {
    //	Should be called in toni5 mission passed
    await wait_for('flag_toni_mission5_passed');
    verbose('[+] Activating subscript "toni5_flames_loop"');
    // SCRIPT_NAME TONI_FR

    toni5_flames_loop_inner: while (true) {
        await asyncWait(500);

        if ($.player.isPlaying()) {
            //SWITCH OFF FLAMES AFTER TONI 5
            if (!$.player.isInZone('PORT_W')) {
                World.RemoveAllScriptFires();
                return; // TERMINATE_THIS_SCRIPT
            }
        }
    }
}

async function blob_help_loop() {
    //	Should be called in eightball mission passed
    await wait_for('flag_luigi_mission1_passed');
    verbose('[+] Activating subscript "blob_help_loop"');
    // SCRIPT_NAME BLOB_HP

    blob_help_loop_inner: while (true) {
        await asyncWait(100);

        if ($.player.isPlaying()) {
            //CONTACT BLOB HELP MESSAGE
            if ($.player.isInAreaOnFoot3D(895.3, -428.0, 12.0, 900.3, -423.2, 18.0, false /* FALSE */)) {
                Text.PrintHelp('HELP12'); // Tells player about contact blobs
                return; // TERMINATE_THIS_SCRIPT
            }
        }
    }
}

async function toni4_pager_loop() {
    //	Should be called in frankie2 mission passed
    await wait_for('flag_frankie_mission2_passed');
    verbose('[+] Activating subscript "toni4_pager_loop"');
    // SCRIPT_NAME TONI4PG

    toni4_pager_loop_inner: while (true) {
        await asyncWait(10000);

        if ($.player.isPlaying()) {
            if (!ONMISSION) {
                if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                    //ADD MESSAGE AFTER FRANKIE 2 IS PASSED AND TONI 4 IS NOT COMPLETED
                    if ($.flag_toni_mission4_passed == 0) {
                        Pager.AddMessage('TONI_P', 140, 2, 0);
                    }
                    // START_NEW_SCRIPT toni5_pager_loop // xxx: implemented as a gated script
                    return; // TERMINATE_THIS_SCRIPT
                }
            }
        }
    }
}

async function toni5_pager_loop() {
    //	Should be called in toni4_pager_loop
    await wait_for('_flag_toni4_pager_loop_complete');
    verbose('[+] Activating subscript "toni5_pager_loop"');
    // SCRIPT_NAME TONI5PG

    toni5_pager_loop_inner: while (true) {
        await asyncWait(10000);

        if ($.player.isPlaying()) {
            if (!ONMISSION) {
                if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
                    //ADD MESSAGE AFTER FRANKIE 2 IS PASSED AND TONI 5 IS NOT COMPLETED
                    if ($.flag_toni_mission4_passed == 1) {
                        if ($.flag_toni_mission5_passed == 0) {
                            Pager.AddMessage('TONI_P', 140, 2, 0);
                        }
                        return; // TERMINATE_THIS_SCRIPT
                    }
                }
            }
        }
    }
}

// ***************************************Commercial Level**********************************

async function com_save_loop() {
    // Should be called before main loop

    if ($._flag_is_loaded_game && $.player.isInAreaOnFoot3D(105.7, -486.0, 15.0, 100.8, -483.4, 18.0, false /* FALSE */)) {
        log('[*] Loading from commercial area save...');
        await postSave();
    }
    // SCRIPT_NAME C_SAVE

    com_save_loop_inner: while (true) {
        await asyncWait(250);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
                //SAVE HOUSE BLIP
                if ($.created_com_blip_before == 0) {
                    $.commercial_save_blip.remove();
                    $.commercial_save_blip = Blip.AddSpriteForContactPoint(103.3, -469.2, -100.0, 17 /* RADAR_SPRITE_SAVE */);
                    $.commercial_save_blip.changeDisplay(2 /* BLIP_ONLY */);
                    $.created_com_blip_before = 1;
                }

                //SAVE HOUSE DOORS
                if ($.player.isInZone('PARK')) {
                    if (!ONMISSION) {
                        while (
                            !$.plysav_lftdr_lft.slide(105.35, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */) ||
                            !$.plysav_lftdr_rght.slide(100.692, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */)
                        ) {
                            await asyncWait(0);
                        }
                    } else {
                        while (
                            !$.plysav_lftdr_lft.slide(103.85, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */) ||
                            !$.plysav_lftdr_rght.slide(102.192, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */)
                        ) {
                            await asyncWait(0);
                        }
                    }

                    //COMMERCIAL SAVE HOUSE
                    if ($.player.isPlaying()) {
                        if ($.player.canStartMission()) {
                            if (!ONMISSION) {
                                if ($.player.isInAreaOnFoot3D(105.7, -486.0, 15.0, 100.8, -483.4, 18.0, false /* FALSE */)) {
                                    $.player.setControl(false /* Off */);
                                    Camera.SetFixedPosition(98.53, -472.06, 19.84, 0.0, 0.0, 0.0);
                                    Camera.PointAtPoint(98.94, -472.9, 19.47, 2 /* JUMP_CUT */);
                                    Audio.LoadMissionAudio('door_3' as any);
                                    while (!Audio.HasMissionAudioLoaded()) {
                                        await asyncWait(0);
                                    }
                                    Audio.PlayMissionAudio();
                                    while (
                                        !$.plysav_lftdr_lft.slide(103.85, -482.8, 16.25, 0.0625, 0.0, 0.0, false /* FALSE */) ||
                                        !$.plysav_lftdr_rght.slide(102.192, -482.8, 16.25, 0.0625, 0.0, 0.0, false /* FALSE */)
                                    ) {
                                        await asyncWait(0);
                                    }
                                    while (!Audio.HasMissionAudioFinished()) {
                                        await asyncWait(0);
                                    }
                                    Game.ActivateSaveMenu(); //THE GAME SAVES/RE-LOADS HERE!!!!!
                                    await asyncWait(0);
                                    while (!Game.HasSaveGameFinished()) {
                                        await asyncWait(0);
                                    }
                                    await postSave();
                                }
                            }
                        }
                    }
                }
            } else {
                if ($.created_com_blip_before == 1) {
                    $.commercial_save_blip.remove();
                    $.created_com_blip_before = 0;
                }
            }
        }
    }

    async function postSave() {
        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        if ($.player.isPlaying()) {
            $.player.setControl(false /* OFF */);
        }
        await asyncWait(1000);
        /*
            LOAD_MISSION_AUDIO DOOR_4
            WHILE NOT HAS_MISSION_AUDIO_LOADED
            WAIT 0
            ENDWHILE
            PLAY_MISSION_AUDIO
        */
        while (
            !$.plysav_lftdr_lft.slide(105.35, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */) ||
            !$.plysav_lftdr_rght.slide(100.692, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */)
        ) {
            await asyncWait(0);
        }
        World.ClearArea(103.0, -478.5, 14.9, 1.0, true /* TRUE */);
        if ($.player.isPlaying()) {
            $.player.setCoordinates(103.0, -478.5, 14.9);
            $.player.setHeading(0.0);
            Camera.DoFade(1000, 1 /* FADE_IN */);
            Camera.RestoreJumpcut();
            Camera.SetInFrontOfPlayer();
        }
        await asyncWait(1000);
        if ($.player.isPlaying()) {
            $.player.setControl(true /* on */);
        }
    }
}

async function com_restart() {
    // Should be called before main loop
    // SCRIPT_NAME C_RSTRT

    com_restart_inner: while (true) {
        await asyncWait(1000);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
                if ($.flag_industrial_passed == 1) {
                    Restart.AddHospital(183.5, -17.8, 16.2, 180.0);
                    Restart.AddPolice(340.3, -1123.4, 25.0, 180.0);
                    Game.SetMaxWantedLevel(5);
                    verbose('Added commercial restart points and set max wanted level to 5');
                    return; // TERMINATE_THIS_SCRIPT
                }
            }
        }
    }
}

async function yardie_phone_start() {
    //	Should be called in asuka1 mission passed
    await wait_for('flag_asuka_mission1_passed');
    verbose('[+] Activating subscript "yardie_phone_start"');
    // SCRIPT_NAME YARD_PH

    yardie_phone_start_inner: while (true) {
        await asyncWait(10000);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
                // Yardie Phone
                if (!ONMISSION) {
                    Pager.AddMessage('YD_P', 140, 2, 0);
                    // START_NEW_SCRIPT yardie_mission1_loop // xxx: moved to mission monitor
                    // START_NEW_SCRIPT yardie_blip_loop // xxx: implemented as a gated script
                    return; // TERMINATE_THIS_SCRIPT
                }
            }
        }
    }
}

async function yardie_phone_loop() {
    while (true) {
        if ($.flag_yardie_mission1_passed && $.flag_yardie_mission2_passed && $.flag_yardie_mission3_passed && $.flag_yardie_mission4_passed) {
            return; // TERMINATE_THIS_SCRIPT
        }

        await asyncWait($.mission_trigger_wait_time);

        // xxx: activated after asuka mission 1
        if (!$.flag_asuka_mission1_passed) {
            continue;
        }

        if (!ONMISSION) {
            $.yardie_phone.turnOn();
        } else {
            $.yardie_phone.turnOff();
        }

        if ($.player.isPlaying()) {
            if ($.player.locateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false /* FALSE */)) {
                if (!ONMISSION) {
                    if ($.player.canStartMission()) {
                        $.yardie_phone.turnOff();
                    }
                    if (!$.player.isPlaying()) {
                        continue;
                    }
                    while ($.player.locateOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false /* FALSE */)) {
                        await asyncWait(0);
                        if (!$.player.isPlaying()) {
                            break;
                        }
                    }
                }
            }
        }
    }
}

async function yardie_blip_loop() {
    //	Should be called in yardie_phone_start
    await wait_for('_flag_yardie_phone_start_complete');
    verbose('[+] Activating subscript "yardie_blip_loop"');
    // SCRIPT_NAME YARD_BP

    yardie_blip_loop_inner: while (true) {
        await asyncWait(1000);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
                if ($.flag_yardie_mission4_passed == 1) {
                    return; // TERMINATE_THIS_SCRIPT
                }
                if ($.blip_yardie_created_before == 0) {
                    $.yardie_contact_blip.remove();
                    $.yardie_contact_blip = Blip.AddSpriteForContactPoint(120.7, -272.1, 16.1, 12 /* RADAR_SPRITE_LIZ */);
                    //FLASH_RADAR_BLIP yardie_contact_blip
                    $.blip_yardie_created_before = 1;
                }
            } else {
                //			IF flag_yardie_mission4_passed = 0
                if ($.blip_yardie_created_before == 1) {
                    $.yardie_contact_blip.remove();
                    $.blip_yardie_created_before = 0;
                }
                //			ENDIF
            }
        }
    }
}

// ***************************************Suburban Level************************************

async function sub_save_loop() {
    {
        //	Should be called before main loop
        // SCRIPT_NAME S_SAVE
    }

    if ($._flag_is_loaded_game && $.player.isInAreaOnFoot3D(-670.5, 3.9, 18.0, -660.0, 12.7, 22.0, false /* FALSE */)) {
        log('[*] Loading from suburban area save...');
        await postSave();
    }

    sub_save_loop_inner: while (true) {
        await asyncWait(250);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                //SAVE HOUSE BLIP
                if ($.created_sub_blip_before == 0) {
                    $.suburban_save_blip.remove();
                    $.suburban_save_blip = Blip.AddSpriteForContactPoint(-665.0, -6.5, -100.0, 17 /* RADAR_SPRITE_SAVE */);
                    $.suburban_save_blip.changeDisplay(2 /* BLIP_ONLY */);
                    $.created_sub_blip_before = 1;
                }

                //SAVE HOUSE DOOR
                if ($.player.isInZone('PROJECT')) {
                    if (!ONMISSION) {
                        while (!$.newtowerdoor1.rotate(250.0, 10.0, false /* FALSE */)) {
                            await asyncWait(0);
                        }
                    } else {
                        while (!$.newtowerdoor1.rotate(180.0, 10.0, false /* FALSE */)) {
                            await asyncWait(0);
                        }
                    }

                    //SUBURBAN SAVE HOUSE
                    if ($.player.isPlaying()) {
                        if ($.player.canStartMission()) {
                            if (!ONMISSION) {
                                if ($.player.isInAreaOnFoot3D(-670.5, 3.9, 18.0, -660.0, 12.7, 22.0, false /* FALSE */)) {
                                    $.player.setControl(false /* Off */);
                                    Camera.SetFixedPosition(-678.15, -6.46, 24.49, 0.0, 0.0, 0.0);
                                    Camera.PointAtPoint(-677.39, -5.92, 24.11, 2 /* JUMP_CUT */);
                                    /*
                                            LOAD_MISSION_AUDIO DOOR_5
                                            WHILE NOT HAS_MISSION_AUDIO_LOADED
                                            WAIT 0
                                            ENDWHILE
                                            PLAY_MISSION_AUDIO
                                            */
                                    while (!$.newtowerdoor1.rotate(180.0, 8.0, false /* FALSE */)) {
                                        await asyncWait(0);
                                    }
                                    /*
                                        WHILE NOT HAS_MISSION_AUDIO_FINISHED
                                        WAIT 0

                                        ENDWHILE
                                        */
                                    Game.ActivateSaveMenu(); //THE GAME SAVES/RE-LOADS HERE!!!!!
                                    await asyncWait(0);
                                    while (!Game.HasSaveGameFinished()) {
                                        await asyncWait(0);
                                    }
                                    await postSave();
                                }
                            }
                        }
                    }
                }
            } else {
                if ($.created_sub_blip_before == 1) {
                    $.suburban_save_blip.remove();
                    $.created_sub_blip_before = 0;
                }
            }
        }
    }

    async function postSave() {
        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        if ($.player.isPlaying()) {
            $.player.setControl(false /* Off */);
        }
        await asyncWait(1000);
        /*
        LOAD_MISSION_AUDIO DOOR_6
        WHILE NOT HAS_MISSION_AUDIO_LOADED
        WAIT 0
        ENDWHILE
        PLAY_MISSION_AUDIO
        */
        while (!$.newtowerdoor1.rotate(250.0, 10.0, false /* FALSE */)) {
            await asyncWait(0);
        }
        World.ClearArea(-666.8, -1.8, -100.0, 1.0, true /* TRUE */);
        if ($.player.isPlaying()) {
            $.player.setCoordinates(-666.8, -1.8, -100.0);
            $.player.setHeading(180.0);
            Camera.DoFade(1000, 1 /* FADE_IN */);
            Camera.RestoreJumpcut();
            Camera.SetInFrontOfPlayer();
        }
        await asyncWait(1000);
        if ($.player.isPlaying()) {
            $.player.setControl(true /* on */);
        }
    }
}

async function sub_restart() {
    //	Should be called before main loop
    // SCRIPT_NAME S_RSTRT

    sub_restart_inner: while (true) {
        await asyncWait(1000);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                if ($.flag_commercial_passed == 1) {
                    Restart.AddHospital(-1253.0, -138.2, 57.8, 90.0);
                    Restart.AddPolice(-1259.5, -44.5, 57.8, 90.0);
                    Game.SetMaxWantedLevel(6);
                    verbose('Added suburban restart points and set max wanted level to 6');
                    return; // TERMINATE_THIS_SCRIPT
                }
            }
        }
    }
}

async function hood_phone_start() {
    //	Should be called in love3 mission passed
    await wait_for('flag_love_mission3_passed');
    verbose('[+] Activating subscript "hood_phone_start"');
    // SCRIPT_NAME HOOD_PH

    hood_phone_start_inner: while (true) {
        await asyncWait(10000);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                // Hood Phone
                if (!ONMISSION) {
                    Pager.AddMessage('HOOD1_A', 140, 2, 0);
                    // START_NEW_SCRIPT hood_mission1_loop // xxx: moved to mission monitor
                    // START_NEW_SCRIPT hood_blip_loop // xxx: implemented as a gated script
                    return; // TERMINATE_THIS_SCRIPT
                }
            }
        }
    }
}

async function hood_phone_loop() {
    while (true) {
        if ($.flag_hood_mission1_passed && $.flag_hood_mission2_passed && $.flag_hood_mission3_passed && $.flag_hood_mission4_passed && $.flag_hood_mission5_passed) {
            return; // TERMINATE_THIS_SCRIPT
        }

        await asyncWait($.mission_trigger_wait_time);

        // xxx: activated after love mission 3
        if (!$.flag_love_mission3_passed) {
            continue;
        }

        if (!ONMISSION) {
            $.hood_phone.turnOn();
        } else {
            $.hood_phone.turnOff();
        }

        if ($.player.isPlaying()) {
            if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
                if (!ONMISSION) {
                    if ($.player.canStartMission()) {
                        $.hood_phone.turnOff();
                    }
                    if (!$.player.isPlaying()) {
                        continue;
                    }
                    while ($.player.locateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
                        await asyncWait(0);
                        if (!$.player.isPlaying()) {
                            break;
                        }
                    }
                }
            }
        }
    }
}

async function hood_blip_loop() {
    //	Should be called in hood_phone_start
    await wait_for('_flag_hood_phone_start_complete');
    verbose('[+] Activating subscript "hood_blip_loop"');
    // SCRIPT_NAME HOOD_BP

    hood_blip_loop_inner: while (true) {
        await asyncWait(1000);

        if ($.player.isPlaying()) {
            if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                if ($.flag_hood_mission5_passed == 1) {
                    return; // TERMINATE_THIS_SCRIPT
                }
                if ($.flag_blip_hood_created == 0) {
                    $.hood_contact_blip.remove();
                    $.hood_contact_blip = Blip.AddSpriteForContactPoint(-443.5, -6.1, 3.8, 9 /* RADAR_SPRITE_ICE */);
                    $.flag_blip_hood_created = 1;
                }
            } else {
                if ($.flag_blip_hood_created == 1) {
                    $.hood_contact_blip.remove();
                    $.flag_blip_hood_created = 0;
                }
            }
        }
    }
}

async function luigi_message() {
    // Called after Luigis Girls passed
    await wait_for('flag_luigi_mission1_passed');
    verbose('[+] Activating subscript "luigi_message"');

    // SCRIPT_NAME Luihelp

    await asyncWait(1000);

    if ($.player.isPlaying()) {
        if ($.flag_had_luigi_help_message == 0) {
            if ($.flag_luigi_mission1_passed == 1) {
                Text.PrintHelp('LM1_8'); //"Work for Luigi or piss about!"
                $.flag_had_luigi_help_message = 1;
            }
        }
        if ($.flag_had_luigi_help_message == 1) {
            TIMERA = 0;
            $.flag_had_luigi_help_message = 2;
        }
        while (TIMERA < 6000) {
            await asyncWait(0);
        }
        if ($.flag_had_luigi_help_message == 2) {
            if (!ONMISSION) {
                Text.PrintHelp('LM1_8A'); //"To earn some extra cash, why not 'borrow' a taxi..."
                $.flag_had_luigi_help_message = 3;
            }
        }
    }

    return; // TERMINATE_THIS_SCRIPT
}

async function pistol_message() {
    // Called after Luigis 4 or Joey 2 is passed
    // SCRIPT_NAME pistol1
    while (!$.flag_joey_mission2_passed && !$.flag_luigi_mission4_passed) {
        await asyncWait(0);
    }
    verbose('[+] Activating subscript "pistol_message"');

    pistol_create: while (true) {
        await asyncWait(10000);

        if ($.player.isPlaying()) {
            if (!ONMISSION) {
                if ($.out_of_stock_pistol == 0) {
                    $.SHOP_COLT45.remove();
                    $.SHOP_COLT45_2 = Pickup.Create(173 /* WEAPON_COLT45 */, 1 /* PICKUP_IN_SHOP */, 1068.5, -400.8, 15.2); //AMMU NATION
                    Pager.AddMessage('COLT_IN', 140, 2, 0);
                    $.out_of_stock_pistol = 1;
                }
            }
        }

        if ($.out_of_stock_pistol == 1) {
            return; // TERMINATE_THIS_SCRIPT
        }
    }
}

async function uzi_message() {
    // Called after Joey 4
    // SCRIPT_NAME uzi1

    await wait_for('flag_joey_mission4_passed');
    verbose('[+] Activating subscript "uzi_message"');

    uzi_create: while (true) {
        await asyncWait(5000);

        if ($.player.isPlaying()) {
            if (!ONMISSION) {
                if ($.out_of_stock_uzi == 0) {
                    Pager.AddMessage('UZI_IN', 140, 2, 0);
                    $.out_of_stock_uzi = 1;
                }
            }
        }

        if ($.out_of_stock_uzi == 1) {
            return; // TERMINATE_THIS_SCRIPT
        }
    }
}

async function imp_exp_pager() {
    //To be played after Pulp Friction
    await wait_for('flag_frankie_mission1_passed');
    verbose('[+] Activating subscript "imp_exp_pager"');

    while (true) {
        await asyncWait(100000);

        if (!ONMISSION) {
            if ($.player.isPlaying()) {
                Pager.AddMessage('IMPEXPP', 140, 2, 0);
                return; // TERMINATE_THIS_SCRIPT
            }
        }
    }
}

async function emergency_crane_pager() {
    //To be played after Bomb Da Base
    await wait_for('flag_frankie_mission3_passed');
    verbose('[+] Activating subscript "emergency_crane_pager"');

    while (true) {
        await asyncWait(200000);

        if (!ONMISSION) {
            if ($.player.isPlaying()) {
                Pager.AddMessage('EMVHPUP', 140, 2, 0);
                return; // TERMINATE_THIS_SCRIPT
            }
        }
    }
}

async function van_heist_garage_pager() {
    //To be played after Van Heist
    await wait_for('flag_joey_mission3_passed');
    verbose('[+] Activating subscript "van_heist_garage_pager"');

    while (true) {
        await asyncWait(300000);

        if (!ONMISSION) {
            if ($.player.isPlaying()) {
                Pager.AddMessage('VANHSTP', 140, 2, 0);
                return; // TERMINATE_THIS_SCRIPT
            }
        }
    }
}

main();
