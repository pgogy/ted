var compile_structure = new Object;
compile_structure.instruction_set = new Array();
compile_structure.page_index = new Array();
compile_structure.export_list = new Array();
compile_structure.pages_to_add=0;
compile_structure.publish=true;
compile_structure.download = false;

function setup_ajax(){

	try{
	
		xmlHttp=new XMLHttpRequest();
		
	}catch (e){    // Internet Explorer    

		try{
	     	  	
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      
			}catch (e){      
			
		try{        
					
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
					
	   	}catch (e){
				
			alert("Your browser does not support AJAX!");
			return false;
		}  
    
	   }
    
	}

}

function file_ajax_prepare(url){

   	xmlHttp.open("post",url,true);
	xmlHttp.onreadystatechange=phpfiles_stateChanged;
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
}

function phpfiles_stateChanged(){ 

	if(xmlHttp.readyState==4){ 

		if(xmlHttp.responseText!=""){

			document.title = "TED - " + file_system.file_name;

		}
	}
}

var next_frame = "";

function publish_engine(page_object,top,left){

	x_coord = pixel_strip(page_object.style.left) - left;
	y_coord = pixel_strip(page_object.style.top) - top;	

	switch(page_object.getAttribute("rmouse")){

		case "sms"	     :  text = page_object.childNodes[0].innerHTML;
					fontsize = page_object.style.fontSize;
					font = page_object.style.fontFamily;
					fontcolour = page_object.style.color;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					sms_num = page_object.getAttribute('sms_number');
					sms_mes = page_object.getAttribute('sms_message');
					compile_structure.instruction_set.push("SMS" + "***" + x_coord + "***" + y_coord + "***" + text + "***" + fontsize + "***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height + "***" + font + "***" + sms_num + "***" + sms_mes);
					break;

		case "url"	     :  text = page_object.childNodes[0].innerHTML;
					fontsize = page_object.style.fontSize;
					font = page_object.style.fontFamily;
					fontcolour = page_object.style.color;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					url = page_object.getAttribute('url');
					compile_structure.instruction_set.push("URL" + "***" + x_coord + "***" + y_coord + "***" + text + "***" + fontsize + "***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height + "***" + font + "***" + url);
					break;

		case "wordfillprompt":	text = page_object.childNodes[0].innerHTML;
					font = page_object.style.fontFamily;
					fontsize = page_object.style.fontSize;
					fontcolour = page_object.style.color;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					w_answer = page_object.getAttribute('answer');
					w_incorrect = page_object.getAttribute('incorrect');
					w_correct = page_object.getAttribute('correct');

					compile_structure.instruction_set.push("WFP***" + w_answer + "***" + w_incorrect + "***" + w_correct + "***" + x_coord + "***" + y_coord + "***" + text + "***" + font + "***" + fontsize + "***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height);
					break;

		case "wordfillarea":	fontsize = page_object.style.fontSize;
					fontcolour = page_object.style.color;
					font = page_object.style.fontFamily;					
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					compile_structure.instruction_set.push("WFA" + "***" + x_coord + "***" + y_coord + "***" + fontsize +"***" + fontcolour + "***" + font + "***" + backgroundcolour + "***" + width + "***" + height);
					break;

		case "wordfillresponse":fontsize = page_object.style.fontSize;
					fontcolour = page_object.style.color;
					backgroundcolour = page_object.style.backgroundColor;
					font = page_object.style.fontFamily;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					compile_structure.instruction_set.push("WFR" + "***" + x_coord + "***" + y_coord + "***" + fontsize + "***" + font + "***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height);

					compile_structure.pages_to_add=2;

					break;	

		case "targethotspot":	width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					compile_structure.instruction_set.push("THS" + "***" + x_coord + "***" + y_coord + "***" + width + "***" + height);
					break;

		case "label":		fontsize = page_object.style.fontSize;
					fontcolour = page_object.style.color;
					font = page_object.style.fontFamily;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					text = page_object.childNodes[0].innerHTML;
					compile_structure.instruction_set.push("LABEL" + "***" + x_coord + "***" + y_coord + "***" + text + "***" + font + "***" + fontsize +"***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height);

					compile_structure.pages_to_add=2;
					break;

		case "feedback":	fontsize = page_object.style.fontSize;
					fontcolour = page_object.style.color;
					font = page_object.style.fontFamily;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					target_hit = page_object.getAttribute("target_hit");
					target_miss = page_object.getAttribute("target_miss");

					compile_structure.instruction_set.push("FB" + "***" + x_coord + "***" + y_coord + "***" + "***" + font + "***" + fontsize +"***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height + "***" + target_hit + "***" + target_miss);

					compile_structure.pages_to_add=2;
					break;


		case "stimulating":	fontsize = page_object.style.fontSize;
					text = page_object.childNodes[0].innerHTML;
					fontcolour = page_object.style.color;
					font = page_object.style.fontFamily;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					target_hit = page_object.getAttribute("target_hit");
					target_miss = page_object.getAttribute("target_miss");

					compile_structure.instruction_set.push("STIMULATING" + "***" + x_coord + "***" + y_coord + "***" + text + "***" + font + "***" + fontsize +"***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height + "***" + target_hit + "***" + target_miss);

					compile_structure.pages_to_add=2;
					break;

		case "missingwords":	text = page_object.childNodes[0].innerHTML;

					var removeLines = /<BR>/g;

					temp = text.toString();

					temp = temp.replace(/<SPAN onmousedown=missing_word_select\(this\)>/g,"");		

					temp = temp.replace(/<\/SPAN>/g,"");

					temp = temp.replace(/<SPAN onmousedown=missing_word_select\(this\) style="BACKGROUND-COLOR: #ffffcc">/g,"*");

					temp = temp.toString().replace(removeLines,"\r");

					fontsize = page_object.style.fontSize;
					fontcolour = page_object.style.color;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
				 	height = pixel_strip(page_object.style.height);
					text = text.toString();		
					text = text.replace(/<SPAN onmousedown=missing_word_select\(this\) style="BACKGROUND-COLOR: #ffffcc">/g,"*");

					font = page_object.style.fontFamily;

					compile_structure.instruction_set.push("MISSINGWORDS" + "***" + x_coord + "***" + y_coord + "***" + temp + "***" + fontsize + "***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height + "***" + font);


					compile_structure.pages_to_add= text.split("*").length + 1;

					break;

		case "rectangle":	backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
				 	height = pixel_strip(page_object.style.height);
					compile_structure.instruction_set.push("RECTANGLE" + "***" + x_coord + "***" + y_coord + "***" + backgroundcolour + "***" + width + "***" + height);
					break;	

		case "textarea":	text = page_object.childNodes[0].innerHTML;
					fontsize = page_object.style.fontSize;
					font = page_object.style.fontFamily;
					fontcolour = page_object.style.color;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);

					if(page_object.id=="scorearea"){

						compile_structure.instruction_set.push("SCOREPAGE" + "***" + x_coord + "***" + y_coord + "***" + text + "***" + fontsize + "***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height + "***" + font);

					}else{

						compile_structure.instruction_set.push("TEXT" + "***" + x_coord + "***" + y_coord + "***" + text + "***" + fontsize + "***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height + "***" + font);

					}
					break;

		case "missingwordsbutton":	

		case "flashbutton":	text = page_object.childNodes[0].innerHTML;
					font = page_object.style.fontFamily;
					fontsize = page_object.style.fontSize;
					fontcolour = page_object.style.color;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					action = page_object.getAttribute("action");

					if(action==null){

						action = page_object.getAttribute("gotopage");

					}

					code = page_object.getAttribute("code");
					compile_structure.instruction_set.push("FLASHBUTTON" + "***" + action + "***" + code + "***" + x_coord + "***" + y_coord + "***" + text + "***" + font + "***" + fontsize + "***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height);
					break;


		case "button":  	text = page_object.childNodes[0].innerHTML;
					font = page_object.style.fontFamily;
					fontsize = page_object.style.fontSize;
					fontcolour = page_object.style.color;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					action = page_object.getAttribute("action");

					if(action==null){

						action = page_object.getAttribute("gotopage");

					}

					code = page_object.getAttribute("code");
					compile_structure.instruction_set.push("BUTTON" + "***" + action + "***" + code + "***" + x_coord + "***" + y_coord + "***" + text + "***" + font + "***" + fontsize + "***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height);
					break;

		case "scorebutton":  	text = page_object.childNodes[0].childNodes[0].innerHTML;
					font = page_object.style.fontFamily;
					fontsize = page_object.style.fontSize;
					fontcolour = page_object.style.color;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					score_value = page_object.getAttribute("score_value");
					compile_structure.instruction_set.push("SCOREBUTTON" + "***" + score_value + "***" + x_coord + "***" + y_coord + "***" + text + "***" + font + "***" + fontsize + "***" + fontcolour + "***" + backgroundcolour + "***" + width + "***" + height);
					break;
	
		case "picture": 	image_location = page_object.src;
					temp_img = new Image();
					temp_img.src = page_object.src;
					if(page_object.img_width!=undefined){

						img_width = page_object.img_width;
						img_height = page_object.img_height;

					}else{
			
						img_width = temp_img.width;
						img_height = temp_img.height;
					
					}
	
					if(page_object.id=="picturescroll"){

						compile_structure.instruction_set.push("SCROLLPICTURE" + "***" + image_location + "***" + x_coord + "***" + y_coord + "***" + img_width + "***" + img_height);

					}else if(page_object.id=="hotspotimage"){

						compile_structure.instruction_set.push("HOTSPOTPICTURE" + "***" + image_location + "***" + x_coord + "***" + y_coord + "***" + img_width + "***" + img_height);

					}else{

						compile_structure.instruction_set.push("PICTURE" + "***" + image_location + "***" + x_coord + "***" + y_coord + "***" + img_width + "***" + img_height);	

					}

					break;

		case "flashcard":  	text = page_object.childNodes[0].innerHTML;
					fontsize = page_object.style.fontSize;
					fontfamily = page_object.style.fontFamily;
					fontcolour = page_object.style.color;
					backgroundcolour = page_object.style.backgroundColor;
					width = pixel_strip(page_object.style.width);
					height = pixel_strip(page_object.style.height);
					fprompt = page_object.getAttribute("flashcardprompt");
					fanswer = page_object.getAttribute("flashcardanswer");
					compile_structure.instruction_set.push("FLASHCARD" + "***" + fprompt + "***" + fanswer + "***" + x_coord + "***" + y_coord + "***" + text + "***" + fontsize + "***" + fontcolour + "***" + fontfamily + "***" + backgroundcolour + "***" + width + "***" + height);
					compile_structure.pages_to_add=2;
					next_frame = "flashcard";
					break;

		case null:		break;	

		default:		//alert(page_object.getAttribute("rmouse"));
					break;	

	}		

}

function export_file(){

	for(z=0;z<document.getElementById("Pages").childNodes.length;z++){

		var page_contents_export = new Array();

		new_node = document.createElement('div');

		new_node.innerHTML = document.getElementById("Pages").childNodes[z].HTML;

		page_contents_export = new Array();

		for(x=0;x<new_node.childNodes.length;x++){

			if(new_node.childNodes[x]!=null){

				if(new_node.childNodes[x].getAttribute("rmouse")=="picture"){

					compile_structure.export_list.push(new_node.childNodes[x].src.replace('http://localhost/ted/','c:\\xampp\\htdocs\\ted\\').replace('/','\\'));
	
				}

			}

		}		

	}

	compile_structure.export_list.push(file_system.file_name);

	create_zip();

}

function download(){

	compile_structure.download = true;
	publish();	

}

function preview(){

	compile_structure.publish = false;
	publish();

}

function publish(type){

	compile_structure.page_index = new Array();

	compile_structure.instruction_set = new Array();

	workarea_left = document.getElementById("workspace").offsetLeft;

	workarea_top = document.getElementById("workspace").offsetTop;

	for(z=0;z<document.getElementById("Pages").childNodes.length;z++){

		if(document.getElementById("Pages").childNodes[z].getAttribute("page_enter")==null){

			compile_structure.instruction_set.push("NO_PAGE_ACTION");

		}else{

			compile_structure.instruction_set.push("PAGE_ACTION " + document.getElementById("Pages").childNodes[z].getAttribute("page_enter"));
		
		}

		var page_contents = new Array();

		new_node = document.createElement('div');

		new_node.innerHTML = document.getElementById("Pages").childNodes[z].HTML;

		z_index_point = 0;

		page_contents = new Array();

		for(x=0;x<new_node.childNodes.length;x++){

			if(new_node.childNodes[x].nodeType!=3){

				page_contents.push(new_node.childNodes[x]);

			}

		}

		children = page_contents.length;

		if(document.getElementById("Pages").childNodes[z].getAttribute("interaction")){			
		
			interaction = true;

		}else{

			interaction=false;		

		}

		interaction_type = "";

		interaction_list = new Array();

		if(!interaction){

			while(children!=0){			

				for(x=0;x<page_contents.length;x++){

					if(page_contents[x].style.zIndex==z_index_point){

						publish_engine(page_contents[x],workarea_top,workarea_left);		
						children--;			

					}

				}

				z_index_point++;

			}

		}else{


			for(x=0;x<children;x++){

				if(page_contents[x].getAttribute("rmouse")=="picture"){

					interaction_type = page_contents[x].id;

					interaction_list.push(page_contents[x]);

					interaction_list.push(workarea_top);

					interaction_list.push(workarea_left);

				}else{

					if(page_contents[x].getAttribute("rmouse")=="flashcard"){

						interaction_type = "flashcard";

						interaction_list.push(page_contents[x]);

						interaction_list.push(workarea_top);

						interaction_list.push(workarea_left);
				
					}else if(page_contents[x].getAttribute("rmouse")=="missingwords"){

						interaction_type = "missingwords";

						interaction_list.push(page_contents[x]);

						interaction_list.push(workarea_top);
	
						interaction_list.push(workarea_left);
				
					}else if(page_contents[x].getAttribute("rmouse")=="wordfillprompt"){

						interaction_type = "wordfillprompt";

						interaction_list.push(page_contents[x]);

						interaction_list.push(workarea_top);

						interaction_list.push(workarea_left);
				
					}

				}

			}



			for(x=0;x<children;x++){

				if(interaction_type=="flashcard"){

					if(page_contents[x].getAttribute("rmouse")=="flashbutton"){

						interaction_list.push(page_contents[x]);

						interaction_list.push(workarea_top);
	
						interaction_list.push(workarea_left);

					}

				}else if(interaction_type=="missingwords"){

					if(page_contents[x].getAttribute("rmouse")=="missingwordsbutton"){

						interaction_list.push(page_contents[x]);

						interaction_list.push(workarea_top);

						interaction_list.push(workarea_left);

					}

				}else if(interaction_type=="picturescroll"){

					if(page_contents[x].getAttribute("rmouse")=="button"){

						if(page_contents[x].getAttribute("action").indexOf("Move")!=-1){

							interaction_list.push(page_contents[x]);

							interaction_list.push(workarea_top);

							interaction_list.push(workarea_left);

						}
			
					}
	
				}else if(interaction_type=="wordfillprompt"){

					if(page_contents[x].getAttribute("rmouse")=="wordfillarea"){

						interaction_list.push(page_contents[x]);

						interaction_list.push(workarea_top);

						interaction_list.push(workarea_left);

					}

					if(page_contents[x].getAttribute("rmouse")=="wordfillresponse"){

						interaction_list.push(page_contents[x]);

						interaction_list.push(workarea_top);

						interaction_list.push(workarea_left);

					}

					if(page_contents[x].getAttribute("rmouse")=="button"){

						if(page_contents[x].getAttribute("action").indexOf("Check entered text")!=-1){

							interaction_list.push(page_contents[x]);

							interaction_list.push(workarea_top);

							interaction_list.push(workarea_left);

						}

					}
							

				}else if(interaction_type=="hotspotimage"){

					if(page_contents[x].getAttribute("rmouse")=="targethotspot"){

						interaction_list.push(page_contents[x]);

						interaction_list.push(workarea_top);

						interaction_list.push(workarea_left);

					}

					if(page_contents[x].getAttribute("rmouse")=="label"){

						interaction_list.push(page_contents[x]);

						interaction_list.push(workarea_top);

						interaction_list.push(workarea_left);

					}

					if(page_contents[x].getAttribute("rmouse")=="feedback"){

						interaction_list.push(page_contents[x]);

						interaction_list.push(workarea_top);

						interaction_list.push(workarea_left);

					}

					if(page_contents[x].getAttribute("rmouse")=="button"){

						if(page_contents[x].getAttribute("rmouse")=="button"){

							if(page_contents[x].getAttribute("action").indexOf("Move")!=-1){

								interaction_list.push(page_contents[x]);

								interaction_list.push(workarea_top);

								interaction_list.push(workarea_left);

							}

							if(page_contents[x].getAttribute("action").indexOf("Check")!=-1){

								interaction_list.push(page_contents[x]);

								interaction_list.push(workarea_top);

								interaction_list.push(workarea_left);

							}

							if(page_contents[x].getAttribute("action").indexOf("Next")!=-1){

								interaction_list.push(page_contents[x]);

								interaction_list.push(workarea_top);

								interaction_list.push(workarea_left);

							}
			
						}

					}

				}else{
			

				}				

			}

			
		}

		for(n=0;n<interaction_list.length;n+=3){

			publish_engine(interaction_list[n],interaction_list[n+1],interaction_list[n+2]);				

		}

		interaction = false;

		if(document.getElementById("Pages").childNodes[z].getAttribute("page_leave")==null){

			compile_structure.instruction_set.push("NO_PAGE_ACTION");

		}else{

			compile_structure.instruction_set.push("PAGE_ACTION " + document.getElementById("Pages").childNodes[z].getAttribute("page_leave"));
		
		}

		if(z!=document.getElementById("Pages").childNodes.length-1){

			compile_structure.instruction_set.push("NEXT_FRAME");

		}

		if(compile_structure.page_index[compile_structure.page_index.length-1]!=undefined){
		
			if(compile_structure.pages_to_add==0){

				compile_structure.page_index.push(1 + compile_structure.page_index[compile_structure.page_index.length-1]);

			}else{

				compile_structure.page_index.push(compile_structure.pages_to_add + compile_structure.page_index[compile_structure.page_index.length-1]);

			}


		}else{

			if(compile_structure.pages_to_add==0){

				compile_structure.page_index.push(1); 

			}else{

				compile_structure.page_index.push(compile_structure.pages_to_add);

			}

		}

		compile_structure.pages_to_add = 0;

	}

	if(type == "swf"){
		publish_initiate();
	}else if(type == "gif"){
		gif_publish_initiate();
	}


}

function save_ted_file(){

	if(file_system.file_name==""){

		show_wizard('file_save');

	}else{

		save_file(false);

	}

}

function save_file(filename){

	file_name_found = false;

	if(filename){

		for(x=0;x<document.getElementById("file_open_spare").childNodes.length;x++){

			saving_file = document.getElementById("save_as_file_name").value + ".ted";

			if(saving_file == document.getElementById("file_open_spare").childNodes[x].innerHTML){				

				file_name_found=true;
				break;

			}

		}

	}

	if(file_name_found){

		var file_name_check = confirm("Do you want to replace this file?");

		if(file_name_check){

			if(setup_ajax()!=false){
    
				var url="php/filehandling/save_ted_file.php";

				file_ajax_prepare(url);

				data_string = "";

				data_string = "<width>" + document.getElementById("workspace").offsetWidth + "</width>";

				data_string += "<height>" + document.getElementById("workspace").offsetHeight + "</height>";

				data_string += "<topleft>" + document.getElementById("workspace").style.left + "</topleft>";

				data_string += "<top>" + document.getElementById("workspace").style.top + "</top>";	

	
				data_string += "<bgcolour>";
	
				data_string += document.getElementById("workspace").style.backgroundColor=="" ? "#FFFFFF" : document.getElementById("workspace").style.backgroundColor;

				data_string += "</bgcolour>";

				for(x=0;x<document.getElementById("pages").childNodes.length;x++){

					data_string += "<enter>" + document.getElementById("pages").childNodes[x].getAttribute("page_enter") + "</enter>";

					data_string += "<page>" + document.getElementById("pages").childNodes[x].HTML + "</page>";

					data_string += "<leave>" + document.getElementById("pages").childNodes[x].getAttribute("page_leave") + "</leave>";

				}

				data_string = data_string.split("&#10").join("");

				file_system.dirty_flag=false;

				if(filename){

					filename = document.getElementById("save_as_file_name").value;	

				}else{

					filename = file_system.file_name // CHECK THIS			

				}

				filename = document.getElementById("top_folder").getAttribute("folder_path").split('\\\\').join('\\') + filename + ".ted";

				file_system.file_name = filename;

				xmlHttp.send('file_data=' + data_string + '&file_name=' + filename); 

			}


		}

	}else{

		if(setup_ajax()!=false){
    
			var url="php/filehandling/save_ted_file.php";

			file_ajax_prepare(url);

			data_string = "";

			data_string = "<width>" + document.getElementById("workspace").offsetWidth + "</width>";

			data_string += "<height>" + document.getElementById("workspace").offsetHeight + "</height>";

			data_string += "<topleft>" + document.getElementById("workspace").style.left + "</topleft>";

			data_string += "<top>" + document.getElementById("workspace").style.top + "</top>";	

			data_string += "<bgcolour>";
	
			data_string += document.getElementById("workspace").style.backgroundColor=="" ? "#FFFFFF" : document.getElementById("workspace").style.backgroundColor;

			data_string += "</bgcolour>";

			for(x=0;x<document.getElementById("pages").childNodes.length;x++){

				data_string += "<enter>" + document.getElementById("pages").childNodes[x].getAttribute("page_enter") + "</enter>";

				data_string += "<page>" + document.getElementById("pages").childNodes[x].HTML + "</page>";

				data_string += "<leave>" + document.getElementById("pages").childNodes[x].getAttribute("page_leave") + "</leave>";

			}

			data_string = data_string.split("&#10").join("");

			file_system.dirty_flag=false;

			if(document.getElementById("top_folder")!=null){

				root_folder = document.getElementById("top_folder").getAttribute("folder_path");

			}else{

				root_folder = "c:\\";
			
			}


			if(filename){

				filename = document.getElementById("save_as_file_name").value;	

			}else{

				filename = file_system.file_name; // CHECK THIS			

			}
			

			if(file_system.file_name==""){

				filename = root_folder.split('\\\\').join('\\') + filename + ".ted";

			}else{

				if(!menu_new_file){

					filename = file_system.file_name;

				}else{

					filename = root_folder.split('\\\\').join('\\') + filename + ".ted";
					menu_new_file=false;

				}

			}

			file_system.file_name = filename;

			xmlHttp.send('file_data=' + data_string + '&file_name=' + filename); 

		}

	}

	wizard_close();

}


function is_ok_to_close(){

	if(file_system.dirty_flag){

		return false;

	}else{

		return true;

	} 

}

function new_file(){

	if(is_ok_to_close()){	

		document.getElementById("pages").innerHTML="";	

		for(x=0;x<=4;x++){

			document.getElementById("pages").innerHTML += "<div id=\"page" + (x+1) + "\" class=\"pagehold\" mouse=\"page\"><p>" + (x+1) + "</p><div class=\"pageback\" id=\"pageback" + (x+1) + "\"></div><div mouse=\"page\" class=\"pagecover\" id=\"pagecover" + (x+1) + "\"></div></div>";

		}

		document.getElementById("workarea").innerHTML = "";

		page_drag_management.current_page = document.getElementById("pages").childNodes[0];

		page_drag_management.current_page.style.border= "1px solid #aaf";

	}else{

		var answer = confirm("Are you sure you want to close this file without saving?");

		if(answer){

			document.getElementById("pages").innerHTML="";	

			for(x=0;x<=4;x++){

				document.getElementById("pages").innerHTML += "<div id=\"page" + (x+1) + "\" class=\"pagehold\" mouse=\"page\"><p>" + (x+1) + "</p><div class=\"pageback\" id=\"pageback" + (x+1) + "\"></div><div mouse=\"page\" class=\"pagecover\" id=\"pagecover" + (x+1) + "\"></div></div>";

			}

			document.getElementById("workarea").innerHTML = "";

			page_drag_management.current_page = document.getElementById("pages").childNodes[0];

			page_drag_management.current_page.style.border= "1px solid #aaf";

		}	

	}

}

function exit_system(){

	
	if(is_ok_to_close()){

		window.close();

	}else{

		var answer = confirm("Are you sure you want to close this file without saving?");

		if(answer){

			window.close();

		}

	}


}


function close_file(){

	if(is_ok_to_close()){

		document.getElementById("pages").innerHTML="";	

		document.getElementById("workspace").innerHTML="";	

		document.getElementById("workarea").innerHTML="";	

		file_system.dirty_flag=false;

		document.title = "TED";

	}else{

		var answer = confirm("Are you sure you want to close this file without saving?");

		if(answer){

			document.getElementById("pages").innerHTML= "";

			document.getElementById("workspace").innerHTML="";	

			document.getElementById("workarea").innerHTML="";	

			file_system.dirty_flag=false;

			document.title = "TED";

		}

	}

}

function phpfilesopen_stateChanged(){

	if(xmlHttp.readyState==4){ 

		if(xmlHttp.responseText!=""){	

			left = xmlHttp.responseText.split("</topleft>");

			left_px = left[0].split("<topleft>");

			left_adjust = pixel_strip(left_px[1]) - pixel_strip(document.getElementById("workspace").style.left);

			top_pos = xmlHttp.responseText.split("</top>");

			top_px = top_pos[0].split("<top>");

			top_adjust = pixel_strip(top_px[1]) - pixel_strip(document.getElementById("workspace").style.top);

			temp = xmlHttp.responseText.split("</bgcolour>");

			enter_values = temp[1].split("<enter>");

			leave_values = temp[1].split("<leave>");

			temp2 = temp[1].split("<page>");

			if(document.getElementById("pages").childNodes.length!=0){

				while(document.getElementById("pages").childNodes.length!=1){

					page_drag_management.current_page = document.getElementById("pages").childNodes[1];				
	
					page_drag_management.current_page.parentNode.removeChild(page_drag_management.current_page);

				}

			}

			number_of_pages = temp2.length - 2;

			if(document.getElementById("pages").childNodes.length==0){

				new_node = document.createElement('div');

				new_node.className = "pagehold";

				new_node.setAttribute("mouse","page");

				new_node.id = "page1";

				new_node.innerHTML = "<p>1</p><div class=\"pageback\" id=\"pageback1\"></div><div mouse=\"page\" class=\"pagecover\" id=\"pagecover1\"></div>";

				document.getElementById("pages").appendChild(new_node);

				currentid = new_node;

			}else{			

				page_drag_management.current_page = document.getElementById("pages").childNodes[0];

				currentid = page_drag_management.current_page;

			}

			for(q=0;q<=number_of_pages;q++){

				newNode = currentid.cloneNode(true);

				newNode.id = "temp" + q;

				newNode.style.border="";

				html = temp2[q+1].substr(0,temp2[q+1].indexOf("</page>"));

				left_vals = html.split(" LEFT:");

				new_left_values = new Array();

				for(i=1;i<left_vals.length;i++){

					new_val = left_vals[i].split("px");					

					new_left_values.push(new_val[0]);

				}

				for(i=0;i<new_left_values.length;i++){

					find = " LEFT:" + new_left_values[i];

					replace = " LEFT:" + parseInt(new_left_values[i] - left_adjust);		

					newhtml = html.replace(find,replace);					

				}

				top_vals = html.split(" TOP:");

				new_top_values = new Array();

				for(i=1;i<top_vals.length;i++){

					new_val = top_vals[i].split("px");					

					new_top_values.push(new_val[0]);

				}

				for(i=0;i<new_top_values.length;i++){

					find = " TOP:" + new_top_values[i];

					replace = " TOP:" + parseInt(new_top_values[i] - top_adjust);		

					newhtml = newhtml.replace(find,replace);					

				}

				document.getElementById("workarea").innerHTML = newhtml;

				currentid.parentNode.insertBefore(newNode,currentid);

				page_drag_management.current_page = currentid;

				set_page_innerhtml();

			}

			document.getElementById("pages").removeChild(document.getElementById("pages").childNodes[0]);


			for(x=0;x!=number_of_pages+1;x++){	
	
				currentid.parentNode.childNodes[x].setAttribute("page_enter", enter_values[x+1].substr(0,enter_values[x+1].indexOf("</enter>")));

				currentid.parentNode.childNodes[x].setAttribute("page_leave", leave_values[x+1].substr(0,leave_values[x+1].indexOf("</leave>")));
	
				currentid.parentNode.childNodes[x].id = "page" + parseInt(x+1);

				currentid.parentNode.childNodes[x].childNodes[0].innerHTML = Number(x+1);
				
				currentid.parentNode.childNodes[x].childNodes[1].id = "pageback" + parseInt(x+1);

				currentid.parentNode.childNodes[x].childNodes[2].id = "pagecover" + parseInt(x+1);		

			}

			file_update();

			for(x=0;x<=number_of_pages;x++){

				text = document.getElementById("pages").childNodes[x].innerHTML;

				if(text.indexOf("Flashcard")!=-1){

					document.getElementById("pages").childNodes[x].setAttribute("interaction",true);

				}else if(text.indexOf("U,D,L,R")!=-1){

					document.getElementById("pages").childNodes[x].setAttribute("interaction",true);

				}else if(text.indexOf('rmouse="missingwords"')!=-1){

					document.getElementById("pages").childNodes[x].setAttribute("interaction",true);

				}else if(text.indexOf("wordfillprompt")!=-1){

					document.getElementById("pages").childNodes[x].setAttribute("interaction",true);

				}else if(text.indexOf("targethotspot")!=-1){

					document.getElementById("pages").childNodes[x].setAttribute("interaction",true);

				}

			}

		}

		wizard_close();	

		if(file_system.template_opening==false){

			file_system.file_name = file_system.opening_file_name;	

			document.title = "TED - " + file_system.file_name;

			file_system.opening_file_name = "";		

		}else{

			file_system.template_opening=false;

		}

	}


}

function cunt(){

	open_ted_file("c:\\xampp\\htdocs\\ted\\file1.ted");

}


function open_ted_file(filename){

	file_system.opening_file_name = filename;

	if(setup_ajax()!=false){

		xmlHttp.open("post","php/filehandling/open_ted_file.php",true);
		xmlHttp.onreadystatechange=phpfilesopen_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttp.send('file_name=' + filename); 

	}	

}

function templates_list(){

	if(setup_ajax()!=false){

		xmlHttp.open("post","php/filehandling/templates_list.php",true);
		xmlHttp.onreadystatechange=phpfilestemplateslist_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttp.send('file_data=hello'); 

	}

}

function open_file(){

	if(setup_ajax()!=false){

		xmlHttp.open("post","php/filehandling/directory_list.php",true);
		xmlHttp.onreadystatechange=phpfileslist_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttp.send('file_data=hello'); 

	}

}


function phpfilestemplateslist_stateChanged(){


	if(xmlHttp.readyState==4){ 

		if(xmlHttp.responseText!=""){			

			document.getElementById("file_open_spare").innerHTML = xmlHttp.responseText;

		}


	}

}

function phpfileslist_stateChanged(){

	if(xmlHttp.readyState==4){ 

		if(xmlHttp.responseText!=""){

			document.getElementById("file_open_spare").innerHTML = xmlHttp.responseText;

			document.getElementById("new_path_value").value="";	

		}


	}

}

function file_list(dir){

	if(setup_ajax()!=false){

		xmlHttp.open("post","php/filehandling/directory_list.php",true);
		xmlHttp.onreadystatechange=phpfileslist_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttp.send('directory=' + dir); 

	}

}