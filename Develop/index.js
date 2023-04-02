// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
// Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message:'What is the title of your repo? (Required)',
// Validated to make sure that a value is present 
  validate: nameinput => {
    if (nameinput) {
      return true;
    } else {
      console.log('Please enter a description of the repository.');
      return false;
    }
  }
},
}];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README generated successfully!')
  );
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
