function set_score_button(button){


	if(button.src.indexOf("tick")!=-1){

		button.src = "images/cross.gif";

		button.parentNode.parentNode.setAttribute("score_value",0);

	}else{

		button.src = "images/tick.gif";

		button.parentNode.parentNode.setAttribute("score_value",1);

	}

	set_page_innerhtml();

}