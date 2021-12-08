// function to generate markdown for README
function generateMarkdown(answer) {
  var markdownContent = `
  # ${answer.projectName}
  ----------------------------------
  # Table Of Contents
  -------------------
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#projectUse)
  * [Credits](#credits)
  * [License](#license)
  * [Testing](#testing)
  * [Github-Username](#github-username)
  * [Email-Address](#email-address)
  
  ## Description
  ${answer.description}
  --
  ## Installation
   ${answer.installation}
  --
  ## Usage
   ${answer.projectUse}
  --
  ## Credits
   ${answer.credits}
  --
  ## License
  ![GitHub license](https://img.shields.io/badge/license-${answer.license}-blue.svg)
  --
  ## Testing
   ${answer.testing}
  --
  ## Github-Username
  [Github Profile](https://github.com/${answer.githubUsername})
  --
  ## Email-Address
  If you have any questions you can reach me at:
   ${answer.emailAddress}
  
`
return markdownContent
;
}

module.exports = generateMarkdown;
