<?php
    $link = mysql_connect('localhost', 'root', '');
    if(!$link) {

        die('Count not connect: '. mysql_error());

    }
    mysql_select_db('rests', $link);

        
?>