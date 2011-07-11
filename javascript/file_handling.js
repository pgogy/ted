var file_system = new Object;

file_system.changes_list = new Array();
file_system.changes_position = 0;
file_system.file_content = "";
file_system.dirty_flag = false;
file_system.file_name = "";
file_system.opening_file_name = "";
file_system.template_opening = false;

function undo(){

	if(file_system.changes_position!=0){

		document.getElementById("pages").innerHTML = file_system.changes_list[(file_system.changes_position-1)];

		temp_div = document.createElement('div')

		temp_div.innerHTML = file_system.changes_list[(file_system.changes_position-1)];

		page_drag_management.current_page.HTML = temp_div.childNodes[Number(page_drag_management.current_page.id.substr(4))-1].HTML;	

		document.getElementById("workarea").innerHTML = page_drag_management.current_page.HTML;
	
		file_system.changes_position-=1;

	}

}

function redo(){

	if(file_system.changes_position!=file_system.changes_list.length-1){

		document.getElementById("pages").innerHTML = file_system.changes_list[(file_system.changes_position+1)];

		temp_div = document.createElement('div')

		temp_div.innerHTML = file_system.changes_list[(file_system.changes_position+1)];

		page_drag_management.current_page.HTML = temp_div.childNodes[Number(page_drag_management.current_page.id.substr(4))-1].HTML;	

		document.getElementById("workarea").innerHTML = page_drag_management.current_page.HTML;
	
		file_system.changes_position+=1;

	}

}

function file_update(){


	if(file_system.changes_position!=(file_system.changes_list.length-1)){

		file_system.changes_list.splice(file_system.changes_position,(file_system.changes_list.length - file_system.changes_position)+1);

	}

	file_system.changes_list.push(document.getElementById("pages").innerHTML);

	file_system.changes_position+=1;

	file_system.file_content = document.getElementById("pages").innerHTML;

}