//Here we are creating the HTML for each role type
const generateEmployees = employees => {
    //This will generate a manager html snippet
    const generateManager = manager => {
        return `
        <section class="card">
            <div class="card-header has-background-link">
            <p class="card-header-title has-text-white is-size-3">${manager.getName()}<br>${manager.getRole()}</p>
        </div>
            <ul class="list-group list-group-flush">
              <li>ID: ${manager.getId()} </li>
              <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li>Office Number: ${manager.getOfficeNumber()} </li>
            </ul>
        </section>
        `;
    };
//This will generate an engineer html snippet
    const generateEngineer = engineer => {
        return `
        <section class="card">
            <div class="card-header has-background-link">
                <p class="card-header-title has-text-white is-size-3">${engineer.getName()}<br>${engineer.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li>ID: ${engineer.getId()} </li>
              <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li>GitHub: <a href=https://github.com/${engineer.getGithub()}>${engineer.getGithub()}</a></li>
            </ul>
        </section>
        `;
    };
//This will generate an intern html snippet
    const generateIntern = intern => {
        return `
        <section class="card">
            <div class="card-header has-background-link">
                <p class="card-header-title has-text-white is-size-3">${intern.getName()}<br>${intern.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li>ID: ${intern.getId()} </li>
              <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li>School: ${intern.getSchool()} </li>
            </ul>
        </section>
        `;
    };
//Empty html array
    const html = [];
//Push all information
    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    );

    return html.join("");
}
//We need to export employees and return the base html and the employee roster generated inside the base html
module.exports = employees => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
    <!-- This adds our favicon to the webpage tab -->
    <link rel="icon" href="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f5d3.png"/>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
</head>

<body>
    <header class="navbar is-fixed-top is-warning">
        <h1 class="is-size-1 has-text-centered">My Team</h1>
    </header>

    <container id="employees" class="container">
        ${generateEmployees(employees)}
    </container>
</body>
</html>
    `;
};