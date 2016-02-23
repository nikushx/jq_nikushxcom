<?php
    $link = mysql_connect('localhost', 'ENTER_DBNAME', 'ENTER_PASSWORD');
    if(!$link) {

        die('Count not connect: '. mysql_error());

    }
    mysql_select_db('nikush_dh', $link);
    
    if (isset($_POST["points"])) {
        
        $points = json_decode($_POST["points"]);
        
    }

    $id = $points->id;
    $name = $points->name;
    $address = $points->address;
    $url = $points->url;
    $rating = $points->rating;

    $result = mysql_query("SELECT * FROM eachr WHERE id='$id' LIMIT 1");
    $vege = mysql_query("SELECT veg FROM eachr WHERE id='$id' LIMIT 1");
    if(mysql_fetch_array($result) !== false) {
        //Assigned
        
    } else {
        $sqlFalse = "INSERT INTO `eachr` (`id`, `name`, `address`, `url`, `rating`, `veg`) VALUES ('$id','$name','$address','$url','$rating', 0)";
        $retValFalse = mysql_query($sqlFalse, $link);

        
        
        if(!$retValFalse) {
            die('Could not enter data: '.mysql_error());
        }   
    }


    mysql_close($link);
?>