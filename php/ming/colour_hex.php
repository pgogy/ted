<?PHP

	class colour_hex{

		function colour_hex(){

		}

		function colour_process($colour){

			if(strlen($colour)==4){

				$r = hexdec(substr($colour,1,1) . substr($colour,1,1));
				$g = hexdec(substr($colour,2,1) . substr($colour,2,1));
				$b = hexdec(substr($colour,3,1) . substr($colour,3,1));

			}else{

				$r = hexdec(substr($colour,1,2));
				$g = hexdec(substr($colour,3,2));
				$b = hexdec(substr($colour,5,2));

			}

			$colours = array($r,$g,$b);

			return $colours;

		}

	}


?>