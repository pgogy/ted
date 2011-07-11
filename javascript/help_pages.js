function help(){

	window.open("http://localhost/ted/help/","help");	

}

function help_on_selected(){

	feature = item_drag_management.currently_selected_item.getAttribute("rmouse");

	window.open("http://localhost/ted/help/" + feature, "help");	

}