window.onload = load_handle;

function load_handle(){

	for(x=0;x<document.getElementById("pages").childNodes.length;x++){

		document.getElementById("pages").childNodes[x].HTML = "";

	}

	page_drag_management.current_page = document.getElementById("pages").childNodes[0];

	page_drag_management.current_page.style.border= "1px solid #aaf";

	file_system.changes_list[0] = document.getElementById("pages").innerHTML;

	document.onselectstart=function(){

						//if(event.srcElement.nodeName!="TEXTAREA"){

							return false;

						//}

					 };

	document.getElementById("workingarea").style.width = (document.body.clientWidth - document.getElementById("pagepanel").offsetWidth) - document.getElementById("workingarea").offsetLeft;

	document.getElementById("workspace").style.left = (document.getElementById("workingarea").offsetWidth / 2) - (document.getElementById("workspace").offsetLeft /8)
;


	document.getElementById("workspace").style.top = (document.getElementById("workingarea").offsetHeight / 2)
 - (document.getElementById("workspace").offsetLeft /4)
;


	

}


function delete_page(method){
	
	alert(clickmenu.dragitemparameter.id);

	if(document.getElementById("pages").childNodes.length!=1){

		if(method=="menu"){

			page_drag_management.current_page.parentNode.removeChild(page_drag_management.current_page);
		
	
		}else{

			document.getElementById("page" + clickmenu.dragitemparameter.id.substr(clickmenu.dragitemparameter.id.length-1)).parentNode.removeChild(document.getElementById("page" + clickmenu.dragitemparameter.id.substr(clickmenu.dragitemparameter.id.length-1)));

		}

		temp_id = document.getElementById("pages").childNodes[0];
	
		numberofpages = document.getElementById("pages").childNodes.length;

		for(x=0;x<numberofpages;x++){
	
			temp_id.parentNode.childNodes[x].id = "page" + parseInt(x+1);

			temp_id.parentNode.childNodes[x].childNodes[0].innerHTML = Number(x+1);
			temp_id.parentNode.childNodes[x].childNodes[1].id = "pageback" + parseInt(x+1);
			temp_id.parentNode.childNodes[x].childNodes[2].id = "pagecover" + parseInt(x+1);		

		}


	}

	if("page" + clickmenu.dragitemparameter.id.substr(clickmenu.dragitemparameter.id.length-1) == page_drag_management.current_page.id){

		document.getElementById("workarea").innerHTML = "";

	}		

	file_update();

}

function add_page_here(){
	
	currentid = page_drag_management.current_page;

	temp_id = page_drag_management.current_page;

	newNode = currentid.cloneNode(true);

	newNode.id = "temp";

	newNode.HTML = "";

	newNode.style.border="";

	newNode.childNodes[1].innerHTML = "";

	newNode.setAttribute("interaction",false);

	//insertnode = "test" + String(Number(Number(String(currentid.id).substr(4,String(currentid.id).length)) + 1));

	if(page_drag_management.current_page.id.substr(4)==document.getElementById("pages").childNodes.length){

		document.getElementById("pages").appendChild(newNode);

	}else{

		for(x=0;x<document.getElementById("pages").childNodes.length;x++){

			if(document.getElementById("pages").childNodes[x]==page_drag_management.current_page){

				currentid.parentNode.insertBefore(newNode,document.getElementById("pages").childNodes[x+1]);
				break;
	
			}


		}

	}

	for(x=0;x<document.getElementById("pages").childNodes.length;x++){
	
		temp_id.parentNode.childNodes[x].id = "page" + parseInt(x+1);

		temp_id.parentNode.childNodes[x].childNodes[0].innerHTML = Number(x+1);
		temp_id.parentNode.childNodes[x].childNodes[1].id = "pageback" + parseInt(x+1);
		temp_id.parentNode.childNodes[x].childNodes[2].id = "pagecover" + parseInt(x+1);		

	}

	file_update();

}

function add_page(){

	
	currentid = document.getElementById("pages").childNodes[0];

	temp_id = document.getElementById("pages").childNodes[0];

	newNode = currentid.cloneNode(true);

	newNode.id = "temp";

	newNode.HTML = "";

	newNode.style.border="";

	newNode.childNodes[1].innerHTML = "";

	insertnode = "test" + String(Number(Number(String(currentid.id).substr(4,String(currentid.id).length)) + 1));

	currentid.parentNode.insertBefore(newNode,document.getElementById(insertnode));

	numberofpages = currentid.parentNode.childNodes.length;	

	for(x=0;x<numberofpages;x++){
	
		temp_id.parentNode.childNodes[x].id = "page" + parseInt(x+1);

		temp_id.parentNode.childNodes[x].childNodes[0].innerHTML = Number(x+1);
		temp_id.parentNode.childNodes[x].childNodes[1].id = "pageback" + parseInt(x+1);
		temp_id.parentNode.childNodes[x].childNodes[2].id = "pagecover" + parseInt(x+1);

	}

	file_update();


}

function duplicate_page(){

	currentid = page_drag_management.current_page;

	temp_id = currentid;

	newNode = currentid.cloneNode(true);

	newNode.id = "temp";

	newNode.style.border ="";

	insertnode = "test" + String(Number(Number(String(currentid.id).substr(4,String(currentid.id).length)) + 1));

	for(x=0;x<document.getElementById("pages").childNodes.length;x++){

		if(document.getElementById("pages").childNodes[x]==page_drag_management.current_page){

			if(x==document.getElementById("pages").childNodes.length-1){

				currentid.parentNode.insertBefore(newNode,document.getElementById("pages").childNodes[x]);
				break;

			}else{

				currentid.parentNode.insertBefore(newNode,document.getElementById("pages").childNodes[x+1]);
				break;

			}


		}


	}

	numberofpages = currentid.parentNode.childNodes.length;			

	for(x=0;x<numberofpages;x++){
	
		temp_id.parentNode.childNodes[x].id = "page" + parseInt(x+1);

		temp_id.parentNode.childNodes[x].childNodes[0].innerHTML = Number(x+1);
		temp_id.parentNode.childNodes[x].childNodes[1].id = "pageback" + parseInt(x+1);
		temp_id.parentNode.childNodes[x].childNodes[2].id = "pagecover" + parseInt(x+1);

	}

	file_update();

}

function set_page_innerhtml(){

	page_drag_management.current_page.HTML = document.getElementById("workarea").innerHTML;

	temp = document.getElementById(page_drag_management.current_page.id).childNodes[1];

	while(temp.firstChild) {

	      temp.removeChild(temp.firstChild);

	}

	for(x=0;x<document.getElementById("workarea").childNodes.length;x++){

		new_temp = document.getElementById("workarea").childNodes[x].cloneNode(true);

		if(new_temp.nodeType!=3){

			scale_width = temp.offsetWidth / document.getElementById("workspace").offsetWidth;

			scale_height = temp.offsetHeight / document.getElementById("workspace").offsetHeight;

			if(new_temp.src==undefined){

				new_temp.style.width = pixel_strip(new_temp.style.width) * scale_width;

				new_temp.style.height = pixel_strip(new_temp.style.height) * scale_height;

			}else{

				new_temp.style.width = new_temp.getAttribute("width") * scale_width;

				new_temp.style.height = new_temp.getAttribute("height") * scale_height;

			}

			scale_left = document.getElementById("workarea").childNodes[x].offsetLeft - document.getElementById("workspace").offsetLeft;
	
			scale_top = document.getElementById("workarea").childNodes[x].offsetTop - document.getElementById("workspace").offsetTop;

		
			new_temp.style.left = scale_left * scale_width;

			new_temp.style.top = scale_top * scale_height;

			new_temp.style.fontSize = (pixel_strip(new_temp.style.fontSize) / 1.66) + "px";

			new_temp.style.border = "";

			new_temp.id = null;

			/*new_temp.removeAttribute("mouse");

			new_temp.removeAttribute("rmouse");

			new_temp.removeAttribute("title");*/

			temp.appendChild(new_temp);

		}

	}

	file_system.dirty_flag = true;

	file_update();

}		

function clear_page(){

	page_drag_management.current_page.HTML = "";
	document.getElementById("workarea").innerHTML = "";
	page_drag_management.current_page.setAttribute("interaction",false);
	set_page_innerhtml();	
	file_update();

}