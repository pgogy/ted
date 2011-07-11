edit_mode = false;

function missing_textfield_doubleclick(id){

	edit_mode = true;

	id.style.display = "none";
							
	var removeLines = /<BR>/g;

	temp = id.innerHTML.toString();

	temp = temp.replace(/<SPAN onmousedown=missing_word_select\(this\)>/g,"");		

	temp = temp.replace(/<\/SPAN>/g,"");

	temp = temp.replace(/<SPAN onmousedown=missing_word_select\(this\) style="BACKGROUND-COLOR: #ffffcc">/g,"*");

	id.parentNode.childNodes[1].firstChild.value = temp.toString().replace(removeLines,"\r");
	id.parentNode.childNodes[1].style.display = "block";
	id.parentNode.childNodes[1].firstChild.focus();		

	set_page_innerhtml();
	
}

function missing_textfield_focus(id){

	if(id.createTextRange){

		var textintextbox = id.createTextRange();
		textintextbox.moveStart('character',id.value.length);
		textintextbox.collapse();
		textintextbox.select();

	}
	
}	

function missing_textfield_changed(event,id){
	
	id.parentNode.style.display = "none";
	id.parentNode.parentNode.childNodes[0].style.display = "block";
	var reNewLines=/[\n]/g;
	temp = id.value.toString().replace(reNewLines,"<br>");
	words = temp.split(" ");
	edit_mode=false;
	id.parentNode.parentNode.childNodes[0].innerHTML="";

	for(x=0;x<words.length;x++){

		if(words[x].indexOf("*")==0){
			
			id.parentNode.parentNode.childNodes[0].innerHTML += "<span style=\"BACKGROUND-COLOR: #ffffcc\" onmousedown=\"missing_word_select(this)\">" + words[x].substr(1,words[x].length-1) + " </span>";

		}else{

			id.parentNode.parentNode.childNodes[0].innerHTML += "<span onmousedown=\"missing_word_select(this)\">" + words[x] + " </span>";

		}

						
	}

	set_page_innerhtml();

}

function missing_word_select(id){

	if(item_drag_management.currently_selected_item.getAttribute("rmouse")=="missingwords"){

		if(id.style.backgroundColor!="#ffffcc"){

			id.style.backgroundColor="#ffffcc";

		}else{

			id.style.backgroundColor="";

		}				

	}

	set_page_innerhtml();

}

function textfield_doubleclick(id){

	edit_mode = true;

	id.style.display = "none";
							
	var removeLines = /<BR>/g;
	id.parentNode.childNodes[1].firstChild.value = id.innerHTML.toString().replace(removeLines,"\r");
 	id.parentNode.childNodes[1].style.display = "block";
	id.parentNode.childNodes[1].firstChild.focus();	

	set_page_innerhtml();		

}

function textfield_focus(id){

	if(id.createTextRange){

		var textintextbox = id.createTextRange();
		textintextbox.moveStart('character',id.value.length);
		textintextbox.collapse();
		textintextbox.select();

	}

}

function textfield_changed(event,id){
	
	id.parentNode.style.display = "none";
	id.parentNode.parentNode.childNodes[0].style.display = "block";
	var reNewLines=/[\n]/g;
	id.parentNode.parentNode.childNodes[0].innerHTML = id.value.toString().replace(reNewLines,"<br>");

	edit_mode=false;				


	set_page_innerhtml();
}


function scorebutton_textfield_doubleclick(id){

	edit_mode = true;

	id.style.display = "none";
							
	var removeLines = /<BR>/g;
	id.image = id.childNodes[1];
	id.parentNode.childNodes[1].firstChild.value = id.childNodes[0].innerHTML.toString().replace(removeLines,"\r");
 	id.parentNode.childNodes[1].style.display = "block";
	id.parentNode.childNodes[1].firstChild.focus();	

	set_page_innerhtml();		

}

function scorebutton_textfield_focus(id){

	if(id.createTextRange){

		var textintextbox = id.createTextRange();
		textintextbox.moveStart('character',id.value.length);
		textintextbox.collapse();
		textintextbox.select();

	}

}

function scorebutton_textfield_changed(event,id){
	
	id.parentNode.style.display = "none";

	id.parentNode.parentNode.childNodes[0].style.display = "block";
	var reNewLines=/[\n]/g;
	id.parentNode.parentNode.childNodes[0].innerHTML = "<span>" + id.value.toString().replace(reNewLines,"<br>") + "</span><img onclick=\"set_score_button(this)\" src=\"" + id.parentNode.parentNode.childNodes[0].image.src + "\" />";


	edit_mode=false;				


	set_page_innerhtml();

}
