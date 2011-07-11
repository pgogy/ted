<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<link rel="stylesheet" type="text/css" media="screen" href="css/menusystem.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="css/pages.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="css/clickmenu.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="css/workarea.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="css/workareashapes.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="css/wizardmenu.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="css/media.css" />

		<script language="JavaScript" type="text/javascript" src="javascript/general_functions.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/value_validation.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/help_pages.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/colour_picker.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/score_button.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/shapeareadraw.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/wizard_menu.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/textfield_handling.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/medialibrary.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/pagehandling.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/menusystem.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/pagedragdrop.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/workarea_drag.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/workarea_insert.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/file_handling.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/php_files.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/global.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/clickmenu.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/publish_engine.js"></script>
		<script language="JavaScript" type="text/javascript" src="javascript/gif_publish_engine.js"></script>
		
		<title>TED</title>

	</head>
	<body style="overflow:hidden">

		<div id="clickmenu">
		</div>

		<div id="wizardmenu">
			<div style="float:left;	position:relative; width:100%; height:20px; z-index:103; background-color:#444D58;">
				<div id="titlebar" mouse="wizard"></div>
				<div id="titlebarclose" onclick="wizard_close()">X</div>
			</div>
			<div id="wizardcontentleft"></div>
			<div id="wizardcontentright"></div>
		</div>

		<div id="menusystem">
			<div id="File" style="left:0px; z-index:100">
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="new_file()">Create new</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="show_wizard('file_template');menusystemsettings.menupopup = false;">Create from template</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="show_wizard('file_open');menusystemsettings.menupopup = false;">Open</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="save_ted_file();menusystemsettings.menupopup = false;">Save</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="menu_new_file=true;show_wizard('file_save');menusystemsettings.menupopup = false;">Save As</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="close_file();menusystemsettings.menupopup = false;">Close</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="preview();">Preview</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="publish('swf');menusystemsettings.menupopup = false;">Publish</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="show_wizard_publish_gif();menusystemsettings.menupopup = false;">Publish (GIF)</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="download();menusystemsettings.menupopup = false;">Download</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="export_file();">Export</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="exit_system();menusystemsettings.menupopup = false;">Exit</div>
			</div>
			<div id="Edit" style="left:42px;z-index:100">
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="undo()">Undo</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="redo()">Redo</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="copyitem();deleteitem()">Cut</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="copyitem()">Copy</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="pasteitem()">Paste</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="duplicateitem()">Duplicate</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="deleteitem()">Delete</div>
			</div>
			<div id="Page" style="left:85px;z-index:100">
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="add_page()">Add page</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="duplicate_page()">Duplicate page</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="delete_page('menu')">Delete page</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="clear_page()">Clear page</div>
			</div>
			<div id="Insert" style="left:135px;z-index:100">
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="clickmenu.endfunction=insert_text_area_done;insert_section('text_area')">Text</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="clickmenu.endfunction=insert_rectangle;insert_section('rectangle')">Rectangle</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="clickmenu.endfunction=insert_button_done;insert_button('nextpage')">Next Page Button</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="clickmenu.endfunction=insert_button_done;insert_button('gotopage')">Goto Page Button</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="clickmenu.endfunction=insert_button_done;insert_button()">Button</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="clickmenu.endfunction=insert_flashcard_done;insert_section('flashcard')">Flashcard</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="insert_picturescroll()">Picture Scroll</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="clickmenu.endfunction=insert_missing_words_done;insert_section('missing_words')">Missing Words</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="clickmenu.endfunction=insert_word_fill_done;insert_section('wordfill')">Word fill</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="clickmenu.endfunction=insert_drag_drop;insert_section('dragdrop')">Drag and Drop</div>
			</div>
			<div id="Help" style="left:188px;z-index:100">
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="help()">Help</div>
				<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="help_on_selected()">Help on selected</div>
			<div onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)" action="true" onclick="show_wizard_about_ted()">About Ted</div>
			</div>
		</div>
		<div id="menubar">
			<div onclick="popup(this)" onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)">File</div>
			<div onclick="popup(this)" onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)">Edit</div>
			<div onclick="popup(this)" onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)">Page</div>
			<div onclick="popup(this)" onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)">Insert</div>
			<div onclick="popup(this)" onmouseover="selected_menu_item(this)" onmouseout="unselected_menu_item(this)">Help</div>
		</div>

		<div id="buttonbar">
			<span style="vertical-align:middle">
			File : 	
			</span>	
			<img src="images/save.gif" alt="Save" title="Save" align="middle" onclick="save_ted_file()" />
			<img src="images/saveas.gif" alt="Save" title="Save as" align="middle" onclick="show_wizard('file_save')" />
			<img src="images/close.gif" alt="Close" title="Close" align="middle" onclick="close_file()" />
			<img src="images/preview.gif" alt="Preview" title="Preview" align="middle" onclick="preview()" />
			<img src="images/publish.gif" alt="Preview" title="Publish" align="middle" onclick="publish()" />
			<span style="vertical-align:middle">
			Page : 	
			</span>				
			<img src="images/addpage.gif" alt="Add page" title="Add page" align="middle" onclick="add_page()" />
			<img src="images/addpagehere.gif" alt="Add page here" title="Add page here" align="middle" onclick="add_page_here()" />
			<img src="images/clear.gif" alt="Clear page" title="Clear page" align="middle" onclick="clear_page()" />	
			<span style="vertical-align:middle">
			Item : 	
			</span>
			<img src="images/delete.gif" alt="Delete item" title="Delete item" align="middle" onclick="deleteitem()" />
			<img src="images/duplicate.gif" alt="Duplicate item" title="Duplicate item" align="middle" onclick="duplicateitem()" />
			<span style="vertical-align:middle">
			Border :
			</span>
			<img src="images/border.gif" alt="Border" title="Border" align="middle" onclick="border_show()" />
		</div>
		<div id="pagepanel">
			<div class="pagepanelholder">
				<div class="panelend">
					<div class="panelcorner paneltopleft"></div>
					<div class="paneltop paneltoppage"></div>
					<div class="panelcorner paneltopright"></div>
				</div>
				<div id="pages">
					<div id="page1" class="pagehold" mouse="page"><p>1</p><div class="pageback" id="pageback1"></div><div mouse="page" class="pagecover" id="pagecover1"></div></div>
					<div id="page2" class="pagehold" mouse="page"><p>2</p><div class="pageback" id="pageback2"></div><div mouse="page" class="pagecover" id="pagecover2"></div></div>
					<div id="page3" class="pagehold" mouse="page"><p>3</p><div class="pageback" id="pageback3"></div><div mouse="page" class="pagecover" id="pagecover3"></div></div>
					<div id="page4" class="pagehold" mouse="page"><p>4</p><div class="pageback" id="pageback4"></div><div mouse="page" class="pagecover" id="pagecover4"></div></div>
				</div>
				<div class="panelend">
					<div class="panelcorner panelbottomleft"></div>
					<div class="paneltop paneltoppage"></div>
					<div class="panelcorner panelbottomright"></div>
				</div>
			</div>
		</div>
		<div id="workingarea" style="overflow: hidden;">
			<div id="workspace"></div>
			<div id="workarea"></div>
		</div>
		<div id="medialist">
			<div class="medialistholder">
				<div class="mediatopbottom">
					<div class="panelcorner paneltopleft"></div>
					<div class="paneltop paneltopmedia"></div>
					<div class="panelcorner paneltopright"></div>
				</div>
				<div class="mediagroups">

					<div id="itemsclick" mouse="libraryheader">Page items</div>
					<div id="items"><p mouse="newtext"><img src="images/textarea.gif" /><br>Text area</p><p mouse="rectangle"><img src="images/rectangle.gif" /><br>Rectangle</p><p mouse="newbutton"><img src="images/button.gif" /><br>Button</p></div>

					<div id="interactionsclick" mouse="libraryheader">Interactions</div>
					<div id="interactions"><p mouse="flashcardinsert"><img src="images/flashcard.gif" /><br>Flashcard</p><p mouse="missingwords"><img src="images/missingwords.gif" /><br>Missing Words</p><p mouse="wordfill"><img src="images/wordfill.gif" /><br>Word fill</p></div>

					<div id="interactionsadvclick" mouse="libraryheader">Interactions (advanced)</div>
					<div id="interactionsadv"><p mouse="picturescroll"><img src="images/picturescroll.gif" /><br>Picture scroll</p><p mouse="dragdrop"><img src="images/dragdrop.gif" /><br>Drag and Drop</p></div>

					<div id="questionsclick" mouse="libraryheader">Questions</div>
					<div id="questions" mouse="libraryheader"><p mouse="mcqinsert"><img src="images/mcq.gif" /><br>Multiple Choice</p><p mouse="stimulatinginsert"><img src="images/stimulating.gif" /><br>Stimulating</p><p mouse="eitherorinsert"><img src="images/eor.gif" /><br>Either / Or</p><p mouse="torfinsert"><img src="images/tof.gif" /><br>True / False</p><p mouse="scoreinsert"><img src="images/scorepage.gif" /><br>Results page</p></div>

					<div id="communicationsclick" mouse="libraryheader">Communications</div>
					<div id="communications" mouse="libraryheader"><p mouse="smsinsert"><img src="images/sendtext.gif" /><br>Send text</p><p mouse="urlinsert"><img src="images/gointernet.gif" /><br>Access webpage</p></div>
					

					<div id="imagesclick" mouse="libraryheader">Images</div>			
					<div id="images" style="overflow:hidden"><?PHP

					include "php/filehandling/image_list.php";		

					?></div>
				</div>
				<div class="mediatopbottom">
					<div class="panelcorner panelbottomleft"></div>
					<div class="paneltop paneltopmedia"></div>
					<div class="panelcorner panelbottomright"></div>
				</div>
			</div>
		</div>
	</body>
</html>