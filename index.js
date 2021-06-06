// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = ['Enter title of Application:', 'Enter a description:', 'Enter Table of Contents:', 'Enter installation:', 'Enter Usage:', 'Enter contributors:', 'Enter Tests','Enter license:', 'Enter GitHub username:', 'Enter email:'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README.md successfully written!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'table',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'contributers',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'test',
                message: questions[6],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[7],
                choices:['MIT', 'NPM', 'other'],
            },
            {
                type: 'input',
                name: 'github',
                message: questions[8],
                
            },
            {
                type: 'input',
                name: 'email',
                message: questions[9],
            },
    ])
    .then((data) => {
        const userInput = data
        console.log(userInput)
    })
}

// Function call to initialize app
init();