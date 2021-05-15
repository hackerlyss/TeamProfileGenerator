// Dependencies up here
const fs = require("fs");
const inquirer = require("inquirer");
// Subclasses here
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const officeStaff = [];

// The function to home all functions
function generateProfile() {
    startHtml();
    addStaff();
}

function addStaff() {
    inquirer.prompt([
        {
            type:"input",
            message:"Enter team member's name.",
            name:"name"
        },
        {
            type:"list",
            message:"Select team member's role:",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "role"
        },
        {
            type:"input",
            message:"Enter team member's ID",
            name:"id"
        },
        {
            type:"input",
            message:"Enter team member's email",
            name:"email"
        }  
    ]).then(function({name,role,id,email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        }else if (role === "Intern") {
            roleInfo = "school name";
        }else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([
            {
                type:"input",
                message:`Enter team member's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type:"list",
                message:"Would you like to add more team profiles?",
                choices: [
                    "yes",
                    "no"
                ],
                name:"moreStaff"
            }
        ]).then(function({roleInfo, moreStaff}) {
            let newStaff;
            if (role === "Engineer") {
                newStaff = new Engineer(name,id,email,roleInfo);

            }else if (role === "Intern") {
                newStaff = new Intern(name,id,email,roleInfo);
            }else {
                newStaff = new Manager(name,id,email,roleInfo);
            }
            officeStaff.push(newStaff);
            addHtml(newStaff)
            .then(function() {
                if (moreStaff === "yes") {
                    addStaff();
                }else {
                    finishHtml();
                }
            })
        })
    })
}

function startHtml() {
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
</head>
<body>
<div class="container">
        <h1 class="display-1 ">Team Profile</h1>
        <div class="row">
        
`;
fs.writeFile("./output/team.html",html, function(err) {
    if(err) {
        console.log(err);
    
    }
})
}

function addHtml(staff) {
    return new Promise(function(resolve,reject) {
        const name = staff.getName();
        const role = staff.getRole();
        const id = staff.getId();
        const email = staff.getEmail();
        let data = "";
        if (role === "Engineer") {
            const github = staff.getGithub();
            data = `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <ul class = "list-group list -group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: ${email}</li>
              <li class="list-group-item">GitHub: ${github}</li>
              </ul>
            </div>
          </div>
            `
        }else if (role === "Intern") {
            const school = staff.getSchool();
            data = `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <ul class = "list-group list -group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: ${email}</li>
              <li class="list-group-item">School: ${school}</li>
              </ul>
            </div>
          </div>`
        }else {
            const phoneNumber = staff.getPhone();
            data = `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <ul class = "list-group list -group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: ${email}</li>
              <li class="list-group-item">Office Phone: ${phoneNumber}</li>
              </ul>
            </div>
          </div>`
        }
        fs.appendFile("./output/team.html",data,function(err) {
            if(err) {
                return reject(err);
            };
            return resolve();
        })
    })
}

function finishHtml() {
    const html = ` </div>
    </div>
    </body>
    </html>`
    fs.appendFile("./output/team.html",html,function(err) {
        if(err) {
            console.log(err);
        }
    });
     console.log("Team profile complete")
}
generateProfile();