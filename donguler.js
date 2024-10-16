 //console.log(2 + 2);


 //? while şartı true döndüğü sürece döngü çalışır.

let n = 1; // ilk değer atama (initialization)

while (n < 6) { // koşul (condition)
    console.log(n);
    n++; // arttırma/azaltma (increment/decrement)
}



while (k < 7) {
    console.log(n++); 
    //console.log(n);
    //n = n + 1; 
}
console.log("bye bye");

/*
for (initialization; condition; iterator)
    body
*/

for (let k = 1; k < 6; k++) {
    console.log(k);
}


/* 
let n = 1;

! sonsuz döngü
while (true) {
    console.log(n++);

    ! sonsuz döngüyü while içinden kırabiliyoruz
    if (n == 103)
        break; // döngüden kaçış
}
 */

/*
! sonsuz döngü
let n = 1;
for(;;) {
    console.log(n++);

    if (n == 200)
        break; // sonsuz döngüyü içerden kırdık
}*/


for (let i = 1; i <= 7; i++) {
    console.log("*".repeat(i))
}


//! birden yediye sayılar

for (let i = 1; i <= 7; i++) {
    let yazilacak = "";
    for(let j =0; j<i; j++)
        yazilacak += "-";
    console.log(yazilacak);
}



//! 10-20 aralığındaki sayıları yazdır
for (let i = 10; i <= 20; i++)
    console.log(i);

console.log("-------------------");

let j = 10;

while (j <= 20)
    console.log(j++);