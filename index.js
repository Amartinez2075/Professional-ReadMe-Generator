// Following packages needed for this Generator
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('Develop\utils\generateMarkdown.js');
const util = require('util');

// Start of Question Arrays
// Gives options when generating the ReadME
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your repository? (Required)',
    //validate to make sure there is a value there
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your repository title.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your repository? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a description of the repository.');
        return false;
      }
    }
  },
  //Confirms or not if there is an installation process
  {
    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Is there an installation process?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please list installation instructions.',
    // the "when" is if the user wants to put in installation instructions they can pick yes or no
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    //Confirms if they want to give instructions for using the generator
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to give instructions for using your application?'
  },
  {
    //if confirmed then asks you to list instructions for the application
    type: 'input',
    name: 'instructions',
    message: 'Please list instructions for using your application.',
    when: ({ confirmUsage }) => {
      if (confirmUsage) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmContribution',
    message: 'May other developers contribute to your repository?'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please explain how other developers may contribute to your project.',
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
  {
    type: 'input',
    name: 'testing',
    message: 'Please explain how users may test your application.',
    when: ({ testConfirm }) => {
      if (testConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    //checkbox that allows license choice from the following licenses
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: [
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'MIT License',
      'Boost Software License 1.0',
    ]
  },
  {
  type: 'input',
  name: 'github',
  message: 'What is your GitHub username? (Required)',
  //validate to make sure there is a value there
  validate: nameInput => {
  if (nameInput) {
  return true;
  } else {
  console.log('Please enter your GitHub username.');
  return false;
  }
  }
  },
  {
  type: 'input',
  name: 'email',
  message: 'What is your email address? (Required)',
  //validate to make sure there is a value there
  validate: nameInput => {
  if (nameInput) {
  return true;
  } else {
  console.log('Please enter your email address.');
  return false;
  }
  }
  }
  ];
  
  // Async function to write the README file
  async function writeToFile(fileName, data) {
  try {
  const writeFileAsync = util.promisify(fs.writeFile);
  await writeFileAsync(fileName, data);
  console.log(`Successfully wrote to ${fileName}`);
  } catch (error) {
  console.log(error);
  }
  }
  
  // Function to initialize app
  async function init() {
  try {
  const userInput = await inquirer.prompt(questions);
  const markdown = generateMarkdown(userInput);
  await writeToFile('README.md', markdown);
  } catch (error) {
  console.log(error);
  }
  }
  
  // Call to initialize app
  init();
  
  // Exporting generateMarkdown function to be used in other modules
  module.exports = generateMarkdown;