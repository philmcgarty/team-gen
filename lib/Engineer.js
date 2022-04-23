const Employee = require('./Employee.js');


class Engineer extends Employee{
    constructor(name, id, email, github){
        // Employee properties
        super(name, id, email);
        // github user name
        this.github = github;
        // getRole() - Overridden to return 'Manager'
        this.role = super.getRole("Engineer");       
    }
    
    // getGithub()
    getGithub(){
        return this.github;
    };
}



// github // GitHub username


// getRole() // Overridden to return 'Engineer'



module.exports = Engineer;