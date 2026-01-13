// jadi ini adalah komen, bebas aja


// 1. variabel dengan let
let nama = "min yoongi";

// tampilan data
console.log(nama);

//ubah variabel nama
nama = "shooky cookies";
console.log(nama);

// 2. variabel dengan var
var namaDepan = "min";
console.log(namaDepan);
namaDepan = "shooky";
console.log(namaDepan);

// kelakuan dari let
let namaBelakang = "yoongi";
{
    let namaBelakang = "cookies";
    console.log(namaBelakang);
}
console.log(namaBelakang);

//kelakuan dari var
//var namaTengah = "yoon";
{
    var namaTengah = "gi";
    console.log(namaTengah);
}
console.log(namaTengah);

//kasus khusus tanpa keyword akan jadi var
contohBaru = "Bala-bala";
{
    gorengan = "combro";
}
console.log(gorengan);

// 3. const

const TTL = "20 Maret 2025";
console.log(TTL);

