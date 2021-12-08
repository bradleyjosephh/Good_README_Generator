const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: "The title of your project: ",
  },
  {
    type: 'input',
    name: 'description',
    message: "Provide a description of your project:",
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide the installation instructions:',
  },
  {
    type: 'input',
    name: 'projectUse',
    message: 'Provide instructions and examples so users/contributors can use the project:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'If you worked on the project as a team or an organization, list your collaborators/team members:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'List the license information:',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Provide your Github Username:',
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'Provide your email address:',
  }
];

// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
