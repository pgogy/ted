<?PHP

	$directory = "c:\\xampp\\htdocs\\ted\\templates\\";
	
	$open_dir = @opendir($directory);

	while($f = readdir($open_dir)){

		if(is_dir(stripcslashes($directory) . $f)){

			if($f!="."){

				if($f==".."){

					$directories = explode("\\", $directory);

					$parent_path = implode("\\", array_splice($directories,0,count($directories)-4));

					echo "<p id=\"top_folder\" folder_path=\"" . $directory . "\" onclick=\"javascript:file_list('" . $parent_path . "')\">Up a folder</p>";

				}else{

					echo "<p onclick=\"file_system.template_opening = true;javascript:file_list('" . $directory . $f . "')\">" . stripcslashes($directory) . $f . "</p>";

				}
			
			}



		}else{

			if(strpos($f, ".ted")){

				echo "<p onclick=\"file_system.template_opening=true;open_ted_file('c:\\\\xampp\\\\htdocs\\\\ted\\\\templates\\\\" . $f  . "');\">$f</p>";

			}

		}

	}


?>