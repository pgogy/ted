<?php

$new_im = imagecreatetruecolor(100,200);

$im = @imagecreatefromjpeg("sexgod.jpg");

imagecopyresampled($new_im, $im, 0,0,0,0,100,200,imagesx($im) , imagesy($im) );

// start buffering
ob_start();
// output jpeg (or any other chosen) format & quality
imagejpeg($new_im, NULL, 85);
// capture output to string
$contents = ob_get_contents();
// end capture
ob_end_clean();


imagedestroy($im);

// lastly (for the example) we are writing the string to a file
$fh = fopen("k.jpg", "w" );
    fwrite( $fh, $contents );
fclose( $fh );

?>

