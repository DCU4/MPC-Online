var baseUrl = "./Neptunes Kit 1/";
var audio = ["N1S11.wav", "N1S11reversed.wav","N3S25.wav", "N4K8.wav","N4P4.wav","N4P8.wav","N9K28.wav","N9P23.wav"];
var padNum = [49,50,51,52, 81,87,69,82, 65,83,68,70, 90,88,67,86];



$(document).ready(function(){
	$(document).on('keydown keyup', function(e){
		
	padDown(e);

	});

	$(document).on('keydown', function(event){
		
	playAudio(event);

	});  

	
})



function padDown(e){
	padNum.forEach(function(p,i){		
		if (e.keyCode === padNum[p,i]){
			var padDown = $(".pad"+i);
			console.log(p,i);
			$(padDown).toggleClass("pad-down");		
		};
	}) //end pads.forEach 
}

function playAudio(event){
	if(keyData[event.key]){
		keyData[event.key].sound.play();
	}
}


var keyData = {
	1: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N1S11.wav']
		}),
		color: '#1abc9c'
	},
	2: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N1S11reversed.wav']
		}),
		color: '#1abc9c'
	},
	3: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N3S25.wav']
		}),
		color: '#1abc9c'
	},
	4: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N4K8.wav']
		}),
		color: '#1abc9c'
	},
	q: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N4P4.wav']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N4P8.wav']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N9K28.wav']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N9P23.wav']
		}),
		color: '#9b59b6'
	},
	
	a: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N9P23.wav']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N9P23.wav']
		}),
		color: '#e67e22'
	},
	d: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N9P23.wav']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N9P23.wav']
		}),
		color: '#95a5a6'
	},
	

	z: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N9P23.wav']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N9P23.wav']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N9P23.wav']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		src: ['Neptunes Kit 1/N9P23.wav']
		}),
		color: '#27ae60'
	}

}

