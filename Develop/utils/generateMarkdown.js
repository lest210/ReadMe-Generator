// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const addLicenseBadge = license => {
  if (license) {
      return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
`;
  } else {
      return '';
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const createLicense = license => {
  if (license) {
      return `This application is licensed under the ${license} license.`;
  } else {
      return '';
  }
};
const createTest = test => {
  if (test) {
      return `To run tests on the application, install
\`\`\`
${test}
\`\`\`
and run \`npm run test\` from the command line.`
  } else {
      return '';
  };
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
