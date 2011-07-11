<?PHP

	if(substr($_POST['directory'],strlen($_POST['directory'])-1)!="\\"){

		$directory = $_POST['directory'] . "\\\\";

	}else{

		$ch = @chdir(stripcslashes($_POST['directory']));

		if($ch==false){
		
			$ch = @chdir($_POST['directory']);

			if($ch==false){

				echo "<p>Not a valid resource</p>";
				die();

			}			

		}

		$directory = $_POST['directory'];

	}
	
	$open_dir = @opendir($_POST['directory']);

	if($open_dir==false){

		$open_dir = @opendir(stripclashes($_POST['directory']));

		if($open_dir==false){		

			echo "<p>Not a valid resource</p>";
			die();

		}

	}

	while($f = readdir($open_dir)){

		if(is_dir(stripcslashes($directory) . $f)){

			if($f!="."){

				if($f==".."){

					$directories = explode("\\", $directory);

					$parent_path = implode("\\", array_splice($directories,0,count($directories)-4));

					echo "<p id=\"top_folder\" folder_path=\"" . $directory . "\" onclick=\"javascript:file_list('" . $parent_path . "')\">Up a folder</p>";

				}else{

					echo "<p onclick=\"javascript:file_list('" . $directory . $f . "')\">" . stripcslashes($directory) . $f . "</p>";

				}
			
			}



		}else{

			if(strpos($f, ".ted")){

				echo "<p onclick=\"javascript:open_ted_file('" . $directory . $f . "')\" >" . $f . "</p>";

			}

		}

	}

?>