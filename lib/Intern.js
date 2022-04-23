const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        // Employee properties
        super(name, id, email);
        // intern school
        this.school = school;
        // getRole() - Overridden to return 'Intern'
        this.role = super.getRole("Intern");       
    }
    
    // getSchool()
    getSchool(){
        return this.school
    };
};


module.exports = Intern;