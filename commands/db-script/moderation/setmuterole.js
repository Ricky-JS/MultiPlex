module.exports = ({
name: "setmuterole",
aliases: ["smr", "setmute", "muterole"],
description: "Sets the Mute Role. This role will be given when a user is muted",
usage: "m?setmuterole <role>",
code: `
$setServerVar[Muted;$findRole[$message[1]]]
$title[Muted Role Set]
$description[You have set <@&$findRole[$message[1]]> as your servers mute role. When using Nodrani's mute command. That role will be given!]
$footer[Set Muted Role!;$authorAvatar[webp;true;1024]]
$color[$random[00000;99999]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;Please provide a role name, id, or mention it.]
$onlyPerms[manageroles;Uh Oh. You don't have permission to use this command. \`\`\`Manage Roles\`\`\`]


$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});