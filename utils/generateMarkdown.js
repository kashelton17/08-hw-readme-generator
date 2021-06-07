// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'None') {
    return ''
  } else if (license === 'Apache 2.0'){
    return `[![License: ${license}](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GPL 3.0'){
    return `[![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if(license === 'BSD 3'){
    return `[![License: ${license}](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'None'){
    return ''
  } else if (license === 'Apache 2.0'){
    return `[View Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GPL 3.0'){
    return `[View GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)`
  } else if(license === 'BSD 3'){
    return `[View BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license)
  const licenseSection = `This application uses a license from ${license} \n Link: ${link}`
  if (license === 'None'){
    return ''
  } else {
    return licenseSection
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  const licensePart = renderLicenseSection(data.license)
  return `# ${data.title} \n ${badge}
\n \n ## Description \n ${data.description} 
\n \n ## Table of Contents \n[Installation](#installation) \n [Usage](#usage) \n [License](#license) \n [Contributing](#contributing) \n [Tests](#Tests) \n [Questions](#questions)
\n \n ## Installation \n${data.installation}
\n \n ## Usage \n ${data.usage}
\n \n ## License \n ${licensePart}
\n \n ## Contributing \n ${data.contributing}
\n \n ## Tests \n ${data.test}
\n \n ## Questions \n Please find me on GitHub, [github.com/${data.github}](https://github.com/${data.github}), or by email ${data.email} for any questions
`;
}

module.exports = {generateMarkdown};
