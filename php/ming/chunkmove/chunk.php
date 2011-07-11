<?
  
  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);

  include "../ming_functions.php";

  $m = createnewswf(1.0,176,208,0xFF,0xFF,0x00);

  $z = array();

  // PAGE BEGINS

  $i = placetext("Question 1",$m,5,5,0x00,0x00,0x00,170,15,13);
 
  $q = $m->add($i);

 $q->nextFrame();

  $q->setName("hello");
 
  $material = chunk_button("this.y+=10;",5,5,70,20,"Up",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);

  array_push($z,$material[1]);

  $material = chunk_button("this.y-=10;",80,5,70,20,"Down",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);

  array_push($z,$material[1]);

  add_actionscript($m,"stop();");

  $m->nextFrame();

  clean_up($z);

  // Send data 

  $m->save("chunkmove.swf",0);

  
?>
