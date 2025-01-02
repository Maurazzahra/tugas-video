console.log(localStorage.getItem("belajar local storage"));

sessionStorage.setItem("ayo belajar", 100);

console.log(sessionStorage.getItem("ayo belajar"));

// sessionStorage.removeItem("ayo belajar");

sessionStorage.setItem("panjang", 700);
sessionStorage.setItem("lebar", 300);

//sessionStorage.clear();

console.log(sessionStorage.length);

console.log(sessionStorage.key(2));