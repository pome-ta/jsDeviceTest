'use strict';

/**
 * ジャイロ着火のおまじない
 * https://bagelee.com/webar-vr/ios13-webar-webvr/
 */

document.getElementById("request_permission").addEventListener("click", () => {
  if (DeviceMotionEvent && DeviceMotionEvent.requestPermission && typeof DeviceMotionEvent.requestPermission === 'function') {
    console.log('1: DeviceMotionEvent');
    DeviceMotionEvent.requestPermission();
  }
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission && typeof DeviceOrientationEvent.requestPermission === 'function') {
    console.log('2: DeviceOrientationEvent');
    DeviceOrientationEvent.requestPermission();
  }
})

if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
  console.log("Let's get this party started")
}


const medias = {
  audio: false,
  video: {
    facingMode: {
      exact: "environment"
    }
  }
};

const video = document.getElementById("video");
navigator.mediaDevices.getUserMedia(medias)
  .then(stream => {
    console.log(video);
    console.log(stream);
    video.srcObject = stream;
    //video.play();
  }).catch(e => {
    console.log('えらー');
    console.log(e);
  });

window.addEventListener( "devicemotion", ( event ) => {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;

  const result1 = document.getElementById( "result_acc" );
  //console.log(typeof x);
  result1.innerHTML = "重力加速度<br />" +
  "X：" + x.toFixed(2) +"(m/s^2)<br />" +
  "Y：" + y.toFixed(2) +"(m/s^2)<br />" + 
  "Z：" + z.toFixed(2) +"(m/s^2)<br />";
});


window.addEventListener( "deviceorientation", ( event ) => {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  const result2 = document.getElementById( "result_gyro" );
  result2.innerHTML = "ジャイロセンサー<br />" +
    "alpha：" + alpha.toFixed(2) +"°<br />" +
    "beta ：" + beta.toFixed(2)  +"°<br />" + 
    "gamma：" + gamma.toFixed(2) +"°<br />";
}, false);
