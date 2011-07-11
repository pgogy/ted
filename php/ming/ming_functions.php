<?PHP
  
  function draw_rectangle($x,$y,$height,$width,$alpha,$r,$g,$b){

	echo "drawing rectangle <br>";

	$s = new SWFShape();
	$s->setRightFill($s->addFill(0x00, 0x00, 0x00));
	$s->movePenTo($x,$y);
	$s->drawLine($wdth, 0);
  	$s->drawLine(0, $height);
  	$s->drawLine((0-$width), 0);
	$s->drawLine(0,(0-$height));

	print_r($s);

	return $s;

  }  

  function clean_up($array){

	while($i = array_pop($array)){

	      print_r($i);

	      echo "<br>";

	      $i->remove();

  	}

  }

  function attach_swf($swf_to_load){

	  $loaded_swf = new SWFPrebuiltClip(fopen($swf_to_load, "rb"));
	  return $loaded_swf;

  }

  function maketextarea($font,$font_size,$r,$g,$b,$height,$width){

	$t = new SWFTextField(SWFTEXTFIELD_MULTILINE | SWFTEXTFIELD_WORDWRAP | SWFTEXTFIELD_NOEDIT | SWFTEXTFIELD_NOSELECT);
	$t->setBounds($width,$height);		
	$t->setFont($font);	
	$t->setColor($r,$g,$b);
	$t->setHeight($font_size);

	return $t;	

  }

  function makeinputtextarea($font,$font_size,$r,$g,$b,$height,$width,$name){

	echo "making input area <br>";

	// add selection operation | SWFTEXTFIELD_NOSELECT 

	$t = new SWFTextField(SWFTEXTFIELD_MULTILINE | SWFTEXTFIELD_WORDWRAP );
	$t->setBounds($width,$height);
	$t->setFont($font);	
	$t->setColor($r,$g,$b);
	$t->setHeight($font_size);
	$t->setName($name);
	return $t;	

  }
  

  function placeinputtext($m,$x,$y,$r,$g,$b,$height,$width,$font_size,$name,$f){

        $t = makeinputtextarea($f,$font_size,$r,$g,$b,$height,$width,$name);

	$i = $m->add($t);
	$i->moveTo($x,$y);

	return $i;

  }

  function placetext($str,$m,$x,$y,$r,$g,$b,$width,$height,$font_size){

	global $font;

        $tempfont = new SWFFont($font);

        $t = maketextarea($tempfont,$font_size,$r,$g,$b,$height,$width);

	$t->addString($str);
	$i = $m->add($t);
	$i->moveTo($x,$y);

	return $i;

  }

  function placebuttontext($str,$m,$x,$y,$r,$g,$b,$height,$width,$font_size){

	global $font;

	$tempfont = new SWFFont($font);

	echo $width . "<br>";

        $t = maketextarea($tempfont,$font_size,$r,$g,$b,$height,$width);

	$t->addString($str);
	$i = $m->add($t);
	$i->moveTo($x,$y);
	return $i;

  }

  function basic_input_background($x,$y,$height,$alpha,$r,$g,$b){

	$s = new SWFShape();
	$s->setRightFill($r, $g, $b, $alpha);
	$s->movePenTo($x,$y);
	$s->drawLine(165, 0);
  	$s->drawLine(0, $height);
  	$s->drawLine(-165, 0);
	$s->drawLine(0,(0-$height));
	return $s;

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

  function basic_chunk_button_shape($x,$y,$width,$height,$r_b,$g_b,$b_b){

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

  function button($action,$x,$y,$width,$height,$str,$r_t,$g_t,$b_t,$r_b,$g_b,$b_b,$font_size,$m,$text_width){

	$button = make_button($action,$x,$y,$width,$height,$r_b,$g_b,$b_b);

	$button = $m->add($button);

	$text = placebuttontext($str,$m,$x+2,$y+2,$r_t,$g_t,$b_t,$height,$text_width,$font_size);

	$new_material = array($button,$text);

	return $new_material;

  }

  function make_chunk_button($action,$x,$y,$width,$height,$r_b,$g_b,$b_b){

    $b = new SWFButton();
    $b->addShape(basic_chunk_button_shape($x,$y,$width,$height,$r_b,$g_b,$b_b), SWFBUTTON_HIT | SWFBUTTON_UP | SWFBUTTON_DOWN | SWFBUTTON_OVER);
    $b->addAction(new SWFAction($action),SWFBUTTON_MOUSEDOWN);
    return $b;

  }

 function chunk_button($action,$x,$y,$width,$height,$str,$r_t,$g_t,$b_t,$r_b,$g_b,$b_b,$font_size,$m,$text_width){

	$button = make_chunk_button($action,$x,$y,$width,$height,$r_b,$g_b,$b_b);

	$button = $m->add($button);

	$text = placebuttontext($str,$m,$x+2,$y+2,$r_t,$g_t,$b_t,$height,$text_width,$font_size);

	$new_material = array($button,$text);

	return $new_material;

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

  function add_actionscript($movie,$action){

	$strAction = $action;

	$stop = new SWFAction($strAction);

	$movie->add($stop);

  }

  function createnewswf($rate,$height,$width,$r,$g,$b){

    Ming_useSWFVersion(4);

    $m = new SWFMovie();
    $m->setRate(1.000000);
    $m->setDimension($height,$width);
    $m->setBackground($r,$g,$b);

    $m->setFrames(3);	

    return $m;

  }

?>