var site_url = "http://localhost/ted/";

document.onmouseup = onmouseup;
document.onmousemove = onmousemove;
document.onkeyup = keyup;
document.onkeydown = menukeypress;

document.oncontextmenu = suppress_right_click;

function suppress_right_click(){

	window.event.returnValue = false;
	window.event.cancelBubble = true;

}

alert("ALL JS LOADED");