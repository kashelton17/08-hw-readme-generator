// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = ['Enter title of Application:', 'Enter a description:', 'Enter Table of Contents:', 'Enter installation:', 'Enter Usage:', 'Enter contributors:', 'Enter Tests', 'Enter GitHub username:', 'Enter email:'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README.md successfully written!'))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();