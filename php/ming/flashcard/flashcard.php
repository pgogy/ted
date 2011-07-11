<?
  
  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);

  include "../ming_functions.php";

  $m = createnewswf(1.0,176,208,0xFF,0xFF,0xFF);

  $z = array();

  // PAGE BEGINS

  $s = make_flashcard(160,160,20,1,0x00,0x00,0x00,0xFF,0xFF,0xFF);

  $i = $m->add($s);

  $i->moveTo(5,5);

  array_push($z,$i);

  array_push($z,placetext("Listen",$m,70,80,0x00,0x00,0x00,80,80,13));

  $material = button("nextFrame();",5,170,160,20,"Check",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"stop();");

  $m->nextFrame();

  clean_up($z);

  $z = array();

  // PAGE BEGINS

  $s = make_flashcard(160,160,20,1,0x00,0x00,0x00,0xFF,0x00,0xFF);

  $i = $m->add($s);

  $i->moveTo(5,5);

  array_push($z,$i);

  array_push($z,placetext("Ecouter",$m,70,80,0x00,0x00,0x00,80,80,13));

  $material = button("nextFrame();",5,170,160,20,"Next",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"stop();");

  $m->nextFrame();

  clean_up($z);

$z = array();

  add_actionscript($m,"score=0; number_of_questions=1;");

  // PAGE BEGINS

  $s = make_flashcard(160,160,20,1,0x00,0x00,0x00,0xFF,0xFF,0xFF);

  $i = $m->add($s);

  $i->moveTo(5,5);

  array_push($z,$i);

  array_push($z,placetext("Eat",$m,70,80,0x00,0x00,0x00,80,80,13));

  $material = button("nextFrame();",5,170,160,20,"Check",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"stop();");

  $m->nextFrame();

  clean_up($z);

  $z = array();

  // PAGE BEGINS

  $s = make_flashcard(160,160,20,1,0x00,0x00,0x00,0xFF,0x00,0xFF);

  $i = $m->add($s);

  $i->moveTo(5,5);

  array_push($z,$i);

  array_push($z,placetext("Manger",$m,70,80,0x00,0x00,0x00,80,80,13));

  $material = button("nextFrame();",5,170,160,20,"Next",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"stop();");

  $m->nextFrame();

  clean_up($z);

 $m->nextFrame();

  // Send data 
  $m->save("rmflashcard.swf",0);
  
?>
