class Employee{
    constructor(name){
        this._name = name;
    }
    getName(){
        return this._name
    }
    doWork(){
        return this._name + " is working!"
    }
}

export default Employee
