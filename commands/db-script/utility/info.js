module.exports = ({
name: "info",
usage: "m?info <command>",
aliases: ["i"],
description: "Get help for a command!",
code: `
$author[Info for: $getServerVar[prefix]$commandName[$message[1]];$client[avatarurl]]
$description[
Commands use the default prefix in the \`Usage\` section. Please note the server's set prefix before using

$addField[Usage:;$replaceText[$commandUsage[$message[1]];None;:x: *No Usage Available*]]
$addField[Description:;$replaceText[$commandDescription[$message[1]];None;:x: *No Description Available*]]
$addField[Aliases:;$replaceText[$replaceText[$commandAliases[$message[1]];None;:x: *No Aliases Available*];undefined;:x: *An Error Occurred*]]
]
$color[RANDOM]
$onlyIf[$findCommand[$message[1]]!=undefined;:x: That command doesn't exist. Make sure you're excluding the prefix!]
$onlyIf[$message[1]!=;:x: Enter a command name or alias to get info on it.]


$onlyIf[$checkContains[$message[1];mode;bblacklist;restart;shutdown;t;update;eval;getblacklist;gbl;reboot;bbl]==false;:x: That command is Owner Only. Info isn't available.]

$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});