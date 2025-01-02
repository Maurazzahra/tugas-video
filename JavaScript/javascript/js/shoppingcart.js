let tblmenu = [

    {idmenu:10, idkategori:0, menu:"Apel Fuji", gambar:"apel.jpg", harga: 35000},
    {idmenu:8, idkategori:1, menu:"Melon Busan", gambar:"buahmelon.jpg", harga: 20000},
    {idmenu:7, idkategori:1, menu:"Strawberry", gambar:"stoberi.jpg", harga: 35000},
    {idmenu:11, idkategori:2, menu:"Lychee", gambar:"leci.jpg", harga: 55000},
    {idmenu:11, idkategori:3, menu:"Nanas", gambar:"nanas.jpg", harga: 30000},

];

let tampil = tblmenu.map(function (kolom) {
    return ` <div class="produk-content">
                <div class="image">
                    <img src="images/${kolom.gambar}" alt="">
                </div>
                <div class="title">
                    <h2>${kolom.menu}</h2>
                </div>
                <div class="harga">
                    <h3>Rp. ${kolom.harga}</h3>
                </div>

                <div class="btn-beli">
                    <button data-idmenu=${kolom.idmenu}>Beli</button>
                </div>
             </div> `;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
    // console.log(btnbeli[index].dataset["idmenu"]);
    cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    }; 
}