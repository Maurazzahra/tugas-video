<?php 

    $hari = 1;

    switch ($hari) {
        case 1:
            echo 'Minggu';
            break;
        case 2:
            echo 'Senin';
            break;
        case 3:
            echo 'Selasa';
            break;
        case 4:
            echo 'Rabu';
            break;
        default:
            echo 'hari belum dibuat';
            break;
    }

    $pilihan = 'tambah';

    switch ($pilihan) {
        case 'tambah':
            echo 'anda memilih tambah';
            break;
        case 'ubah':
            echo 'anda memilih ubah';
            break;
        case 'hapus':
            echo 'anda memilih hapus';
            break;
        
        default:
            echo 'Pilihan belum ada';
            break;
    }
?>