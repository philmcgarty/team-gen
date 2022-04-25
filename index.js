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
let questions = [
    {   // name
        type: 'input',
        name: 'name',
        message: "Employee's name?",
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
        }
    },
    {   // employee ID
        type: 'input',
        name: 'id',
        message: "Employee's ID number?",
        validate: idInput => {            
            if(idInput && !isNaN(parseInt(idInput))){
                return true;
            } else {                
                console.log('Please enter ID Number (numbers only)');
                return false;
            }
        }
    },
    {   // email
        type: 'input',
        name: 'email',
        message: "Employee's email address?",
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }           
        }
    },
    {   // individual questions here - default manager question
        type: 'input',
        name: 'officeNumber',
        message: "Manager's office number?",
        validate: officeInput => {            
            if(officeInput && !isNaN(parseInt(officeInput))){
                return true;
            } else {                
                console.log('Please enter office number (numbers only)');
                return false;
            }
        }
    }    
];

// role specific question
const engineerQuestion = {
    type: 'input',
    name: 'github',
    message: "Engineer's gitHub user name?",
    validate: githubInput => {
        if (githubInput){
            return true;
        } else {
            console.log('Please enter a gitHub user name');
            return false;
        }           
    }
};
const internQuestion = {
    type: 'input',
    name: 'school',
    message: "Name of Intern's school?",
    validate: schoolInput => {
        if (schoolInput){
            return true;
        } else {
            console.log("Please enter the Intern's school name");
            return false;
        }           
    }
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

    Enter Manager information:
    `);
    return inquirer.prompt(questions)
        .then(data => {
            const {name, id, email, officeNumber} = data;
            teamArray.push(new Manager(name, id, email, officeNumber));
            // console.log(teamArray);
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
                        console.log("Enter Engineer information:");
                        questions.push(engineerQuestion);
                        this.addEngineer();
                        break;
                    case "Add an Intern":
                        console.log("Enter Intern information:")
                        questions.push(internQuestion);
                        this.addIntern();
                        break;
                    case "Finish building team (exit)":
                        this.exit();
                }
            })
    };

    Start.prototype.addEngineer = function(){
        //console.log('You chose to add an engineer!');
        return inquirer.prompt(questions)
        .then(data => {
            const {name, id, email, github} = data;
            teamArray.push(new Engineer(name, id, email, github));
            // console.log(teamArray);
            this.option();
        })
    };

    Start.prototype.addIntern = function(){
        //console.log('You chose to add an intern!');
        return inquirer.prompt(questions)
        .then(data => {
            const {name, id, email, school} = data;
            teamArray.push(new Intern(name, id, email, school));
            // console.log(teamArray);
            this.option();
        })
    };
    
    Start.prototype.exit = function(){
        console.log('You chose to exit!')
        let html = generateHTML(teamArray);
        this.writeToFile('./dist/index.html', html);
        this.copyStylesheet();
    };
    // copied format of function from "portfolio generator" lesson
    Start.prototype.writeToFile = function(fileName, html){
        fs.writeFile(fileName, html, err =>{
            if(err){
                console.log(err);
                return;
            }
            console.log('New HTML team file successfully generated');
        })
    };
    // copied format of function from "portfolio generator" lesson
    Start.prototype.copyStylesheet = function(){
        fs.copyFile('./src/style.css', './dist/style.css', err =>{
            if(err){
                if(err){
                    console.log(err);
                    return;
                }
            }
            
        });
    };

};

new Start().initialize();