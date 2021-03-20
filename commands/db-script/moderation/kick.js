let u = "$findUser[$message[1]]";

module.exports = ({
name: "kick",
description: "kicks the provided user from the Server",
usage: "m?kick <user> <optional-reason>",
code: `
$sendWebhook[$getServerVar[logs];{title:The kick Hammer has been layed}{description:** **}{field:User kicked:$tag[${u}]:yes}{field:Moderator:$tag[$authorID]:yes}{field:Reason:$replaceText[$replaceText[$checkCondition[$message[2]==];true;**No Reason Provided**];false;$messageSlice[>1]]:yes}{footer:MultiPlex Logging}{timestamp}{color:RANDOM}]
$onlyIf[$webhook[$getServerVar[logs];exists]==true;**$tag[${u}]** has been kicked. But I couldn't send log to Logging Channel. Make sure it's defined by using \`$getServerVar[prefix]logs\`!] 

**$tag[${u}]** has been kicked by **$tag[$authorID]**
$kick[${u};(By: $tag[$authorID]) - $replaceText[$replaceText[$checkCondition[$message[2]==];true;No Reason Provided];false;$messageSlice[>1]]]

$onlyIf[$highestRole[$authorID]<$highestRole[${u}];{title:You cannot kick a higher ranked user}{color:RED}]
$onlyIf[$highestRole[$client[id]]<$highestRole[${u}];{title:My rank isn't high enough to kick that user}{color:RED}]
$onlyIf[$ownerID!=${u};{title:You can't kick the owner}{color:RED}]
$onlyIf[$authorID!=${u};{title:You can't kick yourself}{color:RED}]
$onlyIf[$userExists[${u}]==true;{title:That user doesn't appear to exist}{color:RED}]

$onlyBotPerms[kick;{title:I don't have the required permissiond}{color:RED}]
$onlyPerms[kick;{title:You don't have permission to use this}{color:RED}]

$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});