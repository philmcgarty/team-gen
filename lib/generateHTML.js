// FUNCTION RETURNS CONDITIONAL FIELD BASED ON ROLE - Manager/office number, Engineer/github name, Intern/school
function roleProperty(employee){
    let text = ""
    switch(employee.role){
        case "Manager":
            text = `Office number: ${employee.officeNumber}`;
            break;
        case "Engineer":
            text = `Github: <a href="https://github.com/${employee.github}" target="_blank" class="card-link">${employee.github}</a>`;
            break;
        case "Intern":
            text = `School: ${employee.school}`;
            break;
    }
    return text;
};

// FUNCTION TO RETURN CORRECT ICON BASED ON EMPLOYEE ROLE
function getIcon(employee){
    let icon = "";
    switch(employee.role){
        case "Manager":
            icon = '<i class="fa-solid fa-mug-hot"></i>';
            break;
        case "Engineer":
            icon = '<i class="fa-solid fa-glasses"></i>'
            break;
        case "Intern":
            icon = '<i class="fa-solid fa-user-graduate"></i>';
            break;
    }
    return icon;
};

// FUNCTION TO GENERATE HTML FOR EACH EMPLOYEE
function createEmployeeCards(teamArray){
    let textBlocks = []; // array to store all html for generated employee cards
    // Loops through each employee, creates a card for each one
    for (let i=0; i<teamArray.length; i++){
        let employee = teamArray[i]
        // creates block of HTML for an employee and then pushes to array
        textBlocks.push(`
        <div class="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
            <div class="card">
                <div class="card-header text-white bg-primary">
                    <h2>${employee.name}</h2>
                    <h3>${getIcon(employee)} ${employee.role}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush border border-secondary">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.email}" class="card-link">${employee.email}</a></li>
                        <li class="list-group-item">${roleProperty(employee)}</li>
                    </ul>
                </div>
            </div>
        </div>
        `);
    }
    return textBlocks.join(" "); // returns one block of HTML based on all employee cards created    
};

// FUNCTION RETURNS HTML TEMPLATE AND REQUESTS CARD FOR EACH EMPLOYEE
function generateHTML(teamArray){
    return(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
    integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Builder</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <div class="row justify-content-center">
            ${createEmployeeCards(teamArray)}
        </div>
    </main>    
</body>
</html>
`);
};

module.exports = generateHTML;