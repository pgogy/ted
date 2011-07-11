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

$img = "podsol.jpg";

$jpg = new SWFBitmap(fopen($img,"rb"));

$q = new SWFSprite();
$i = $q->add($jpg);
$i->scale(0.8,0.8);
$q->nextFrame();
 
$i = $m->add($q);
$i->moveTo(0,0);
$i->setName("drag2");

  array_push($z,$i);

$img = "label.jpg";

$jpg = new SWFBitmap(fopen($img,"rb"));

$q = new SWFSprite();
$i = $q->add($jpg);
$q->nextFrame();
 
$i = $m->add($q);
$i->moveTo(0,0);
$i->scale(1.0,1.0);
$i->setName("drag1");

  array_push($z,$i);       

  $i = $m->add(basic_input_background(5,160,10,80,0xFF,0xFF,0xFF));

  array_push($z,$i);  

  array_push($z,placeinputtext($m,5,160,0x00,0x00,0x00,10,170,10,"inputtext",$f));

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

  $material = button("if((drag1._y>90)&&(drag1._y<120)){inputtext='Yes, that is the iron pan';}else{inputtext='No that is not the iron pan';};",105,180,20,20,"Check",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,20);

  //$material = button("inputtext=drag1._y;",105,180,20,20,"Check",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,20);

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
