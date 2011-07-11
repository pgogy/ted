var mousePos = null;
var firstmousePos = null;
var offset_x = 0;
var offset_y = 0;

var fonts = new Array("arial","verdana","sans-serif");

var wizard_settings = new Object;

wizard_settings.displayed = false;
wizard_settings.active_section = null;

wizard_settings.documenttitle = "Document settings";
wizard_settings.documentwidth = "460px";
wizard_settings.documentheight = "200px";
wizard_settings.documentfunctions = new Array(document_area,colour_area,document_colour_area,apply_button,ok_button);

wizard_settings.hotspotformattitle = "Hotspot settings";
wizard_settings.hotspotformatwidth = "460px";
wizard_settings.hotspotformatheight = "200px";
wizard_settings.hotspotformatfunctions = new Array(shape_area,colour_area,apply_button,ok_button);

wizard_settings.feedbackformattitle = "Feedback settings";
wizard_settings.feedbackformatwidth = "460px";
wizard_settings.feedbackformatheight = "280px";
wizard_settings.feedbackformatfunctions = new Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,target_hit_feedback,target_miss_feedback,apply_button,ok_button);

wizard_settings.textareaformattitle = "Text area format";
wizard_settings.textareaformatwidth = "460px";
wizard_settings.textareaformatheight = "200px";
wizard_settings.textareaformatfunctions = new Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,apply_button,ok_button);

wizard_settings.smsformattitle = "SMS setup";
wizard_settings.smsformatwidth = "460px";
wizard_settings.smsformatheight = "200px";
wizard_settings.smsformatfunctions = new Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,sms_number,sms_message,apply_button,ok_button);

wizard_settings.urlformattitle = "URL Setup";
wizard_settings.urlformatwidth = "460px";
wizard_settings.urlformatheight = "200px";
wizard_settings.urlformatfunctions = new Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,url_area,apply_button,ok_button);

wizard_settings.pictureformattitle = "Picture format";
wizard_settings.pictureformatwidth = "260px";
wizard_settings.pictureformatheight = "140px";
wizard_settings.pictureformatfunctions = new Array(shape_area,apply_button,ok_button);

wizard_settings.buttonformattitle = "Button format";
wizard_settings.buttonformatwidth = "460px";
wizard_settings.buttonformatheight = "200px";
wizard_settings.buttonformatfunctions = new Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,button_page_action,buttoncode_area,apply_button,ok_button);

wizard_settings.rectangleformattitle = "Rectangle format";
wizard_settings.rectangleformatwidth = "460px";
wizard_settings.rectangleformatheight = "200px";
wizard_settings.rectangleformatfunctions = new Array(shape_area,colour_area,backcolour_area,apply_button,ok_button);

wizard_settings.flashcardformattitle = "Flashcard format";
wizard_settings.flashcardformatwidth = "460px";
wizard_settings.flashcardformatheight = "200px";
wizard_settings.flashcardformatfunctions = new Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,flashcards_words,apply_button,ok_button);

wizard_settings.missingwordsformattitle = "Missing words format";
wizard_settings.missingwordsformatwidth = "460px";
wizard_settings.missingwordsformatheight = "200px";
wizard_settings.missingwordsformatfunctions = new Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,apply_button,ok_button);

wizard_settings.picture_choicetitle = "Picture scroll";
wizard_settings.picture_choicewidth = "230px";
wizard_settings.picture_choiceheight = "200px";
wizard_settings.picture_choicefunctions = new Array(picture_choose,cancel_button);

wizard_settings.dragdroptitle = "Drag and Drop";
wizard_settings.dragdropwidth = "230px";
wizard_settings.dragdropheight = "200px";
wizard_settings.dragdropfunctions = new Array(dragdrop,cancel_button);

wizard_settings.wordfilltitle = "Word fill setup";
wizard_settings.wordfillwidth = "460px";
wizard_settings.wordfillheight = "200px";
wizard_settings.wordfillfunctions = new Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,word_fill,apply_button,ok_button);

wizard_settings.file_opentitle = "Open";
wizard_settings.file_openwidth = "460px";
wizard_settings.file_openheight = "200px";
wizard_settings.file_openfunctions = new Array(file_open,new_path,cancel_button);

wizard_settings.file_templatetitle = "Choose a template";
wizard_settings.file_templatewidth = "460px";
wizard_settings.file_templateheight = "200px";
wizard_settings.file_templatefunctions = new Array(file_templates,cancel_button);

wizard_settings.file_savetitle = "Save as";
wizard_settings.file_savewidth = "460px";
wizard_settings.file_saveheight = "320px";
wizard_settings.file_savefunctions = new Array(file_open,new_path,save_path,save_button,cancel_button);

wizard_settings.page_codetitle = "Page code";
wizard_settings.page_codewidth = "230px";
wizard_settings.page_codeheight = "300px";
wizard_settings.page_codefunctions = new Array(page_code,apply_button,ok_button);

wizard_settings.image_uploadtitle = "Image Upload";
wizard_settings.image_uploadwidth = "250px";
wizard_settings.image_uploadheight = "200px";
wizard_settings.image_uploadfunctions = new Array(upload_area,cancel_button);

wizard_settings.scorebuttonformattitle = "Button (score) format";
wizard_settings.scorebuttonformatwidth = "460px";
wizard_settings.scorebuttonformatheight = "200px";
wizard_settings.scorebuttonformatfunctions = new Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,score_value,ok_button,cancel_button);

wizard_settings.gifpublishtitle = "Button (score) format";
wizard_settings.gifpublishwidth = "460px";
wizard_settings.gifpublishheight = "200px";
wizard_settings.gifpublishfunctions = new Array(ok_button,cancel_button);

function wizard_close(){

	document.getElementById("wizardmenu").style.display='none';
	wizard_settings.displayed = false;
	document.getElementById("wizardcontentleft").innerHTML = "";
	document.getElementById("wizardcontentright").innerHTML = "";

}

function get_wizard_x_y(node){

	wizard_top = 0;
	wizard_left = 0;

	node = document.getElementById(node);

	if(node!=null){

		while(node.id != "wizardmenu"){

			wizard_left += node.offsetLeft;				

			wizard_top += node.offsetTop;					

			if(node.parentNode!=null){

				node = node.parentNode;

			}else{
			
				break;				

			}

		}

	}

	return {leftvalue:wizard_left,topvalue:wizard_top};

}

function basic_button_shape(width){

	basic_div = document.createElement("div");
	basic_div.style.width=(width) ? width + "px"  : "200px";

	return basic_div;

}

function basic_div_shape(width){

	basic_div = document.createElement("div");
	basic_div.style.width=(width) ? width + "px"  : "200px";
	basic_div.style.margin = "3px 3px 3px 3px";
	basic_div.style.backgroundColor="#D0D6DE";

	return basic_div;

}

function shape_area(){

	shape_area_holder = document.createElement("div");
	shape_area_holder.id="shape_area_holder";
	shape_area_holder.style.margin = "3px 3px 3px 3px";
		
	shape_area_holder.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardquarter\">X</div><div class=\"wizardquarter\"><input size=\"3\" type=\"text\" id=\"x\" /></div><div class=\"wizardquarter\">Y</div><div class=\"wizardquarter\"><input size=\"3\" type=\"text\" id=\"y\" /></div><div class=\"wizardquarter\">Width</div><div class=\"wizardquarter\"><input size=\"3\" type=\"text\" id=\"width\" /></div><div class=\"wizardquarter\">Height</div><div class=\"wizardquarter\"><input size=\"3\" type=\"text\" id=\"height\" /></div></div>";

	document.getElementById("wizardcontentleft").appendChild(shape_area_holder);

	document.getElementById("x").value = item_drag_management.currently_selected_item.offsetLeft - document.getElementById("workspace").offsetLeft;
	document.getElementById("y").value = item_drag_management.currently_selected_item.offsetTop - document.getElementById("workspace").offsetTop;	
	document.getElementById("width").value = item_drag_management.currently_selected_item.offsetWidth;
	document.getElementById("height").value = item_drag_management.currently_selected_item.offsetHeight;

}

function file_open(){

	file_open_area = document.createElement("div");
	file_open_area.id="documentarea";
	file_open_area.style.margin = "3px 3px 3px 3px";
		
	file_open_area.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Choose a file to open</div><div class=\"wizardhundred\"><div id=\"file_open_spare\">1234</div></div>";

	

	document.getElementById("wizardcontentleft").appendChild(file_open_area);

	file_list("c:\\xampp");

}

function file_templates(){

	file_open_area = document.createElement("div");
	file_open_area.id="documentarea";
	file_open_area.style.margin = "3px 3px 3px 3px";
		
	file_open_area.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Choose a template to open</div><div class=\"wizardhundred\"><div id=\"file_open_spare\">1234</div></div>";	

	document.getElementById("wizardcontentleft").appendChild(file_open_area);

	templates_list();

}

function new_path_key(event){

	if(window.event.keyCode==13){

		file_list(document.getElementById("new_path_value").value);

		document.getElementById("new_path_value").value=null;

	}

}

function new_path(){

	new_path_area = document.createElement("div");
	new_path_area.id="documentarea";
	new_path_area.style.margin = "3px 3px 3px 3px";
		
	new_path_area.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Enter a new path</div><div class=\"wizardhundred\"><textarea rows=\"1\" cols=\"53\" id=\"new_path_value\" onkeypress=\"javascript:new_path_key()\"></textarea></div>";

	document.getElementById("wizardcontentleft").appendChild(new_path_area);

}

function save_path(){

	save_path_area = document.createElement("div");
	save_path_area.id="documentarea";
	save_path_area.style.margin = "3px 3px 3px 3px";
		
	save_path_area.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Enter the new file name</div><div class=\"wizardhundred\"><textarea rows=\"1\" cols=\"53\" id=\"save_as_file_name\" name=\"save_as_file_name\"></textarea></div>";

	document.getElementById("wizardcontentleft").appendChild(save_path_area);

}

function document_area(){

	document_area = document.createElement("div");
	document_area.id="documentarea";
	document_area.style.margin = "3px 3px 3px 3px";
		
	document_area.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardquarter\">Width</div><div class=\"wizardquarter\"><input size=\"3\" type=\"text\" id=\"width\" /></div><div class=\"wizardquarter\">Height</div><div class=\"wizardquarter\"><input size=\"3\" type=\"text\" id=\"height\" /></div>";

	document.getElementById("wizardcontentleft").appendChild(document_area);

	document.getElementById("width").value = document.getElementById("workspace").offsetWidth;
	document.getElementById("height").value = document.getElementById("workspace").offsetHeight;

}

function document_colour_area(){

	document_colourarea = basic_div_shape();
	document_colourarea.id="documentcolourarea";

	document_colourarea.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Background colour</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"document_colour\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(document_colourarea);

	document.getElementById("document_colour").value = document.getElementById("workspace").style.backgroundColor.substr(1,6);

}

function target_hit_feedback(){

	targethit = basic_div_shape();
	targethit.id="targethit";
		
	targethit.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Feedback if target hit</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"target_hit\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(targethit);

	document.getElementById("target_hit").value = item_drag_management.currently_selected_item.getAttribute("target_hit")!=null ? item_drag_management.currently_selected_item.getAttribute("target_hit") : "Insert feedback for when the target is hit";

}

function font_area(){

	fontarea = basic_div_shape();

	fontarea.id = "fontarea";

	string = "";

	for(x=0;x<fonts.length;x++){

		string += "<option value=\"" + fonts[x] + "\" ";

		if(item_drag_management.currently_selected_item.style.fontFamily==fonts[x]){

			string += " selected=\"true\" ";

		}


		string += ">" + fonts[x] + "</option>";

	}

	fontarea.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Font face</div><div class=\"wizardhundred\"><select id=\"font_face\">" + string + "</select></div></div>";

	document.getElementById("wizardcontentright").appendChild(fontarea);

}

function button_page_action(){

	buttonpagearea = basic_div_shape();
	buttonpagearea.id = "buttonpagearea";

	string = "";

	for(x=0;x<document.getElementById("pages").childNodes.length;x++){

		string += "<option value=\"page_" + (x+1) + "\" ";

		if(item_drag_management.currently_selected_item.getAttribute("gotopage")==("page_" + (x+1))){

			string += " selected=\"true\" ";

		}


		string += ">Page " + (x+1) + "</option>";

	}

	if(item_drag_management.currently_selected_item.getAttribute('action_edit')==null){

		string += "<option value=\"null\" ";

		if(item_drag_management.currently_selected_item.getAttribute("gotopage")=="null"){

			string += " selected=\"true\" ";

		}


		string += ">No Page</option>";		

	}

	buttonpagearea.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Goto page</div><div class=\"wizardhundred\"><select id=\"goto_page\">" + string + "</select></div></div>";

	document.getElementById("wizardcontentright").appendChild(buttonpagearea);
	
}

function picture_choose(){

	picture_choice_area = document.createElement("div");
	picture_choice_area.id="picture_choice";
	picture_choice_area.style.styleFloat="left";
	picture_choice_area.style.position="relative";
		
	picture_choice_area.innerHTML = "<div class=\"wizardarea\" ><div class=\"wizardhundred\">Choose a picture</div><div id=\"picturechooselist\"></div>";

	document.getElementById("wizardcontentleft").appendChild(picture_choice_area);

	temp = document.getElementById("images").innerHTML.split("</P>");

	document.getElementById("picturechooselist").innerHTML = temp[1];

}

function target_miss_feedback(){

	targetmiss = basic_div_shape();
	targetmiss.id="targetmiss";
		
	targetmiss.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Feedback if target missed</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"target_miss\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(targetmiss);

	document.getElementById("target_miss").value = item_drag_management.currently_selected_item.getAttribute("target_miss")!=null ? item_drag_management.currently_selected_item.getAttribute("target_miss") : "Insert feedback for when the target is missed";
}

function font_size(){

	fontsizearea = basic_div_shape();
	fontsizearea.id="fontsizearea";
		
	fontsizearea.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Font size</div><div class=\"wizardhundred\"><input size=\"20\"type=\"text\" id=\"font_size\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(fontsizearea);

	document.getElementById("font_size").value = pixel_strip(item_drag_management.currently_selected_item.style.fontSize);

}

function fontcolour_area(){

	fontcolourarea = basic_div_shape();
	fontcolourarea.id="fontcolourarea";
		
	fontcolourarea.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Font colour</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"font_colour\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(fontcolourarea);

	document.getElementById("font_colour").value = item_drag_management.currently_selected_item.style.color.length==7 ? item_drag_management.currently_selected_item.style.color.substr(1,7) : item_drag_management.currently_selected_item.style.color.substr(1,1) + item_drag_management.currently_selected_item.style.color.substr(1,1) + item_drag_management.currently_selected_item.style.color.substr(2,1) + item_drag_management.currently_selected_item.style.color.substr(2,1) + item_drag_management.currently_selected_item.style.color.substr(3,1) + item_drag_management.currently_selected_item.style.color.substr(3,1);

}

function score_value(){

	scorevalue = basic_div_shape();
	scorevalue.id="scorevaluearea";
		
	scorevalue.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Score</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"score_value_set\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(scorevalue);

	document.getElementById("score_value_set").value = item_drag_management.currently_selected_item.getAttribute("score_value");

}

function url_area(){

	urlarea = basic_div_shape();
	urlarea.id="url_area";
		
	urlarea.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">URL</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"url_set\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(urlarea);

	document.getElementById("url_set").value = item_drag_management.currently_selected_item.getAttribute("url") !=null ?item_drag_management.currently_selected_item.getAttribute("url") : "Enter the URL here";

}

function sms_number(){

	smsnumber = basic_div_shape();
	smsnumber.id="smsnumber";
		
	smsnumber.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Number</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"sms_number_set\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(smsnumber);

	document.getElementById("sms_number_set").value = item_drag_management.currently_selected_item.getAttribute("sms_number") !=null ?item_drag_management.currently_selected_item.getAttribute("sms_number") : "Enter the phone number here";

}

function sms_message(){

	smsmessage = basic_div_shape();
	smsmessage.id="smsmessage";
		
	smsmessage.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Message</div><div class=\"wizardhundred\"><textarea rows=\10\" cols=\"16\" id=\"sms_message_set\" /></textarea></div></div>";

	document.getElementById("wizardcontentright").appendChild(smsmessage);

	document.getElementById("sms_message_set").innerHTML = item_drag_management.currently_selected_item.getAttribute("sms_message") !=null ?item_drag_management.currently_selected_item.getAttribute("sms_message") : "Enter the message here";
}

function buttoncode_area(){

	buttoncode = basic_div_shape();
	buttoncode.id="buttoncodearea";
		
	buttoncode.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Code for button</div><div class=\"wizardhundred\"><textarea rows=\"4\" columns=\"10\" id=\"button_code\" /></textarea></div></div>";

	document.getElementById("wizardcontentright").appendChild(buttoncode);

	if(item_drag_management.currently_selected_item.getAttribute("code")!=null){

		document.getElementById("button_code").value = item_drag_management.currently_selected_item.getAttribute("code").indexOf("Type in your code here") == -1 ? item_drag_management.currently_selected_item.getAttribute("code") : "Type in your code here. End each line with a semi-colon - ';'.";

	}else{

		document.getElementById("button_code").value = "Type in your code here. End each line with a semi-colon - ';'.";

	}

}


function word_fill(){

	wordfill = basic_div_shape();
	wordfill.id="wordfill";
		
	wordfill.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Correct Answer</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"correct_answer\" /></div><div class=\"wizardhundred\">Correct Feedback</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"correct_feedback\" /></div><div class=\"wizardhundred\">Incorrect feedback</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"incorrect_feedback\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(wordfill);

	document.getElementById("correct_answer").value = item_drag_management.currently_selected_item.getAttribute("answer");

	document.getElementById("correct_feedback").value = item_drag_management.currently_selected_item.getAttribute("correct");

	document.getElementById("incorrect_feedback").value = item_drag_management.currently_selected_item.getAttribute("incorrect");


}

function dragdrop(){

	picture_choice_area = document.createElement("div");
	picture_choice_area.id="picture_choice";
	picture_choice_area.style.styleFloat="left";
	picture_choice_area.style.position="relative";
		
	picture_choice_area.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Choose a picture</div><div id=\"hotspotlist\"></div>";

	document.getElementById("wizardcontentleft").appendChild(picture_choice_area);

	temp = document.getElementById("images").innerHTML.split("</P>");

	document.getElementById("hotspotlist").innerHTML = temp[1];

}

function page_code(){

	page_code = basic_div_shape();
	page_code.id="page_code";
		
	page_code.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Page start code</div><div class=\"wizardhundred\"><textarea rows=\"6\" id=\"page_enter\"></textarea></div><div class=\"wizardhundred\">Page end code</div><div class=\"wizardhundred\"><textarea rows=\"6\" id=\"page_leave\"></textarea></div></div>";

	document.getElementById("wizardcontentleft").appendChild(page_code);

	document.getElementById("page_enter").value = page_drag_management.current_page.getAttribute("page_enter")!=null ? page_drag_management.current_page.getAttribute("page_enter") : "Code to run when page starts";

	document.getElementById("page_leave").value = page_drag_management.current_page.getAttribute("page_leave")!=null ? page_drag_management.current_page.getAttribute("page_leave") : "Code to run when page exits";

}

function refresh_image_file(){

	if(setup_ajax()!=false){

		url = "php/filehandling/image_list.php";
		xmlHttp.open("post",url,true);
		xmlHttp.onreadystatechange=image_upload_refresh;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttp.send('data=null'); 

	}


}

function image_upload_refresh(){

	if(xmlHttp.readyState==4){ 

		if(xmlHttp.responseText!=""){
			
			document.getElementById("images").innerHTML = xmlHttp.responseText;

		}
	}

}
		
function upload_check_timer(){

	if(window["upload_iframe"].document.body.innerHTML=="File uploaded"){

		alert("file uploaded");
		clearInterval(upload_interval);	
		refresh_image_file();

	}else if(window["upload_iframe"].document.body.innerHTML=="There was an error uploading the file, please try again!"){

		alert("There was an error uploading the file, please try again");
		clearInterval(upload_interval);	

	}

}

var upload_interval = 0;

function upload_check(){

	upload_interval = setInterval("upload_check_timer()",1000);	

}

function upload_area(){

	upload = basic_div_shape();
	upload.id="upload";
		
	upload.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Image upload</div><div class=\"wizardhundred\"><iframe name=\"upload_iframe\" width=0 height=0 style=\"display:none\"></iframe><form action=\"php/filehandling/image_upload.php\" method=\"post\" target=\"upload_iframe\" enctype=\"multipart/form-data\" ><input name=\"upload_file\" type=\"file\" /><input onclick=\"upload_check()\" type=\"submit\" value=\"Upload file\" /></form></div></div>";

	document.getElementById("wizardcontentleft").appendChild(upload);

}

function apply_button(){

	apply = basic_button_shape(100);
	apply.id="applybutton";	

	apply.innerHTML = "<div id=\"wizardbutton\" onmousedown=\"apply_changes(event)\">Apply</div>";

	if(document.getElementById("wizardcontentright").childNodes.length==0){

		apply.style.width = "70px";

		document.getElementById("wizardcontentleft").appendChild(apply);

	}else{

		document.getElementById("wizardcontentright").appendChild(apply);

	}


}

function cancel_button(){

	cancel = basic_button_shape(100);
	cancel.id="cancelbutton";

	cancel.innerHTML = "<div id=\"wizardbutton\" onmousedown=\"wizard_close()\">Cancel</div>";

	if(document.getElementById("wizardcontentright").childNodes.length==0){

		cancel.style.width = "70px";

		document.getElementById("wizardcontentleft").appendChild(cancel);

	}else{

		document.getElementById("wizardcontentright").appendChild(cancel);

	}

}

function ok_button(){

	ok = basic_button_shape(100);
	ok.id="okbutton";	

	ok.innerHTML = "<div id=\"wizardbutton\" onmousedown=\"wizard_close()\">Ok</div>";

	if(document.getElementById("wizardcontentleft").childNodes[1].id=="applybutton"){

		ok.style.width="10px";

		document.getElementById("wizardcontentleft").appendChild(ok);

	}else{

		document.getElementById("wizardcontentright").appendChild(ok);

	}

}

function save_button(){

	save = basic_button_shape(100);
	save.id="okbutton";	

	save.innerHTML = "<div id=\"wizardbutton\" onmousedown=\"save_file(true)\">Save</div>";

	if(document.getElementById("wizardcontentleft").childNodes[1].id=="applybutton"){

		save.style.width="10px";

		document.getElementById("wizardcontentleft").appendChild(save);

	}else{

		document.getElementById("wizardcontentright").appendChild(save);

	}

}

function backcolour_area(){

	backcolourarea = basic_div_shape();
	backcolourarea.id="backcolourarea";
		
	backcolourarea.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Background colour</div><div class=\"wizardhundred\"><input size=\"20\" style=\"display:inline; float:left; position:relative;\" type=\"text\" id=\"back_colour\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(backcolourarea);

	document.getElementById("back_colour").value = item_drag_management.currently_selected_item.style.backgroundColor.length==7 ? item_drag_management.currently_selected_item.style.backgroundColor.substr(1,7) : item_drag_management.currently_selected_item.style.backgroundColor.substr(1,1) + item_drag_management.currently_selected_item.style.backgroundColor.substr(1,1) + item_drag_management.currently_selected_item.style.backgroundColor.substr(2,1) + item_drag_management.currently_selected_item.style.backgroundColor.substr(2,1) + item_drag_management.currently_selected_item.style.backgroundColor.substr(3,1) + item_drag_management.currently_selected_item.style.backgroundColor.substr(3,1);

}

function button_action(){

	buttonaction = basic_div_shape();
	buttonaction.id="buttonaction";
		
	buttonaction.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Button action</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"buttonactionvalue\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(buttonaction);
	
	document.getElementById("buttonactionvalue").value = item_drag_management.currently_selected_item.getAttribute("action") ? item_drag_management.currently_selected_item.getAttribute("action") : "";

	if(item_drag_management.currently_selected_item.getAttribute("action_edit")=="false"){

		document.getElementById("buttonactionvalue").disabled = true;

	}

}


function flashcards_words(){
	
	flashcards = basic_div_shape();
	flashcards.id="flashcardswords";
		
	flashcards.innerHTML = "<div class=\"wizardarea\"><div class=\"wizardhundred\">Flashcard prompt</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"flashcardprompt\" /></div><div class=\"wizardhundred\">Flashcard answer</div><div class=\"wizardhundred\"><input size=\"20\" type=\"text\" id=\"flashcardanswer\" /></div></div>";

	document.getElementById("wizardcontentright").appendChild(flashcards);

	document.getElementById("flashcardprompt").value = item_drag_management.currently_selected_item.getAttribute("flashcardprompt")!=null ? item_drag_management.currently_selected_item.getAttribute("flashcardprompt") : "Insert prompt here";

	document.getElementById("flashcardanswer").value = item_drag_management.currently_selected_item.getAttribute("flashcardanswer")!=null ? item_drag_management.currently_selected_item.getAttribute("flashcardanswer") : "Insert answer here";

}


function show_wizard_publish(download_button, type){

	if(!wizard_settings.displayed){

		wizard_settings.displayed = true;

		files = file_system.file_name.split("\\");

		filename = files[files.length-1].substr(0,files[files.length-1].length-4);

		if(compile_structure.download == true){

			document.getElementById("titlebar").innerHTML = "Download file " + file_system.file_name;
			document.getElementById("wizardmenu").style.width = 200;
	
			document.getElementById("wizardmenu").style.height = 100;
			document.getElementById("wizardmenu").style.display = "block";

			download_button = true;
			compile_structure.download = false;
	

		}else{

			document.getElementById("titlebar").innerHTML = "Published file " + file_system.file_name;
			document.getElementById("wizardmenu").style.width = document.getElementById("workspace").offsetWidth + 30;

			document.getElementById("wizardmenu").style.height = document.getElementById("workspace").offsetHeight + 110;
			document.getElementById("wizardmenu").style.display = "block";

			swf_file_area = document.createElement("div");
			swf_file_area.style.margin = "30px 14px 30px 14px";

			swf_file_area.innerHTML = "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,0,0\" width=\"" + document.getElementById("workspace").offsetWidth + "\" height=\"" + document.getElementById("workspace").offsetHeight + "\" id=\"swf_host\" align=\"middle\"><param name=\"allowScriptAccess\" value=\"sameDomain\" /><param name=\"movie\" value=\"php/ming/" + filename + ".swf?random=" + Math.floor(Math.random()*11) + "\" /><param name=\"quality\" value=\"high\" /><param name=\"bgcolor\" value=\"#ffffff\" /><embed src=\"http://localhost/ted/php/ming/" + filename + ".swf?random=" + Math.floor(Math.random()*11) + "\" quality=\"high\" bgcolor=\"#ffffff\" width=\"" + document.getElementById
("workspace").offsetWidth + "\" height=\"" + document.getElementById("workspace").offsetHeight + "\" name=\"swf_host\" align=\"middle\" allowScriptAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />";

			document.getElementById("wizardcontentleft").appendChild(swf_file_area);

		}

		if(download_button){
	
        		download = basic_button_shape(100);
		
			download.id="downloadbutton";	

			if(type=="swf"){

				download.innerHTML = "<div id=\"wizardbutton\" onmousedown=\"window.location = 'http://localhost/ted/download.php?file=php/ming/" + filename + ".swf'\">Download</div>";

			}else if(type=="zip"){

				download.innerHTML = "<div id=\"wizardbutton\" onmousedown=\"window.location = 'http://localhost/ted/download.php?file=zip_folder/" + filename.replace(".","") + "ted.zip'\">Download</div>";

			}

			download.style.width="50px";

			document.getElementById("wizardcontentleft").appendChild(download);
	

		}	

        ok = basic_button_shape(100);

		ok.id="okbutton";	

		ok.innerHTML = "<div id=\"wizardbutton\" onmousedown=\"wizard_close()\">Ok</div>";

		ok.style.width="10px";

		document.getElementById("wizardcontentleft").appendChild(ok);

	}else{

		alert("Please close the window that is already open");
	
	}

}


function show_wizard_publish_gif(){

	if(!wizard_settings.displayed){

		wizard_settings.displayed = true;

		files = file_system.file_name.split("\\");

		filename = files[files.length-1].substr(0,files[files.length-1].length-4);

		document.getElementById("titlebar").innerHTML = "Creating GIF - " + file_system.file_name;
		document.getElementById("wizardmenu").style.width = document.getElementById("workspace").offsetWidth + 30;

		document.getElementById("wizardmenu").style.height = document.getElementById("workspace").offsetHeight + 110;
		document.getElementById("wizardmenu").style.display = "block";

		gif_control = document.createElement("div");
		gif_control.style.margin = "30px 5px 30px 5px";

		gif_control.innerHTML = "<p style=\"width:100%\">How long would you like each slide to appear for?</p><form action=\"\"><input type=\"text\" name=\"frame_rate\" id=\"frame_rate\" /></form><p id=\"gif_results\" style=\"width:100%\"></p>";

		document.getElementById("wizardcontentleft").appendChild(gif_control);

		ok = basic_button_shape(100);

		ok.id="okbutton";	

		ok.innerHTML = "<div id=\"wizardbutton\" onmousedown=\"publish('gif')\">Start</div>";

		ok.style.width="10px";

		document.getElementById("wizardcontentleft").appendChild(ok);


	}else{

		alert("Please close the window that is already open");
	
	}

}

function show_wizard(style_object){

	if(!wizard_settings.displayed){

		wizard_settings.displayed = true;

		document.getElementById("titlebar").innerHTML = wizard_settings[style_object + "title"];
		document.getElementById("wizardmenu").style.width = wizard_settings[style_object + "width"];
		document.getElementById("wizardmenu").style.height = wizard_settings[style_object + "height"];
		document.getElementById("wizardmenu").style.display = "block";

		if(item_drag_management.currently_selected_item!=undefined){

			button_mod = item_drag_management.currently_selected_item.getAttribute('action_edit');

		}else{

			button_mod = null;

		}


		if(button_mod=="goto"){

			functions_to_call = Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,button_page_action,apply_button,ok_button);

		}else if(button_mod=="false"){

			functions_to_call = Array(shape_area,colour_area,backcolour_area,fontcolour_area,font_area,font_size,button_action,apply_button,ok_button);

		}else{

			functions_to_call = wizard_settings[style_object + "functions"].slice();

		}


		while(function_name = functions_to_call.shift()){

			function_name();

		}	

	}else{

		alert("Please close the window that is already open");
	
	}

}


function show_wizard_about_ted(){

	wizard_settings.displayed = true;

	document.getElementById("titlebar").innerHTML = "About Ted";
	document.getElementById("wizardmenu").style.width = 295;
	
	document.getElementById("wizardmenu").style.height = 100;
	document.getElementById("wizardmenu").style.display = "block";

	about_ted = basic_div_shape();
	about_ted.id="about_ted";
		
	about_ted.innerHTML = "<div class=\"wizardarea\" style=\"width:285px;\"><center><img src=\"images/ted_logo.gif\" /><br><b>TED version 0.8<br>Copyright 2009 Pat Lockley<br>With thanks to Andrew Burgin and Sarah Bloor</b></center></div>";

	document.getElementById("wizardcontentleft").appendChild(about_ted);

}

function apply_changes(){
	
	for(x=0;x<document.getElementById("wizardcontentleft").childNodes.length;x++){

		if(document.getElementById("wizardcontentleft").childNodes[x].id=="shape_area_holder"){

			item_drag_management.currently_selected_item.style.left = is_integer(Number(document.getElementById("x").value)) ? Number(document.getElementById("workspace").offsetLeft) + Number(document.getElementById("x").value) : alert("Please make the X value a round number");
			item_drag_management.currently_selected_item.style.top = is_integer(Number(document.getElementById("y").value)) ? Number(document.getElementById("workspace").offsetTop) + Number(document.getElementById("y").value) : alert("Please make the Y value a round number");
			item_drag_management.currently_selected_item.style.width = is_integer(document.getElementById("width").value) ? document.getElementById("width").value : alert("Please make the width value a round number");
			item_drag_management.currently_selected_item.style.height = is_integer(document.getElementById("height").value) ? document.getElementById("height").value : alert("Please make the height value a round number");

		}

		if(document.getElementById("wizardcontentleft").childNodes[x].id=="documentarea"){

			orig_width = document.getElementById("workspace").offsetWidth;

			orig_height = document.getElementById("workspace").offsetHeight;

			orig_left = document.getElementById("workspace").offsetLeft;

			orig_top = document.getElementById("workspace").offsetTop;

			document.getElementById("workspace").style.width = is_integer(document.getElementById("width").value) ? document.getElementById("width").value : alert("Not a valid width") ;

			document.getElementById("workspace").style.height = is_integer(document.getElementById("height").value) ? document.getElementById("height").value : alert("Not a valid height") ;

			document.getElementById("workspace").style.left = (orig_left - ((document.getElementById("width").value - orig_width)/2));
;
			document.getElementById("workspace").style.top = (orig_top - ((document.getElementById("height").value - orig_height)/2));

		}

		if(document.getElementById("wizardcontentleft").childNodes[x].id=="page_code"){

			page_drag_management.current_page.setAttribute("page_enter",document.getElementById("page_enter").value);
			page_drag_management.current_page.setAttribute("page_leave",document.getElementById("page_leave").value);

		}
		

	}

	for(x=0;x<document.getElementById("wizardcontentright").childNodes.length;x++){

		if(document.getElementById("wizardcontentright").childNodes[x].id=="documentcolourarea"){

			if(is_hex(document.getElementById("document_colour").value.substr(1,6))){

				document.getElementById("workspace").style.backgroundColor = "#" + document.getElementById("document_colour").value;

				for(i=0;i<document.getElementById("pages").childNodes.length;i++){

					document.getElementById("pages").childNodes[i].childNodes[1].style.backgroundColor = "#" + document.getElementById("document_colour").value;					

				}

			}else{
	
				alert("Sorry this is not a valid colour entry");

			}


		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="fontarea"){

			item_drag_management.currently_selected_item.style.fontFamily = document.getElementById("font_face").value;

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="fontcolourarea"){

			if(is_hex(document.getElementById("font_colour").value.substr(1,6))){

				item_drag_management.currently_selected_item.style.color = document.getElementById("font_colour").value;

			}else{
	
				alert("Sorry this is not a valid colour entry");

			}
			

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="backcolourarea"){

			if(is_hex(document.getElementById("back_colour").value.substr(1,6))){

				item_drag_management.currently_selected_item.style.backgroundColor = document.getElementById("back_colour").value;

			}else{
	
				alert("Sorry this is not a valid colour entry");

			}

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="fontsizearea"){

			if(is_integer(document.getElementById("font_size").value)){

				item_drag_management.currently_selected_item.style.fontSize = document.getElementById("font_size").value;

			}else{

				alert("Please make sure that the text size is a whole number");

			}

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="buttonaction"){

			parsed = document.getElementById("buttonactionvalue").value;

			item_drag_management.currently_selected_item.setAttribute("action",parsed);

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="flashcardswords"){

			f_prompt = document.getElementById("flashcardprompt").value;
			
			f_answer = document.getElementById("flashcardanswer").value;

			item_drag_management.currently_selected_item.setAttribute("flashcardprompt",f_prompt);

			item_drag_management.currently_selected_item.setAttribute("flashcardanswer",f_answer);

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="wordfill"){

			answer = document.getElementById("correct_answer").value;

			correct = document.getElementById("correct_feedback").value;

			incorrect = document.getElementById("incorrect_feedback").value;

			item_drag_management.currently_selected_item.setAttribute("answer",answer);

			item_drag_management.currently_selected_item.setAttribute("correct",correct);

			item_drag_management.currently_selected_item.setAttribute("incorrect",incorrect);

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="targethit"){

			item_drag_management.currently_selected_item.setAttribute("target_hit",document.getElementById("target_hit").value);

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="targetmiss"){

			item_drag_management.currently_selected_item.setAttribute("target_miss",document.getElementById("target_miss").value);

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="buttonpagearea"){

			item_drag_management.currently_selected_item.setAttribute("gotopage",document.getElementById("goto_page").value);

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="buttoncodearea"){

			item_drag_management.currently_selected_item.setAttribute("code",document.getElementById("button_code").value);

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="smsnumber"){

			item_drag_management.currently_selected_item.setAttribute("sms_number",document.getElementById("sms_number_set").value);
		
		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="smsmessage"){

			item_drag_management.currently_selected_item.setAttribute("sms_message",document.getElementById("sms_message_set").value);

		}else if(document.getElementById("wizardcontentright").childNodes[x].id=="url_area"){

			item_drag_management.currently_selected_item.setAttribute("url",document.getElementById("url_set").value);

		}

		
	}

	set_page_innerhtml();

}

function wizard_being_dragged(ev){
	
	ev = ev || window.event;   
   	mousePos = mouseCoords(ev);

	document.getElementById("wizardmenu").style.left = mousePos.x - offset_x;
	document.getElementById("wizardmenu").style.top = mousePos.y - offset_y;

}

function wizard_dropped(event){
	
	document.onmouseup = onmouseup;
	document.onmousemove = onmousemove;

}

function drag_wizard(ev){

	ev = ev || window.event;   
   	firstmousePos = mouseCoords(ev);	

	offset_x = firstmousePos.x - document.getElementById("wizardmenu").offsetLeft;
	offset_y = firstmousePos.y - document.getElementById("wizardmenu").offsetTop;
 
	document.onmousemove = wizard_being_dragged;
	document.onmouseup = wizard_dropped;

}