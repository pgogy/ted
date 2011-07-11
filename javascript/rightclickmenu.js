
document.onmousedown = newclick;

document.oncontextmenu = hello;

function hello(){

	window.event.returnValue = false;
	window.event.cancelBubble = true;

}

function newclick(e){

	var targ;
	if (!e) var e = window.event;
	if (e.target) targ = e.target;
	else if (e.srcElement) targ = e.srcElement;
	if (targ.nodeType == 3) // defeat Safari bug
		targ = targ.parentNode;

	if(window.event.button==2){

		new_x = e.clientX + document.body.scrollLeft - document.body.clientLeft;
		new_y = e.clientY + document.body.scrollTop  - document.body.clientTop;

		document.getElementById("rightclickmenu").style.top = new_y;
		document.getElementById("rightclickmenu").style.left = new_x;
		document.getElementById("rightclickmenu").style.display = "block";

		window.event.returnValue = false;
		window.event.cancelBubble = true;
	}

}

var currentid = null;

function dragme(event,id){

	id.style.border="1px #f00 solid";
	currentid = id;	

}

function deletenode(){

	numberofpages = currentid.parentNode.childNodes.length;

	new_point = 0;

	for(x=0;x<numberofpages;x++){

		if(currentid.parentNode.childNodes[x]!=currentid){
	
			currentid.parentNode.childNodes[x].id = "test" + parseInt(new_point+1);
			currentid.parentNode.childNodes[x].innerHTML = "test" + Number(new_point+1);
			document.getElementById("info4").innerHTML += new_point + " " + currentid.parentNode.childNodes[new_point].id + " <br>";
			new_point++;

		}

	}

	currentid.parentNode.removeChild(currentid);

	document.getElementById("rightclickmenu").style.display = "none";

}

function addnode(){

	temp_id = currentid;

	newNode = currentid.cloneNode(true);

	newNode.id = "temp";

	insertnode = "test" + String(Number(Number(String(currentid.id).substr(4,String(currentid.id).length)) + 1));

	currentid.parentNode.insertBefore(newNode,document.getElementById(insertnode));

	numberofpages = currentid.parentNode.childNodes.length;	

	for(x=0;x<numberofpages;x++){
	
		temp_id.parentNode.childNodes[x].id = "test" + parseInt(x+1);
		temp_id.parentNode.childNodes[x].innerHTML = "test" + Number(x+1);
		document.getElementById("info4").innerHTML += x + " " + temp_id.parentNode.childNodes[x].id + " <br>";	

	}

	document.getElementById("rightclickmenu").style.display = "none";

}