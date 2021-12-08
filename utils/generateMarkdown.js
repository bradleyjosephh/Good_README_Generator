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
  * [Github Username](#githubUsername)
  * [Email Address](#emailAddress)
  
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
   ${answer.license}
  --
  ## Testing
   ${answer.testing}
  --
  ## Github Username
   ${answer.githubUsername}
  --
  ## Email Address
   ${answer.emailAddress}
`
return markdownContent
;
}

module.exports = generateMarkdown;
