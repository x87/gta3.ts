// Generated from Main/Industrial/pickups.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function main_pickups() {
  // VAR_INT ind_pickup1 ind_pickup2 ind_pickup3 ind_pickup4 ind_pickup5 ind_pickup6 ind_pickup7 ind_pickup8 ind_pickup9 ind_pickup10
  // VAR_INT ind_pickup11 ind_pickup12 ind_pickup13 ind_pickup14 ind_pickup15 ind_pickup16 ind_pickup17 ind_pickup18 ind_pickup19 ind_pickup20
  // VAR_INT ind_pickup21 ind_pickup22 ind_pickup23 ind_pickup24 ind_pickup25 ind_pickup26 ind_pickup27 ind_pickup28 ind_pickup29 ind_pickup30
  // VAR_INT ind_pickup31 ind_pickup32 ind_pickup33 ind_pickup34 ind_pickup35 ind_pickup36 ind_pickup37 ind_pickup38 ind_pickup39 ind_pickup40
  // VAR_INT info_pickup1 info_pickup2 info_pickup3 info_pickup4 info_pickup5 info_pickup6 ind_pickup41
  // VAR_INT info_pickup7a info_pickup7b info_pickup8 info_pickup9 info_pickup10a info_pickup10b info_pickup10c
  // VAR_INT FREE_BASEBALLBAT1 FREE_BASEBALLBAT2 FREE_BASEBALLBAT3
  $.current_time = 0;
  $.time_since_murdering_shopkeeper1 = -60000;
  $.out_of_stock_uzi = 0;
  $.out_of_stock_pistol = 0;
  $.FREE_BASEBALLBAT1 = Pickup.Create(153 /* WEAPON_BAT */, 2 /* PICKUP_ON_STREET */, 883.5, -302.1, 8.0);
  $.ind_pickup1 = Pickup.CreateWithAmmo(152 /* WEAPON_AK47 */, 14 /* PICKUP_ON_STREET_SLOW */, 60, 1249.0, -858.5, 20.6);
  $.ind_pickup2 = Pickup.CreateWithAmmo(162 /* WEAPON_FLAME */, 14 /* PICKUP_ON_STREET_SLOW */, 150, 1018.3, -30.8, 22.5);
  $.ind_pickup3 = Pickup.CreateWithAmmo(157 /* WEAPON_SHOTGUN */, 14 /* PICKUP_ON_STREET_SLOW */, 10, 1217.3, -255.2, 33.1);
  $.ind_pickup4 = Pickup.CreateWithAmmo(157 /* WEAPON_SHOTGUN */, 14 /* PICKUP_ON_STREET_SLOW */, 10, 939.0, -113.3, 3.7);
  $.ind_pickup5 = Pickup.CreateWithAmmo(159 /* WEAPON_UZI */, 14 /* PICKUP_ON_STREET_SLOW */, 50, 1138.7, -1035.5, 20.2);
  $.ind_pickup6 = Pickup.CreateWithAmmo(159 /* WEAPON_UZI */, 14 /* PICKUP_ON_STREET_SLOW */, 50, 1309.5, -380.9, 40.2);
  $.ind_pickup7 = Pickup.CreateWithAmmo(159 /* WEAPON_UZI */, 14 /* PICKUP_ON_STREET_SLOW */, 50, 1224.8, 141.9, 9.3);
  $.ind_pickup39 = Pickup.CreateWithAmmo(154 /* WEAPON_COLT45 */, 14 /* PICKUP_ON_STREET_SLOW */, 24, 1017.6, -960.9, 21.2);
  $.ind_pickup40 = Pickup.CreateWithAmmo(152 /* WEAPON_AK47 */, 14 /* PICKUP_ON_STREET_SLOW */, 120, 1253.6578, -314.1173, 34.1);
  $.ind_pickup8 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 1147.8, -597.1, 14.9);
  $.ind_pickup9 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 1147.8, -585.3, 14.9);
  $.ind_pickup10 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 1252.8, -854.7, 20.6);
  $.ind_pickup11 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 822.5, -1048.7, 14.3);
  $.ind_pickup12 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 918.0, -735.9, 14.6);
  $.ind_pickup13 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 1391.1, -1023.5, 11.9);
  $.ind_pickup14 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 1282.8, -815.4, 15.0);
  $.ind_pickup32 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 1267.6, -296.6, 39.9);
  $.ind_pickup33 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 1141.8, -63.0, 7.4);
  $.ind_pickup34 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 938.5, -181.9, 4.9);
  $.ind_pickup35 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 972.9, -413.2, 15.1);
  $.ind_pickup36 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 1387.7, -456.5, 49.6);
  $.ind_pickup15 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 1116.4, -1237.4, 11.9);
  $.ind_pickup16 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 1250.2, -852.0, 20.6);
  $.ind_pickup17 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 1588.9, -624.0, 11.8);
  $.ind_pickup18 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 1236.0, -920.6, 15.1);
  $.ind_pickup38 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 1138.7, -1033.5, 20.2);
  $.ind_pickup41 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 1253.6578, -317.9105, 34.1);
  $.ind_pickup19 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, 1394.6, -865.4, 11.8);
  $.ind_pickup20 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, 1087.5, -156.5, 9.8);
  $.ind_pickup21 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, 1247.1, -855.1, 20.6);
  $.ind_pickup22 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, 878.3, -521.3, 16.5);
  $.ind_pickup37 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, 1161.1, -546.9, 21.5);
  $.ind_pickup23 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 790.0, -560.7, 27.0);
  $.ind_pickup24 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 1283.7, -388.7, 34.6);
  $.ind_pickup25 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 1440.2, -891.1, 11.8);
  $.ind_pickup27 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 1078.9, -912.5, 15.2);
  $.ind_pickup28 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 995.8, -438.8, 22.7);
  $.ind_pickup29 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 1061.9, -567.7, 16.6);
  $.ind_pickup30 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 859.6, -981.9, 10.5);
  $.ind_pickup31 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 922.2, -848.1, 14.9);
  // VAR_INT com_pickup1 com_pickup2 com_pickup3 com_pickup4 com_pickup5 com_pickup6 com_pickup7 com_pickup8 com_pickup9 com_pickup10
  // VAR_INT com_pickup11 com_pickup12 com_pickup13 com_pickup14 com_pickup15 com_pickup16 com_pickup17 com_pickup18 com_pickup19 com_pickup20
  // VAR_INT com_pickup21 com_pickup22 com_pickup23 com_pickup24 com_pickup25 com_pickup26 com_pickup27 com_pickup28 com_pickup29 com_pickup30
  // VAR_INT com_pickup31 com_pickup32 com_pickup33 com_pickup34 com_pickup35 com_pickup36 com_pickup37 com_pickup38 com_pickup40 com_pickup41
  $.FREE_BASEBALLBAT2 = Pickup.Create(153 /* WEAPON_BAT */, 2 /* PICKUP_ON_STREET */, 99.1, -478.7, 15.9);
  $.com_pickup1 = Pickup.CreateWithAmmo(158 /* WEAPON_SNIPER */, 14 /* PICKUP_ON_STREET_SLOW */, 15, -77.5, -482.7, 28.8);
  $.com_pickup2 = Pickup.CreateWithAmmo(152 /* WEAPON_AK47 */, 14 /* PICKUP_ON_STREET_SLOW */, 60, 18.9, -1240.9, 27.8);
  $.com_pickup3 = Pickup.CreateWithAmmo(157 /* WEAPON_SHOTGUN */, 14 /* PICKUP_ON_STREET_SLOW */, 10, 93.1, -724.2, 31.5);
  $.com_pickup4 = Pickup.CreateWithAmmo(155 /* WEAPON_MOLOTOV */, 14 /* PICKUP_ON_STREET_SLOW */, 10, 202.8, -108.3, 20.1);
  $.com_pickup5 = Pickup.CreateWithAmmo(152 /* WEAPON_AK47 */, 14 /* PICKUP_ON_STREET_SLOW */, 60, 422.4, -92.0, 16.14);
  $.com_pickup6 = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 14 /* PICKUP_ON_STREET_SLOW */, 60, -31.45, -1456.38, 26.13);
  $.com_pickup7 = Pickup.CreateWithAmmo(157 /* WEAPON_SHOTGUN */, 14 /* PICKUP_ON_STREET_SLOW */, 10, -253.0, -1340.34, 5.85);
  $.com_pickup8 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 182.9, -16.3, 16.2);
  $.com_pickup9 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 222.6, 16.0, 16.2);
  $.com_pickup10 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 513.6, -680.6, 16.6);
  $.com_pickup11 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -25.3, -1142.3, 26.1);
  $.com_pickup12 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -48.56, -579.0, 26.2);
  $.com_pickup13 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -26.35, -767.63, 26.17);
  $.com_pickup14 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -24.67, -1275.76, 25.71);
  $.com_pickup15 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -178.34, -1409.0, 26.1);
  $.com_pickup16 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 228.46, -1516.33, 27.42);
  $.com_pickup17 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 200.0, -1219.14, 26.92);
  $.com_pickup18 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 371.25, -1028.1, 26.03);
  $.com_pickup19 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 189.7, -602.2, 28.1);
  $.com_pickup40 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 398.4569, -289.0348, 23.2);
  $.com_pickup20 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 410.1, -935.2, 16.1);
  $.com_pickup21 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, -80.5, -482.7, 28.8);
  $.com_pickup22 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 22.1, -1241.1, 27.8);
  $.com_pickup23 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 151.75, -106.4, 20.16);
  $.com_pickup24 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, -44.7, -1456.38, 26.13);
  $.com_pickup41 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 398.4569, -285.3912, 23.2);
  $.com_pickup25 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, 169.3, -990.5, 29.5);
  $.com_pickup26 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, 231.8, -338.7, 31.7);
  $.com_pickup27 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, 89.0, -931.8, 27.1);
  $.com_pickup28 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, 212.4, -896.6, 23.15);
  $.com_pickup29 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 320.7, -782.13, 28.8);
  $.com_pickup30 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 351.0, -1176.6, 16.7);
  $.com_pickup31 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 108.3, -1398.7, 21.8);
  $.com_pickup32 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 419.7, -1439.6, 25.6);
  $.com_pickup33 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 283.6, -809.7, 28.9);
  $.com_pickup34 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 181.3, -262.4, 15.9);
  $.com_pickup35 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, -16.4, -458.6, 18.6);
  $.com_pickup36 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, -150.5, -112.8, 16.16);
  $.com_pickup37 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 357.58, -898.55, 23.53);
  $.com_pickup38 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 412.2, -1564.6, 24.5);
  // VAR_INT sub_pickup1 sub_pickup2 sub_pickup3 sub_pickup4 sub_pickup6 sub_pickup7 sub_pickup8 sub_pickup9 sub_pickup10
  // VAR_INT sub_pickup11 sub_pickup12 sub_pickup13 sub_pickup14 sub_pickup15 sub_pickup16 sub_pickup17 sub_pickup18 sub_pickup19 sub_pickup20
  // VAR_INT sub_pickup21 sub_pickup22 sub_pickup23 sub_pickup24 sub_pickup25 sub_pickup26 sub_pickup27 sub_pickup28 sub_pickup29 sub_pickup30
  // VAR_INT sub_pickup31
  $.FREE_BASEBALLBAT3 = Pickup.Create(153 /* WEAPON_BAT */, 2 /* PICKUP_ON_STREET */, -661.1, -3.8, 18.8);
  $.sub_pickup1 = Pickup.CreateWithAmmo(152 /* WEAPON_AK47 */, 14 /* PICKUP_ON_STREET_SLOW */, 60, -1065.2, -153.7, 33.7);
  $.sub_pickup2 = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 14 /* PICKUP_ON_STREET_SLOW */, 60, -555.0, 311.2, 70.8);
  $.sub_pickup3 = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 14 /* PICKUP_ON_STREET_SLOW */, 60, -1153.6, 440.3, 35.5);
  $.sub_pickup4 = Pickup.CreateWithAmmo(157 /* WEAPON_SHOTGUN */, 14 /* PICKUP_ON_STREET_SLOW */, 15, -1141.9, 333.0, 3.4);
  $.sub_pickup6 = Pickup.CreateWithAmmo(158 /* WEAPON_SNIPER */, 14 /* PICKUP_ON_STREET_SLOW */, 5, -973.8, 455.7, 23.5);
  $.sub_pickup7 = Pickup.CreateWithAmmo(156 /* WEAPON_ROCKET */, 14 /* PICKUP_ON_STREET_SLOW */, 3, -855.4, 304.6, 49.1);
  $.sub_pickup31 = Pickup.CreateWithAmmo(162 /* WEAPON_FLAME */, 14 /* PICKUP_ON_STREET_SLOW */, 300, -632.7, -589.3, 18.8);
  $.sub_pickup8 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -1247.5, -79.5, 58.8);
  $.sub_pickup9 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -1247.5, -82.5, 58.8);
  $.sub_pickup10 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -1120.7, 586.4, 68.6);
  $.sub_pickup11 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -1072.5, 449.0, 23.6);
  $.sub_pickup12 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -1142.0, 330.6, 3.4);
  $.sub_pickup13 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -1198.6, -39.7, 53.2);
  $.sub_pickup14 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -1384.6, -747.4, 10.9);
  $.sub_pickup15 = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, -466.6, 30.4, 3.9);
  $.sub_pickup16 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, -426.9, 290.2, 62.9);
  $.sub_pickup17 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, -698.0, -560.7, 22.4);
  $.sub_pickup18 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, -1066.7, 47.0, 48.9);
  $.sub_pickup19 = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, -1186.9, -40.1, 53.2);
  $.sub_pickup20 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, -710.1, 180.3, 28.7);
  $.sub_pickup21 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, -501.1, 62.9, 3.8);
  $.sub_pickup22 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, -963.0, -113.4, 34.2);
  $.sub_pickup23 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, -1374.6, -747.4, 10.9);
  $.sub_pickup24 = Pickup.Create(adrenaline, 14 /* PICKUP_ON_STREET_SLOW */, -1092.0, -24.2, 48.9);
  $.sub_pickup25 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, -1247.8, 136.0, 68.5);
  $.sub_pickup26 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, -468.6, -62.0, 3.8);
  $.sub_pickup27 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, -1107.5, -77.2, 46.1);
  $.sub_pickup28 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, -618.7, -722.6, 18.9);
  $.sub_pickup29 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, -1252.4, -641.6, 11.1);
  $.sub_pickup30 = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, -853.4, -255.6, 32.9);
  // VAR_INT heal_info wanted_info flag_health_info flag_wanted_info
  // VAR_INT heal_info_trip wanted_info_trip
  $.flag_health_info = 0;
  $.flag_wanted_info = 0;
  $.heal_info_trip = 0;
  $.wanted_info_trip = 0;
  $.info_pickup1 = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 921.3, -352.8, 10.9);
  // START_NEW_SCRIPT check_info_pickup
  // UNKNOWN_COMMAND info_pickup1 1
throw new Error("Unknown: info_pickup1");
  $.info_pickup2 = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 1279.5, -98.3, 15.0);
  // START_NEW_SCRIPT check_info_pickup
  // UNKNOWN_COMMAND info_pickup2 2
throw new Error("Unknown: info_pickup2");
  $.info_pickup3 = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 1065.0, -392.8, 14.9);
  // START_NEW_SCRIPT check_info_pickup
  // UNKNOWN_COMMAND info_pickup3 3
throw new Error("Unknown: info_pickup3");
  $.info_pickup4 = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 889.5, -316.1, 8.7);
  // START_NEW_SCRIPT check_info_pickup
  // UNKNOWN_COMMAND info_pickup4 4
throw new Error("Unknown: info_pickup4");
  $.info_pickup5 = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 889.5, -305.8, 8.7);
  // START_NEW_SCRIPT check_info_pickup
  // UNKNOWN_COMMAND info_pickup5 5
throw new Error("Unknown: info_pickup5");
  $.info_pickup6 = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 1130.4, 52.8, 0.4);
  // START_NEW_SCRIPT check_info_pickup
  // UNKNOWN_COMMAND info_pickup6 6
throw new Error("Unknown: info_pickup6");
  $.info_pickup7a = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 1028.8, -927.4, 15.0);
  // START_NEW_SCRIPT check_info_pickup_2
  // UNKNOWN_COMMAND info_pickup7a 7
throw new Error("Unknown: info_pickup7a");
  $.info_pickup7b = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 916.5, -472.0, -18.8);
  // START_NEW_SCRIPT check_info_pickup_2
  // UNKNOWN_COMMAND info_pickup7b 11
throw new Error("Unknown: info_pickup7b");
  $.info_pickup8 = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 758.7, 164.2, -19.9);
  // START_NEW_SCRIPT check_info_pickup_2
  // UNKNOWN_COMMAND info_pickup8 8
throw new Error("Unknown: info_pickup8");
  $.info_pickup9 = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 991.9, -471.3, 3.7);
  // START_NEW_SCRIPT check_info_pickup_2
  // UNKNOWN_COMMAND info_pickup9 9
throw new Error("Unknown: info_pickup9");
  $.info_pickup10a = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 1318.7, -524.9, 43.3);
  // START_NEW_SCRIPT check_info_pickup_2
  // UNKNOWN_COMMAND info_pickup10a 10
throw new Error("Unknown: info_pickup10a");
  $.info_pickup10b = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 772.0, -588.4, 23.9);
  // START_NEW_SCRIPT check_info_pickup_2
  // UNKNOWN_COMMAND info_pickup10b 10
throw new Error("Unknown: info_pickup10b");
  $.info_pickup10c = Pickup.Create(info, 2 /* PICKUP_ON_STREET */, 1039.0, -149.8, 23.9);
  // START_NEW_SCRIPT check_info_pickup_2
  // UNKNOWN_COMMAND info_pickup10c 10
throw new Error("Unknown: info_pickup10c");
  return;
}

export async function pickups() {

}
