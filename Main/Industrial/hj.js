// Generated from Main/Industrial/hj.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_hj() {
  // SCM GOTO → mission_start_hj lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (!($.player.IsPlaying())) {
      // SCM GOTO → mission_start_hj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
    }
    if (Game.AreAnyCarCheatsActivated()) {
      // SCM GOTO → mission_start_hj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
    }
    if ($.player.IsInAnyCar()) {
      $.car_player_is_in_hj = $.player.StoreCarIsInNoSave();
      if (!($.car_player_is_in_hj.IsBoat())) {
        if ($.car_player_is_in_hj.IsInAirProper()) {
          $.total_rotation_int = 0;
          $.heading_hj = 0.0;
          $.flag_wheels_hj = 0;
          $.counter_land_on_wheels_hj = 0;
          $.counter_stunt_rolls_hj = 0;
          $.flag_car_upsidedown_hj = 0;
          $.counter_wheels_hj = 0;
          $.stunt_flags_hj = 0;
          $.flag_takeoff_hj = 0;
          $.height_int_hj = 0;
          $.height_float_hj = -100.0;
          $.x_float_hj = 0.0;
          $.y_float_hj = 0.0;
          $.z_float_hj = 0.0;
          $.takeoff_x_float_hj = 0.0;
          $.takeoff_y_float_hj = 0.0;
          $.takeoff_z_float_hj = 0.0;
          $.jumpend_x_float_hj = 0.0;
          $.jumpend_y_float_hj = 0.0;
          $.difference_x_float_hj = 0.0;
          $.difference_y_float_hj = 0.0;
          $.sum_difference_xy_hj = 0.0;
          $.jumpdistance_float_hj = 0.0;
          $.jumpdistance_int_hj = 0;
          $.distance_decimals_int_hj = 0;
          $.height_decimals_int_hj = 0;
          $.temp_float = 0.0;
          $.heading_difference = 0.0;
          $.total_rotation = 0.0;
          $.heading_difference_temp = 0.0;
          $.old_heading_hj = 0.0;
          $.got_flight_start = 0;
          $.flight_timer_start = 0;
          $.flight_timer_end = 0;
          $.flight_time = 0;
          $.flag_flight_hj = 0;
          $.collision_counter = 0;
          if ($.car_player_is_in_hj.IsModel(119 /* PLANE_DODO */)) {
            // SCM GOTO → dodo_flight_time (not lowered; manual jump required)
            throw new Error("unresolved GOTO dodo_flight_time"); // fallback: would break linear control flow
          }
          while ($.car_player_is_in_hj.IsInAirProper() || $.collision_counter < 10) {
            ++$.collision_counter;
            [$.x_float_hj, $.y_float_hj, $.z_float_hj] = $.car_player_is_in_hj.GetCoordinates();
            $.old_heading_hj = $.heading_hj;
            if ($.flag_takeoff_hj == 0) {
              $.old_heading_hj = $.car_player_is_in_hj.GetHeading();
              $.takeoff_x_float_hj = $.x_float_hj;
              $.takeoff_y_float_hj = $.y_float_hj;
              $.takeoff_z_float_hj = $.z_float_hj;
              $.flag_takeoff_hj = 1;
            }
            await asyncWait(0);
            if (Car.IsDead($.car_player_is_in_hj)) {
              // SCM GOTO → mission_start_hj (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
            }
            if (!($.player.IsPlaying())) {
              // SCM GOTO → mission_start_hj (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
            }
            if (!($.player.IsInAnyCar())) {
              // SCM GOTO → mission_start_hj (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
            }
            if (!($.car_player_is_in_hj.IsUpright()) && $.flag_car_upsidedown_hj == 0) {
              $.flag_car_upsidedown_hj = 1;
            }
            if ($.car_player_is_in_hj.IsUpright() && $.flag_car_upsidedown_hj == 1) {
              ++$.counter_stunt_rolls_hj;
              $.flag_car_upsidedown_hj = 0;
            }
            $.heading_hj = $.car_player_is_in_hj.GetHeading();
            $.heading_difference = $.heading_hj - $.old_heading_hj;
            if ($.heading_difference > 180.0) {
              $.heading_difference_temp = $.heading_difference;
              $.heading_difference = 360.0 - $.heading_difference_temp;
            }
            else {
              if ($.heading_difference < -180.0) {
                $.heading_difference_temp = $.heading_difference;
                $.heading_difference = 360.0 + $.heading_difference_temp;
              }
            }
            if ($.heading_difference < 0.0) {
              $.heading_difference_temp = $.heading_difference;
              $.heading_difference = 0.0 - $.heading_difference_temp;
            }
            $.total_rotation = $.total_rotation + $.heading_difference;
            $.total_rotation_int = $.total_rotation;
            if ($.z_float_hj > $.height_float_hj) {
              $.height_float_hj = $.z_float_hj;
            }
            $.z_float_hj = 0.0;
          }
        }
        else {
          // SCM GOTO → mission_start_hj (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
        }
      }
      else {
        // SCM GOTO → mission_start_hj (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
      }
    }
    else {
      // SCM GOTO → mission_start_hj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
    }
    if ($.flag_takeoff_hj == 1) {
      [$.jumpend_x_float_hj, $.jumpend_y_float_hj, $.temp_float] = $.car_player_is_in_hj.GetCoordinates();
      while ($.counter_land_on_wheels_hj < 90) {
        if (Car.IsDead($.car_player_is_in_hj)) {
          // SCM GOTO → mission_start_hj (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
        }
        else {
          if (!($.car_player_is_in_hj.IsInAir())) {
            ++$.counter_wheels_hj;
          }
        }
        await asyncWait(0);
        if (!($.player.IsPlaying())) {
          // SCM GOTO → mission_start_hj (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
        }
        ++$.counter_land_on_wheels_hj;
      }
      $.counter_land_on_wheels_hj = 0;
      $.difference_x_float_hj = $.takeoff_x_float_hj - $.jumpend_x_float_hj;
      $.difference_y_float_hj = $.takeoff_y_float_hj - $.jumpend_y_float_hj;
      $.difference_x_float_hj = $.difference_x_float_hj * $.difference_x_float_hj;
      $.difference_y_float_hj = $.difference_y_float_hj * $.difference_y_float_hj;
      $.sum_difference_xy_hj = $.difference_x_float_hj + $.difference_y_float_hj;
      $.jumpdistance_float_hj = Math.Sqrt($.sum_difference_xy_hj);
      Stat.RegisterJumpDistance($.jumpdistance_float_hj);
      $.jumpdistance_int_hj = $.jumpdistance_float_hj;
      $.height_float_hj = $.height_float_hj - $.takeoff_z_float_hj;
      Stat.RegisterJumpHeight($.height_float_hj);
      $.height_int_hj = $.height_float_hj;
      $.temp_float = $.jumpdistance_int_hj;
      $.jumpdistance_float_hj = $.jumpdistance_float_hj - $.temp_float;
      $.temp_float = $.jumpdistance_float_hj * 100.0;
      $.distance_decimals_int_hj = $.temp_float;
      $.temp_float = $.height_int_hj;
      $.height_float_hj = $.height_float_hj - $.temp_float;
      $.temp_float = $.height_float_hj * 100.0;
      $.height_decimals_int_hj = $.temp_float;
      Stat.RegisterJumpFlips($.counter_stunt_rolls_hj);
      Stat.RegisterJumpSpins($.total_rotation_int);
    }
    if ($.height_float_hj > 4.0) {
      ++$.stunt_flags_hj;
    }
    if ($.jumpdistance_int_hj > 30) {
      ++$.stunt_flags_hj;
    }
    if ($.counter_stunt_rolls_hj > 0) {
      ++$.stunt_flags_hj;
    }
    if ($.total_rotation_int > 360) {
      ++$.stunt_flags_hj;
    }
    if ($.counter_wheels_hj > 60) {
      $.flag_wheels_hj = 1;
    }
    if ($.stunt_flags_hj > 0) {
      $.cash_reward = $.counter_stunt_rolls_hj * 180;
      $.cash_reward += $.total_rotation_int;
      $.cash_reward_temp = $.jumpdistance_int_hj * 6;
      $.cash_reward += $.cash_reward_temp;
      $.cash_reward_temp = $.height_int_hj * 45;
      $.cash_reward += $.cash_reward_temp;
      if ($.flag_wheels_hj == 1) {
        $.cash_reward *= 2;
      }
      $.cash_reward *= $.stunt_flags_hj;
      $.cash_reward /= 3;
      $.player.AddScore($.cash_reward);
      if ($.stunt_flags_hj == 1 && $.flag_wheels_hj == 0) {
        Text.PrintWithNumber(HJ_IS, $.cash_reward, 2000, 1);
        Stat.RegisterJumpStunt(1);
      }
      if ($.stunt_flags_hj == 1 && $.flag_wheels_hj == 1) {
        Text.PrintWithNumber(HJ_PIS, $.cash_reward, 2000, 1);
        Stat.RegisterJumpStunt(2);
      }
      if ($.stunt_flags_hj == 2 && $.flag_wheels_hj == 0) {
        Text.PrintWithNumber(HJ_DIS, $.cash_reward, 2000, 1);
        Stat.RegisterJumpStunt(3);
      }
      if ($.stunt_flags_hj == 2 && $.flag_wheels_hj == 1) {
        Text.PrintWithNumber(HJ_PDIS, $.cash_reward, 2000, 1);
        Stat.RegisterJumpStunt(4);
      }
      if ($.stunt_flags_hj == 3 && $.flag_wheels_hj == 0) {
        Text.PrintWithNumber(HJ_TIS, $.cash_reward, 2000, 1);
        Stat.RegisterJumpStunt(5);
      }
      if ($.stunt_flags_hj == 3 && $.flag_wheels_hj == 1) {
        Text.PrintWithNumber(HJ_PTIS, $.cash_reward, 2000, 1);
        Stat.RegisterJumpStunt(6);
      }
      if ($.stunt_flags_hj == 4 && $.flag_wheels_hj == 0) {
        Text.PrintWithNumber(HJ_QIS, $.cash_reward, 2000, 1);
        Stat.RegisterJumpStunt(7);
      }
      if ($.stunt_flags_hj == 4 && $.flag_wheels_hj == 1) {
        Text.PrintWithNumber(HJ_PQIS, $.cash_reward, 3000, 1);
        Stat.RegisterJumpStunt(8);
      }
      if (Game.AreMeasurementsInMeters()) {
        if ($.flag_wheels_hj == 1) {
          Text.PrintWith6Numbers(HJSTATW, $.jumpdistance_int_hj, $.distance_decimals_int_hj, $.height_int_hj, $.height_decimals_int_hj, $.counter_stunt_rolls_hj, $.total_rotation_int, 5000, 5);
        }
        else {
          Text.PrintWith6Numbers(HJSTAT, $.jumpdistance_int_hj, $.distance_decimals_int_hj, $.height_int_hj, $.height_decimals_int_hj, $.counter_stunt_rolls_hj, $.total_rotation_int, 5000, 5);
        }
      }
      else {
        $.jumpdistance_int_hj = Math.ConvertMetersToFeet($.jumpdistance_int_hj);
        $.height_int_hj = Math.ConvertMetersToFeet($.height_int_hj);
        if ($.flag_wheels_hj == 1) {
          Text.PrintWith4Numbers(HJSTAWF, $.jumpdistance_int_hj, $.height_int_hj, $.counter_stunt_rolls_hj, $.total_rotation_int, 5000, 5);
        }
        else {
          Text.PrintWith4Numbers(HJSTATF, $.jumpdistance_int_hj, $.height_int_hj, $.counter_stunt_rolls_hj, $.total_rotation_int, 5000, 5);
        }
      }
    }
  }
}

async function dodo_flight_time() {
  while ($.car_player_is_in_hj.IsInAirProper()) {
    if ($.got_flight_start == 0) {
      $.flight_timer_start = Clock.GetGameTimer();
      $.flag_flight_hj = 1;
      $.got_flight_start = 1;
    }
    if ($.car_player_is_in_hj.IsInWater()) {
      // SCM GOTO → cessna_fight_bit (not lowered; manual jump required)
      throw new Error("unresolved GOTO cessna_fight_bit"); // fallback: would break linear control flow
    }
    await asyncWait(0);
    if (Car.IsDead($.car_player_is_in_hj)) {
      // SCM GOTO → mission_start_hj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
    }
    if (!($.player.IsPlaying())) {
      // SCM GOTO → mission_start_hj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
    }
    if (!($.player.IsInAnyCar())) {
      // SCM GOTO → mission_start_hj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
    }
  }
}

async function cessna_fight_bit() {
  if ($.flag_flight_hj == 1) {
    $.flight_timer_end = Clock.GetGameTimer();
    $.flight_time = $.flight_timer_end - $.flight_timer_start;
    $.flight_time = $.flight_time / 1000;
    if ($.flight_time > 1) {
      if ($.flight_time > $.longest_flight_time) {
        $.longest_flight_time = $.flight_time;
      }
      Text.PrintWithNumberNow(DODO_FT, $.flight_time, 5000, 1);
      Stat.RegisterLongestDodoFlight($.flight_time);
    }
  }
  // SCM GOTO → mission_start_hj (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_start_hj"); // fallback: would break linear control flow
  // MissionBoundary
}

export async function hj() {
  // MissionBoundary
  // VAR_INT car_player_is_in_hj
  // VAR_INT flag_takeoff_hj
  // VAR_INT height_int_hj
  // VAR_INT flag_wheels_hj
  // VAR_INT stunt_flags_hj
  // VAR_INT flag_car_upsidedown_hj
  // VAR_INT counter_stunt_rolls_hj
  // VAR_INT height_decimals_int_hj
  // VAR_INT distance_decimals_int_hj
  // VAR_INT jumpdistance_int_hj
  // VAR_INT counter_land_on_wheels_hj
  // VAR_INT counter_wheels_hj
  // VAR_INT total_rotation_int
  // VAR_INT longest_flight_time
  // VAR_INT got_flight_start
  // VAR_INT flight_timer_start
  // VAR_INT flight_timer_end
  // VAR_INT flight_time flag_flight_hj
  // VAR_INT collision_counter
  // VAR_INT cash_reward cash_reward_temp
  // VAR_FLOAT height_float_hj
  // VAR_FLOAT x_float_hj
  // VAR_FLOAT y_float_hj
  // VAR_FLOAT z_float_hj
  // VAR_FLOAT takeoff_x_float_hj
  // VAR_FLOAT takeoff_y_float_hj
  // VAR_FLOAT takeoff_z_float_hj
  // VAR_FLOAT jumpend_x_float_hj
  // VAR_FLOAT jumpend_y_float_hj
  // VAR_FLOAT difference_x_float_hj
  // VAR_FLOAT difference_y_float_hj
  // VAR_FLOAT sum_difference_xy_hj
  // VAR_FLOAT jumpdistance_float_hj
  // VAR_FLOAT heading_hj
  // VAR_FLOAT temp_float
  // VAR_FLOAT old_heading_hj
  // VAR_FLOAT heading_difference
  // VAR_FLOAT heading_difference_temp
  // VAR_FLOAT total_rotation
  // SET_DEATHARREST_STATE(0 /* OFF */);
  // ScriptName
  $.longest_flight_time = 0;
}
