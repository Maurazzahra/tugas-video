<?php 

    // OPERATOR MATEMATIKA

    $a = 10;
    $b = 2;

    $c = $a + $b;

    echo $c.'<br>';

    $c = $a - $b;
    echo $c.'<br>';

    $c = $a * $b;
    echo $c.'<br>';

    $c = $a / $b;
    echo round($c); //pembulatan keatas

    echo '<br>';

    $c = $a / $b;
    echo floor($c); //pembulatan kebawah
    
    $c = $a % $b;
    echo $c.'<br>';

    // OPERATOR LOGIKA

    $c = $a < $b;
    echo $c;

    $c = $a > $b;
    echo $c;

    $c = $a == $b;
    echo $c;

    $c = $a != $b;
    echo $c.'<br>';

    // INCREMENT
    $a++;
    echo $a.'<br>';

    // OPERATOR STRING

    $kata = 'Sura';
    $kota = 'Baya';

    $hasil = $kata.$kota;

    $hasil .=' Kota Pahlawan';
    echo $hasil;

?>