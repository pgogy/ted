<?PHP
	// create object
	$zip = new ZipArchive();

	// open archive 
	if ($zip->open("c:\\xampp\\htdocs\\ted\\zip_folder\\" . basename(str_replace(".","",$_POST['file_name'])). '.zip', ZIPARCHIVE::CREATE) !== TRUE) {
	    die ("Could not open archive");
	}

	// list of files to add

	
	$fileList = explode(",",stripcslashes($_POST['file_list']));

	// add files

	foreach ($fileList as $f) {

	    $zip->addFile($f,basename($f)) or die ("ERROR: Could not add file: $f");   
	}

	$zip->addFile("001a.ted", time . ".txt");
    
	// close and save archive
	$zip->close();
	echo "SUCCESS";    

?> 
