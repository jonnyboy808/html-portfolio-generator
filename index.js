const inquirer = require("inquirer");
const fs = require("fs");

// Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },

    {
      type: "input",
      message: "What is your location?",
      name: "location",
    },

    {
      type: "input",
      message: "Add your bio:",
      name: "bio",
    },
    {
      type: "input",
      name: "linkedIn",
      message: "What is your linkedIn username?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
  ])
  .then((answers) => {
    console.log(answers);

    fs.writeFile(
      `index.html`,
      `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel ="stylesheet" type =text/css href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hello! My name is ${answers.name} </h1>
      <p class="lead"> I am from ${answers.location}</p>
      <p class="lead"> This is a little about me:
       ${answers.bio}</p>
      <h2><span class="badge badge-secondary"> Here's how to contact me: </span></h2>
      <ul class="list-group">
      <li class="list-group-item">My LinkedIn: ${answers.linkedIn}</li>
        <li class="list-group-item"> My Github username is ${answers.github}</li>
        
      </ul>
    </div>
  
  </div>
      <script src="script.js"></script>
</body>
</html>`,
      (err) => (err ? console.log("error") : console.log("Yayy!"))
    );
  });
