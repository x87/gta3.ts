// Generated from Main/Industrial/camera.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_camera() {
  {
  await asyncWait(70);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
      if ($.rays_cutscene_flag == 0) {
        if ($.player.IsPlaying()) {
          if ($.player.IsInZone("PARK")) {
            if ($.player.IsInArea3D(36.5302, -734.5862, 21.67, 47.4772, -726.9442, 24.457, 0)) {
              if ($.player.IsInArea2D(36.5302, -729.3754, 47.4772, -726.9442, 0)) {
                if ($.rays_camera_1 == 0) {
                  $.player.SetControl(0 /* OFF */);
                  Camera.SetFadingColor(1, 1, 1);
                  Camera.DoFade(200, 0 /* FADE_OUT */);
                  $.rays_camera_1 = 1;
                }
                if ($.rays_camera_1 == 1) {
                  if (!(Camera.GetFadingStatus())) {
                    if ($.rays_camera_2 == 0) {
                      $.player.SetCoordinates(38.9775, -727.8468, 21.6);
                      $.player.SetHeading(225.0);
                    }
                    Camera.SetFixedPosition(36.0301, -728.3186, 24.2803, 0.0, 0.0, 0.0);
                    Camera.EnablePlayerControl();
                    Camera.PointAtPoint(36.9545, -728.3175, 23.8989, 2 /* JUMP_CUT */);
                    Camera.DoFade(200, 1 /* FADE_IN */);
                    $.rays_camera_1 = 2;
                  }
                }
                if ($.rays_camera_1 == 2) {
                  if (!(Camera.GetFadingStatus())) {
                    $.player.SetControl(1 /* ON */);
                    $.rays_camera_1 = 3;
                    $.rays_camera_2 = 0;
                    $.rays_camera_3 = 0;
                  }
                }
              }
              if ($.player.IsInArea2D(44.2774, -734.5862, 47.4772, -729.3754, 0)) {
                if ($.rays_camera_2 == 0) {
                  $.player.SetControl(0 /* OFF */);
                  Camera.DoFade(200, 0 /* FADE_OUT */);
                  $.rays_camera_2 = 1;
                }
                if ($.rays_camera_2 == 1) {
                  if (!(Camera.GetFadingStatus())) {
                    Camera.SetFixedPosition(46.7275, -727.1589, 22.5274, 0.0, 0.0, 0.0);
                    Camera.EnablePlayerControl();
                    Camera.PointAtPoint(46.4612, -728.1208, 22.5895, 2 /* JUMP_CUT */);
                    Camera.DoFade(200, 1 /* FADE_IN */);
                    $.rays_camera_2 = 2;
                  }
                }
                if ($.rays_camera_2 == 2) {
                  if (!(Camera.GetFadingStatus())) {
                    $.player.SetControl(1 /* ON */);
                    $.rays_camera_1 = 0;
                    $.rays_camera_2 = 3;
                    $.rays_camera_3 = 0;
                  }
                }
              }
              if ($.player.IsInArea2D(36.5302, -734.5862, 44.2774, -729.3754, 0)) {
                if ($.rays_camera_3 == 0) {
                  $.player.SetControl(0 /* OFF */);
                  Camera.DoFade(200, 0 /* FADE_OUT */);
                  $.rays_camera_3 = 1;
                }
                if ($.rays_camera_3 == 1) {
                  if (!(Camera.GetFadingStatus())) {
                    Camera.SetFixedPosition(46.5875, -733.8959, 23.9757, 0.0, 0.0, 0.0);
                    Camera.EnablePlayerControl();
                    Camera.PointAtPoint(45.6562, -733.6129, 23.7464, 2 /* JUMP_CUT */);
                    Camera.DoFade(200, 1 /* FADE_IN */);
                    $.rays_camera_3 = 2;
                  }
                }
                if ($.rays_camera_3 == 2) {
                  if (!(Camera.GetFadingStatus())) {
                    $.player.SetControl(1 /* ON */);
                    $.rays_camera_1 = 0;
                    $.rays_camera_2 = 0;
                    $.rays_camera_3 = 3;
                  }
                }
              }
            }
            else {
              if ($.rays_camera_1 == 3) {
                $.player.SetControl(0 /* OFF */);
                Camera.DoFade(200, 0 /* FADE_OUT */);
                $.rays_camera_1 = 4;
              }
              if ($.rays_camera_1 == 4) {
                if (!(Camera.GetFadingStatus())) {
                  World.ClearArea(38.9115, -726.0132, 22.2, 2.0, 1 /* TRUE */);
                  $.player.SetCoordinates(38.9115, -726.0132, 21.6);
                  $.player.SetHeading(0.0);
                  Camera.RestoreJumpcut();
                  Camera.SetInFrontOfPlayer();
                  Camera.DoFade(200, 1 /* FADE_IN */);
                  $.rays_camera_1 = 5;
                }
              }
              if ($.rays_camera_1 == 5) {
                if (!(Camera.GetFadingStatus())) {
                  $.player.SetControl(1 /* ON */);
                  $.rays_camera_1 = 0;
                  $.rays_camera_2 = 0;
                  $.rays_camera_3 = 0;
                }
              }
            }
          }
          else {
            if (!($.rays_camera_1 == 0) || !($.rays_camera_2 == 0) || !($.rays_camera_3 == 0)) {
              Camera.SetInFrontOfPlayer();
              Camera.RestoreJumpcut();
              $.rays_camera_1 = 0;
              $.rays_camera_2 = 0;
              $.rays_camera_3 = 0;
            }
          }
        }
      }
    }
  }
  // SCM GOTO → mission_start_camera (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_start_camera"); // fallback: would break linear control flow
  // MissionBoundary
  }
}

export async function camera() {
  // MissionBoundary
  // VAR_INT rays_cutscene_flag rays_camera_1 rays_camera_2 rays_camera_3
  $.rays_camera_1 = 0;
  $.rays_camera_2 = 0;
  $.rays_camera_3 = 0;
  $.rays_cutscene_flag = 0;
  // ScriptName
  // SET_DEATHARREST_STATE(0 /* OFF */);
}
