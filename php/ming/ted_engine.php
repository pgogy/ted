<?PHP
	
	class ted_engine{

			var $page_index; 
			var $instructions;

			function set_array($array1, $array2){

				$this->page_index = $array1;
				$this->instructions = $array2;

			}
			
			function next_instruction(){
			
				if(count($this->instructions)!=0){
				
					return array_shift($this->instructions);
				
				}else{
				
					return false;
				
				}
			
			}
			
			function instruction_to_parameters(){
			
				$temp = $this->next_instruction();
				
				if($temp){
					return $temp;
				}else{
					return false;
				}
			
			}

			function array_root(){

				return $this->instructions[0];

			}

			function createnewswf($frames,$rate,$height,$width,$r,$g,$b,$version){

				Ming_useSWFVersion($version);	

				$m = new SWFMovie();
				$m->setRate(12.0);
				$m->setDimension($width,$height);

				$m->setBackground(hexdec($r),hexdec($g),hexdec($b));

				$m->setFrames($frames);	

				return $m;

			}

			function clean_up($array){

				while($i = array_pop($array)){

				      $i->remove();

			  	}


			}

			function add_actionscript($movie,$action){

				$strAction = $action;

				$stop = new SWFAction($strAction);

				$movie->add($stop);

			}

			function placetext($str,$m,$x,$y,$r,$g,$b,$width,$height,$font_size,$font){
				

			   	$t = $this->maketextarea($font,$font_size,$r,$g,$b,$height,$width);

				$t->addString(stripcslashes($str));
				$i = $m->add($t);
				$i->moveTo($x,$y);

				return $i;

			}

			function maketextarea($font,$font_size,$r,$g,$b,$height,$width){
			
				echo "making text area \n";

				$t = new SWFTextField(SWFTEXTFIELD_MULTILINE | SWFTEXTFIELD_WORDWRAP | SWFTEXTFIELD_NOEDIT | SWFTEXTFIELD_NOSELECT);
				$t->setBounds($width,$height);	

				
							
				$t->setFont($font);	
				$t->setColor($r,$g,$b);
				$t->setHeight($font_size);

				return $t;	

  			}

			function scoreplacetext($str,$m,$x,$y,$r,$g,$b,$width,$height,$font_size,$font){

				$str = str_replace("<BR>","\n",$str);				
				
				echo $str . "\n";

				$values = explode("{{score}}",$str);

				$this->add_actionscript($m, "pre_score = \"" . $values[0] . "\";");

				$values_after = explode("{{questions}}",$values[1]);

				$this->add_actionscript($m, "mid_score = \"" . $values_after[0] . "\";");				

				$this->add_actionscript($m, "after_score = \"" . $values_after[1] . "\";");							

				$t = new SWFTextField(SWFTEXTFIELD_MULTILINE | SWFTEXTFIELD_WORDWRAP | SWFTEXTFIELD_NOSELECT | SWFTEXTFIELD_NOEDIT);
				$t->setBounds($width,$height);
				$t->setFont($font);	
				$t->setColor($r,$g,$b);
				$t->setHeight($font_size);
				$t->setName("inputscore");
				$i = $m->add($t);
				$i->moveTo($x,$y);

				$string_swf = new SWFPrebuiltClip(fopen("../../flashcomponents/score_swf.swf",'rb'));
				
				print_r($string_swf);

				$swf = $m->add($string_swf);

				$swf->moveTo(20,20);

				echo "added swf\n";
					
				//$this->add_actionscript($m,"inputscore = resolved;");

				return $i;

			}

			function add_scroll_swf($m){

				$string_swf = new SWFPrebuiltClip(fopen("../../flashcomponents/scroll.swf",'rb'));

				$swf = $m->add($string_swf);

				$swf->moveTo(0,0);

				echo "added swf\n";


			}

			function makeswffont($font){

				if($font=="sans-serif"){;
	
					// SORT FONT STUFF OUT
					
					switch($font){
					
						case "arial": $return_font = "../../fonts/arial.fdb"; break;
						case "sans-serif": $return_font = "../../fonts/_sans.fdb"; break;
						case "verdana": $return_font = "../../fonts/verdana.fdb"; break;
					
					}
	
					$tempfont = new SWFFont("../../fonts/_sans.fdb");
					return $tempfont;

				}
				

			}

  			function draw_rectangle($x,$y,$height,$width,$alpha,$r,$g,$b){

				$s = new SWFShape();
				$s->setRightFill($s->addFill($r, $g, $b));
				$s->movePenTo($x,$y);
				$s->drawLine($width, 0);
			  	$s->drawLine(0, $height);
			  	$s->drawLine((0-$width), 0);
				$s->drawLine(0,(0-$height));

				return $s;

			} 

			function insert_picture($movie, $img,$x,$y){

				$jpg = new SWFBitmap(fopen($img,"rb")); 
		
				$image = $movie->add($jpg);

				$image->moveTo($x,$y);

				return $image;

			} 

			function insert_scroll_picture($movie,$img,$x,$y){

				$jpg = new SWFBitmap(fopen($img,"rb"));							

				$q = new SWFSprite();
				$i = $q->add($jpg);
				$q->nextFrame();
 
				$i = $movie->add($q);
				$i->moveTo($x,$y);
				$i->setName("curr_drag");

			} 

			function make_hotspot($x,$y,$width,$height,$movie){

				$im = imagecreate((int)$width, (int)$height);

				imagejpeg($im, "hotspot.jpg");	

				$jpg = new SWFBitmap(fopen("hotspot.jpg","rb"));

				$q = new SWFSprite();
				$q->add($jpg);
				$q->nextFrame();
 
				$i = $movie->add($q);
				$i->moveTo($x,$y);
				$i->setName("hotspot");

				return $i;

			}

			function make_label($x,$y,$text,$font,$font_size,$text_c,$back_c,$width,$height,$movie,$hotspot){

				$im = imagecreate($width, $height);

				$back_colour = imagecolorallocate($im, $back_c[0], $back_c[1], $back_c[2]);
				$text_colour = imagecolorallocate($im, $text_c[0], $text_c[1], $text_c[2]);
				
				$font = '../../fonts/arial.ttf';

				imagettftext($im, 10, 0, 0, 10, $text_colour, $font, $text);

				imagejpeg($im,"label.jpg");

				$jpg = new SWFBitmap(fopen("label.jpg","rb"));

				$q = new SWFSprite();
				$q->add($jpg);
				$q->nextFrame();
 
				$i = $movie->add($q);
				$i->moveTo($x,$y);
				$i->setName("curr_drag");

				$movie->nextFrame();

				return $i;

			}


			function make_response_area($x,$y,$font,$font_size,$text_c,$back_c,$width,$height,$hit_fb,$miss_fb,$movie){	

				$delete_array = array();		

				for($x=0;$x!=6;$x++){
					
					$arguments_for_button = $this->next_instruction();

					$argument_parameters = explode("***",$arguments_for_button);

					if($argument_parameters[1]=="Move up"){

						$action = "curr_drag._y-=10;";

					}else if($argument_parameters[1]=="Move down"){

						$action = "curr_drag._y+=10;";

					}else if($argument_parameters[1]=="Move left"){

						$action = "curr_drag._x-=10;";
	
					}else if($argument_parameters[1]=="Move right"){

						$action = "curr_drag._x+=10;";
		
					}else if($argument_parameters[1]=="Check"){

						$action = "xval = curr_drag._x; yval = curr_drag._y;nextFrame();";
		
					}			

					$material =$this->button($action,$argument_parameters[3],$argument_parameters[4],$argument_parameters[10],$argument_parameters[11],$argument_parameters[5],255,255,255,0,0,0,substr($argument_parameters[7],0,2 ),$this->makeswffont($argument_parameters[6]),$movie);

					array_push($delete_array,$material[0]);
					array_push($delete_array,$material[1]);					

				}

				$this->add_actionscript($movie,"stop();");

				$movie->nextFrame();

				$this->add_actionscript($movie,"if((hotspot._y+hotspot._height) >= yval){ 

									if((hotspot._y) <= yval){

										if((hotspot._x+hotspot._width) >= xval){ 

											if((hotspot._x) <= xval){

												value=\"" . $hit_fb . "\";
											}

										}else{
			
											value=\"" . $miss_fb . "\";

										}

									}else{

										value=\"" . $miss_fb . "\";

									}

								}else{

									value=\"" . $miss_fb . "\";

								}"); 

				$text = $this->placeinputtext($movie,$x,$y,$text_c[0],$text_c[1],$text_c[2],$height,$width,$font_size,"inputtext",$font);

				array_push($delete_array,$text);

				$this->add_actionscript($movie,"inputtext = value;");

				return $delete_array;

			}

			function insert_picture_scroll($movie,$img,$x,$y, $scroll_buttons){

				$jpg = new SWFBitmap(fopen($img,"rb"));

				$q = new SWFSprite();
				$q->add($jpg);
				$q->nextFrame();
 
				$i = $movie->add($q);
				$i->moveTo($x,$y);
				$i->setName("curr_drag");

				while($button = array_pop($scroll_buttons)){

					$arguments = explode("***", $button);

					if($arguments[1]=="Move up"){

						$action = "curr_drag._y+=10;";

					}else if($arguments[1]=="Move down"){

						$action = "curr_drag._y-=10;";

					}else if($arguments[1]=="Move left"){

						$action = "curr_drag._x+=10;";
	
					}else if($arguments[1]=="Move right"){

						$action = "curr_drag._x+=10;";
		
					}

					$this->button($action,$arguments[3],$arguments[4],$arguments[10],$arguments[11],$arguments[5],$tx_r,$tx_g,$tx_b,$rg_r,$rg_g,$rg_b,substr($arguments[7],2),$font,$movie);

				}

			}

			function placebuttontext($str,$m,$x,$y,$r,$g,$b,$height,$width,$font_size,$font){

			        $t = $this->maketextarea($font,$font_size,$r,$g,$b,$height,$width);
				$t->addString($str);
				$i = $m->add($t);
				$i->moveTo($x,$y);
				return $i;

			}

			function basic_button_shape($x,$y,$width,$height,$r_b,$g_b,$b_b){

				$s = new SWFShape();
				$s->setRightFill($s->addFill($r_b,$g_b,$b_b));
				$s->movePenTo($x,$y);
				$s->drawLine($width, 0);
			  	$s->drawLine(0, $height);
			  	$s->drawLine((0-$width), 0);
				$s->drawLine(0, (0-$height));
				return $s;

  			}

			function make_button($action,$x,$y,$width,$height,$r_b,$g_b,$b_b){

				$button_scope = $this->image_scroll;
				$b = new SWFButton();
				$b->addShape($this->basic_button_shape($x,$y,$width,$height,$r_b,$g_b,$b_b), SWFBUTTON_HIT | SWFBUTTON_UP | SWFBUTTON_DOWN | SWFBUTTON_OVER);
				$b->addAction(new SWFAction($action),SWFBUTTON_MOUSEDOWN);
				return $b;

			}

			function button($action,$x,$y,$width,$height,$str,$r_t,$g_t,$b_t,$r_b,$g_b,$b_b,$font_size,$font,$m){

				$button_scope = $this->image_scroll;

				$button = $this->make_button($action,$x,$y,$width,$height,$r_b,$g_b,$b_b);
				$button = $m->add($button);
				$text = $this->placebuttontext($str,$m,$x+2,$y+2,$r_t,$g_t,$b_t,$height,$width,$font_size,$font);
				$new_material = array($button,$text);
				return $new_material;

			}

			function make_flashcard($width,$height,$corner,$line_width,$l_r,$l_g,$l_b,$f_r,$f_g,$f_b){
	
				$s = new SWFShape();
				$s->setLine($line_width,$l_r,$l_g,$l_b);
				$s->setRightFill($s->addFill($f_r,$f_g,$f_b));


				$s->movePenTo($corner,0);
				$s->drawLine($width-($corner*2), 0);
				$s->movePenTo($width-$corner,$corner);
				$s->drawArc($corner,0,90);
				$s->drawLine(0, $width-($corner*2));
				$s->movePenTo($width-$corner,$width-$corner);
				$s->drawArc($corner,90,180);
				$s->drawLine(0-($width-($corner*2)), 0);
				$s->movePenTo($corner,$width-$corner);
				$s->drawArc($corner,180,270);
				$s->drawLine(0, 0-($width-($corner*2)));
				$s->movePenTo($corner,$corner);
				$s->drawArc($corner,270,360);

				return $s;

			}

			

			function missing_words($arguments,$movie,$colour,$items_array){

				$cover = array();

				$string = $arguments[3];

				$new_array = explode(" ",$string);

				$f= $this->makeswffont($arguments[9]);

				$width = $arguments[7];
				$height = $arguments[8];	
				$x_cord = $arguments[1];

				$text_height = (int)substr($arguments[4],0,2);

				$y_cord = $arguments[2] + ($text_height); 

				$word_count = 0;

				$missing_words=0;

				while($word_count!=count($new_array)){

					$t = new SWFText();  
  	
        				$t->setFont($f);	
				        $t->setColor($colour[0],$colour[1],$colour[2]);
				        $t->setHeight($text_height);

				  	if(($x_cord+$t->getWidth($new_array[$word_count]))<$width){

						$t->MoveTo($x_cord,$y_cord);		

					}else{

						$x_cord=$arguments[1];
						$y_cord+=($text_height+2);
						$t->MoveTo($x_cord,$y_cord);

					}

					if($new_array[$word_count]==""){

						$x_cord=$arguments[1];	
						$y_cord+=($text_height+2);
						$t->MoveTo($x_cord,$y_cord);						

					}

					if(strpos($new_array[$word_count],"*")!==0){

						$t->addString($new_array[$word_count]);

						$x_cord = $x_cord + $t->getWidth($new_array[$word_count]) + 2;

						$i = $movie->add($t);

						array_push($items_array,$i);

						$word_count++;

						//$missing_words+=1;

					}else{	

						$d = $this->draw_rectangle($x_cord-(0-$t->getWidth(substr($new_array[$word_count],1,strlen($new_array[$word_count])-1))),$y_cord-12,15,(0-$t->getWidth(substr($new_array[$word_count],1,strlen($new_array[$word_count])-1))),100,0X00,0X00,0X00);	

						$t->addString(substr($new_array[$word_count],1,strlen($new_array[$word_count])-1));

						$i = $movie->add($d);

						array_push($cover,$i);

						$i = $movie->add($t);

						array_push($items_array,$i);

						$x_cord = $x_cord + $t->getWidth(substr($new_array[$word_count],1,strlen($new_array[$word_count])-1)) + 2;

						$word_count++;
	
						$missing_words+=1;
		

					}

				  }

				  $material = $this->button("nextFrame();",5,180,170,20,"Next",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$f,$movie);

				  array_push($items_array,$material[0]);
				  array_push($items_array,$material[1]); 

				  $this->add_actionscript($movie,"stop();");
  
				  $currframe=0;

				  $movie->nextFrame();

				  while($currframe!=$missing_words){

					echo "curr frame is " . $currframe . "\n";

					$i = $cover[$currframe];
					$i->remove();
					$movie->nextFrame();

		
					if($currframe!=$missing_words){

						$this->add_actionscript($movie,"stop();");		

					}

					$currframe+=1;
 
				  }

				  while($i = array_pop($items_array)){

					$i->remove();

				 }



			}

			function makeinputtextarea($font,$font_size,$r,$g,$b,$height,$width,$name){

				$t = new SWFTextField(SWFTEXTFIELD_MULTILINE | SWFTEXTFIELD_WORDWRAP);
				$t->setBounds($width,$height);
				$t->setFont($font);	
				$t->setColor($r,$g,$b);
				$t->setHeight($font_size);
				$t->setName($name);
				return $t;	

  			}

			function placeinputtext($m,$x,$y,$r,$g,$b,$height,$width,$font_size,$name,$f){

			        $t = $this->makeinputtextarea($f,$font_size,$r,$g,$b,$height,$width,$name);

				$i = $m->add($t);
				$i->moveTo($x,$y);

				return $i;

			}

			function basic_input_background($x,$y,$height,$alpha,$r,$g,$b){

				$s = new SWFShape();
				$s->setRightFill($r, $g, $b, $alpha);
				$s->movePenTo($x,$y);
				$s->drawLine(165, 0);
			  	$s->drawLine(0, $height);
			  	$s->drawLine(-165, 0);
				$s->drawLine(0,(0-$height));
				return $s;

			}  

			function add_text_sender($number,$message,$movie){

				$this->add_actionscript($movie,"number = '" . $number . "';");

				$this->add_actionscript($movie,"message = '" . $message . "';");

				$string_swf = new SWFPrebuiltClip(fopen("../../flashcomponents/send_text.swf",'rb'));

				$swf = $movie->add($string_swf);

				echo "added swf\n";

				return $swf;				

			}

			function add_url_page($url,$movie){

				$this->add_actionscript($movie,"url = '" . $url . "';");

				$string_swf = new SWFPrebuiltClip(fopen("../../flashcomponents/get_url.swf",'rb'));

				$swf = $movie->add($string_swf);

				return $swf;

			}
	  
	}

?>