const 
const profilePage ({name,email,username,project,description,test,github,command,license,usage,contribute}) => {
    var profileString = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        </head>
        <body>
        <h1 class="display-2" id="big-header">Welcome to your Weather Channel</h1>
    
       <div class="card>
            <div class="card-body">
            <div id="manager-card">
            <h1>${employee.name}</h1>
            <h2><a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></h2>
            <h2>Employee ID: </h2>
            <h2>Office number: ${employee.phone}</h2>
            </div>
            </div>
            `
        
    
    `
    return profileString
}

module.exports = profilePage