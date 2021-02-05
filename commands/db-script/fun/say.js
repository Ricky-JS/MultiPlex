const {mode} = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json');

module.exports = ({
name: "say",
code: `
$filter[$message[];@]
$cooldown[30s;You must wait **{time}** to use \`$getServerVar[prefix]say\`.]
$onlyIf[$message[1]!=;Give me something to say.]

${mode}
`});