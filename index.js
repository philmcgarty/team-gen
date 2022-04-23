// Modules required for application
const fs = require('fs');
const inquirer = require('inquirer');
// Links to .js files required for application
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// CORE QUESTIONS
const questions = [
    {   // name
        type: 'input',
        name: 'name',
        message: 'Employee name?'
    },
    {   // employee ID
        type: 'input',
        name: 'id',
        message: "Employee's ID number?"
    },
    {   // email
        type: 'input',
        name: 'email',
        message: "Employee's email address?"
    },
    {   // individual questions here - default manager question
        type: 'input',
        name: 'officeNumber',
        message: "Manager's office number?"
    }
    
];

// role specific question
const engineerQuestion = {
    type: 'input',
    name: 'github',
    message: "Engineer's gitHub user name?"
};
const internQuestion = {
    type: 'input',
    name: 'school',
    message: "Name of Intern's school"
};



function start(){
    console.log(`
    -----------------------
    WELCOME TO TEAM BUILDER
    -----------------------
    `);
    
}