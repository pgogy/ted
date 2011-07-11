<?
  
  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);
 
  include "../ming_functions.php";

  $m = createnewswf(1.0,176,208,0xFF,0xFF,0xFF);

  $z = array();

  add_actionscript($m,"answer=\"hello\";");

  $m->nextFrame();

  $string_swf = new SWFPrebuiltClip(fopen("fuck.swf",'rb'));

  print_r($string_swf);
  
  $wood = $m->add($string_swf);

  $wood->moveTo(90,50);
  
  array_push($z,$i);  

  add_actionscript($m,"stop();");

  $m->save("wordfill.swf",0);
  
?>
