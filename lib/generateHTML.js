
function roleProperty(employee){
    let text = ""
    switch(employee.role){
        case "Manager":
            text = `Office number: ${employee.officeNumber}`;
            break;
        case "Engineer":
            text = `Github: <a href="https://github.com/${employee.github}" class="card-link">${employee.github}</a>`;
            break;
        case "Intern":
            text = `School: ${employee.school}`;
            break;
    }
    return text;
};

function createEmployeeCards(teamArray){
    let textBlocks = []
    for (let i=0; i<teamArray.length; i++){
        let employee = teamArray[i]
        
        textBlocks.push(`
        <div class="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
            <div class="card">
                <div class="card-header text-white bg-primary">
                    <h2>${employee.name}</h2>
                    <h3>${employee.role}</h3>
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
    return textBlocks.join(" ");
    
};


function generateHTML(teamArray){
    console.log(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
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
}

module.exports = generateHTML;