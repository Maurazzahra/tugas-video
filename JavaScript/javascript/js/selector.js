const hari = 6;
let hasil;

switch (hari) {
    case 1:
        hasil = "Minggu";
        break;
    case 2:
        hasil = "Senin";
        break;
    case 3:
        hasil = "Selasa";
        break;
    case 4:
        hasil = "Rabu";
        break;
    case 5:
        hasil = "Kamis";
        break;
    case 6:
        hasil = "Jumat";
        break;
    case 7:
        hasil = "Sabtu";
        break;

    default:
        hasil = "Hari tidak ditemukan";
        break;
}

console.log(hasil);

const bln = "agustus";
let bulan;

switch (bln) {
    case "Januari":
        bulan = 1;
        break;
    case "Februari":
        bulan = 2;
        break;
    case "Maret":
        bulan = 3;
        break;
    case "April":
        bulan = 4;
        break;
    case "Mei":
        bulan = 5;
        break;
    case "Juni":
        bulan = 6;
        break;
    case "Juli":
        bulan = 7;
        break;

    default:
        bulan = "Bulan belum dibuat";
        break;
}

console.log(bulan);