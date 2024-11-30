<?php 

    // ARRAY DIMENSI

    $nama = array("Giselle", "Ningning", "Karina", "Winter", 100, 2.5);

    // var_dump($nama);

    echo '<br>';

    echo $nama[5];

    echo '<br>';

    for ($i=0; $i < 6; $i++) { 
        // echo $i;

        echo $nama[$i].'<br>';
    }

    foreach ($nama as $k) {
        echo $k.'<br>';
    }

    // ARRAY ASOSIATIF

   $nama = array(
        "Giselle" => "24, Tokyo",
        "Ningning" => "22, Tiongkok",
        "Karina" => "24, Daegu",
        "Winter" => "23, Seoul"
   );

   // var_dump($nama);

   // echo $nama["Giselle"];
   echo '<br>';

   foreach ($nama as $key => $value) {
        echo $key." > ".$value;

        echo '<br>';
   }


 ?>