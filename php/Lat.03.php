<?php 

    function belajar(){
        echo "Saya Belajar PHP";
    }

    function luasPersegi($p = 50, $l = 10){
        $luas = $p * $l;

        echo $luas;
    }

    function luas($p = 50, $l = 10){
        $luas = $p * $l;

        return $luas;
    }

    function output(){
        return "Belajar Function";
    }

    echo luas(100, 20) * 6;

?>