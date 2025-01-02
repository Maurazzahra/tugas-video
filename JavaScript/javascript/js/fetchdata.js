document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    // .then(function (res) {
    //     return res.json();
    // })
    .then(response => response.json())
    // .then(function (data) {
    //     console.log(data);
    // })

    .then(data => {
        // console.log(data);

        let out = "<ul>";
        data.forEach(me => {
            out += `<li>${me.title}</li>`;
            // console.log(me.title);
        });

        out += "</ul>";
        document.querySelector("#isi").innerHTML = out;
    })
}