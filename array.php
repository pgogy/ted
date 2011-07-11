<?

	$indexes = array();

	$values = array(1,2,4,5,6,10,15);

	while($x = array_pop($values)){

		$indexes[count($values)] = $x;

	}

	print_r($indexes[6]);

?>