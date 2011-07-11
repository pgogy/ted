<?PHP

	include "gif_engine.php";

	include "colour_hex.php";

	include "image_convert.php";

	$gif_engine = new gif_engine;

	$colour_hex = new colour_hex;

	$image_convert = new image_convert;
	
	$sans_serif = "../../fonts/sans-serif.ttf";
	$arial = "../../fonts/arial.ttf";
	$verdana = "../../fonts/verdana.ttf";
	
	function return_font_path($font){
	
		global $sans_serif, $arial, $verdana;
	
		switch($font){
		
			case "arial": $return_font = $arial; break;
			case "sans-serif": $return_font = $sans_serif; break;
			case "verdana": $return_font = $verdana; break;
		
		}
		
		return $return_font;
	
	}

	$gif_engine->set_array(explode(",",$_POST['pages_index']),explode("*,*",$_POST['instruction_set']));

	if($_POST['background_colour']==""){
		
		$colour = array(255,255,255);

	}else{

		$colour = $colour_hex->colour_process($_POST['background_colour']);

	}
	
	$gif_engine->set_gif_options(($ted_engine->page_index[count($ted_engine->page_index)-1])+1,1.0,$_POST['height'],$_POST['width'],$colour[0],$colour[1],$colour[2]);

	$items_array = array();

	while($instruction = $gif_engine->next_instruction()){

		if($instruction=="NEXT_FRAME"){
			
			if($gif_engine->skip_create != true){
			
				imagegif($gif_engine->curr_image,"gif_parts/" . $gif_engine->page_counter++ . ".gif");
				
			}else{
			
				$gif_engine->skip_create = false;
			
			}
			
			if($gif_engine->score_button==1){
	
				$colour = imagecolorallocate ($gif_engine->curr_image, $gif_engine->gif_bgcolour_r,$gif_engine->gif_bgcolour_g,$gif_engine->gif_bgcolour_b);
					
				$curr_image = imagecreatetruecolor($gif_engine->gif_width,$gif_engine->gif_height);	
					
				imagefill($curr_image,0,0,$colour);
					
				$image_to_scale = imagecreatefromgif("gif_parts/" .  --$gif_engine->page_counter . ".gif");	
				
				$size = getimagesize($gif_engine->page_counter . ".gif");
						
				imagecopyresampled($curr_image, $image_to_scale, 0, 0, 0, 0, $gif_engine->gif_width,$gif_engine->gif_height, $size[0], $size[1]);
		
				$image_to_scale = imagecreatefromgif("../../images/tick.gif");	
		
				$size = getimagesize("../../images/tick.gif");
				
				while($x = array_shift($gif_engine->correct_values)){
		
					imagecopyresampled($curr_image, $image_to_scale, $x-20, array_shift($gif_engine->correct_values)+3, 0, 0, $size[0], $size[1], $size[0], $size[1]);
		
				}
		
				imagegif($curr_image,"gif_parts/" . $gif_engine->page_counter++ . "_1.gif");
				
				$gif_engine->score_button=0;
					
			}
			
			if($gif_engine->flashcard_backup!=""){
	
				$colour = imagecolorallocate ($gif_engine->curr_image, $gif_engine->gif_bgcolour_r,$gif_engine->gif_bgcolour_g,$gif_engine->gif_bgcolour_b);
						
				$gif_engine->curr_image = imagecreatetruecolor($gif_engine->gif_width,$gif_engine->gif_height);	
							
				imagefill($gif_engine->curr_image,0,0,$colour);
			
				$temp = $colour_hex->colour_process($gif_engine->flashcard_backup[9]);
				
				imagefilledrectangle($gif_engine->curr_image , $gif_engine->flashcard_backup[3] , $gif_engine->flashcard_backup[4] , $gif_engine->flashcard_backup[3] + $gif_engine->flashcard_backup[10] , $gif_engine->flashcard_backup[4] + $gif_engine->flashcard_backup[11] , imagecolorallocate ($gif_engine->curr_image, $temp[0], $temp[1], $temp[2] ));
				
				$temp = $colour_hex->colour_process($gif_engine->flashcard_backup[8]);
				
				$colour = imagecolorallocate ($gif_engine->curr_image, $temp[0], $temp[1], $temp[2]);
				
				/// CHANGE FONT ///
				
				print_r($flashcard_backup);
			
				$gif_engine->placetext($gif_engine->flashcard_backup[2],$gif_engine->flashcard_backup[3] + ($gif_engine->flashcard_backup[10]/2) - 20,$gif_engine->flashcard_backup[4] + ($gif_engine->flashcard_backup[11]/2),$colour,$width,$height,(substr($gif_engine->flashcard_backup[6],0,2)/1.5),"../../fonts/sans-serif.ttf");
				
				imagegif($gif_engine->curr_image,"gif_parts/" . ($gif_engine->page_counter-1) . "_1.gif");
				
				$gif_engine->flashcard_backup="";
		
			}
			
			$colour = imagecolorallocate ($gif_engine->curr_image, $gif_engine->gif_bgcolour_r,$gif_engine->gif_bgcolour_g,$gif_engine->gif_bgcolour_b);
			
			$gif_engine->curr_image = imagecreatetruecolor($gif_engine->gif_width,$gif_engine->gif_height);
			
			imagefill($gif_engine->curr_image,0,0,$colour);

		}else{

			$arguments = explode("***", $instruction);

			if($arguments[0]=="PAGE_ACTION"){
		
				echo "Page actions will not work in GIF Mode<br>";					

			}else if($arguments[0]=="TEXT"){
				
				$colour = $colour_hex->colour_process($arguments[5]);
				
				$colour = imagecolorallocate($gif_engine->curr_image, $colour[0],$colour[1],$colour[2]);
				
				$words = explode(" ", $arguments[3]);
				
				$next_height = $arguments[2] + 10;
				
				$curr_width = $arguments[1];
				
				while($x = array_shift($words)){
								
					$results = imagettfbbox((substr($arguments[4],0,2)/1.5),0,return_font_path($arguments[9]),$x);
					
					if(($curr_width + $results[4])>$arguments[7]){
					
						$curr_width=$arguments[1];
						$next_height+=20;
					
					}
					
					$gif_engine->placetext(str_replace("<BR>","\n",$x),$curr_width,$next_height,$colour,$width,$height,(substr($arguments[4],0,2)/1.5),return_font_path($arguments[9]));
					$curr_width += $results[4] + 5;
									
				}
															
			}else if($arguments[0]=="SMS"){
			
				echo "SMS will not work in GIF Mode<br>";					

			}else if($arguments[0]=="URL"){
			
				echo "SMS will not work in GIF Mode<br>";		

			}else if($arguments[0]=="SCOREPAGE"){
			
				echo "SMS will not work in GIF Mode<br>";		

			}else if($arguments[0]=="RECTANGLE"){
			
				$colour = $colour_hex->colour_process($arguments[3]);
				
				imagefilledrectangle($gif_engine->curr_image , $arguments[1] , $arguments[2] , $arguments[1] + $arguments[4] , $arguments[2] + $arguments[5] , imagecolorallocate ($gif_engine->curr_image, $colour[0], $colour[1], $colour[2] ));

			}else if($arguments[0]=="PICTURE"){
			
				$gif_engine->insert_picture($arguments);

			}else if($arguments[0]=="HOTSPOTPICTURE"){
			
				$gif_engine->insert_picture($arguments);
							
				$arguments = explode("***",$gif_engine->next_instruction());
				
				imagerectangle($gif_engine->curr_image, $arguments[1] , $arguments[2] , ($arguments[1]+$arguments[3]) , ($arguments[2]+$arguments[4]) , imagecolorallocate($gif_engine->curr_image,255,255,255));
				
				imagefilledrectangle($gif_engine->curr_image, $arguments[1] , $arguments[2] , ($arguments[1]+$arguments[3]) , ($arguments[2]+$arguments[4]) , imagecolorallocatealpha($gif_engine->curr_image,255,255,255,50));

				echo "gif_parts/" . $gif_engine->page_counter . ".gif\n";

				imagegif($gif_engine->curr_image, "gif_parts/" . $gif_engine->page_counter++ . ".gif");	
				
				unset($gif_engine->curr_image);			
								
			}else if($arguments[0]=="LABEL"){
			
				$gif_engine->curr_image = imagecreatetruecolor($gif_engine->gif_width,$gif_engine->gif_height);	
								
				$colour = imagecolorallocate($gif_engine->curr_image, $gif_engine->gif_bgcolour_r,$gif_engine->gif_bgcolour_g,$gif_engine->gif_bgcolour_b);
			
				imagefill($gif_engine->curr_image,0,0,$colour);
					
				$image_to_scale = imagecreatefromgif("gif_parts/" .  ($gif_engine->page_counter-1) . ".gif");	
				
				$size = getimagesize(($gif_engine->page_counter-1) . ".gif");
						
				imagecopyresampled($gif_engine->curr_image, $image_to_scale, 0, 0, 0, 0, $gif_engine->gif_width,$gif_engine->gif_height, $size[0], $size[1]);
			
				imagefilledrectangle($gif_engine->curr_image, $arguments[1] , $arguments[2] , ($arguments[1]+$arguments[8]) , ($arguments[2]+$arguments[9]) , imagecolorallocate($gif_engine->curr_image,255,255,255));
			
				$gif_engine->placetext($arguments[3],$arguments[1] + 5, $arguments[2] + 20,imagecolorallocate($gif_engine->curr_image,0,0,0),$width,$height,(substr($arguments[5],0,2)/1.5),return_font_path($arguments[4]));
				
				imagegif($gif_engine->curr_image, "gif_parts/" . ($gif_engine->page_counter-1) . "_1.gif");
				
				$gif_engine->skip_create = true;
				
			}else if($arguments[0]=="FB"){

			}else if($arguments[0]=="SCROLLPICTURE"){

				echo "Picture scroll will not work in GIF Mode<br>";
				
				$gif_engine->skip_create = false;

			}else if($arguments[0]=="BUTTON"){

				echo "Buttons will not work in GIF Mode<br>";

			}else if($arguments[0]=="SCOREBUTTON"){
				
				$colour = $colour_hex->colour_process($arguments[8]);
				
				imagefilledrectangle($gif_engine->curr_image , $arguments[2] , $arguments[3] , $arguments[2] + $arguments[9] , $arguments[3] + $arguments[10] , imagecolorallocate ($gif_engine->curr_image, $colour[0], $colour[1], $colour[2] ));
				
				$colour = $colour_hex->colour_process($arguments[7]);
				
				$gif_engine->placetext($arguments[4],$arguments[2]+5,$arguments[3]+15,imagecolorallocate ($gif_engine->curr_image, $colour[0], $colour[1], $colour[2] ),$width,$height,(substr($arguments[6],0,2)/1.5),return_font_path($arguments[5]));

				$gif_engine->score_button = true;
				
				if($arguments[1]==1){
				
					array_push($gif_engine->correct_values,$arguments[2] + $arguments[9]);
					array_push($gif_engine->correct_values,$arguments[3]);
				
				}

			}else if($arguments[0]=="FLASHCARD"){
				
				$colour = $colour_hex->colour_process($arguments[9]);
				
				imagefilledrectangle($gif_engine->curr_image , $arguments[3] , $arguments[4] , $arguments[3] + $arguments[10] , $arguments[4] + $arguments[11] , imagecolorallocate ($gif_engine->curr_image, $colour[0], $colour[1], $colour[2] ));

				$colour = $colour_hex->colour_process($arguments[7]);
				
				$gif_engine->flashcard_backup = $arguments;

				$gif_engine->placetext($arguments[1],$arguments[3] + ($arguments[10]/2) - 20,$arguments[4] + ($arguments[11]/2),imagecolorallocate ($gif_engine->curr_image, $colour[0], $colour[1], $colour[2] ),$width,$height,(substr($arguments[6],0,2)/1.5),return_font_path($arguments[8]));

			}else if($arguments[0]=="MISSINGWORDS"){
					
				$colour = $colour_hex->colour_process($arguments[5]);
				
				$colour = imagecolorallocate($gif_engine->curr_image, $colour[0],$colour[1],$colour[2]);
				
				$words = explode(" ", $arguments[3]);
				
				$next_height = $arguments[2]+20;
				
				$curr_width = $arguments[1];

				$words_backup = $words;
				
				$co_ords = array();
				
				while($x = array_shift($words)){
				
					$results = imagettfbbox((substr($arguments[4],0,2)/1.5),0,return_font_path($arguments[9]),$x);
					
					if(($curr_width + $results[4])>$arguments[7]){
					
						$curr_width=$arguments[1];
						$next_height+=20;
					
					}
					
					if(substr($x,0,1)=="*"){

						array_push($co_ords, $curr_width);
						array_push($co_ords, $next_height);
						array_push($co_ords, $curr_width + $results[4]);
						array_push($co_ords, $next_height + $results[5]);
						$x = substr($x,1);
								
					}
															
					$gif_engine->placetext(str_replace("<BR>","\n",$x),$curr_width,$next_height,$colour,$width,$height,(substr($arguments[4],0,2)/1.5),return_font_path($arguments[9]));
					$curr_width += $results[4] + 5;
									
				}
				
				imagegif($gif_engine->curr_image, "gif_parts/" . $gif_engine->page_counter . "_" . ((count($co_ords) / 4)) . ".gif");			
				
				while($co_ord_1 = array_pop($co_ords)){
				
					$final = array_pop($co_ords);
					$y = array_pop($co_ords);
					$x = array_pop($co_ords);
				
					imagefilledrectangle($gif_engine->curr_image , $x, $y, $final, $co_ord_1, imagecolorallocate ($gif_engine->curr_image, 0,0,0));					
		
					if((count($co_ords) / 4)==0){
					
						imagegif($gif_engine->curr_image,"gif_parts/" .  $gif_engine->page_counter++ . ".gif");
					
					}else{

						imagegif($gif_engine->curr_image,"gif_parts/" .  $gif_engine->page_counter . "_" . (count($co_ords) / 4) . ".gif");
						
					}
				
				}
				
				$gif_engine->skip_create = true;

			}else if($arguments[0]=="WFP"){		
				
				$gif_engine->wfp_answer = $arguments[1];
			
				$colour = $colour_hex->colour_process($arguments[9]);
				
				$colour = imagecolorallocate($gif_engine->curr_image, $colour[0],$colour[1],$colour[2]);
				
				$words = explode(" ", $arguments[6]);
				
				$next_height = $arguments[4] + 10;
				
				$curr_width = $arguments[5];
				
				while($x = array_shift($words)){
				
					$results = imagettfbbox((substr($arguments[8],0,2)/1.5),0,return_font_path($arguments[7]),$x);
					
					if(($curr_width + $results[4])>$arguments[11]){
					
						$curr_width=$arguments[4];
						$next_height+=20;
					
					}
					
					$gif_engine->placetext(str_replace("<BR>","\n",$x),$curr_width,$next_height,$colour,$width,$height,(substr($arguments[8],0,2)/1.5),return_font_path($arguments[7]));
					$curr_width += $results[4] + 5;
									
				}
				
				imagegif($gif_engine->curr_image,"gif_parts/" . $gif_engine->page_counter . ".gif");
				
			}else if($arguments[0]=="STIMULATING"){	
			
				echo "Stimulating questions will not work in GIF mode<br>";

			}else if($arguments[0]=="WFA"){	
			
				imagegif($gif_engine->curr_image,$gif_engine->page_counter . ".gif");
				
				$colour = imagecolorallocate ($gif_engine->curr_image, $gif_engine->gif_bgcolour_r,$gif_engine->gif_bgcolour_g,$gif_engine->gif_bgcolour_b);
			
				$curr_image = imagecreatetruecolor($gif_engine->gif_width,$gif_engine->gif_height);	
					
				imagefill($curr_image,0,0,$colour);
					
				$image_to_scale = imagecreatefromgif("gif_parts/" . $gif_engine->page_counter . ".gif");	
				
				$size = getimagesize($gif_engine->page_counter . ".gif");
						
				imagecopyresampled($curr_image, $image_to_scale, 0, 0, 0, 0, $gif_engine->gif_width,$gif_engine->gif_height, $size[0], $size[1]);

				$colour = $colour_hex->colour_process($arguments[4]);
				
				$colour = imagecolorallocate($gif_engine->curr_image, $colour[0],$colour[1],$colour[2]);
				
				$words = explode(" ", $gif_engine->wfp_answer);
				
				$next_height = $arguments[2] + 10;
				
				$curr_width = $arguments[1];
				
				while($x = array_shift($words)){
			
					$results = imagettfbbox((substr($arguments[8],0,2)/1.5),0,return_font_path($arguments[5]),$x);
					
					if(($curr_width + $results[4])>$arguments[7]){
					
						$curr_width=$arguments[1];
						$next_height+=20;
					
					}
					
					$gif_engine->placetext(str_replace("<BR>","\n",$x),$curr_width,$next_height,$colour,$width,$height,(substr($arguments[3],0,2)/1.5),return_font_path($arguments[5]));
					$curr_width += $results[4] -2 ;
									
				}
				
				imagegif($gif_engine->curr_image, "gif_parts/" . $gif_engine->page_counter . "_1.gif");

			}else if($arguments[0]=="WFR"){	

			}

		}

  	}
	
	if($gif_engine->skip_create != true){
			
		imagegif($gif_engine->curr_image,$gif_engine->page_counter. ".gif");
				
	}else{
			
		$gif_engine->skip_create = false;
			
	}
	
	if($gif_engine->score_button==1){
		
		imagegif($gif_engine->curr_image,"gif_parts/" .  $gif_engine->page_counter . ".gif");
	
		$colour = imagecolorallocate ($gif_engine->curr_image, $gif_engine->gif_bgcolour_r,$gif_engine->gif_bgcolour_g,$gif_engine->gif_bgcolour_b);
			
		$curr_image = imagecreatetruecolor($gif_engine->gif_width,$gif_engine->gif_height);	
			
		imagefill($curr_image,0,0,$colour);
			
		$image_to_scale = imagecreatefromgif("gif_parts/" . $gif_engine->page_counter . ".gif");	
		
		$size = getimagesize($gif_engine->page_counter . ".gif");
				
		imagecopyresampled($curr_image, $image_to_scale, 0, 0, 0, 0, $gif_engine->gif_width,$gif_engine->gif_height, $size[0], $size[1]);

		$image_to_scale = imagecreatefromgif("../../images/tick.gif");	

		$size = getimagesize("../../images/tick.gif");
		
		while($x = array_shift($gif_engine->correct_values)){

			imagecopyresampled($curr_image, $image_to_scale, $x-20, array_shift($gif_engine->correct_values)+3, 0, 0, $size[0], $size[1], $size[0], $size[1]);

		}

		imagegif($curr_image,"gif_parts/" .  $gif_engine->page_counter . "_1.gif");
			
	}
			
	if($gif_engine->flashcard_backup!=""){
	
		$colour = imagecolorallocate ($gif_engine->curr_image, $gif_engine->gif_bgcolour_r,$gif_engine->gif_bgcolour_g,$gif_engine->gif_bgcolour_b);
				
		$gif_engine->curr_image = imagecreatetruecolor($gif_engine->gif_width,$gif_engine->gif_height);	
					
		imagefill($gif_engine->curr_image,0,0,$colour);
	
		$temp = $colour_hex->colour_process($gif_engine->flashcard_backup[9]);
		
		imagefilledrectangle($gif_engine->curr_image , $gif_engine->flashcard_backup[3] , $gif_engine->flashcard_backup[4] , $gif_engine->flashcard_backup[3] + $gif_engine->flashcard_backup[10] , $gif_engine->flashcard_backup[4] + $gif_engine->flashcard_backup[11] , imagecolorallocate ($gif_engine->curr_image, $temp[0], $temp[1], $temp[2] ));
		
		$temp = $colour_hex->colour_process($gif_engine->flashcard_backup[8]);
		
		$colour = imagecolorallocate ($gif_engine->curr_image, $temp[0], $temp[1], $temp[2]);
	
	//// CHANGE FONT /////
	
		$gif_engine->placetext($gif_engine->flashcard_backup[2],$gif_engine->flashcard_backup[3] + ($gif_engine->flashcard_backup[10]/2) - 20,$gif_engine->flashcard_backup[4] + ($gif_engine->flashcard_backup[11]/2),$colour,$width,$height,(substr($gif_engine->flashcard_backup[6],0,2)/1.5),"../../fonts/sans-serif.ttf");
		
		imagegif($gif_engine->curr_image,$gif_engine->page_counter . "_1.gif");
		
		$gif_engine->flashcard_backup="";

	}
	
	$dir = opendir("../../image_process/");

	while($file = readdir($dir)){

		if(file_exists("../../image_process/" . $file)){

			if($file!="."&&$file!=".."){

				@unlink("../../image_process/" . $file);

			}

		}

	}
			
	include "gif_encoder.php"; 

	if ( $dh = opendir(getcwd() . "\gif_parts\\" ) ) { 
	    while ( false !== ( $dat = readdir ( $dh ) ) ) { 
	        if ( $dat != "." && $dat != ".." ) { 
        	    $frames [ ] = "gif_parts/" . $dat; 
	            $framed [ ] = $_POST['frame']; 
        	} 
	    } 
	    closedir ( $dh ); 
	} 

	$gif = new GIFEncoder    ( 
                            $frames, 
                            $framed, 
                            0, 
                            2, 
                            0, 0, 0, 
                            "url" 
    ); 

	fwrite ( fopen ( substr(basename($_POST['file_name']),0,-4) . ".gif", "wb" ), $gif->GetAnimation ( ) ); 
	
	$dir = opendir(getcwd() . "\gif_parts\\" );

	while($file = readdir($dir)){

		if(file_exists(getcwd() . "\gif_parts\\" . $file)){

			if($file!="."&&$file!=".."){

				@unlink(getcwd() . "\gif_parts\\" . $file);

			}

		}

	}
	
	echo "******" . substr(basename($_POST['file_name']),0,-4) . ".gif";
	
?>