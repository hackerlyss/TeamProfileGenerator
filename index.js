const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const profilePage = require("./src/profilePage.js");
const officeStaff = [];

function writeProfile() {
    const filename = `${response.team.split(' ').join('')}Readme.md`;
    fs.writeFile(filename, readMe(profilePage), (err) =>
    err ? error.log(err) : console.log("success"));
}

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your name.',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter your employee ID.',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Please enter your email.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'github'
        },
        {
            type: 'checkbox',
            message: 'Please add another team member:',
            name: 'team',
            choices: [
                {
                    name: "Engineer"
                },
                {
                    name: "Intern"
                },
                {
                    name: "I am finished with adding team members"
                }
            ],
        },
    ]).then(response => {
    const engineer = {"name": response.name, "ID": response.id, "email": response.email, "phone": response.phone, "github": response.github, "role": "engineer" };
    officeStaff.push(engineer);
    if(response.team === "Engineer") {
        addEngineer();
    }
    if(response.team === "Intern") {
        addIntern();
    }else {
        writeProfile()
    }})
}
module.export = addEngineer()

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your name.',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter your employee ID.',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Please enter your email.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter the name of the school currently attending.',
            name: 'school'
        },
        {
            type: 'checkbox',
            message: 'Please add another team member:',
            name: 'team',
            choices: [
                {
                    name: "Engineer"
                },
                {
                    name: "Intern"
                },
                {
                    name: "I am finished with adding team members"
                }
            ],
        },
    ]).then(response => {
    const intern = {"name": response.name, "ID": response.id, "email": response.email, "phone": response.phone, "school": response.school, "role": "intern" };
    officeStaff.push(intern);
    if(response.team === "Engineer") {
        addEngineer();
    }
    if(response.team === "Intern") {
        addIntern();
    }else {
        writeProfile()
    }})
}

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the name of your team?',
        name: 'team'
    },
    {
        type: 'input',
        message: 'What is the name of your manager?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the your employee ID #?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your office phone number?',
        name: 'phone'
    },
    {
        type: 'checkbox',
        message: 'Please add another team member:',
        name: 'team',
        choices: [
            {
                name: "Engineer"
            },
            {
                name: "Intern"
            },
            {
                name: "I am finished with adding team members"
            }
        ],
    }
]).then(response => {
    const manager = {"name": response.name, "ID": response.id, "email": response.email, "phone": response.phone, "role": "manager" };
    officeStaff.push(manager);
    if(response.team === "Engineer") {
        addEngineer();
    }
    if(response.team === "Intern") {
        addIntern();
    }else {
        writeProfile();
            
    }
    }
       )
