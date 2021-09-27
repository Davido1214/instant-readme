// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

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

  # Table of contents
  1. [Purpose](#purpose)
  2. [Built With](#built)
  3. [Installation](#install)
  4. [Usage](#usage)
  5. [Licenses](#license)
  6. [Contribution](#contribution)
  7. [Weblink](#weblink)
  8. [Github](#github)
  9. [Contact](#contact)



  ## Purpose <a name="purpose"></a>
   ${questionData.Purpose}


  ## Built With- <a name="built"></a>
  ${questionData.Built}


  ## Installation <a name="install"></a>
   ${questionData.Installation}


  ## Usage <a name="usage"></a>
   ${questionData.Usage}


  ## Licenses <a name="license"></a>
  ${questionData.Licenses}


  ## Contributors <a name="contribution"></a>
   ${questionData.Contributors}


  ## Weblink <a name="weblink"></a>
   ${questionData.Weblink}


  ## Github <a name="github"></a>
   www.github.com/${questionData.Github}


  ## Contact <a name="contact"></a>
   ${questionData.Email}

   
`;
}


module.exports = generateMarkdown;
