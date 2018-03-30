var baseUrl = "./Neptunes Kit 1/";
var audio = ["N1S11.wav", "N1S11reversed.wav","N3S25.wav", "N4K8.wav","N4P4.wav","N4P8.wav","N9K28.wav","N9P23.wav"];
var pads = [49,50,51,52, 81,87,69,82, 65,83,68,70, 90,88,67,86];

// function pads() {
// 	var sound = Audio(baseUrl + audio);
// 	sound.play();
// 	sound.volume() = .5;
// }

// for(i=0; i<audio.length; i++){
// 	pads();
// }



$(document).ready(function(){

$(document).on('keydown', function(e){

	padDown(e);

})
})


function padDown(e){
	pads.forEach(function(p,i){
		//Pads 1-4
		if (e.keyCode === pads[p,i]){
			var pad = $("#pad"+i);
			console.log(p,i);
			$(pad).addClass("pad-down");
		};
		
	}) //end forEach 
}



function listAudio() {
	//loop through audio and add baseurl to it
	audio.forEach(function(i,a){
		console.log(new Audio(baseUrl + audio[a]));
		return new Audio(baseUrl + audio[a]);
	})
}
