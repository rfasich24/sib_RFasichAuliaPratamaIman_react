let score;
score = 50;
console.log("Hasil variable score :", score);

let playerName = "R Fasich";
console.log("hasil variable playerName :", playerName);
// alert(playerName);
playerName = "Pratama";
console.log("Hallo,", playerName);
// alert(playerName);

let weight = 75;
// alert(weight + 15);  // 90*
console.log("weight :", weight + 15); // 90*

let originalNum = 23;
let newNum = originalNum + 7;
console.log("newNum :", newNum);

let numberToBeAdded = 7;
newNum = originalNum + numberToBeAdded;
console.log("newNum :", newNum);

console.log("Selamat datang di kelas Modern JavaScript Dasar");
console.log("Nama saya Fasich");
console.log("JavaScript is Fun");

let message = "Welcome!";
console.log(message);
message = "Bye, bye";
console.log(message);

message = "She's a great person";
console.log(message);
message = "She's a great person";
console.log(message);

let htmlSnippet = '<h1 class="header"> This is a header </h1>';

// Bukan berupa object atau array > tidak bisa diganti
const angkaKeberuntungan = 10;

// example
// umum yang biasa digunakan
// id, nama, jenkel
const objectAngkaKeb = { id: 1, name: "almas", jenkel: "L" };
objectAngkaKeb.id = 2;
objectAngkaKeb.name = "Pratama";
objectAngkaKeb.jenkel = "Laki - Laki";
objectAngkaKeb.alamat = "Probolinggo";
console.log(objectAngkaKeb);

// sample > array
const arrayNumber = [1, 2, 3, 4, 5];
arrayNumber.push(6);
arrayNumber.push(7);
console.log(arrayNumber);
