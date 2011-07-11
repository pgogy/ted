var increase_height_interval=0;
var decrease_height_interval=0;

function increase_height(id,max){

	document.getElementById(id).style.display = "block";

	if(document.getElementById(id).style.height!=max){

		if(pixel_strip(document.getElementById(id).style.height)>(pixel_strip(max)-20)){

			document.getElementById(id).style.height = Number(pixel_strip(document.getElementById(id).style.height) + (pixel_strip(max)-pixel_strip(document.getElementById(id).style.height))) + "px";					

		}else{		

			document.getElementById(id).style.height = pixel_strip(document.getElementById(id).style.height) + 20 + "px";		

		}

	}else{

		clearInterval(increase_height_interval);

	}

}

function decrease_height(id){

	if(document.getElementById(id).style.height!="1px"){

		if(pixel_strip(document.getElementById(id).style.height)>20){

			document.getElementById(id).style.height = pixel_strip(document.getElementById(id).style.height) - 20 + "px";		

		}else{

			document.getElementById(id).style.height = Number(pixel_strip(document.getElementById(id).style.height) - pixel_strip(document.getElementById(id).style.height)+1) + "px";

		}

	}else{

		document.getElementById(id).style.display = "none";		

		clearInterval(decrease_height_interval);

	}

}

var media_active = false;

function mediashow(id){

	if(!media_active){

		media_active=true;

		close_id = String(id.id).substr(0,String(id.id).length-5);

		if(document.getElementById(close_id).style.height==""){

			document.getElementById(close_id).style.height = document.getElementById(close_id).offsetHeight;
			document.getElementById(close_id).max_height = document.getElementById(close_id).offsetHeight + 15 + "px";
			max_height = document.getElementById(close_id).offsetHeight + 15 + "px";
	
		}else{

			max_height = pixel_strip(document.getElementById(close_id).max_height) + 15 + "px";
			
			alert(max_height);

		}

		if(document.getElementById(close_id).offsetHeight==0){

			increase_height_interval=setInterval("increase_height(close_id,max_height)",10);

		}else{

			decrease_height_interval=setInterval("decrease_height(close_id)",10);				

		}

		media_active=false;


	}

}