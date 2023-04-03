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
      console.log('You must enter a title of the repository.');
      return false;
    }
  }
},
{
type: 'input',
  name: 'description',
  message: 'What is the description of your repo? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('You must enter a description of the repository.');
      return false;
    }
  }
  },
//confirms if there is an installation process. Similar Format to Array
{
  type: 'confirm',
  name: 'confirmInstallation',
  message:'Is there an installation process'
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
