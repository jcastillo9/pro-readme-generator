// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](<https://img.shields.io/badge/License-MIT-yellow.svg>)'
  } else if (license === 'Academic Free License v3.0') {
    return '[![License: AFL-3.0](<https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg>)'
  } else if (license === 'Apache 2.0') {
    return '![License: Apache 2.0.](<https://img.shields.io/badge/License-Apache_2.0-blu.svg>)'
  } else if (license === 'Artistic license 2.0') {
    return '![License: Artistic-2.0](<https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg>)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)'
  } else if (license === 'Academic Free License v3.0') {
    return '[AFL-3.0]((https://opensource.org/licenses/AFL-3.0))'
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0.](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'Artistic license 2.0') {
    return '[Artistic-2.0](https://opensource.org/licenses/Artistic-2.0)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions?](#questions)
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## How to Contribue
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions?
  ### Reach me here:
  [${data.username}](https://github.com/${data.username})
  ${data.email}`;
}

module.exports = generateMarkdown;
