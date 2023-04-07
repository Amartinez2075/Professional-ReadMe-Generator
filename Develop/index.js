// Require the necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your repo? (Required)',
    validate: (input) => {
      return input ? true : 'You must enter a title for the repository.';
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your repo? (Required)',
    validate: (input) => {
      return input ? true : 'You must enter a description for the repository.';
    }
  },
  {
    type: 'confirm',
    name: 'hasInstallation',
    message: 'Does your repo require installation?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide instructions for installation:',
    when: ({ hasInstallation }) => hasInstallation,
  },
  {
    type: 'confirm',
    name: 'hasUsage',
    message: 'Does your repo require instructions for usage?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for usage:',
    when: ({ hasUsage }) => hasUsage,
  },
  {
    type: 'confirm',
    name: 'hasContributions',
    message: 'Is your repo open for contributions?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide instructions for contributing:',
    when: ({ hasContributions }) => hasContributions,
  },
  {
    type: 'confirm',
    name: 'hasTests',
    message: 'Does your repo have tests?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide instructions for running tests:',
    when: ({ hasTests }) => hasTests,
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license does your repo have?',
    choices: [
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'MIT License',
      'Boost Software License 1.0',
      'The Unlicense'
    ]
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (Required)',
    validate: (input) => {
      return input ? true : 'You must enter a GitHub username.';
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: (input) => {
      return input ? true : 'You must enter an email address.';
    }
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please provide instructions for contacting you:',
    validate: (input) => {
      return input ? true : 'You must provide instructions for contacting you.';
    }
  }
];

// Create a function to write the README file
const writeToFile = util.promisify(fs.writeFile);

// Create a function to initialize the app
async function init() {
  try {
    // Prompt the user for input using the inquirer package and the questions array
  } catch (error) {
    console.error(error);
    }
    }
    
    // Call the init function to start the app
    init();