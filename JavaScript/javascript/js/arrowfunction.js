let fungsi = function (nama) {
    console.log("Fungsi dijalankan" + nama);
}

fungsi("Wendy");

let contoh = (nama) => {
    console.log("Belajar function" + nama);
}

contoh("Joy");

let tambah =  function (a, b) {
    return a + b;
}

console.log(tambah(2, 3));

let plus = (a, b) => a + b;

console.log(plus(5, 7));

let hasil = (a) => a * 7;

console.log(hasil(3));

let lagi = () => console.log("coba lagi");

lagi();

let belajar = () => {
    console.log("baris satu");
    console.log("baris dua");
    console.log("baris tiga");
    console.log("baris selanjutnya");
}

belajar();

let nilai = 10;

let uji = nilai < 7 ? () => predikat = "TIDAK LULUS" : () => predikat = "LULUS";

console.log(uji());