// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ----------------------------------
  ## ${answer.description}
  --
  ## ${answer.installation}
  --
  ## ${answer.projectUse}
  --
  ## ${answer.credits}
  --
  ## ${answer.license}
  --
  ## ${answer.githubUsername}
  --
  ## ${answer.emailAdress}
`;
}

module.exports = generateMarkdown;
