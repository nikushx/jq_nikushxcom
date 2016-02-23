<?php 
            
    $id = $_GET['id'];
    $name = $_GET['name'];
    $address = $_GET['address'];
    $url = $_GET['url'];
    $rating = $_GET['rating'];
    $result = mysql_query("SELECT * FROM eachr WHERE id='$id' LIMIT 1"); 


    $sqlFalse = "INSERT INTO `eachr` (`id`, `name`, `address`, `url`, `rating`, `veg`) VALUES ('$id','$name','$address','$url','$rating', 0)";
    $retValFalse = mysql_query($sqlFalse, $link);

    if(!$retValFalse) {
        die('Could not enter data: '.mysql_error());
    }



?>