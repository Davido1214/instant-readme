// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questionData) {
  return `
  # ${questionData.title}


  ## Purpose
   ${questionData.Purpose}


  ## Built With-
  ${questionData.Built}


  ## Installation
   ${questionData.Installation}


  ## Usage
   ${questionData.Usage}


  ## Licenses
   ${questionData.Licenses}

  ## Contributors
   ${questionData.Contributors}

  ## Weblink
   ${questionData.Weblink}

  ## Github
   ${questionData.Github}

  ## Email
   ${questionData.Email}
`;
}

module.exports = generateMarkdown;
