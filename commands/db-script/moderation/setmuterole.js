const {mode} = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json');

module.exports = ({
name: "setmuterole",
aliases: ["smr", "setmute", "muterole"],
code: `
$setServerVar[Muted;$findRole[$message[1]]]
$title[Muted Role Set]
$description[You have set <@&$findRole[$message[1]]> as your servers mute role. When using Nodrani's mute command. That role will be given!]
$footer[Set Muted Role!;$authorAvatar[webp;true;1024]]
$color[$random[00000;99999]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;Please provide a role name, id, or mention it.]
$onlyPerms[manageroles;Uh Oh. You don't have permission to use this command. \`\`\`Manage Roles\`\`\`]


${mode}
`});