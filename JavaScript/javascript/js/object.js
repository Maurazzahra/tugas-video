const objek = {
    nama: "Woozi",
    telp: 12345678,
    alamat: "Jl. Kebon Jeruk",

    buah: ['apel', 'mangga', 'pisang'],

    coba : function() {
        return "coba function dalam objek";
    },

    boleh: true,
    "tulis saja": 12345,
};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.alamat);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tulis saja"]);