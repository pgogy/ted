<?

	class image_convert{

		function image_convert(){

		}

		function process_image($arguments, $movie, $ted_engine){

			print_r($arguments);
			
			$array = getimagesize("../../../" . substr($arguments[1],16));

			$image_scaled = imagecreatetruecolor($arguments[4],$arguments[5]);

			switch(substr($arguments[1],-3)){

				case "jpg" : $image_to_scale = imagecreatefromjpeg("../../../" . substr($arguments[1],16));
					     $type = "jpg";
					     break;
				case "gif" : $image_to_scale = imagecreatefromgif("../../../" . substr($arguments[1],16));
					     $type = "gif";
					     break;
				default : break;

			}

			if($array[0]!=$arguments[4]||$array[1]!=$arguments[5]){

				imagecopyresampled($image_scaled, $image_to_scale, 0, 0, 0, 0, $arguments[4], $arguments[5], $array[0], $array[1]);

				$file_name = "../../image_process/" . "temp" . rand() . ".gif";

				imagegif($image_scaled, $file_name);

				chmod($file_name, 0777);

				$image = $ted_engine->insert_picture($movie, $file_name,$arguments[2],$arguments[3]);

			}else{

				$file_name = "../../image_process/" . "temp" . rand() . ".gif";

				imagegif($image_to_scale, $file_name);

				chmod($file_name, 0777);

				$image = $ted_engine->insert_picture($movie,$file_name,$arguments[2],$arguments[3]);

			}

			return $image;

		}

		function process_scroll_image($arguments){

			
			$array = getimagesize("../../../" . substr($arguments[1],16));

			$image_scaled = imagecreatetruecolor($arguments[4],$arguments[5]);

			switch(substr($arguments[1],-3)){

				case "jpg" : $image_to_scale = imagecreatefromjpeg("../../../" . substr($arguments[1],16));
					     $type = "jpg";
					     break;
				case "gif" : $image_to_scale = imagecreatefromgif("../../../" . substr($arguments[1],16));
					     $type = "gif";
					     break;
				default : break;

			}

			if($array[0]!=$arguments[4]||$array[1]!=$arguments[5]){

				imagecopyresampled($image_scaled, $image_to_scale, 0, 0, 0, 0, $arguments[4], $arguments[5], $array[0], $array[1]);

				$file_name = "../../../" . "temp" . rand() . ".gif";

				imagegif($image_scaled, $file_name);


			}else{

				$file_name = "../../../" . "temp" . rand() . ".gif";

				imagegif($image_to_scale, $file_name);

			}

			echo "RETURNED FILE NAME IS - " . $file_name . "\n";

			return $file_name;

		}

	}


?>