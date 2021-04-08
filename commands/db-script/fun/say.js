module.exports = ({
name: "say",
description: "Make me say anything!",
usage: "m?say <something>",
code: `
$filter[$message[];@]
$cooldown[30s;You must wait **{time}** to use \`$getServerVar[prefix]say\`.]
$onlyIf[$message[1]!=;Give me something to say.]
`});