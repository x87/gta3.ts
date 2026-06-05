import { BlipColor, BlipDisplay } from '../../../.config/gta3.enums.mts';
import { $, FAIL, verbose } from '../../utils';
import { Counter, type DisplayedCounter } from '../../utils/scm.mts';


interface BusStop {
    name: string;
    position: Vector3;
}

interface BusRoute {
    level: number;
    name: string;
    starting_point: Vector3;
    starting_heading: float;
    stops: BusStop[];
}

interface Passenger {
    char: Char;
    blip: Blip;
    destination: BusStop;
    boardingDelay: int;
    state: 'waiting' | 'boarding' | 'onboard' | 'unboarding' | 'served';
}

const ROUTES: BusRoute[] = [
    {
        level: LEVEL_INDUSTRIAL,
        name: 'Portland Loop',
        starting_point: { x: 1042.89, y: -662.66, z: 14.92 },
        starting_heading: 180.0,
        stops: [
            stop('Bank', 1041.73, -697.29, 14.57),
            stop('Police Station', 1042.1, -891.52, 14.57),
            stop('Industrial Zone', 1119.76, -953.22, 14.57),
            stop('Portland Harbor', 1315.69, -907.66, 14.57),
            stop('Supa Save', 1315.43, -706.82, 14.91),
            stop('44th St', 1199.37, -447.99, 24.67),
            stop('43rd St', 1121.95, -443.38, 19.57),
            stop('Subway Station', 1023.01, -488.53, 14.57),
            stop('Chinatown', 927.49, -543.94, 14.92),
        ],
    },
    // {
    //     level: LEVEL_COMMERCIAL,
    //     name: 'Staunton Loop',
    //     stops: [
    //         stop('Stadium', -19.4, -274.2, 16.0, -27.05, -269.61, 14.95, -11.73, -278.88, 16.93, [
    //             { x: -23.4, y: -269.0, z: 15.0 },
    //             { x: -15.6, y: -277.5, z: 15.0 },
    //         ]),
    //         stop('Church', 25.5, -1131.3, 26.1, 22.07, -1136.95, 25.14, 28.95, -1125.66, 27.12, [
    //             { x: 23.7, y: -1128.9, z: 25.1 },
    //             { x: 28.2, y: -1135.2, z: 25.1 },
    //         ]),
    //         stop('Casino', 418.4, -1396.0, 25.9, 421.42, -1390.83, 24.95, 415.45, -1401.24, 26.92, [
    //             { x: 420.3, y: -1393.7, z: 25.0 },
    //             { x: 416.2, y: -1398.8, z: 25.0 },
    //             { x: 422.4, y: -1400.4, z: 25.0 },
    //         ]),
    //         stop('University', 175.2, -218.4, 18.0, 183.15, -215.5, 17.02, 167.21, -221.22, 19.29, [
    //             { x: 178.1, y: -216.7, z: 17.1 },
    //             { x: 170.4, y: -220.8, z: 17.1 },
    //         ]),
    //         stop('Shopping Mall', 187.3, -621.4, 26.1, 193.77, -626.22, 25.12, 180.83, -616.51, 27.12, [
    //             { x: 184.9, y: -617.4, z: 25.1 },
    //             { x: 191.7, y: -625.0, z: 25.1 },
    //         ]),
    //         stop('Park', 33.1, -770.7, 27.1, 27.56, -776.42, 26.26, 38.79, -765.06, 28.57, [
    //             { x: 30.8, y: -773.1, z: 26.3 },
    //             { x: 36.5, y: -767.0, z: 26.3 },
    //             { x: 38.4, y: -774.7, z: 26.3 },
    //         ]),
    //     ],
    // },
    // {
    //     level: LEVEL_SUBURBAN,
    //     name: 'Shoreside Loop',
    //     stops: [
    //         stop('Airport', -748.2, -607.9, 11.5, -744.5, -598.6, 8.0, -752.0, -617.2, 15.0, [
    //             { x: -746.8, y: -603.6, z: 11.0 },
    //             { x: -751.4, y: -612.5, z: 11.0 },
    //             { x: -743.0, y: -609.8, z: 11.0 },
    //         ]),
    //         stop('Dam', -1106.2, 519.8, 67.0, -1111.3, 522.9, 65.0, -1101.0, 516.7, 70.0, [
    //             { x: -1108.8, y: 521.4, z: 65.0 },
    //             { x: -1103.6, y: 518.0, z: 65.0 },
    //         ]),
    //         stop('Import/Export', -1111.6, 159.6, 59.0, -1107.9, 163.5, 50.0, -1115.4, 155.6, 68.0, [
    //             { x: -1110.0, y: 162.0, z: 55.0 },
    //             { x: -1114.3, y: 157.5, z: 55.0 },
    //         ]),
    //         stop('Hospital', -1256.7, -142.5, 58.0, -1253.0, -136.6, 55.0, -1260.3, -148.4, 62.0, [
    //             { x: -1254.2, y: -139.5, z: 56.0 },
    //             { x: -1258.6, y: -146.0, z: 56.0 },
    //             { x: -1251.8, y: -145.2, z: 56.0 },
    //         ]),
    //         stop('Park', -225.1, 317.0, 5.0, -230.1, 311.5, 0.0, -220.2, 322.5, 10.0, [
    //             { x: -228.3, y: 314.0, z: 4.0 },
    //             { x: -221.8, y: 321.0, z: 4.0 },
    //         ]),
    //         stop('Projects', -677.8, 91.8, 17.0, -682.5, 95.3, 10.0, -673.0, 88.4, 25.0, [
    //             { x: -680.7, y: 94.0, z: 14.0 },
    //             { x: -675.2, y: 89.7, z: 14.0 },
    //         ]),
    //     ],
    // },
];

let activePassengers: Passenger[] = [];
let passengerCounter: DisplayedCounter;
let busState: 'arrived' | 'loading' | 'moving' | 'approaching' = 'moving';
let currentStop: BusStop | undefined;
let bus1_car: Car;
let bus1_stop_blip: Blip;
let completedRoute = false;

class BusMissionCancelledError extends Error {
    constructor(key: string) {
        super(key);
        this.name = 'BusMissionCancelledError';
    }
}

async function body() {
    ONMISSION = true;
    await asyncWait(0);

    bus1_car = $.player.storeCarIsIn();

    if (!$.player.isPlaying() || !($.player.isInModel(CAR_BUS) || $.player.isInModel(CAR_COACH)) || !$.player.isInAnyCar()) {
        FAIL('bus_driver_no_bus');
    }

    const route = selectRoute();
    if (!route) {
        FAIL('bus_driver_no_route');
    }

    await nextStop(route);
    passengerCounter = new Counter({ text: 'PASSENGERS', initialValue: 0 }).display();

    while (true) {
        await asyncWait(0);
        await processMission();
        await processPassengers();
        await processBus(route);
    }
}

async function processBus(route: BusRoute) {
    let stopToServe = currentStop!;

    switch (busState) {
        case 'moving': {
            if (bus1_car.locate3D(stopToServe.position.x, stopToServe.position.y, stopToServe.position.z, 20.0, 20.0, 20.0, false)) {
                if (!completedRoute) {
                    Text.Print('BUSSTOP', 2500, 1);
                }
                busState = 'approaching';
            }
        }
        case 'approaching': {
            if (bus1_car.locateStopped3D(currentStop!.position.x, currentStop!.position.y, currentStop!.position.z, 7.0, 7.0, 7.0, true)) {
                busState = 'arrived';
                assert(currentStop, 'Current stop is undefined');
                verbose(`[~] Bus arrived at stop: ${currentStop!.name}`);
            }
            break;
        }
        case 'arrived': {
            busState = 'loading';
            TIMERA = 0;
            break;
        }
        case 'loading': {
            if (
                !hasRoomForPassengers() &&
                activePassengers.some((p) => p.state === 'boarding' || p.state === 'waiting') &&
                !activePassengers.some((p) => p.state === 'unboarding')
            ) {
                Text.PrintNow('BUSFULL', 2000, 1);
                for (let passenger of activePassengers) {
                    if (passenger.state === 'boarding' || passenger.state === 'waiting') {
                        passenger.state = 'served';
                        passenger.blip.remove();
                        passenger.char.markAsNoLongerNeeded();
                    }
                }
            }
            if (activePassengers.every((p) => p.state === 'onboard')) {
                busState = 'moving';
                await nextStop(route);
            }
            break;
        }
    }

    passengerCounter.value = activePassengers.filter((p) => p.state === 'onboard').length;
}

async function processPassengers() {
    let stopToServe = currentStop!;
    for (const passenger of activePassengers) {
        if (Char.IsDead(passenger.char)) {
            passenger.state = 'served';
            passenger.blip.remove();
            passenger.char.markAsNoLongerNeeded();
        }
    }
    activePassengers = activePassengers.filter((p) => p.state != 'served');

    for (let i = 0; i < activePassengers.length; i++) {
        let passenger = activePassengers[i];
        switch (passenger.state) {
            case 'boarding': {
                if (passenger.char.isInCar(bus1_car)) {
                    passenger.state = 'onboard';
                    verbose(`Passenger[${i}] got onboard, destination: ${passenger.destination.name}`);
                    passenger.blip.remove();
                } else {
                    passenger.char.setObjEnterCarAsPassenger(bus1_car);
                }
                break;
            }
            case 'unboarding': {
                if (!passenger.char.isInCar(bus1_car)) {
                    passenger.state = 'served';
                    passenger.char.markAsNoLongerNeeded();

                    $.player.addScore(5);
                    assert(passenger.destination, 'Unboarding passenger destination is undefined');
                    verbose(`Passenger[${i}] finished unboarding, destination: ${passenger.destination.name}`);
                }
                break;
            }
            case 'waiting': {
                if (busState === 'arrived' || busState === 'loading') {
                    // passenger.boardingDelay -= 100;
                    if (passenger.boardingDelay > TIMERA) {
                        break;
                    }

                    // check nobody else is boarding
                    // if (activePassengers.some((p) => p.state === 'boarding')) {
                    //     break;
                    // }
                    if (!hasRoomForPassengers()) {
                        break;
                    }
                    passenger.state = 'boarding';
                    verbose(`Passenger[${i}] started boarding, destination: ${passenger.destination.name}`);
                    passenger.char.setObjEnterCarAsPassenger(bus1_car);
                    if (Math.RandomIntInRange(0, 100) < 30) {
                        passenger.char.setRunning(true);
                    }
                }
                break;
            }
            case 'onboard': {
                if (passenger.destination === stopToServe && busState === 'arrived') {
                    passenger.state = 'unboarding';
                    verbose(`Passenger[${i}] started unboarding, destination: ${passenger.destination.name}`);
                    passenger.char.setObjLeaveCar(bus1_car);
                }
                break;
            }
        }
    }
}

function createStopBlip(stopToServe: BusStop) {
    assert(stopToServe, 'stopToServe is undefined in createStopBlip');
    bus1_stop_blip?.remove();
    bus1_stop_blip = Blip.AddForCoord(stopToServe.position.x, stopToServe.position.y, stopToServe.position.z).changeColor(BlipColor.Yellow).changeDisplay(BlipDisplay.BlipOnly);
    verbose(`[~] Bus route stop: ${stopToServe.name}`);
}

function selectRandomNextStop(currentStop: BusStop, route: BusStop[]) {
    // let currentStopIndex = route.findIndex((stop) => stop === currentStop);
    // const otherStops = route.slice(currentStopIndex + 1);
    // return otherStops[Math.floor(Math.random() * otherStops.length)];
    if (route.length === 1) {
        return route[0];
    }
    let nextStop: BusStop;
    do {
        nextStop = route[Math.floor(Math.random() * route.length)];
    } while (nextStop === currentStop);

    return nextStop;
}

function spawnPassengers(stopToServe: BusStop, route: BusRoute) {
    assert(stopToServe, 'stopToServe is undefined in spawnPassengers');
    let location = Path.GetClosestCharNode(stopToServe.position.x, stopToServe.position.y, stopToServe.position.z);
    let count = Math.RandomIntInRange(0, 5);
    verbose(`Spawning ${count} passengers at stop: ${stopToServe.name}`);
    for (let i = 0; i < count; i++) {
        const passenger = Char.CreateRandom(location.nodeX + Math.RandomFloatInRange(-1, 1), location.nodeY + Math.RandomFloatInRange(-1, 1), location.nodeZ);
        passenger.setIdle();
        passenger.clearThreatSearch();
        passenger.setHeedThreats(false);
        activePassengers.push({
            char: passenger,
            destination: selectRandomNextStop(stopToServe, route.stops),
            blip: Blip.AddForCharOld(passenger, BlipColor.Green, BlipDisplay.MarkerOnly),
            state: 'waiting',
            boardingDelay: Math.RandomIntInRange(0, 2000),
        });
    }
}

async function processMission() {
    if (!$.player.isPlaying()) {
        FAIL('bus_driver_player_dead');
    }
    if (Car.IsDead(bus1_car)) {
        FAIL('bus_driver_destroyed');
    }
    if (!$.player.isInCar(bus1_car)) {
        FAIL('bus_driver_left_bus');
    }
    if (bus1_car.isUpsidedown() && bus1_car.isStopped()) {
        FAIL('bus_driver_upside_down');
    }

    $.controlmode = Pad.GetControllerMode();
    if (!($.controlmode == 3)) {
        if (Pad.IsButtonPressed(PAD1, RIGHTSHOCK) && ONMISSION) {
            while (Pad.IsButtonPressed(PAD1, RIGHTSHOCK)) {
                await asyncWait(0);
            }
            throw new BusMissionCancelledError('BUSCANC');
        }
    } else {
        if (Pad.IsButtonPressed(PAD1, SQUARE) && ONMISSION) {
            while (Pad.IsButtonPressed(PAD1, SQUARE)) {
                await asyncWait(0);
            }
            throw new BusMissionCancelledError('BUSCANC');
        }
    }
}

function assert(value: unknown, message: string): asserts value {
    if (!value) {
        throw new Error(message);
    }
}

async function onPassed() {}

async function onFailed(error: unknown) {
    if (error instanceof BusMissionCancelledError) {
        Text.PrintNow(error.message, 2000, 1);
        return;
    }

    log(`[-] Bus Driver failed: ${error}`);
    Text.PrintBig('M_FAIL', 2000, 1);
}

async function cleanup() {
    ONMISSION = false;
    bus1_stop_blip?.remove();
    for (const passenger of activePassengers) {
        if (!Char.IsDead(passenger.char)) {
            passenger.blip.remove();
            passenger.char.markAsNoLongerNeeded();
        }
    }
    passengerCounter?.clear();
    Mission.Finish();
}

// -----------------------------------------------------------------------------------------------------------------------------------

async function nextStop(route: BusRoute) {
    verbose(`[~] Heading from stop ${currentStop ? currentStop.name : 'N/A'} to the next stop`);

    if (currentStop === undefined) {
        currentStop = route.stops[0];

        if (!bus1_car.locate3D(currentStop.position.x, currentStop.position.y, currentStop.position.z, 10.0, 10.0, 10.0, false)) {
            World.ClearAreaOfCars(route.starting_point.x - 5.0, route.starting_point.y - 5.0, 5.0, route.starting_point.x + 5.0, route.starting_point.y + 5.0, 5.0);
            bus1_car.setCoordinates(route.starting_point.x, route.starting_point.y, route.starting_point.z).setHeading(route.starting_heading);

            Camera.SetBehindPlayer();
        }
    } else if (currentStop === route.stops[route.stops.length - 1]) {
        await completeRoute(route);
        let { hours } = Clock.GetTimeOfDay();
        if (hours >= 22 || hours < 6) {
            Text.PrintNow('BUSLATE', 5000, 1);
            throw new BusMissionCancelledError('BUSCANN');
        }
        currentStop = route.stops[0];
    } else {
        const currentStopIndex = route.stops.findIndex((stop) => stop === currentStop!);
        currentStop = route.stops[currentStopIndex! + 1];

        Text.Print('BUSNEXT', 1500, 1);
        Sound.AddOneOffSound(0.0, 0.0, 0.0, SOUND_PART_MISSION_COMPLETE);
    }

    createStopBlip(currentStop);
    spawnPassengers(currentStop, route);
}

async function completeRoute(route: BusRoute) {
    assert(route, 'Route is undefined');
    verbose(`[+] Completed bus route ${route.name}`);
    const bonus = 5000;
    Text.PrintWithNumberNow('BUSBON', bonus, 3000, 1);
    $.player.addScore(bonus);
    completedRoute = true;
}

function stop(name: string, x: number, y: number, z: number): BusStop {
    return {
        name,
        position: { x, y, z },
    };
}

function selectRoute() {
    if ($.player.isInZone('SUB_ZON') && Streaming.IsCollisionInMemory(LEVEL_SUBURBAN)) {
        return ROUTES.find((route) => route.level == LEVEL_SUBURBAN);
    }
    if ($.player.isInZone('COM_ZON') && Streaming.IsCollisionInMemory(LEVEL_COMMERCIAL)) {
        return ROUTES.find((route) => route.level == LEVEL_COMMERCIAL);
    }
    if ($.player.isInZone('IND_ZON') && Streaming.IsCollisionInMemory(LEVEL_INDUSTRIAL)) {
        return ROUTES.find((route) => route.level == LEVEL_INDUSTRIAL);
    }

    if (Streaming.IsCollisionInMemory(LEVEL_COMMERCIAL)) {
        return ROUTES.find((route) => route.level == LEVEL_COMMERCIAL);
    }
    if (Streaming.IsCollisionInMemory(LEVEL_SUBURBAN)) {
        return ROUTES.find((route) => route.level == LEVEL_SUBURBAN);
    }
    if (Streaming.IsCollisionInMemory(LEVEL_INDUSTRIAL)) {
        return ROUTES.find((route) => route.level == LEVEL_INDUSTRIAL);
    }
    return undefined;
}

function hasRoomForPassengers(): boolean {
    let maxPassengers = bus1_car.getMaximumNumberOfPassengers();
    let currentPassengers = bus1_car.getNumberOfPassengers();
    return currentPassengers < maxPassengers;
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
