function movemouse(e)
{
  
	if (isdrag){

		dobj.style.position="absolute";
	   	dobj.style.left = tx + event.clientX - x;
    		dobj.style.top  = ty + event.clientY - y;
		document.body.style.cursor = "move";
		return false;

  	}
	
}

function mouseup(event){

	document.body.style.cursor = "default";
	isdrag= false;
	draggable = false;
	document.onmousemove = mouseover;

}

function mouseout(e){

	document.body.style.cursor = "default";

}


function mouseover(e){

	if(!draggable&&dobj!=null){

		get_x_y(dobj);

		curleft = false;
		curright = false;
		curtop = false;
		curbottom = false;

		if((actual_left<event.clientX)&&(event.clientX<Number(actual_left+dobj.offsetWidth))){

			if(event.clientX<(actual_left+5)){
			
				curleft = true;

			}else if(event.clientX>(actual_left+dobj.offsetWidth-5)){

				curright = true;			

			}

		}

		if((actual_top<event.clientY)&&(event.clientY<Number(actual_top+dobj.offsetHeight))){

			if(event.clientY<(actual_top+5)){
			
				curtop = true;

			}else if(event.clientY>(actual_top+dobj.offsetHeight-5)){

				curbottom = true;			

			}

		}

		if(curtop){	

			document.body.style.cursor="n-resize";

		}

		if(curbottom){

			document.body.style.cursor="s-resize";

		}

		if(curleft&&curtop){

			document.body.style.cursor="nw-resize";

		}else if(curleft&&curbottom){

			document.body.style.cursor="sw-resize";		

		}else if(curleft){

			document.body.style.cursor="w-resize";	

		}

		if(curright&&curtop){

			document.body.style.cursor="ne-resize";
		
		}else if(curright&&curbottom){

			document.body.style.cursor="se-resize";

		}else if(curright){

			document.body.style.cursor="e-resize";

		}	

		if(!curtop&&!curbottom&&!curleft&&!curright){

			document.body.style.cursor="default";

		}	


	}
}
