class Person {
    constructor (name){
        this._name = name;
    }
    getName(){
            return this._name;
        }
    }
    
    class Employee extends Person{
        doWork(){
            return this._name + " is working!";
        }
        getTitle(){
            return this._name + " has no Title"
        }
        }

console.log("\nclass Employee")        
let p1 = new Employee("R Fasich");
console.log(p1.getName());
console.log(p1.doWork());
console.log(p1.getTitle());

console.log("\nclass Person")
const p2 = new Person("Fasich");
console.log(p2.getName())
// console.log(p2.doWork()) //undefined