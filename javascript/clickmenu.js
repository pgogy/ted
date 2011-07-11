var clickmenu = new Object;

clickmenu.insertpicture = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_picture()'>Insert picture</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_scale_picture()'>Insert scaled picture</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='draw_shape_for_picture()'>Draw picture shape</p>";
clickmenu.insertpicturewidth = "150px";
clickmenu.insertpictureheight = "40px";
clickmenu.insertpictureparameter = null;

clickmenu.dragitem = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='copyitem()'>Copy</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexback()'>Move back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexup()'>Move forward</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_back()'>Move to the back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_front()'>Move to the front</p>";
clickmenu.dragitemwidth = "150px";
clickmenu.dragitemheight = "60px";

clickmenu.document = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='pasteitem()'>Paste</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"document\")'>Document Properties</p>";
clickmenu.documentwidth = "150px";
clickmenu.documentheight = "60px";

clickmenu.documentpage = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='add_page()'>Add</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='add_page_here()'>Add page here</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='clear_page()'>Clear</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='delete_page(\"clickmenu\")'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicate_page()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"page_code\")'>Page Code</p>";
clickmenu.documentpagewidth = "150px";
clickmenu.documentpageheight = "60px";

clickmenu.textareadisplay = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"text_area\")'>Insert text area</p>";
clickmenu.textareadisplaywidth = "150px";
clickmenu.textareadisplayheight = "30px";

clickmenu.rectangledisplay = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"rectangle\")'>Insert rectangle</p>";
clickmenu.rectangledisplaywidth = "150px";
clickmenu.rectangledisplayheight = "30px";

clickmenu.dragdropdisplay = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"dragdrop\")'>Insert Drag and Drop</p>";
clickmenu.dragdropdisplaywidth = "150px";
clickmenu.dragdropdisplayheight = "30px";

clickmenu.textareamodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexback()'>Move back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexup()'>Move forward</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_back()'>Move to the back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_front()'>Move to the front</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"textareaformat\");'>Format text area</p>";
clickmenu.textareamodifywidth = "150px";
clickmenu.textareamodifyheight = "40px";
clickmenu.textareamodifyparameter = null;

clickmenu.buttondisplay = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_button(\"nextpage\")'>Insert Next Page Button</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_button(\"gotopage\")'>Insert Goto Page Button</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_button()'>Insert Button</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_score_button()'>Insert Score Button</p>";
clickmenu.buttondisplaywidth = "170px";
clickmenu.buttondisplayheight = "30px";
clickmenu.buttondisplayparameter = null;

clickmenu.hotspotmodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"hotspotformat\");'>Format Hotspot</p>";
clickmenu.hotspotmodifywidth = "150px";
clickmenu.hotspotmodifyheight = "20px";
clickmenu.hotspotmodifyparameter = null;

clickmenu.feedbackmodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"feedbackformat\");'>Format Feedback</p>";
clickmenu.feedbackmodifywidth = "150px";
clickmenu.feedbackmodifyheight = "20px";
clickmenu.feedbackmodifyparameter = null;

clickmenu.rectanglemodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexback()'>Move back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexup()'>Move forward</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_back()'>Move to the back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_front()'>Move to the front</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"rectangleformat\");'>Format rectangle</p>";
clickmenu.rectanglemodifywidth = "150px";
clickmenu.rectanglemodifyheight = "20px";
clickmenu.rectanglemodifyparameter = null;

clickmenu.buttonmodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexback()'>Move back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexup()'>Move forward</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_back()'>Move to the back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_front()'>Move to the front</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"buttonformat\");'>Format Button</p>";
clickmenu.buttonmodifywidth = "150px";
clickmenu.buttonmodifyheight = "20px";
clickmenu.buttonmodifyparameter = null;

clickmenu.buttonmodify2 = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexback()'>Move back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexup()'>Move forward</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_back()'>Move to the back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_front()'>Move to the front</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"buttonformat\");'>Format Button</p>";
clickmenu.buttonmodify2width = "150px";
clickmenu.buttonmodify2height = "20px";
clickmenu.buttonmodify2parameter = null;

clickmenu.flashcarddisplay = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"flashcard\")'>Insert Flashcard</p>";
clickmenu.flashcarddisplaywidth = "170px";
clickmenu.flashcarddisplayheight = "30px";
clickmenu.flashcarddisplayparameter = null;

clickmenu.flashcardmodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"flashcardformat\");'>Set up flashcard</p>";
clickmenu.flashcardmodifywidth = "150px";
clickmenu.flashcardmodifyheight = "40px";
clickmenu.flashcardmodifyparameter = null;

clickmenu.flashcardbuttonmodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"buttonformat\");'>Format flashcard button</p>";
clickmenu.flashcardbuttonmodifywidth = "200px";
clickmenu.flashcardbuttonmodifyheight = "40px";
clickmenu.flashcardbuttonmodifyparameter = null;

clickmenu.picturescrolldisplay = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_picturescroll()'>Insert a Picture Scroll</p>";
clickmenu.picturescrolldisplaywidth = "170px";
clickmenu.picturescrolldisplayheight = "30px";
clickmenu.picturescrolldisplayparameter = null;

clickmenu.picturescrollcardmodify = "";
clickmenu.picturescrollmodifywidth = "150px";
clickmenu.picturescrollmodifyheight = "40px";
clickmenu.picturescrollmodifyparameter = null;

clickmenu.missingwordsdisplay = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"missing_words\")'>Insert a missingwords</p>";
clickmenu.missingwordsdisplaywidth = "170px";
clickmenu.missingwordsdisplayheight = "30px";
clickmenu.missingwordsdisplayparameter = null;
clickmenu.endfunction = null;

clickmenu.missingwordsmodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"missingwordsformat\");'>Format Missing Words</p>";
clickmenu.missingwordsmodifywidth = "150px";
clickmenu.missingwordsmodifyheight = "40px";
clickmenu.missingwordsmodifyparameter = null;

clickmenu.missingwordsbuttonmodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"buttonformat\");'>Format missing words button</p>";
clickmenu.missingwordsbuttonmodifywidth = "200px";
clickmenu.missingwordsbuttonmodifyheight = "40px";
clickmenu.missingwordsbuttonmodifyparameter = null;

clickmenu.wordfilldisplay = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"wordfill\")'>Insert a wordfill</p>";
clickmenu.wordfilldisplaywidth = "170px";
clickmenu.wordfilldisplayheight = "30px";
clickmenu.wordfilldisplayparameter = null;

clickmenu.wordfillprompt = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"wordfill\");'>Set up word fill</p>";
clickmenu.wordfillpromptwidth = "150px";
clickmenu.wordfillpromptheight = "40px";
clickmenu.wordfillpromptparameter = null;

clickmenu.wordfillarea = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"textareaformat\");'>Format text area</p>";
clickmenu.wordfillareawidth = "150px";
clickmenu.wordfillareaheight = "40px";
clickmenu.wordfillareaparameter = null;

clickmenu.wordfillresponse = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"textareaformat\");'>Format text area</p>";
clickmenu.wordfillresponsewidth = "150px";
clickmenu.wordfillresponseheight = "40px";
clickmenu.wordfillresponseparameter = null;

clickmenu.mcqinsert = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"mcqinsert\")'>Insert Multiple Choice</p>";
clickmenu.mcqinsertwidth = "150px";
clickmenu.mcqinsertheight = "30px";

clickmenu.stimulatinginsert = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"stimulatinginsert\")'>Insert Stimulating question</p>";
clickmenu.stimulatinginsertwidth = "150px";
clickmenu.stimulatinginsertheight = "30px";

clickmenu.eitherorinsert = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"eitherorinsert\")'>Insert Either / Or</p>";
clickmenu.eitherorinsertwidth = "150px";
clickmenu.eitherorinsertheight = "30px";

clickmenu.torfinsert = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"torfinsert\")'>Insert True / False</p>";
clickmenu.torfinsertwidth = "150px";
clickmenu.torfinsertheight = "30px";

clickmenu.smsinsert = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"smsinsert\")'>Insert a send a text page</p>";
clickmenu.smsinsertwidth = "150px";
clickmenu.smsinsertheight = "30px";

clickmenu.smsmodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexback()'>Move back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexup()'>Move forward</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_back()'>Move to the back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_front()'>Move to the front</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"smsformat\");'>Set up text</p>";
clickmenu.smsmodifywidth = "150px";
clickmenu.smsmodifyheight = "40px";
clickmenu.smsmodifyparameter = null;

clickmenu.urlinsert = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"urlinsert\")'>Insert a Go To URL page</p>";
clickmenu.urlinsertwidth = "150px";
clickmenu.urlinsertheight = "30px";

clickmenu.urlmodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexback()'>Move back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexup()'>Move forward</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_back()'>Move to the back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_front()'>Move to the front</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"urlformat\");'>Set up URL</p>";
clickmenu.urlmodifywidth = "150px";
clickmenu.urlmodifyheight = "40px";
clickmenu.urlmodifyparameter = null;

clickmenu.scorebuttonmodify = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexback()'>Move back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='zindexup()'>Move forward</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_back()'>Move to the back</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='move_to_the_front()'>Move to the front</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"scorebuttonformat\");'>Format score Button</p>";
clickmenu.scorebuttonmodifywidth = "150px";
clickmenu.scorebuttonmodifyheight = "20px";
clickmenu.scorebuttonmodifyparameter = null;

clickmenu.scoreareainsert = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='insert_section(\"scoreinsert\")'>Insert Results Page</p>";
clickmenu.scoreareainsertwidth = "150px";
clickmenu.scoreareainsertheight = "30px";

function clickmenuhide(){

	if(document.getElementById("clickmenu").style.display=="block"){

		document.getElementById("clickmenu").style.display="none";

	}

	document.onmousedown = selectmouse;

}

function clickmenudisplay(menutodisplay, event){

	if(!wizard_settings.displayed){

		new_x = event.clientX + document.body.scrollLeft - document.body.clientLeft;
		new_y = event.clientY + document.body.scrollTop  - document.body.clientTop;
	
		document.getElementById("clickmenu").style.width = clickmenu[menutodisplay + "width"];
		document.getElementById("clickmenu").style.height = clickmenu[menutodisplay + "height"];

	
		if((new_x+pixel_strip(document.getElementById("clickmenu").style.width)<(screen.width-20))){

			document.getElementById("clickmenu").style.left = new_x;		

		}else{

			document.getElementById("clickmenu").style.left = Number(new_x - pixel_strip(document.getElementById("clickmenu").style.width)) + "px";
			
		}

		document.getElementById("clickmenu").style.top = new_y;	
		document.getElementById("clickmenu").style.display = "block";
		document.getElementById("clickmenu").innerHTML = clickmenu[menutodisplay];

		switch(menutodisplay){
		
				case "document":

						if(cloned_node==null){

							document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"document\")'>Document Properties</p>";
							document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";

						}

						break;

				case "documentpage":
					clickmenu.dragitemparameter = event.srcElement;
					break;
				case "rectangledisplay":
					clickmenu.endfunction = insert_rectangle;
					break;
				case "mcqinsert":
					clickmenu.endfunction = insert_mcq;
					break;
				case "stimulatinginsert":
					clickmenu.endfunction = insert_stimulating;
					break;
				case "eitherorinsert":
					clickmenu.endfunction = insert_eitheror;
					break;
				case "torfinsert":
					clickmenu.endfunction = insert_torfinsert;
					break;
				case "smsinsert":
					clickmenu.endfunction = insert_sms_page;
					break;
				case "urlinsert":
					clickmenu.endfunction = insert_url_page;
					break;
				case "scoreareainsert":
					clickmenu.endfunction = insert_scorearea;
					break;
				case "hotspotmodify":
					clickmenu.dragitemparameter = event.srcElement.parentNode;
					break;
				case "feedbackmodify":
					clickmenu.dragitemparameter = event.srcElement.parentNode;
					break;
				case "dragdropdisplay":
					     clickmenu.endfunction = insert_drag_drop;
					     break;
				case "insertpicture":clickmenu[menutodisplay + "parameter"] = event.srcElement.src;
					     clickmenu.endfunction = draw_shape_picture_done;
					     break;
				case "dragitem":
					clickmenu.dragitemparameter = event.srcElement;

					if(document.getElementById("workarea").childNodes.length==1){

						if(cloned_node==null){

							document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='copyitem()'>Copy</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem();'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p>";
							document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";

						}else{

							document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='copyitem()'>Copy</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='pasteitem()'>Paste</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem();'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p>";
							document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";	

						}

					}
					if(event.srcElement!=undefined){
						document.getElementById("clickmenu").innerHTML += "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"pictureformat\")'>Format picture</p>";
						document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";

					}
					break;
				case "textareadisplay":clickmenu.endfunction = insert_text_area_done;
					break;
				case "rectanglemodify":
						if(document.getElementById("workarea").childNodes.length==1){

							if(cloned_node==null){
								
								document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='copyitem()'>Copy</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"rectangleformat\");'>Format rectangle</p>";
								document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";

							}else{

								document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='copyitem()'>Copy</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='pasteitem()'>Paste</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem();'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"rectangleformat\");'>Format rectangle</p>";
								document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";	

							}

						}
						clickmenu.dragitemparameter = event.srcElement;
						break;
				case "textareamodify":
						if(document.getElementById("workarea").childNodes.length==1){

							if(cloned_node==null){
								
								document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='copyitem()'>Copy</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"textareaformat\");'>Format text area</p>";
								document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";

							}else{

								document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='copyitem()'>Copy</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='pasteitem()'>Paste</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem();'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"textareaformat\");'>Format text area</p>";
								document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";	

							}

						}
						if(event.srcElement.getAttribute("drag")){
							clickmenu.dragitemparameter = event.srcElement;
						}else{
							clickmenu.dragitemparameter = event.srcElement.parentNode;
						}
						break;
				case "buttondisplay":clickmenu.endfunction = insert_button_done;
					     break;
				case "buttonmodify":if(document.getElementById("workarea").childNodes.length==1){
						document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='copyitem()'>Copy</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"buttonformat\");'>Format Button</p>";
						document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";
					    }
					    clickmenu.dragitemparameter = event.srcElement;
					    break;
				case "buttonmodify2":if(document.getElementById("workarea").childNodes.length==1){
						document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='copyitem()'>Copy</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='duplicateitem()'>Duplicate</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"buttonformat\");'>Format Button</p>";
						document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";
					    }
					    clickmenu.dragitemparameter = event.srcElement.parentNode;
					    break;
				case "flashcarddisplay":clickmenu.endfunction = insert_flashcard_done;
							break;
				case "flashcardmodify":if(document.getElementById("workarea").childNodes.length==2){
							document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"flashcardformat\");'>Set up flashcard</p>";
							document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";
						    }
						    clickmenu.dragitemparameter = event.srcElement.parentNode;
						    break;
				case "flashcardbuttonmodify":if(document.getElementById("workarea").childNodes.length==2){
							document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"buttonformat\");'>Format flashcard button</p>";
							document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";
						    }
						    clickmenu.dragitemparameter = event.srcElement.parentNode;
						    break;
				case "missingwordsdisplay":clickmenu.endfunction = insert_missing_words_done;
							   if(event.srcElement.getAttribute("drag")){
								clickmenu.dragitemparameter = event.srcElement;
							   }else{
								clickmenu.dragitemparameter = event.srcElement.parentNode;
							   }
							  break;
				case "missingwordsmodify":if(document.getElementById("workarea").childNodes.length==2){
							  	document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"missingwordsformat\");'>Format Missing words</p>";
							  	document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";
						          }
							  clickmenu.dragitemparameter = event.srcElement.parentNode;
							  break;
				case "missingwordsbuttonmodify":if(document.getElementById("workarea").childNodes.length==2){
							  		document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"buttonformat\");'>Format Missing words button</p>";
							  		document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";
						          	}
								clickmenu.dragitemparameter = event.srcElement.parentNode;
							  	break;
				case "wordfilldisplay":clickmenu.endfunction = insert_word_fill_done;
						       break;
				case "wordfillmodify":if(document.getElementById("workarea").childNodes.length==2){
							  	document.getElementById("clickmenu").innerHTML = "<p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='deleteitem()'>Delete</p><p onmouseover='this.style.backgroundColor=\"#fff\";' onmouseout='this.style.backgroundColor=\"#ddd\";' onmousedown='show_wizard(\"missingwordsformat\");'>Format Missing words</p>";
							  	document.getElementById("clickmenu").style.height = Number(pixel_strip(document.getElementById("clickmenu").style.height) - 20) + "px";
						          }
							  clickmenu.dragitemparameter = event.srcElement.parentNode;
							  break;

				case "wordfillprompt":
				case "wordfillarea":
				case "wordfillresponse": clickmenu.dragitemparameter = event.srcElement.parentNode;
							 break;
				default:break;

		}

		window.event.returnValue = false;
		window.event.cancelBubble = true;

	}

}

function wizard_text(){

	show_wizard("textareaformat");

}

function border_show(){


	if(document.getElementById("workspace").style.border=="#000 3px solid"){

		document.getElementById("workspace").style.border="";

	}else{

		document.getElementById("workspace").style.border="3px solid #000";

	}

}