if (true) {
    console.log("Dijalankan Jika Benar");
}else {
    console.log("Dijalankan Jika Salah");
}

let nilai = 90;
let standar = 100; 
let baik = "LULUS";
let gagal = "TIDAK LULUS";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "Nilai Salah";

if (nilai <= batasatas || nilai >= batasbawah) {

    if (nilai >= standar) {
        console.log(baik);
    }else {
        console.log(gagal);
    }
    
} else {
    console.log(peringatan);
}
