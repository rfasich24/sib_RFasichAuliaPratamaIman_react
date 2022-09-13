// const user = {};
// user.nama = 'R. Fasich';
// user.age = 20;
// user.hoby = 'playing game';

// console.log(user)
//extraction
// const nama = user.nama;
// const age = user.age;
// const hoby = user.hoby;
// console.log(nama, age, hoby)

// const user = {
//     nama: 'R. Fasich',
//     age: 20,
//     hoby: 'playing game',
// };

// // console.log(user)
// //extraction
// const nama = user.nama;
// const age = user.age;
// const hoby = user.hoby;
// console.log(nama, age, hoby)

// const getUser=()=>{
//     return{
//         nama: 'R. Fasich',
//         age: 20,
//         hoby: 'playing game',
//     };
// }

// const {nama, age, hoby} = getUser();
// console.log(nama, age, hoby)

// const csv = "1971, Asus, TUF, $25";
// const [year, merk, model, price] = csv.split(",")
// console.log(merk, model, year, price);

// const user = {
//     n: 'R Fasich',
//     a: 20,
//     h: 'Playing Game'
// }

// const { n:nama, a:age, h:hoby} = user;
// console.log(nama, age, hoby)

//function > menyimpan sebuah fungsi kedalam variable
// console.log(add(1,5))
// function add(a,b){
//     return a+b
// }


// console.log(add(1,5))
//karna  dia harus diinisialisasi functionnya dulu baru bisa dipanggil
// const add = function(a,b){
//     return a+b
// }

// function Person(){
//     this.age = 0;
//     setInterval(function() {
//         this.age++;
//         console.log(this.age);
//     }.bind(this), 1000);
// }

// const p = new Person();



// function Person(){
//     this.age = 0;

//     setInterval(() => {
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }

// const p = new Person();

// setInterval(() => {
//   console.log("Tick");
// }, 1000);

// setInterval(printTick, 1000);

// const printTick = () => {
//   console.log("Tick");
// };

// const animals = [
//     { name: "Fluffy", species: "cat" },
//     { name: "Carlo", species: "dog" },
//     { name: "Nemo", species: "fish" },
//     { name: "Hamilton", species: "dog" },
//     { name: "Dory", species: "fish" },
//     { name: "Ursa", species: "cat" },
// ];

// let fish = [];
// for (let i = 0; 1 < animals.length; i++) {
//   if (animals[i].species === "fish") {
//     fish.push(animals[i]);
//   }
// }

// let fish = animals.filter((animal) => animal.species === "fish");

// let names = [];
// for (let i = 0; 1 < animals.length; i++) {
//   names.push(animals[i].name);
// }
// console.log(names);

// let names = animals.map((animal) => animal.name);
// console.log(names);

// let names = animals.map((animal) => animal.name + " is a " + animal.species);
// console.log(names);

// let orders = [{ total: 325 }, { total: 512 }, { total: 128 }, { total: 32 }];

// let total = 0
// for (let i=0; i<orders.length; i++) {
//   total = total + orders[i].total
// }
// console.log(total);

// let total = orders.reduce((total, order) => total + order.total, 0);
// console.log(total);

