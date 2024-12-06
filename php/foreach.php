<?php 

    $nama = array('Giselle', 'Ningning', 'Karina', 'Winter', 100);

    // var_dump($nama);

    echo '<br>';

    foreach ($nama as $key) {
        echo $key.'<br>';
    }

    $nama = array(
        "Giselle" => "Tokyo",
        "Ningning" => "Chengdu",
        "Karina" => "Daegu",
        "Winter" => "Seoul"
    );

    var_dump($nama);

    echo '<br>';

    foreach ($nama as $a => $b) {
        echo $a.' - '.$b;

        echo '<br>';
    }



?>