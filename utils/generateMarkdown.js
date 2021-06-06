// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === '') {
    return ''
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === ''){
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  const link = renderLicenseLink(license)
  const licenseSection = `## License information \n This application uses a license from ${license} \n Link: ${link}`
  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(license)
  const licensePart = renderLicenseSection(license)
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
