// JavaScript Document
//	function vidplay() {
//var video = document.getElementById("video1");
//var button = document.getElementById("btn");
//if (video.paused) {
//video.play();
//} else {
//video.pause();
//}
//}
btn.onclick = function(){
		var button = document.getElementById("btn");
		var video = document.getElementById("video1");
		if(video.paused){
			video.play();
			}
		else{
			video.pause();
			}
		}