<? 
function force_download($file) 
{ 

    if ((isset($file))&&(file_exists($file))) { 
       header("Content-type: application/force-download"); 
       header('Content-Disposition: inline; filename="' .$file . '"'); 
       header("Content-Transfer-Encoding: Binary"); 
       header("Content-length: ".filesize($file)); 
       header('Content-Type: application/octet-stream'); 
       header('Content-Disposition: attachment; filename="' . $file . '"'); 
       readfile("$file"); 
    } else { 
       echo "No file selected"; 
    }

}

force_download($_GET['file']);


?>