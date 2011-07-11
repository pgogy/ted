<?PHP

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

	$data = "FWS" . substr($data, $point, 1) . $n . substr($data, 4);  

	echo "<Br>" . $data;

	file_put_contents("pat3.swf",$data);


}



$data = file_get_contents("new.swf");
echo getVersion();
setVersion("4");
$data = file_get_contents("new.swf");
echo getVersion();

?>