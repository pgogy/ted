<?
  
  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);
 
  include "../ming_functions.php";

  $m = createnewswf(1.0,176,208,0xFF,0xFF,0xFF);

  $z = array();

  add_actionscript($m,"if(parcomp){gotoAndPlay(2);}else{gotoAndPlay(3);}");

  $m->nextFrame();

  array_push($z,placeinputtext($m,5,65,0x00,0x00,0x00,30,160,13,"feedbackarea",$f));

  add_actionscript($m,"feedbackarea = par_incorrectfeedback; stop();");

  $m->nextFrame();

  array_push($z,placeinputtext($m,5,65,0x00,0x00,0x00,30,160,13,"feedbackarea",$f));

  add_actionscript($m,"feedbackarea = par_correctfeedback; stop();");

  add_actionscript($m,"stop();");

  $m->save("feedback.swf",0);

  $buffer = file_get_contents("feedback.swf");

  $fh = fopen("feedback.swf",'w');

  $buffer = str_replace("par_","..:",$buffer);

  echo $buffer . "<br>";

  $buffer = str_replace("parcomp","..:answer –  ..:correctword",$buffer);

  fwrite($fh,$buffer);

  fclose($fh);

  print_r($buffer);
  
?>