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
        return this._name + "chas Completed the task!"
    }
    getTitle(){
        return this._name + " is " + this._title;
    }
}

console.log("Class Employee")
const p1 = new Employee("Fasich Aulia", "a Good Boy");
console.log(p1.doWork());
console.log(p1.getName());
console.log(p1.getTitle());

console.log("\nClass Person")
const p2 = new Person("fasich")
console.log(p2.getName());
// console.log(p2.doWork()) //undefined