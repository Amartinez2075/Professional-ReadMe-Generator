// Includescd packages needed for this application
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
  message:'Is there an installation process',
},
{
  type: 'input',
  name: 'installation',
  message: 'Please list installation instructions.',
  //If the user selects an installation process, allows the user to input steps
  when: ({ confirmInstallation }) => {
    if (confirmInstallation) {
      return true;
    } else {
      return false;
    }
  }
},

{ // confirms if user wants instructions for their application
  type: 'confirm',
  name: 'confirmUsage',
  message: 'Would you need to give instructions for using your app?'
},
{
  type: 'input',
  name:' instructions',
  message:'Please enter instructions for using your application. It would be smart to maybe add a video or photo showing steps of hour to use your app',
when: ({ confirmUsage }) => {
  if (confirmUsage) {
    return true;
  } else {
    return false;
  }
}
},
//Confirms if the user wants to add contributors 
{
  type: 'confirm',
  name: 'confirmContribution',
  message: 'May other devs contribute to your repository?'
},
{
  type: 'input',
  name: 'contribution',
  message: 'Explain how other devs may contribute to your project.',
  when: ({ confirmContribution }) => {
    if (confirmContribution) {
      return true;
    } else {
      return false;
    }
  }
},
{
  type: 'confirm',
  name: 'testConfirm',
  message: 'Is testing available?'
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
