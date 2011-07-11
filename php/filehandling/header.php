<?php

$mime ='application/x-shockwave-flash';

$file = "flashcard.swf";

// get the file size

$size=filesize("$file");

// open the file for reading

if($fp=@fopen("$file",'r')){
// send the headers
header("Content-type: $mime");
header("Content-Length: $size");
header("Content-Disposition: attachment; filename=\"$file\"");
// send the file content
fpassthru($fp);
// close the file
fclose($fp);
// and quit
exit();
}
?>
