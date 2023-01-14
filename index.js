const fs = require('fs');
//You'll need to install inquirer for this to properly run
const inquirer = require("inquirer");
const path = require("path");
const generateEmployees = require("./src/template.js")
//Here we require all of our class files
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
//This is our directory name for the output of our HTML
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
//Our empty team array
teamList = [];
//Here we start with inquirer and are prompted to add employees
function startApp () {
    function addEmployee() {
        inquirer.prompt([{
            type: 'list',
            name: 'employee',
            message: "Which employee would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern', 'That\'s all for now']            
        }]).then(function(userInput) {
            //We use a switch to get different prompts based on our role choice
            switch(userInput.employee){
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    renderHtml();
            }
        })
    }
//This function will prompt questions to add a manager
    function addManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the managers preferred name?'
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'What is the managers ID number?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the managers email address?'
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is the managers office number?'
            }
            //Then push the new Manager information into our array 
        ]).then(responses => {
            const manager = new Manager(responses.managerName, responses.managerID, responses.managerEmail, responses.office);
            teamList.push(manager);
            addEmployee();
        });
    }
//Here we prompt for the engineer questions
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineers preferred name?'
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'What is the engineers ID number?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineers email address?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineers github?'
            }
             //Then push the new Engineer information into our array 
        ]).then(responses => {
            const engineer = new Engineer(responses.engineerName, responses.engineerID, responses.engineerEmail, responses.github);
            teamList.push(engineer);
            addEmployee();
        });
    }
//Here we prompt for intern questions
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the interns preferred name?'
            },
            {
                type: 'input',
                name: 'internID',
                message: 'What is the interns ID number?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the interns email address?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where does the intern go to school?'
            }
             //Then push the new intern information into our array 
        ]).then(responses => {
            const intern = new Intern(responses.internName, responses.internID, responses.internEmail, responses.school);
            teamList.push(intern);
            addEmployee();
        });
    }
//if we're all done entering team information then we write to file 
    function renderHtml () {
        console.log("Employee roster created! :)")

        fs.writeFileSync(outputPath, generateEmployees(teamList), "UTF-8")

    }

    addEmployee();
}

startApp();