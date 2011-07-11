<?PHP
	
	$open_dir = opendir("c:/xampp/htdocs/ted/media/");

	echo "<p onclick=\"show_wizard('image_upload')\">Image upload</p>";

	while($f = readdir($open_dir)){

		if($f!="."){

			if($f!=".."){

				if(!is_dir($open_dir . $f)){

					echo "<img src=\"media/" . $f . "\" mouse=\"imagelibrary\" />";
				
				}

			}
			
		}


	}

?>