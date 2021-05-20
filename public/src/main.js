'use strict';

/*
DeviceMotionEvent.requestPermission()
.then(response => {
  if (response == 'granted') {
    window.addEventListener('devicemotion', (e) => {
      // do something with e
      console.log(e);
    })
  }
})
.catch(console.error)
*/

/*

DeviceOrientationEvent.requestPermission()
.then(response => {
  if (response == 'granted') {
    window.addEventListener('deviceorientation', (e) => {
      // do something with e
      console.log(e);
    })
  }
})
.catch(console.error)

*/

/*

if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      // iOS 13+
      popupOpen("requestPermissionPopup");
    } else {
      // non iOS 13+
      window.addEventListener("deviceorientation", (e) => {
        console.log('non iOS 13+');
        console.log(e);
      });
    }



  // for ios13
  requestPermission = ()=> {
    DeviceOrientationEvent.requestPermission().then(response => {
      if (response === 'granted') {
        window.addEventListener("deviceorientation", (e) => {
          console.log('for ios13');
          console.log(e);
        });
      }
    }).catch(console.error);
  };

*/

document.getElementById("request_permission").addEventListener("click", function(){
if (
DeviceMotionEvent &&
DeviceMotionEvent.requestPermission &&
typeof DeviceMotionEvent.requestPermission === 'function'
) {
DeviceMotionEvent.requestPermission();
}
if (
DeviceOrientationEvent &&
DeviceOrientationEvent.requestPermission &&
typeof DeviceOrientationEvent.requestPermission === 'function'
) {
DeviceOrientationEvent.requestPermission();
}
})




