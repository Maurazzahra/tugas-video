document.querySelector("#klik").addEventListener("click", tampil);

async function tampil() {
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url);

    const data = await response.json();

    let out = "<ul>";
    data.forEach(element => {
        console.log(element.name);
        out += `<li>${element.name}</li>`;
    });

    out += "</ul>";
    document.querySelector("#isi").innerHTML = out;
}
