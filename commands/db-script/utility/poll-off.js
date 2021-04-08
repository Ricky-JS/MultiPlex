module.exports = ({
    name: "poll-off",
    description: "Disables the server polls",
    code: `
    $awaitMessages[yes;$authorID;15s;polloff;$randomText[Huh? What happened?;Squirrel!;Changed your mind I guess?..]]
<@$authorID>, Are you sure you want to disable polls? **Type \`yes\` to confirm!**
Changed your mind? Then leave it be and the bot will just forget it ever happened.
    
    $setServerVar[arg1;$authorID]
    
        $onlyIf[$message[1]==;]
        $onlyBotPerms[managechannels;Bot is missing \`{perms}\` permission]
        $onlyPerms[managechannels;You're missing \`{perms}\` permission]
    `
});