const {mode} = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json');

module.exports = ({
name: "ban",
code: `
$sendWebhook[$getServerVar[logs];{title:User Banned}{description:
Username: $username[$mentioned[1]]#$discriminator[$mentioned[1]]
User ID: $mentioned[1]
Action By: $username[$authorID]#$discriminator[$authorID]
Reason:** $noMentionMessage[] **}{footer:Eyaqtron Logging}{color:RANDOM}]
$onlyIf[$webhook[$getServerVar[logs];exists]==true;User has been banned! But I couldn't send log to Logging Channel. Make sure it's defined by using \`$getServerVar[prefix]logs\`!]
**$username[$mentioned[1]]** has been banned!

$ban[$mentioned[1];$noMentionMessage[] - Action by $username[$authorID]#$discriminator[$authorID]]
$onlyIf[$getServerVar[logs]!=Undefined;Uh Oh. It seeems there was an error. \`\`\`ERROR CODE A01: SERVER LOGS NOT SET {$getServerVar[prefix]logs}\`\`\`]
$onlyIf[$message[2]!=;**Incorrect Arguments** {$getServerVar[prefix]ban <@user> <reason>}]
$suppressErrors[<:xmark:761828801474723870> I could not ban that user.]
$onlyIf[$mentioned[1]!=;Try mentioning someone.]
$onlyPerms[ban;:x: You don't have the permissions to use this command. \`{perms}\`]
$onlyBotPerms[ban;:x: I don't have the correct permissions. \`{perms}\`]


${mode}
`});