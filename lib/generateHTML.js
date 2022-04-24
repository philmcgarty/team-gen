
function roleProperty(employee){
    let text = ""
    switch(employee.role){
        case "Manager":
            text = `Office number: ${employee.officeNumber}`;
            break;
        case "Engineer":
            text = `Github: <a href="https://github.com/${employee.github}">${employee.github}</a>`;
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
        <div>
            <h2>${employee.name}</h2>
            <h3>${employee.role}</h3>
            <p>ID: ${employee.id}</p>
            <p>Email: <a href="mailto:${employee.email}">${employee.email}</a><p>
            <p>${roleProperty(employee)}</p>
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
        ${createEmployeeCards(teamArray)}
    </main>    
</body>
</html>
`);
}

module.exports = generateHTML;