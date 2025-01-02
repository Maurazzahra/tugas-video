$(document).ready(function () {

    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function (e) { 
        e.preventDefault();

        id = $("#id").val();
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            insertData();
        }else {
            updateData();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });

    $("#btn-tambah").click(function (e) { 
        e.preventDefault();

        $("#title").html("<p> Tambah Data </p>");
        
        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });

    $("tbody").on("click", ".btn-del", function () {
        let id = $(this).attr("id");

        if (confirm("Yakin Ingin Menghapus ?")) {
            deleteData(id);
        }

    });

    $("tbody").on("click", ".btn-ubah", function () {
        let id = $(this).attr("id");
        $("#title").html("<p> Update Data </p>");
        selectUpdate(id);
    });

    function selectUpdate(id) {
        let idpelanggan = {
            idpelanggan : id
        }
    
        $.ajax({
            type: "post",
            url: "php/selectupdate.php",
            caches: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",       
            success: function (response) {
                let data = JSON.parse(response);

                $("#id").val(data.idpelanggan);
                $("#pelanggan").val(data.pelanggan);
                $("#alamat").val(data.alamat);
                $("#telp").val(data.telp);
            }
        });
    
        selectData();
    }
    
    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            caches: false,
            data: "json",
            dataType: "dataType",
            success: function (response) {
                let out = "";
                let No = 1;
                $.each(response, function (key, val) { 
                     out += `<tr>
                                <td>${No++}</td>
                                <td>${val.pelanggan}</td>
                                <td>${val.alamat}</td>
                                <td>${val.telp}</td>
                                <td><button type="button" class="btn btn-danger btn-del" data-id = ${val.idpelanggan}>Delete</button></td>
                                <td><button type="button" class="btn btn-warning btn-ubah" data-id = ${val.idpelanggan}>Update</button></td>
                            </tr>`;
                });

                $("#isidata").html(out);
            }
        });
    }

    function insertData() {
        // alert("insert");

        let dataPelanggan = {
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "post",
            url: "php/insert.php",
            caches: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",        ~ karena type post ~
            success: function (response) {
                let out = `<p>${response}</p>`;
                $("#msg").html(out);
            }
        });

        selectData();
    }

    function deleteData(id) {
        let idpelanggan = {
            idpelanggan : id
        }
    
        $.ajax({
            type: "post",
            url: "php/delete.php",
            caches: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",       
            success: function (response) {
                let out = `<p>${response}</p>`;
                $("#msg").html(out);
            }
        });
    
        selectData();
    }

    function updateData() {
        let dataPelanggan = {
            idpelanggan : id,
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "post",
            url: "php/update.php",
            caches: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",        ~ karena type post ~
            success: function (response) {
                let out = `<p>${response}</p>`;
                $("#msg").html(out);
            }
        });

        selectData();
    }

    selectData();
});