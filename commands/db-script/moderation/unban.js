const {mode} = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json');

module.exports = ({
name: "unban",
code: `
$sendWebhook[$getServerVar[logs];{title:User Unbanned}{descriptio:}
Username: $username[$message[1]]#$discriminator[$message[1]]
User ID: $message[1]
Action By: $username[$authorID]#$discriminator[$authorID]
Reason:** $message[2] **}{footer:Eyaqtron Logging}{color:RANDOM}]]
$onlyIf[$webhook[$getServerVar[logs];exists]==true;User has been unbanned! But I couldn't send log to Logging Channel. Make sure it's defined by using \`$getServerVar[prefix]logs\`!]
**<@$message[1]>** has been unbanned!

$unban[$message[1]]
$onlyIf[$getServerVar[logs]!=Undefined;Uh Oh. It seeems there was an error. \`\`\`ERROR CODE A01: SERVER LOGS NOT SET {$getServerVar[prefix]logs}\`\`\`]
$onlyPerms[ban;<:ND_Warning:710551408318873671> Uh Oh. You don't have the permissions to use this command. \`\`\`Ban Members\`\`\`]
$onlyIf[$userExists[$message[1]]==true;This user ID is invalid.]
$onlyIf[$message[2]!=;**Incorrect Arugments** {$getServerVar[prefix]unban <userID> <reason>}]


${mode}
`});