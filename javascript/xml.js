var nodes_xml_structure = new Object;

			nodes_xml_structure.pageelement = new Array("name","id");


			function addxml(id){

				new_element = document.getElementById("xmlstore").xmlres.createElement("pageelement");
				
	
				new_element.setAttribute('name', 'Kibo');
				new_element.setAttribute('id', 'fool');

			
				new_text = document.getElementById("xmlstore").xmlres.createTextNode("image");
				new_element.appendChild(new_text);

				
				x=document.getElementById("xmlstore").xmlres.getElementsByTagName("pageroot");
				x[0].appendChild(new_element);

			}

			function seexml(){
				
				x = document.getElementById("xmlstore").xmlres.getElementsByTagName("pageelement");
	
				
				for (i=0;i<x.length;i++){

					if (x[i].nodeType==1){

						temp = document.getElementById("tempid");
						temp.innerHTML += x[i].nodeName;
						temp.innerHTML += ": ";
						temp.innerHTML += x[i].childNodes[0].nodeValue;
						temp.innerHTML +="<br />";

						for(z=0;z<x[i].attributes.length;z++){
							
							temp.innerHTML += nodes_xml_structure[x[i].nodeName][z] + " " + x[i].getAttribute(nodes_xml_structure[x[i].nodeName][z]) + "<br>";

						}


					}

				}

			}


			function createxml(){

				if (window.ActiveXObject){

					pageXML= new ActiveXObject("Microsoft.XMLDOM");

					var new_root = pageXML.createElement("pageroot");
					pageXML.documentElement = new_root;

					document.getElementById("xmlstore").xmlres = pageXML;
	

				}
				// code for Mozilla, Firefox, Opera, etc.
				else if (document.implementation.createDocument){

					pageXML= document.implementation.createDocument("","",null);

				}
				

			}
