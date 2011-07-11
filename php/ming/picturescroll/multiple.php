<?php

  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);

  include "../ming_functions.php";

  $z = array();
  $v = array();


$m = new SWFMovie();
$m->setFrames(3);
$m->setBackground(0xff, 0xff, 0xff);  
$m->setDimension(178, 206);

$img = "schoolsign.jpg";

$jpg = new SWFBitmap(fopen($img,"rb"));

$q = new SWFSprite();
$i = $q->add($jpg);
$q->nextFrame();
 
$i = $m->add($q);
$i->moveTo(0,0);
$i->scale(0.4,0.4);
$i->setName("drag1");

  array_push($z,$i);


$img = "schoolsign.jpg";

$jpg = new SWFBitmap(fopen($img,"rb"));

$q = new SWFSprite();
$i = $q->add($jpg);
$i->scale(0.2,0.2);
$q->nextFrame();
 
$i = $m->add($q);
$i->moveTo(0,0);
$i->setName("drag2");

  array_push($z,$i);

  $material = button("curr_drag._x-=10;",5,180,20,20,"L",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,20);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  $material = button("curr_drag._x+=10;",30,180,20,20,"R",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,20);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  $material = button("curr_drag._y-=10;",55,180,20,20,"U",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,20);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  $material = button("curr_drag._y+=10;",80,180,20,20,"D",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,20);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  $material = button("if(curr_drag==drag1){curr_drag=drag2;}else{curr_drag=drag1;};",105,180,20,20,"O",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,20);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  $material = button("nextFrame();",135,180,40,20,"Next",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,50);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"curr_drag=drag1;"); 

  add_actionscript($m,"stop();");  

  $m->nextFrame();

  clean_up($z);

  $m->save("multiple.swf",0);


?>
