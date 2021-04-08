module.exports = ({
name: "antilink",
description: "Enable/Disable Anti-link. This stops links from being sent.",
usage: "m?antilink <on/off>",
code:`
$title[MultiPlex Anti-Link]
$description[
MultiPlexs's Anti-Link system is a cool new system that deletes messages when a link is posted!
\`USERS WITH MANAGE_MESSAGES WONT BE AFFECTED\`

**Status**: $getServerVar[antilink]

**Usage**
$getServerVar[prefix]antilink on  -  Turns on Anti-Link
$getServerVar[prefix]antilink off  -  Turns off Anti-Link]
$footer[MultiPlex | Anti-Link;$authorAvatar[webp;true;1024]]
$color[$random[00000;99999]]
$onlyIf[$message[1]!=on;{execute:antilink-on}]
$onlyIf[$message[1]!=off;{execute:antilink-off}]
$onlyPerms[managemessages;:x: You do not have permission to run this command.]
$onlyBotPerms[managemessages;:x: I not have the correct permissions. \`{perms}\`]

$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});