'use strict';

	// ジャイロセンサーが有効か？
if(window.DeviceOrientationEvent){
    // ★iOS13向け: ユーザーにアクセスの許可を求める関数があるか？
    if(DeviceOrientationEvent.requestPermission){
        var sensor_contents= document.getElementById("sensor_contents");
        // id="sensor_contents" な要素がクリックされたら
        sensor_contents.addEventListener("click", function(){
            // ★ジャイロセンサーのアクセス許可をリクエストする
            DeviceOrientationEvent.requestPermission().then(function(response){
                // リクエストが許可されたら
                if(response === "granted"){
                    // deviceorientationが有効化される
                }
            }).catch(function(e){
                console.log(e);
            });
        });
    // iOS13以外
    }else{
        // 何もしない
    }
}
 
// 従来の処理
// deviceorientationだったりdevicemotionだったりする
function deviceorientationHandler(){
    // ※※※※※※※※※※※※※※※※
    //   ここに従来の処理を書いていく
    // ※※※※※※※※※※※※※※※※
}
window.addEventListener("deviceorientation", deviceorientationHandler);