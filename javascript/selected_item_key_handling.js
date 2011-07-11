function keyup(event){

	
	if(edit_mode){


	}else{

		switch(window.event.keyCode){

			case 16: shiftdown = false;
   				 break;
		
		}


	}

}

function keydown(event){

	if(edit_mode){

		

	}else{

		switch(window.event.keyCode){

			case 27: isdrag=false;
				 dobj = null;
				 break;
			case 16: shiftdown=true;
				 break;
			case 37: dobj.style.left = shiftdown ? Number(String(dobj.style.left).substr(0,String(dobj.style.left).length-2)) - 10 + "px" : 
				 Number(String(dobj.style.left).substr(0,String(dobj.style.left).length-2)) - 1 + "px" ;
				 set_page_innerhtml();
				 break;	
			case 38: dobj.style.top = shiftdown ? Number(String(dobj.style.top).substr(0,String(dobj.style.top).length-2)) - 10 + "px" : 
				 Number(String(dobj.style.top).substr(0,String(dobj.style.top).length-2)) - 1 + "px" ;
			 	 set_page_innerhtml();
				 break;
			case 39: dobj.style.left = shiftdown ? Number(String(dobj.style.left).substr(0,String(dobj.style.left).length-2)) + 10 + "px" : 
			         Number(String(dobj.style.left).substr(0,String(dobj.style.left).length-2)) + 1 + "px";
				 set_page_innerhtml();
			 	 break;
			case 40: dobj.style.top = shiftdown ? Number(String(dobj.style.top).substr(0,String(dobj.style.top).length-2)) + 10 + "px" : 
				 set_page_innerhtml();
	  		         Number(String(dobj.style.top).substr(0,String(dobj.style.top).length-2)) + 1 + "px" ;
				 break;
			default: break;
		
		}

	}

}