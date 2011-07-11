<?php
// Set the content-type
header('Content-type: image/png');

// Create the image
$im = imagecreate(400, 30);

// Create some colors
$white = imagecolorallocate($im, 255, 255, 255);
$black = imagecolorallocate($im, 0, 0, 0);

// The text to draw
$text = 'Testing...';
// Replace path by your own font path
$font = '../../fonts/arial.ttf';


// Add the text
imagettftext($im, 20, 0, 10, 20, $black, $font, $text);

// Using imagepng() results in clearer text compared with imagejpeg()
imagejpeg($im,"label.jpg");

?> 