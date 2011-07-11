var menusystemsettings = new Object;
menusystemsettings.selected_menu_option = null;
menusystemsettings.menupopup = false;

function menukeypress(event){

	page_drag_management.last_key_pressed = window.event.keyCode;

	switch(window.event.keyCode){

		case 13:if(menusystemsettings.menupopup){

				if(!wizard_settings.displayed){

					eval_handler(String(menusystemsettings.selected_menu_option.onclick));				

				}
			
			}
			break;
		case 16:item_drag_management.shiftdown=true;
			break;
		case 17:page_drag_management.control_down = true;
			break;
		case 18:popup(document.getElementById("menubar").childNodes[0]);
			selected_menu_item(document.getElementById("menubar").childNodes[0]);
			break;
		case 27:item_drag_management.isdrag=false;		
			item_drag_management.currently_selected_item.style.border="1px dashed #ddd";
			item_drag_management.currently_selected_item = null;
			break;
		case 37:if(menusystemsettings.menupopup){
				active = menuscroll(true);
				if(active!=0){
					document.getElementById("menusystem").childNodes[active-1].style.display="block";
					selected_menu_item(document.getElementById("menubar").childNodes[active-1]);
					unselected_menu_item(document.getElementById("menubar").childNodes[active]);
				}else{
					document.getElementById("menusystem").childNodes[0].style.display="block";
				}
			}else if(item_drag_management.currently_selected_item!=null){

				if(!edit_mode){

					if(!wizard_settings.displayed){

						item_drag_management.currently_selected_item.style.left = item_drag_management.shiftdown ? Number(String(item_drag_management.currently_selected_item.style.left).substr(0,String(item_drag_management.currently_selected_item.style.left).length-2)) - 10 + "px" : 	Number(String(item_drag_management.currently_selected_item.style.left).substr(0,String(item_drag_management.currently_selected_item.style.left).length-2)) - 1 + "px" ;			
					}					

				}

			}
			break;
		case 38:if(menusystemsettings.menupopup){
				active = menuscroll(false);
				string = document.getElementById("menusystem").childNodes[active].id;
				flag=false;
				number = 0;
				for(x=0;x!=document.getElementById(string).childNodes.length;x++){
					if(document.getElementById(string).childNodes[x].style.backgroundColor=="#fff"){
						flag=true;
						number=x;
					}
				}
				if(flag){
					if(number!=0){
						selected_menu_item(document.getElementById(string).childNodes[number-1]);
						unselected_menu_item(document.getElementById(string).childNodes[number]);
					}
				}else{
					selected_menu_item(document.getElementById(string).childNodes[0]);
				}
			}else if(item_drag_management.currently_selected_item!=null){

				if(!edit_mode){

					if(!wizard_settings.displayed){

						item_drag_management.currently_selected_item.style.top = item_drag_management.shiftdown ? Number(String(item_drag_management.currently_selected_item.style.top).substr(0,String(item_drag_management.currently_selected_item.style.top).length-2)) - 10 + "px" : 
						 Number(String(item_drag_management.currently_selected_item.style.top).substr(0,String(item_drag_management.currently_selected_item.style.top).length-2)) - 1 + "px" ;

					}

				}

			}
			break;
		case 39:if(menusystemsettings.menupopup){
				active = menuscroll(true);
				if(active!=document.getElementById("menusystem").childNodes.length-1){
					document.getElementById("menusystem").childNodes[active+1].style.display="block";
					selected_menu_item(document.getElementById("menubar").childNodes[active+1]);
					unselected_menu_item(document.getElementById("menubar").childNodes[active]);
				}else{
					document.getElementById("menusystem").childNodes[document.getElementById("menusystem").childNodes.length-1].style.display="block";
				}
			}else if(item_drag_management.currently_selected_item!=null){

				if(!edit_mode){

					if(!wizard_settings.displayed){

						item_drag_management.currently_selected_item.style.left = item_drag_management.shiftdown ? Number(String(item_drag_management.currently_selected_item.style.left).substr(0,String(item_drag_management.currently_selected_item.style.left).length-2)) + 10 + "px" :
					          Number(String(item_drag_management.currently_selected_item.style.left).substr(0,String(item_drag_management.currently_selected_item.style.left).length-2)) + 1 + "px";

					}

				}

			}
			break;
		case 40:if(menusystemsettings.menupopup){
				active = menuscroll(false);
				string = document.getElementById("menusystem").childNodes[active].id;							
				flag=false;
				number = 0;
				for(x=0;x!=document.getElementById(string).childNodes.length;x++){
					if(document.getElementById(string).childNodes[x].style.backgroundColor=="#fff"){
						flag=true;
						number=x;
					}
				}
				if(flag){
					if(number!=document.getElementById(string).childNodes.length-1){
						selected_menu_item(document.getElementById(string).childNodes[number+1]);
						unselected_menu_item(document.getElementById(string).childNodes[number]);
					}								
				}else{
					selected_menu_item(document.getElementById(string).childNodes[0]);
				}
			}else if(item_drag_management.currently_selected_item!=null){

				if(!edit_mode){

					if(!wizard_settings.displayed){

						item_drag_management.currently_selected_item.style.top = item_drag_management.shiftdown ? Number(String(item_drag_management.currently_selected_item.style.top).substr(0,String(item_drag_management.currently_selected_item.style.top).length-2)) + 10 + "px" : 
							 Number(String(item_drag_management.currently_selected_item.style.top).substr(0,String(item_drag_management.currently_selected_item.style.top).length-2)) + 1 + "px" ;

					}

				}

			}
			break;
		case 89:if(page_drag_management.control_down){
				redo();
			}
			break;
		case 90:if(page_drag_management.control_down){
				undo();
			}
			break;

	}
}

function menuscroll(flag){

	active=0;

	for(x=0;x<document.getElementById("menusystem").childNodes.length;x++){
					
		if(document.getElementById("menusystem").childNodes[x].style.display!="none"){

			active=x;

		}

		if(flag){

			document.getElementById("menusystem").childNodes[x].style.display="none";

			}

	}

	return active;

}

function eval_handler(string){

	string = string.toString();

	string = string.substr(string.indexOf("{"),string.length);

	string = string.substr(1,string.lastIndexOf("}")-1);

	eval(string);

}

function popup(id){

	menusystemsettings.menupopup = true;

	for(x=0;x<document.getElementById("menusystem").childNodes.length;x++){
					
		document.getElementById("menusystem").childNodes[x].style.display="none";

	}
				
	document.getElementById(id.innerHTML).style.display="block";
				
	document.onmousedown = click;

}

function hide(id){
				
	id.style.display="none";

	document.onclick = null;

	menusystemsettings.menupopup = false;

}

function click(event){

	if(window.event.srcElement.getAttribute("action")){

		eval_handler(window.event.srcElement.onclick);

	}

	for(x=0;x<document.getElementById("menusystem").childNodes.length;x++){
					
		document.getElementById("menusystem").childNodes[x].style.display="none";

	}

	document.onmousedown = selectmouse;

	clickmenuhide();

}			

function selected_menu_item(id){

	if(id.getAttribute("action")){

		menusystemsettings.selected_menu_option = id;
		id.style.fontWeight = "bold";

		id.style.borderTop = "1px solid #fff";
		id.style.borderLeft = "1px solid #fff";
		id.style.borderRight = "1px solid #aaa";
		id.style.borderBottom = "1px solid #aaa";

	}

}

function unselected_menu_item(id){


	if(id.getAttribute("action")){

		menusystemsettings.selected_menu_option = id;
		id.style.fontWeight = "normal";

		id.style.borderBottom = "1px dotted #aaa";
		id.style.borderTop = "none";
		id.style.borderLeft = "none";
		id.style.borderRight = "none";

	}


}

function test(){

	alert("test function()");

}