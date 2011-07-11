<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>Ted Help Pages</title>
		<link rel="stylesheet" type="text/css" media="screen" href="../css/help.css" />
	</head>
	<body>
		<div class="holder">
			<div class="top">
				<h1>Ted help system</h1>
			</div>
			<div class="bottom">
				<div class="list">
					<p><a href="">Home</a></p>
					<hr>
					<p><a href="getting_started">Getting Started</a></p>
					<hr>
					<p><a href="templates">Templates</a></p>
					<hr>
					<h3>Pages</h3>
					<hr>
					<p><a href="pages_adding">Page adding</a></p>
					<p><a href="pages_clearing">Page clearing</a></p>
					<p><a href="pages_deleting">Page deleting</a></p>
					<p><a href="pages_moving">Page moving</a></p>
					<p><a href="pages_code">Page code</a></p>
					<hr>
					<h3>The work area</h3>
					<hr>
					<p><a href="moving_workarea">Moving items</a></p>
					<p><a href="resizing_workarea">Resizing items</a></p>
					<p><a href="workarea_deleting">Deleting items</a></p>
					<p><a href="workarea_zindex">Moving items forwards and backwards</a></p>
					<p><a href="workarea_size">Changing the work area size</a></p>
					<p><a href="workarea_bgcolour">Changing the work area colour</a></p>
					<hr>
					<h3>Basic Elements</h3>
					<hr>
					<p><a href="text">Text</a></p>
					<p><a href="rectangles">Rectangles</a></p>
					<p><a href="buttons">Buttons</a></p>
					<hr>
					<h3>Interactions</h3>
					<hr>
					<p><a href="flashcards">Flashcards</a></p>
					<p><a href="missingwords">Missing Words</a></p>
					<p><a href="wordfill">Word fill</a></p>
					<hr>
					<h3>Interactions (advanced)</h3>
					<hr>
					<p><a href="picture_scroll">Picture Scroll</a></p>
					<p><a href="draganddrop">Drag and Drop</a></p>
					<hr>
					<h3>Questions</h3>
					<hr>
					<p><a href="multiplechoice">Multiple Choice</a></p>
					<p><a href="stimulating">Stimulating</a></p>
					<p><a href="eitheror">Either / Or</a></p>
					<p><a href="trueorfalse">True or False</a></p>
					<p><a href="resultspage">Results page</a></p>
					<hr>
					<h3>Communications</h3>
					<hr>
					<p><a href="sendtext">Send Text</a></p>
					<p><a href="accesswebpage">Access webpage</a></p>
					<hr>
					<h3>Images</h3>
					<hr>
				</div>
				<div class="advice">
					<?

						if(isset($_GET['help'])){
						
							if(file_exists("helppages/" . $_GET['help'] . ".txt")){

								echo file_get_contents("helppages/" . $_GET['help'] . ".txt");

							}else{			

								echo "Sorry, the resource is not found";

							}

						}else{

							echo file_get_contents("helppages/intro.txt");

						}

					?>
				</div>
			</div>	
		</div>
	</body>
</html>