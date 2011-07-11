<?
  
  include "../ming_functions.php";

  $m = createnewswf(1.0,176,208,0xFF,0xFF,0xFF);

  $z = array();

  $cover = array();

  add_actionscript($m,"correctword=\"hello\";answer=\"\";correctfeedback=\"Well done\";incorrectfeedback=\"Sorry that is wrong\";");

  // PAGE BEGINS


  $string = "The Battle of Bosworth happened in *1485. It was fought in the county of *Leicestershire between King *Richard the *Third and Henry *Tudor. ";//This is *my section of *text, the *missing words are *prefixed with *an asterik";

  $new_array = explode(" ",$string);

  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);

  $width = 178;
  $height = 208;

  $x_cord = 0;

  $y_cord = 10;  

  $word_count = 0;

  $missing_words=0;

  while($word_count!=count($new_array)){

        $t = new SWFText();  
  	
        $t->setFont($f);	
        $t->setColor(0x00,0x00,0x00);
        $t->setHeight(15);


	echo $new_array[$word_count] . "<br>";

  	if(($x_cord+$t->getWidth($new_array[$word_count]))<$width){

		$t->MoveTo($x_cord,$y_cord);		

	}else{

		echo "reseting to 0 <br>";

		$x_cord=0;
		$y_cord+=17;
		$t->MoveTo($x_cord,$y_cord);

	}

	if(strpos($new_array[$word_count],"*")!==0){

		$t->addString($new_array[$word_count]);

		$x_cord = $x_cord + $t->getWidth($new_array[$word_count]) + 2;

		$i = $m->add($t);

		array_push($z,$i);

		$word_count++;

	}else{	

		$d = draw_rectangle($x_cord,$y_cord-12,15,(0-$t->getWidth(substr($new_array[$word_count],1,strlen($new_array[$word_count])-1))),100,0X00,0X00,0X00);	

		$t->addString(substr($new_array[$word_count],1,strlen($new_array[$word_count])-1));

		$i = $m->add($d);

		array_push($cover,$i);

		$i = $m->add($t);

		array_push($z,$i);

		$x_cord = $x_cord + $t->getWidth(substr($new_array[$word_count],1,strlen($new_array[$word_count])-1)) + 2;

		$word_count++;

		$missing_words+=1;
		

	}

  }

  $material = button("nextFrame();",5,180,170,20,"Next",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,170);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"stop();");
  
  $currframe=0;

  $m->nextFrame();

  echo "currframe is " . $currframe . " missing words is " . $missing_words . "<br>";

  while($currframe!=$missing_words){

	echo "hello<br>";

	$i = $cover[$currframe];
	$i->remove();
	$m->nextFrame();

	if($currframe!=$missing_words-1){

		add_actionscript($m,"stop();");
		echo "adding a stop <br>";
		

	}

	$currframe+=1;

 
  }

  while($i = array_pop($z)){

	print_r($i) . "<br>";

	$i->remove();

  }	


  $m->nextFrame();

  print_r($z);


  $m->save("rmmissingwords.swf",0);
  
?>
