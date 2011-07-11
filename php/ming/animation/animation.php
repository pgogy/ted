<?

  
  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);

  include "../ming_functions.php";

  Ming_useSWFVersion(4);

  
Ming_setScale(20.0);

$images = array("bg.jpg","jh.jpg","kk.jpg","kn.jpg","sw.jpg");

function animation($height, $width, $image_array, $rate, $r, $g, $b, $m){

	$counter=0;

	$frame_counter=0;

	while($counter<count($image_array)){

		echo "adding " . $image_array[$counter] . "<br>";

		$img=$image_array[$counter++];

		echo $img . "<Br>";

		$jpg = new SWFBitmap(fopen($img,"rb")); 

		$this_width = $jpg->getHeight();
		$this_height = $jpg->getWidth();
		
		$f1 = $m->add($jpg);

		$xscale = 1  / ( $this_width / $width );
		$yscale = 1 / ( $this_height / $height );

		echo $xscale . " " . $yscale . "<br>";

		if($xscale<$yscale){

			$f1->scaleTo($xscale,$xscale);

		}else{

			$f1->scaleTo($yscale,$yscale);			

		}

		$f1->moveTo(0,0);

		while($frame_counter<$rate){

			$m->nextFrame();
			$frame_counter++;

		}

		$frame_counter=0;
		$f1->remove();

	}

}

$m=new SWFMovie();
$m->setDimension(176,208);
$m->setBackground(0xFF,0xFF,0xFF);
$m->setFrames(1);
$m->setRate(1.0);

$filename = animation(170,170,$images,5,0x00,0x00,0x00, $m);

add_actionscript($m,"play();");

$m->save("animation.swf",9);


?>
