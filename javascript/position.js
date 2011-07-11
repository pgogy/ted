function get_x_y(id){

	actual_top = 0;
	actual_left = 0;

	

	while(id.nodeName != "HTML"){

		actual_left += id.offsetLeft;				

		actual_top += id.offsetTop;					

		id = id.parentNode;

		if(id.nodeName==null){
			break;
		}


	}


}