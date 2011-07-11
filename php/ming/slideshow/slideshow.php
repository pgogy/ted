<?

  
  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);

  include "../ming_functions.php";

  $m = createnewswf(1.0,176,208,0xFF,0xFF,0xFF);

// image to add to movie
  $img= array("yoss.jpg","yoss2.jpg","yoss3.jpg");

  for($x=0;$x!=count($img);$x++){

	  $z = array();

	  $jpg = new SWFBitmap(fopen($img[$x],"rb")); 
	  $pic = $m->add($jpg);
	  $pic->moveTo(0,0);
	  array_push($z,$pic);

	  $material = button("nextFrame();",5,180,160,20,"Next",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

	  array_push($z,$material[0]);
	  array_push($z,$material[1]);

	  array_push($z,placetext("Picture 1 - Catch 22",$m,5,160,0x00,0x00,0x00,170,15,13));
		
	  add_actionscript($m,"stop();");

	  $m->nextFrame();		

	  clean_up($z);

  }

  $m->save("slideshow.swf",9);

?>
