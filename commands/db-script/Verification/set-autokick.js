module.exports = ({
    name: "set-autokick",
    aliases: ["set-ak"],
    code: `
    $setServerVar[totalkickstrikes;$message[1]]
$color[$getVar[color]]
    $title[Autokick has been enabled!]
    $description[$message[1] incorrect attempts = Autokick]

    $onlyIf[$message[1]<=15;15 strikes is the maximum I can set]
    $onlyIf[$splitText[3]==true;Value must be a number! 15 strikes is the max.]

    $onlyIf[$message[1]!=;**$getServerVar[prefix]set-autokick <numberStrikes>** - Set the amount of incorrect verification code answers it takes for the bot to automatically kick the user from the server!]

    $onlyIf[$splitText[1]-$splitText[2]==false-false;$replaceText[$replaceText[$replaceText[$replaceText[$splitText[1]-$splitText[2];true-true;Issue: Verification Role and Channel are both not set up!];true-false;Issue: Verification channel is not set up!];false-true;Issue: Verification Role is not set up!];false-false;]]

    $onlyIf[$message[]!=off;{execute:disableAutoKick}]

$textSplit[$checkCondition[$getServerVar[verifychannel]==None]-$checkCondition[$getServerVar[verifyrole]==None]-$isNumber[$message[1]];-]
    
    $onlyBotPerms[kick;Bot is missing the \`{perms}\` permission]
    $onlyPerms[admin;**For security reasons, you need the \`{perms}\` permission to tamper with the security commands!**]
`})