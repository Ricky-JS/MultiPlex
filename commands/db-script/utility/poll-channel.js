module.exports = ({
    name: "poll-channel",
    aliases: ["poll-c", "p-c"],
    description: "Sets a poll channel",
    code: `
    Poll channel is set! All polls will be sent to <#$findChannel[$message[]]>!
    
        $setServerVar[poll;$findChannel[$message[]]]
    
        $onlyIf[$findChannel[$message[]]!=undefined;**That's not a channel**]
        $onlyIf[$message[1]!=;Invalid arguments! What channel do you want to be sending the polls to? Channel can be an ID, name or can be mentioned.]
    
        $onlyBotPerms[managechannels;Bot is missing \`{perms}\` permission]
        $onlyPerms[managechannels;You're missing \`{perms}\` permission]
    `
})