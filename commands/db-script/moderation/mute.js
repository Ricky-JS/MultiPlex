module.exports = ({
name: "mute",
description: "Mutes the provided user.",
usage: "m?mute <user> <optional-reason>",
code: `
$sendWebhook[$getServerVar[logs];{title:User Muted}{description:
Username: $username[$mentioned[1]]#$discriminator[$mentioned[1]]
User ID: $mentioned[1]
Action By: $username[$authorID]#$discriminator[$authorID]
Reason: $replaceText[$replaceText[$checkCondition[$message[2]==];true;No Reason Provided];false;$messageSlice[>1]]}{color:RANDOM}{footer:MultiPlex Logging}]
$onlyIf[$webhook[$getServerVar[logs];exists]==true;User has been muted! But I couldn't send log to Logging Channel. Make sure it's defined by using \`$getServerVar[prefix]logs\`!]
$giveRole[$findUser[$message[1]];$getServerVar[muted]]
$color[$random[00000;99999]]
$description[
$tag[$findUser[$message[1]]] is now muted!
\`\`\`Please remember: User may not be muted if there is a member role\`\`\`
]

$onlyIf[$getServerVar[muted]!=Undefined;In order to mute, You must set a muted role. Use command \`$getServerVar[prefix]mset @role\`.]

$onlyIf[$userExists[$findUser[$message[1]]]==true;Mention a user to be muted]
$onlyPerms[managemessages;:x: You don't have the permissions to use this command.]

$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});