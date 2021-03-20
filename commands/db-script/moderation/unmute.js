module.exports = ({
name: "unmute",
description: "Unmutes the provided user.",
usage: "m?unmute <user> <optional-reason>",
code: `
$SendWebhook[$getServerVar[logs];{title:User Unmuted}{description:
Username: $username[$mentioned[1]]#$discriminator[$mentioned[1]]
User ID: $mentioned[1]
Action By: $username[$authorID]#$discriminator[$authorID]
Reason:** $noMentionMessage[] **}{footer:MultiPlex Logging}{color:RANDOM}]]
$onlyIf[$webhook[$getServerVar[logs];exists]==true;User has been cleared! But I couldn't send log to Logging Channel. Make sure it's defined by using \`$getServerVar[prefix]logs\`!]
$takeRole[$findUser[$message[1]];$getServerVar[Muted]]
$color[$random[00000;99999]]
$description[
<@$mentioned[1]> is successfully unmuted!
]
$onlyIf[$getServerVar[Muted]!=Undefined;In order to mute, You must set a muted role. Use command \`$getServerVar[prefix]smr @role\`.]
$onlyIf[$message[2]!=;Use: $getServerVar[prefix]unmute <@user> <reason>]
$onlyIf[$mentioned[1]!=;Mention a user to be unmuted]
$onlyPerms[managemessages;:x: You don't have the permissions to use this. \`{perms}\`]
$onlyBotPerms[manageroles;:x: You don't have the permissions to use this. \`{perms}\`]
`});