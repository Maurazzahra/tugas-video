
<?php 

    for ($i = 1; $i <= 12; $i = $i + 2) { 
        echo $i. ',';
    }
    // 1,2,3,4,5,6,7,8,9,10,11,12

    echo '<br>';

    for ($i = 12; $i >= 1; $i = $i-2) { 
        echo $i.',';
    }
    // 12,10,8,6,4,2,

    echo '<br>';

    $a = 1;
    while ($a <= 10) {
        echo $a.',';
          
        $a++;
    }

    do {
        echo $a.',';
        $a++;
    } while ($a <= 10);
?>