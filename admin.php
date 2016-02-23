<!DOCTYPE html>

<html>

    <head>
        
    </head>

    <body>
        
        <?php
		
			$link = mysql_connect('localhost', 'root', '');
			if(!$link) {

				die('Count not connect: '. mysql_error());

			}
			mysql_select_db('rests', $link);
			
			document.getElementById('button').onclick = function() {
			$lol = document.getElementById('lolz').value;
			$result = mysql_query("SELECT veg FROM eachr WHERE id='$lol' LIMIT 1");
			}
			$good = 0;
			
			if ($good == 0) {
				
				document.write("no good");
				
			} else {
				
				document.write("good 2 go");
				
			}
			if(mysql_fetch_array($result) !== false) {
				
				$num = document.getElementById('t2').value;
				$result = mysql_query("UPDATE eachr SET veg='$num' WHERE id='$lol'");
				
			}
		
		?>
		
		<input id = 'lolz'></input><button>get</button>
		<hr />
		<input id = 'go'></input><button>upload</button>
    
    </body>
    
</html>