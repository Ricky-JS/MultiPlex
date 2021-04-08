let u = "$findUser[$message[1]]";

module.exports = ({
name: "ban",
description: "Bans the provided user from the Server",
usage: "m?ban <user> <optional-reason>",
code: `
$sendWebhook[$getServerVar[logs];{title:The Ban Hammer has been layed}{description:** **}{field:User Banned:$tag[${u}]:yes}{field:Moderator:$tag[$authorID]:yes}{field:Reason:$replaceText[$replaceText[$checkCondition[$message[2]==];true;**No Reason Provided**];false;$messageSlice[>1]]:yes}{footer:MultiPlex Logging}{timestamp}{color:RANDOM}]
$onlyIf[$webhook[$getServerVar[logs];exists]==true;**$tag[${u}]** has been banned. But I couldn't send log to Logging Channel. Make sure it's defined by using \`$getServerVar[prefix]logs\`!] 

**$tag[${u}]** has been banned by **$tag[$authorID]**
$ban[${u};(By: $tag[$authorID]) - $replaceText[$replaceText[$checkCondition[$message[2]==];true;No Reason Provided];false;$messageSlice[>1]]]

$onlyIf[$highestRole[$authorID]<$highestRole[${u}];{title:You cannot ban a higher ranked user}{color:RED}]
$onlyIf[$highestRole[$client[id]]<$highestRole[${u}];{title:My rank isn't high enough to ban that user}{color:RED}]
$onlyIf[$ownerID!=${u};{title:You can't ban the owner}{color:RED}]
$onlyIf[$authorID!=${u};{title:You can't ban yourself}{color:RED}]
$onlyIf[$userExists[${u}]==true;{title:That user doesn't appear to exist}{color:RED}]

$onlyBotPerms[ban;{title:I don't have the required permissiond}{color:RED}]
$onlyPerms[ban;{title:You don't have permission to use this}{color:RED}]

$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});