var baseUrl = "./Neptunes Kit 1/";
var audio = ["N1S11.wav", "N1S11reversed.wav","N3S25.wav",
"N4K8.wav","N4P4.wav","N4P8.wav","N9K28.wav","N9P23.wav"];


	$(document).ready(function(){

    	
		$('.pad').each(function(){
    	$(document).on('keydown', function(e) {  
    	
    for (i=0; i < 9; i++) {

		switch (e.keyCode) {
    		case 49: // 1 Key
    		var pad = new Audio(baseUrl + audio[0]);
    		pad.play();
    		pad.volume = 0.01;
    }

   }
    	
});

});



	$(document).on('keydown keyup', function(e){
			
		//Pads 1-4
		if (e.keyCode === 49){

			$("#pad1").toggleClass("pad-down");
			
		
		};	
		if (e.keyCode == 50){

			$("#pad2").toggleClass("pad-down");
			
		};	
		if (e.keyCode == 51){

			$("#pad3").toggleClass("pad-down");
		};	
		if (e.keyCode == 52){

			$("#pad4").toggleClass("pad-down");
		};	

		//Pads 5-8

		if (e.keyCode == 81){

			$("#pad5").toggleClass("pad-down");
		};	
		if (e.keyCode == 87){

			$("#pad6").toggleClass("pad-down");
		};	
		if (e.keyCode == 69){

			$("#pad7").toggleClass("pad-down");
		};	
		if (e.keyCode == 82){

			$("#pad8").toggleClass("pad-down");
		};	

		//Pads 9-12

		if (e.keyCode == 65){

			$("#pad9").toggleClass("pad-down");
		};	
			
		if (e.keyCode == 83){

			$("#pad10").toggleClass("pad-down");
		}
		
		if (e.keyCode == 68){

			$("#pad11").toggleClass("pad-down");
		};	

		if (e.keyCode == 70){

			$("#pad12").toggleClass("pad-down");
		};	

		//Pads 13-16

		if (e.keyCode == 90){

			$("#pad13").toggleClass("pad-down");
		};	
			
		if (e.keyCode == 88){

			$("#pad14").toggleClass("pad-down");
		}
		
		if (e.keyCode == 67){

			$("#pad15").toggleClass("pad-down");
		};	

		if (e.keyCode == 86){

			$("#pad16").toggleClass("pad-down");
		};	


		});
	

});

