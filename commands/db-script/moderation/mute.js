const {mode} = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json');

module.exports = ({
name: "mute",
code: `
$sendWebhook[$getServerVar[logs];{title:User Muted}{description:
Username: $username[$mentioned[1]]#$discriminator[$mentioned[1]]
User ID: $mentioned[1]
Action By: $username[$authorID]#$discriminator[$authorID]
Reason:** $noMentionMessage[] **}{color:RANDOM}{footer:Eyaqtron Logging}]
$onlyIf[$webhook[$getServerVar[logs];exists]==true;User has been muted! But I couldn't send log to Logging Channel. Make sure it's defined by using \`$getServerVar[prefix]logs\`!]
$giveRole[$mentioned[1];$getServerVar[Muted]]
$color[$random[00000;99999]]
$description[
<@$mentioned[1]> is successfully muted!
\`\`\`Please remember: User may not be muted if there is a member role\`\`\`
]

$onlyIf[$getServerVar[Muted]!=Undefined;In order to mute, You must set a muted role. Use command \`$getServerVar[prefix]mset @role\`.]

$onlyIf[$getServerVar[logs]!=Undefined;Uh Oh. It seeems there was an error. \`\`\`ERROR CODE A01: SERVER LOGS NOT SET {$getServerVar[prefix]logs}\`\`\`]
$onlyIf[$message[2]!=;Use: $getServerVar[prefix]mute <@user> <reason>]
$onlyIf[$mentioned[1]!=;Mention a user to be muted]
$onlyPerms[managemessages;<:ND_Warning:710551408318873671> Uh Oh. You don't have the permissions to use this command. \`\`\`Manage Messages\`\`\`]


${mode}
`});