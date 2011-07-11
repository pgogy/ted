function gif_publish_initiate(){

	if(document.getElementById("frame_rate").value!=""){

		if (document.getElementById("frame_rate").value != parseInt(document.getElementById("frame_rate").value)){

			alert("The number you enter needs to be a round number");

		}else{

			string = compile_structure.page_index.join(",");

			if(setup_ajax()!=false){
	
				xmlHttp.open("post","php/gif/engine.php",true);
				xmlHttp.onreadystatechange=gif_initiate_monitor;
				xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xmlHttp.send('file_name=' + file_system.file_name + '&pages_index=' + compile_structure.page_index.join(",") + '&instruction_set=' + compile_structure.instruction_set.join("*,*") + '&background_colour=' + document.getElementById("workspace").style.backgroundColor + '&width=' + document.getElementById("workspace").offsetWidth + '&height=' + document.getElementById("workspace").offsetHeight + '&frame=' + document.getElementById("frame_rate").value); 

			}

		}

	}else{

		alert("Please enter a frame rate");

	}	

}


function gif_initiate_monitor(){

	if(xmlHttp.readyState==4){ 

		if(xmlHttp.responseText!=""){	

			results = xmlHttp.responseText.split("***");	

			if(results.length==1){

				document.getElementById("gif_results").innerHTML = "<a target=\"new\" href=\"http://localhost/ted/php/gif/" + results[2] + "\">Click here to preview gif</a>";
				

			}else if(results.length!=0){

				document.getElementById("gif_results").innerHTML = results[0] + "<br>" + "<a target=\"new\" href=\"http://localhost/ted/php/gif/" + results[2] + "\">Click here to preview gif</a>";			

			}else{

				alert("An error has occured");

			}

			alert(xmlHttp.responseText);		

		}

	}

}