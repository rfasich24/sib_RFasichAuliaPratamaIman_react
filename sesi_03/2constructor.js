class Employee {
    constructor (name){
        this._name = name;
    }
    doWork(){
        return "complete!";
    }
    getName(){
        return this._name;
    }
}

let fasich = new Employee("R Fasich");
console.log(fasich.getName() + " " + fasich.doWork());