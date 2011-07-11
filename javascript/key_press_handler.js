alert("KEY PRESS HANDLER");

function menukeypress(event){
	
	alert(window.event.keyCode);

	page_drag_management.last_key_pressed = window.event.keyCode;

	switch(window.event.keyCode){

		case 13:if(menusystemsettings.menupopup){

				eval_handler(String(menusystemsettings.selected_menu_option.onclick));				
			
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

					item_drag_management.currently_selected_item.style.left = item_drag_management.shiftdown ? Number(String(item_drag_management.currently_selected_item.style.left).substr(0,String(item_drag_management.currently_selected_item.style.left).length-2)) - 10 + "px" : 	Number(String(item_drag_management.currently_selected_item.style.left).substr(0,String(item_drag_management.currently_selected_item.style.left).length-2)) - 1 + "px" ;			
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

					item_drag_management.currently_selected_item.style.top = item_drag_management.shiftdown ? Number(String(item_drag_management.currently_selected_item.style.top).substr(0,String(item_drag_management.currently_selected_item.style.top).length-2)) - 10 + "px" : 
					 Number(String(item_drag_management.currently_selected_item.style.top).substr(0,String(item_drag_management.currently_selected_item.style.top).length-2)) - 1 + "px" ;

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

					item_drag_management.currently_selected_item.style.left = item_drag_management.shiftdown ? Number(String(item_drag_management.currently_selected_item.style.left).substr(0,String(item_drag_management.currently_selected_item.style.left).length-2)) + 10 + "px" :
				          Number(String(item_drag_management.currently_selected_item.style.left).substr(0,String(item_drag_management.currently_selected_item.style.left).length-2)) + 1 + "px";

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

					item_drag_management.currently_selected_item.style.top = item_drag_management.shiftdown ? Number(String(item_drag_management.currently_selected_item.style.top).substr(0,String(item_drag_management.currently_selected_item.style.top).length-2)) + 10 + "px" : 
						 Number(String(item_drag_management.currently_selected_item.style.top).substr(0,String(item_drag_management.currently_selected_item.style.top).length-2)) + 1 + "px" ;

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