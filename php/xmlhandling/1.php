<?php

// This code will work on PHP4.

function start_tag($parser, $name, array $attribs){

	echo $name . "<br>";

	foreach($attribs as $key => $value){

		echo $key . " " . $value . "<br>";

	}

}

function end_tag($parser, $name){

	echo "end of " . $name . "<br>";

}

function tag_data($parser, $data){

	echo "data is " . $data . "<br>";

}


$parser = xml_parser_create();

xml_set_element_handler(
            $parser,
            "start_tag",
            "end_tag"
        );
        xml_set_character_data_handler(
            $parser,
            "tag_data"
        );


$fp = fopen("pat.xml", 'r');

while ($data = fread($fp, 4096)) {
   if (!xml_parse($parser, $data, feof($fp))) {
       die(sprintf("XML error: %s at line %d",
                   xml_error_string(xml_get_error_code($xml_parser)),
                   xml_get_current_line_number($xml_parser)));
   }
}
xml_parser_free($parser);


?> 