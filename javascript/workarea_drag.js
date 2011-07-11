document.onmousedown= selectmouse;

var ie=document.all;
var nn6=document.getElementById&&!document.all;

var item_drag_management = new Object;
item_drag_management.isdrag=false;
item_drag_management.x =0;
item_drag_management.y =0; 
item_drag_management.currently_selected_item;// was dobj
item_drag_management.actual_top = 0;
item_drag_management.actual_left = 0;
item_drag_management.shiftdown = false;
item_drag_management.draggable = false;

function get_x_y(node){

	item_drag_management.actual_top = 0;
	item_drag_management.actual_left = 0;

	if(node!=null){

		while(node.nodeName != "HTML"){

			item_drag_management.actual_left += node.offsetLeft;				

			item_drag_management.actual_top += node.offsetTop;					

			if(node.parentNode!=null){

				node = node.parentNode;

			}else{
			
				break;				

			}

		}

	}

}

function keyup(event){

	switch(window.event.keyCode){

		case 16: item_drag_management.shiftdown = false;
   			 break;
		case 17: page_drag_management.control_down = false;
			 break;


	}

}

function drag_end(event){

	if(!resize_flag){

		set_page_innerhtml();

	}

	document.onmouseup = mouseup;

	mouseup(event);

}

function workareamovemouse(e)
{
  
	if (item_drag_management.isdrag){

		
		mousex = (window.Event) ? e.pageX : event.clientX;		
		mousey = (window.Event) ? e.pageY : event.clientY;

	   	item_drag_management.currently_selected_item.style.left = tx + mousex - item_drag_management.x;
    		item_drag_management.currently_selected_item.style.top  = ty + mousey - item_drag_management.y;
		document.body.style.cursor = "move";
		document.onmouseup = drag_end;

		return false;

  	}
	
}

function mouseup(event){

	if(window.event.button!=2){

		if(item_drag_management.currently_selected_item!=null){

			document.body.style.cursor = "default";
			item_drag_management.isdrag= false;
			item_drag_management.draggable = false;

			if(resize_flag){
				
				set_page_innerhtml();

				resize_flag = false;

			}

			item_drag_management.currently_selected_item.setAttribute('title', 'Width : ' + item_drag_management.currently_selected_item.style.width + '\nHeight : ' + item_drag_management.currently_selected_item.style.height + '\nX : ' + (item_drag_management.currently_selected_item.offsetLeft - document.getElementById("workspace").offsetLeft) + '\nY : ' + (item_drag_management.currently_selected_item.offsetTop - document.getElementById("workspace").offsetTop));	

			document.onmousemove = mouseover;

		}else{

			onmouseup(event);

		}
	
	}

}
	
function selectmouse(e){

	if(!shapeareadraw.drawing_mode){

		var fobj       = nn6 ? e.target : event.srcElement;

		if(window.event.button==1){

			if(fobj.getAttribute("mouse")=="wizard"){

				drag_wizard(e);

			}else if((fobj.getAttribute("mouse")=="rectangle")||(fobj.parentNode.getAttribute("mouse")=="rectangle")){

				clickmenudisplay("rectangledisplay", event);

				document.onmousedown = clickmenuhide;

	
			}else if((fobj.getAttribute("mouse")=="newtext")||(fobj.parentNode.getAttribute("mouse")=="newtext")){

				clickmenudisplay("textareadisplay", event);

				document.onmousedown = clickmenuhide;

	
			}else if((fobj.getAttribute("mouse")=="newbutton")||(fobj.parentNode.getAttribute("mouse")=="newbutton")){

				clickmenudisplay("buttondisplay", event);

				document.onmousedown = clickmenuhide;


			}else if((fobj.getAttribute("mouse")=="flashcardinsert")||(fobj.parentNode.getAttribute("mouse")=="flashcardinsert")){

				clickmenudisplay("flashcarddisplay", event);

				document.onmousedown = clickmenuhide;


			}else if((fobj.getAttribute("mouse")=="picturescroll")||(fobj.parentNode.getAttribute("mouse")=="picturescroll")){

				clickmenudisplay("picturescrolldisplay", event);

				document.onmousedown = clickmenuhide;


			}else if((fobj.getAttribute("mouse")=="missingwords")||(fobj.parentNode.getAttribute("mouse")=="missingwords")){

				clickmenudisplay("missingwordsdisplay", event);

				document.onmousedown = clickmenuhide;


			}else if((fobj.getAttribute("mouse")=="wordfill")||(fobj.parentNode.getAttribute("mouse")=="wordfill")){

				clickmenudisplay("wordfilldisplay", event);

				document.onmousedown = clickmenuhide;


			}else if(fobj.getAttribute("mouse")=="page"){

				dragme(event,fobj.parentNode);


			}else if((fobj.getAttribute("mouse")=="dragdrop")||(fobj.parentNode.getAttribute("mouse")=="dragdrop")){

				clickmenudisplay("dragdropdisplay",event);	
	
				document.onmousedown = clickmenuhide;


			}else if((fobj.getAttribute("mouse")=="mcqinsert")||(fobj.parentNode.getAttribute("mouse")=="mcqinsert")){

				clickmenudisplay("mcqinsert",event);	

				document.onmousedown = clickmenuhide;

	
			}else if((fobj.getAttribute("mouse")=="scoreinsert")||(fobj.parentNode.getAttribute("mouse")=="scoreinsert")){

				clickmenudisplay("scoreareainsert",event);	

				document.onmousedown = clickmenuhide;

	
			}else if((fobj.getAttribute("mouse")=="stimulatinginsert")||(fobj.parentNode.getAttribute("mouse")=="stimulatinginsert")){

				clickmenudisplay("stimulatinginsert",event);	

				document.onmousedown = clickmenuhide;


			}else if((fobj.getAttribute("mouse")=="eitherorinsert")||(fobj.parentNode.getAttribute("mouse")=="eitherorinsert")){

				clickmenudisplay("eitherorinsert",event);	

				document.onmousedown = clickmenuhide;


			}else if((fobj.getAttribute("mouse")=="torfinsert")||(fobj.parentNode.getAttribute("mouse")=="torfinsert")){

				clickmenudisplay("torfinsert",event);	

				document.onmousedown = clickmenuhide;


			}else if((fobj.getAttribute("mouse")=="smsinsert")||(fobj.parentNode.getAttribute("mouse")=="smsinsert")){

				clickmenudisplay("smsinsert",event);	

				document.onmousedown = clickmenuhide;


			}else if((fobj.getAttribute("mouse")=="urlinsert")||(fobj.parentNode.getAttribute("mouse")=="urlinsert")){

				clickmenudisplay("urlinsert",event);	

				document.onmousedown = clickmenuhide;


			}else if(fobj.getAttribute("mouse")=="imagelibrary"){

				if(fobj.parentNode.id=="picturechooselist"){

					clickmenu.insertpictureparameter = event.srcElement.src;

					insert_picture("picturescroll");

					insert_picture_scroll_bar();

				}else if(fobj.parentNode.id=="hotspotlist"){

					clickmenu.insertpictureparameter = event.srcElement.src;

					insert_picture("hotspot");

					insert_drag_drop();

					insert_drag_area();

					insert_feedback();

					insert_drag_drop_bar();
					

				}else{

					clickmenudisplay("insertpicture",event);	
	
					document.onmousedown = clickmenuhide;

				}


			}else if(fobj.getAttribute("mouse")=="libraryheader"){
		
				mediashow(fobj);

			
			}else if(fobj.getAttribute("mouse")=="drag"&&!wizard_settings.displayed){

				work_area_move(event,fobj);			

			}else{

				if(fobj.parentNode.getAttribute("mouse")=="drag"&&!wizard_settings.displayed){

					work_area_move(event,fobj.parentNode);

				}


			}

		}else if(window.event.button==2){

			document.body.style.cursor = "default"

			if(fobj.id =="workarea" || fobj.id =="workspace"){

				clickmenudisplay("document",event);

				document.onmousedown = clickmenuhide;
			

			}else if(fobj.getAttribute("mouse")=="page"){

				clickmenudisplay("documentpage",event);

				document.onmousedown = clickmenuhide;


			}else if((fobj.getAttribute("rmouse")=="targethotspot")||(fobj.parentNode.getAttribute("rmouse")=="targethotspot")){

				clickmenudisplay("hotspotmodify",event);	

				document.onmousedown = clickmenuhide;
			

			}else if(fobj.parentNode.getAttribute("rmouse")=="feedback"){

				clickmenudisplay("feedbackmodify",event);	

				document.onmousedown = clickmenuhide;
			

			}else if(fobj.getAttribute("rmouse")=="rectangle"){

				clickmenudisplay("rectanglemodify",event);	

				document.onmousedown = clickmenuhide;
			

			}else if(fobj.parentNode.getAttribute("rmouse")=="textarea"){

				clickmenudisplay("textareamodify",event);	

				document.onmousedown = clickmenuhide;
			

			}else if(fobj.parentNode.getAttribute("rmouse")=="stimulating"){

				clickmenudisplay("textareamodify",event);	

				document.onmousedown = clickmenuhide;
			

			}else if(fobj.getAttribute("rmouse")=="picture"){

				clickmenudisplay("dragitem",event);	

				document.onmousedown = clickmenuhide;
			

			}else if(fobj.getAttribute("rmouse")=="button"){

				clickmenudisplay("buttonmodify",event);	

				document.onmousedown = clickmenuhide;


			}else if(fobj.parentNode.getAttribute("rmouse")=="button"){

				clickmenudisplay("buttonmodify2",event);	

				document.onmousedown = clickmenuhide;
			

			}else if(fobj.parentNode.getAttribute("rmouse")=="flashcard"){

				clickmenudisplay("flashcardmodify",event);	

				document.onmousedown = clickmenuhide;
			

			}else if(fobj.parentNode.getAttribute("rmouse")=="flashbutton"){

				clickmenudisplay("flashcardbuttonmodify",event);	

				document.onmousedown = clickmenuhide;			

			}else if(fobj.parentNode.getAttribute("rmouse")=="missingwords"){

				clickmenudisplay("missingwordsmodify",event);	

				document.onmousedown = clickmenuhide;

			}else if(fobj.parentNode.getAttribute("rmouse")=="missingwordsbutton"){

				clickmenudisplay("missingwordsbuttonmodify",event);	

				document.onmousedown = clickmenuhide;

			}else if(fobj.parentNode.getAttribute("rmouse")=="wordfillprompt"){

				clickmenudisplay("wordfillprompt",event);	

				document.onmousedown = clickmenuhide;

			}else if(fobj.parentNode.getAttribute("rmouse")=="wordfillarea"){

				clickmenudisplay("wordfillarea",event);	

				document.onmousedown = clickmenuhide;

			}else if(fobj.parentNode.getAttribute("rmouse")=="wordfillresponse"){

				clickmenudisplay("wordfillresponse",event);	

				document.onmousedown = clickmenuhide;

			}else if(fobj.parentNode.getAttribute("rmouse")=="scorebutton"){

				clickmenudisplay("scorebuttonmodify",event);	

				document.onmousedown = clickmenuhide;

			}else if(fobj.parentNode.getAttribute("rmouse")=="sms"){

				clickmenudisplay("smsmodify",event);	

				document.onmousedown = clickmenuhide;

			}else if(fobj.parentNode.getAttribute("rmouse")=="url"){

				clickmenudisplay("urlmodify",event);	

				document.onmousedown = clickmenuhide;

			}

		}

	}

}

function work_area_move(event,fobj){

	if(window.event.button==2){

		clickmenudisplay("dragitem",event);

		document.onmousedown = clickmenuhide;				

	}else{

		if(item_drag_management.currently_selected_item!=fobj){

			if(item_drag_management.currently_selected_item!=null){

				item_drag_management.currently_selected_item.style.border="1px #ddd dashed";

			}
		
			item_drag_management.currently_selected_item = fobj;

			item_drag_management.currently_selected_item.style.border = "2px dashed #00f";

			document.onmouseup= mouseup;
			document.onmousemove = mouseover;
		
		}else{
	 
			if(fobj.getAttribute("mouse")=="drag"){

				item_drag_management.draggable = true; 

			}

			topelement = "html";

			while (fobj.tagName != topelement && !item_drag_management.draggable){
				fobj = nn6 ? fobj.parentNode : fobj.parentElement;
			}

			if (item_drag_management.draggable&&document.body.style.cursor=="default"){
		    
				item_drag_management.isdrag = true;
				tx = parseInt(item_drag_management.currently_selected_item.style.left+0);
				ty = parseInt(item_drag_management.currently_selected_item.style.top+0);
				item_drag_management.x = (window.Event) ? e.pageX : event.clientX;		
				item_drag_management.y = (window.Event) ? e.pageY : event.clientY;
			
				document.onmousemove= workareamovemouse;
				document.onmouseout = mouseout;

				return false;

			}else{

				item_drag_management.currently_selected_item.orig_x = item_drag_management.currently_selected_item.offsetLeft;
				item_drag_management.currently_selected_item.orig_y = item_drag_management.currently_selected_item.offsetTop;
				item_drag_management.currently_selected_item.orig_width = item_drag_management.currently_selected_item.offsetWidth;
				item_drag_management.currently_selected_item.orig_height = item_drag_management.currently_selected_item.offsetHeight;

				tx = parseInt(item_drag_management.currently_selected_item.style.left+0);
		   	        ty = parseInt(item_drag_management.currently_selected_item.style.top+0);

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
	
	}

}


function mouseout(e){

	document.body.style.cursor = "default";

}

var resize_flag = false;

function wresize(e){

	if(!wizard_settings.displayed){
	
		offset_left = document.getElementById("workingarea").offsetLeft;
		offset_top = document.getElementById("workingarea").offsetTop;

		temp_x = (window.Event) ? e.pageX : event.clientX;

		item_drag_management.x = (window.Event) ? e.pageX : event.clientX;		
		item_drag_management.y = (window.Event) ? e.pageY : event.clientY;

		item_drag_management.x -= offset_left;
		item_drag_management.y -= offset_top;	

		item_drag_management.currently_selected_item.style.position = "absolute";

		if(pixel_strip(item_drag_management.currently_selected_item.style.width)!="5"){

	   		item_drag_management.currently_selected_item.style.left = item_drag_management.x - document.getElementById("workarea").offsetLeft;
			item_drag_management.currently_selected_item.style.width = (item_drag_management.currently_selected_item.orig_x - (item_drag_management.x - document.getElementById("workarea").offsetLeft)) + item_drag_management.currently_selected_item.orig_width;
			document.body.style.cursor = "w-resize";

		}else if(temp_x<(document.getElementById("workingarea").offsetLeft + item_drag_management.currently_selected_item.offsetLeft)){

		   	item_drag_management.currently_selected_item.style.left = item_drag_management.x - document.getElementById("workarea").offsetLeft;
			item_drag_management.currently_selected_item.style.width = (item_drag_management.currently_selected_item.orig_x - (item_drag_management.x - document.getElementById("workarea").offsetLeft)) + item_drag_management.currently_selected_item.orig_width;
			document.body.style.cursor = "w-resize";

		}

		if(item_drag_management.currently_selected_item.src!=undefined){


			item_drag_management.currently_selected_item.img_width = pixel_strip(item_drag_management.currently_selected_item.style.width);

			item_drag_management.currently_selected_item.setAttribute("width", pixel_strip(item_drag_management.currently_selected_item.style.width));

		}


		resize_flag = true;
	
		return false;

	}

}

function eresize(e){

	if(!wizard_settings.displayed){

		offset_left = document.getElementById("workingarea").offsetLeft;

		item_drag_management.x = (window.Event) ? e.pageX : event.clientX;	

		item_drag_management.x -= offset_left;

		if(item_drag_management.currently_selected_item.offsetLeft<item_drag_management.x){
	
			item_drag_management.currently_selected_item.style.width = (item_drag_management.x - document.getElementById("workarea").offsetLeft) - (item_drag_management.currently_selected_item.orig_x + item_drag_management.currently_selected_item.orig_width) + item_drag_management.currently_selected_item.orig_width;
			document.body.style.cursor = "e-resize";

		}

		if(item_drag_management.currently_selected_item.src!=undefined){

			item_drag_management.currently_selected_item.img_width = pixel_strip(item_drag_management.currently_selected_item.style.width);

			item_drag_management.currently_selected_item.setAttribute("width", pixel_strip(item_drag_management.currently_selected_item.style.width));

		}


		resize_flag = true;
	
		return false;

	}

}

function sresize(e){

	if(!wizard_settings.displayed){

		offset_left = document.getElementById("workingarea").offsetLeft;
		offset_top = document.getElementById("workingarea").offsetTop;
	
		item_drag_management.x = (window.Event) ? e.pageX : event.clientX;		
		item_drag_management.y = (window.Event) ? e.pageY : event.clientY;

		item_drag_management.x -= offset_left;
		item_drag_management.y -= offset_top;	

		if(item_drag_management.currently_selected_item.offsetTop<item_drag_management.y){

			item_drag_management.currently_selected_item.style.position="absolute";
			item_drag_management.currently_selected_item.style.height = (item_drag_management.y - document.getElementById("workarea").offsetTop) - (item_drag_management.currently_selected_item.orig_y + item_drag_management.currently_selected_item.orig_height) + item_drag_management.currently_selected_item.orig_height;
			document.body.style.cursor = "s-resize";

		}

		if(item_drag_management.currently_selected_item.src!=undefined){

			item_drag_management.currently_selected_item.img_height = pixel_strip(item_drag_management.currently_selected_item.style.height);

			item_drag_management.currently_selected_item.setAttribute("height", pixel_strip(item_drag_management.currently_selected_item.style.height));

		}

		resize_flag = true; 
	
		return false;

	}


}

function nresize(e){

	if(!wizard_settings.displayed){

		offset_left = document.getElementById("workingarea").offsetLeft;
		offset_top = document.getElementById("workingarea").offsetTop;

		item_drag_management.x = (window.Event) ? e.pageX : event.clientX;		
		item_drag_management.y = (window.Event) ? e.pageY : event.clientY;
	
		item_drag_management.x -= offset_left;
		item_drag_management.y -= offset_top;	

		if(item_drag_management.y <(item_drag_management.currently_selected_item.orig_y + item_drag_management.currently_selected_item.orig_height)){

			item_drag_management.currently_selected_item.style.left = item_drag_management.currently_selected_item.offsetLeft;
			item_drag_management.currently_selected_item.style.position = "absolute";
   			item_drag_management.currently_selected_item.style.top = (item_drag_management.y - document.getElementById("workarea").offsetTop);
			item_drag_management.currently_selected_item.style.height = (item_drag_management.currently_selected_item.orig_y - (item_drag_management.y - document.getElementById("workarea").offsetTop)) + item_drag_management.currently_selected_item.orig_height;
			document.body.style.cursor = "n-resize";


		}

		if(item_drag_management.currently_selected_item.src!=undefined){

			item_drag_management.currently_selected_item.img_height = pixel_strip(item_drag_management.currently_selected_item.style.height);

			item_drag_management.currently_selected_item.setAttribute("height", pixel_strip(item_drag_management.currently_selected_item.style.height));

		}

		resize_flag = true; 

		return false;

	}

}

function swresize(e){

	if(!wizard_settings.displayed){

		offset_left = document.getElementById("workingarea").offsetLeft;
		offset_top = document.getElementById("workingarea").offsetTop;

		item_drag_management.x = (window.Event) ? e.pageX : event.clientX;		
		item_drag_management.y = (window.Event) ? e.pageY : event.clientY;

		item_drag_management.x -= offset_left;
		item_drag_management.y -= offset_top;	

		if(item_drag_management.currently_selected_item.offsetTop<item_drag_management.y){

			if(pixel_strip(item_drag_management.currently_selected_item.style.width)!="15"){

				item_drag_management.currently_selected_item.style.position="absolute";
		   		item_drag_management.currently_selected_item.style.left = item_drag_management.x - document.getElementById("workarea").offsetLeft;
				item_drag_management.currently_selected_item.style.width = (item_drag_management.currently_selected_item.orig_x - (item_drag_management.x - document.getElementById("workarea").offsetLeft)) + item_drag_management.currently_selected_item.orig_width;
				item_drag_management.currently_selected_item.style.height = (item_drag_management.y - document.getElementById("workarea").offsetTop) - (item_drag_management.currently_selected_item.orig_y + item_drag_management.currently_selected_item.orig_height) + item_drag_management.currently_selected_item.orig_height;
				document.body.style.cursor = "sw-resize";


			}else if(item_drag_management.x<(item_drag_management.currently_selected_item.orig_x + item_drag_management.currently_selected_item.orig_width - pixel_strip(item_drag_management.currently_selected_item.style.width))){

				item_drag_management.currently_selected_item.style.position="absolute";
		   		item_drag_management.currently_selected_item.style.left = item_drag_management.x - document.getElementById("workarea").offsetLeft;
				item_drag_management.currently_selected_item.style.width = (item_drag_management.currently_selected_item.orig_x - (item_drag_management.x - document.getElementById("workarea").offsetLeft)) + item_drag_management.currently_selected_item.orig_width;
				item_drag_management.currently_selected_item.style.height = (item_drag_management.y - document.getElementById("workarea").offsetTop) - (item_drag_management.currently_selected_item.orig_y + item_drag_management.currently_selected_item.orig_height) + item_drag_management.currently_selected_item.orig_height;
				document.body.style.cursor = "sw-resize";

			}
	
		}

		if(item_drag_management.currently_selected_item.src!=undefined){

			item_drag_management.currently_selected_item.setAttribute("height", pixel_strip(item_drag_management.currently_selected_item.style.height));
			item_drag_management.currently_selected_item.setAttribute("width", pixel_strip(item_drag_management.currently_selected_item.style.width));

			item_drag_management.currently_selected_item.img_height = pixel_strip(item_drag_management.currently_selected_item.style.height);

			item_drag_management.currently_selected_item.img_width = pixel_strip(item_drag_management.currently_selected_item.style.width);

		}


		resize_flag = true; 

		return false;

	}

}

function nwresize(e){

	if(!wizard_settings.displayed){

		offset_left = document.getElementById("workingarea").offsetLeft;
		offset_top = document.getElementById("workingarea").offsetTop;

		item_drag_management.x = (window.Event) ? e.pageX : event.clientX;		
		item_drag_management.y = (window.Event) ? e.pageY : event.clientY;

		item_drag_management.x -= offset_left;
		item_drag_management.y -= offset_top;	

		if(item_drag_management.y <(item_drag_management.currently_selected_item.orig_y + item_drag_management.currently_selected_item.orig_height)){

			item_drag_management.currently_selected_item.style.position="absolute";
   			item_drag_management.currently_selected_item.style.left = item_drag_management.x - document.getElementById("workarea").offsetLeft;
			item_drag_management.currently_selected_item.style.width = (item_drag_management.currently_selected_item.orig_x - (item_drag_management.x - document.getElementById("workarea").offsetLeft)) + item_drag_management.currently_selected_item.orig_width;
	   		item_drag_management.currently_selected_item.style.top = item_drag_management.y - document.getElementById("workarea").offsetTop;
			item_drag_management.currently_selected_item.style.height = (item_drag_management.currently_selected_item.orig_y - (item_drag_management.y - document.getElementById("workarea").offsetTop)) + item_drag_management.currently_selected_item.orig_height;
			document.body.style.cursor = "nw-resize";

		}

		if(item_drag_management.currently_selected_item.src!=undefined){

			item_drag_management.currently_selected_item.setAttribute("height", pixel_strip(item_drag_management.currently_selected_item.style.height));
			item_drag_management.currently_selected_item.setAttribute("width", pixel_strip(item_drag_management.currently_selected_item.style.width));

			item_drag_management.currently_selected_item.img_height = pixel_strip(item_drag_management.currently_selected_item.style.height);

			item_drag_management.currently_selected_item.img_width = pixel_strip(item_drag_management.currently_selected_item.style.width);

		}

		resize_flag = true; 

		return false;

	}

}

function neresize(e){

	if(!wizard_settings.displayed){

		offset_left = document.getElementById("workingarea").offsetLeft;
		offset_top = document.getElementById("workingarea").offsetTop;

		item_drag_management.x = (window.Event) ? e.pageX : event.clientX;		
		item_drag_management.y = (window.Event) ? e.pageY : event.clientY;

		item_drag_management.x -= offset_left;
		item_drag_management.y -= offset_top;
	
		if(item_drag_management.x > (item_drag_management.currently_selected_item.orig_x)){

			item_drag_management.currently_selected_item.style.left = item_drag_management.currently_selected_item.offsetLeft;
			item_drag_management.currently_selected_item.style.position="absolute";
   			item_drag_management.currently_selected_item.style.top = item_drag_management.y - document.getElementById("workarea").offsetTop;
			item_drag_management.currently_selected_item.style.height = (item_drag_management.currently_selected_item.orig_y - (item_drag_management.y - document.getElementById("workarea").offsetTop)) + item_drag_management.currently_selected_item.orig_height;
			item_drag_management.currently_selected_item.style.width = (item_drag_management.x - document.getElementById("workarea").offsetLeft) - (item_drag_management.currently_selected_item.orig_x + item_drag_management.currently_selected_item.orig_width) + item_drag_management.currently_selected_item.orig_width;
			document.body.style.cursor = "ne-resize";

		}

		if(item_drag_management.currently_selected_item.src!=undefined){

			item_drag_management.currently_selected_item.setAttribute("height", pixel_strip(item_drag_management.currently_selected_item.style.height));
			item_drag_management.currently_selected_item.setAttribute("width", pixel_strip(item_drag_management.currently_selected_item.style.width));

			item_drag_management.currently_selected_item.img_height = pixel_strip(item_drag_management.currently_selected_item.style.height);

			item_drag_management.currently_selected_item.img_width = pixel_strip(item_drag_management.currently_selected_item.style.width);
	
		}

		resize_flag = true; 

		return false;

	}

}

function seresize(e){

	if(!wizard_settings.displayed){

		offset_left = document.getElementById("workingarea").offsetLeft;
		offset_top = document.getElementById("workingarea").offsetTop;

		item_drag_management.x = (window.Event) ? e.pageX : event.clientX;		
		item_drag_management.y = (window.Event) ? e.pageY : event.clientY;

		item_drag_management.x -= offset_left;
		item_drag_management.y -= offset_top;

		if(item_drag_management.x > (item_drag_management.currently_selected_item.orig_x)){
	
			item_drag_management.currently_selected_item.style.left = item_drag_management.currently_selected_item.offsetLeft;
			item_drag_management.currently_selected_item.style.position = "absolute";
			item_drag_management.currently_selected_item.style.width = (item_drag_management.x - document.getElementById("workarea").offsetLeft) - (item_drag_management.currently_selected_item.orig_x + item_drag_management.currently_selected_item.orig_width) + item_drag_management.currently_selected_item.orig_width;
			item_drag_management.currently_selected_item.style.height = (item_drag_management.y - document.getElementById("workarea").offsetTop) - (item_drag_management.currently_selected_item.orig_y + item_drag_management.currently_selected_item.orig_height) + item_drag_management.currently_selected_item.orig_height;
		document.body.style.cursor = "se-resize";

		}

		if(item_drag_management.currently_selected_item.src!=undefined){

			item_drag_management.currently_selected_item.setAttribute("height", pixel_strip(item_drag_management.currently_selected_item.style.height));
			item_drag_management.currently_selected_item.setAttribute("width", pixel_strip(item_drag_management.currently_selected_item.style.width));

			item_drag_management.currently_selected_item.img_height = pixel_strip(item_drag_management.currently_selected_item.style.height);

			item_drag_management.currently_selected_item.img_width = pixel_strip(item_drag_management.currently_selected_item.style.width);
	
		}

		resize_flag = true; 
	
		return false;

	}

}

function mouseover(e){
	
	if(item_drag_management.currently_selected_item!=null){
		get_x_y(item_drag_management.currently_selected_item);
	}

	if(!item_drag_management.draggable&&item_drag_management.currently_selected_item!=null&&!wizard_settings.displayed){

		curleft = false;
		curright = false;
		curtop = false;
		curbottom = false;

		mousex = (window.Event) ? e.pageX : event.clientX;
		mousey = (window.Event) ? e.pageY : event.clientY;

		if((item_drag_management.actual_left<mousex)&&(mousex<Number(item_drag_management.actual_left+item_drag_management.currently_selected_item.offsetWidth))){

			if(mousex<(item_drag_management.actual_left+5)){
			
				curleft = true;

			}else if(mousex>(item_drag_management.actual_left+item_drag_management.currently_selected_item.offsetWidth-5)){

				curright = true;			

			}

		}

		if((item_drag_management.actual_top<mousey)&&(mousey<Number(item_drag_management.actual_top+item_drag_management.currently_selected_item.offsetHeight))){

			if(mousey<(item_drag_management.actual_top+5)){
			
				curtop = true;

			}else if(mousey>(item_drag_management.actual_top+item_drag_management.currently_selected_item.offsetHeight-5)){

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