module.exports = ({
name: "eval",
aliases: ["ev"],
code: `
\`\`\`js
$djsEval[$message[]]
\`\`\`
$suppressErrors[]
$onlyIf[$message[1]!=;]
$onlyForUsers[$getVar[dev1];$getVar[dev2];**Developer command**]
`});