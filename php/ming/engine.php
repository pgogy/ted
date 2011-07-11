<?PHP

	include "ted_engine.php";

	include "colour_hex.php";

	include "image_convert.php";

	$ted_engine = new ted_engine;

	$colour_hex = new colour_hex;

	$image_convert = new image_convert;

	$ted_engine->set_array(explode(",",$_POST['pages_index']),explode("*,*",$_POST['instruction_set']));

	if($_POST['background_colour']==""){
		
		$r = "0xff";
		$g = "0xff"; 
		$b = "0xff";

	}else{

		$r = "0x" . substr($_POST['background_colour'],1,2);
		$g = "0x" . substr($_POST['background_colour'],3,2);
		$b = "0x" . substr($_POST['background_colour'],5,2);

	}

	if(strpos($_POST['instruction_set'], "SCROLLPICTURE")===false&&strpos($_POST['instruction_set'], "HOTSPOTPICTURE")===false){

		echo "VERSION 4\n";

		$version = 4;

	}else{

		echo "VERSION 5\n";

		$version = 5;
	
	}

	$movie = $ted_engine->createnewswf(($ted_engine->page_index[count($ted_engine->page_index)-1])+1,1.0,$_POST['height'],$_POST['width'],$r,$g,$b,$version);

	$items_array = array();

	$ted_engine->add_actionscript($movie,"ted_score=0;");	

	while($instruction = $ted_engine->next_instruction()){

		if($instruction=="NEXT_FRAME"){

			$ted_engine->add_actionscript($movie, "stop();");

			$movie->nextFrame();	

			$ted_engine->clean_up($items_array);

			$items_array = array();		

		}else{

			$arguments = explode("***", $instruction);

			if($arguments[0]=="PAGE_ACTION"){
		
				if($arguments[1]!="null"){
				
					$ted_engine->add_actionscript($movie, $arguments[1]);

				}						

			}else if($arguments[0]=="TEXT"){

				$text_c = $colour_hex->colour_process($arguments[5]);

				$back_c = $colour_hex->colour_process($arguments[6]);

				$font = $ted_engine->makeswffont($arguments[9]);

				$q = $ted_engine->draw_rectangle($arguments[1],$arguments[2],$arguments[8],$arguments[7],100,$back_c[0],$back_c[1],$back_c[2]);

				$text_remove = $movie->add($q);

				$z = $ted_engine->placetext(str_replace("<BR>","\n",$arguments[3]),$movie,$arguments[1],$arguments[2],$text_c[0],$text_c[1],$text_c[2],$arguments[7],$arguments[8],substr($arguments[4],0,2),$font);

				array_push($items_array,$z);

				array_push($items_array,$text_remove);

			}else if($arguments[0]=="SMS"){

				$swf = $ted_engine->add_text_sender($arguments[10],$arguments[11],$movie);

				$swf->moveTo(-20,-20);

				array_push($items_array,$swf);

				$text_c = $colour_hex->colour_process($arguments[5]);

				$back_c = $colour_hex->colour_process($arguments[6]);

				$font = $ted_engine->makeswffont($arguments[9]);

				$q = $ted_engine->draw_rectangle($arguments[1],$arguments[2],$arguments[8],$arguments[7],100,$back_c[0],$back_c[1],$back_c[2]);

				$text_remove = $movie->add($q);

				$z = $ted_engine->placetext($arguments[3],$movie,$arguments[1],$arguments[2],$text_c[0],$text_c[1],$text_c[2],$arguments[7],$arguments[8],substr($arguments[4],0,2),$font);

				array_push($items_array,$z);

				array_push($items_array,$text_remove);


			}else if($arguments[0]=="URL"){

				$text_c = $colour_hex->colour_process($arguments[5]);

				$back_c = $colour_hex->colour_process($arguments[6]);

				$font = $ted_engine->makeswffont($arguments[9]);

				$q = $ted_engine->draw_rectangle($arguments[1],$arguments[2],$arguments[8],$arguments[7],100,$back_c[0],$back_c[1],$back_c[2]);

				$text_remove = $movie->add($q);

				$z = $ted_engine->placetext($arguments[3],$movie,$arguments[1],$arguments[2],$text_c[0],$text_c[1],$text_c[2],$arguments[7],$arguments[8],substr($arguments[4],0,2),$font);

				array_push($items_array,$z);

				array_push($items_array,$text_remove);

				$swf = $ted_engine->add_url_page($arguments[10],$movie);

				$swf->moveTo(0,0);

				array_push($items_array,$swf);


			}else if($arguments[0]=="SCOREPAGE"){

				echo "score page \n";

				$text_c = $colour_hex->colour_process($arguments[5]);

				$back_c = $colour_hex->colour_process($arguments[6]);
	
				$font = $ted_engine->makeswffont($arguments[9]);

				$q = $ted_engine->draw_rectangle($arguments[1],$arguments[2],$arguments[8],$arguments[7],100,$back_c[0],$back_c[1],$back_c[2]);
				$text_remove = $movie->add($q);

				$z = $ted_engine->scoreplacetext($arguments[3],$movie,$arguments[1],$arguments[2],$text_c[0],$text_c[1],$text_c[2],$arguments[7],$arguments[8],13,$font);

				array_push($items_array,$z);

				array_push($items_array,$text_remove);

			}else if($arguments[0]=="RECTANGLE"){

				$back_c = $colour_hex->colour_process($arguments[6]);

				$rectangle = $ted_engine->draw_rectangle($arguments[1],$arguments[2],$arguments[5],$arguments[4],100,$text_c[0],$text_c[1],$text_c[2]);

				$remove_rectangle = $movie->add($rectangle);

				array_push($items_array,$remove_rectangle);

			}else if($arguments[0]=="PICTURE"){

				$image = $image_convert->process_image($arguments,$movie, $ted_engine);	

				array_push($items_array,$image);	

			}else if($arguments[0]=="HOTSPOTPICTURE"){

				$hotspot = $ted_engine->next_instruction();

				$hotspot_parameters = explode("***", $hotspot);

				$hotspot_tag = $ted_engine->make_hotspot($hotspot_parameters[1],$hotspot_parameters[2],$hotspot_parameters[3],$hotspot_parameters[4],$movie);		

				array_push($items_array,$hotspot_tag);

				echo "HERE \n";

				$image = $image_convert->process_image($arguments,$movie,$ted_engine);	

				echo "AND THEN HERE \n";

				array_push($items_array,$image);

			}else if($arguments[0]=="LABEL"){
				
				$text_c = $colour_hex->colour_process($arguments[6]);

				$back_c = $colour_hex->colour_process($arguments[7]);

				$label = $ted_engine->make_label($arguments[1],$arguments[2],$arguments[3],$arguments[4],$arguments[5],$text_c,$back_c,$arguments[8],$arguments[9],$movie,$hotspot_parameters);	

				array_push($items_array,$label);

			}else if($arguments[0]=="FB"){

				$text_c = $colour_hex->colour_process($arguments[6]);

				$back_c = $colour_hex->colour_process($arguments[7]);

				$rectangle = $ted_engine->draw_rectangle($arguments[1],$arguments[2],$arguments[9],$arguments[8],100,$back_c[0],$back_c[1],$back_c[2]);
				$delete_rectangle = $movie->add($rectangle);

				array_push($items_array,$delete_rectangle);				

				$response = $ted_engine->make_response_area($arguments[1],$arguments[2],$ted_engine->makeswffont($arguments[4]),substr($arguments[7],0,2 ),$text_c,$back_c,$arguments[8],$arguments[9],$arguments[10],$arguments[11],$movie);

				while($delete_item = array_pop($response)){

					array_push($items_array, $delete_item);

				}				

			}else if($arguments[0]=="SCROLLPICTURE"){

				$file_name = $image_convert->process_scroll_image($arguments);

				$i = $ted_engine->insert_scroll_picture($movie, $file_name, $arguments[2],$arguments[3]);					

				array_push($items_array,$i);
				
				for($x=0;$x!=4;$x++){

					$instruction = $ted_engine->next_instruction();

					$instruction_variables = explode("***",$instruction);

					if($instruction_variables[0]=="BUTTON"){

						$text_c = $colour_hex->colour_process($instruction_variables[8]);

						$back_c = $colour_hex->colour_process($instruction_variables[9]);

						switch($instruction_variables[1]){	
	
							case "Move up" 		: $action = "curr_drag._y+=10;"; break;				
							case "Move down"	: $action = "curr_drag._y-=10;"; break;
							case "Move left" 	: $action = "curr_drag._x-=10;"; break;
							case "Move right" 	: $action = "curr_drag._x+=10;"; break;
							default			: break;

						}

						$action = "stop();";
									  
						$material = $ted_engine->button($action,$instruction_variables[3],$instruction_variables[4],$instruction_variables[10],$instruction_variables[11],$instruction_variables[5],$text_c[0],$text_c[1],$text_c[2],$back_c[0],$back_c[1],$back_c[2],substr($instruction_variables[7],0,2 ),$ted_engine->makeswffont($instruction_variables[6]),$movie);

						array_push($items_array,$material[0]);
						array_push($items_array,$material[1]); 


					}

				}
				

			}else if($arguments[0]=="BUTTON"){

				$text_c = $colour_hex->colour_process($arguments[8]);

				$back_c = $colour_hex->colour_process($arguments[9]);		

				if(($arguments[1]=="next page")||($arguments[1]=="Flashcard reveal")){

					$action = "nextFrame();";

				}else if($arguments[1]=="page_1"){

					$action = "gotoFrame(0);";


				}else if(strpos($arguments[1],"page_")===0){

					$action = "gotoFrame(" . $ted_engine->page_index[(substr($arguments[1],5)-2)] . ");";

				}else if($arguments[1]=="Stimulatingreveal"){

					$action = "nextFrame();";				

				}

				$font = $ted_engine->makeswffont($arguments[6]);

				$button = $ted_engine->button($action,$arguments[3],$arguments[4],$arguments[10],$arguments[11],$arguments[5],$text_c[0],$text_c[1],$text_c[2],$back_c[0],$back_c[1],$back_c[2],substr($arguments[7],0,2),$font,$movie);

				array_push($items_array,$button[0]);	
				array_push($items_array,$button[1]);
				

			}else if($arguments[0]=="SCOREBUTTON"){

				$text_c = $colour_hex->colour_process($arguments[7]);

				$back_c = $colour_hex->colour_process($arguments[8]);

				if($arguments[1]==0){

					$action = "number_of_questions++; play();";					

				}else{
					
					$action = "number_of_questions++; ted_score++; play();";					

				}
				
				$font = $ted_engine->makeswffont($arguments[5]);

				$button = $ted_engine->button($action,$arguments[2],$arguments[3],$arguments[9],$arguments[10],$arguments[4],$text_c[0],$text_c[1],$text_c[2],$back_c[0],$back_c[1],$back_c[2],substr($arguments[6],0,2),$font,$movie);

				array_push($items_array,$button[0]);	
				array_push($items_array,$button[1]);


			}else if($arguments[0]=="FLASHCARD"){

				$back_c = $colour_hex->colour_process($arguments[9]);	

				$text_c = $colour_hex->colour_process($arguments[7]);	

				$s = $ted_engine->make_flashcard($arguments[10],$arguments[11],20,1,$text_c[0],$text_c[1],$text_c[2],$back_c[0],$back_c[1],$back_c[2]);

				$flash = $movie->add($s);

				$flash->moveTo($arguments[3],$arguments[4]);

				$font = $ted_engine->makeswffont($arguments[8]);

				$z = $ted_engine->placetext($arguments[1],$movie,($arguments[10]/2)-20,$arguments[11]/2,$text_c[0],$text_c[1],$text_c[2],$arguments[10],$arguments[11],substr($arguments[6],0,2),$font);

				array_push($items_array,$flash);

				array_push($items_array,$z);

				$new_instruction = $ted_engine->next_instruction();

				$new_arguments = explode("***", $new_instruction);

				$text_c = $colour_hex->colour_process($arguments[8]);

				$back_c = $colour_hex->colour_process($arguments[9]);

				$action = "nextFrame();";

				$text_button_c = $colour_hex->colour_process($new_arguments[8]);

				$back_button_c = $colour_hex->colour_process($new_arguments[9]);
				
				$font = $ted_engine->makeswffont($new_arguments[6]);

				$button = $ted_engine->button($action,$new_arguments[3],$new_arguments[4],$new_arguments[10],$new_arguments[11],"Reveal",$text_button_c[0],$text_button_c[1],$text_button_c[2],$back_button_c[0],$back_button_c[1],$back_button_c[2],substr($new_arguments[7],0,2),$font,$movie);

				array_push($items_array,$button[0]);

				array_push($items_array,$button[1]);

				$ted_engine->add_actionscript($movie, "stop();");

				$movie->nextFrame();

				$ted_engine->clean_up($items_array);

				$items_array = array();					

				$s = $ted_engine->make_flashcard($arguments[10],$arguments[11],20,1,0,0,0,120,255,120);

				$flash = $movie->add($s);

				$flash->moveTo($arguments[3],$arguments[4]);

				$font = $ted_engine->makeswffont($arguments[8]);

				$z = $ted_engine->placetext($arguments[2],$movie,($arguments[10]/2)-20,$arguments[11]/2,0,0,0,$arguments[10],$arguments[11],substr($arguments[6],0,2),$font);

				array_push($items_array,$z);

				$new_instruction = $ted_engine->next_instruction();

				$text_c = $colour_hex->colour_process($arguments[8]);

				$back_c = $colour_hex->colour_process($arguments[9]);

				$button = $ted_engine->button("nextFrame();",$new_arguments[3],$new_arguments[4],$new_arguments[10],$new_arguments[11],"Next",$text_button_c[0],$text_button_c[1],$text_button_c[2],$back_button_c[0],$back_button_c[1],$back_button_c[2],substr($new_arguments[7],0,2),$font,$movie);

				array_push($items_array,$flash);

				array_push($items_array,$button[0]);

				array_push($items_array,$button[1]);

			}else if($arguments[0]=="MISSINGWORDS"){

				$arguments[3] = stripcslashes(str_replace("\r","\n",$arguments[3]));

				$text_c = $colour_hex->colour_process($arguments[5]);

				$back_c = $colour_hex->colour_process($arguments[6]);

				$rectangle = $ted_engine->draw_rectangle($arguments[1],$arguments[2],$arguments[7],$arguments[8],100,$back_c[0],$back_c[1],$back_c[2]);
				$remove_rectangle = $movie->add($rectangle);
				
				$ted_engine->missing_words($arguments,$movie,$text_c,$items_array);

				$remove_rectangle->remove();

				$ted_engine->add_actionscript($movie,"nextFrame();");

			}else if($arguments[0]=="WFP"){		

				$font = $ted_engine->makeswffont($arguments[7]);		

				$ted_engine->add_actionscript($movie,"correct=\"" . $arguments[1] . "\";answer=\"\";correctfeedback=\"" . $arguments[3] . "\";incorrectfeedback=\"" . $arguments[2] . "\";");
	
				$text_c = $colour_hex->colour_process($arguments[9]);

				$back_c = $colour_hex->colour_process($arguments[10]);

				$font = $ted_engine->makeswffont($arguments[7]);

				$q = $ted_engine->draw_rectangle($arguments[4],$arguments[5],$arguments[12],$arguments[11],100,$back_c[0],$back_c[1],$back_c[2]);

				$shape = $movie->add($q);		

				$z = $ted_engine->placetext($arguments[6],$movie,$arguments[4],$arguments[5],$text_c[0],$text_c[1],$text_c[2],$arguments[11],$arguments[12],substr($arguments[8],0,2),$font);

				array_push($items_array,$shape);

				array_push($items_array,$z);

			}else if($arguments[0]=="STIMULATING"){	

				$ted_engine->add_actionscript($movie, "stop();");

				$movie->nextFrame();
				
				$text_c = $colour_hex->colour_process($arguments[6]);

				$back_c = $colour_hex->colour_process($arguments[7]);

				$font = $ted_engine->makeswffont($arguments[4]);

				$q = $ted_engine->draw_rectangle($arguments[1],$arguments[2],$arguments[9],$arguments[8],100,$back_c[0],$back_c[1],$back_c[2]);

				$text_remove = $movie->add($q);

				$z = $ted_engine->placetext($arguments[3],$movie,$arguments[1],$arguments[2],$text_c[0],$text_c[1],$text_c[2],$arguments[8],$arguments[9],substr($arguments[4],0,2),$font);

				array_push($items_array,$z);

				array_push($items_array,$text_remove);

	
			}else if($arguments[0]=="WFA"){	

				$font = $ted_engine->makeswffont($arguments[5]);

				$text_c = $colour_hex->colour_process($arguments[4]);

				$back_c = $colour_hex->colour_process($arguments[6]);

				$q = $ted_engine->draw_rectangle($arguments[1],$arguments[2],$arguments[8],$arguments[7],100,$back_c[0],$back_c[1],$back_c[2]);
				$shape = $movie->add($q);

				$z = $ted_engine->placeinputtext($movie,$arguments[1],$arguments[2],$text_c[0],$text_c[1],$text_c[2],$arguments[6],$arguments[7],13,"inputtext",$font);

				array_push($items_array,$shape);

				array_push($items_array,$z);

	
			}else if($arguments[0]=="WFR"){	

				$button_parameters = $ted_engine->next_instruction();

				$button_parameters = explode("***", $button_parameters);

				$text_c = $colour_hex->colour_process($button_parameters[8]);

				$back_c = $colour_hex->colour_process($button_parameters[9]);

				$material = $ted_engine->button("answer = inputtext;play();",$button_parameters[3]
,$button_parameters[4],$button_parameters[10],$button_parameters[11],$button_parameters[1],$text_c[0],$text_c[1],$text_c[2],$back_c[0],$back_c[1],$back_c[2],substr($button_parameters[7],0,2),$font,$movie);   

				$ted_engine->add_actionscript($movie,"stop();");

				$movie->nextFrame();

				$string_swf = new SWFPrebuiltClip(fopen("../../flashcomponents/text_compare.swf",'rb'));
  
				$wood = $movie->add($string_swf);

				$wood->moveTo(0,0);

				array_push($items_array,$wood);

				$movie->nextFrame();

				$x = $material[0];

				$x->remove();

				$x = $material[1];

				$x->remove();		
 
				$ted_engine->add_actionscript($movie,"stop();");

				$material = $ted_engine->button("nextFrame();",$button_parameters[3],$button_parameters[4],$button_parameters[10],$button_parameters[11],"Next",$text_c[0],$text_c[1],$text_c[2],$back_c[0],$back_c[1],$back_c[2],substr($button_parameters[7],0,2),$font,$movie);		

				array_push($items_array,$material[0]);

				array_push($items_array,$material[1]);		

				$font = $ted_engine->makeswffont("sans-serif");

				$text_c = $colour_hex->colour_process($button_parameters[6]);

				$back_c = $colour_hex->colour_process($button_parameters[5]);

				$q = $ted_engine->draw_rectangle($arguments[1],$arguments[2],$arguments[8],$arguments[7],100,0xFF,0xFF,0xFF);
				
				$shape = $movie->add($q);

				array_push($items_array,$shape);

				$z = $ted_engine->placeinputtext($movie,$arguments[1],$arguments[2],0x00,0x00,0x00,$arguments[8],$arguments[7],13,"space",$font);
				  
				array_push($items_array,$z);

				//$movie->nextFrame();

				$ted_engine->add_actionscript($movie,"if(result){space = correctfeedback;}else{space = incorrectfeedback;}"); 
	
				$ted_engine->add_actionscript($movie,"stop();"); 

			
			}

		}

  	}

	$ted_engine->add_actionscript($movie, "stop();");

	$array = explode("\\",$_POST['file_name']);

	$file_name = substr($array[count($array)-1],0,strlen($array[count($array)-1])-4);

	if(file_exists($file_name . ".swf")){

		unlink($file_name . ".swf");

	}

	$movie->save($file_name . ".swf",0);

	$dir = opendir("../../image_process/");

	while($file = readdir($dir)){

		if(file_exists("../../image_process/" . $file)){

			if($file!="."&&$file!=".."){

				unlink("../../image_process/" . $file);

			}

		}

	}

	echo "***END";
	
?>