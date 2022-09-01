// class Employee {
//     constructor (name){
//         this._name = name;
//     }
//     doWork(){
//         return "complete!";
//     }
//     getName(){
//         return this._name;
//     }
// }

// import { Person } from "./Class";
// import Employee from "./Employee";

// let scott = new Employee("R Fasich");
// console.log(scott.doWork());


// class Employee {
//     constructor (name){
//         this._name = name;
//     }
//     doWork(){
//         return "complete!";
//     }
//     getName(){
//         return this._name;
//     }
// }

// let scott = new Employee("R Fasich");
// console.log(scott.getName());

// class Person {
//     constructor (name){
//         this._name = name;
//     }
//     getName(){
//             return this._name;
//         }
//     }
    
//     class Employee extends Person{
        
//         }
        
// let scott = new Employee("R Fasich");
// console.log(scott.getName());
// console.log(scott.doWork());


// let scott = new Employee("R Fasich");
// console.log(scott.getName());

class Person{
    constructor(name) {
        this._name = name;
    }
    getName(){
        return this._name;
    };
}

class Employee extends Person{
    constructor(name, title){
        super(name);
        this._title = title;
    }
    doWork(){
        return "Complete!"
    }
    getTitle(){
        return this._name + " is " + this._title;
    }
}

const fasich = new Employee("Fasich Aulia", "a Good Boy");
console.log(fasich.doWork());
console.log(fasich.getName());
console.log(fasich.getTitle());

const p2 = new Person("fasich")
console.log(p2.getName());

// const mark = new Employee("R. Fasich");
// console.log(Employee.getName())
// const fasich = 


// import Employee from "./Employee.js";
// mark.doWork();

// import {Person, Employee} from "./Class.js";
// const mark = new Employee("Fasich");
// mark.doWork()

// fetch('https://api.faketweet.com/tweets')
//     .then(response => {
//         return response.json()
//     }).then(tweets => { 
//         return tweets.filter(tweet => {
//             return tweet.stars > 50;
//         })
//     }).then(tweets => { 
//         return tweets.filter (tweet => {
//             return tweet.rts > 50;
//         })
//     }).catch(err => {
//         console.error(error); 
//     });


// fetch('https://github.com/lionhard83/fake-tweets-api')
// https://fake-tweets-api.herokuapp.com/posts
// .then(response => response.json ())
// .then(tweets => tweets.filter(tweet => tweet.stars > 50))
// .then(tweets => tweets.filter(tweet => tweet.rts > 50))
// .catch(err => {
//     console.error(error);
// });



// setTimeout(() =>{
//     console.log("Tick");
// }, 1000);

// const doSomething = function(){
//     return new Promise((resolve, reject) => {

//     })
// };

// let doIt = doSomething()
// doIt.then(response =>{

// })
// doIt.catch(console.error => {

// })

// const setTimeoutPromise = (duration) =>
// new Promise((resolve, reject) => {
//     setTimeout((resolve, duration));
// });

// setTimeoutPromise(1000).then(() => console.log("Thick"));

// fetch('https://api.faketweet.com/tweets')
// .then(response => response.json ())
// .then(tweets => tweets.filter(tweet => tweet.stars > 50))
// .then(tweets => tweets.filter(tweet => tweet.rts > 50))
// .catch(err => {
//     console.error(error);
// });

