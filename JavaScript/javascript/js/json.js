document.querySelector("#klik").addEventListener("click", tampil);      /* pakai #klik karena berupa id */

function tampil(params) {

    let url = "js/tblmenu.json";
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        let output = "<h2>Data Menu</h2> <table> <th>Menu</th> <th>Harga</th> <th>Warna</th>";
        data.forEach(Element => {
            output += `<tr>
                <td>${Element.menu}</td>
                <td>${Element.harga}</td>
                <td>${Element.warna[0]}</td>
            </tr>`;
        });
        output += "</table>";
        document.querySelector("#isi").innerHTML = output;
      })

}

// let tblmenu = [
//     {

//     "idmenu" : 1,
//     "idkategori" : 1,
//     "menu" : "Strawberry",
//     "harga" : 10000,
//     "warna" : ["Pink", "Kuning", "Biru"],
//     "stock" : true,
//     "keterangan" : null

//     },
//     {

//     "idmenu" : 2,
//     "idkategori" : 1,
//     "menu" : "Melon",
//     "harga" : 12000,
//     "warna" : ["Pink", "Kuning"],
//     "stock" : false,
//     "keterangan" : null

//     }

// ]

// // console.log(tblmenu);
// // console.log(tblmenu.menu);
// console.log(tblmenu[1].menu);