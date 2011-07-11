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
$i->moveTo(30,40);
$i->setName("drag2");


  array_push($z,$i);       

  array_push($z,placeinputtext($m,5,160,0x00,0x00,0x00,10,170,10,"inputtext",$f));

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

  $material = button("if((drag2._x<curr_drag._x)&&((drag2._x + drag2._width)>curr_drag._x)){if((drag2._y<curr_drag._y)&&((drag2._y + drag2._height)>curr_drag._y)){inputtext='hit';}else{inputtext='miss';}}else{inputtext='miss';};",105,180,20,20,"Check",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,20);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  $material = button("nextFrame();",135,180,40,20,"Next",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,50);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"curr_drag=drag1;"); 

  add_actionscript($m,"stop();");  

  $m->nextFrame();

  clean_up($z);

  $m->save("dragdrop.swf",0);


?>
