<?
  
  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);
 
  include "../ming_functions.php";

  $m = createnewswf(1.0,176,208,0xFF,0xFF,0xFF);

  $string_swf = new SWFPrebuiltClip(fopen("text_compare.swf",'rb'));

  add_actionscript($m,"answer = \"andy\"; correct=\"andy\";");

  print_r($string_swf);
  
  $wood = $m->add($string_swf);

  $wood->moveTo(0,0);

  placeinputtext($m,5,100,0x00,0x00,0x00,30,160,13,"space",$f);

  $i = $m->add(basic_input_background(5,100,15,30,0x00,0x00,0x00));

  $m->nextFrame();

  add_actionscript($m,"if(result){space = \"good\";}else{space = \"bad\";}");  

  add_actionscript($m,"stop();");
  
  $m->save("import.swf",0);  
  
?>
