// Modules required for application
const fs = require('fs');
const inquirer = require('inquirer');
// Links to .js files required for application
// classes
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
// HTML generating functions
const generateHTML = require('./lib/generateHTML.js');

let teamArray = [];

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

const optOrExit = {
    type: 'list',
    name: 'addOption',
    message: "Please pick an option",
    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team (exit)']
};


function Start(){
    
    Start.prototype.initialize = function(){
        console.log(`
    -----------------------
    WELCOME TO TEAM BUILDER
    -----------------------
    `);
    return inquirer.prompt(questions)
        .then(data => {
            const {name, id, email, officeNumber} = data;
            teamArray.push(new Manager(name, id, email, officeNumber));
            console.log(teamArray);
            this.option();
        })
    };

    Start.prototype.option = function(){
        return inquirer.prompt(optOrExit)
            .then(data => {
                const {addOption} = data;
                //console.log(addOption);
                questions.pop();
                switch(addOption){
                    case "Add an Engineer":
                        questions.push(engineerQuestion);
                        this.addEngineer();
                        break;
                    case "Add an Intern":
                        questions.push(internQuestion);
                        this.addIntern();
                        break;
                    case "Finish building team (exit)":
                        this.exit();
                }
            })
    };

    Start.prototype.addEngineer = function(){
        console.log('You chose to add an engineer!');
        return inquirer.prompt(questions)
        .then(data => {
            const {name, id, email, github} = data;
            teamArray.push(new Engineer(name, id, email, github));
            console.log(teamArray);
            this.option();
        })
    };

    Start.prototype.addIntern = function(){
        console.log('You chose to add an intern!');
        return inquirer.prompt(questions)
        .then(data => {
            const {name, id, email, school} = data;
            teamArray.push(new Intern(name, id, email, school));
            console.log(teamArray);
            this.option();
        })
    };
    
    Start.prototype.exit = function(){
        console.log('You chose to exit!')
        generateHTML(teamArray);
    };

};

new Start().initialize();