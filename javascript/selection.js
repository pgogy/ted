function selectmouse(e){

	var fobj       = nn6 ? e.target : event.srcElement;

	if(fobj.tagName!="BODY"){
  
		var topelement = nn6 ? "HTML" : "BODY";

		if(fobj.tagName=="P"){

			fobj = fobj.parentNode;

		}

		if(dobj!=fobj){

			if(dobj!=null){

				dobj.style.border="none";	

			}
		
			fobj.style.border = "1px dashed #000";
			dobj = fobj;
			document.onmousemove = mouseover;

		  }else{
	 
	 		draggable = fobj.getAttribute('drag');

			while (fobj.tagName != topelement && !draggable){
			
				fobj = nn6 ? fobj.parentNode : fobj.parentElement;
		  	}


	  		if (draggable&&document.body.style.cursor=="default"){
		    
		    		isdrag = true;
				tx = parseInt(dobj.style.left+0);
				ty = parseInt(dobj.style.top+0);
				x = nn6 ? e.clientX : event.clientX;
		    		y = nn6 ? e.clientY : event.clientY;
				document.onmousemove= movemouse;
				document.onmouseout = mouseout;
				return false;

			}else{

				dobj.orig_x = dobj.offsetLeft;
				dobj.orig_y = dobj.offsetTop;
				dobj.orig_width = dobj.offsetWidth;
				dobj.orig_height = dobj.offsetHeight;

				tx = parseInt(dobj.style.left+0);
   	        		ty = parseInt(dobj.style.top+0);

				switch(document.body.style.cursor){

					case "w-resize":document.onmousemove = wresize;
							break;
					case "e-resize":document.onmousemove = eresize;
							break;
					case "s-resize":document.onmousemove = sresize;
							break;
					case "n-resize":document.onmousemove = nresize;
							break;
					case "sw-resize":document.onmousemove = swresize;
							break;
					case "nw-resize":document.onmousemove = nwresize;
							break;
					case "ne-resize":document.onmousemove = neresize;
							break;
					case "se-resize":document.onmousemove = seresize;
							break;
					default:break;

				}

			}

		}

	}else{

		dobj.style.border="none";
		dobj = null;

	}


}
