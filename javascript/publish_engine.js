function publish_initiate(){

	string = compile_structure.page_index.join(",");

	if(setup_ajax()!=false){

		xmlHttp.open("post","php/ming/engine.php",true);
		xmlHttp.onreadystatechange=initiate_monitor;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttp.send('file_name=' + file_system.file_name + '&pages_index=' + compile_structure.page_index.join(",") + '&instruction_set=' + compile_structure.instruction_set.join("*,*") + '&background_colour=' + document.getElementById("workspace").style.backgroundColor + '&width=' + document.getElementById("workspace").offsetWidth + '&height=' + document.getElementById("workspace").offsetHeight); 

	}	

}


function initiate_monitor(){

	if(xmlHttp.readyState==4){ 

		if(xmlHttp.responseText!=""){	
		
			if(compile_structure.publish == false){

				show_wizard_publish(false,null);
				compile_structure.publish = true;

			}else{

				compile_structure.publish = false;
				show_wizard_publish(true,"swf");

			}

		}


	}

}

function zip_done(){

	if(xmlHttp.readyState==4){ 

		compile_structure.download = true;
		compile_structure.publish = false;
		show_wizard_publish(true,"zip");
		compile_structure.export_list = new Array();

	}

}

function create_zip(){

	string = compile_structure.export_list.join(",");

	if(setup_ajax()!=false){

		xmlHttp.open("post","php/filehandling/zipup.php",true);
		xmlHttp.onreadystatechange=zip_done;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttp.send('file_name=' + file_system.file_name + '&file_list=' + string); 

	}	


}