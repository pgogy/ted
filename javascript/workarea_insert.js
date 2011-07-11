function insert_section(type){

	if(document.getElementById("pages").childNodes.length!=0){

		if(page_drag_management.current_page.getAttribute("interaction")!=true){

			document.onclick = clickone;

			document.onmousemove = draw;

			shapeareadraw.drawing_mode = true;

			document.body.style.cursor = "crosshair";

		}else{

			if(page_drag_management.current_page.childNodes.length==0){

				document.onclick = clickone;

				document.onmousemove = draw;

				shapeareadraw.drawing_mode = true;
	
				document.body.style.cursor = "crosshair";

			}else{

				alert("This page already has an interaction.");

			}

		}

	}else{

		alert("You need to create a new document before you can add content");

	}

}


function set_up_node(mouse,rmouse,width,height,bgcolor,color,fontsize,fontfamily,position,left,top){

	new_node = document.createElement('div');

	new_node.setAttribute('mouse', mouse);

	new_node.setAttribute('rmouse', rmouse);

	new_node.style.width = width;	

	new_node.style.height = height;

	new_node.style.backgroundColor = bgcolor;

	new_node.style.border = "1px #ddd dashed";

	new_node.style.color = color;	

	new_node.style.fontSize = fontsize;

	new_node.style.fontFamily = fontfamily;

	new_node.style.position = position;

	if(get_max_z_index()==1){

		new_node.style.zIndex = 1;

	}else{
		
		new_node.style.zIndex = (get_max_z_index()-1);		

	}

	new_node.style.left = left;

	new_node.style.top = top;

	return new_node;

}

function insert_sms_page(){

	leftpos = document.getElementById("temp_item").offsetLeft; 
	toppos = document.getElementById("temp_item").offsetTop;

	width = document.getElementById("temp_item").offsetWidth;
	height = document.getElementById("temp_item").offsetHeight;
	
	new_node = set_up_node("drag","sms",width, height,"#fff", "#000","14px","sans-serif","absolute", leftpos, toppos);

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Please text to the following number</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;

	set_page_innerhtml();

}


function insert_url_page(){

	leftpos = document.getElementById("temp_item").offsetLeft; 
	toppos = document.getElementById("temp_item").offsetTop;

	width = document.getElementById("temp_item").offsetWidth;
	height = document.getElementById("temp_item").offsetHeight;
	
	new_node = set_up_node("drag","url",width, height,"#fff", "#000","14px","sans-serif","absolute", leftpos, toppos);

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Please now access this URL</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;

	set_page_innerhtml();

}

function insert_text_area_done(){

	leftpos = document.getElementById("temp_item").offsetLeft; 
	toppos = document.getElementById("temp_item").offsetTop;

	width = document.getElementById("temp_item").offsetWidth;
	height = document.getElementById("temp_item").offsetHeight;
	
	new_node = set_up_node("drag","textarea",width, height,"#fff", "#000","14px","sans-serif","absolute", leftpos, toppos);

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Double - Click here to type</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;

	set_page_innerhtml();

}

function insert_rectangle(){

	leftpos = document.getElementById("temp_item").offsetLeft; 
	toppos = document.getElementById("temp_item").offsetTop;

	width = document.getElementById("temp_item").offsetWidth;
	height = document.getElementById("temp_item").offsetHeight;

	new_node = set_up_node("drag","rectangle",width,height,"#000",null,null,null,"absolute",leftpos,toppos);

	set_tooltip(new_node);

	document.getElementById("workarea").appendChild(new_node);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	new_node.id = "rectangle";

	shapeareadraw.drawing_mode = false;

	set_page_innerhtml();

}


var next_page_button = false;

function insert_button(nextpage){

	if(nextpage=="nextpage"){

		next_page_button = "next";

	}else if(nextpage=="gotopage"){

		next_page_button = "goto";

	}

	document.onclick = clickone;

	document.onmousemove = draw;

	shapeareadraw.drawing_mode = true;

	document.body.style.cursor = "crosshair";

}

function insert_score_button(){

	document.onclick = clickone;

	document.onmousemove = draw;

	shapeareadraw.drawing_mode = true;

	document.body.style.cursor = "crosshair";

	clickmenu.endfunction = insert_score_button_done;

}

function insert_score_button_done(){

	
	leftpos = document.getElementById("temp_item").offsetLeft; 
	toppos = document.getElementById("temp_item").offsetTop;

	width = document.getElementById("temp_item").offsetWidth;
	height = document.getElementById("temp_item").offsetHeight;

	new_node = set_up_node("drag","scorebutton", width, height,"#000","#FFF","14px","sans-serif","absolute",leftpos,toppos);
		
	next_page_button = false;

	new_node.setAttribute('code',"Type in your code here. End each line with a semi-colon - ';'.");

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"scorebutton_textfield_doubleclick(this)\"><span>Double click to change</span><img src=\"images/tick.gif\" onclick=\"set_score_button(this)\" /></p><form style=\"display:none\"><textarea onfocus=\"scorebutton_textfield_focus(this)\" onblur=\"scorebutton_textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	new_node.setAttribute("score_value",1);

	document.getElementById("workarea").appendChild(new_node);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;	

	set_page_innerhtml();

}


function insert_button_done(){

	leftpos = document.getElementById("temp_item").offsetLeft; 
	toppos = document.getElementById("temp_item").offsetTop;

	width = document.getElementById("temp_item").offsetWidth;
	height = document.getElementById("temp_item").offsetHeight;

	new_node = set_up_node("drag","button", width, height,"#000","#FFF","14px","sans-serif","absolute",leftpos,toppos);

	if(next_page_button=="next"){

		new_node.setAttribute('action', 'next page');		

		new_node.setAttribute('action_edit', 'false');		

		next_page_button = false;

	}else if(next_page_button=="goto"){	

		new_node.setAttribute('action_edit', 'goto');		

		next_page_button = false;

	}else{

		new_node.setAttribute('code',"Type in your code here. End each line with a semi-colon - ';'.");

	}

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Double click to change</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;	

	set_page_innerhtml();

}

function insert_flashcard_done(){

	new_flashcard = set_up_node("drag","flashcard",document.getElementById("temp_item").offsetWidth, document.getElementById("temp_item").offsetHeight - 30 ,"#0F0","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop);

	new_flashcard.setAttribute('duplicate', 'false');

	new_flashcard.innerHTML = "<p class=\"workblock\">Right - Click here to set up the flashcard</p>";

	document.getElementById("workarea").appendChild(new_flashcard);

	set_tooltip(new_flashcard);

	new_flashcard_button = set_up_node("drag","flashbutton",document.getElementById("temp_item").offsetWidth, 25 ,"#000","#FFF","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + (document.getElementById("temp_item").offsetHeight - 25));

	new_flashcard_button.setAttribute('duplicate', 'false');

	new_flashcard_button.setAttribute('action_edit', 'false');

	new_flashcard_button.setAttribute('action', 'Flashcard reveal');

	set_tooltip(new_flashcard_button);

	new_flashcard_button.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Double click to change</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_flashcard_button);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;		

	new_flashcard_button.id = "flashcardbutton";

	new_flashcard.setAttribute('linked', "flashcardbutton");

	new_flashcard.id = "flashcard";

	new_flashcard_button.setAttribute('linked', "flashcard");

	shapeareadraw.drawing_mode = false;	

	page_drag_management.current_page.setAttribute("interaction",true);

	new_flashcard.setAttribute("interaction",true);

	set_page_innerhtml();	

}

function insert_drag_drop(){

	new_node = set_up_node("drag","targethotspot",100,20,"#aaa","#000","14px","sans-serif","absolute",document.getElementById("workspace").offsetLeft + 10,document.getElementById("workspace").offsetTop + 10);

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\">hotspot</p>";

	document.getElementById("workarea").appendChild(new_node);

	shapeareadraw.drawing_mode = false;

	new_node.setAttribute('duplicate', 'false');

	new_node.setAttribute('linked', "label,feedback,U,D,L,R,C,A");

	new_node.id="target";	

}

function insert_drag_area(){

	new_node = set_up_node("drag","label",100,20,"#fff","#000","14px","sans-serif","absolute",document.getElementById("workspace").offsetLeft + 10,document.getElementById("workspace").offsetTop + 50);

	new_node.style.border = "#000 1px solid"	

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Double - Click here to change label</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:20px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node);

	new_node.setAttribute('duplicate', 'false');

	new_node.id="label";

	new_node.setAttribute('linked', "target,feedback,U,D,L,R,C,A");

}

function insert_drag_drop_bar(){

	start_x = document.getElementById("workspace").offsetLeft + 5;

	start_y = document.getElementById("workspace").offsetTop + document.getElementById("workspace").offsetHeight - 35;

	button_width = ((document.getElementById("workspace").offsetWidth - 10)/8) -5;

	insert_picture_scroll_button("Move up", "U", start_x, start_y, button_width-5, 20, "Drag");
	insert_picture_scroll_button("Move down", "D", start_x + button_width, start_y, button_width-5, 20, "Drag");
	insert_picture_scroll_button("Move left", "L", start_x + (button_width*2), start_y, button_width-5, 20, "Drag");
	insert_picture_scroll_button("Move right", "R", start_x + (button_width*3), start_y, button_width-5, 20, "Drag");	
	insert_picture_scroll_button("Check", "C", start_x + (button_width*4), start_y, button_width-5, 20, "Drag");
	insert_picture_scroll_button("Next_Scoll_Page", "N", start_x + (button_width*5), start_y, button_width-5, 20, "Drag");

	shapeareadraw.drawing_mode = false;

	set_page_innerhtml();		

	page_drag_management.current_page.setAttribute("interaction",true);

}


function insert_feedback(){

	new_node = set_up_node("drag","feedback",100,20,"#fff","#000","14px","sans-serif","absolute",document.getElementById("workspace").offsetLeft + 10,document.getElementById("workspace").offsetTop + 100);

	new_node.style.border = "#000 1px solid"	

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\">feedback area</p>";

	document.getElementById("workarea").appendChild(new_node);

	new_node.setAttribute('duplicate', 'false');

	new_node.id = "feedback";

	new_node.setAttribute('linked', "target,label,U,D,L,R,C,A");

	set_page_innerhtml();

}


function insert_word_fill_done(){

	new_word_fill_prompt = set_up_node("drag","wordfillprompt",document.getElementById("temp_item").offsetWidth, "20px" ,"#fff","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop);

	new_word_fill_prompt.setAttribute('answer', 'Type the correct answer here');

	new_word_fill_prompt.setAttribute('incorrect', 'Incorrect feedback');

	new_word_fill_prompt.setAttribute('correct', 'Correct feedback');

	new_word_fill_prompt.setAttribute('duplicate', 'false');

	new_word_fill_prompt.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Double - Click here to type</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this)\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:100px; font-size:14px;\"></textarea></form>";

	set_tooltip(new_word_fill_prompt);

	document.getElementById("workarea").appendChild(new_word_fill_prompt);

	new_word_fill_area = set_up_node("drag","wordfillarea",document.getElementById("temp_item").offsetWidth, "20px" ,"#dedede","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + 40);

	new_word_fill_area.setAttribute('duplicate', 'false');

	new_word_fill_area.innerHTML = "<p class=\"workblock\">Text Entry Area</p>";

	set_tooltip(new_word_fill_area);

	document.getElementById("workarea").appendChild(new_word_fill_area);

	new_word_fill_response = set_up_node("drag","wordfillresponse",document.getElementById("temp_item").offsetWidth, "20px","#fff","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + 70);

	new_word_fill_response.setAttribute('duplicate', 'false');

	new_word_fill_response.innerHTML = "<p class=\"workblock\">Text Entry response</p>";

	set_tooltip(new_word_fill_response);

	document.getElementById("workarea").appendChild(new_word_fill_response);

	new_word_fill_button = set_up_node("drag","button",document.getElementById("temp_item").offsetWidth, "25px" ,"#000","#FFF","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + (document.getElementById("temp_item").offsetHeight - 25));	

	new_word_fill_button.setAttribute('duplicate', 'false');

	new_word_fill_button.setAttribute('action_edit', 'false');

	new_word_fill_button.setAttribute('action', 'Check entered text');		

	new_word_fill_button.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Double click to change</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	set_tooltip(new_word_fill_button);

	document.getElementById("workarea").appendChild(new_word_fill_button);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;		

	new_word_fill_button.id = "wordfillbutton";

	new_word_fill_button.setAttribute('linked', "wordfillprompt,wordfillarea,wordfillresponse");

	new_word_fill_prompt.id = "wordfillprompt";

	new_word_fill_area.id = "wordfillarea";

	new_word_fill_response.id = "wordfillresponse";

	new_word_fill_response.setAttribute('linked', "wordfillprompt,wordfillbutton,wordfillarea");

	new_word_fill_area.setAttribute('linked', "wordfillprompt,wordfillbutton,wordfillresponse");

	new_word_fill_prompt.setAttribute('linked', "wordfillarea,wordfillbutton,wordfillresponse");

	shapeareadraw.drawing_mode = false;	

	page_drag_management.current_page.setAttribute("interaction",true);

	new_word_fill_response.setAttribute("interaction",true);

	set_page_innerhtml();

}

function insert_mcq(){

	new_node = set_up_node("drag","textarea",document.getElementById("temp_item").offsetWidth, "60px" ,"#fff","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop);

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Question area</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node);

	new_node.setAttribute("score_value",1);

	for(x=1;x<=4;x++){

		new_node2 = set_up_node("drag","scorebutton",document.getElementById("temp_item").offsetWidth, "20px" ,"#000","#FFF","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + 40 + (25*x));

		new_node2.setAttribute('code',"Type in your code here. End each line with a semi-colon - ';'.");	
	
		set_tooltip(new_node2);

		new_node2.setAttribute("score_value",1);

		new_node2.innerHTML = "<p class=\"workblock\" ondblclick=\"scorebutton_textfield_doubleclick(this)\"><span>Answer " + x + "</span><img src=\"images/tick.gif\" onclick=\"set_score_button(this)\" /></p><form style=\"display:none\"><textarea onfocus=\"scorebutton_textfield_focus(this)\" onblur=\"scorebutton_textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

		document.getElementById("workarea").appendChild(new_node2);

	}	

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;

	set_page_innerhtml();

}


function insert_stimulating(){

	new_node = set_up_node("drag","textarea",document.getElementById("temp_item").offsetWidth, "100px" ,"#fff","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop);

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Question area</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node);

	//question done


	new_node2 = set_up_node("drag","button",document.getElementById("temp_item").offsetWidth, "20px" ,"#000","#FFF","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + 180);

	new_node2.setAttribute('action', 'Stimulatingreveal');		

	new_node2.setAttribute('action_edit', 'false');
	
	set_tooltip(new_node2);

	new_node2.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Reveal</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node2);

	// Button done

	new_node3 = set_up_node("drag","stimulating",document.getElementById("temp_item").offsetWidth, "40px" ,"#FFF","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + 120);

	set_tooltip(new_node3);

	new_node3.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Response here</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node3);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;	

	set_page_innerhtml();

}



function insert_eitheror(){

	new_node = set_up_node("drag","textarea",document.getElementById("temp_item").offsetWidth, "100px" ,"#fff","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop);

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Question area</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	new_node.setAttribute("score_value",1);

	document.getElementById("workarea").appendChild(new_node);

	//question done


	new_node2 = set_up_node("drag","scorebutton", "60px", "20px" ,"#000","#FFF","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + 120);

	
	set_tooltip(new_node2);

	new_node2.setAttribute("score_value",1);

	new_node2.innerHTML = "<p class=\"workblock\" ondblclick=\"scorebutton_textfield_doubleclick(this)\"><span>Option 1</span><img src=\"images/tick.gif\" onclick=\"set_score_button(this)\" /></p><form style=\"display:none\"><textarea onfocus=\"scorebutton_textfield_focus(this)\" onblur=\"scorebutton_textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node2);


	new_node3 = set_up_node("drag","textarea", "20px", "20px" ,"#FFF","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft + 70 ,document.getElementById("temp_item").offsetTop + 120);

	new_node3.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Or</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node3);

	new_node4 = set_up_node("drag","scorebutton", "60px", "20px" ,"#000","#FFF","14px","sans-serif","absolute", document.getElementById("temp_item").offsetLeft + 100 ,document.getElementById("temp_item").offsetTop + 120);
	
	set_tooltip(new_node4);

	new_node4.innerHTML = "<p class=\"workblock\" ondblclick=\"scorebutton_textfield_doubleclick(this)\"><span>Option 2</span><img src=\"images/tick.gif\" onclick=\"set_score_button(this)\" /></p><form style=\"display:none\"><textarea onfocus=\"scorebutton_textfield_focus(this)\" onblur=\"scorebutton_textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node4);

	// Button done

	set_tooltip(new_node4);

	//

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;	

	set_page_innerhtml();

}

function insert_torfinsert(){

	new_node = set_up_node("drag","textarea",document.getElementById("temp_item").offsetWidth, "80px" ,"#fff","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop);

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Double click to change</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node);

	//question done


	new_node2 = set_up_node("drag","scorebutton", document.getElementById("temp_item").offsetWidth, "20px" ,"#000","#FFF","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + 80);

	
	set_tooltip(new_node2);

	new_node2.innerHTML = "<p class=\"workblock\" ondblclick=\"scorebutton_textfield_doubleclick(this)\"><span>Option 1</span><img src=\"images/tick.gif\" onclick=\"set_score_button(this)\" /></p><form style=\"display:none\"><textarea onfocus=\"scorebutton_textfield_focus(this)\" onblur=\"scorebutton_textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	new_node2.setAttribute("score_value",1);

	document.getElementById("workarea").appendChild(new_node2);


	new_node3 = set_up_node("drag","textarea", "100px", "20px" ,"#FFF","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + 130);

	new_node3.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Or</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	document.getElementById("workarea").appendChild(new_node3);

	new_node4 = set_up_node("drag","scorebutton", document.getElementById("temp_item").offsetWidth, "20px" ,"#000","#FFF","14px","sans-serif","absolute", document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop + 150);
	
	set_tooltip(new_node4);

	new_node4.innerHTML = "<p class=\"workblock\" ondblclick=\"scorebutton_textfield_doubleclick(this)\"><span>Option 2</span><img src=\"images/tick.gif\" onclick=\"set_score_button(this)\" /></p><form style=\"display:none\"><textarea onfocus=\"scorebutton_textfield_focus(this)\" onblur=\"scorebutton_textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	new_node4.setAttribute("score_value",1);

	document.getElementById("workarea").appendChild(new_node4);

	// Button done

	set_tooltip(new_node4);

	//

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;	

	set_page_innerhtml();

}


function insert_scorearea(){

	new_node = set_up_node("drag","textarea",document.getElementById("temp_item").offsetWidth, document.getElementById("temp_item").offsetHeight ,"#fff","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop);

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">This is a results page. Leave {{score}} and {{questions}} to represent the score and number of questions.</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";

	new_node.id = "scorearea";

	document.getElementById("workarea").appendChild(new_node);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;	

	set_page_innerhtml();

}


function insert_picturescroll(){

	if(page_drag_management.current_page.getAttribute("interaction")!=true){

		show_wizard("picture_choice");

	}else{

		alert("This page already has an interaction");

	}

}


function insert_missing_words_done(){

	new_missing_words = set_up_node("drag","missingwords",document.getElementById("temp_item").offsetWidth, document.getElementById("temp_item").offsetHeight - 30,"#fff","#000","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("temp_item").offsetTop);

	new_missing_words.setAttribute('rmouse', 'missingwords');

	new_missing_words.setAttribute('duplicate', 'false');

	new_missing_words.innerHTML = "<p class=\"workblock\" ondblclick=\"missing_textfield_doubleclick(this)\">Double - Click here to type</p><form style=\"display:none\"><textarea onfocus=\"missing_textfield_focus(this)\" onblur=\"missing_textfield_changed(event,this)\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:100px; font-size:14px;\"></textarea></form>";
	
	set_tooltip(new_missing_words);

	document.getElementById("workarea").appendChild(new_missing_words);

	new_missing_words_button = set_up_node("drag","missingwordsbutton",document.getElementById("temp_item").offsetWidth, 25,"#000","#FFF","14px","sans-serif","absolute",document.getElementById("temp_item").offsetLeft,document.getElementById("workspace").offsetTop + (document.getElementById("temp_item").offsetHeight - 25));

	new_missing_words_button.setAttribute('duplicate', 'false');

	new_missing_words_button.setAttribute('action_edit', 'false'); 

	new_missing_words_button.setAttribute('action', 'Missing word reveal');		

	new_missing_words_button.setAttribute('action_edit', 'false');

	new_missing_words_button.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">Double click to change</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + document.getElementById("temp_item").offsetHeight + "px; font-size:14px;\"></textarea></form>";
	
	set_tooltip(new_missing_words_button);

	document.getElementById("workarea").appendChild(new_missing_words_button);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;		

	new_missing_words_button.id = "missingwordsbutton";

	new_missing_words.setAttribute('linked', "missingwordsbutton");

	new_missing_words.id = "missingwords";

	new_missing_words_button.setAttribute('linked', "missingwords");

	shapeareadraw.drawing_mode = false;	

	page_drag_management.current_page.setAttribute("interaction",true);

	new_missing_words.setAttribute("interaction",true);

	set_page_innerhtml();

}


function set_tooltip(tag){

	title_string = 'Width : ' + tag.style.width + '\nHeight : ' + tag.style.height + '\nX : ';

       	if(document.getElementById("temp_item")!=null){

		 title_string += document.getElementById("temp_item").offsetLeft - document.getElementById("workspace").offsetLeft;

		 title_string += '\nY : ';

		 title_string += document.getElementById("temp_item").offsetTop - document.getElementById("workspace").offsetTop;

	}else{

		 title_string += '0 \nY : 0';	

	}
	
	tag.setAttribute('title', title_string);	


}

function draw_shape_for_picture(){

	document.onclick = clickone;

	document.onmousemove = draw;

	shapeareadraw.drawing_mode = true;

	document.body.style.cursor = "crosshair";

}

/*function insert_scale_picture(){

	image = clickmenu.insertpictureparameter;

	new_node = document.createElement('div');

	//new_node = document.createElement('img');

	//image = image.substr(site_url.length, image.length);

	//new_node.setAttribute('src', image);

	new_node.setAttribute('mouse', 'drag');

	new_node.setAttribute('rmouse', 'picture');

	new_node.setAttribute('width', document.getElementById("workspace").offsetWidth);

	new_node.setAttribute('height', document.getElementById("workspace").offsetHeight);

	new_node.style.position = "absolute";

	new_node.style.zIndex = get_max_z_index();

	if(id!=null){

		new_node.id = "picturescroll";

		new_node.setAttribute('linked', "U,D,L,R");

	}

	new_node.style.left = document.getElementById("workspace").offsetLeft;

	new_node.style.top = document.getElementById("workspace").offsetTop;

	new_node.style.backgroundColor = "#00F";

	document.getElementById("workarea").appendChild(new_node);

	if(event.srcElement.parentNode.id!="picturechooselist"){

		clickmenuhide();

	}

	set_page_innerhtml();

}*/

function insert_picture(id){

	image = clickmenu.insertpictureparameter;

	new_node = document.createElement('img');

	image = image.substr(site_url.length, image.length);

	new_node.setAttribute('src', image);

	new_node.setAttribute('mouse', 'drag');

	new_node.setAttribute('rmouse', 'picture');

	new_node.style.position = "absolute";

	new_node.style.zIndex = get_max_z_index();

	if(id!=null){

		if(id=="hotspot"){

			new_node.id = "hotspotimage";

		}else{

			new_node.id = "picturescroll";
	
			new_node.setAttribute('linked', "U,D,L,R");

		}

	}else{

		new_node.id = "picture";

	}

	new_node.style.left = document.getElementById("workspace").offsetLeft;

	new_node.style.top = document.getElementById("workspace").offsetTop;

	document.getElementById("workarea").appendChild(new_node);

	if(event.srcElement.parentNode.id!="picturechooselist"){

		clickmenuhide();

	}

	set_page_innerhtml();

}

function insert_picture_scroll_button(action, label, x, y, width, height, type){

	new_node = set_up_node("drag","button",width, height ,"#000","#fff","14px","sans-serif","absolute",x,y);

	if(type=="Picture"){

		new_node.setAttribute('linked', "U,D,L,R,picturescroll");


	}else if(type=="Drag"){
	
		new_node.setAttribute('linked', "target,label,feedback,U,D,L,R,C,A");

	}

	new_node.id = label;

	new_node.setAttribute('action', action);	

	new_node.setAttribute('duplicate', 'false');

	if(action!="Action"){

		new_node.setAttribute('action_edit', 'false');		

	}

	set_tooltip(new_node);

	new_node.innerHTML = "<p class=\"workblock\" ondblclick=\"textfield_doubleclick(this)\">" + label + "</p><form style=\"display:none\"><textarea onfocus=\"textfield_focus(this)\" onblur=\"textfield_changed(event,this);\" style=\"font-family:sans-serif; margin:0px; padding:0px; width:100%; height:" + height + "px; font-size:14px;\"></textarea></form>";

	new_node.setAttribute("interaction",true);

	document.getElementById("workarea").appendChild(new_node);

}


function insert_picture_scroll_bar(){

	start_x = document.getElementById("workspace").offsetLeft + 5;

	start_y = document.getElementById("workspace").offsetTop + document.getElementById("workspace").offsetHeight - 35;

	button_width = ((document.getElementById("workspace").offsetWidth - 10)/6) -5;

	insert_picture_scroll_button("Move up", "U", start_x, start_y, button_width-5, 20, "Picture");
	insert_picture_scroll_button("Move down", "D", start_x + button_width, start_y, button_width-5, 20, "Picture");
	insert_picture_scroll_button("Move left", "L", start_x + (button_width*2), start_y, button_width-5, 20, "Picture");
	insert_picture_scroll_button("Move right", "R", start_x + (button_width*3), start_y, button_width-5, 20, "Picture");	

	shapeareadraw.drawing_mode = false;

	set_page_innerhtml();		

	page_drag_management.current_page.setAttribute("interaction",true);

}


var temp_delete = null;


function toolbar_delete(){


	deleteitem();

}

function deleteitem(){	


	if(clickmenu.dragitemparameter==undefined){

		if(item_drag_management.currently_selected_item!=undefined){		

			clickmenu.dragitemparameter = item_drag_management.currently_selected_item;

		}

	}

	if(clickmenu.dragitemparameter!=undefined){

		if(clickmenu.dragitemparameter.getAttribute("linked")!=null){

			if(clickmenu.dragitemparameter.getAttribute("interaction")==true){

				page_drag_management.current_page.setAttribute("interaction",false);

			}

			if(clickmenu.dragitemparameter.getAttribute("linked").indexOf(",")!=-1){

				delete_length = clickmenu.dragitemparameter.getAttribute("linked").split(",");

				temp_node = null;

				for(x=0;x<delete_length.length;x++){
				
					if(document.getElementById(delete_length[x])!=null){

						if(item_drag_management.currently_selected_item.id!=document.getElementById(delete_length[x]).id){
	
							if(document.getElementById(delete_length[x]).getAttribute("interaction")==true){
						
								page_drag_management.current_page.setAttribute("interaction",false);
	
							}

							delete_node = document.getElementById(delete_length[x]);

							item_drag_management.currently_selected_item.parentNode.removeChild(delete_node);

						}

					}
	
				}

				if(item_drag_management.currently_selected_item.getAttribute("interaction")==true){

					page_drag_management.current_page.setAttribute("interaction",false);

				}

				item_drag_management.currently_selected_item.parentNode.removeChild(item_drag_management.currently_selected_item);		

			}else{

				item_drag_management.currently_selected_item.parentNode.removeChild(document.getElementById(clickmenu.dragitemparameter.getAttribute("linked")));		

				item_drag_management.currently_selected_item.parentNode.removeChild(item_drag_management.currently_selected_item);		

			}

		}else{

			item_drag_management.currently_selected_item.parentNode.removeChild(item_drag_management.currently_selected_item);		

		}

		curr_index = item_drag_management.currently_selected_item.style.zIndex;	

		for(x=0;x<document.getElementById("workarea").childNodes.length;x++){

			if(document.getElementById("workarea").childNodes[x].style!=undefined){

				if(document.getElementById("workarea").childNodes[x].style.zIndex>curr_index){

					document.getElementById("workarea").childNodes[x].style.zIndex-=1;			

				}

			}

		}

		set_page_innerhtml();

		clickmenuhide();

	}

}

function duplicateitem(){

	if(item_drag_management.currently_selected_item!=undefined){

		if(item_drag_management.currently_selected_item.getAttribute("duplicate")!="false"){

			temp = item_drag_management.currently_selected_item.parentNode;
	
			newnode = item_drag_management.currently_selected_item.cloneNode(true);

			newnode.style.left = Number(Number(String(newnode.style.left).substr(0,String(newnode.style.left).length-2)) + 10) + "px";

			newnode.style.top = Number(Number(String(newnode.style.top).substr(0,String(newnode.style.top).length-2)) + 10) + "px";

			newnode.style.zIndex = get_max_z_index() + 1;

			newnode.style.border = "none";

			temp.insertBefore(newnode);
	
			clickmenuhide();

			set_page_innerhtml();

		}

	}

}

var cloned_node = null;

function copyitem(){

	cloned_node = clickmenu.dragitemparameter.cloneNode(true);

}

function pasteitem(){

	document.getElementById("workarea").appendChild(cloned_node);

	//cloned_node = null;	

	set_page_innerhtml();

}

function zindexup(){

	curr_index = clickmenu.dragitemparameter.style.zIndex;

	for(x=0;x<document.getElementById("workarea").childNodes.length;x++){

		if(document.getElementById("workarea").childNodes[x]!=document.getElementById("workspace")){		

			if(document.getElementById("workarea").childNodes[x].style.zIndex==(curr_index+1)){

				document.getElementById("workarea").childNodes[x].style.zIndex-=1;

				clickmenu.dragitemparameter.style.zIndex+=1;

			}		

		}

	}

	set_page_innerhtml();

	clickmenuhide();

}

function zindexback(){

	min_z_index = 1;

	curr_index = clickmenu.dragitemparameter.style.zIndex;

	for(x=0;x<document.getElementById("workarea").childNodes.length;x++){

		if(document.getElementById("workarea").childNodes[x]!=document.getElementById("workspace")){		

			if(document.getElementById("workarea").childNodes[x].style.zIndex==(curr_index-1)){

				document.getElementById("workarea").childNodes[x].style.zIndex+=1;

				clickmenu.dragitemparameter.style.zIndex-=1;

			}		

		}

	}

	set_page_innerhtml();

	clickmenuhide();

}

function move_to_the_back(){

	z_list = new Array();	

	curr_index = clickmenu.dragitemparameter.style.zIndex;		

	for(x=0;x<document.getElementById("workarea").childNodes.length;x++){

		if(curr_index>document.getElementById("workarea").childNodes[x].style.zIndex){

			z_list.push(document.getElementById("workarea").childNodes[x]);			

		}

	}

	clickmenu.dragitemparameter.style.zIndex=1;

	while(x = z_list.pop()){

		x.style.zIndex+=1;		

	}

	set_page_innerhtml();

}

function move_to_the_front(){

	z_list = new Array();	

	curr_index = clickmenu.dragitemparameter.style.zIndex;		

	for(x=0;x<document.getElementById("workarea").childNodes.length;x++){

		if(curr_index<document.getElementById("workarea").childNodes[x].style.zIndex){

			z_list.push(document.getElementById("workarea").childNodes[x]);			

		}

	}

	clickmenu.dragitemparameter.style.zIndex=get_max_z_index();

	while(x = z_list.pop()){

		x.style.zIndex-=1;		

	}

	set_page_innerhtml();

}

function get_max_z_index(){

	if(document.getElementById("workarea").childNodes.length==0){

		return 1;	

	}else{

		return (document.getElementById("workarea").childNodes.length) + 1;

	}

}


function insert_scale_picture(){

	image = clickmenu.insertpictureparameter;

	new_node = document.createElement('img');

	image = image.substr(site_url.length, image.length);

	new_node.setAttribute('src', image);

	width = new_node.width;

	height = new_node.height;

	target_width = document.getElementById("workspace").offsetWidth;

	target_height =	document.getElementById("workspace").offsetHeight;
	
	if(width>height){

		x_scale = target_width / width;
		
		new_node.width *= x_scale;
		new_node.height *= x_scale;

	}else{

		y_scale = target_height / height;

		new_node.width *= y_scale;
		new_node.height *= y_scale;

	}

	new_node.style.position = "absolute";

	new_node.style.zIndex = get_max_z_index();

	new_node.setAttribute('width', new_node.width);

	new_node.setAttribute('height', new_node.height);	

	new_node.img_width = new_node.width;

	new_node.img_height = new_node.height;

	new_node.style.left = document.getElementById("workspace").offsetLeft;

	new_node.style.top = document.getElementById("workspace").offsetTop;

	new_node.setAttribute('mouse', 'drag');

	new_node.setAttribute('rmouse', 'picture');

	document.getElementById("workarea").appendChild(new_node);

	clickmenuhide();

	set_page_innerhtml();


}


function draw_shape_picture_done(){

	image = clickmenu.insertpictureparameter;

	new_node = document.createElement('img');

	image = image.substr(site_url.length, image.length);

	new_node.setAttribute('src', image);

	new_node.setAttribute('mouse', 'drag');

	new_node.setAttribute('rmouse', 'picture');

	new_node.setAttribute('width', document.getElementById("temp_item").offsetWidth);	

	new_node.setAttribute('height', document.getElementById("temp_item").offsetHeight);	

	new_node.img_width = document.getElementById("temp_item").offsetWidth;

	new_node.img_height = document.getElementById("temp_item").offsetHeight;

	new_node.style.position = "absolute";

	if(get_max_z_index()==1){

		new_node.style.zIndex = 1;

	}else{
		
		new_node.style.zIndex = (get_max_z_index()-1);		

	}

	new_node.style.left = document.getElementById("temp_item").offsetLeft;

	new_node.style.top = document.getElementById("temp_item").offsetTop;

	document.getElementById("workarea").appendChild(new_node);

	document.getElementById("workarea").removeChild(document.getElementById("temp_item"));

	shapeareadraw.drawing_mode = false;

	set_page_innerhtml();

}
