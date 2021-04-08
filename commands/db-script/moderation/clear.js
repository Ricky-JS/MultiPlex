module.exports = ({
name: "clear",
aliases: ["purge", "prune"],
description: "Purges the current channel of x amount of messages (Max 100).",
usage: "m?clear <amount>",
code: `
$sendWebhook[$getServerVar[logs];{title:Channel Purged}{description:$message[] messages were purged in <#$channelID[]>. Action by <@$authorID>!}{footer:MultiPlex Logging}{color:RANDOM}]
$onlyIf[$webhook[$getServerVar[logs];exists]==true;**$message[]** messages have been cleared! But I couldn't send log to Logging Channel. Make sure it's defined by using \`$getServerVar[prefix]logs\`!] 
$deletecommand[100ms]
**$message[]** messages have been cleared!
$clear[$message[]]
$onlyIf[$message[]<101;You cannot delete over **100** messages]
$onlyIf[$message[]>1;You cannot clear less than 1 message]
$onlyIf[$isNumber[$message[]]==true;:x: Argument must be a number!]
$onlyIf[$message[]!=;You must add a number to delete!]

$onlyPerms[managemessages;You need the \`Manage Messages\` permission to run this command!!]
$onlyBotPerms[managemessages;I don't have the correct permissions. \`{perms}\`]


$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});