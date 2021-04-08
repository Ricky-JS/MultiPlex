module.exports = ({
    name: "disable",
    aliases: ["disable"],
    code: `
    $awaitMessages[yes;$authorID;15s;disableAll;**There was no confirmation in the given time, so nothing has been changed**]

<@$authorID> Are you sure you want to disable the entire verification system?
Type \`yes\` to confirm. You have 15 seconds to decide!.

    $onlyIfMessageContains[verification;verify;\`$message[]\` is Invalid! Type \`$getServerVar[prefix]disable verification\` to completely disable the verification system]
    $onlyIf[$message[1]!=;{title:This command disables the entire verification system! Be sure this is what you want!}
    {description:Type \`$getServerVar[prefix]disable verification\`}]

    $onlyBotPerms[kick;:x: Bot is missing the \`{perms}\` permission]
    $onlyPerms[admin;**For security reasons, you need the \`{perms}\` permission to tamper with the verification system!**]
`})