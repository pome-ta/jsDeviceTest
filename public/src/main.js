'use strict';

/**
 * ジャイロ着火のおまじない
 * https://bagelee.com/webar-vr/ios13-webar-webvr/
 */
document.getElementById("request_permission").addEventListener("click", function() {
  if (DeviceMotionEvent && DeviceMotionEvent.requestPermission && typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission();
  }
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission();
  }
})




