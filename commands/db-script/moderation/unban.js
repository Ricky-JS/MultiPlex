let u = "$findUser[$message[1]]";

module.exports = ({
name: "unban",
description: "Unbans the provided user from the Server",
usage: "m?unban <user>",
code: `
$sendWebhook[$getServerVar[logs];{title:The Ban Hammer has been lifted}{description:** **}{field:User Unbanned:$tag[${u}]:yes}{field:Moderator:$tag[$authorID]:yes}{footer:MultiPlex Logging}{timestamp}{color:RANDOM}]
$onlyIf[$webhook[$getServerVar[logs];exists]==true;**$tag[${u}]** has been unbanned. But I couldn't send log to Logging Channel. Make sure it's defined by using \`$getServerVar[prefix]logs\`!] 

**$tag[${u}]** has been unbanned by **$tag[$authorID]**
$unban[${u};(Unbanned By: $tag[$authorID])]

$suppressErrors[:x: I failed to ban that user.]
$onlyIf[$isBanned[${u}]==true;:x: That user isn't banned]
$onlyIf[$userExists[${u}]==true;:x: That user doesn't appear to exist]


$onlyBotPerms[ban;:x: I don't have permission to use this]
$onlyPerms[ban;:x: You don't have permission to use this]
`});