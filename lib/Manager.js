const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        // Employee properties
        super(name, id, email);
        // officeNumber
        this.officeNumber = parseInt(officeNumber);
        // getRole() - Overridden to return 'Manager'
        this.role = super.getRole("Manager");       
    }

    getOfficeNumber(){
        return this.officeNumber;
    };
}
// Employee's methods


module.exports = Manager;