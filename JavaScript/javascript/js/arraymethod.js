// array -> string, number, objek, function, campuran

let nilai = [
    {nama: "karina", matematika: 90, bahasa: 70, inggris: 80},
    {nama: "kezia", matematika: 100, bahasa: 80, inggris: 90},
    {nama: "jesslyn", matematika: 100, bahasa: 70, inggris: 90},
    {nama: "greece", matematika: 90, bahasa: 80, inggris: 70},
]

let nama = ["karina", "kezia", "jesslyn", "greece"];
// nama.push("natty", "joy");

// console.log(nama.shift);

// nama.unshift("ehsan", "hasan");

// console.log(nama.splice(0, 3));

let mapel = ['matematika', 'bahasa', 'inggris'];

// console.log(nama.concet(mapel)); 

// console.log(nama.concet(['ips', 'pkn', 'agama']));

// console.log(nama.splice(3, 4));

// console.log(nama.pop());    /* mengambil nama yg terakhir (joy) */

// console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
    
// }

// nama.forEach(function (a) {
//     console.log(a);
// })

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//     if (a.bahasa > 80) {
//         console.log(a.nama);
//     }
// })

// console.log(nilai);

// nilai.filter(a => a.bahasa > 80 && a.matematika > 80 ? console.log(a.nama) : null);

// let siswa = nilai.map(function (a) {
//     return a.nama;
// });

let siswa = nilai.map(a => [a.nama, a.inggris, a.matematika]);

console.log(siswa);

mapel.sort();

console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.inggris);
// }, 0);

let hasil = nilai.reduce((a, b) => (a += b.matematika), 0);

console.log(hasil); 