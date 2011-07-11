<?PHP

	$page_index; 
	$instructions;

	function set_array($array1, $array2){

		global $instructions, $page_index;

		$page_index = $array1;
		$instructions = $array2;

	}
			
	function next_instruction(){

		global $instructions;
			
		if(count(instructions)!=0){
				
			return array_shift($instructions);
				
		}else{
				
			return false;
				
		}
			
	}
			
	function instruction_to_parameters(){
			
		$temp = next_instruction();
		
		if($temp){
			return $temp;
		}else{
			return false;
		}
	
	}

	function createnewswf($frames,$rate,$height,$width,$r,$g,$b){

		//Ming_useSWFVersion(4);	

		$m = new SWFMovie();
		$m->setRate($rate);
		$m->setDimension($width,$height);

		$m->setBackground(hexdec($r),hexdec($g),hexdec($b));

		$m->setFrames($frames);	

		return $m;

	}

	function clean_up($array){

		while($i = array_pop($array)){

		      $i->remove();

	  	}

	}

	function add_actionscript($movie,$action){

		$strAction = $action;

		$stop = new SWFAction($strAction);

		$movie->add($stop);

	}

	function placetext($str,$m,$x,$y,$r,$g,$b,$width,$height,$font_size,$font){

	        $t = maketextarea($font,$font_size,$r,$g,$b,$height,$width);

		$t->addString($str);
		$i = $m->add($t);
		$i->moveTo($x,$y);
		return $i;

	}

	function maketextarea($font,$font_size,$r,$g,$b,$height,$width){

		$t = new SWFTextField(SWFTEXTFIELD_MULTILINE | SWFTEXTFIELD_WORDWRAP | SWFTEXTFIELD_NOEDIT | SWFTEXTFIELD_NOSELECT);
		$t->setBounds($width,$height);		
		$t->setFont($font);	
		$t->setColor($r,$g,$b);
		$t->setHeight($font_size);
		return $t;	

	}

	function makeswffont($font){

		if($font=="sans-serif"){
	
			$tempfont = new SWFFont("../../../fonts/_sans.fdb");
			return $tempfont;

		}
				

	}

  	function draw_rectangle($x,$y,$height,$width,$alpha,$r,$g,$b){

		$s = new SWFShape();
		$s->setRightFill($s->addFill($r, $g, $b));
		$s->movePenTo($x,$y);
		$s->drawLine($width, 0);
	  	$s->drawLine(0, $height);
	  	$s->drawLine((0-$width), 0);
		$s->drawLine(0,(0-$height));

		return $s;

	} 

	function insert_picture($movie, $img,$x,$y){

		$jpg = new SWFBitmap(fopen($img,"rb")); 
		
		$image = $movie->add($jpg);

		$image->moveTo($x,$y);

		return $image;

	} 


	function placebuttontext($str,$m,$x,$y,$r,$g,$b,$height,$width,$font_size,$font){

	        $t = maketextarea($font,$font_size,$r,$g,$b,$height,$width);

		$t->addString($str);
		$i = $m->add($t);
		$i->moveTo($x,$y);
		return $i;

	}

	function basic_button_shape($x,$y,$width,$height,$r_b,$g_b,$b_b){

		$s = new SWFShape();
		$s->setRightFill($s->addFill($r_b,$g_b,$b_b));
		$s->movePenTo($x,$y);
		$s->drawLine($width, 0);
	  	$s->drawLine(0, $height);
	  	$s->drawLine((0-$width), 0);
		$s->drawLine(0, (0-$height));
		return $s;

	}

	function make_button($action,$x,$y,$width,$height,$r_b,$g_b,$b_b){
			    	
		$b = new SWFButton();
		$b->addShape(basic_button_shape($x,$y,$width,$height,$r_b,$g_b,$b_b), SWFBUTTON_HIT | SWFBUTTON_UP | SWFBUTTON_DOWN | SWFBUTTON_OVER);
		$b->addAction(new SWFAction($action),SWFBUTTON_MOUSEDOWN);
		return $b;

	}

	function button($action,$x,$y,$width,$height,$str,$r_t,$g_t,$b_t,$r_b,$g_b,$b_b,$font_size,$font,$m){

		$button_shape = make_button($action,$x,$y,$width,$height,$r_b,$g_b,$b_b);

		print_r($m);

		$button = $m->add($button_shape);
		//$text = placebuttontext($str,$m,$x+2,$y+2,$r_t,$g_t,$b_t,$height,$width,$font_size,$font);
		//$new_material = array($button,$text);
		//return $new_material;

	}

	function make_flashcard($width,$height,$corner,$line_width,$l_r,$l_g,$l_b,$f_r,$f_g,$f_b){

		$s = new SWFShape();
		$s->setLine($line_width,$l_r,$l_g,$l_b);
		$s->setRightFill($s->addFill($f_r,$f_g,$f_b));


		$s->movePenTo($corner,0);
		$s->drawLine($width-($corner*2), 0);
		$s->movePenTo($width-$corner,$corner);
		$s->drawArc($corner,0,90);
		$s->drawLine(0, $width-($corner*2));
		$s->movePenTo($width-$corner,$width-$corner);
		$s->drawArc($corner,90,180);
		$s->drawLine(0-($width-($corner*2)), 0);
		$s->movePenTo($corner,$width-$corner);
		$s->drawArc($corner,180,270);
		$s->drawLine(0, 0-($width-($corner*2)));
		$s->movePenTo($corner,$corner);
		$s->drawArc($corner,270,360);
		return $s;

	}
  


?>