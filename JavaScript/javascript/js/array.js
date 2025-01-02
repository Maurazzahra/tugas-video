let coba = function () {
    return "coba function";
}

let buah = ['apel', 'mangga', 'melon', 10, coba(),
   (tes = () => "hasil retur arrow function"),

   function nama() {
        return "seventeen right here";
   }
];

console.log(buah);

console.log(buah[1]);

for(let i in buah){
    console.log(buah[i]);
}

console.log(buah[5]());

console.log(buah[6]());