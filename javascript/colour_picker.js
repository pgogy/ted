function hsvToRgb(hue, saturation, value)
{
    
	var red;
    
	var green;
    
	var blue;
    
	if (value == 0.0)
    {

	       red = 0;
       
	       green = 0;
        
	       blue = 0;
    
	}
    else
    {
        
	     var i = Math.floor(hue * 6);
        
	     var f = (hue * 6) - i;
        
	     var p = value * (1 - saturation);
        
	     var q = value * (1 - (saturation * f));
        
		var t = value * (1 - (saturation * (1 - f)));


             switch (i)
        {
            
		case 1: red = q; green = value; blue = p; break;
            
		case 2: red = p; green = value; blue = t; break;
            
		case 3: red = p; green = q; blue = value; break;
            
		case 4: red = t; green = p; blue = value; break;
            
		case 5: red = value; green = p; blue = q; break;
            
		case 6: // fall through
            
		case 0: red = value; green = t; blue = p; break;
        
		}
    
	}
    
	return {r: red, g: green, b: blue};


}



function rgbToHsv(red, green, blue)
{
   
	
	var max = Math.max(Math.max(red, green), blue);
    
	var min = Math.min(Math.min(red, green), blue);
    
	var hue;
    var saturation;
    
	var value = max;
    
	if (min == max)
    {
        
		hue = 0;
        
		saturation = 0;
    
	}
    else
    {
        
		var delta = (max - min);
        
		saturation = delta / max;
       
		
		if (red == max)
        {
  
		          hue = (green - blue) / delta;
        
		}
        else if (green == max)
        {
 
		           hue = 2 + ((blue - red) / delta);
        
		}
        else
        {
            
			 hue = 4 + ((red - green) / delta);
        
		}
        
		hue /= 6;
        
		if (hue < 0)
        {
            
			hue += 1;
       
	        }
        
		if (hue > 1)
        {
            
			hue -= 1;
        
		}
    
	}
    

	return {
        h: hue,
        s: saturation,
        v: value
    };

}




function d2h(d) {
	
	return d.toString(16);
			
}
			
function h2d(h) {
			
	return parseInt(h,16);

}

var start_r = "ff";
var start_g = "00";
var start_b = "00";


var curr_green = 0;

var curr_red = 0;

var curr_blue = 0;			


function red_to_yellow(){				

	while(curr_green<=255){

		if(String(d2h(h2d(start_g)+curr_green)).length!=1){

			temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#" + start_r + d2h(h2d(start_g)+curr_green) + start_b +";";
											
		}else{

			temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#" + start_r + "0" + d2h(h2d(start_g)+curr_green) + start_b +";";						

		}

		other_style = "border:none; margin:none; float:left; clear:left; position:relative; height:1px; overflow:hidden; width:20px;\"></div>";

		temp+=other_style;
		
		document.getElementById("colour").innerHTML+=temp;	

		curr_green+=25;

	}

}

function yellow_to_green(){

	curr_green=255;

	while(curr_red<=255){

		if(String(d2h(h2d(start_r)-curr_red)).length!=1){

			temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#" + d2h(h2d(start_r)-curr_red) + d2h(curr_green) + start_b +";";

		}else{

			temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#0" + d2h(h2d(start_r)-curr_red) + d2h(curr_green) + start_b +";";

		}

		other_style = "border:none; margin:none; float:left; clear:left; position:relative; height:1px; overflow:hidden; width:20px;\"></div>";

		temp+=other_style;
	
		document.getElementById("colour").innerHTML+=temp;
				
		curr_red+=25;

	}

	curr_green=0;

}

function green_to_cyan(){

	while(curr_blue<=255){

		if(String(d2h(h2d(start_b)+curr_blue)).length!=1){

			temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#" + "00" + "ff" + d2h(h2d(start_b)+curr_blue) +";";

		}else{

			temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#" + "00" + "ff0" + d2h(h2d(start_b)+curr_blue) +";";

		}

		other_style = "border:none; margin:none; float:left; clear:left;  position:relative; height:1px; overflow:hidden; width:20px;\"></div>";

		temp+=other_style;
		
		document.getElementById("colour").innerHTML+=temp;
					
		curr_blue+=25;

	}

}

function cyan_to_blue(){

	curr_green=0;

	while(curr_green<=255){

		if(String(d2h(h2d("ff")-curr_green)).length!=1){

			temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#" + "00" + d2h(h2d("ff")-curr_green) + "ff" +";";

		}else{

			temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#" + "000" + d2h(h2d("ff")-curr_green) + "ff" +";";				

		}

		other_style = "border:none; margin:none; float:left; clear:left;  position:relative; height:1px; overflow:hidden; width:20px;\"></div>";

		temp+=other_style;
	
		document.getElementById("colour").innerHTML+=temp;
				
		curr_green+=25;

	}

	curr_red=0;

}

function blue_to_magenta(){

	while(curr_red<=255){

		if(String(d2h(h2d("00")+curr_red)).length!=1){

			temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#" + d2h(h2d("00")+curr_red) + "00" + "FF" + ";";
						
		}else{

			temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#0" + d2h(h2d("0")+curr_red) + "00" + "FF" + ";";						

		}

		other_style = "border:none; margin:none; float:left; clear:left;  position:relative; height:1px; overflow:hidden; width:20px;\"></div>";
	
		temp+=other_style;
		
		document.getElementById("colour").innerHTML+=temp;

		curr_red+=25;

	}

	curr_blue=0;

}

function magenta_to_red(){

	while(curr_blue<=255){

		temp = "<div onmousedown=\"change_colour(this)\" style=\"background-color:#" + "FF" + "00" + d2h(h2d("FF")-curr_blue) + ";";

		other_style = "float:left; clear:left; position:relative; height:3px; overflow:hidden; width:20px;\"></div>";

		temp+=other_style;
		
		document.getElementById("colour").innerHTML+=temp;
			
		curr_blue+=25;

	}

}

var hsv_colour = null;

function change_colour(id){

	temp_string = id.style.backgroundColor;

	hsv_colour = rgbToHsv(h2d(temp_string.substring(1,3)), h2d(temp_string.substring(3,5)), h2d(temp_string.substring(5,7)));

	document.getElementById("colourarea").style.backgroundColor = id.style.backgroundColor;

}

function rainbow(){	

	red_to_yellow();
	yellow_to_green();
	green_to_cyan();
	cyan_to_blue();
	blue_to_magenta();
	magenta_to_red();

}


function rgbToHex(r, g, b, includeHash)
{
 

	r = Math.round(r * 255);
    
			
	g = Math.round(g * 255);
    
			
	b = Math.round(b * 255);
    

	if (includeHash == undefined)
    {
        

		includeHash = true;
    

	}
    
    

	r = r.toString(16);
    

	if (r.length == 1)
    {
        

		r = '0' + r;
    

	}
    

	g = g.toString(16);
    

	if (g.length == 1)
    {
        

		g = '0' + g;
    

	}
    

	b = b.toString(16);
   
			
	if (b.length == 1)
    {
        
			
		b = '0' + b;
    
				
	}
    

	return ((includeHash ? '#' : '') + r + g + b).toUpperCase();


}

var rgb_colour = null;

function colour_pos(event){

	newPos = get_wizard_x_y("colourarea");

	val = (event.clientX - document.getElementById("wizardmenu").offsetLeft - newPos.leftvalue)/document.getElementById("colourarea").offsetWidth;

	sat = (event.clientY - document.getElementById("wizardmenu").offsetTop - newPos.topvalue)/document.getElementById("colourarea").offsetHeight; 

	rgb_colour = hsvToRgb(hsv_colour.h, (1-sat), (val));

	document.getElementById("colourchoice").style.backgroundColor = rgbToHex(rgb_colour.r,rgb_colour.g,rgb_colour.b,true);	

	document.getElementById("colourliteral").value = rgbToHex(rgb_colour.r,rgb_colour.g,rgb_colour.b,false);

}

function colourtextchange(){

	if(document.getElementById("colourliteral").value.length==6){

		red = h2d(document.getElementById("colourliteral").value.substring(0,2));

		green = h2d(document.getElementById("colourliteral").value.substring(2,4));

		blue = h2d(document.getElementById("colourliteral").value.substring(4,6));

		if(!isNaN(red)&&!isNaN(green)&&!isNaN(blue)){

			document.getElementById("colourchoice").style.backgroundColor = document.getElementById("colourliteral").value;

		}	
		
	}

}

function colour_area(){

	colour_holder = document.createElement("div");
	colour_holder.id = "colourholder";
	colour_holder.style.styleFloat = "left";
	colour_holder.style.position = "relative";
	colour_holder.style.width="200px";
	colour_holder.style.marginLeft="5px";

	document.getElementById("wizardcontentleft").insertBefore(colour_holder);


	temp_id = document.createElement("div");
	temp_id.id="colour";
	temp_id.style.styleFloat="left";
	temp_id.style.position="relative";
	temp_id.style.width="20px";
	temp_id.style.height="60px";

	document.getElementById("colourholder").insertBefore(temp_id);	

	rainbow();

	temp_id2 = document.createElement("div");
	temp_id2.id="colourarea";
	temp_id2.style.styleFloat="left";
	temp_id2.style.position="relative";
	temp_id2.style.width="90px";
	temp_id2.style.height="90px";
	temp_id2.style.marginLeft = "5px";

	temp_id2.onmousedown = function(){colour_pos(event);};
		
	temp_id2.innerHTML = "<img src=\"images/sv.png\" width=\"90px\" height=\"90px\" />";

	document.getElementById("colourholder").insertBefore(temp_id2);

	temp_id3 = document.createElement("div");
	temp_id3.id="colourchoice";
	temp_id3.style.styleFloat="left";
	temp_id3.style.position="relative";
	temp_id3.style.width="20px";
	temp_id3.style.height="20px";
	temp_id3.style.border="1px solid #000";
	temp_id3.style.marginLeft ="5px";

	document.getElementById("colourholder").insertBefore(temp_id3);

	temp_id4 = document.createElement("form");
	temp_id4.id="colourtext";
	temp_id4.style.styleFloat="left";
	temp_id4.style.position="relative";
	temp_id4.style.width="20px";
	temp_id4.style.clear="left";
	temp_id4.style.height="20px";
	temp_id4.innerHTML = "<textarea id=\"colourliteral\" onkeyup=\"colourtextchange()\" cols=14 rows=1 scroll=no style=\"overflow:hidden\"></textarea>";

	document.getElementById("colourholder").insertBefore(temp_id4);

	title_holder = document.createElement("div");
	title_holder.id = "colourholder";
	title_holder.style.styleFloat = "left";
	title_holder.style.position = "relative";
	title_holder.style.width="200px";
	title_holder.style.marginLeft="5px";
	title_holder.innerHTML = "<p>Colour picker</p>";

	document.getElementById("wizardcontentleft").insertBefore(title_holder);

}