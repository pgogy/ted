<?PHP


  $font="../../fonts/_sans.fdb";

  $f = new SWFFont($font);

  include "ming_functions.php";

  $m = createnewswf(1.0,176,208,0xFF,0xFF,0xFF);

  $z = array();

  add_actionscript($m,"score=0; number_of_questions=2;");

  // PAGE BEGINS

  array_push($z,placetext("Question 1",$m,5,5,0x00,0x00,0x00,170,15,13));
 
  array_push($z,placetext("What is the capital of England?",$m,5,23,0x00,0x00,0x00,170,50,13));
 
  $material = button("score+=1;nextFrame();",5,120,160,20,"London",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  array_push($z,placetext("or",$m,10,145,0,0,0,160,13,13));

  $material = button("score+=0;nextFrame();",5,170,160,20,"Paris",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"stop();");

  $m->nextFrame();

  clean_up($z);

  $z = array();

  array_push($z,placetext("Question 2",$m,5,5,0x00,0x00,0x00,170,15,13));
 
  array_push($z,placetext("What is a Finnish mobile firm?",$m,5,23,0x00,0x00,0x00,170,50,13));
 
  $material = button("score+=0;nextFrame();",5,120,160,20,"Samsung",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  array_push($z,placetext("or",$m,10,145,0,0,0,160,13,13));

  $material = button("score+=1;nextFrame();",5,170,160,20,"Nokia",0xFF,0xFF,0xFF,0x00,0x00,0x00,13,$m,160);

  array_push($z,$material[0]);
  array_push($z,$material[1]); 

  add_actionscript($m,"stop();");

  $m->nextFrame();

  clean_up($z);


  placeinputtext($m,5,5,0x00,0x00,0x00,200,170,13,"inputtext",$f);

  add_actionscript($m, "inputtext=\"You scored\";");

  placeinputtext($m,5,30,0x00,0x00,0x00,200,170,13,"scoretext",$f);

  add_actionscript($m, "scoretext=score;");

  placeinputtext($m,5,50,0x00,0x00,0x00,200,170,13,"outof",$f);

  add_actionscript($m, "outof=\"out of\";");

  placeinputtext($m,5,80,0x00,0x00,0x00,200,170,13,"noquestions",$f);

  add_actionscript($m, "noquestions=number_of_questions;");

  // Send data 
  $m->save("rmquiz.swf",0);

$data;

$point;

function getVersion(){  

	global $point, $data;      
     
	_seek(3);        
	return _readByte();    
	
}

function _seek($num){       
	
	global $point, $data;
	
	if($num < 0){      
	     
			$num = 0;   
			     
	}else if($num > strlen($data)){
	
			$num = strlen($data);        
			
	}        
	
	$point = $num;    
	
}

function _readByte(){        

	global $point, $data;

	$ret = unpack("Cbyte",_read(1));  

	print_r($ret);
      
	return $ret['byte'];    
	
}

function _read($n){        

	global $point, $data;

	$ret = substr($data, $point, $n);       
	$point += $n;        
	return $ret;    

}

function setVersion($version){  

	global $point, $data;      
     
	_seek(3);        
	
	_writeByte($version);    
	
}

function _writeByte($version){        

	global $point, $data;

	$ret = pack("v", $version);

	_seek(3);  

	_write($ret);	 
	
}

function _write($n){        

	global $point, $data;

	echo "<br>" . $data;

	$data = substr($data, 0, 3) . $n . substr($data, 4);  

	echo "<Br>" . $data;

	file_put_contents("pat3.swf",$data);


}



$data = file_get_contents("rmquiz.swf");
echo getVersion();
echo "<br>";
setVersion(4);
echo "<br>";
$data = file_get_contents("rmquiz.swf");
echo getVersion();


?>
