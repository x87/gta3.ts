// Generated from Main/Industrial/camera.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_camera() {
  {


  await asyncWait(70);


  //INDUSTRIAL******************************************************************************************************
  /*
  IF IS_PLAYER_PLAYING Player

  IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL

  IF IS_PLAYER_IN_ZONE player CHINA
  // Fuzz ball camera zoom
  IF IS_PLAYER_IN_AREA_3D player 1004.0 -892.0 14.0 996.9 -885.6 17.0 FALSE
  IF camera_stuff1 = 0
  SET_FIXED_CAMERA_POSITION 1000.120 -880.396 16.6 0.0 0.0 0.0
  POINT_CAMERA_AT_PLAYER player FIXED INTERPOLATION
  //POINT_CAMERA_AT_POINT 1000.1 -881.3 16.5 INTERPOLATION
  //SET_CAMERA_ZOOM CAM_ZOOM_TWO
  camera_stuff1 = 1
  ENDIF
  ELSE
  IF camera_stuff1 = 1
  RESTORE_CAMERA
  SET_CAMERA_IN_FRONT_OF_PLAYER
  camera_stuff1 = 0
  ENDIF
  ENDIF
  ENDIF

  ENDIF //IS_PLAYER_IN_ZONE

  ENDIF //IS_PLAYER_PLAYING
  */


  //COMMERCIAL*****************************************************************************************************


  if ($.player.isPlaying()) {
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {


      //RAYS TOILETS FIXED CAM STUFF //rays_camera_1
      if ($.rays_cutscene_flag == 0) {
        if ($.player.isPlaying()) {
          if ($.player.isInZone("PARK")) {
            if ($.player.isInArea3D(36.5302, -734.5862, 21.67, 47.4772, -726.9442, 24.457, false)) {
              if ($.player.isInArea2D(36.5302, -729.3754, 47.4772, -726.9442, false)) {
                if ($.rays_camera_1 == 0) {
                  $.player.setControl(false /* OFF */);
                  Camera.SetFadingColor(1, 1, 1);
                  Camera.DoFade(200, 0 /* FADE_OUT */);
                  $.rays_camera_1 = 1;
                }
                if ($.rays_camera_1 == 1) {
                  if (!(Camera.GetFadingStatus())) {
                    if ($.rays_camera_2 == 0) {
                      $.player.setCoordinates(38.9775, -727.8468, 21.6);
                      $.player.setHeading(225.0);
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
                    $.player.setControl(true /* ON */);
                    $.rays_camera_1 = 3;
                    $.rays_camera_2 = 0;
                    $.rays_camera_3 = 0;
                  }
                }
              }
              if ($.player.isInArea2D(44.2774, -734.5862, 47.4772, -729.3754, false)) {
                if ($.rays_camera_2 == 0) {
                  $.player.setControl(false /* OFF */);
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
                    $.player.setControl(true /* ON */);
                    $.rays_camera_1 = 0;
                    $.rays_camera_2 = 3;
                    $.rays_camera_3 = 0;
                  }
                }
              }
              if ($.player.isInArea2D(36.5302, -734.5862, 44.2774, -729.3754, false)) {
                if ($.rays_camera_3 == 0) {
                  $.player.setControl(false /* OFF */);
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
                    $.player.setControl(true /* ON */);
                    $.rays_camera_1 = 0;
                    $.rays_camera_2 = 0;
                    $.rays_camera_3 = 3;
                  }
                }
              }
            }
            else {
              if ($.rays_camera_1 == 3) {
                $.player.setControl(false /* OFF */);
                Camera.DoFade(200, 0 /* FADE_OUT */);
                $.rays_camera_1 = 4;
              }
              if ($.rays_camera_1 == 4) {
                if (!(Camera.GetFadingStatus())) {
                  World.ClearArea(38.9115, -726.0132, 22.2, 2.0, true /* TRUE */);
                  $.player.setCoordinates(38.9115, -726.0132, 21.6);
                  $.player.setHeading(0.0);
                  Camera.RestoreJumpcut();
                  Camera.SetInFrontOfPlayer();
                  Camera.DoFade(200, 1 /* FADE_IN */);
                  $.rays_camera_1 = 5;
                }
              }
              if ($.rays_camera_1 == 5) {
                if (!(Camera.GetFadingStatus())) {
                  $.player.setControl(true /* ON */);
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
      */


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
  //VAR_INT camera_stuff1 camera_stuff2	camera_stuff3 camera_stuff4
  /*
  camera_stuff1 = 0
  camera_stuff2 = 0
  camera_stuff3 = 0
  camera_stuff4 = 0
  */

  $.rays_camera_1 = 0;
  $.rays_camera_2 = 0;
  $.rays_camera_3 = 0;
  $.rays_cutscene_flag = 0;



  // ScriptName


  // SET_DEATHARREST_STATE(false /* OFF */);



}
