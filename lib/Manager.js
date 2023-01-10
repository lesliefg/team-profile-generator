const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        this.officeNumber = officeNumber;

        super(name, id, email)
    }

    getSchool(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;