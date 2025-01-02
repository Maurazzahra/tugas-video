<?php 

    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));
    $idpelanggan = json_decode($data, true);

    $idpelanggan = $idpelanggan['idpelanggan'];

    if (!empty($pelanggan)  ) {
        $sql = "DELETE FROM tblpelanggan WHERE idpelanggan = '$idpelanggan'";
    
        $sql = "INSERT INTO tblpelanggan VALUES ('', '$pelanggan', '$alamat', '$telp')";

        if ($result = mysqli_query($con, $sql)) {
            echo "Data Telah Terhapus";
        } else {
            echo "Data Gagal Terhapus";
        }

    }else {
        echo "Data Belum Di Isi";
    }

?>