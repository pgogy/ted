var page_drag_management = new Object;

page_drag_management.selected_page_list = new Array();
page_drag_management.mouseOffset = null;
page_drag_management.duplicatenode = false;
page_drag_management.deletepoint = null;
page_drag_management.selected_pages=0;
page_drag_management.last_key_pressed = null;
page_drag_management.mousedowninterval = 0;
page_drag_management.dragstart = false;
page_drag_management.last_selected = null;
page_drag_management.current_page = null;
page_drag_management.control_down = false;

function clickordrag(string){

	page_drag_management.dragstart = true;
	clearInterval(page_drag_management.mousedowninterval);

}

function setdrag(){

	if(window.event.button!=2){

		page_drag_management.mousedowninterval = setInterval('clickordrag()',400);

	}
	
}

function keyup(){

	page_drag_management.last_key_pressed = null;

}

function getMouseOffset(target, ev){  
 
     ev = ev || window.event;   
  
     var docPos    = getPosition(target);   
     var mousePos  = mouseCoords(ev);   

     return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y}; 
  
}   
   
function getPosition(e){  
 
     var left = 0;   
     var top  = 0;   
   
     while(e.nodeName != "HTML"){

	left += e.offsetLeft;				

	top += e.offsetTop;					

	if(e.parentNode!=null){

		e = e.parentNode;
	
	}else{
			
		break;				

	}

     }
  
   
     left += e.offsetLeft;   
     top  += e.offsetTop;   
  

     return {x:left, y:top};   
}  

var drag_marker = null;

function move_single_page(ev){

	ev = ev || window.event;   

   	var mousePos = mouseCoords(ev); 		

	if(!page_drag_management.duplicatenode){

		insertnode = document.getElementById("page" + (parseInt(mousePos.y / page_drag_management.current_page.offsetHeight)));

		temp = page_drag_management.current_page.cloneNode(true);

		temp.id= page_drag_management.current_page.id + "_clone";

		temp.style.left = "0px";

		page_drag_management.current_page.parentNode.insertBefore(temp,insertnode);

		page_drag_management.duplicatenode = true;				

	}	

	number = parseInt((mousePos.y + document.getElementById("pages").scrollTop) / page_drag_management.current_page.offsetHeight);
		
	page_drag_management.current_page.style.position = 'absolute';
	page_drag_management.current_page.style.zIndex = "2";   
        page_drag_management.current_page.style.top      = (mousePos.y - document.getElementById("pagepanel").offsetTop) - page_drag_management.mouseOffset.y + document.getElementById("pages").scrollTop;   
        page_drag_management.current_page.style.left = "0px";

	page_drag_management.current_page.parentNode.insertBefore(temp,document.getElementById("page" + number));     
  	    
}


function onmousemove(ev){
  
   
	if(page_drag_management.dragstart){

		move_single_page(ev);			

	}


}


function onmouseup(event){

	if(window.event.button!=2){

		clearInterval(page_drag_management.mousedowninterval);	

		if(page_drag_management.dragstart){
				
			single_page_dropped(event);				

			page_drag_management.dragstart=false;			

		}

	}

}

function multiple_page_dropped(ev){

	page_drag_management.duplicatenode=false;

	temp_num = page_drag_management.selected_pages;

	temp_parent_node = page_drag_management.selected_page_list[0].parentNode;

	page_drag_management.selected_pages=0;
	
	for(z=0;z<temp_num;z++){
	
		temp_id = page_drag_management.selected_page_list[z].id;

		page_drag_management.selected_page_list[z].id = String("delete_" + z);

		new_id = temp_id + "_clone";

		document.getElementById(new_id).style.backgroundColor = "0f0";	

	}	

	new_point = 0;

	for(x=0;x<temp_parent_node.childNodes.length;x++){

		if(temp_parent_node.childNodes[x].id!=String("delete_" + z)){

			temp_parent_node.childNodes[x].id = "page" + parseInt(new_point+1);
			temp_parent_node.childNodes[x].firstChild.innerHTML = Number(new_point+1);
			new_point++;

			if(document.getElementById(["delete_" + x])!=null){

				temp_parent_node.removeChild(document.getElementById(["delete_" + x]));

			}

		}else{
	

		}


	}

	
	
	
}

function single_page_dropped(ev){
	
	ev = ev || window.event;   
   	var mousePos = mouseCoords(ev); 
	
	page_drag_management.duplicatenode = false;
	
	number = parseInt((mousePos.y + document.getElementById("pages").scrollTop) / page_drag_management.current_page.offsetHeight);

	numberofpages = page_drag_management.current_page.parentNode.childNodes.length;

	new_point = 0;

	/*for(x=0;x<numberofpages;x++){

		if(page_drag_management.current_page!=page_drag_management.current_page.parentNode.childNodes[x]){

			alert(x);

			page_drag_management.current_page.parentNode.childNodes[x].id = "page" + parseInt(new_point+1);

			page_drag_management.current_page.parentNode.childNodes[x].firstChild.innerHTML = Number(new_point+1);
			new_point++;

		}else{


			alert(x + "here");

			clickmenu.dragitemparameter.id = "pagecover" + x;

		}		

	}*/

	for(x=0;x<numberofpages;x++){
	
		page_drag_management.current_page.parentNode.childNodes[x].id = "page" + parseInt(x+1);

		page_drag_management.current_page.parentNode.childNodes[x].childNodes[0].innerHTML = Number(x+1);
		page_drag_management.current_page.parentNode.childNodes[x].childNodes[1].id = "pageback" + parseInt(x+1);
		page_drag_management.current_page.parentNode.childNodes[x].childNodes[2].id = "pagecover" + parseInt(x+1);		

	}

	page_drag_management.current_page.parentNode.removeChild(page_drag_management.current_page);

	file_system.dirty_flag=true;

}

function mouseCoords(ev){

	if(ev.pageX || ev.pageY){
		return {x:ev.pageX, y:ev.pageY};
	}
	return {
		x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y:ev.clientY + document.body.scrollTop  - document.body.clientTop
	};

}

function dragme(event,id){

	if(window.event.button==2){

		page_drag_management.current_page = id;
		id.style.border= "1px solid #aaf";

		clickmenudisplay("documentpage",event);
		document.onmousedown = clickmenuhide;

	}else{

		item_drag_management.currently_selected_item = null;	

		setdrag();

		var mousePos  = mouseCoords(event);

		page_drag_management.current_page = id;

		if(page_drag_management.current_page.HTML!=null){

			document.getElementById("workarea").innerHTML = page_drag_management.current_page.HTML;

		}
	
		page_drag_management.mouseOffset = getMouseOffset(id,event);

		for(x=0;x!=document.getElementById("pages").childNodes.length;x++){

			document.getElementById("pages").childNodes[x].style.border = "";

			id.style.border= "1px solid #aaf";

		}

		document.onmousemove = onmousemove;
		document.onmouseup = onmouseup;


	}


}