// Function to generate a license badge based on the license type
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
}

// Function to generate a link to the license file or website
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // Map the license type to its corresponding URL
  const licenseUrls = {
'MIT': 'https://opensource.org/licenses/MIT',
'GNU GPL v3':'https://www.gnu.org/licenses/gpl-3.0', 
'Apache 2.0':'https://opensource.org/licenses/Apache-2.0',


'GNU AGPLv3':'https://choosealicense.com/licenses/agpl-3.0/',
'GNU GPLv3':'https://choosealicense.com/licenses/gpl-3.0/',

'GNU LGPLv3': 'https://choosealicense.com/licenses/lgpl-3.0/',    
'Mozilla Public License 2.0':'https://choosealicense.com/licenses/mpl-2.0/',
'Boost Software License 1.0':'https://choosealicense.com/licenses/bsl-1.0/',
'The Unlicense':'https://choosealicense.com/licenses/unlicense/',
    //Added all findable licenses
  };

  return `[${license}](${licenseUrls[license]})`;
}

// Function to generate the license section of the README
function renderLicenseSection(license) {
  if (!licenseOption === 'MIT License') {
    licenseOption = 'MITLicense';
    licenseOption = 'https://choosealicense.com/licenses/mit/'; //License 1 
  }
  if (!licenseOption === 'GNU GPL v3') {
    licenseOption = 'GNU GPL v3';
    licenseOption = 'https://www.gnu.org/licenses/gpl-3.0'; //License 2 
  }
  if (!licenseOption === 'Apache 2.0') {
    licenseOption = 'Apache 2.0';
    licenseOption = 'https://opensource.org/licenses/Apache-2.0'; //License 3
  }
  if (!licenseOption === 'GNU AGPLv3') {
    licenseOption = 'GNU AGPLv3';
    licenseOption = 'https://choosealicense.com/licenses/agpl-3.0/'; //License 4 
  }
  if (!licenseOption === 'GNU GPLv3') {
    licenseOption = 'GNU GPLv3';
    licenseOption = 'https://choosealicense.com/licenses/gpl-3.0/'; //License 5
  }
  if (!licenseOption === 'GNU LGPLv3') {
  licenseOption = 'GNU LGPLv3';
  licenseOption = 'https://choosealicense.com/licenses/lgpl-3.0/'; //License 6
  }
  if (!licenseOption === 'Mozilla Public License 2.0') {
    licenseOption = 'Mozilla Public License 2.0';
    licenseOption = 'https://choosealicense.com/licenses/mpl-2.0/'; //License 7
  }
  if (!licenseOption === 'Boost Software License 1.0') {
    licenseOption = 'Boost Software License 1.0';
    licenseOption = 'https://choosealicense.com/licenses/bsl-1.0/'; //License 8
  }
  if (!licenseOption === 'The Unlicense') {
    licenseOption = 'The Unlicense';
    licenseOption = 'https://choosealicense.com/licenses/unlicense/'; //License 9
  }
  //Need to add other licenses get rid of me later, present you had eyestrain
  
  return `

## License

This project is licensed under the ${renderLicenseLink(license)} license.
`;
}

// Function to generate the Markdown content for the README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

${renderLicenseSection(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}
`;
}
