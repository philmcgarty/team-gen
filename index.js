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
// var to store generated employee objects
let teamArray = [];

// CORE QUESTIONS - var of questions used for inquirer prompt
let questions = [
    {   // name
        type: 'input',
        name: 'name',
        message: "Employee's name?",
        validate: nameInput => {
            // must enter a string
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
            // accepts only number input
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
            // must enter a string
            if (emailInput){
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }           
        }
    },
    {   // Individual questions here - default Manager office number question below, on first pass
        type: 'input',
        name: 'officeNumber',
        message: "Manager's office number?",
        validate: officeInput => {
            // accepts only number input 
            if(officeInput && !isNaN(parseInt(officeInput))){
                return true;
            } else {                
                console.log('Please enter office number (numbers only)');
                return false;
            }
        }
    }    
];

// ROLE SPECIFIC QUESTIONS FOR INQUIRER PROMPT
// gitHub user name for engineer
const engineerQuestion = {
    type: 'input',
    name: 'github',
    message: "Engineer's gitHub user name?",
    // must enter something
    validate: githubInput => {
        if (githubInput){
            return true;
        } else {
            console.log('Please enter a gitHub user name');
            return false;
        }           
    }
};
// school name for intern
const internQuestion = {
    type: 'input',
    name: 'school',
    message: "Name of Intern's school?",
    validate: schoolInput => {
        // must enter something
        if (schoolInput){
            return true;
        } else {
            console.log("Please enter the Intern's school name");
            return false;
        }           
    }
};
// user choice to add more employees or exit
const optOrExit = {
    type: 'list',
    name: 'addOption',
    message: "Please pick an option",
    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team (exit)']
};

// FUNCTION CONTAINING APPLICATION LOGIC
function Start(){
    // INITIALIZES THE PROMPTS
    Start.prototype.initialize = function(){
        console.log(`
    -----------------------
    WELCOME TO TEAM BUILDER
    -----------------------

Enter Manager information:
    `);
    // ASKS MANAGER QUESTIONS
    return inquirer.prompt(questions)
        .then(data => {
            const {name, id, email, officeNumber} = data;
            teamArray.push(new Manager(name, id, email, officeNumber)); // pushes manager object to array
            this.option(); // asks user to either enter more employees or exit
        })
    };
    // FUNCTION TO ASK USER TO ADD EMPLOYEES OR EXIT
    Start.prototype.option = function(){
        return inquirer.prompt(optOrExit)
            .then(data => {
                console.log(""); // adds empty line for easier reading
                const {addOption} = data;
                //console.log(addOption);
                questions.pop(); // removes the final question which is changeable depending on role type
                switch(addOption){
                    case "Add an Engineer":
                        console.log("Enter Engineer information:");
                        questions.push(engineerQuestion); // adds github user question to end of question array
                        this.addEngineer();
                        break;
                    case "Add an Intern":
                        console.log("Enter Intern information:")
                        questions.push(internQuestion); // adds school question to end of question array
                        this.addIntern();
                        break;
                    case "Finish building team (exit)":
                        this.exit(); // to end and create HTML
                }
            })
    };
    // FUNCTION PROMPTS FOR ENGINEER EMPLOYEE INPUT
    Start.prototype.addEngineer = function(){
        return inquirer.prompt(questions)
        .then(data => {
            const {name, id, email, github} = data;
            teamArray.push(new Engineer(name, id, email, github)); // construct new engineer object from input
            this.option(); // asks user to either enter more employees or exit
        })
    };
    // FUNCTION PROMPTS FOR INTERN EMPLOYEE INPUT
    Start.prototype.addIntern = function(){
        return inquirer.prompt(questions)
        .then(data => {
            const {name, id, email, school} = data;
            teamArray.push(new Intern(name, id, email, school)); // construct new intern object from input
            this.option(); // asks user to either enter more employees or exit
        })
    };
    // FUNCTION TO REQUEST HTML GENERATION AND REQUEST SAVE FILE & COPY CSS FILE
    Start.prototype.exit = function(){
        let html = generateHTML(teamArray); // sends team data to be generated to HTML
        this.writeToFile('./dist/index.html', html); // sends HTML to be written to file
        this.copyStylesheet(); // requests stylesheet to be copied to "dist" folder
    };
    // FUNCTION WRITES HTML TO FILE - Used format of function from "portfolio generator" lesson
    Start.prototype.writeToFile = function(fileName, html){
        fs.writeFile(fileName, html, err =>{
            if(err){
                console.log(err);
                return;
            }
            console.log('New HTML team file successfully generated');
        })
    };
    // FUNCTION COPIES CSS FILE FROM FILE IN "src" FOLDER - Used format of function from "portfolio generator" lesson
    Start.prototype.copyStylesheet = function(){
        fs.copyFile('./src/style.css', './dist/style.css', err =>{
            if(err){
                if(err){
                    console.log(err);
                    return;
                }
            }
            console.log('CSS file successfully generated');
            console.log('See "dist" folder for new HTML & CSS files!');
        });
    };

};

// call to initialize the application
new Start().initialize();