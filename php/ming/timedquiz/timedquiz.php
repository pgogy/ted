<?

  include "../ming_functions.php";

  $question_array = array();

  $font="../../../fonts/_sans.fdb";

  $f = new SWFFont($font);

  $m = createnewswf(1.0,176,208,0xFF,0xFF,0xFF);

  placeinputtext($m,5,180,0x00,0x00,0x00,100,170,13,"inputtext",$f);

  //add_actionscript($m,"inputtext='hello';");

  function timed_questions($m, $question_array, $rate){

	$frame_counter=0;
	
	$counter=0;

	echo "timed questions <Br>";

	$m->nextFrame();

	while($counter!=count($question_array)){

		echo $counter . "<br>";

		echo $question_array[$counter][question] . "<br>";

		$z = array();
		
		array_push($z,placetext($question_array[$counter][question],$m,5,25,0x00,0x00,0x00,160,70,13));

		for($x=0;$x!=count($question_array[$counter][answers]);$x++){	

			$material = button("inputtext= " . $question_array[$counter][scores][$x] . ";",5,120+($x*25),160,20,$question_array[$counter][answers][$x],0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

			array_push($z,$material[0]);
			array_push($z,$material[1]); 

		}

		while($frame_counter<$rate){

			$m->nextFrame();

			$frame_counter+=1;

			if($frame_counter==($rate)){

				echo "deleting page<br>";
				
				add_actionscript($m,"inputtext='';");
	
				while($q = array_pop($z)){

					echo "deleting item <br>";
			
					$q->remove();

				}



			}


		}

		
		$frame_counter=0;

		$counter+=1;

	}

	echo "done loop <br>";

}

  function make_question_array($question_no,$question,$answers,$scores){

 	global $question_array;

	$count = 0;

	$question_array[$question_no]["question"]=$question;
	$question_array[$question_no]["answers"]=$answers;
	$question_array[$question_no]["scores"]=$scores;
	
  }

  $answers = array("Pat","John");

  $scores = array("'true'","'false'");

  make_question_array(0,"What is my name?",$answers,$scores);

  $answers = array("32","31");

  $scores = array("'false'","'true'");

  make_question_array(1,"How old am I?",$answers,$scores);
  
  timed_questions($m,$question_array,5);

  add_actionscript($m,"stop();");

  $m->save("timedquiz.swf",9);

?>
