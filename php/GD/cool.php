<?php
$im = imagegrabscreen();
imagepng($im, "myscreenshot.png");
imagedestroy($im);
?> 