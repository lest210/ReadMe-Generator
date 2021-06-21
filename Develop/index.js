// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
    validate: (value)=>{ if(value){return true} else {return 'I need a value'}},
},{
    type: "input",
    message: "What is the project about?",
    name: "Description",
    validate: (value)=>{ if(value){return true} else {return 'I need a value'}}
},{
    type: "input",
    message: "Instructions",
    name: "Instructions",
    validate: (value)=>{ if(value){return true} else {return 'I need a value'}}
},{
    type: "input",
    message: "Colaborators",
    name: "colaborators",
    validate: (value)=>{ if(value){return true} else {return 'I need a value'}}
},{
    type: "input",
    message: "What license?",
    name: "License",
    choices: ["The MIT License", "The GPL License", "Apache", "GNU", "N/A"],
    validate: (value)=>{ if(value){return true} else {return 'I need a value'}}
},{
    type: "input",
    message: "GitHub Username:",
    name: "GitHub",
    validate: (value)=>{ if(value){return true} else {return 'I need a value'}}
},{
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: (value)=>{ if(value){return true} else {return 'I need a value'}}
}
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('README created!')
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(userResponse => { 
        // calls function to add screenshots based on user selection
        if (userResponse.contents.indexOf('Screenshots') > -1) {
            return addScreenshots(userResponse);
        } else {
            return userResponse;
        }
    })
    .then(response => {
        // calls function to add credits based on user selection
        if (response.contents.indexOf('Credits') > -1) {
            return addCredits(response);
        } else {
            return response;
        }
    })
    .then(answers => generateMarkdown(answers))
    .then(generatedReadme => writeToFile('README.md', generatedReadme))
    .catch(err => {
        console.log(err);
    });
