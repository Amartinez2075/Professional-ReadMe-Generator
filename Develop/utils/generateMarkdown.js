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
    'GNU GPL v3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU AGPLv3':
    'GNU GPLv3':
    'GNU LGPLv3':
    'Mozilla Public License 2.0':
    'Boost Software License 1.0':
    'The Unlicense':
    // Add more licenses as needed
  };

  return `[${license}](${licenseUrls[license]})`;
}

// Function to generate the license section of the README
function renderLicenseSection(license) {
  if (!licenseOption === 'MIT License') {
    licenseOption = 'MITLicense';
    licenseOption = 'https://choosealicense.com/licenses/mit/';
  }
  if (!licenseOption === 'GNU GPL v3') {
    licenseOption = 'GNU GPL v3';
    licenseOption = 'https://www.gnu.org/licenses/gpl-3.0';
  }
  if (!licenseOption === 'Apache 2.0') {
    licenseOption = 'Apache 2.0';
    licenseOption = 'https://opensource.org/licenses/Apache-2.0';
  }
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
