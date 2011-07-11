var shapeareadraw = new Object;
shapeareadraw.mousePosMove=null;
shapeareadraw.newnode = null;
shapeareadraw.drawmousePos = null;
shapeareadraw.clicked = false;
shapeareadraw.drawing_mode = false;

function find_parent_node(target){

	while(target!=null){

		if(target.id=="workarea"){
	
			return true;
		
		}else{

			target=target.parentNode;

		}

	}

	return false;

}

function clickone(ev){

	shapeareadraw.mousePosMove = mouseCoords(event);

	target = event.srcElement;

	if(find_parent_node(target)){

		document.onmousemove = draw;

		shapeareadraw.newnode = document.createElement("div");

		//set the style
		shapeareadraw.newnode.style.position = "absolute";

		offset_left = document.getElementById("workingarea").offsetLeft;

		offset_top = document.getElementById("workingarea").offsetTop;

		shapeareadraw.mousePosMove.x -= offset_left;

		shapeareadraw.mousePosMove.y -= offset_top;

		shapeareadraw.newnode.style.top = shapeareadraw.mousePosMove.y + "px";				
		shapeareadraw.newnode.style.left = shapeareadraw.mousePosMove.x + "px";		
		shapeareadraw.newnode.style.backgroundColor = "#F00";
		shapeareadraw.newnode.style.opacity = 0.3;
		shapeareadraw.newnode.style.filter = 'alpha(opacity=' + 30 + ')';
		shapeareadraw.newnode.style.zIndex = "9999";

		shapeareadraw.newnode.id = "temp_item";
		tbody = document.getElementById("workarea");
		tbody.appendChild(shapeareadraw.newnode);

		shapeareadraw.clicked = true;

		document.onclick = clicktwo;

	}
						
}

function clicktwo(event){

	document.body.style.cursor = "default";

	document.onmousedown = selectmouse;
	document.onmousemove = onmousemove;
	document.onclick = null;

	shapeareadraw.mousePosMove=null;
	shapeareadraw.newnode = null;
	shapeareadraw.drawmousePos = null;
	clicked = false;

	clickmenu.endfunction();

}

function draw(ev){

	document.body.style.cursor = "crosshair";

	ev = ev || window.event;   

   	shapeareadraw.drawmousePos = mouseCoords(ev); 

	temp_pos = shapeareadraw.drawmousePos;

	shapeareadraw.drawmousePos.x -= document.getElementById("workingarea").offsetLeft;
	shapeareadraw.drawmousePos.y -= document.getElementById("workingarea").offsetTop;

	if(shapeareadraw.clicked){

		if(document.getElementById("temp_item")){

			if((shapeareadraw.mousePosMove.x-offset_left)<(shapeareadraw.drawmousePos.x-offset_left)){

				document.getElementById("temp_item").style.left = shapeareadraw.mousePosMove.x + "px";					
				document.getElementById("temp_item").style.width = Number(shapeareadraw.drawmousePos.x - shapeareadraw.mousePosMove.x) + "px";
			
			}else{

				document.getElementById("temp_item").style.left = shapeareadraw.drawmousePos.x + "px";
				document.getElementById("temp_item").style.width = shapeareadraw.mousePosMove.x - shapeareadraw.drawmousePos.x;										

			}

			if(shapeareadraw.mousePosMove.y<shapeareadraw.drawmousePos.y){

				document.getElementById("temp_item").style.top = shapeareadraw.mousePosMove.y + "px";
				document.getElementById("temp_item").style.height = Number(shapeareadraw.drawmousePos.y - shapeareadraw.mousePosMove.y) + "px";

			}else{

				document.getElementById("temp_item").style.top = shapeareadraw.drawmousePos.y + "px";
				document.getElementById("temp_item").style.height = shapeareadraw.mousePosMove.y - shapeareadraw.drawmousePos.y;										
			
			}				

		}
	}
}