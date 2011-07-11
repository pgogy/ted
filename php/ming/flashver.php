<?php
 // include the PEAR package
 require "swf.php";

 $flash = new SWF("source.swf");

 if($flash->is_valid()){
    $stat = $flash->stat();
    // this give all the info
    // and also..
    $fps = $flash->getFrameRate();
    $size = $flash->getMovieSize();
    $bg = $flash->getBackgroundColor();
    $prot = $flash->getProtected();
    $compr = $flash->getCompression();
    $version = $flash->getVersion();

    // they can be changed...
    $flash->setFrameRate(60);
    $flash->setProtected(1);
    $flash->setBackgroundColor(51,51,204);
    $flash->setCompression(1);

    // and write a new file...
    $flash->write("./new_one.swf",1);
 }
?>