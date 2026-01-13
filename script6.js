let dataString = "data string";
console.log(dataString);

// 1. escaping string
let data1 = 'ruka berkata "pulu pulu pulu"';
console.log(data1);
 let data2 = 'asa berkata"pulu pulu pulu"';
 console.log(data2);
 let data3 =  "rami hiatus tak comeback comeback";
 console.log(data3);

 // 2. literal string (template literal string)
 let namaDepan = "Kawai";
 let namaBelakang = "Ruka";
 let umur = 20;
 let namaLengkap = namaDepan + " " + namaBelakang + " " + umur;
 console.log(namaLengkap);

 //lebih elehan supaya ini tidak bikin error
 let biodata = '${namaDepan} ${namaBelakang} dengan umur $ {umur}'; 
 console.log(biodata);


