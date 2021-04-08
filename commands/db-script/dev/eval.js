module.exports = ({
name: "eval",
aliases: ["ev"],
code: `
\`\`\`js
$djsEval[$message[]]
\`\`\`
$suppressErrors[]
$onlyIf[$message[1]!=;]


$onlyIf[$getVar[bypassdevs;$authorID]==true;**:x: Not Authorized!**]
`});