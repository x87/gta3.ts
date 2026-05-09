// Sanny Builder Library v0.392
/// <reference no-default-lib="true"/>
/// <reference lib="es2020" />
/** Integer value */
type int = (number & { _int: never }) | number;
/** Floating-point value */
type float = (number & { _float: never }) | number;
/** Vector3 type */
type Vector3 = { x: float; y: float; z: float };

/** Pauses the script execution for the specified amount of time in milliseconds */
declare function wait(delay: int): void;
/** Returns a Promise that resolves after given time in milliseconds */
declare function asyncWait(delay: int): Promise<void>;
/** Displays a black text box with custom text. Not available on an `unknown` host */
declare function showTextBox(text: string): void;
/** Prints serialized values to the cleo_redux.log */
declare function log(...values: Array<any>): void;
/** Executes the command by name with the given arguments */
declare function native<T>(name: string, ...args: any[]): T;
/** Terminates the script and optionally writes a reason to the log file */
declare function exit(reason?: string): void;
/** Creates a new event listener https://re.cleo.li/docs/en/events.html */
declare function addEventListener<T>(event: string, callback: (event: CleoEvent<T>) => void): () => void;
/** Dispatches an event https://re.cleo.li/docs/en/events.html */
declare function dispatchEvent<T>(event: string, data?: T): void;
// Sets a timer which executes a function once the timer expires
declare function setTimeout(callback: () => void, delay?: int, ...args: any[]): number;
// Repeatedly calls a function with a fixed time delay between each call
declare function setInterval(callback: () => void, delay?: int, ...args: any[]): number;
// Cancels a timeout previously established by calling setTimeout()
declare function clearTimeout(id: number): void;
// Cancels a timed, repeating action which was previously established by a call to setInterval()
declare function clearInterval(id: number): void;

/** Current host name */
declare const HOST:
  | "re3"
  | "reVC"
  | "gta3"
  | "vc"
  | "sa"
  | "gta3_unreal"
  | "vc_unreal"
  | "sa_unreal"
  | "gta_iv"
  | "bully"
  | "unknown";
/** Is player on a mission flag. Not available on an `unknown` host */
declare var ONMISSION: boolean;
/** Self-incrementing timer #1 */
declare var TIMERA: int;
/** Self-incrementing timer #2 */
declare var TIMERB: int;
/** Current file's directory */
declare const __dirname: string;
/** Current file's path */
declare const __filename: string;

declare interface Version {
  readonly major: string | undefined;
  readonly minor: string | undefined;
  readonly patch: string | undefined;
  readonly pre: string | undefined;
  readonly build: string | undefined;
  toString(): string;
}
declare interface CleoEvent<T = object> {
  name: string;
  data: T | undefined;
}
interface CLEO {
  /** CLEO Redux version */
  readonly version: Version;
  /** Version of API definitions from Sanny Builder Library */
  readonly apiVersion: Version;
  /** Version of the host's exe file. Not available on some hosts */
  readonly hostVersion?: Version;
  debug: {
    /** Enables or disables tracing of executed commands in cleo_redux.log */
    trace(flag: boolean): void;
  };
  /** Spawns a new instance of a script at path and optionally sets initial values for the variables */
  runScript(path: string, args?: object): void;
}

declare const CLEO: CLEO;
interface FxtStore {
  /**
   * Inserts new text content in the script's fxt storage overwriting the previous content and shadowing static fxt with the same key
   * @param key GXT key that can be used in text commands (7 characters max)
   * @param value text content
   * @param [isGlobal] if true, the text affects global FXT storage
   */
  insert(key: string, value: string, isGlobal?: boolean): void;
  /**
   * Removes the text content associated with the key in the local fxt storage
   * @param key GXT key
   * @param [isGlobal] if true, the text affects global FXT storage
   */
  delete(key: string, isGlobal?: boolean): void;
}

declare const FxtStore: FxtStore;
/** Audio Effects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Audio */
interface Audio {
    /** Unloads the mission audio (03CF), freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_MISSION_AUDIO [040D]*/
    ClearMissionAudio(): void;
    /** Returns true if the audio (03CF) is no longer playing
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_MISSION_AUDIO_FINISHED [03D2]*/
    HasMissionAudioFinished(): boolean;
    /** Returns true if the mission audio has loaded (03CF)
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_MISSION_AUDIO_LOADED [03D0]*/
    HasMissionAudioLoaded(): boolean;
    /** Loads the end of game music
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_END_OF_GAME_TUNE [0451]*/
    LoadEndOfGameTune(): void;
    /** Loads mission audio from the audio directory
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_MISSION_AUDIO [03CF]*/
    LoadMissionAudio(audio: import('./enums').SfxMission): void;
    /** Plays the theme tune
    *
    * https://library.sannybuilder.com/#/gta3?q=PLAY_END_OF_GAME_TUNE [043F]*/
    PlayEndOfGameTune(): void;
    /** Plays the loaded sound (03CF)
    *
    * https://library.sannybuilder.com/#/gta3?q=PLAY_MISSION_AUDIO [03D1]*/
    PlayMissionAudio(): void;
    /** Plays an audio file with the specified ID from the Audio directory
    *
    * https://library.sannybuilder.com/#/gta3?q=PLAY_MISSION_PASSED_TUNE [0394]*/
    PlayMissionPassedTune(soundId: int): void;
    /** Plays police radio message audio reporting the suspect has last been seen at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=POLICE_RADIO_MESSAGE [03AA]*/
    PoliceRadioMessage(x: float, y: float, z: float): void;
    /** Sets the location of the mission audio (03CF) where it can be heard
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_MISSION_AUDIO_POSITION [03D7]*/
    SetMissionAudioPosition(x: float, y: float, z: float): void;
    /** Sets whether sounds should fade along with the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_MUSIC_DOES_FADE [043C]*/
    SetMusicDoesFade(state: boolean): void;
    /** Sets the current radio station that is playing, if the player is in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_RADIO_CHANNEL [041E]*/
    SetRadioChannel(channel: import('./enums').RadioChannel, startFromMs: int): void;
    /** Stops the theme tune
    *
    * https://library.sannybuilder.com/#/gta3?q=STOP_END_OF_GAME_TUNE [0440]*/
    StopEndOfGameTune(): void;
}
declare var Audio: Audio
/** Markers and Radar Icons
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Blip */
declare class Blip {
    constructor(handle: number);
    /** Adds a blip and a marker to the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_CAR [0186]*/
    static AddForCar(vehicle: Car): Blip;
    /** Adds a blip with properties to the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_CAR_OLD [0161]*/
    static AddForCarOld(vehicle: Car, color: import('./enums').BlipColor, display: import('./enums').BlipDisplay): Blip;
    /** Adds a blip and a marker to the character
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_CHAR [0187]*/
    static AddForChar(char: Char): Blip;
    /** Adds a blip with properties to the character
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_CHAR_OLD [0162]*/
    static AddForCharOld(char: Char, color: import('./enums').BlipColor, display: import('./enums').BlipDisplay): Blip;
    /** Adds a blip to the contact point
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_CONTACT_POINT [0189]*/
    static AddForContactPoint(x: float, y: float, z: float): Blip;
    /** Adds a blip to the location
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_COORD [018A]*/
    static AddForCoord(x: float, y: float, z: float): Blip;
    /** Adds a blip with properties at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_COORD_OLD [0167]*/
    static AddForCoordOld(x: float, y: float, z: float, colour: import('./enums').BlipColor, display: import('./enums').BlipDisplay): Blip;
    /** Adds a blip and a marker to the object
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_OBJECT [0188]*/
    static AddForObject(object: ScriptObject): Blip;
    /** Adds a blip with properties to the object
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_OBJECT_OLD [0163]*/
    static AddForObjectOld(object: ScriptObject, color: import('./enums').BlipColor, display: import('./enums').BlipDisplay): Blip;
    /** Adds a blip and a marker to the pickup
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_PICKUP [03DC]*/
    static AddForPickup(pickup: Pickup): Blip;
    /** Adds a blip with properties to the pickup
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_BLIP_FOR_PICKUP_OLD [03DB]*/
    static AddForPickupOld(pickup: Pickup, color: import('./enums').BlipColor, display: import('./enums').BlipDisplay): Blip;
    /** Adds a sprite blip and a marker to the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_SPRITE_BLIP_FOR_CAR [02A4]*/
    static AddSpriteForCar(vehicle: Car, sprite: import('./enums').RadarSprite): Blip;
    /** Adds a sprite blip and a marker to the character
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_SPRITE_BLIP_FOR_CHAR [02A5]*/
    static AddSpriteForChar(char: Char, sprite: import('./enums').RadarSprite): Blip;
    /** Adds a long range sprite blip and sphere to the contact point that is not displayed while on mission
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_SPRITE_BLIP_FOR_CONTACT_POINT [02A7]*/
    static AddSpriteForContactPoint(x: float, y: float, z: float, sprite: import('./enums').RadarSprite): Blip;
    /** Adds a sprite blip to the location
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_SPRITE_BLIP_FOR_COORD [02A8]*/
    static AddSpriteForCoord(x: float, y: float, z: float, sprite: import('./enums').RadarSprite): Blip;
    /** Adds a sprite blip and a marker to the object
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_SPRITE_BLIP_FOR_OBJECT [02A6]*/
    static AddSpriteForObject(object: ScriptObject, sprite: import('./enums').RadarSprite): Blip;
    /** Adds a sprite blip and a marker to the pickup
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_SPRITE_BLIP_FOR_PICKUP [03DD]*/
    static AddSpriteForPickup(pickup: Pickup, sprite: import('./enums').RadarSprite): Blip;
    /** Sets the blip's color
    *
    * https://library.sannybuilder.com/#/gta3?q=CHANGE_BLIP_COLOUR [0165]*/
    changeColor(color: import('./enums').BlipColor): Blip;
    /** Changes the display of the specified blip
    *
    * https://library.sannybuilder.com/#/gta3?q=CHANGE_BLIP_DISPLAY [018B]*/
    changeDisplay(display: import('./enums').BlipDisplay): Blip;
    /** Sets the blip's size
    *
    * https://library.sannybuilder.com/#/gta3?q=CHANGE_BLIP_SCALE [0168]*/
    changeScale(size: int): Blip;
    /** Sets whether the blip should appear dimmed
    *
    * https://library.sannybuilder.com/#/gta3?q=DIM_BLIP [0166]*/
    dim(state: boolean): Blip;
    /** Removes the blip
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_BLIP [0164]*/
    remove(): void;
}
/** Camera/View Manipulation
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Camera */
interface Camera {
    /** Fades the screen for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=DO_FADE [016A]*/
    DoFade(time: int, direction: import('./enums').Fade): void;
    /** Gives camera control to the player
    *
    * https://library.sannybuilder.com/#/gta3?q=ENABLE_PLAYER_CONTROL_CAMERA [0452]*/
    EnablePlayerControl(): void;
    /** Returns the debug camera position
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_DEBUG_CAMERA_COORDINATES [0454]*/
    GetDebugCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Stores the debug camera front vector
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_DEBUG_CAMERA_FRONT_VECTOR [0455]*/
    GetDebugFrontVector(): {
        x: float;
        y: float;
        z: float;
    };
    /** Stores the location the debug camera is pointing to
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_DEBUG_CAMERA_POINT_AT [0463]*/
    GetDebugPointAt(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the screen is fading (016A)
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_FADING_STATUS [016B]*/
    GetFadingStatus(): boolean;
    /** Returns true if the camera is in widescreen mode
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAMERA_IN_WIDESCREEN_MODE [0603]*/
    IsInWidescreenMode(): boolean;
    /** Returns true if any part of the radius of the specified point is visible on screen
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_POINT_ON_SCREEN [00C2]*/
    IsPointOnScreen(x: float, y: float, z: float, radius: float): boolean;
    /** Attaches the camera to the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=POINT_CAMERA_AT_CAR [0158]*/
    PointAtCar(vehicle: Car, mode: import('./enums').CameraMode, switchStyle: import('./enums').SwitchType): void;
    /** Attaches the camera to the specified character
    *
    * https://library.sannybuilder.com/#/gta3?q=POINT_CAMERA_AT_CHAR [0159]*/
    PointAtChar(char: Char, mode: import('./enums').CameraMode, switchStyle: import('./enums').SwitchType): void;
    /** Attaches the camera to the specified player
    *
    * https://library.sannybuilder.com/#/gta3?q=POINT_CAMERA_AT_PLAYER [0157]*/
    PointAtPlayer(player: Player, mode: import('./enums').CameraMode, switchStyle: import('./enums').SwitchType): void;
    /** Points the camera at the specified location and applies the position set by 0159
    *
    * https://library.sannybuilder.com/#/gta3?q=POINT_CAMERA_AT_POINT [0160]*/
    PointAtPoint(x: float, y: float, z: float, switchStyle: import('./enums').SwitchType): void;
    /** Restores the camera to its usual position
    *
    * https://library.sannybuilder.com/#/gta3?q=RESTORE_CAMERA [015A]*/
    Restore(): void;
    /** Restores the camera, putting it back behind the player
    *
    * https://library.sannybuilder.com/#/gta3?q=RESTORE_CAMERA_JUMPCUT [02EB]*/
    RestoreJumpcut(): void;
    /** Puts the camera behind the player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAMERA_BEHIND_PLAYER [0373]*/
    SetBehindPlayer(): void;
    /** Sets the RGB color of the fade command (016A)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_FADING_COLOUR [0169]*/
    SetFadingColor(r: int, g: int, b: int): void;
    /** Sets the fixed camera's position and up vector offset
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_FIXED_CAMERA_POSITION [015F]*/
    SetFixedPosition(x: float, y: float, z: float, upVecOffsetX: float, upVecOffsetY: float, upVecOffsetZ: float): void;
    /** Enables traffic spawn at the camera position, otherwise at the player position (default)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_GENERATE_CARS_AROUND_CAMERA [03EA]*/
    SetGenerateCarsAround(state: boolean): void;
    /** Puts the camera in front of the player, pointing towards the player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAMERA_IN_FRONT_OF_PLAYER [03C8]*/
    SetInFrontOfPlayer(): void;
    /** Sets how long the camera transition will last
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_INTERPOLATION_PARAMETERS [0460]*/
    SetInterpolationParameters(interpolationToStopMoving: float, time: int): void;
    /** Sets the motion blur (camera overlay color)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_MOTION_BLUR [0374]*/
    SetMotionBlur(type: import('./enums').MotionBlurType): void;
    /** Sets camera minimum drawing distance
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_NEAR_CLIP [041D]*/
    SetNearClip(distance: float): void;
    /** Sets how far behind the camera is from the player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAMERA_ZOOM [032A]*/
    SetZoom(zoom: int): void;
    /** Shakes the camera with the given intensity
    *
    * https://library.sannybuilder.com/#/gta3?q=SHAKE_CAM [0003]*/
    Shake(intensity: int): void;
    /** Shakes the in-game camera if the camera's location is nearby the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=SHAKE_CAM_WITH_POINT [0136]*/
    ShakeWithPoint(intensity: int, x: float, y: float, z: float): void;
}
declare var Camera: Camera
/** Script Vehicles
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Car */
declare class Car {
    constructor(handle: number);
    /** Creates a vehicle at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_CAR [00A5]*/
    static Create(modelId: int, x: float, y: float, z: float): Car;
    /** Returns the number of seats in the vehicle model
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_NUMBER_OF_SEATS_IN_MODEL [047D]*/
    static GetNumberOfSeatsInModel(modelId: int): int;
    /** Returns true if the handle is an invalid vehicle handle or the vehicle has been destroyed (wrecked)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_DEAD [0119]*/
    static IsDead(handle: unknown): boolean;
    /** Returns true if the handle is a valid vehicle handle that is still alive (opposite of 0119)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_STILL_ALIVE [00AC]*/
    static IsStillAlive(handle: unknown): boolean;
    /** Activates upside-down car check for the car
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_UPSIDEDOWN_CAR_CHECK [0190]*/
    addUpsidedownCheck(): Car;
    /** Arms the vehicle with a bomb of the given type (In SA, this command only supports the mobile version)
    *
    * https://library.sannybuilder.com/#/gta3?q=ARM_CAR_WITH_BOMB [0242]*/
    armWithBomb(bombType: import('./enums').BombType): Car;
    /** Sets the car's primary and secondary colors
    *
    * https://library.sannybuilder.com/#/gta3?q=CHANGE_CAR_COLOUR [0229]*/
    changeColor(color1: int, color2: int): Car;
    /** Sets the locked status of the car's doors (same as 020A)
    *
    * https://library.sannybuilder.com/#/gta3?q=CHANGE_CAR_LOCK [0135]*/
    changeLock(lockStatus: import('./enums').CarLock): Car;
    /** Clears the vehicle's last weapon damage (see 031E)
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_CAR_LAST_WEAPON_DAMAGE [0468]*/
    clearLastWeaponDamage(): Car;
    /** Removes the vehicle from the game
    *
    * https://library.sannybuilder.com/#/gta3?q=DELETE_CAR [00A6]*/
    delete(): void;
    /** Removes the vehicle from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/gta3?q=DONT_REMOVE_CAR [01C6]*/
    dontRemove(): Car;
    /** Makes the vehicle explode
    *
    * https://library.sannybuilder.com/#/gta3?q=EXPLODE_CAR [020B]*/
    explode(): Car;
    flash(state: boolean): Car;
    /** Returns the handle of a character sitting in the specified car seat
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CHAR_IN_CAR_PASSENGER_SEAT [0432]*/
    getCharInPassengerSeat(seat: import('./enums').SeatId): Char;
    /** Gets the car's primary and secondary colors
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CAR_COLOURS [03F3]*/
    getColors(): {
        color1: int;
        color2: int;
    };
    /** Returns the vehicle's coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CAR_COORDINATES [00AA]*/
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the current gear of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CAR_CURRENT_GEAR [0AB8]*/
    getCurrentGear(): int;
    /** Returns the car's driver handle
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_DRIVER_OF_CAR [046C]*/
    getDriver(): Char;
    /** Returns the X coord of the vehicle's angle
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CAR_FORWARD_X [02F8]*/
    getForwardX(): float;
    /** Returns the Y coord of the vehicle's angle
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CAR_FORWARD_Y [02F9]*/
    getForwardY(): float;
    /** Returns the vehicle's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CAR_HEADING [0174]*/
    getHeading(): float;
    /** Returns the vehicle's health
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CAR_HEALTH [0227]*/
    getHealth(): int;
    /** Returns the maximum number of passengers that could sit in the car
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_MAXIMUM_NUMBER_OF_PASSENGERS [01EA]*/
    getMaximumNumberOfPassengers(): int;
    /** Returns the car's model id
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CAR_MODEL [0441]*/
    getModel(): int;
    /** Gets the total number of gears of the vehicle and stores it to the variable
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CAR_NUMBER_OF_GEARS [0AB7]*/
    getNumberOfGears(): int;
    /** Returns the number of passengers sitting in the car
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_NUMBER_OF_PASSENGERS [01E9]*/
    getNumberOfPassengers(): int;
    /** Returns the coordinates of an offset of the vehicle's position, depending on the vehicle's rotation
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_OFFSET_FROM_CAR_IN_WORLD_COORDS [04C3]*/
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Gets the car's speed
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CAR_SPEED [02E3]*/
    getSpeed(): float;
    /** Makes the AI drive to the specified location by any means
    *
    * https://library.sannybuilder.com/#/gta3?q=CAR_GOTO_COORDINATES [00A7]*/
    gotoCoordinates(x: float, y: float, z: float): Car;
    /** Makes the AI drive to the specified location obeying the traffic rules
    *
    * https://library.sannybuilder.com/#/gta3?q=CAR_GOTO_COORDINATES_ACCURATE [02C2]*/
    gotoCoordinatesAccurate(x: float, y: float, z: float): Car;
    /** Returns true if the vehicle has been hit by the specified weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_CAR_BEEN_DAMAGED_BY_WEAPON [031E]*/
    hasBeenDamagedByWeapon(weaponType: import('./enums').WeaponType): boolean;
    /** Returns true if the specified vehicle has a car bomb installed
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_ARMED_WITH_ANY_BOMB [0220]*/
    isArmedWithAnyBomb(): boolean;
    /** Returns true if the vehicle is armed with a bomb of the specified status
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_ARMED_WITH_BOMB [0228]*/
    isArmedWithBomb(status: import('./enums').BombType): boolean;
    /** Returns true if the vehicle is a boat
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_BOAT [029C]*/
    isBoat(): boolean;
    /** Returns true if the specified vehicle has been crushed by the car crusher
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_CRUSHED [0149]*/
    isCrushed(): boolean;
    /** Returns true if the vehicle is wrecked and located within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_DEAD_IN_AREA_2D [013B]*/
    isDeadInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is wrecked and located within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_DEAD_IN_AREA_3D [013C]*/
    isDeadInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle's door is present and closed
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_DOOR_CLOSED [0415]*/
    isDoorClosed(door: import('./enums').CarDoor): boolean;
    isEngineOn(): boolean;
    /** Returns true if the vehicle's primary color matches the specified color
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_FIRST_CAR_COLOUR [031B]*/
    isFirstColor(color: int): boolean;
    /** Returns true if the car's health is over the specified value
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_HEALTH_GREATER [0185]*/
    isHealthGreater(health: int): boolean;
    /** Returns true if the vehicle's siren is on
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_ICECREAM_JINGLE_ON [0383]*/
    isIcecreamJingleOn(): boolean;
    /** Returns true if the car is in the air
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_IN_AIR [015E]*/
    isInAir(): boolean;
    /** Returns true if the vehicle is in the air
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_IN_AIR_PROPER [01F3]*/
    isInAirProper(): boolean;
    /** Returns true if the vehicle is located within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_IN_AREA_2D [00B0]*/
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is located within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_IN_AREA_3D [00B1]*/
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is submerged in water
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_IN_WATER [02BF]*/
    isInWater(): boolean;
    isLightsOn(): boolean;
    /** Returns true if the vehicle has the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_MODEL [0137]*/
    isModel(modelId: int): boolean;
    /** Returns true if the car is visible
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_ON_SCREEN [02CA]*/
    isOnScreen(): boolean;
    /** Returns true if the specified car seat is empty
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_PASSENGER_SEAT_FREE [0431]*/
    isPassengerSeatFree(seat: import('./enums').SeatId): boolean;
    /** Returns true if the vehicle's secondary color matches the specified color
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_SECOND_CAR_COLOUR [031C]*/
    isSecondColor(color: int): boolean;
    /** Returns true if the vehicle is not moving
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_STOPPED [01C1]*/
    isStopped(): boolean;
    /** Returns true if the car stopped within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_STOPPED_IN_AREA_2D [01AB]*/
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the car stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_STOPPED_IN_AREA_3D [01AC]*/
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the car has been upside down for more than 2 seconds (requires 0190)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_STUCK_ON_ROOF [018F]*/
    isStuckOnRoof(): boolean;
    /** Returns true if the vehicle's model is Taxi (110), Cabbie (128), or Borgnine (148)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_TAXI [0295]*/
    isTaxi(): boolean;
    /** Returns true if the vehicle is in the normal position (upright)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_UPRIGHT [020D]*/
    isUpright(): boolean;
    /** Returns true if the car is upside down
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_UPSIDEDOWN [01F4]*/
    isUpsidedown(): boolean;
    /** Returns true if any of the car components is visibly damaged or lost
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_VISIBLY_DAMAGED [03C9]*/
    isVisiblyDamaged(): boolean;
    /** Returns true if the car is within the 2D radius of the point
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CAR_2D [01AD]*/
    locate2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the car is within the 3D radius of the point
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CAR_3D [01AF]*/
    locate3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the car is stopped within the 2D radius of the point
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_CAR_2D [01AE]*/
    locateStopped2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the car is stopped in the radius of the specified point
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_CAR_3D [01B0]*/
    locateStopped3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Sets the locked status of the car's doors
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCK_CAR_DOORS [020A]*/
    lockDoors(lockStatus: import('./enums').CarLock): Car;
    /** Makes the car more resistant to physical damage
    *
    * https://library.sannybuilder.com/#/gta3?q=MAKE_CRAIGS_CAR_A_BIT_STRONGER [044F]*/
    makeABitStronger(state: boolean): Car;
    /** Allows the vehicle to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/gta3?q=MARK_CAR_AS_NO_LONGER_NEEDED [01C3]*/
    markAsNoLongerNeeded(): Car;
    /** Deactivates upside-down car check (0190) for the car
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_UPSIDEDOWN_CAR_CHECK [0191]*/
    removeUpsidedownCheck(): Car;
    /** Sets the driver and all passengers' objective to leave the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_ALL_OCCUPANTS_OF_CAR_LEAVE_CAR [045F]*/
    setAllOccupantsLeave(): Car;
    /** Sets whether the vehicle will avoid paths between levels (0426)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_AVOID_LEVEL_TRANSITIONS [0428]*/
    setAvoidLevelTransitions(state: boolean): Car;
    /** Sets the car's big wheels property (unused)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_BIG_WHEELS [0334]*/
    setBigWheels(state: boolean): Car;
    /** Set's the AI driver's mission to obstruct another's car pathway (similar to 00AF with BlockCarFaraway)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_BLOCK_CAR [032D]*/
    setBlockCar(target: Car): Car;
    /** Sets whether the car receives damage
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_CAN_BE_DAMAGED [03F5]*/
    setCanBeDamaged(state: boolean): Car;
    /** Makes car keep current colors when Pay'n'Spray is used
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAN_RESPRAY_CAR [0294]*/
    setCanRespray(changeColors: boolean): Car;
    /** Set's whether the AI driver will occupy the fast (left) lane on a two-way road
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_CHANGE_LANE [0466]*/
    setChangeLane(state: boolean): Car;
    /** Makes the vehicle harder to control
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_COMEDY_CONTROLS [02D2]*/
    setComedyControls(state: boolean): Car;
    /** Puts the vehicle at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_COORDINATES [00AB]*/
    setCoordinates(x: float, y: float, z: float): Car;
    /** Sets the vehicle's max speed
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_CRUISE_SPEED [00AD]*/
    setCruiseSpeed(maxSpeed: float): Car;
    /** Sets the behavior of the vehicle's AI driver
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_DRIVING_STYLE [00AE]*/
    setDrivingStyle(drivingStyle: import('./enums').DrivingMode): Car;
    /** Sets whether the vehicle's engine is turned on or off
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_ENGINE_ON [0ABF]*/
    setEngineOn(state: boolean): Car;
    /** Makes the AI driver in the vehicle brake for the specified period of time
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_HANDBRAKE_STOP [0479]*/
    setHandbrakeStop(timeInMs: int): Car;
    /** Makes the AI driver in the vehicle turn hard left and brake for the specified period of time
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_HANDBRAKE_TURN_LEFT [0477]*/
    setHandbrakeTurnLeft(timeInMs: int): Car;
    /** Makes the AI driver in the vehicle turn hard right and brake for the specified period of time
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_HANDBRAKE_TURN_RIGHT [0478]*/
    setHandbrakeTurnRight(timeInMs: int): Car;
    /** Sets the vehicle's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_HEADING [0175]*/
    setHeading(heading: float): Car;
    /** Sets the vehicle's health
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_HEALTH [0224]*/
    setHealth(health: int): Car;
    /** Sets whether the car is heavy
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_HEAVY [01EC]*/
    setHeavy(state: boolean): Car;
    /** Sets the car's mission to idle (MISSION_NONE), stopping any driving activity
    *
    * https://library.sannybuilder.com/#/gta3?q=CAR_SET_IDLE [00A9]*/
    setIdle(): Car;
    /** Prevents the vehicle from being despawned when the current level (island) changes
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_IGNORE_LEVEL_TRANSITIONS [044E]*/
    setIgnoreLevelTransitions(state: boolean): Car;
    /** Sets the mission of the vehicle's AI driver
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_MISSION [00AF]*/
    setMission(carMission: import('./enums').CarMission): Car;
    /** Teleports the vehicle nearby the player's location
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_JAMES_CAR_ON_PATH_TO_PLAYER [0450]*/
    setOnPathToPlayer(): Car;
    /** Makes a vehicle immune to everything except the player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_ONLY_DAMAGED_BY_PLAYER [02AA]*/
    setOnlyDamagedByPlayer(state: boolean): Car;
    /** Sets the vehicle's immunities
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_PROOFS [02AC]*/
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): Car;
    /** Sets the AI driver's mission to ram another car (similar to 00AF with RamCarFaraway)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_RAM_CAR [032C]*/
    setRamCar(target: Car): Car;
    /** Sets the car's status
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_STATUS [03A2]*/
    setStatus(status: import('./enums').EntityStatus): Car;
    /** Forces the AI-controlled vehicle to stay on the current island
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_STAYS_IN_CURRENT_LEVEL [03FB]*/
    setStaysInCurrentLevel(state: boolean): Car;
    /** Defines whether the car is more resistant to collisions than normal
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_STRONG [03AB]*/
    setStrong(state: boolean): Car;
    /** Sets whether the taxi's roof light is on
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TAXI_LIGHTS [0216]*/
    setTaxiLights(state: boolean): Car;
    /** Overrides the default AI controlled vehicle traction value of 1.0
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_TRACTION [0423]*/
    setTraction(traction: float): Car;
    /** Disables the car from exploding when it is upside down, as long as the player is not in the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_UPSIDEDOWN_CAR_NOT_DAMAGED [03ED]*/
    setUpsidedownNotDamaged(state: boolean): Car;
    /** Sets whether the vehicle is visible or not
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_VISIBLE [0338]*/
    setVisible(state: boolean): Car;
    /** Makes the vehicle watertight, meaning characters inside will not be harmed if the vehicle is submerged in water
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_WATERTIGHT [039C]*/
    setWatertight(state: boolean): Car;
    /** Sets whether the car's alarm can be activated
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_CAR_SIREN [0397]*/
    switchSiren(state: boolean): Car;
    /** Enables or disabled guns on the vehicle that has them (e.g. boats)
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_VEHICLE_WEAPONS [0412]*/
    switchWeapons(state: boolean): Car;
    /** Sets the car's heading so that it is facing the 2D coordinate
    *
    * https://library.sannybuilder.com/#/gta3?q=TURN_CAR_TO_FACE_COORD [039F]*/
    turnToFaceCoord(x: float, y: float): Car;
    /** Clears any current tasks the vehicle has and makes it drive around aimlessly
    *
    * https://library.sannybuilder.com/#/gta3?q=CAR_WANDER_RANDOMLY [00A8]*/
    wanderRandomly(): Car;
}
/** Parking Lots
 * 
 * https://library.sannybuilder.com/#/gta3/classes/CarGenerator */
declare class CarGenerator {
    constructor(handle: number);
    /** Initializes a parked car generator (modelId -1 selects a random vehicle from the local popcycle)
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_CAR_GENERATOR [014B]*/
    static Create(x: float, y: float, z: float, heading: float, modelId: int, primaryColor: int, secondaryColor: int, forceSpawn: boolean, alarmChance: int, doorLockChance: int, minDelay: int, maxDelay: int): CarGenerator;
    /** Specifies the number of times the car generator spawns a car (101 - infinite)
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_CAR_GENERATOR [014C]*/
    switch(amount: int): CarGenerator;
}
/** Hardcoded Catalina's Heli from the Final Mission
 * 
 * https://library.sannybuilder.com/#/gta3/classes/CatalinaHeli */
interface CatalinaHeli {
    /** Returns the handle of the heli created with 03B2
    *
    * https://library.sannybuilder.com/#/gta3?q=GRAB_CATALINA_HELI [03B9]*/
    Grab(): Car;
    /** Makes the heli in the 'The Exchange' mission fly high in the sky
    *
    * https://library.sannybuilder.com/#/gta3?q=CATALINA_HELI_FLY_AWAY [03BE]*/
    FlyAway(): void;
    /** Returns true if the player damaged the heli flying in the 'The Exchange' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_CATALINA_HELI_BEEN_SHOT_DOWN [03B5]*/
    HasBeenShotDown(): boolean;
    /** Deletes the heli flying in the 'The Exchange' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_CATALINA_HELI [03B4]*/
    Remove(): void;
    /** Creates a heli flying in the 'The Exchange' mission 
    *
    * https://library.sannybuilder.com/#/gta3?q=START_CATALINA_HELI [03B2]*/
    Start(): void;
    /** Makes the heli in the 'The Exchange' mission take off
    *
    * https://library.sannybuilder.com/#/gta3?q=CATALINA_HELI_TAKE_OFF [03B3]*/
    TakeOff(): void;
}
declare var CatalinaHeli: CatalinaHeli
/** Script Characters (Actors)
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Char */
declare class Char {
    constructor(handle: number);
    /** Creates a character at the specified location, with the specified model and pedtype
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_CHAR [009A]*/
    static Create(pedType: import('./enums').PedType, modelId: int, x: float, y: float, z: float): Char;
    /** Creates a character with the specified model in the passenger seat of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_CHAR_AS_PASSENGER [01C8]*/
    static CreateAsPassenger(vehicle: Car, pedType: import('./enums').PedType, modelId: int, seat: import('./enums').SeatId): Char;
    /** Creates a character in the driver's seat of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_CHAR_INSIDE_CAR [0129]*/
    static CreateInsideCar(vehicle: Car, pedType: import('./enums').PedType, modelId: int): Char;
    /** Creates a character with a randomised model and pedtype at the specified coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_RANDOM_CHAR [0376]*/
    static CreateRandom(x: float, y: float, z: float): Char;
    /** Returns true if the handle is an invalid character handle or the character is dead (wasted)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_DEAD [0118]*/
    static IsDead(handle: unknown): boolean;
    /** Returns true if the handle is a valid character handle who is still alive (opposite of 0118)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_STILL_ALIVE [00A2]*/
    static IsStillAlive(handle: unknown): boolean;
    /** Sets a multiplier for the range of a character's ability to go and occupy a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_ENTER_CAR_RANGE_MULTIPLIER [0481]*/
    static SetEnterCarRangeMultiplier(value: float): void;
    /** Sets a multiplier for the range of a character's ability to react on deadly events around
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_THREAT_REACTION_RANGE_MULTIPLIER [0482]*/
    static SetThreatReactionRangeMultiplier(value: float): void;
    /** Adds the specified amount of ammo to the character's weapon, if the character has the weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_AMMO_TO_CHAR [0114]*/
    addAmmo(weaponType: import('./enums').WeaponType, ammo: int): Char;
    /** Increases the character's armor by the specified value to the maximum of 100
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_ARMOUR_TO_CHAR [035F]*/
    addArmor(amount: int): Char;
    /** Returns true if the character sees a dead body of the given type
    *
    * https://library.sannybuilder.com/#/gta3?q=CAN_CHAR_SEE_DEAD_CHAR [0480]*/
    canSeeDeadChar(pedType: import('./enums').PedType): boolean;
    /** Clears the character's last weapon damage (see 031D)
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_CHAR_LAST_WEAPON_DAMAGE [0467]*/
    clearLastWeaponDamage(): Char;
    /** Resets character's hostility to other ped types (011A)
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_CHAR_THREAT_SEARCH [01ED]*/
    clearThreatSearch(): Char;
    /** Removes the character from the game and mission cleanup list, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=DELETE_CHAR [009B]*/
    delete(): void;
    /** Removes the character from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/gta3?q=DONT_REMOVE_CHAR [01C5]*/
    dontRemove(): Char;
    /** Respawns the character using the model requested with 0352
    *
    * https://library.sannybuilder.com/#/gta3?q=DRESS_CHAR [0353]*/
    dress(): Char;
    /** Dismembers the character
    *
    * https://library.sannybuilder.com/#/gta3?q=EXPLODE_CHAR_HEAD [0321]*/
    explodeHead(): Char;
    flash(state: boolean): Char;
    /** Makes the character follow the leader character
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_AS_LEADER [01DE]*/
    followChar(leader: Char): Char;
    /** Sets the character's follow path
    *
    * https://library.sannybuilder.com/#/gta3?q=CHAR_FOLLOW_PATH [009E]*/
    followPath(x: float, y: float, z: float): Char;
    /** Makes the character follow the leader player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_AS_LEADER [01DF]*/
    followPlayer(leader: Player): Char;
    /** Gets the amount of ammo in the specified weapon of the character
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_AMMO_IN_CHAR_WEAPON [041A]*/
    getAmmoInWeapon(weaponType: import('./enums').WeaponType): int;
    /** Returns the character's armor amount
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CHAR_ARMOUR [04DD]*/
    getArmour(): int;
    /** Returns the character's coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CHAR_COORDINATES [00A0]*/
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the type of weapon that the character is currently holding
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CURRENT_CHAR_WEAPON [0470]*/
    getCurrentWeapon(): import('./enums').WeaponType;
    /** Returns the character's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CHAR_HEADING [0172]*/
    getHeading(): float;
    /** Returns the character's health
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CHAR_HEALTH [0226]*/
    getHealth(): int;
    /** Returns the number of members which are in a group of the character (01DE)
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_NUMBER_OF_FOLLOWERS [046D]*/
    getNumberOfFollowers(): int;
    /** Returns the coordinates of the character, with an offset
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_OFFSET_FROM_CHAR_IN_WORLD_COORDS [04C4]*/
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Gives the character the weapon with the specified amount of ammo
    *
    * https://library.sannybuilder.com/#/gta3?q=GIVE_WEAPON_TO_CHAR [01B2]*/
    giveWeapon(weaponType: import('./enums').WeaponType, ammo: int): Char;
    /** Returns true if the character has been hit by the specified weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_CHAR_BEEN_DAMAGED_BY_WEAPON [031D]*/
    hasBeenDamagedByWeapon(weaponType: import('./enums').WeaponType): boolean;
    /** Returns true if the character can see the target character
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_CHAR_SPOTTED_CHAR [0364]*/
    hasSpottedChar(target: Char): boolean;
    /** Returns true if the character has seen the specified player
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_CHAR_SPOTTED_PLAYER [0123]*/
    hasSpottedPlayer(player: Player): boolean;
    /** Returns true if the character is holding the given type of weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CURRENT_CHAR_WEAPON [02D8]*/
    isCurrentWeapon(weaponType: import('./enums').WeaponType): boolean;
    /** Returns true if the character's health is over the specified value
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_HEALTH_GREATER [0184]*/
    isHealthGreater(health: int): boolean;
    /** Returns true if the character has a vehicle, even if they are not actually sat inside it (opening and closing the door)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_ANY_CAR [00DF]*/
    isInAnyCar(): boolean;
    /** Returns true if the character is within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_AREA_2D [00A3]*/
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_AREA_3D [00A4]*/
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_AREA_IN_CAR_2D [01A2]*/
    isInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_AREA_IN_CAR_3D [01A7]*/
    isInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_AREA_ON_FOOT_2D [01A1]*/
    isInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_AREA_ON_FOOT_3D [01A6]*/
    isInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_CAR [00DB]*/
    isInCar(vehicle: Car): boolean;
    /** Returns true if the character is part of the leader's group (01DE)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_CHARS_GROUP [031F]*/
    isInCharsGroup(leader: Char): boolean;
    /** Returns true if the character can move
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_CONTROL [03E9]*/
    isInControl(): boolean;
    /** Returns true if the character is driving a vehicle with the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_MODEL [00DD]*/
    isInModel(modelId: int): boolean;
    /** Returns true if the character is part of the leader's group (01DF)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_PLAYERS_GROUP [0320]*/
    isInPlayersGroup(leader: Player): boolean;
    /** Returns true if the character is in the specified map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_IN_ZONE [0154]*/
    isInZone(zone: string): boolean;
    /** Returns true if the character has fallen
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_LYING_DOWN [047F]*/
    isLyingDown(): boolean;
    /** Returns true if the character is male
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_MALE [03A3]*/
    isMale(): boolean;
    /** Returns true if the character's model ID is equivalent to the model ID passed
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_MODEL [02F2]*/
    isModel(modelId: int): boolean;
    /** Returns true if the character has completed their objective
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_OBJECTIVE_PASSED [0126]*/
    isObjectivePassed(): boolean;
    /** Returns true if the character is riding a bike
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_ON_ANY_BIKE [047A]*/
    isOnAnyBike(): boolean;
    /** Returns true if the character is on foot, and not occupying a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_ON_FOOT [044B]*/
    isOnFoot(): boolean;
    /** Returns true if the character is visible
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_ON_SCREEN [02CB]*/
    isOnScreen(): boolean;
    /** Returns true if the character is firing a weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_SHOOTING [02E0]*/
    isShooting(): boolean;
    /** Returns true if the character fired a weapon within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_SHOOTING_IN_AREA [02D6]*/
    isShootingInArea(leftBottomX: float, leftBottomY: float, topRightX: float, topRightY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is sitting in any vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_SITTING_IN_ANY_CAR [0449]*/
    isSittingInAnyCar(): boolean;
    /** Returns true if the character is sitting in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_SITTING_IN_CAR [0448]*/
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the character is not moving
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_STOPPED [02A0]*/
    isStopped(): boolean;
    /** Returns true if the character stopped within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_STOPPED_IN_AREA_2D [01A3]*/
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_STOPPED_IN_AREA_3D [01A8]*/
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_STOPPED_IN_AREA_IN_CAR_2D [01A5]*/
    isStoppedInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_STOPPED_IN_AREA_IN_CAR_3D [01AA]*/
    isStoppedInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_STOPPED_IN_AREA_ON_FOOT_2D [01A4]*/
    isStoppedInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_STOPPED_IN_AREA_ON_FOOT_3D [01A9]*/
    isStoppedInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is colliding with the specified object
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_TOUCHING_OBJECT [0179]*/
    isTouchingObject(object: ScriptObject): boolean;
    /** Returns true if the character is colliding with the specified object on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CHAR_TOUCHING_OBJECT_ON_FOOT [023B]*/
    isTouchingObjectOnFoot(object: ScriptObject): boolean;
    /** Makes the character stop following the leader (01DE or 01DF)
    *
    * https://library.sannybuilder.com/#/gta3?q=LEAVE_GROUP [01E0]*/
    leaveGroup(): Char;
    /** Returns true if the character is within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ANY_MEANS_2D [00EC]*/
    locateAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ANY_MEANS_3D [00FE]*/
    locateAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ANY_MEANS_CAR_2D [0202]*/
    locateAnyMeansCar2D(vehicle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ANY_MEANS_CAR_3D [0205]*/
    locateAnyMeansCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ANY_MEANS_CHAR_2D [00F2]*/
    locateAnyMeansChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ANY_MEANS_CHAR_3D [0104]*/
    locateAnyMeansChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ANY_MEANS_OBJECT_2D [0471]*/
    locateAnyMeansObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ANY_MEANS_OBJECT_3D [0474]*/
    locateAnyMeansObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_IN_CAR_2D [00EE]*/
    locateInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_IN_CAR_3D [0100]*/
    locateInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_IN_CAR_CAR_2D [0204]*/
    locateInCarCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_IN_CAR_CAR_3D [0207]*/
    locateInCarCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_IN_CAR_CHAR_2D [00F4]*/
    locateInCarChar2D(otherChar: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_IN_CAR_CHAR_3D [0106]*/
    locateInCarChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_IN_CAR_OBJECT_2D [0473]*/
    locateInCarObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_IN_CAR_OBJECT_3D [0476]*/
    locateInCarObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ON_FOOT_2D [00ED]*/
    locateOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ON_FOOT_3D [00FF]*/
    locateOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ON_FOOT_CAR_2D [0203]*/
    locateOnFootCar2D(vehicle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ON_FOOT_CAR_3D [0206]*/
    locateOnFootCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ON_FOOT_CHAR_2D [00F3]*/
    locateOnFootChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ON_FOOT_CHAR_3D [0105]*/
    locateOnFootChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ON_FOOT_OBJECT_2D [0472]*/
    locateOnFootObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_CHAR_ON_FOOT_OBJECT_3D [0475]*/
    locateOnFootObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_CHAR_ANY_MEANS_2D [00EF]*/
    locateStoppedAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_CHAR_ANY_MEANS_3D [0101]*/
    locateStoppedAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_CHAR_IN_CAR_2D [00F1]*/
    locateStoppedInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_CHAR_IN_CAR_3D [0103]*/
    locateStoppedInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_CHAR_ON_FOOT_2D [00F0]*/
    locateStoppedOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_CHAR_ON_FOOT_3D [0102]*/
    locateStoppedOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Makes the character to keep looking at the direction of the other character
    *
    * https://library.sannybuilder.com/#/gta3?q=CHAR_LOOK_AT_CHAR_ALWAYS [022C]*/
    lookAtCharAlways(target: Char): Char;
    /** Makes the character to keep looking at the direction of the player
    *
    * https://library.sannybuilder.com/#/gta3?q=CHAR_LOOK_AT_PLAYER_ALWAYS [022D]*/
    lookAtPlayerAlways(target: Player): Char;
    /** Allows the character to be deleted by the game if necessary, and also removes them from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/gta3?q=MARK_CHAR_AS_NO_LONGER_NEEDED [01C2]*/
    markAsNoLongerNeeded(): Char;
    /** Sets the character to play a certain action
    *
    * https://library.sannybuilder.com/#/gta3?q=PLAY_ANIMATION [0673]*/
    playAnimation(groupId: import('./enums').AnimGroup, animId: int, blend: float): Char;
    /** Removes the character with a fade, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_CHAR_ELEGANTLY [034F]*/
    removeElegantly(): Char;
    /** Affects how often the character will hit the target when attacking with a weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_ACCURACY [02E2]*/
    setAccuracy(accuracy: int): Char;
    /** Sets the amount of ammo the character has in the specified weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_AMMO [017B]*/
    setAmmo(weaponType: import('./enums').WeaponType, ammo: int): Char;
    /** Sets the animation group for the character
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_ANIM_GROUP_FOR_CHAR [0245]*/
    setAnimGroup(animGroup: import('./enums').AnimGroup): Char;
    /** Makes the character perform an animation at the specified speed
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_ANIM_SPEED [0393]*/
    setAnimSpeed(animSpeed: float): Char;
    /** Makes a character bleed
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_BLEEDING [0332]*/
    setBleeding(state: boolean): Char;
    /** Locks the character while in a car
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_CANT_BE_DRAGGED_OUT [039E]*/
    setCantBeDraggedOut(state: boolean): Char;
    /** Puts the character at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_COORDINATES [00A1]*/
    setCoordinates(x: float, y: float, z: float): Char;
    /** Sets the character's currently held weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CURRENT_CHAR_WEAPON [01B9]*/
    setCurrentWeapon(weaponType: import('./enums').WeaponType): Char;
    /** Sets the character's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_HEADING [0173]*/
    setHeading(heading: float): Char;
    /** Sets the character's health
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_HEALTH [0223]*/
    setHealth(health: int): Char;
    /** Makes the character attack whoever attacks them
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_HEED_THREATS [0291]*/
    setHeedThreats(state: boolean): Char;
    /** Sets the character's objective to stay idle
    *
    * https://library.sannybuilder.com/#/gta3?q=CHAR_SET_IDLE [009F]*/
    setIdle(): Char;
    /** Prevents the character from being despawned when the current level (island) changes
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_IGNORE_LEVEL_TRANSITIONS [0438]*/
    setIgnoreLevelTransitions(state: boolean): Char;
    /** Sets whether the character is a psychotic killer or not
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_IS_CHRIS_CRIMINAL [0433]*/
    setIsChrisCriminal(state: boolean): Char;
    /** Sets the character's objective to enter a nearby train
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_CATCH_TRAIN [032E]*/
    setObjCatchTrain(): Char;
    /** Sets the character's objective to destroy the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_DESTROY_CAR [01D9]*/
    setObjDestroyCar(vehicle: Car): Char;
    /** Sets the character's objective to enter the vehicle as a driver
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_ENTER_CAR_AS_DRIVER [01D5]*/
    setObjEnterCarAsDriver(vehicle: Car): Char;
    /** Sets the character's objective to enter the vehicle as a passenger
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_ENTER_CAR_AS_PASSENGER [01D4]*/
    setObjEnterCarAsPassenger(vehicle: Car): Char;
    /** Makes the character leave their car and run away from it
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_FLEE_CAR [046B]*/
    setObjFleeCar(vehicle: Car): Char;
    /** Sets the character's objective to walk away forever and stay away from the target character
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_FLEE_CHAR_ON_FOOT_ALWAYS [01CF]*/
    setObjFleeCharOnFootAlways(target: Char): Char;
    /** Sets the character's objective to escape on foot and stay away from the target character until safe
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_FLEE_CHAR_ON_FOOT_TILL_SAFE [01CD]*/
    setObjFleeCharOnFootTillSafe(target: Char): Char;
    /** Sets the character's objective to run away
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_FLEE_ON_FOOT_TILL_SAFE [0193]*/
    setObjFleeOnFootTillSafe(): Char;
    /** Sets the character's objective to walk away forever and stay away from the target player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_FLEE_PLAYER_ON_FOOT_ALWAYS [01D0]*/
    setObjFleePlayerOnFootAlways(target: Player): Char;
    /** Sets the character's objective to escape on foot and stay away from the target player until it is safe
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_FLEE_PLAYER_ON_FOOT_TILL_SAFE [01CE]*/
    setObjFleePlayerOnFootTillSafe(target: Player): Char;
    /** Sets the character's objective to escort the leader character
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_FOLLOW_CHAR_IN_FORMATION [030B]*/
    setObjFollowCharInFormation(leader: Char, formationType: import('./enums').FormationType): Char;
    /** Sets the character's objective to follow along the specified route
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_FOLLOW_ROUTE [01E1]*/
    setObjFollowRoute(routeId: int, mode: import('./enums').FollowRoute): Char;
    /** Sets the character's objective to walk to or drive into the specified area
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_GOTO_AREA_ANY_MEANS [029D]*/
    setObjGotoAreaAnyMeans(leftBottomX: float, leftBottomY: float, topRightX: float, topRightY: float): Char;
    /** Sets the character's objective to walk into the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_GOTO_AREA_ON_FOOT [01DA]*/
    setObjGotoAreaOnFoot(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): Char;
    /** Sets the character's objective to walk towards the target character
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_GOTO_CHAR_ON_FOOT [01D1]*/
    setObjGotoCharOnFoot(target: Char): Char;
    /** Sets the character's objective to walk at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_GOTO_COORD_ON_FOOT [0211]*/
    setObjGotoCoordOnFoot(x: float, y: float): Char;
    /** Sets the character's objective to walk towards the target player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_GOTO_PLAYER_ON_FOOT [01D2]*/
    setObjGotoPlayerOnFoot(target: Player): Char;
    /** Sets the character's objective to guard the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_GUARD_AREA [0195]*/
    setObjGuardArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): Char;
    /** Sets the character's objective to guard the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_GUARD_SPOT [0194]*/
    setObjGuardSpot(x: float, y: float, z: float): Char;
    /** Sets the character's objective to hail a taxi
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_HAIL_TAXI [0365]*/
    setObjHailTaxi(): Char;
    /** Sets the character's objective to attack the specified character
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_KILL_CHAR_ANY_MEANS [01CB]*/
    setObjKillCharAnyMeans(target: Char): Char;
    /** Sets the character's objective to attack the other character on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_KILL_CHAR_ON_FOOT [01C9]*/
    setObjKillCharOnFoot(target: Char): Char;
    /** Sets the character's objective to attack the player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS [01CC]*/
    setObjKillPlayerAnyMeans(target: Player): Char;
    /** Sets the character's objective to attack the player on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT [01CA]*/
    setObjKillPlayerOnFoot(target: Player): Char;
    /** Sets the character's objective to leave the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_LEAVE_CAR [01D3]*/
    setObjLeaveCar(vehicle: Car): Char;
    /** Clears the character's current objective
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_NO_OBJ [011C]*/
    setObjNoObj(): Char;
    /** Sets the character's objective to run into the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_RUN_TO_AREA [0238]*/
    setObjRunToArea(leftBottomX: float, leftBottomY: float, topRightX: float, topRightY: float): Char;
    /** Sets the character's objective to run at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_RUN_TO_COORD [0239]*/
    setObjRunToCoord(x: float, y: float): Char;
    /** Sets the character's objective to find any traffic vehicle nearby and take the driver's seat
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_STEAL_ANY_CAR [0377]*/
    setObjStealAnyCar(): Char;
    /** Sets the character's objective to stay in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_WAIT_IN_CAR [0196]*/
    setObjWaitInCar(): Char;
    /** Sets the character's objective to stay idle on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_OBJ_WAIT_ON_FOOT [0192]*/
    setObjWaitOnFoot(): Char;
    /** Makes a character immune to everything except the player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_ONLY_DAMAGED_BY_PLAYER [02A9]*/
    setOnlyDamagedByPlayer(state: boolean): Char;
    /** Sets the ped stat of the character
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_PERSONALITY [0243]*/
    setPersonality(pedstat: import('./enums').PedStat): Char;
    /** Sets the character's immunities
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_PROOFS [02AB]*/
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): Char;
    /** Makes the character run
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_RUNNING [0319]*/
    setRunning(state: boolean): Char;
    /** Makes the character shout once (sound ids 95, 96, 101, 103, 104, 105)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_SAY [041C]*/
    setSay(soundId: import('./enums').ScriptSound): Char;
    /** Makes the character maintain their position when attacked
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_STAY_IN_SAME_PLACE [0350]*/
    setStayInSamePlace(state: boolean): Char;
    /** Forces the AI-controlled character to stay on the current island
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_STAYS_IN_CURRENT_LEVEL [03FC]*/
    setStaysInCurrentLevel(state: boolean): Char;
    /** Sets whether the specified character is immune to headshots
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_SUFFERS_CRITICAL_HITS [0446]*/
    setSuffersCriticalHits(state: boolean): Char;
    /** Sets the character's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_THREAT_SEARCH [011A]*/
    setThreatSearch(pedThreat: int): Char;
    /** Sets whether the character should follow paths set for pedestrians
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_USE_PEDNODE_SEEK [0411]*/
    setUsePednodeSeek(state: boolean): Char;
    /** Sets whether the character is visible or not
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_VISIBLE [0337]*/
    setVisible(state: boolean): Char;
    /** Puts the character in the idle state for the given period of time
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHAR_WAIT_STATE [0372]*/
    setWaitState(stateId: import('./enums').WaitState, timeInMs: int): Char;
    /** Makes the character to stop looking at the other character (022C) or player (022D)
    *
    * https://library.sannybuilder.com/#/gta3?q=STOP_CHAR_LOOKING [022F]*/
    stopLooking(): Char;
    /** Returns the current vehicle of the character and adds it to the mission cleanup list (alts:03C0,0811,0484)
    *
    * https://library.sannybuilder.com/#/gta3?q=STORE_CAR_CHAR_IS_IN [00D9]*/
    storeCarIsIn(): Car;
    /** Returns the character's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time (alts:00D9,0811,0484)
    *
    * https://library.sannybuilder.com/#/gta3?q=STORE_CAR_CHAR_IS_IN_NO_SAVE [03C0]*/
    storeCarIsInNoSave(): Car;
    /** Rotates the character to face the other character
    *
    * https://library.sannybuilder.com/#/gta3?q=TURN_CHAR_TO_FACE_CHAR [020E]*/
    turnToFaceChar(char: Char): Char;
    /** Rotates the character to face the location
    *
    * https://library.sannybuilder.com/#/gta3?q=TURN_CHAR_TO_FACE_COORD [01BE]*/
    turnToFaceCoord(x: float, y: float, z: float): Char;
    /** Rotates the character to face the player
    *
    * https://library.sannybuilder.com/#/gta3?q=TURN_CHAR_TO_FACE_PLAYER [020F]*/
    turnToFacePlayer(player: Player): Char;
    /** Removes the character and requests a new special model to load
    *
    * https://library.sannybuilder.com/#/gta3?q=UNDRESS_CHAR [0352]*/
    undress(modelName: string): Char;
    /** Sets the character's wander direction
    *
    * https://library.sannybuilder.com/#/gta3?q=CHAR_WANDER_DIR [009C]*/
    wanderDir(direction: import('./enums').WanderDirection): Char;
    /** Pulls the character out of their car and places at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=WARP_CHAR_FROM_CAR_TO_COORD [0362]*/
    warpFromCarToCoord(x: float, y: float, z: float): Char;
    /** Puts the character in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=WARP_CHAR_INTO_CAR [036A]*/
    warpIntoCar(vehicle: Car): Char;
}
/** Intro Cutscene Logic
 * 
 * https://library.sannybuilder.com/#/gta3/classes/ChaseScene */
interface ChaseScene {
    /** Gets the control over a car from the chase scene
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CHASE_CAR [0439]*/
    GetChaseCar(carIndex: int): Car;
    /** Removes the car from the chase scene
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_CAR_FROM_CHASE [040A]*/
    RemoveCarFromChase(carIndex: int): void;
    /** Starts the chase scene (intro mission custscene)
    *
    * https://library.sannybuilder.com/#/gta3?q=START_CHASE_SCENE [0354]*/
    Start(startTime: float): void;
    /** Stops the chase scene (intro mission custscene)
    *
    * https://library.sannybuilder.com/#/gta3?q=STOP_CHASE_SCENE [0355]*/
    Stop(): void;
}
declare var ChaseScene: ChaseScene
/** Basic operations to copy and paste data
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Clipboard */
interface Clipboard {
    /** Copies the specified number of bytes of text from the clipboard to the address
    *
    * https://library.sannybuilder.com/#/gta3?q=READ_CLIPBOARD_DATA [0B20]*/
    ReadData(address: int, number: int): void;
    /** Copies  the specified number of bytes of text from the address to the clipboard
    *
    * https://library.sannybuilder.com/#/gta3?q=WRITE_CLIPBOARD_DATA [0B21]*/
    WriteData(address: int, number: int): void;
}
declare var Clipboard: Clipboard
/** Time Manipulation
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Clock */
interface Clock {
    /** Returns the time passed in milliseconds since the game started
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_GAME_TIMER [01BD]*/
    GetGameTimer(): int;
    /** Returns the number of minutes left until the clock matches the time specified
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_MINUTES_TO_TIME_OF_DAY [00C1]*/
    GetMinutesToTimeOfDay(hours: int, minutes: int): int;
    /** Returns the number of hours and minutes passed since midnight
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_TIME_OF_DAY [00BF]*/
    GetTimeOfDay(): {
        hours: int;
        minutes: int;
    };
    /** Restores the game time to the time when it was saved with 0253
    *
    * https://library.sannybuilder.com/#/gta3?q=RESTORE_CLOCK [0254]*/
    Restore(): void;
    /** Sets the current in-game time
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TIME_OF_DAY [00C0]*/
    SetTimeOfDay(hours: int, minutes: int): void;
    /** Sets the game to run at the specified speed
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TIME_SCALE [015D]*/
    SetTimeScale(scale: float): void;
    /** Saves the current time in game
    *
    * https://library.sannybuilder.com/#/gta3?q=STORE_CLOCK [0253]*/
    Store(): void;
}
declare var Clock: Clock
/** Static Crane Objects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Crane */
interface Crane {
    /** Activates a crane located within 100.0 units of the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=ACTIVATE_CRANE [01EE]*/
    Activate(craneX: float, craneY: float, pickupZoneX1: float, pickupZoneY1: float, pickupZoneX2: float, pickupZoneY2: float, dropOffX: float, dropOffY: float, dropOffZ: float, dropOffAngle: float): void;
    /** Activates a crusher crane located within 100.0 units of the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=ACTIVATE_CRUSHER_CRANE [02FB]*/
    ActivateCrusher(craneX: float, craneY: float, pickupZoneX1: float, pickupZoneY1: float, pickupZoneX2: float, pickupZoneY2: float, dropOffX: float, dropOffY: float, dropOffZ: float, dropOffAngle: float): void;
    /** Activates a military crane located within 100.0 units of the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=ACTIVATE_MILITARY_CRANE [0368]*/
    ActivateMilitary(craneX: float, craneY: float, pickupZoneX1: float, pickupZoneY1: float, pickupZoneX2: float, pickupZoneY2: float, dropOffX: float, dropOffY: float, dropOffZ: float, dropOffAngle: float): void;
    /** Deactivates a crane located within 100.0 units of the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=DEACTIVATE_CRANE [01EF]*/
    Deactivate(craneX: float, craneY: float): void;
    /** Checks if the military crane has collected all vehicles
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_MILITARY_CRANE_COLLECTED_ALL_CARS [03EC]*/
    HasMilitaryCollectedAllCars(): boolean;
    /** Checks if a crane located within 100.0 units of the specified location is lifting the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CRANE_LIFTING_CAR [03A0]*/
    IsLiftingCar(craneX: float, craneY: float, car: Car): boolean;
}
declare var Crane: Crane
/** End-game Credits
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Credits */
interface Credits {
    /** Returns true if the credits have finished
    *
    * https://library.sannybuilder.com/#/gta3?q=ARE_CREDITS_FINISHED [0436]*/
    AreFinished(): boolean;
    /** Makes the credits scroll up the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=START_CREDITS [0434]*/
    Start(): void;
    /** Stops the credits text from showing
    *
    * https://library.sannybuilder.com/#/gta3?q=STOP_CREDITS [0435]*/
    Stop(): void;
}
declare var Credits: Credits
/** Mission Cutscenes
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Cutscene */
interface Cutscene {
    /** Ends the current cutscene, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_CUTSCENE [02EA]*/
    Clear(): void;
    /** Returns the time in milliseconds passed since the cutscene has started (02E7)
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CUTSCENE_TIME [02E8]*/
    GetTime(): int;
    /** Returns true if the cutscene has finished
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_CUTSCENE_FINISHED [02E9]*/
    HasFinished(): boolean;
    /** Loads the data for the specified cutscene
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_CUTSCENE [02E4]*/
    Load(name: string): void;
    /** Sets the position for a cutscene
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CUTSCENE_OFFSET [0244]*/
    SetOffset(x: float, y: float, z: float): void;
    /** Starts the loaded cutscene (02E4)
    *
    * https://library.sannybuilder.com/#/gta3?q=START_CUTSCENE [02E7]*/
    Start(): void;
}
declare var Cutscene: Cutscene
/** CutsceneHead Objects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/CutsceneHead */
declare class CutsceneHead {
    constructor(handle: number);
    /** Creates a head attached to the cutscene object (02E5)
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_CUTSCENE_HEAD [02F4]*/
    static Create(cutsceneObject: CutsceneObject, modelId: int): CutsceneHead;
    /** Sets the animation of the cuscene head
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CUTSCENE_HEAD_ANIM [02F5]*/
    setAnim(animation: string): CutsceneHead;
}
/** Cutscene Objects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/CutsceneObject */
declare class CutsceneObject {
    constructor(handle: number);
    /** Creates a new cutscene object with the model
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_CUTSCENE_OBJECT [02E5]*/
    static Create(modelId: int): CutsceneObject;
    /** Sets the animation of the cutscene object
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CUTSCENE_ANIM [02E6]*/
    setAnim(animation: string): CutsceneObject;
}
/** Various Debugging Utilities
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Debugger */
interface Debugger {
    /** Deactivates debug features in this script
    *
    * https://library.sannybuilder.com/#/gta3?q=DEBUG_OFF [00C4]*/
    Disable(): void;
    /** Activates debug features in this script
    *
    * https://library.sannybuilder.com/#/gta3?q=DEBUG_ON [00C3]*/
    Enable(): void;
}
declare var Debugger: Debugger
/** Dodo from the 'A Drop In The Ocean' Mission
 * 
 * https://library.sannybuilder.com/#/gta3/classes/DrugDropOff */
interface DrugDropOff {
    /** Stores the current coordinates of the plane in the 'A Drop In The Ocean' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=FIND_DROP_OFF_PLANE_COORDINATES [035A]*/
    FindPlaneCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the plane in the 'A Drop In The Ocean' mission has been destroyed
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_DROP_OFF_PLANE_BEEN_SHOT_DOWN [0359]*/
    HasPlaneBeenShotDown(): boolean;
    /** Creates a plane flying along the prerecorded path in the 'A Drop In The Ocean' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=START_DRUG_DROP_OFF [0358]*/
    Start(): void;
}
declare var DrugDropOff: DrugDropOff
/** Dodo from the 'S.A.M.' Mission
 * 
 * https://library.sannybuilder.com/#/gta3/classes/DrugRun */
interface DrugRun {
    /** Returns the current coordinates of the plane in the 'S.A.M.' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=FIND_DRUG_PLANE_COORDINATES [03A6]*/
    FindPlaneCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the plane in the 'S.A.M.' mission has landed
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_DRUG_RUN_BEEN_COMPLETED [033B]*/
    HasBeenCompleted(): boolean;
    /** Returns true if the plane in the 'S.A.M.' mission has been destroyed
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_DRUG_PLANE_BEEN_SHOT_DOWN [033C]*/
    HasPlaneBeenShotDown(): boolean;
    /** Creates a plane flying along the prerecorded path in the 'S.A.M.' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=START_DRUG_RUN [033A]*/
    Start(): void;
}
declare var DrugRun: DrugRun
/** Loading DLL files and finding exported functions
 * 
 * https://library.sannybuilder.com/#/gta3/classes/DynamicLibrary */
declare class DynamicLibrary {
    constructor(handle: number);
    /** Loads the specified module (usually a dynamic-link library (DLL)) into the address space of the game
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_DYNAMIC_LIBRARY [0AA2]*/
    static Load(fileName: string): DynamicLibrary | undefined;
    /** Frees the loaded dynamic-link library (DLL) module and unloads it from the address space of the game
    *
    * https://library.sannybuilder.com/#/gta3?q=FREE_DYNAMIC_LIBRARY [0AA3]*/
    free(): void;
    /** Retrieves the address of an exported function or variable from the specified dynamic-link library (DLL)
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_DYNAMIC_LIBRARY_PROCEDURE [0AA4]*/
    getProcedure(procName: string): int | undefined;
}
/** Reading and writing files
 * 
 * https://library.sannybuilder.com/#/gta3/classes/File */
declare class File {
    constructor(handle: number);
    /** Opens the file in the specified mode, sets the condition result to True if the open operation has been successful, or to False otherwise, and writes the file handle to the variable
    *
    * https://library.sannybuilder.com/#/gta3?q=OPEN_FILE [0A9A]*/
    static Open(filePathName: string, mode: import('./enums').FileMode): File | undefined;
    /** Closes the file and frees the memory
    *
    * https://library.sannybuilder.com/#/gta3?q=CLOSE_FILE [0A9B]*/
    close(): void;
    /** Gets the file size in bytes
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_FILE_SIZE [0A9C]*/
    getSize(): int;
    /** Returns true if all data has been read or any file error occurred
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_END_OF_FILE_REACHED [0AD6]*/
    isEndReached(): boolean;
    /** Reads the specified number of bytes from the opened file and writes them to the memory region starting from the address of the destination variable
    *
    * https://library.sannybuilder.com/#/gta3?q=READ_FROM_FILE [0A9D]*/
    read(size: int): int;
    /** Reads up to maxLength-1 text characters from the file until the newline or the end-of-file is reached. Result will be null-terminated string
    *
    * https://library.sannybuilder.com/#/gta3?q=READ_STRING_FROM_FILE [0AD7]*/
    readString(storeTo: string, maxLength: int): boolean;
    /** Extracts data from a file using fscanf
    *
    * https://library.sannybuilder.com/#/gta3?q=SCAN_FILE [0ADA]*/
    scan(format: string): {
        nValues: int;
        values: number[];
    } | undefined;
    /** Sets the position of the file to the given offset from the origin
    *
    * https://library.sannybuilder.com/#/gta3?q=FILE_SEEK [0AD5]*/
    seek(offset: int, origin: unknown): boolean;
    /** Copies the specified number of bytes of the memory region starting from the address of the source variable to the file
    *
    * https://library.sannybuilder.com/#/gta3?q=WRITE_TO_FILE [0A9E]*/
    write(size: int, source: int): File;
    /** Writes a formatted string to the file
    *
    * https://library.sannybuilder.com/#/gta3?q=WRITE_FORMATTED_STRING_TO_FILE [0AD9]*/
    writeFormattedString(format: string, ...args: number[]): File;
    /** Copies data from the source string to the file up to but not including the null character
    *
    * https://library.sannybuilder.com/#/gta3?q=WRITE_STRING_TO_FILE [0AD8]*/
    writeString(source: string): boolean;
}
/** File search operations
 * 
 * https://library.sannybuilder.com/#/gta3/classes/FindFile */
declare class FindFile {
    constructor(handle: number);
    /** Searches a directory for a file or subdirectory with a name that matches a specific name (or partial name if wildcards are used)
    *
    * https://library.sannybuilder.com/#/gta3?q=FIND_FIRST_FILE [0AE6]*/
    static First(searchMask: string): {
        handle: FindFile;
        fileName: string;
    } | undefined;
    /** Closes a file search handle opened by 0AE6
    *
    * https://library.sannybuilder.com/#/gta3?q=FIND_CLOSE [0AE8]*/
    close(): FindFile;
    /** Continues a file search from a previous call to 0AE6
    *
    * https://library.sannybuilder.com/#/gta3?q=FIND_NEXT_FILE [0AE7]*/
    next(): string | undefined;
}
/** File System operations such as copying or deleting files
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Fs */
interface Fs {
    /** Copies an existing directory to a new directory and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=COPY_DIRECTORY [0B05]*/
    CopyDirectory(dirPath: string, newDirPath: string): boolean;
    /** Copies an existing file to a new file and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=COPY_FILE [0B04]*/
    CopyFile(fileName: string, newFileName: string): boolean;
    /** Creates a directory at the given path
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_DIRECTORY [0AE5]*/
    CreateDirectory(path: string): boolean;
    /** Deletes a directory at the given path and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=DELETE_DIRECTORY [0B01]*/
    DeleteDirectory(path: string, recursive: boolean): boolean;
    /** Deletes a file at the given path and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=DELETE_FILE [0B00]*/
    DeleteFile(path: string): boolean;
    /** Returns true if a directory at the given path exists
    *
    * https://library.sannybuilder.com/#/gta3?q=DOES_DIRECTORY_EXIST [0AE4]*/
    DoesDirectoryExist(path: string): boolean;
    /** Returns true if a file at the given path exists
    *
    * https://library.sannybuilder.com/#/gta3?q=DOES_FILE_EXIST [0AAB]*/
    DoesFileExist(path: string): boolean;
    /** Moves an existing directory and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=MOVE_DIRECTORY [0B03]*/
    MoveDirectory(dirPath: string, newDirPath: string): boolean;
    /** Moves an existing file and returns true if the operation is successful
    *
    * https://library.sannybuilder.com/#/gta3?q=MOVE_FILE [0B02]*/
    MoveFile(fileName: string, newFileName: string): boolean;
    /** Sets the current working directory (cwd) to a predefined location with a value of 0 or 1, or to an arbitrary path with a string value
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CURRENT_DIRECTORY [0A99]*/
    SetCurrentDirectory(path: unknown): void;
}
declare var Fs: Fs
/** Various 2D Effects (Shadows, Lights, Coronas, Particles)
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Fx */
interface Fx {
    /** Creates an explosion at the point
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_EXPLOSION [020C]*/
    AddExplosion(x: float, y: float, z: float, type: import('./enums').ExplosionType): void;
    /** Adds a moving particle effect
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_MOVING_PARTICLE_EFFECT [039D]*/
    AddMovingParticleEffect(particle: import('./enums').ParticleObject, x: float, y: float, z: float, strengthX: float, strengthY: float, strengthZ: float, scale: float, r: int, g: int, b: int, durationInMs: int): void;
    /** Adds a particle effect at the location, or removes it if the last argument is true
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_PARTICLE_EFFECT [02A2]*/
    AddParticleEffect(type: int, x: float, y: float, z: float, remove: boolean): void;
    /** Creates a single particle at the specified coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_SINGLE_PARTICLE [0437]*/
    CreateSingleParticle(type: int, x: float, y: float, z: float, strengthX: float, strengthY: float, strengthZ: float, scale: float): void;
    /** Displays a corona with fade in-out effect at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=DRAW_CORONA [024F]*/
    DrawCorona(x: float, y: float, z: float, size: float, coronaType: import('./enums').CoronaType, flareType: import('./enums').FlareType, r: int, g: int, b: int): void;
    /** Creates a light of the specified color at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=DRAW_LIGHT [0250]*/
    DrawLight(x: float, y: float, z: float, r: int, g: int, b: int): void;
    /** Draws a shadow in the current frame
    *
    * https://library.sannybuilder.com/#/gta3?q=DRAW_SHADOW [016F]*/
    DrawShadow(textureType: import('./enums').ShadowTextureType, x: float, y: float, z: float, angle: float, length: float, intensity: int, r: int, g: int, b: int): void;
    /** Updates the steaming effect around the specified cutscene object during the final scene of the 'Bomb Da Base: Act II' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=UPDATE_BOAT_FOAM_ANIMATION [043B]*/
    UpdateBoatFoamAnimation(object: CutsceneObject): void;
}
declare var Fx: Fx
/** Game State
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Game */
interface Game {
    /** Schedules save game menu to be displayed on next render frame
    *
    * https://library.sannybuilder.com/#/gta3?q=ACTIVATE_SAVE_MENU [03D8]*/
    ActivateSaveMenu(): void;
    /** Returns true if the player has used any of the cheats
    *
    * https://library.sannybuilder.com/#/gta3?q=ARE_ANY_CAR_CHEATS_ACTIVATED [0445]*/
    AreAnyCarCheatsActivated(): boolean;
    /** Returns true if the game uses metric measurements (meters instead of feet)
    *
    * https://library.sannybuilder.com/#/gta3?q=ARE_MEASUREMENTS_IN_METRES [0424]*/
    AreMeasurementsInMeters(): boolean;
    /** Clears the ped type's hostility to other ped types (03F1)
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_THREAT_FOR_PED_TYPE [03F2]*/
    ClearThreatForPedType(type: import('./enums').PedType, threatMask: int): void;
    /** Creates a hidden package pickup at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_COLLECTABLE1 [02EC]*/
    CreateCollectable(x: float, y: float, z: float): void;
    /** Returns the number of hidden packages collected
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_COLLECTABLE1S_COLLECTED [03E1]*/
    GetCollectablesCollected(): int;
    /** Returns game FPS
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_FRAMERATE [2244]*/
    GetFramerate(): int;
    /** Returns the version id of the game
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_GAME_VERSION [05E5]*/
    GetVersion(): int;
    /** Returns false if save game menu was requested with activate_save_menu command, but not displayed yet
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_SAVE_GAME_FINISHED [03D9]*/
    HasSaveGameFinished(): boolean;
    /** Returns true if the current game is an Australian release
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_AUSTRALIAN_GAME [059A]*/
    IsAustralian(): boolean;
    /** Returns true if the game language is set to French
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_FRENCH_GAME [040B]*/
    IsFrench(): boolean;
    /** Returns true if the game language is set to German
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_GERMAN_GAME [040C]*/
    IsGerman(): boolean;
    /** Returns true if the game has no violent elements censored
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_NASTY_GAME [0351]*/
    IsNasty(): boolean;
    /** Returns true on PC versions of the game
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PC_VERSION [0485]*/
    IsPcVersion(): boolean;
    /** Returns true if the ped type is hostile to other ped types
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_THREAT_FOR_PED_TYPE [042A]*/
    IsThreatForPedType(type: import('./enums').PedType, threatMask: int): boolean;
    /** Returns true if the game version is vanilla 1.0
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_GAME_VERSION_ORIGINAL [0AA9]*/
    IsVersionOriginal(): boolean;
    /** Sets whether all cars receive damage
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_ALL_CARS_CAN_BE_DAMAGED [03F4]*/
    SetAllCarsCanBeDamaged(state: boolean): void;
    /** Sets whether all spawned taxis have their roof light enabled or not
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_ALL_TAXI_LIGHTS [021F]*/
    SetAllTaxiLights(state: boolean): void;
    /** Makes the two characters chat for the specified period of time
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CHARS_CHATTING [03F9]*/
    SetCharsChatting(char1: Char, char2: Char, duration: int): void;
    /** Sets the total number of hidden packages to collect
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_COLLECTABLE1_TOTAL [02ED]*/
    SetCollectableTotal(amount: int): void;
    /** Makes pedestrians pay no attention to the player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_EVERYONE_IGNORE_PLAYER [03BF]*/
    SetEveryoneIgnorePlayer(player: Player, state: boolean): void;
    /** Sets whether the player can use bomb shops for free
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_FREE_BOMBS [021D]*/
    SetFreeBombs(state: boolean): void;
    /** Defines whether the player can respray their car for free
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_FREE_RESPRAYS [0335]*/
    SetFreeResprays(state: boolean): void;
    /** Specifies that the intro cutscene is playing
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_INTRO_IS_PLAYING [043D]*/
    SetIntroIsPlaying(state: boolean): void;
    /** Sets the maximum wanted level the player can receive
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_MAX_WANTED_LEVEL [01F0]*/
    SetMaxWantedLevel(wantedLevel: int): void;
    /** Sets whether cops should ignore the player regardless of wanted level
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_POLICE_IGNORE_PLAYER [01F7]*/
    SetPoliceIgnorePlayer(player: Player, state: boolean): void;
    /** Sets patrol cars to Police cars and Enforcers
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_SWAT_REQUIRED [02BC]*/
    SetSwatRequired(state: boolean): void;
    /** Sets the ped type's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_THREAT_FOR_PED_TYPE [03F1]*/
    SetThreatForPedType(type: import('./enums').PedType, threatMask: int): void;
    /** Sets sensitivity to crime, changing how many crimes a player can commit before police begin to pursue
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_WANTED_MULTIPLIER [03C7]*/
    SetWantedMultiplier(multiplier: float): void;
    /** Enables the second police helicopter that chases you
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_HELICOPTER [0231]*/
    SwitchHelicopter(state: boolean): void;
}
declare var Game: Game
/** Gangs Configuration
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Gang */
interface Gang {
    /** Sets the car used by members of the specified gang
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_GANG_CAR_MODEL [0236]*/
    SetCarModel(gangId: import('./enums').GangType, modelId: int): void;
    /** Forces the game to spawn the gang members based on the specified override value
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_GANG_PED_MODEL_PREFERENCE [0410]*/
    SetPedModelPreference(gangId: import('./enums').GangType, override: import('./enums').GangModelOverride): void;
    /** Sets the weapons that the specified gang can use
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_GANG_WEAPONS [0237]*/
    SetWeapons(gangId: import('./enums').GangType, weaponType1: import('./enums').WeaponType, weaponType2: import('./enums').WeaponType): void;
}
declare var Gang: Gang
/** Garages
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Garage */
declare class Garage {
    constructor(handle: number);
    /** Creates a garage at the specified coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_GARAGE [0219]*/
    static Create(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, type: import('./enums').GarageType): Garage;
    /** Creates a garage with target model 
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_GARAGE_WITH_CAR_MODEL [021A]*/
    static CreateWithCarModel(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float, type: import('./enums').GarageType, modelId: int): Garage;
    /** Activates the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=ACTIVATE_GARAGE [0299]*/
    activate(): Garage;
    /** Sets the garage's type
    *
    * https://library.sannybuilder.com/#/gta3?q=CHANGE_GARAGE_TYPE [02FA]*/
    changeType(type: import('./enums').GarageType): Garage;
    /** Changes the type of garage and target model
    *
    * https://library.sannybuilder.com/#/gta3?q=CHANGE_GARAGE_TYPE_WITH_CAR_MODEL [03A5]*/
    changeTypeWithCarModel(type: import('./enums').GarageType, modelId: int): Garage;
    /** Closes the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=CLOSE_GARAGE [0361]*/
    close(): Garage;
    /** Deactivates the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=DEACTIVATE_GARAGE [02B9]*/
    deactivate(): Garage;
    /** Returns true if the garage contains the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=DOES_GARAGE_CONTAIN_CAR [0422]*/
    doesContainCar(vehicle: Car): boolean;
    /** Returns true if the player's car has been resprayed by the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_RESPRAY_HAPPENED [0329]*/
    hasResprayHappened(): boolean;
    /** Returns true if the import garage has collected a vehicle from the predefined list
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_IMPORT_GARAGE_SLOT_BEEN_FILLED [03D4]*/
    hasSlotBeenFilled(importSlot: int): boolean;
    /** Returns true if a vehicle is in the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_IN_MISSION_GARAGE [021C]*/
    isCarInMission(): boolean;
    /** Returns true if the garage's door is closed
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_GARAGE_CLOSED [03B1]*/
    isClosed(): boolean;
    /** Returns true if the garage's door is open
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_GARAGE_OPEN [03B0]*/
    isOpen(): boolean;
    /** Disables special camera when in the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=NO_SPECIAL_CAMERA_FOR_THIS_GARAGE [03DA]*/
    noSpecialCameraForThisGarage(): Garage;
    /** Opens the garage
    *
    * https://library.sannybuilder.com/#/gta3?q=OPEN_GARAGE [0360]*/
    open(): Garage;
    /** Sets the garage door to swing open instead of slide open
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_ROTATING_GARAGE_DOOR [03BB]*/
    setRotatingDoor(): Garage;
    /** Sets the garage to only accept the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TARGET_CAR_FOR_MISSION_GARAGE [021B]*/
    setTargetCarForMission(vehicle: Car): Garage;
}
/** Game UI
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Hud */
interface Hud {
    /** Removes the onscreen counter (0150 or 03C4)
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_ONSCREEN_COUNTER [0151]*/
    ClearCounter(counter: int): void;
    /** Removes the onscreen timer
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_ONSCREEN_TIMER [014F]*/
    ClearTimer(timer: int): void;
    /** Displays an onscreen counter, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/gta3?q=DISPLAY_ONSCREEN_COUNTER [0150]*/
    DisplayCounter(counter: int, display: import('./enums').CounterDisplay): void;
    /** Displays an onscreen counter with the text, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/gta3?q=DISPLAY_ONSCREEN_COUNTER_WITH_STRING [03C4]*/
    DisplayCounterWithString(counter: int, display: import('./enums').CounterDisplay, text: string): void;
    /** Creates a countdown onscreen timer
    *
    * https://library.sannybuilder.com/#/gta3?q=DISPLAY_ONSCREEN_TIMER [014E]*/
    DisplayTimer(timer: int): void;
    /** Creates a countdown onscreen timer with the text
    *
    * https://library.sannybuilder.com/#/gta3?q=DISPLAY_ONSCREEN_TIMER_WITH_STRING [03C3]*/
    DisplayTimerWithString(timer: int, text: string): void;
    /** Draws a box at the specified screen X and Y position, with the specified size and RGBA colors
    *
    * https://library.sannybuilder.com/#/gta3?q=DRAW_RECT [038E]*/
    DrawRect(x: float, y: float, width: float, height: float, r: int, g: int, b: int, a: int): void;
    /** Draws a loaded texture (038F) at the specified on-screen X and Y coordinates, with the specified size and RGBA color
    *
    * https://library.sannybuilder.com/#/gta3?q=DRAW_SPRITE [038D]*/
    DrawSprite(spriteSlot: int, offsetLeft: float, offsetTop: float, width: float, height: float, r: int, g: int, b: int, a: int): void;
    /** Makes a specific part of the HUD disappear and reappear several times
    *
    * https://library.sannybuilder.com/#/gta3?q=FLASH_HUD_OBJECT [03E7]*/
    FlashObject(object: import('./enums').HudObject): void;
    /** Makes the on-screen timer stop updating
    *
    * https://library.sannybuilder.com/#/gta3?q=FREEZE_ONSCREEN_TIMER [0396]*/
    FreezeTimer(state: boolean): void;
    /** Loads the specified splash screen
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_SPLASH_SCREEN [044D]*/
    LoadSplash(txdName: string): void;
    /** Causes the next texture to be drawn (038D) before the fade is drawn
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_SPRITES_DRAW_BEFORE_FADE [03E3]*/
    SetSpritesDrawBeforeFade(state: boolean): void;
    /** Enables widescreen
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_WIDESCREEN [02A3]*/
    SwitchWidescreen(state: boolean): void;
}
declare var Hud: Hud
/** ImGui integration
 * 
 * https://library.sannybuilder.com/#/gta3/classes/ImGui */
interface ImGui {
    /** Adds a line form point A to B
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_DRAWLIST_ADD_LINE [2243]*/
    AddLine(drawList: int, p1X: float, p1Y: float, p2X: float, p2Y: float, r: int, g: int, b: int, a: int, thickness: float): void;
    /** Adds text at specified position
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_DRAWLIST_ADD_TEXT [2242]*/
    AddText(drawList: int, posX: float, posY: float, r: int, g: int, b: int, a: int, text: string): void;
    /** Creates the window
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_BEGIN [2202]*/
    Begin(windowName: string, state: boolean, noTitleBar: boolean, noResize: boolean, noMove: boolean, autoResize: boolean): boolean;
    /** Creates a child window widget inside the main window
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_BEGIN_CHILD [2206]*/
    BeginChild(uniqueId: string): void;
    /** Creates a child window widget inside the main window
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_BEGIN_CHILDEX [2252]*/
    BeginChildEx(uniqueId: string, width: float, height: float, border: boolean, flags: int): void;
    /** Disables ImGui widgets inside this block
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_BEGIN_DISABLED [2253]*/
    BeginDisabled(disabled: boolean): void;
    /** Creates a unique frame with its own space in memory. Must be enclosed with IMGUI_END_FRAME
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_BEGIN_FRAME [2200]*/
    BeginFrame(uniqueId: string): void;
    /** Creates the main menu bar
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_BEGIN_MAINMENUBAR [2204]*/
    BeginMainMenuBar(uniqueId: string): void;
    /** Begins a ImGui menu block
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_BEGIN_MENU [2255]*/
    BeginMenu(label: string, enabled: boolean): boolean;
    /** Creates a bullet point
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_BULLET [2214]*/
    Bullet(): void;
    /** Creates the button
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_BUTTON [2218]*/
    Button(buttonName: string, width: float, height: float): boolean;
    /** Creates the arrow button in the specified direction
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_ARROW_BUTTON [221C]*/
    ButtonArrow(name: string, imGuiDir: unknown): boolean;
    /** Creates the button with custom colors
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_COLOR_BUTTON [221B]*/
    ButtonColored(buttonName: string, red: float, green: float, blue: float, alpha: float, width: float, height: float): boolean;
    /** Creates a ImGui button with specified image
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_IMAGE_BUTTON [2219]*/
    ButtonImage(name: string, image: int, width: float, height: float): boolean;
    /** Creates the invisible button
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_INVISIBLE_BUTTON [221A]*/
    ButtonInvisible(buttonName: string, width: float, height: float): boolean;
    /** Returns the width and height of the given text
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_CALC_TEXT_SIZE [224B]*/
    CalcTextSize(text: string): {
        width: float;
        height: float;
    };
    /** Creates the checkbox
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_CHECKBOX [2215]*/
    Checkbox(label: string, isChecked: boolean): boolean;
    /** Adds the collapsing header
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_COLLAPSING_HEADER [2209]*/
    CollapsingHeader(label: string): boolean;
    /** Creates the color picker and sets the default color (0-255)
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_COLOR_PICKER [2223]*/
    ColorPicker(label: string): {
        red: int;
        green: int;
        blue: int;
        alpha: int;
    };
    /** Divides the window width into N columns. Close this with Columns(1)
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_COLUMNS [2229]*/
    Columns(count: int): void;
    /** Creates a combo box widget. Pass options separated by commas "item1,item2,item3"
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_COMBO [2216]*/
    ComboBox(name: string, options: string, selection: int): int;
    /** Creates the dummy widget. Used for spacing
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_DUMMY [2226]*/
    Dummy(width: float, height: float): void;
    /** Ends the window
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_END [2203]*/
    End(): void;
    /** Ends the child window widget created with 0C25
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_END_CHILD [2207]*/
    EndChild(): void;
    /** Closes the ImGui disable block
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_END_DISABLED [2254]*/
    EndDisabled(): void;
    /** Ends unique ImGui frame created with IMGUI_BEGIN_FRAME
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_END_FRAME [2201]*/
    EndFrame(): void;
    /** Ends the main menu bar
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_END_MAINMENUBAR [2205]*/
    EndMainMenuBar(): void;
    /** Ends a ImGui menu block
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_END_MENU [2256]*/
    EndMenu(): void;
    /** Frees a loaded image data
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_FREE_IMAGE [2239]*/
    FreeImage(image: int): void;
    /** Returns pointer to ImGui background drawlist
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_BACKGROUND_DRAWLIST [2240]*/
    GetBackgroundDrawList(): int;
    /** Returns the width & height of the display
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_DISPLAY_SIZE [224E]*/
    GetDisplaySize(): {
        width: float;
        height: float;
    };
    /** Returns pointer to foreground draw list
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_FOREGROUND_DRAWLIST [223F]*/
    GetForegroundDrawList(): int;
    /** Returns the ImGui frame height
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_FRAME_HEIGHT [2248]*/
    GetFrameHeight(): float;
    /** Returns the ImGuiRedux version
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_PLUGIN_VERSION [2246]*/
    GetPluginVersion(): int;
    /** Returns the width and height scaling factor based on the window size
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_SCALING_SIZE [224D]*/
    GetScalingSize(uniqueId: string, count: int, spacing: boolean): {
        x: float;
        y: float;
    };
    /** Returns the ImGui version
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_VERSION [2245]*/
    GetVersion(): int;
    /** Returns the content region width of the window
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_WINDOW_CONTENT_REGION_WIDTH [224C]*/
    GetWindowContentRegionWidth(uniqueId: string): float;
    /** Returns pointer to ImGui window drawList
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_WINDOW_DRAWLIST [2241]*/
    GetWindowDrawlist(): int;
    /** Returns the x,y coordinates of the window on the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_WINDOW_POS [2249]*/
    GetWindowPos(uniqueId: string): {
        x: float;
        y: float;
    };
    /** Returns the width and height of the window
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_GET_WINDOW_SIZE [224A]*/
    GetWindowSize(uniqueId: string): {
        width: float;
        height: float;
    };
    /** Creates the float input
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_INPUT_FLOAT [2220]*/
    InputFloat(label: string, initValue: float, min: float, max: float): float;
    /** Creates the int input
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_INPUT_INT [221F]*/
    InputInt(label: string, initValue: int, min: int, max: int): int;
    /** Creates the text input
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_INPUT_TEXT [2221]*/
    InputText(label: string): string;
    /** Returns true if the previous widget is in active state
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_IS_ITEM_ACTIVE [222F]*/
    IsItemActive(uniqueId: string): boolean;
    /** Returns true if the previous widget is clicked
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_IS_ITEM_CLICKED [2230]*/
    IsItemClicked(uniqueId: string): boolean;
    /** Returns true if the previous widget is focused
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_IS_ITEM_FOCUSED [2231]*/
    IsItemFocused(uniqueId: string): boolean;
    /** Returns true if the previous widget is hovered with mouse
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_IS_ITEM_HOVERED [2232]*/
    IsItemHovered(uniqueId: string): boolean;
    /** Loads a image file from disk. Relative to CLEO directory
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_LOAD_IMAGE [2238]*/
    LoadImage(path: string): int;
    /** Adds the menu item
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_MENU_ITEM [2224]*/
    MenuItem(text: string, selected: boolean, enabled: boolean): boolean;
    /** Creates a new line for the next widget
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_NEWLINE [2228]*/
    NewLine(): void;
    /** Puts the next widgets on the next column. Used alongside 0C16
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_NEXT_COLUMN [222A]*/
    NextColumn(): void;
    /** Removes the pushed item width (0C27) from the stack
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_POP_ITEM_WIDTH [222E]*/
    PopItemWidth(): void;
    /** Removes the recent ImGuiCol from the stack
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_POP_STYLE_COLOR [223E]*/
    PopStyleColor(count: int): void;
    /** Removes the recent imGuiStyleVar from the stack
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_POP_STYLE_VAR [223D]*/
    PopStyleVar(count: int): void;
    /** Sets the item width for the next widgets
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_PUSH_ITEM_WIDTH [222D]*/
    PushItemWidth(width: float): void;
    /** Pushes a ImGuiCol value to the stack. Use PopStyleColor to undo the effect
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_PUSH_STYLE_COLOR [223C]*/
    PushStyleColor(imGuiCol: import('./enums').ImGuiCol, r: int, g: int, b: int, a: int): void;
    /** Pushes a ImGuiStyleVar value to the stack. Use PopStyleVar to undo the effect
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_PUSH_STYLE_VAR [223A]*/
    PushStyleVar(imGuiStyleVar: import('./enums').ImGuiStyleVar, val: float): void;
    /** Pushes a ImGuiStyleVar value to the stack. Use PopStyleVar to undo the effect
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_PUSH_STYLE_VAR2 [223B]*/
    PushStyleVar2(imGuiStyleVar: import('./enums').ImGuiStyleVar, x: float, y: float): void;
    /** Creates the radio button
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_RADIO_BUTTON [2222]*/
    RadioButton(label: string, selectedBtn: int, btnNo: int): int;
    /** Appends the next widget to the same line as the previous widget
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SAMELINE [2227]*/
    SameLine(): void;
    /** Adds the selectable widget
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SELECTABLE [2225]*/
    Selectable(text: string, selected: boolean): boolean;
    /** Adds a horizontal separator line
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SEPARATOR [222C]*/
    Separator(): void;
    /** Sets the width of the column
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_COLUMN_WIDTH [2251]*/
    SetColumnWidth(index: int, width: float): void;
    /** Toggles the cursor
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_CURSOR_VISIBLE [2247]*/
    SetCursorVisible(show: boolean): void;
    /** Sets image background color
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_IMAGE_BG_COLOR [2236]*/
    SetImageBgColor(r: float, g: float, b: float, a: float): void;
    /** Sets image tint color
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_IMAGE_TINT_COLOR [2237]*/
    SetImageTintColor(r: float, g: float, b: float, a: float): void;
    /** Sets the value of input float & slider float widget
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_ITEM_FLOAT [2234]*/
    SetItemValueFloat(id: string, val: float): void;
    /** Sets the value of input int & slider int widget
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_ITEM_INT [2233]*/
    SetItemValueInt(id: string, val: int): void;
    /** Sets value of input text widget
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_ITEM_TEXT [2235]*/
    SetItemValueText(id: string, val: string): void;
    /** Displays a text message on top left corner of the screen. Useful for games without `showTextBox(...)` support
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_MESSAGE [2250]*/
    SetMessage(text: string): void;
    /** Sets the current window position. Applies to the next window ( aka Begin() )
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_NEXT_WINDOW_POS [220C]*/
    SetNextWindowPos(x: float, y: float, imGuiCond: import('./enums').ImGuiCond): void;
    /** Sets the current window size. Applies to the next window ( aka Begin() )
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_NEXT_WINDOW_SIZE [220D]*/
    SetNextWindowSize(width: float, height: float, imGuiCond: import('./enums').ImGuiCond): void;
    /** Sets the background transparency of next window (0.0f-1.0f)
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_NEXT_WINDOW_TRANSPARENCY [224F]*/
    SetNextWindowTransparency(alpha: float): void;
    /** Creates the popup window with the given text
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_TOOLTIP [2217]*/
    SetTooltip(text: string): void;
    /** Sets the current window position. Must be called inside Begin()...End()
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_WINDOW_POS [220A]*/
    SetWindowPos(x: float, y: float, imGuiCond: import('./enums').ImGuiCond): void;
    /** Sets the current window size. Must be called inside Begin()...End()
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SET_WINDOW_SIZE [220B]*/
    SetWindowSize(width: float, height: float, imGuiCond: import('./enums').ImGuiCond): void;
    /** Creates the float slider input
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SLIDER_FLOAT [221E]*/
    SliderFloat(label: string, initValue: float, min: float, max: float): float;
    /** Creates the int slider input
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SLIDER_INT [221D]*/
    SliderInt(label: string, initValue: int, min: int, max: int): int;
    /** Adds some spacing after the previous widget
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_SPACING [222B]*/
    Spacing(): void;
    /** Pass tab names separated by comma. Returns the index of the visible tab
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_TABS [2208]*/
    Tabs(name: string, tabNames: string): int;
    /** Creates the text line
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_TEXT [220E]*/
    Text(text: string): void;
    /** Displays a center aligned ImGui text widget
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_TEXT_CENTERED [220F]*/
    TextCentered(text: string): void;
    /** Creates the text line of the given RGBA color (0.0f-1.0f)
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_TEXT_COLORED [2212]*/
    TextColored(text: string, red: float, green: float, blue: float, alpha: float): void;
    /** Creates the text line with the disabled color ( Grayish by default )
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_TEXT_DISABLED [2210]*/
    TextDisabled(text: string): void;
    /** Creates the text line with a bullet point
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_BULLET_TEXT [2213]*/
    TextWithBullet(text: string): void;
    /** Creates the text line that wraps to a newline if the text goes beyond the window width
    *
    * https://library.sannybuilder.com/#/gta3?q=IMGUI_TEXT_WRAPPED [2211]*/
    TextWrapped(text: string): void;
}
declare var ImGui: ImGui
/** Reading and writing .ini files
 * 
 * https://library.sannybuilder.com/#/gta3/classes/IniFile */
interface IniFile {
    /** Reads a floating-point value from the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=READ_FLOAT_FROM_INI_FILE [0AF2]*/
    ReadFloat(path: string, section: string, key: string): float | undefined;
    /** Reads an integer value from the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=READ_INT_FROM_INI_FILE [0AF0]*/
    ReadInt(path: string, section: string, key: string): int | undefined;
    /** Reads a string value from the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=READ_STRING_FROM_INI_FILE [0AF4]*/
    ReadString(path: string, section: string, key: string): string | undefined;
    /** Writes the floating-point value to the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=WRITE_FLOAT_TO_INI_FILE [0AF3]*/
    WriteFloat(value: float, path: string, section: string, key: string): boolean;
    /** Writes the integer value to the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=WRITE_INT_TO_INI_FILE [0AF1]*/
    WriteInt(value: int, path: string, section: string, key: string): boolean;
    /** Writes the string value to the ini file
    *
    * https://library.sannybuilder.com/#/gta3?q=WRITE_STRING_TO_INI_FILE [0AF5]*/
    WriteString(value: string, path: string, section: string, key: string): boolean;
}
declare var IniFile: IniFile
/** Rampages Logic
 * 
 * https://library.sannybuilder.com/#/gta3/classes/KillFrenzy */
interface KillFrenzy {
    /** Returns the status of the current rampage
    *
    * https://library.sannybuilder.com/#/gta3?q=READ_KILL_FRENZY_STATUS [01FA]*/
    ReadStatus(): int;
    /** Starts a rampage
    *
    * https://library.sannybuilder.com/#/gta3?q=START_KILL_FRENZY [01F9]*/
    Start(text: string, weaponType: import('./enums').WeaponType, timeInMs: int, targetsNum: int, targetModel1: int, targetModel2: int, targetModel3: int, targetModel4: int, betaSoundsAndMessages: boolean): void;
    /** Starts a headshot rampage
    *
    * https://library.sannybuilder.com/#/gta3?q=START_KILL_FRENZY_HEADSHOT [0367]*/
    StartHeadshot(text: string, weaponType: import('./enums').WeaponType, timeInMs: int, targetsNum: int, targetModel1: int, targetModel2: int, targetModel3: int, targetModel4: int, betaSoundsAndMessages: boolean): void;
}
declare var KillFrenzy: KillFrenzy
/** Math and Conversion Utilities
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Math */
interface Math {
    // https://github.com/microsoft/TypeScript/blob/f3cc8684997d2c5708c344d909691636c355612b/lib/lib.es5.d.ts#L617
    // Copyright (c) Microsoft Corporation. All rights reserved.
    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
    readonly E: number;
    /** The natural logarithm of 10. */
    readonly LN10: number;
    /** The natural logarithm of 2. */
    readonly LN2: number;
    /** The base-2 logarithm of e. */
    readonly LOG2E: number;
    /** The base-10 logarithm of e. */
    readonly LOG10E: number;
    /** Pi. This is the ratio of the circumference of a circle to its diameter. */
    readonly PI: number;
    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
    readonly SQRT1_2: number;
    /** The square root of 2. */
    readonly SQRT2: number;
    /**
    * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
    * For example, the absolute value of -5 is the same as the absolute value of 5.
    * @param x A numeric expression for which the absolute value is needed.
    */
    abs(x: number): number;
    /**
    * Returns the arc cosine (or inverse cosine) of a number.
    * @param x A numeric expression.
    */
    acos(x: number): number;
    /**
    * Returns the arcsine of a number.
    * @param x A numeric expression.
    */
    asin(x: number): number;
    /**
    * Returns the arctangent of a number.
    * @param x A numeric expression for which the arctangent is needed.
    */
    atan(x: number): number;
    /**
    * Returns the angle (in radians) from the X axis to a point.
    * @param y A numeric expression representing the cartesian y-coordinate.
    * @param x A numeric expression representing the cartesian x-coordinate.
    */
    atan2(y: number, x: number): number;
    /**
    * Returns the smallest integer greater than or equal to its numeric argument.
    * @param x A numeric expression.
    */
    ceil(x: number): number;
    /**
    * Returns the cosine of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */
    cos(x: number): number;
    /**
    * Returns e (the base of natural logarithms) raised to a power.
    * @param x A numeric expression representing the power of e.
    */
    exp(x: number): number;
    /**
    * Returns the greatest integer less than or equal to its numeric argument.
    * @param x A numeric expression.
    */
    floor(x: number): number;
    /**
    * Returns the natural logarithm (base e) of a number.
    * @param x A numeric expression.
    */
    log(x: number): number;
    /**
    * Returns the larger of a set of supplied numeric expressions.
    * @param values Numeric expressions to be evaluated.
    */
    max(...values: number[]): number;
    /**
    * Returns the smaller of a set of supplied numeric expressions.
    * @param values Numeric expressions to be evaluated.
    */
    min(...values: number[]): number;
    /**
    * Returns the value of a base expression taken to a specified power.
    * @param x The base value of the expression.
    * @param y The exponent value of the expression.
    */
    pow(x: number, y: number): number;
    /** Returns a pseudorandom number between 0 and 1. */
    random(): number;
    /**
    * Returns a supplied numeric expression rounded to the nearest integer.
    * @param x The value to be rounded to the nearest integer.
    */
    round(x: number): number;
    /**
    * Returns the sine of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */
    sin(x: number): number;
    /**
    * Returns the square root of a number.
    * @param x A numeric expression.
    */
    sqrt(x: number): number;
    /**
    * Returns the tangent of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */
    tan(x: number): number;

    // https://github.com/microsoft/TypeScript/blob/cec2fda9a53620dc545a2c4d7b0156446ab145b4/lib/lib.es2015.core.d.ts#L100
    // Copyright (c) Microsoft Corporation. All rights reserved.
    /**
     * Returns the number of leading zero bits in the 32-bit binary representation of a number.
     * @param x A numeric expression.
     */
    clz32(x: number): number;
    /**
     * Returns the result of 32-bit multiplication of two numbers.
     * @param x First number
     * @param y Second number
     */
    imul(x: number, y: number): number;
    /**
     * Returns the sign of the x, indicating whether x is positive, negative or zero.
     * @param x The numeric expression to test
     */
    sign(x: number): number;
    /**
     * Returns the base 10 logarithm of a number.
     * @param x A numeric expression.
     */
    log10(x: number): number;
    /**
     * Returns the base 2 logarithm of a number.
     * @param x A numeric expression.
     */
    log2(x: number): number;
    /**
     * Returns the natural logarithm of 1 + x.
     * @param x A numeric expression.
     */
    log1p(x: number): number;
    /**
     * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
     * subtracting 1 from the exponential function of x (e raised to the power of x, where e
     * is the base of the natural logarithms).
     * @param x A numeric expression.
     */
    expm1(x: number): number;
    /**
     * Returns the hyperbolic cosine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    cosh(x: number): number;
    /**
     * Returns the hyperbolic sine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    sinh(x: number): number;
    /**
     * Returns the hyperbolic tangent of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    tanh(x: number): number;
    /**
     * Returns the inverse hyperbolic cosine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    acosh(x: number): number;
    /**
     * Returns the inverse hyperbolic sine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    asinh(x: number): number;
    /**
     * Returns the inverse hyperbolic tangent of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    atanh(x: number): number;
    /**
     * Returns the square root of the sum of squares of its arguments.
     * @param values Values to compute the square root for.
     *     If no arguments are passed, the result is +0.
     *     If there is only one argument, the result is the absolute value.
     *     If any argument is +Infinity or -Infinity, the result is +Infinity.
     *     If any argument is NaN, the result is NaN.
     *     If all arguments are either +0 or −0, the result is +0.
     */
    hypot(...values: number[]): number;
    /**
     * Returns the integral part of the a numeric expression, x, removing any fractional digits.
     * If x is already an integer, the result is x.
     * @param x A numeric expression.
     */
    trunc(x: number): number;
    /**
     * Returns the nearest single precision float representation of a number.
     * @param x A numeric expression.
     */
    fround(x: number): number;
    /**
     * Returns an implementation-dependent approximation to the cube root of number.
     * @param x A numeric expression.
     */
    cbrt(x: number): number;    /** Returns the result of converting meters to feet
    *
    * https://library.sannybuilder.com/#/gta3?q=CONVERT_METRES_TO_FEET_INT [042D]*/
    ConvertMetersToFeet(meters: int): int;
    /** Returns a random float within the specified range; including min and max values
    *
    * https://library.sannybuilder.com/#/gta3?q=GENERATE_RANDOM_FLOAT_IN_RANGE [0208]*/
    RandomFloatInRange(min: float, max: float): float;
    /** Returns a random integer within the specified range; including min and excluding max values
    *
    * https://library.sannybuilder.com/#/gta3?q=GENERATE_RANDOM_INT_IN_RANGE [0209]*/
    RandomIntInRange(min: int, max: int): int;
}
declare var Math: Math
/** Process Memory Manipulation
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Memory */
interface Memory {
    /** Reads a floating-point value (IEEE 754) from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadFloat(address: int, vp?: boolean): float;
    /** Writes a floating-point value (IEEE 754) to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteFloat(address: int, value: float, vp?: boolean): void;
    /** Reads a 8-bit signed integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadI8(address: int, vp?: boolean): int;
    /** Reads a 16-bit signed integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadI16(address: int, vp?: boolean): int;
    /** Reads a 32-bit signed integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadI32(address: int, vp?: boolean): int;
    /** Reads a 8-bit unsigned integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadU8(address: int, vp?: boolean): int;
    /** Reads a 16-bit unsigned integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadU16(address: int, vp?: boolean): int;
    /** Reads a 32-bit unsigned integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadU32(address: int, vp?: boolean): int;
    /** Reads a null-terminated UTF-8 encoded string from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadUtf8(address: int): string;
    /** Reads a null-terminated UTF-16 encoded string from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadUtf16(address: int): string;
    /** Writes a 8-bit signed integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteI8(address: int, value: int, vp?: boolean): void;
    /** Writes a 16-bit signed integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteI16(address: int, value: int, vp?: boolean): void;
    /** Writes a 32-bit signed integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteI32(address: int, value: int, vp?: boolean): void;
    /** Writes a 8-bit unsigned integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteU8(address: int, value: int, vp?: boolean): void;
    /** Writes a 16-bit unsigned integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteU16(address: int, value: int, vp?: boolean): void;
    /** Writes a 32-bit unsigned integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteU32(address: int, value: int, vp?: boolean): void;
    /** Writes a sequence of UTF-8 encoded characters to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteUtf8(address: int, value: string, vp?: boolean): void;
    /** Writes a sequence of UTF-16 encoded characters to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteUtf16(address: int, value: string, vp?: boolean): void;
    /** Reads 1, 2, or 4 bytes from the memory
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    Read(address: int, size: int, vp?: boolean): int;
    /** Writes 1, 2, or 4 bytes to the memory. Can also be used as memset.
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    Write(address: int, size: int, value: int, vp?: boolean): void;


    /** Cast 32-bit signed integer value to floating-point value (IEEE 754) 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToFloat(value: int): float;
    /** Cast floating-point value (IEEE 754) to 32-bit signed integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    FromFloat(value: float): int;
    /** Cast 8-bit signed integer value to unsigned integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToU8(value: int): int;
    /** Cast 16-bit signed integer value to unsigned integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToU16(value: int): int;
    /** Cast 32-bit signed integer value to unsigned integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToU32(value: int): int;
    /** Cast 8-bit unsigned integer value to signed integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToI8(value: int): int;
    /** Cast 16-bit unsigned integer value to signed integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToI16(value: int): int;
    /** Cast 32-bit unsigned integer value to signed integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToI32(value: int): int;
    /** Returns address of a function or variable, or 0 otherwise
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    Translate(symbol: string): int;
    /** Allocates a block of memory and returns its address
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    Allocate(size: int): int;
    /** Deallocates a block of memory previously allocated with Memory.Allocate
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    Free(address: int): void;
    /** Returns the address of the main exe module
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    GetImageBase(): int;

    /**
     * Watch a value and invoke a callback when the value changes. Works only in async scripts.
     * 
     * @template T - The type of the value being watched
     * @param {() => T} getter - A function that returns the value to watch
     * @param {(newValue: T, oldValue: T) => void} callback - A callback function invoked when the value changes, receiving the new and old values as arguments
     * @param {(number | { interval?: int, matcher?: (a: T, b: T) => boolean })} [options] - Optional configuration object
     * @param {int} [options.interval=0] - The polling interval in milliseconds (default: 0ms). You can also pass the interval as a number instead of an object.
     * @param {(a: T, b: T) => boolean} [options.matcher] - A custom equality function. Return true when values are considered equal (no change). Defaults to (a, b) => a === b.
     * @returns {() => void} A function that can be called to stop watching the value and prevent further callbacks from being invoked
     * 
     * @see https://re.cleo.li/docs/en/using-memory.html
     */
    Watch<T>(getter: () => T, callback: (newValue: T, oldValue: T) => void, options?: number | { interval?: int, matcher?: (a: T, b: T) => boolean }): () => void;

    /** Convenience methods for invoking different types of functions */
    Fn: {
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        Cdecl(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a floating-point value as a result */
        CdeclFloat(address: int): (...funcParams: int[]) => float;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit signed integer value as a result */
        CdeclI8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit signed integer value as a result */
        CdeclI16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        CdeclI32(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit unsigned integer value as a result */
        CdeclU8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit unsigned integer value as a result */
        CdeclU16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit unsigned integer value as a result */
        CdeclU32(address: int): (...funcParams: int[]) => int;

        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        Stdcall(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a floating-point value as a result */
        StdcallFloat(address: int): (...funcParams: int[]) => float;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit signed integer value as a result */
        StdcallI8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit signed integer value as a result */
        StdcallI16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        StdcallI32(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit unsigned integer value as a result */
        StdcallU8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit unsigned integer value as a result */
        StdcallU16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit unsigned integer value as a result */
        StdcallU32(address: int): (...funcParams: int[]) => int;

        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        Thiscall(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a floating-point value as a result */
        ThiscallFloat(address: int, struct: int): (...funcParams: int[]) => float;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 8-bit signed integer value as a result */
        ThiscallI8(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 16-bit signed integer value as a result */
        ThiscallI16(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        ThiscallI32(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 8-bit unsigned integer value as a result */
        ThiscallU8(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 16-bit unsigned integer value as a result */
        ThiscallU16(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 32-bit unsigned integer value as a result */
        ThiscallU32(address: int, struct: int): (...funcParams: int[]) => int;
    }

    /** Calls a function 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallFunction(address: int, numParams: int, pop: int, ...funcParams: int[]): void;

    /** Calls a function that returns an integer value
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallFunctionReturn(address: int, numParams: int, pop: int, ...funcParams: int[]): int;

    /** Calls a function that returns a floating-point value
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallFunctionReturnFloat(address: int, numParams: int, pop: int, ...funcParams: int[]): float;

    /** Calls a class method
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallMethod(address: int, struct: int, numParams: int, pop: int, ...funcParams: int[]): void;

    /** Calls a class method that returns an integer value
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallMethodReturn(address: int, struct: int, numParams: int, pop: int, ...funcParams: int[]): int;

    /** Calls a class method that returns a floating-point value
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallMethodReturnFloat(address: int, struct: int, numParams: int, pop: int, ...funcParams: int[]): float;
    /** Allocates a chunk of memory of the given size near to the memory page of the main exe module
    *
    * https://library.sannybuilder.com/#/gta3?q=ALLOC_NEAR */
    AllocNear(size: int): int;
    /** Allocates a chunk of memory of the given size and stores its address to the variable
    *
    * https://library.sannybuilder.com/#/gta3?q=ALLOCATE_MEMORY [0AC8]*/
    Allocate(size: int): int | undefined;
    /** Calls a function at the address with the given arguments and the calling convention defined by the pop parameter where 0 means 'stdcall' and a value equal to numParams means  'cdecl'
    *
    * https://library.sannybuilder.com/#/gta3?q=CALL_FUNCTION [0AA5]*/
    CallFunction(address: int, numArgs: int, pop: int, ...args: number[]): void;
    /** Calls a function similarly to 0AA5 and writes the result into the variable following the arguments list
    *
    * https://library.sannybuilder.com/#/gta3?q=CALL_FUNCTION_RETURN [0AA7]*/
    CallFunctionReturn(address: int, numArgs: int, pop: int, ...args: number[]): unknown;
    /** Calls a method of the object (struct) with the given arguments and the 'thiscall' calling convention (pop is always 0)
    *
    * https://library.sannybuilder.com/#/gta3?q=CALL_METHOD [0AA6]*/
    CallMethod(address: int, struct: int, numArgs: int, pop: int, ...args: number[]): void;
    /** Calls a method of the object (struct) similarly to 0AA6 and writes the result into the variable following the arguments list
    *
    * https://library.sannybuilder.com/#/gta3?q=CALL_METHOD_RETURN [0AA8]*/
    CallMethodReturn(address: int, struct: int, numArgs: int, pop: int, ...args: number[]): unknown;
    /** Returns an address of a memory chunk with the given index in a list of matches for the pattern
    *
    * https://library.sannybuilder.com/#/gta3?q=FIND_PATTERN */
    FindPattern(pattern: string, index: int): int | undefined;
    /** Frees the memory allocated with 0AC8
    *
    * https://library.sannybuilder.com/#/gta3?q=FREE_MEMORY [0AC9]*/
    Free(address: int): void;
    /** Returns the address of the main exe module
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_IMAGE_BASE */
    GetImageBase(): int;
    /** Stores the absolute address of a code location marked with the label
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_LABEL_POINTER [0AC6]*/
    GetLabelPointer(_: int): int;
    /** Gets the address of the object struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_OBJECT_POINTER [0A98]*/
    GetObjectPointer(object: ScriptObject): int;
    /** Gets the corresponding handle of the object located at the given address in memory
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_OBJECT_REF [0AEC]*/
    GetObjectRef(address: int): ScriptObject;
    /** Gets the address of the ped struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_PED_POINTER [0A96]*/
    GetPedPointer(char: Char): int;
    /** Gets the corresponding handle of the char located at the given address in memory
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_PED_REF [0AEA]*/
    GetPedRef(address: int): Char;
    /** Gets the address of a running script which name matches the given string or 0 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_SCRIPT_STRUCT_NAMED [0AAA]*/
    GetScriptStructNamed(scriptName: string): int;
    /** Gets the address of the current script structure in the game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_THIS_SCRIPT_STRUCT [0A9F]*/
    GetThisScriptStruct(): int;
    /** Stores the absolute address of the variable
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_VAR_POINTER [0AC7]*/
    GetVarPointer(_: unknown): int;
    /** Gets the address of the vehicle struct in the game memory by its handle
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_VEHICLE_POINTER [0A97]*/
    GetVehiclePointer(handle: Car): int;
    /** Gets the corresponding handle of the vehicle located at the given address in memory
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_VEHICLE_REF [0AEB]*/
    GetVehicleRef(address: int): Car;
    /** Returns a floating-point number stored as the result of the function called (0AA5, 0AA6, 0AA7, 0AA8) immediately before this command
    *
    * https://library.sannybuilder.com/#/gta3?q=POP_FLOAT [0AE9]*/
    PopFloat(): float;
    /** Reads a value from the game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=READ_MEMORY [0A8D]*/
    Read(address: int, size: int, vp: boolean): unknown;
    /** Reads a 32-bit value referenced by a relative offset at the address
    *
    * https://library.sannybuilder.com/#/gta3?q=READ_RELATIVE_OFFSET */
    ReadRelativeOffset(address: int): int;
    /** Calculates an offset between address1 and address2, and writes it to address1
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_MEMORY_OFFSET [0606]*/
    SetOffset(address1: int, address2: int, vp: boolean): void;
    /** Writes the value at the memory address
    *
    * https://library.sannybuilder.com/#/gta3?q=WRITE_MEMORY [0A8C]*/
    Write(address: int, size: int, value: unknown, vp: boolean): void;
    /** Replaces an offset at the address with the offset to the near address (use ALLOC_NEAR)
    *
    * https://library.sannybuilder.com/#/gta3?q=WRITE_RELATIVE_OFFSET */
    WriteRelativeOffset(address: int, nearAddress: int): void;
}
declare var Memory: Memory
/** Working with DLL files already loaded in memory
 * 
 * https://library.sannybuilder.com/#/gta3/classes/MemoryLibrary */
declare class MemoryLibrary {
    constructor(handle: number);
    static Load(address: int): MemoryLibrary | undefined;
    free(): void;
    getProcedure(procName: string): int | undefined;
}
/** Current Mission control
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Mission */
interface Mission {
    /** Terminates the active mission by executing its mission cleanup routine
    *
    * https://library.sannybuilder.com/#/gta3?q=FAIL_CURRENT_MISSION [045C]*/
    Fail(): void;
    /** Resets multiple settings that are usually set during missions and in some scripts
    *
    * https://library.sannybuilder.com/#/gta3?q=MISSION_HAS_FINISHED [00D8]*/
    Finish(): void;
    /** Loads a mission from the list defined in the main.scm header
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_AND_LAUNCH_MISSION_INTERNAL [0417]*/
    LoadAndLaunchInternal(index: int): void;
}
declare var Mission: Mission
/** 
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Mouse */
interface Mouse {
    /** Returns the position of the mouse cursor
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CURSOR_POS */
    GetCursorPos(): {
        x: int;
        y: int;
    } | undefined;
    /** Sets the position of the mouse cursor
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CURSOR_POS */
    SetCursorPos(x: int, y: int): boolean;
}
declare var Mouse: Mouse
/** Big'N'Veiny Mission Logic
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Pacman */
interface Pacman {
    /** Creates a single donkey magazine pickup
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_POWER_PILL [02DA]*/
    AddPowerPill(x: float, y: float, z: float): void;
    /** Removes all donkey magazine (02C3) and platinum (02C7) pickups
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_PACMAN [02C6]*/
    Clear(): void;
    /** Clears the number of platinum pickups (02C7) collected in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_NUMBER_OF_POWER_PILLS_CARRIED [02C9]*/
    ClearNumberOfPowerPillsCarried(): void;
    /** Clears the number of donkey magazine pickups (02C3) collected
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_NUMBER_OF_POWER_PILLS_EATEN [02D9]*/
    ClearNumberOfPowerPillsEaten(): void;
    /** Returns the number of platinum pickups (02C7) collected in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_NUMBER_OF_POWER_PILLS_CARRIED [02C8]*/
    GetNumberOfPowerPillsCarried(): int;
    /** Returns the number of donkey magazine pickups (02C3) collected
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_NUMBER_OF_POWER_PILLS_EATEN [02C5]*/
    GetNumberOfPowerPillsEaten(): int;
    /** Creates a predefined collection of donkey magazine pickups
    *
    * https://library.sannybuilder.com/#/gta3?q=START_PACMAN_RACE [02C3]*/
    StartRace(_zero: int): void;
    /** Stores the current player's position for debugging purposes during the pacman race
    *
    * https://library.sannybuilder.com/#/gta3?q=START_PACMAN_RECORD [02C4]*/
    StartRecord(): void;
    /** Creates a collection of platinum pickups nearby the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=START_PACMAN_SCRAMBLE [02C7]*/
    StartScramble(x: float, y: float, z: float, distance: float, count: int): void;
}
declare var Pacman: Pacman
/** Input Controls
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Pad */
interface Pad {
    /** Sets emulate and press pad's button
    *
    * https://library.sannybuilder.com/#/gta3?q=EMULATE_BUTTON_PRESS_WITH_SENSITIVITY [0602]*/
    EmulateButtonPressWithSensitivity(buttonId: import('./enums').Button, sensitivity: int): void;
    /** Returns the controller mode
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CONTROLLER_MODE [0293]*/
    GetControllerMode(): import('./enums').ControllerMode;
    /** Returns the code of the last pressed button
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_LAST_KEY */
    GetLastKey(): import('./enums').KeyCode;
    /** Stores the status of the specified key into a variable
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_PAD_STATE [00E2]*/
    GetState(pad: import('./enums').PadId, buttonId: import('./enums').Button): int;
    /** Holds down a keyboard or mouse button until it gets released with RELEASE_KEY
    *
    * https://library.sannybuilder.com/#/gta3?q=HOLD_KEY */
    HoldKey(keyCode: import('./enums').KeyCode): void;
    /** Returns true if the pad's button has been pressed
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_BUTTON_PRESSED [00E1]*/
    IsButtonPressed(pad: import('./enums').PadId, buttonId: import('./enums').Button): boolean;
    /** Returns true if the pad's button is pressed with a certain sensitivity
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_BUTTON_PRESSED_WITH_SENSITIVITY [0601]*/
    IsButtonPressedWithSensitivity(buttonId: import('./enums').Button, sensitivity: int): boolean;
    /** Returns true if a keyboard or mouse button has just been pressed
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_KEY_DOWN */
    IsKeyDown(keyCode: import('./enums').KeyCode): boolean;
    /** Returns true if the player is pressing a keyboard button with the specified code
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_KEY_PRESSED [0AB0]*/
    IsKeyPressed(keyCode: import('./enums').KeyCode): boolean;
    /** Returns true if a keyboard or mouse button has just been released
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_KEY_UP */
    IsKeyUp(keyCode: import('./enums').KeyCode): boolean;
    /** Releases a keyboard or mouse button after HOLD_KEY
    *
    * https://library.sannybuilder.com/#/gta3?q=RELEASE_KEY */
    ReleaseKey(keyCode: import('./enums').KeyCode): void;
    /** Shakes the player's joypad at the specified intensity for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=SHAKE_PAD [015B]*/
    Shake(pad: import('./enums').PadId, time: int, intensity: int): void;
    /** Returns true if the specified string of letters has been typed on the keyboard
    *
    * https://library.sannybuilder.com/#/gta3?q=TEST_CHEAT [0ADC]*/
    TestCheat(input: string): boolean;
}
declare var Pad: Pad
/** In-Game Pager
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Pager */
interface Pager {
    /** Sends a new message to the player's pager
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_PAGER_MESSAGE [014D]*/
    AddMessage(text: string, speed: int, priority: int, _unused: int): void;
    /** Sends a new message in which the first string token~1~ is substituted with the specified number to the player's pager
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_PAGER_MESSAGE_WITH_NUMBER [01F8]*/
    AddMessageWithNumber(text: string, num: int, speed: int, priority: int, _unused: int): void;
}
declare var Pager: Pager
/** Path Configuration and Lookup
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Path */
interface Path {
    /** Adds a new waypoint to the route with the specified id
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_ROUTE_POINT [01E2]*/
    AddRoutePoint(routeId: int, x: float, y: float, z: float): void;
    /** Returns the nearest path note from the specified coordinates that a vehicle can drive on
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CLOSEST_CAR_NODE [02C1]*/
    GetClosestCarNode(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CLOSEST_CAR_NODE_WITH_HEADING [03D3]*/
    GetClosestCarNodeWithHeading(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
        angle: float;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position and with rotation away from the point
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CLOSEST_CAR_NODE_WITH_HEADING_AWAY_POINT [0462]*/
    GetClosestCarNodeWithHeadingAwayPoint(x: float, y: float, z: float, destX: float, destY: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
        angle: float;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position and with rotation towards the point
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CLOSEST_CAR_NODE_WITH_HEADING_TOWARDS_POINT [0461]*/
    GetClosestCarNodeWithHeadingTowardsPoint(x: float, y: float, z: float, destX: float, destY: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
        angle: float;
    };
    /** Returns the nearest path node from the specified coordinates that a pedestrian can walk on
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CLOSEST_CHAR_NODE [02C0]*/
    GetClosestCharNode(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
    };
    /** Marks all ped path nodes in the given 3D area as transitional between two levels (islands)
    *
    * https://library.sannybuilder.com/#/gta3?q=MARK_PED_ROADS_BETWEEN_LEVELS [0427]*/
    MarkPedRoadsBetweenLevels(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Marks all car path nodes in the given 3D area as transitional between two levels (islands)
    *
    * https://library.sannybuilder.com/#/gta3?q=MARK_ROADS_BETWEEN_LEVELS [0426]*/
    MarkRoadsBetweenLevels(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Clears all waypoints in the route with the specified id
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_ROUTE [03AC]*/
    RemoveRoute(routeId: int): void;
    /** Disables all ped paths in the given area
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_PED_ROADS_OFF [022B]*/
    SwitchPedRoadsOff(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Forbids pedestrians to walk into the specified angled area
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_PED_ROADS_OFF_ANGLED [0399]*/
    SwitchPedRoadsOffAngled(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float): void;
    /** Enables all ped paths in the given area
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_PED_ROADS_ON [022A]*/
    SwitchPedRoadsOn(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Enables pedestrians walk into the specified angled area
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_PED_ROADS_ON_ANGLED [0398]*/
    SwitchPedRoadsOnAngled(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float): void;
    /** Disables all car paths in the given area
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_ROADS_OFF [01E8]*/
    SwitchRoadsOff(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Prevents cars from driving on roads in the specified angled area
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_ROADS_OFF_ANGLED [039B]*/
    SwitchRoadsOffAngled(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float): void;
    /** Enables all car paths in the given area
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_ROADS_ON [01E7]*/
    SwitchRoadsOn(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Allows cars to drive in the specified angled area
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_ROADS_ON_ANGLED [039A]*/
    SwitchRoadsOnAngled(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float): void;
}
declare var Path: Path
/** Phone Booth Calls and Messages
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Phone */
declare class Phone {
    constructor(handle: number);
    /** Gets the phone at the specified X and Y coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=GRAB_PHONE [024A]*/
    static Grab(x: float, y: float): Phone;
    /** Returns true if the phone has finished displaying an assigned script line
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_PHONE_DISPLAYED_MESSAGE [024D]*/
    hasDisplayedMessage(): boolean;
    /** Returns true if the phone is displaying an assigned script line
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PHONE_DISPLAYING_MESSAGE [03C2]*/
    isDisplayingMessage(): boolean;
    /** Assigns two script lines to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_2_PHONE_MESSAGES [0379]*/
    set2Messages(msg1: string, msg2: string): Phone;
    /** Assigns two script lines to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_2_REPEATED_PHONE_MESSAGES [0378]*/
    set2RepeatedMessages(msg1: string, msg2: string): Phone;
    /** Assigns three script lines to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_3_PHONE_MESSAGES [037B]*/
    set3Messages(msg1: string, msg2: string, msg3: string): Phone;
    /** Assigns three script lines to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_3_REPEATED_PHONE_MESSAGES [037A]*/
    set3RepeatedMessages(msg1: string, msg2: string, msg3: string): Phone;
    /** Assigns four script lines to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_4_PHONE_MESSAGES [037D]*/
    set4Messages(msg1: string, msg2: string, msg3: string, msg4: string): Phone;
    /** Assigns four script lines to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_4_REPEATED_PHONE_MESSAGES [037C]*/
    set4RepeatedMessages(msg1: string, msg2: string, msg3: string, msg4: string): Phone;
    /** Assigns five script lines to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_5_PHONE_MESSAGES [0387]*/
    set5Messages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string): Phone;
    /** Assigns five script lines to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_5_REPEATED_PHONE_MESSAGES [0386]*/
    set5RepeatedMessages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string): Phone;
    /** Assigns six script lines to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_6_PHONE_MESSAGES [0389]*/
    set6Messages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string, msg6: string): Phone;
    /** Assigns six script lines to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_6_REPEATED_PHONE_MESSAGES [0388]*/
    set6RepeatedMessages(msg1: string, msg2: string, msg3: string, msg4: string, msg5: string, msg6: string): Phone;
    /** Assigns a script line to the phone
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PHONE_MESSAGE [024C]*/
    setMessage(message: string): Phone;
    /** Assigns a script line to the phone which can be picked up again in a minute
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_REPEATED_PHONE_MESSAGE [024B]*/
    setRepeatedMessage(message: string): Phone;
    /** Disables the phone from ringing
    *
    * https://library.sannybuilder.com/#/gta3?q=TURN_PHONE_OFF [024E]*/
    turnOff(): Phone;
    /** Makes the phone ringing
    *
    * https://library.sannybuilder.com/#/gta3?q=TURN_PHONE_ON [0405]*/
    turnOn(): Phone;
}
/** Interactive Script Objects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Pickup */
declare class Pickup {
    constructor(handle: number);
    /** Creates a pickup with the given model and type
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_PICKUP [0213]*/
    static Create(modelId: int, pickupType: import('./enums').PickupType, x: float, y: float, z: float): Pickup;
    /** Creates a pickup of type FloatingPackage at the given coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_FLOATING_PACKAGE [035B]*/
    static CreateFloatingPackage(x: float, y: float, z: float): Pickup;
    /** Creates a money pickup with the specified cash value
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_MONEY_PICKUP [02E1]*/
    static CreateMoney(x: float, y: float, z: float, cashAmount: int): Pickup;
    /** Creates a weapon pickup, giving the player the specified amount of ammo when they pick it up
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_PICKUP_WITH_AMMO [032B]*/
    static CreateWithAmmo(modelId: int, pickupType: import('./enums').PickupType, ammo: int, x: float, y: float, z: float): Pickup;
    /** Creates a mine pickup of type MineInactive at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=DROP_MINE [02F0]*/
    static DropMine(x: float, y: float, z: float): void;
    /** Creates a nautical mine pickup of type MineInactive at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=DROP_NAUTICAL_MINE [02F1]*/
    static DropNauticalMine(x: float, y: float, z: float): void;
    /** Returns true if specified pickup has been collected
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_PICKUP_BEEN_COLLECTED [0214]*/
    hasBeenCollected(): boolean;
    /** Destroys the specified pickup, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_PICKUP [0215]*/
    remove(): void;
}
/** The Main Character Controlled by a Player
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Player */
declare class Player {
    constructor(handle: number);
    /** Creates a player at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_PLAYER [0053]*/
    static Create(playerIndex: int, x: float, y: float, z: float): Player;
    /** Returns the amount of times the player has destroyed a specific model
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_NUM_OF_MODELS_KILLED_BY_PLAYER [0298]*/
    static GetNumOfModelsKilled(modelId: int): int;
    /** Gives the player a detonator
    *
    * https://library.sannybuilder.com/#/gta3?q=GIVE_PLAYER_DETONATOR [037F]*/
    static GiveDetonator(): void;
    /** Resets the count of how many times the player has destroyed a certain model (0298)
    *
    * https://library.sannybuilder.com/#/gta3?q=RESET_NUM_OF_MODELS_KILLED_BY_PLAYER [0297]*/
    static ResetNumOfModelsKilled(): void;
    /** Adds the specified amount of ammo to the player's weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_AMMO_TO_PLAYER [0113]*/
    addAmmo(weaponType: import('./enums').WeaponType, ammo: int): Player;
    /** Increases the character's armour by the specified value to the maximum of 100.0
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_ARMOUR_TO_PLAYER [035E]*/
    addArmour(amount: int): Player;
    /** Adds to the player's money
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_SCORE [0109]*/
    addScore(money: int): Player;
    /** Sets the player's wanted level
    *
    * https://library.sannybuilder.com/#/gta3?q=ALTER_WANTED_LEVEL [010D]*/
    alterWantedLevel(wantedLevel: int): Player;
    /** Sets the player's wanted level if the specified level is higher than the current one
    *
    * https://library.sannybuilder.com/#/gta3?q=ALTER_WANTED_LEVEL_NO_DROP [010E]*/
    alterWantedLevelNoDrop(wantedLevel: int): Player;
    /** Applies brakes to the player's car
    *
    * https://library.sannybuilder.com/#/gta3?q=APPLY_BRAKES_TO_PLAYERS_CAR [0221]*/
    applyBrakesToCar(state: boolean): Player;
    /** Returns true if the player can move
    *
    * https://library.sannybuilder.com/#/gta3?q=CAN_PLAYER_START_MISSION [03EE]*/
    canStartMission(): boolean;
    /** Clears the player's wanted level
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_WANTED_LEVEL [0110]*/
    clearWantedLevel(): Player;
    /** Kills the player
    *
    * https://library.sannybuilder.com/#/gta3?q=EXPLODE_PLAYER_HEAD [0322]*/
    explodeHead(): Player;
    /** Gets the amount of ammo in the specified weapon of the player
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_AMMO_IN_PLAYER_WEAPON [0419]*/
    getAmmoInWeapon(weaponType: import('./enums').WeaponType): int;
    /** Gets the character handle for the specified player
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_PLAYER_CHAR [01F5]*/
    getChar(): Char;
    /** Returns the player's coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_PLAYER_COORDINATES [0054]*/
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the type of weapon that the player is currently holding
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CURRENT_PLAYER_WEAPON [046F]*/
    getCurrentWeapon(): import('./enums').WeaponType;
    /** Returns the player's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_PLAYER_HEADING [0170]*/
    getHeading(): float;
    /** Returns the player's health
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_PLAYER_HEALTH [0225]*/
    getHealth(): int;
    /** Gives the player the weapon with the specified amount of ammo
    *
    * https://library.sannybuilder.com/#/gta3?q=GIVE_WEAPON_TO_PLAYER [01B1]*/
    giveWeapon(weaponType: import('./enums').WeaponType, ammo: int): Player;
    /** Returns true if the specified player is being arrested (busted)
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_PLAYER_BEEN_ARRESTED [0130]*/
    hasBeenArrested(): boolean;
    /** Returns true if the player is holding the given type of weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CURRENT_PLAYER_WEAPON [02D7]*/
    isCurrentWeapon(weaponType: import('./enums').WeaponType): boolean;
    /** Returns true when player is dead (wasted)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_DEAD [0117]*/
    isDead(): boolean;
    /** Returns true if the player's health is over the specified value
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_HEALTH_GREATER [0183]*/
    isHealthGreater(health: int): boolean;
    /** Checks if the player is within the angled 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_ANGLED_AREA_2D [02AD]*/
    isInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the player is within the angled 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_ANGLED_AREA_3D [02B3]*/
    isInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the player is in a car which is within the angled 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_ANGLED_AREA_IN_CAR_2D [02AF]*/
    isInAngledAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the player is in a car which is within the angled 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_ANGLED_AREA_IN_CAR_3D [02B5]*/
    isInAngledAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the player is within the angled 2D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_ANGLED_AREA_ON_FOOT_2D [02AE]*/
    isInAngledAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the player is within the angled 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_ANGLED_AREA_ON_FOOT_3D [02B4]*/
    isInAngledAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if the player is on a boat
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_ANY_BOAT [04A8]*/
    isInAnyBoat(): boolean;
    /** Returns true if the player has a vehicle, even if they are not actually sat inside it (opening and closing the door)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_ANY_CAR [00E0]*/
    isInAnyCar(): boolean;
    /** Returns true if the player is in a helicopter
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_ANY_HELI [04AA]*/
    isInAnyHeli(): boolean;
    /** Returns true if the player is within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_AREA_2D [0056]*/
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_AREA_3D [0057]*/
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_AREA_IN_CAR_2D [0198]*/
    isInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_AREA_IN_CAR_3D [019D]*/
    isInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_AREA_ON_FOOT_2D [0197]*/
    isInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_AREA_ON_FOOT_3D [019C]*/
    isInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_CAR [00DC]*/
    isInCar(vehicle: Car): boolean;
    /** Returns true if the player is flying in a plane or a helicopter
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_FLYING_VEHICLE [04C9]*/
    isInFlyingVehicle(): boolean;
    /** Returns true if the player is driving a vehicle with the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_MODEL [00DE]*/
    isInModel(modelId: int): boolean;
    /** Returns true if the player is controlling a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_REMOTE_MODE [0241]*/
    isInRemoteMode(): boolean;
    /** Returns true if the player is driving a taxi
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_TAXI [02DE]*/
    isInTaxi(): boolean;
    /** Returns true if the player is in the specified map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_IN_ZONE [0121]*/
    isInZone(zone: string): boolean;
    /** Returns true if the player is talking over the phone (024A)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_LIFTING_A_PHONE [0447]*/
    isLiftingAPhone(): boolean;
    /** Returns true if the player is driving a bike
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_ON_ANY_BIKE [047E]*/
    isOnAnyBike(): boolean;
    /** Returns true if the player is on foot, and not occupying a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_ON_FOOT [044A]*/
    isOnFoot(): boolean;
    /** Returns true if the player is alive and not arrested by the police
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_PLAYING [0256]*/
    isPlaying(): boolean;
    /** Returns true if the player is honking the horn in a car
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_PRESSING_HORN [0122]*/
    isPressingHorn(): boolean;
    /** Returns true if the player's money is over the specified value
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_SCORE_GREATER [010A]*/
    isScoreGreater(money: int): boolean;
    /** Returns true if the player is firing a weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_SHOOTING [02DF]*/
    isShooting(): boolean;
    /** Returns true if the player fired a weapon within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_SHOOTING_IN_AREA [02D5]*/
    isShootingInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is sitting in any vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_SITTING_IN_ANY_CAR [0443]*/
    isSittingInAnyCar(): boolean;
    /** Returns true if the player is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_SITTING_IN_CAR [0442]*/
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the player is not moving
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED [029F]*/
    isStopped(): boolean;
    /** Checks if the player is within the angled 2D area motionless
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_ANGLED_AREA_2D [02B0]*/
    isStoppedInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the player is within the angled 3D area motionless
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_ANGLED_AREA_3D [02B6]*/
    isStoppedInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the player is in a motionless car within the angled 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_ANGLED_AREA_IN_CAR_2D [02B2]*/
    isStoppedInAngledAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the player is in a motionless car within the angled 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_ANGLED_AREA_IN_CAR_3D [02B8]*/
    isStoppedInAngledAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the player is within the angled 2D area motionless on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_ANGLED_AREA_ON_FOOT_2D [02B1]*/
    isStoppedInAngledAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    /** Checks if the player is within the angled 3D area motionless on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_ANGLED_AREA_ON_FOOT_3D [02B7]*/
    isStoppedInAngledAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_AREA_2D [0199]*/
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_AREA_3D [019E]*/
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_AREA_IN_CAR_2D [019B]*/
    isStoppedInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_AREA_IN_CAR_3D [01A0]*/
    isStoppedInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_AREA_ON_FOOT_2D [019A]*/
    isStoppedInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_STOPPED_IN_AREA_ON_FOOT_3D [019F]*/
    isStoppedInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is aiming at the specified character
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_TARGETTING_CHAR [0457]*/
    isTargetingChar(handle: Char): boolean;
    /** Returns true if the player is aiming at the specified object
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_TARGETTING_OBJECT [0458]*/
    isTargetingObject(handle: ScriptObject): boolean;
    /** Returns true if the player is aiming at any character
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_TARGETTING_ANY_CHAR [0456]*/
    isTargettingAnyChar(): boolean;
    /** Returns true if the player is colliding with the specified object
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_TOUCHING_OBJECT [0178]*/
    isTouchingObject(object: ScriptObject): boolean;
    /** Returns true if the player is colliding with the specified object on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PLAYER_TOUCHING_OBJECT_ON_FOOT [023A]*/
    isTouchingObjectOnFoot(object: ScriptObject): boolean;
    /** Returns true if the player's wanted level is over the specified value
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_WANTED_LEVEL_GREATER [010F]*/
    isWantedLevelGreater(wantedLevel: int): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ANY_MEANS_2D [00E3]*/
    locateAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ANY_MEANS_3D [00F5]*/
    locateAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ANY_MEANS_CAR_2D [01FC]*/
    locateAnyMeansCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 3D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ANY_MEANS_CAR_3D [01FF]*/
    locateAnyMeansCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ANY_MEANS_CHAR_2D [00E9]*/
    locateAnyMeansChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ANY_MEANS_CHAR_3D [00FB]*/
    locateAnyMeansChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_IN_CAR_2D [00E5]*/
    locateInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_IN_CAR_3D [00F7]*/
    locateInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_IN_CAR_CAR_2D [01FE]*/
    locateInCarCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 3D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_IN_CAR_CAR_3D [0201]*/
    locateInCarCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_IN_CAR_CHAR_2D [00EB]*/
    locateInCarChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_IN_CAR_CHAR_3D [00FD]*/
    locateInCarChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ON_FOOT_2D [00E4]*/
    locateOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ON_FOOT_3D [00F6]*/
    locateOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ON_FOOT_CAR_2D [01FD]*/
    locateOnFootCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ON_FOOT_CAR_3D [0200]*/
    locateOnFootCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ON_FOOT_CHAR_2D [00EA]*/
    locateOnFootChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_PLAYER_ON_FOOT_CHAR_3D [00FC]*/
    locateOnFootChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_PLAYER_ANY_MEANS_2D [00E6]*/
    locateStoppedAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_PLAYER_ANY_MEANS_3D [00F8]*/
    locateStoppedAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_PLAYER_IN_CAR_2D [00E8]*/
    locateStoppedInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_PLAYER_IN_CAR_3D [00FA]*/
    locateStoppedInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_PLAYER_ON_FOOT_2D [00E7]*/
    locateStoppedOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_STOPPED_PLAYER_ON_FOOT_3D [00F9]*/
    locateStoppedOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Makes the player to keep looking at the direction of the character
    *
    * https://library.sannybuilder.com/#/gta3?q=PLAYER_LOOK_AT_CHAR_ALWAYS [022E]*/
    lookAtCharAlways(target: Char): Player;
    /** Makes the player safe, putting the character in a safe location
    *
    * https://library.sannybuilder.com/#/gta3?q=MAKE_PLAYER_SAFE_FOR_CUTSCENE [03EF]*/
    makeSafeForCutscene(): Player;
    /** Takes all weapons away from the player
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_ALL_PLAYER_WEAPONS [03B8]*/
    removeAllWeapons(): Player;
    /** Removes all fires located within 3.0 units of the player's position
    *
    * https://library.sannybuilder.com/#/gta3?q=SAVE_PLAYER_FROM_FIRES [033D]*/
    saveFromFires(): Player;
    /** Sets the amount of ammo the player has in the specified weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_AMMO [017A]*/
    setAmmo(weaponType: import('./enums').WeaponType, ammo: int): Player;
    /** Sets the animation group for the player
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_ANIM_GROUP_FOR_PLAYER [0246]*/
    setAnimGroup(animGroup: import('./enums').AnimGroup): Player;
    /** Sets whether player's control is enabled
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_CONTROL [01B4]*/
    setControl(state: boolean): Player;
    /** Puts the player at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_COORDINATES [0055]*/
    setCoordinates(x: float, y: float, z: float): Player;
    /** Sets the player's currently held weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CURRENT_PLAYER_WEAPON [01B8]*/
    setCurrentWeapon(weaponType: import('./enums').WeaponType): Player;
    /** Defines whether the player can reload their gun 4x times faster
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_FAST_RELOAD [0331]*/
    setFastReload(state: boolean): Player;
    /** Sets whether the player loses the cash when gets wasted (works once)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_FREE_HEALTH_CARE [0414]*/
    setFreeHealthCare(state: boolean): Player;
    /** Sets whether the player loses the cash when gets busted (works once)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_GET_OUT_OF_JAIL_FREE [0413]*/
    setGetOutOfJailFree(state: boolean): Player;
    /** Sets the player's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_HEADING [0171]*/
    setHeading(heading: float): Player;
    /** Sets the player's health
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_HEALTH [0222]*/
    setHealth(health: int): Player;
    /** Makes the player to attack whoever attacks them
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_HEED_THREATS [0292]*/
    setHeedThreats(state: boolean): Player;
    /** Makes the character act as the player's hooker
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_HOOKER [043E]*/
    setHooker(hooker: Char): Player;
    /** Defines whether the player can run fast forever
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_NEVER_GETS_TIRED [0330]*/
    setNeverGetsTired(state: boolean): Player;
    /** Sets whether the player is visible or not
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PLAYER_VISIBLE [0336]*/
    setVisible(state: boolean): Player;
    /** Makes the player to stop looking at the character (022E)
    *
    * https://library.sannybuilder.com/#/gta3?q=STOP_PLAYER_LOOKING [0230]*/
    stopLooking(): Player;
    /** Returns the current vehicle of the player and adds it to the mission cleanup list
    *
    * https://library.sannybuilder.com/#/gta3?q=STORE_CAR_PLAYER_IS_IN [00DA]*/
    storeCarIsIn(): Car;
    /** Returns the player's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time
    *
    * https://library.sannybuilder.com/#/gta3?q=STORE_CAR_PLAYER_IS_IN_NO_SAVE [03C1]*/
    storeCarIsInNoSave(): Car;
    /** Returns the player's money
    *
    * https://library.sannybuilder.com/#/gta3?q=STORE_SCORE [010B]*/
    storeScore(): int;
    /** Returns the player's current wanted level
    *
    * https://library.sannybuilder.com/#/gta3?q=STORE_WANTED_LEVEL [01C0]*/
    storeWantedLevel(): int;
    /** Rotates the player to face the character
    *
    * https://library.sannybuilder.com/#/gta3?q=TURN_PLAYER_TO_FACE_CHAR [0210]*/
    turnToFaceChar(char: Char): Player;
    /** Rotates the player to face the location
    *
    * https://library.sannybuilder.com/#/gta3?q=TURN_PLAYER_TO_FACE_COORD [01BF]*/
    turnToFaceCoord(x: float, y: float, z: float): Player;
    /** Puts the player at the specified location, removing them from any vehicle they're in
    *
    * https://library.sannybuilder.com/#/gta3?q=WARP_PLAYER_FROM_CAR_TO_COORD [012A]*/
    warpFromCarToCoord(x: float, y: float, z: float): Player;
    /** Puts the player in the specified vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=WARP_PLAYER_INTO_CAR [0369]*/
    warpIntoCar(vehicle: Car): Player;
}
/** Remote-Controlled Cars
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Rc */
interface Rc {
    /** Destroys the remote-control vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=BLOW_UP_RC_BUGGY [0409]*/
    BlowUpBuggy(): void;
    /** Gives control of the remote-control vehicle to the player
    *
    * https://library.sannybuilder.com/#/gta3?q=GIVE_REMOTE_CONTROLLED_CAR_TO_PLAYER [010C]*/
    GiveCarToPlayer(player: Player, x: float, y: float, z: float, angle: float): void;
    /** Puts the player in control of a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=GIVE_REMOTE_CONTROLLED_MODEL_TO_PLAYER [046E]*/
    GiveModelToPlayer(handle: Player, x: float, y: float, z: float, angle: float, modelId: int): void;
}
declare var Rc: Rc
/** Configuration of Respawn Points
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Restart */
interface Restart {
    /** Adds a new location where the player can respawn after death
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_HOSPITAL_RESTART [016C]*/
    AddHospital(x: float, y: float, z: float, heading: float): void;
    /** Adds a new location where the player can respawn after arrest
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_POLICE_RESTART [016D]*/
    AddPolice(x: float, y: float, z: float, heading: float): void;
    /** Stops the player from spawning at the override location (016E)
    *
    * https://library.sannybuilder.com/#/gta3?q=CANCEL_OVERRIDE_RESTART [01F6]*/
    CancelOverride(): void;
    /** Fades the screen and puts the player at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=RESTART_CRITICAL_MISSION [0255]*/
    CriticalMission(x: float, y: float, z: float, heading: float): void;
    /** Overrides the hospital level (island)
    *
    * https://library.sannybuilder.com/#/gta3?q=OVERRIDE_HOSPITAL_LEVEL [041F]*/
    OverrideHospital(levelId: int): void;
    /** Forces this location to be the next respawn location
    *
    * https://library.sannybuilder.com/#/gta3?q=OVERRIDE_NEXT_RESTART [016E]*/
    OverrideNext(x: float, y: float, z: float, heading: float): void;
    /** Overrides the police station level (island)
    *
    * https://library.sannybuilder.com/#/gta3?q=OVERRIDE_POLICE_STATION_LEVEL [0420]*/
    OverridePolice(levelId: int): void;
    /** Sets whether the next arrest will cause the screen to fade in
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_FADE_IN_AFTER_NEXT_ARREST [040E]*/
    SetFadeInAfterNextArrest(state: boolean): void;
    /** Sets whether the next death will cause the screen to fade in
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_FADE_IN_AFTER_NEXT_DEATH [040F]*/
    SetFadeInAfterNextDeath(state: boolean): void;
}
declare var Restart: Restart
/** Script Fires
 * 
 * https://library.sannybuilder.com/#/gta3/classes/ScriptFire */
declare class ScriptFire {
    constructor(handle: number);
    /** Creates a script fire at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=START_SCRIPT_FIRE [02CF]*/
    static Create(x: float, y: float, z: float): ScriptFire;
    /** Creates a script fire on the vehicle
    *
    * https://library.sannybuilder.com/#/gta3?q=START_CAR_FIRE [0325]*/
    static CreateCarFire(vehicle: Car): ScriptFire;
    /** Creates a script fire on the character
    *
    * https://library.sannybuilder.com/#/gta3?q=START_CHAR_FIRE [0326]*/
    static CreateCharFire(char: Char): ScriptFire;
    /** Returns true if the script fire has been put out
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_SCRIPT_FIRE_EXTINGUISHED [02D0]*/
    isExtinguished(): boolean;
    /** Removes the script fire
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_SCRIPT_FIRE [02D1]*/
    remove(): void;
    /** Enables or disables the audio of the script fire
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_SCRIPT_FIRE_AUDIO [0444]*/
    setAudio(state: boolean): ScriptFire;
}
/** Script Objects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/ScriptObject */
declare class ScriptObject {
    constructor(handle: number);
    /** Creates an object at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_OBJECT [0107]*/
    static Create(modelId: int, x: float, y: float, z: float): ScriptObject;
    /** Creates an object without offset at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_OBJECT_NO_OFFSET [029B]*/
    static CreateNoOffset(modelId: int, x: float, y: float, z: float): ScriptObject;
    /** Returns true if the handle is a valid object handle
    *
    * https://library.sannybuilder.com/#/gta3?q=DOES_OBJECT_EXIST [03CA]*/
    static DoesExist(handle: unknown): boolean;
    /** Stores the health of the bodycast object used in the 'Plaster Blaster' mission
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_BODY_CAST_HEALTH [03F8]*/
    static GetBodyCastHealth(): int;
    /** Adds the given vector to the object's velocity (0381)
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_TO_OBJECT_VELOCITY [038C]*/
    addToVelocity(x: float, y: float, z: float): ScriptObject;
    /** Destroys the object, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=DELETE_OBJECT [0108]*/
    delete(): void;
    /** Removes the object from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/gta3?q=DONT_REMOVE_OBJECT [01C7]*/
    dontRemove(): ScriptObject;
    flash(state: boolean): ScriptObject;
    /** Returns the object's coordinates
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_OBJECT_COORDINATES [01BB]*/
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the object's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_OBJECT_HEADING [0176]*/
    getHeading(): float;
    /** Returns the object's coordinates with an offset
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_OFFSET_FROM_OBJECT_IN_WORLD_COORDS [04C2]*/
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the object is damaged
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_OBJECT_BEEN_DAMAGED [0366]*/
    hasBeenDamaged(): boolean;
    /** Returns true if the object is visible
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_OBJECT_ON_SCREEN [02CC]*/
    isOnScreen(): boolean;
    /** Makes the object targettable (ability to be auto-aimed)
    *
    * https://library.sannybuilder.com/#/gta3?q=MAKE_OBJECT_TARGETTABLE [035D]*/
    makeTargetable(): ScriptObject;
    /** Allows the object to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/gta3?q=MARK_OBJECT_AS_NO_LONGER_NEEDED [01C4]*/
    markAsNoLongerNeeded(): ScriptObject;
    /** Places the object at an offset from the car
    *
    * https://library.sannybuilder.com/#/gta3?q=PLACE_OBJECT_RELATIVE_TO_CAR [035C]*/
    placeRelativeToCar(vehicle: Car, xOffset: float, yOffset: float, zOffset: float): ScriptObject;
    /** Places the object relative to the other object
    *
    * https://library.sannybuilder.com/#/gta3?q=PLACE_OBJECT_RELATIVE_TO_OBJECT [045E]*/
    placeRelativeToObject(target: ScriptObject, offsetX: float, offsetY: float, offsetZ: float): ScriptObject;
    /** Rotates the object from one angle to another, optionally accounting for a collision during the rotation
    *
    * https://library.sannybuilder.com/#/gta3?q=ROTATE_OBJECT [034D]*/
    rotate(fromAngle: float, toAngle: float, collisionCheck: boolean): boolean;
    /** Sets the object's collision detection
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_OBJECT_COLLISION [0382]*/
    setCollision(state: boolean): ScriptObject;
    /** Puts the object at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_OBJECT_COORDINATES [01BC]*/
    setCoordinates(x: float, y: float, z: float): ScriptObject;
    /** Sets the specified object to always draw on top of other objects
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_OBJECT_DRAW_LAST [0418]*/
    setDrawLast(state: boolean): ScriptObject;
    /** Defines whether or not the object is moveable
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_OBJECT_DYNAMIC [0392]*/
    setDynamic(state: boolean): ScriptObject;
    /** Sets the object's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_OBJECT_HEADING [0177]*/
    setHeading(heading: float): ScriptObject;
    /** Sets the object rotation along X, Y and Z axis
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_OBJECT_ROTATION [0453]*/
    setRotation(x: float, y: float, z: float): ScriptObject;
    /** Sets the object's velocity
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_OBJECT_VELOCITY [0381]*/
    setVelocity(xSpeed: float, ySpeed: float, zSpeed: float): ScriptObject;
    /** Animates object movement toward specified coordinates. Returns true if the object has finished moving
    *
    * https://library.sannybuilder.com/#/gta3?q=SLIDE_OBJECT [034E]*/
    slide(posX: float, posY: float, posZ: float, speedX: float, speedY: float, speedZ: float, collisionCheck: boolean): boolean;
}
/** Positionable Audio Effects
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Sound */
declare class Sound {
    constructor(handle: number);
    /** Creates a continuous sound at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_CONTINUOUS_SOUND [018D]*/
    static AddContinuous(x: float, y: float, z: float, soundId: import('./enums').ScriptSound): Sound;
    /** Plays a sound with the specified ID at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_ONE_OFF_SOUND [018C]*/
    static AddOneOffSound(x: float, y: float, z: float, soundId: import('./enums').ScriptSound): void;
    /** Stops the sound
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_SOUND [018E]*/
    remove(): Sound;
}
/** Cylinder Markers
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Sphere */
declare class Sphere {
    constructor(handle: number);
    /** Creates a static sphere at the location, with the specified radius
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_SPHERE [03BC]*/
    static Create(x: float, y: float, z: float, radius: float): Sphere;
    /** Displays a red cylinder sphere
    *
    * https://library.sannybuilder.com/#/gta3?q=DRAW_SPHERE [03A1]*/
    static Draw(x: float, y: float, z: float, diameter: float): void;
    /** Destroys a static sphere
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_SPHERE [03BD]*/
    remove(): void;
}
/** Game Statistics
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Stat */
interface Stat {
    /** Increases the progress made stat by the specified amount
    *
    * https://library.sannybuilder.com/#/gta3?q=PLAYER_MADE_PROGRESS [030C]*/
    PlayerMadeProgress(progress: int): void;
    /** Saves the fastest time to the Multistorey Mayhem stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_4X4_MAYHEM_TIME [0400]*/
    Register4X4MayhemTime(timeInSec: int): void;
    /** Saves the fastest time to the Patriot Playground stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_4X4_ONE_TIME [03FD]*/
    Register4X4OneTime(timeInSec: int): void;
    /** Saves the fastest time to the Gripped! stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_4X4_THREE_TIME [03FF]*/
    Register4X4ThreeTime(timeInSec: int): void;
    /** Saves the fastest time to the A Ride In The Park stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_4X4_TWO_TIME [03FE]*/
    Register4X4TwoTime(timeInSec: int): void;
    /** Saves the highest paramedic mission level stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_AMBULANCE_LEVEL [0403]*/
    RegisterAmbulanceLevel(highestLevel: int): void;
    /** Increments the number of criminals killed on Vigilante mission stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_CRIMINAL_CAUGHT [0402]*/
    RegisterCriminalCaught(): void;
    /** Saves the time for bomb defusal stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_DEFUSE_BOMB_TIME [0407]*/
    RegisterDefuseBombTime(timeInSec: int): void;
    /** Saves the best time in Turismo stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_EL_BURRO_TIME [03E2]*/
    RegisterElBurroTime(timeInSec: int): void;
    /** Updates the stat if the value is lower than the current stat value
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_FASTEST_TIME [042E]*/
    RegisterFastestTime(id: int, value: int): void;
    /** Increments the number of fires extinguished stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_FIRE_EXTINGUISHED [0404]*/
    RegisterFireExtinguished(): void;
    /** Updates the stat if the value is higher than the current stat value
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_HIGHEST_SCORE [042F]*/
    RegisterHighestScore(statId: int, value: int): void;
    /** Saves the highest insane jump distance stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_JUMP_DISTANCE [030E]*/
    RegisterJumpDistance(distance: float): void;
    /** Saves the highest insane jump flips stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_JUMP_FLIPS [0310]*/
    RegisterJumpFlips(flips: int): void;
    /** Saves the highest insane jump height stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_JUMP_HEIGHT [030F]*/
    RegisterJumpHeight(height: float): void;
    /** Saves the highest insane jump rotation stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_JUMP_SPINS [0311]*/
    RegisterJumpSpins(spins: int): void;
    /** Saves the best insane stunt stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_JUMP_STUNT [0312]*/
    RegisterJumpStunt(stunt: import('./enums').StuntType): void;
    /** Increments the number of rampages passed stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_KILL_FRENZY_PASSED [041B]*/
    RegisterKillFrenzyPassed(): void;
    /** Increments the number of people saved in an ambulance stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_LIFE_SAVED [0401]*/
    RegisterLifeSaved(): void;
    /** Saves the longest flight in Dodo stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_LONGEST_DODO_FLIGHT [0406]*/
    RegisterLongestDodoFlight(timeInSec: int): void;
    /** Increments the number of mission attempts stat by one
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_MISSION_GIVEN [0317]*/
    RegisterMissionGiven(): void;
    /** Sets the GXT of the last mission passed
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_MISSION_PASSED [0318]*/
    RegisterMissionPassed(key: string): void;
    /** Adds the value to the cash made in taxi stat
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_MONEY_MADE_TAXI [0316]*/
    RegisterMoneyMadeTaxi(cashAmount: int): void;
    /** Increments the number of passengers dropped off stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_PASSENGER_DROPPED_OFF_TAXI [0315]*/
    RegisterPassengerDroppedOffTaxi(): void;
    /** Increments the completed number of unique stunt jumps stat by 1
    *
    * https://library.sannybuilder.com/#/gta3?q=REGISTER_UNIQUE_JUMP_FOUND [0313]*/
    RegisterUniqueJumpFound(): void;
    /** Sets Staunton Island as complete
    *
    * https://library.sannybuilder.com/#/gta3?q=COMMERCIAL_PASSED [034B]*/
    SetCommercialPassed(): void;
    /** Sets Portland as complete
    *
    * https://library.sannybuilder.com/#/gta3?q=INDUSTRIAL_PASSED [034A]*/
    SetIndustrialPassed(): void;
    /** Sets the maximum progress the player can reach
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PROGRESS_TOTAL [030D]*/
    SetProgressTotal(maxProgress: int): void;
    /** Sets Shoreside Vale as complete
    *
    * https://library.sannybuilder.com/#/gta3?q=SUBURBAN_PASSED [034C]*/
    SetSuburbanPassed(): void;
    /** Sets the total number of rampages passed stat
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TOTAL_NUMBER_OF_KILL_FRENZIES [0408]*/
    SetTotalNumberOfKillFrenzies(total: int): void;
    /** Sets the total number of missions that can be completed
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TOTAL_NUMBER_OF_MISSIONS [042C]*/
    SetTotalNumberOfMissions(numMissions: int): void;
    /** Sets the total number of unique stunt jumps stat
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_UNIQUE_JUMPS_TOTAL [0314]*/
    SetUniqueJumpsTotal(total: int): void;
}
declare var Stat: Stat
/** Loading Game Assets
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Streaming */
interface Streaming {
    GetNameOfVehicleModel(modelId: int): string;
    /** Returns true if the model is available for creation
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_MODEL_LOADED [0248]*/
    HasModelLoaded(modelId: int): boolean;
    /** Returns true if the special character's model (023C) is available for creation
    *
    * https://library.sannybuilder.com/#/gta3?q=HAS_SPECIAL_CHARACTER_LOADED [023D]*/
    HasSpecialCharacterLoaded(slotId: int): boolean;
    /** Returns true if the level (island) collision is loaded (03F7)
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_COLLISION_IN_MEMORY [03C6]*/
    IsCollisionInMemory(level: import('./enums').LevelName): boolean;
    /** Loads any requested models (0247 or 0353) synchronously
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_ALL_MODELS_NOW [038B]*/
    LoadAllModelsNow(): void;
    /** Loads the level (island) collision
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_COLLISION [03F7]*/
    LoadCollision(level: import('./enums').LevelName): void;
    /** Loads a level (island) collision with a greeting message
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_COLLISION_WITH_SCREEN [044C]*/
    LoadCollisionWithScreen(level: import('./enums').LevelName): void;
    /** Starts loading a specific location, just like if the player was there, removing LOD textures
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_SCENE [03CB]*/
    LoadScene(x: float, y: float, z: float): void;
    /** Requests a special character's model to be loaded into the specified slot
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_SPECIAL_CHARACTER [023C]*/
    LoadSpecialCharacter(slotId: int, modelName: string): void;
    /** Loads a model with the given name as a cutscene model id (GTA III: 185-189, VC: 295-299)
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_SPECIAL_MODEL [02F3]*/
    LoadSpecialModel(cutsceneModelId: int, modelName: string): void;
    /** Releases the specified model, freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=MARK_MODEL_AS_NO_LONGER_NEEDED [0249]*/
    MarkModelAsNoLongerNeeded(modelId: int): void;
    /** Requests a new model to load
    *
    * https://library.sannybuilder.com/#/gta3?q=REQUEST_MODEL [0247]*/
    RequestModel(modelId: int): void;
    /** Sets the streaming of additional models like peds, cars, and maps
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_STREAMING [03AF]*/
    Switch(state: boolean): void;
    /** Releases the special character (023C), freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=UNLOAD_SPECIAL_CHARACTER [0296]*/
    UnloadSpecialCharacter(slotId: int): void;
}
declare var Streaming: Streaming
/** Stuck Cars Check
 * 
 * https://library.sannybuilder.com/#/gta3/classes/StuckCarCheck */
interface StuckCarCheck {
    /** Adds the vehicle to the stuck cars array
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_STUCK_CAR_CHECK [03CC]*/
    Add(vehicle: Car, distance: float, time: int): void;
    /** Returns true if the car is stuck
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_CAR_STUCK [03CE]*/
    IsCarStuck(vehicle: Car): boolean;
    /** Removes the vehicle from the stuck cars array
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_STUCK_CAR_CHECK [03CD]*/
    Remove(vehicle: Car): void;
}
declare var StuckCarCheck: StuckCarCheck
/** Text Messages
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Text */
interface Text {
    /** Adds or updates the text associated with the dynamic GXT key. It does nothing if the same key is defined in a FXT file
    *
    * https://library.sannybuilder.com/#/gta3?q=ADD_TEXT_LABEL [0ADF]*/
    AddLabel(dynamicKey: string, text: string): void;
    /** Removes the text box from the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_HELP [03E6]*/
    ClearHelp(): void;
    /** Clears all priority text and some styles of big texts
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_PRINTS [00BE]*/
    ClearPrints(): void;
    /** Clears small messages from the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_SMALL_PRINTS [03EB]*/
    ClearSmallPrints(): void;
    /** Removes the styled text from the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_THIS_BIG_PRINT [03D6]*/
    ClearThisBigPrint(key: string): void;
    /** Removes the priority text from the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_THIS_PRINT [03D5]*/
    ClearThisPrint(key: string): void;
    /** Draws text at the specified on-screen position
    *
    * https://library.sannybuilder.com/#/gta3?q=DISPLAY_TEXT [033E]*/
    Display(offsetLeft: float, offsetTop: float, key: string): void;
    DisplayFormatted(screenX: float, screenY: float, text: string, _: number[]): void;
    DisplayString(screenX: float, screenY: float, text: string): void;
    /** Draws text with two numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=DISPLAY_TEXT_WITH_2_NUMBERS [045B]*/
    DisplayWith2Numbers(offsetLeft: float, offsetTop: float, key: string, num1: int, num2: int): void;
    /** Draws text with one number
    *
    * https://library.sannybuilder.com/#/gta3?q=DISPLAY_TEXT_WITH_NUMBER [045A]*/
    DisplayWithNumber(offsetLeft: float, offsetTop: float, key: string, num: int): void;
    /** Returns the text associated with the GXT key
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_TEXT_LABEL_STRING [0ADE]*/
    GetLabelString(key: string): string;
    /** Displays a message positioned on the bottom of the screen for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT [00BB]*/
    Print(key: string, time: int, flag: int): void;
    /** Displays a styled message for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_BIG [00BA]*/
    PrintBig(key: string, time: int, style: import('./enums').TextStyle): void;
    /** Formats args according to the format string, then displays it similarly to PRINT_BIG
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_BIG_FORMATTED [0ACF]*/
    PrintBigFormatted(format: string, time: int, style: import('./enums').TextStyle, ...args: number[]): void;
    /** Displays a low-priority styled message for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_BIG_Q [0217]*/
    PrintBigQ(key: string, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a custom text (provided as a literal or an address) similarly to PRINT_BIG
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_BIG_STRING [0ACB]*/
    PrintBigString(text: string, time: int, style: import('./enums').TextStyle): void;
    /** Formats args according to the format string, then displays it similarly to PRINT
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_FORMATTED [0AD0]*/
    PrintFormatted(format: string, time: int, ...args: number[]): void;
    /** Formats args according to the format string, then displays it similarly to PRINT_NOW
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_FORMATTED_NOW [0AD1]*/
    PrintFormattedNow(format: string, time: int, ...args: number[]): void;
    /** Displays a black text box for a few seconds
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_HELP [03E5]*/
    PrintHelp(key: string): void;
    /** Displays a black text box for a few seconds respecting the format of the String entered
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_HELP_FORMATTED [0ACE]*/
    PrintHelpFormatted(text: string, ...args: number[]): void;
    /** Displays a custom text (provided as a literal or an address) in a black box similarly to PRINT_HELP
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_HELP_STRING [0ACA]*/
    PrintHelpString(text: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_NOW [00BC]*/
    PrintNow(key: string, time: int, flag: int): void;
    /** Displays a message for the specified time when there are no other messages being printed
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_SOON [00BD]*/
    PrintSoon(key: string, time: int, flag: int): void;
    /** Displays a custom text (provided as a literal or an address) similarly to PRINT
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_STRING [0ACC]*/
    PrintString(text: string, time: int): void;
    /** Displays a styled message in which the first string token ~a~ is substituted with the specified text
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_STRING_IN_STRING [0375]*/
    PrintStringInString(templateKey: string, replacementKey: string, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first string token ~a~ is substituted with the specified text
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_STRING_IN_STRING_NOW [0384]*/
    PrintStringInStringNow(templateKey: string, replacementKey: string, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a custom text (provided as a literal or an address) similarly to PRINT_NOW
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_STRING_NOW [0ACD]*/
    PrintStringNow(text: string, time: int): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_2_NUMBERS [02FC]*/
    PrintWith2Numbers(key: string, num1: int, num2: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_2_NUMBERS_BIG [036D]*/
    PrintWith2NumbersBig(key: string, num1: int, num2: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_2_NUMBERS_NOW [02FD]*/
    PrintWith2NumbersNow(key: string, num1: int, num2: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message with the 2 specified numbers when there are no other messages being printed
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_2_NUMBERS_SOON [02FE]*/
    PrintWith2NumbersSoon(key: string, num1: int, num2: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_3_NUMBERS [02FF]*/
    PrintWith3Numbers(key: string, num1: int, num2: int, num3: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_3_NUMBERS_BIG [036E]*/
    PrintWith3NumbersBig(key: string, num1: int, num2: int, num3: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_3_NUMBERS_NOW [0300]*/
    PrintWith3NumbersNow(key: string, num1: int, num2: int, num3: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_4_NUMBERS [0302]*/
    PrintWith4Numbers(key: string, num1: int, num2: int, num3: int, num4: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_4_NUMBERS_BIG [036F]*/
    PrintWith4NumbersBig(key: string, num1: int, num2: int, num3: int, num4: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_4_NUMBERS_NOW [0303]*/
    PrintWith4NumbersNow(key: string, num1: int, num2: int, num3: int, num4: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first five ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_5_NUMBERS [0305]*/
    PrintWith5Numbers(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first five ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_5_NUMBERS_BIG [0370]*/
    PrintWith5NumbersBig(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first five ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_5_NUMBERS_NOW [0306]*/
    PrintWith5NumbersNow(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_6_NUMBERS [0308]*/
    PrintWith6Numbers(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, num6: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_6_NUMBERS_BIG [0371]*/
    PrintWith6NumbersBig(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, num6: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_6_NUMBERS_NOW [0309]*/
    PrintWith6NumbersNow(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, num6: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_NUMBER [01E4]*/
    PrintWithNumber(key: string, num: int, duration: int, flag: int): void;
    /** Displays a styled message in which the first string token~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_NUMBER_BIG [01E3]*/
    PrintWithNumberBig(key: string, num: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a low-priority styled message in which the first string token~1~ is replaced with the specified number
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_NUMBER_BIG_Q [0218]*/
    PrintWithNumberBigQ(key: string, num: int, duration: int, style: import('./enums').TextStyle): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/gta3?q=PRINT_WITH_NUMBER_NOW [01E5]*/
    PrintWithNumberNow(key: string, num: int, duration: int, flag: int): void;
    /** Deletes the key and associated text created with ADD_TEXT_LABEL or defined in a FXT file
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_TEXT_LABEL [0AE0]*/
    RemoveLabel(key: string): void;
    /** Extracts data from a string using sscanf
    *
    * https://library.sannybuilder.com/#/gta3?q=SCAN_STRING [0AD4]*/
    ScanString(string: string, format: string): {
        nValues: int;
        values: number[];
    } | undefined;
    /** Gives the text a background (0346)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_BACKGROUND [0345]*/
    SetBackground(state: boolean): void;
    /** Sets the color of the background of the text
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_BACKGROUND_COLOUR [0346]*/
    SetBackgroundColor(r: int, g: int, b: int, a: int): void;
    /** Sets the background of the text to enclose centered text (0342 and 0346)
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_BACKGROUND_ONLY_TEXT [0347]*/
    SetBackgroundOnlyText(state: boolean): void;
    /** Centers the text
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_CENTRE [0342]*/
    SetCenter(state: boolean): void;
    /** Sets the line width of the centered text
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_CENTRE_SIZE [0344]*/
    SetCenterSize(width: float): void;
    /** Sets the color of the text letters
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_COLOUR [0340]*/
    SetColor(red: int, green: int, blue: int, alpha: int): void;
    /** Causes the next text to be drawn before the fade is drawn
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_DRAW_BEFORE_FADE [03E0]*/
    SetDrawBeforeFade(state: boolean): void;
    /** Sets the text draw font
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_FONT [0349]*/
    SetFont(font: import('./enums').Font): void;
    /** Sets the text to be drawn justified, which means the text will wrap in order to fill an even rectangle of space
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_JUSTIFY [0341]*/
    SetJustify(state: boolean): void;
    /** Makes the text size proportionate
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_PROPORTIONAL [0348]*/
    SetProportional(state: boolean): void;
    /** Sets the text draw to be aligned to the right
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_RIGHT_JUSTIFY [03E4]*/
    SetRightJustify(state: boolean): void;
    /** Scales the width and height of the text letters
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_SCALE [033F]*/
    SetScale(widthScale: float, heightScale: float): void;
    /** Sets the line width of the text
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_TEXT_WRAPX [0343]*/
    SetWrapX(width: float): void;
    /** Formats a text according to the format string and given arguments and writes it in the result
    *
    * https://library.sannybuilder.com/#/gta3?q=STRING_FORMAT [0AD3]*/
    StringFormat(result: string, format: string, ...args: number[]): void;
    /** Enables text and texture drawing
    *
    * https://library.sannybuilder.com/#/gta3?q=USE_TEXT_COMMANDS [03F0]*/
    UseCommands(state: boolean): void;
}
declare var Text: Text
/** Texture Dictionaries
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Txd */
interface Txd {
    /** Loads the texture dictionary for use in drawing sprites (038D) on the screen
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_TEXTURE_DICTIONARY [0390]*/
    LoadDictionary(name: string): void;
    /** Loads a sprite from the most recently loaded texture dictionary (0390)
    *
    * https://library.sannybuilder.com/#/gta3?q=LOAD_SPRITE [038F]*/
    LoadSprite(spriteSlot: int, textureName: string): void;
    /** Unloads all currently loaded textures (038F), as well as texture dictionaries (0390), freeing game memory
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_TEXTURE_DICTIONARY [0391]*/
    Remove(): void;
}
declare var Txd: Txd
/** Weapons
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Weapon */
interface Weapon {
    /** Gets the model ID of the weapon according to the weapon type
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_WEAPONTYPE_MODEL [0604]*/
    GetModel(weaponType: import('./enums').WeaponType): int;
    /** Gets the type of weapon according to the model ID of the weapon
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_WEAPONTYPE_FOR_MODEL [0605]*/
    GetTypeForModel(modelId: int): import('./enums').WeaponType;
}
declare var Weapon: Weapon
/** Weather Control
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Weather */
interface Weather {
    /** Forces the game weather to the specified type
    *
    * https://library.sannybuilder.com/#/gta3?q=FORCE_WEATHER [01B5]*/
    Force(type: import('./enums').WeatherType): void;
    /** Forces the upcoming weather to the specified type
    *
    * https://library.sannybuilder.com/#/gta3?q=FORCE_WEATHER_NOW [01B6]*/
    ForceNow(type: import('./enums').WeatherType): void;
    /** Forces rain everywhere
    *
    * https://library.sannybuilder.com/#/gta3?q=FORCE_RAIN [0421]*/
    ForceRain(state: boolean): void;
    /** Gets the current weather ID
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CURRENT_WEATHER [0607]*/
    GetCurrent(): import('./enums').WeatherType;
    /** Allows the game to continue its usual weather pattern after using 01B5
    *
    * https://library.sannybuilder.com/#/gta3?q=RELEASE_WEATHER [01B7]*/
    Release(): void;
    /** Restores the weather previously saved with 0251
    *
    * https://library.sannybuilder.com/#/gta3?q=RESTORE_WEATHER [0252]*/
    Restore(): void;
    /** Saves the weather (type, interpolation value and the amount of rain fallen)
    *
    * https://library.sannybuilder.com/#/gta3?q=STORE_WEATHER [0251]*/
    Store(): void;
}
declare var Weather: Weather
/** Traffic, Population and other Physical Entities
 * 
 * https://library.sannybuilder.com/#/gta3/classes/World */
interface World {
    /** Returns the handle of an object with the specified model located in the 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_CLOSEST_OBJECT_OF_TYPE [045D]*/
    GetClosestObjectOfType(x: float, y: float, z: float, range: float, modelId: int): ScriptObject;
    /** Returns the handle of a random car with the specified model in the specified 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_RANDOM_CAR_OF_TYPE_IN_AREA [0327]*/
    GetRandomCarOfTypeInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, modelId: int): Car;
    /** Returns the handle of a random vehicle with the specified model in the specified map zone, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_RANDOM_CAR_OF_TYPE_IN_ZONE [0328]*/
    GetRandomCarOfTypeInZone(zone: string, modelId: int): Car;
    /** Returns the handle of a random pedestrian in the specified 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_RANDOM_CHAR_IN_AREA [02DC]*/
    GetRandomCharInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): Char;
    /** Returns the handle of a random law enforcement pedestrian in the 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_RANDOM_COP_IN_AREA [0469]*/
    GetRandomCopInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float): Char;
    /** Clears the area, removing all vehicles and pedestrians that are not marked as needed by a mission
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_AREA [0395]*/
    ClearArea(x: float, y: float, z: float, radius: float, clearParticles: boolean): void;
    /** Clears all cars in the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_AREA_OF_CARS [03BA]*/
    ClearAreaOfCars(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Clears all pedestrians from the given area
    *
    * https://library.sannybuilder.com/#/gta3?q=CLEAR_AREA_OF_CHARS [042B]*/
    ClearAreaOfChars(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Starts spawning random cars at the specified location
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_RANDOM_CAR_FOR_CAR_PARK [03C5]*/
    CreateRandomCarForCarPark(x: float, y: float, z: float, heading: float): void;
    /** Destroys all projectiles in the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=DESTROY_PROJECTILES_IN_AREA [02EF]*/
    DestroyProjectilesInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Forces the game to spawn only pedestrians of the given type
    *
    * https://library.sannybuilder.com/#/gta3?q=FORCE_RANDOM_PED_TYPE [03DF]*/
    ForceRandomPedType(pedType: import('./enums').PedType): void;
    /** Stores the ground position at the location
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_GROUND_Z_FOR_3D_COORD [02CE]*/
    GetGroundZFor3DCoord(x: float, y: float, z: float): float;
    GetRandomCarInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean, skipWrecked: boolean): Car | undefined;
    GetRandomCharInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean, skipDead: boolean): Char | undefined;
    GetRandomObjectInSphereNoSaveRecursive(x: float, y: float, z: float, radius: float, findNext: boolean): ScriptObject | undefined;
    /** Returns true if there is anything with the specified properties within the 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_AREA_OCCUPIED [0339]*/
    IsAreaOccupied(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, solid: boolean, car: boolean, char: boolean, object: boolean, particle: boolean): boolean;
    /** Returns true if there is an explosion of the specified type in the 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_EXPLOSION_IN_AREA [0356]*/
    IsExplosionInArea(explosionType: import('./enums').ExplosionType, leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Returns true if an explosion of the specified type in the map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_EXPLOSION_IN_ZONE [0357]*/
    IsExplosionInZone(explosionType: import('./enums').ExplosionType, zone: string): boolean;
    /** Returns true if there is a vehicle in the specified area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_POINT_OBSCURED_BY_A_MISSION_ENTITY [038A]*/
    IsPointObscuredByAMissionEntity(x: float, y: float, z: float, radiusX: float, radiusY: float, radiusZ: float): boolean;
    /** Returns true if a projectile is in the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_PROJECTILE_IN_AREA [02EE]*/
    IsProjectileInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Returns true if a sniper bullet is in the specified area
    *
    * https://library.sannybuilder.com/#/gta3?q=IS_SNIPER_BULLET_IN_AREA [037E]*/
    IsSniperBulletInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Returns true if a sniper bullet is flying in the specified 2D area
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_SNIPER_BULLET_2D [047B]*/
    LocateSniperBullet2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if a sniper bullet is flying in the specified 3D area
    *
    * https://library.sannybuilder.com/#/gta3?q=LOCATE_SNIPER_BULLET_3D [047C]*/
    LocateSniperBullet3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, topRightX: float, topRightY: float, topRightZ: float, drawSphere: boolean): boolean;
    /** Removes all script fires (02CF)
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_ALL_SCRIPT_FIRES [031A]*/
    RemoveAllScriptFires(): void;
    /** Removes all particle effects (02A2 or 039D) in the specified area
    *
    * https://library.sannybuilder.com/#/gta3?q=REMOVE_PARTICLE_EFFECTS_IN_AREA [03AE]*/
    RemoveParticleEffectsInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Sets the quantity of traffic that will spawn in the game
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_DENSITY_MULTIPLIER [01EB]*/
    SetCarDensityMultiplier(multiplier: float): void;
    /** Sets the quantity of pedestrians to spawn in the game
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PED_DENSITY_MULTIPLIER [03DE]*/
    SetPedDensityMultiplier(multiplier: float): void;
    /** Sets the visibility of the object closest to the specified coordinates, matching the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE [0363]*/
    SetVisibilityOfClosestObjectOfType(x: float, y: float, z: float, radius: float, modelId: int, state: boolean): void;
    /** Creates a vehicle with the model (no pre-loading needed) in front of the player
    *
    * https://library.sannybuilder.com/#/gta3?q=SPAWN_VEHICLE_BY_CHEATING [0ADD]*/
    SpawnVehicleByCheating(modelId: int): void;
    /** Swaps a map model with another map model nearest to the center of the search area
    *
    * https://library.sannybuilder.com/#/gta3?q=SWAP_NEAREST_BUILDING_MODEL [03B6]*/
    SwapNearestBuildingModel(x: float, y: float, z: float, radius: float, fromModelId: int, toModelId: int): void;
    /** Sets whether the game should render the world or only the cutscene objects
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_WORLD_PROCESSING [03B7]*/
    SwitchProcessing(state: boolean): void;
    /** Toggles garbage on the streets
    *
    * https://library.sannybuilder.com/#/gta3?q=SWITCH_RUBBISH [03AD]*/
    SwitchRubbish(state: boolean): void;
}
declare var World: World
/** Game Map Areas Configuration
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Zone */
interface Zone {
    /** Returns the handle of a random pedestrian in the map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_RANDOM_CHAR_IN_ZONE [02DD]*/
    GetRandomChar(zone: string): Char;
    /** Returns the handle of a random law enforcement ped in the map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=GET_RANDOM_COP_IN_ZONE [046A]*/
    GetRandomCop(zone: string): Char;
    /** Sets the traffic density in the specified map zone during the day or at night
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_CAR_DENSITY [0155]*/
    SetCarDensity(zone: string, dayOrNight: import('./enums').DayOrNight, density: int): void;
    /** Sets the map zone's peds, gangs, and cops traffic density
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_ZONE_CAR_INFO [0152]*/
    SetCarInfo(zone: string, dayOrNight: import('./enums').DayOrNight, density: int, mafia: int, triad: int, diablo: int, yakuza: int, yardie: int, colombian: int, hood: int, cop: int, poor: int, rich: int, executive: int, worker: int, special: int, big: int): void;
    /** Assigns one of the ped groups defined in pedgrp.dat to the map zone
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_ZONE_GROUP [0324]*/
    SetGroup(zone: string, dayOrNight: import('./enums').DayOrNight, pedGroup: int): void;
    /** Sets the peds density in the specified map zone during the day or at night
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_PED_DENSITY [0156]*/
    SetPedDensity(zone: string, dayOrNight: import('./enums').DayOrNight, density: int): void;
    /** Sets the map zone's peds, gangs, and cops density
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_ZONE_PED_INFO [015C]*/
    SetPedInfo(zone: string, dayOrNight: import('./enums').DayOrNight, density: int, mafia: int, triad: int, diablo: int, yakuza: int, yardie: int, colombian: int, hood: int, cop: int): void;
}
declare var Zone: Zone
/** Boats
 * 
 * https://library.sannybuilder.com/#/gta3/classes/Boat */
declare class Boat extends Car {
    /** Creates a vehicle at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/gta3?q=CREATE_CAR [00A5]*/
    static Create(modelId: int, x: float, y: float, z: float): Boat;
    /** Makes the boat stay motionless in the water
    *
    * https://library.sannybuilder.com/#/gta3?q=ANCHOR_BOAT [0323]*/
    anchor(state: boolean): Boat;
    /** Makes the boat sail to the location
    *
    * https://library.sannybuilder.com/#/gta3?q=BOAT_GOTO_COORDS [02D3]*/
    goto(x: float, y: float, z: float): Boat;
    /** Sets the boat's max speed
    *
    * https://library.sannybuilder.com/#/gta3?q=SET_BOAT_CRUISE_SPEED [02DB]*/
    setCruiseSpeed(maxSpeed: float): Boat;
    /** Turns off the car's engine
    *
    * https://library.sannybuilder.com/#/gta3?q=BOAT_STOP [02D4]*/
    stop(): Boat;
}
