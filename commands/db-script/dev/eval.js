const token = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json')
module.exports = ({
name: "eval",
code: `
\`\`\`js
$djsEval[$message[]]
\`\`\`
$onlyIf[$message[1]!=;Arg lol]
$onlyForUsers[$getVar[dev1];$getVar[dev2];**Developer command**]
`});