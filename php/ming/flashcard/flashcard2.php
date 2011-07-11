<?
  
  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);

  include "../ming_functions.php";

  function make_flashcard_($width,$height,$corner,$line_width,$l_r,$l_g,$l_b,$f_r,$f_g,$f_b){
	
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

  $m = createnewswf(1.0,176,208,0xFF,0xFF,0xFF);

  $z = array();

  add_actionscript($m,"score=0; number_of_questions=1;");

  // PAGE BEGINS

  $s = make_flashcard_(160,160,20,1,0x00,0x00,0x00,0xFF,0xFF,0xFF);

  $i = $m->add($s);

  $i->moveTo(5,5);

  $i->setName("flashcard1");

  array_push($z,$i);

  array_push($z,placetext("Listen",$m,70,80,0x00,0x00,0x00,80,80,13));

  $material = button("flashcard1.x = -1000;",5,170,160,20,"Check",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"stop();");

  $m->nextFrame();

  clean_up($z);

  $z = array();

  // PAGE BEGINS

  $s = make_flashcard_(160,160,20,1,0x00,0x00,0x00,0xFF,0x00,0xFF);

  $i->setName("flashcard2");

  $i = $m->add($s);

  $i->moveTo(5,5);

  array_push($z,$i);

  array_push($z,placetext("Ecouter",$m,70,80,0x00,0x00,0x00,80,80,13));

  $material = button("flashcard2.x = -1000;",5,170,160,20,"Next",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"stop();");

  $m->nextFrame();

  clean_up($z);
  // Send data 
  $m->save("flashcard2.swf",0);
  
?>
