<?PHP
	
	$target_path = "c:/xampp/htdocs/ted/media/";

	$target_path = $target_path . $_FILES['upload_file']['name']; 

	if(move_uploaded_file($_FILES['upload_file']['tmp_name'], $target_path)) {
		    echo "File uploaded";
	
	} else{
		    echo "There was an error uploading the file, please try again!";
	}



?>