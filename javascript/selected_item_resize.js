function wresize(e){
	
	/*dobj.style.position = "absolute";
   	dobj.style.left = event.clientX;
	dobj.style.width = (dobj.orig_x - event.clientX) + dobj.orig_width;

	if(dobj.src!=undefined){

		dobj.style.left = "1";

		//setAttribute("width", pixel_strip(dobj.style.width));

	}

	document.body.style.cursor = "w-resize";
	set_page_innerhtml();
	return false;*/

}

function eresize(e){

	/*dobj.style.width = event.clientX - (dobj.orig_x + dobj.orig_width) + dobj.orig_width;
	document.body.style.cursor = "e-resize";



	if(dobj.src!=undefined){

		dobj.setAttribute("width", pixel_strip(dobj.style.width));

	}

	set_page_innerhtml();
	return false;*/

}

function sresize(e){

	dobj.style.position="absolute";
	dobj.style.height = event.clientY - (dobj.orig_y + dobj.orig_height) + dobj.orig_height;
	document.body.style.cursor = "s-resize";



	if(dobj.src!=undefined){

		dobj.setAttribute("height", pixel_strip(dobj.style.height));

	}

	set_page_innerhtml();
	return false;

}

function nresize(e){
	
	dobj.style.left = dobj.offsetLeft;
	dobj.style.position = "absolute";
   	dobj.style.top = event.clientY;
	dobj.style.height = (dobj.orig_y - event.clientY) + dobj.orig_height;
	document.body.style.cursor = "n-resize";

	

	if(dobj.src!=undefined){

		alert("here");

		dobj.setAttribute("height", pixel_strip(dobj.style.height));

	}

	set_page_innerhtml();
	return false;

}

function swresize(e){

	dobj.style.position="absolute";
   	dobj.style.left = event.clientX;
	dobj.style.width = (dobj.orig_x - event.clientX) + dobj.orig_width;
	dobj.style.height = event.clientY - (dobj.orig_y + dobj.orig_height) + dobj.orig_height;
	document.body.style.cursor = "sw-resize";



	if(dobj.src!=undefined){

		dobj.setAttribute("width", pixel_strip(dobj.style.width));
		dobj.setAttribute("height", pixel_strip(dobj.style.height));

	}

	set_page_innerhtml();
	return false;

}

function nwresize(e){

	dobj.style.position="absolute";
   	dobj.style.left = event.clientX;
	dobj.style.width = (dobj.orig_x - event.clientX) + dobj.orig_width;
   	dobj.style.top = event.clientY;
	dobj.style.height = (dobj.orig_y - event.clientY) + dobj.orig_height;
	document.body.style.cursor = "nw-resize";



	if(dobj.src!=undefined){

		dobj.setAttribute("width", pixel_strip(dobj.style.width));
		dobj.setAttribute("height", pixel_strip(dobj.style.height));

	}

	set_page_innerhtml();
	return false;

}

function neresize(e){

	dobj.style.left = dobj.offsetLeft;
	dobj.style.position="absolute";
   	dobj.style.top = event.clientY;
	dobj.style.height = (dobj.orig_y - event.clientY) + dobj.orig_height;
	dobj.style.width = event.clientX - (dobj.orig_x + dobj.orig_width) + dobj.orig_width;
	document.body.style.cursor = "ne-resize";



	if(dobj.src!=undefined){

		dobj.setAttribute("width", pixel_strip(dobj.style.width));
		dobj.setAttribute("height", pixel_strip(dobj.style.height));

	}

	set_page_innerhtml();
	return false;

}

function seresize(e){

	dobj.style.left = dobj.offsetLeft;
	dobj.style.position = "absolute";
	dobj.style.width = event.clientX - (dobj.orig_x + dobj.orig_width) + dobj.orig_width;
	dobj.style.height = event.clientY - (dobj.orig_y + dobj.orig_height) + dobj.orig_height;
	document.body.style.cursor = "se-resize";



	if(dobj.src!=undefined){

		dobj.setAttribute("width", pixel_strip(dobj.style.width));
		dobj.setAttribute("height", pixel_strip(dobj.style.height));

	}

	set_page_innerhtml();
	return false;

}