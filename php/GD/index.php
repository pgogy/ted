<?php

// Set the size

$im = imagecreate(900,16);

// Set the background colour

$back_colour = imagecolorallocate($im, 255, 255, 255);
imagecolortransparent ( $im , $back_colour );

// Set the text colour

$text_color = imagecolorallocate($im, 0,0,0);

imagerectangle ($im, 5 , 5 , 150 , 20 , $back_color );

imagefill ($im , 7 , 7 , $back_color );

$font = imageloadfont('arial.gdf');

echo imagefontheight($font);

imagettftext($im , 16 , 0 , 10 , 16, $text_color , "arial.ttf" , "hello" );

// start buffering
ob_start();
// output jpeg (or any other chosen) format & quality
imagegif($im);
// capture output to string
$contents = ob_get_contents();
// end capture
ob_end_clean();

// be tidy; free up memory
imagedestroy($im);

// lastly (for the example) we are writing the string to a file
$fh = fopen("transparent2.gif", "w" );
    fwrite( $fh, $contents );
fclose( $fh );
?> 