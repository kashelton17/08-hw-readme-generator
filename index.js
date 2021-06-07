// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const genMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = ['Enter title of Application:', 'Enter a description:', 'Enter installation instructions:', 'Enter usage information:', 'Enter contribution guidelines:', 'Enter test instructions:','Enter license:', 'Enter GitHub username:', 'Enter email:'];

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
                name: 'installation',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'contributing',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'test',
                message: questions[5],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[6],
                choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7],
                
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
            },
    ])
    .then((data) => {
        const fileText = genMarkdown.generateMarkdown(data)
        writeToFile(`${data.title}ReadMe.md`, fileText)
    })
}

// Function call to initialize app
init();