module.exports = ({
    name: "selfrole-channel",
    aliases: ["sr-c", "sr-channel"],
    description: "Sets a selfrole channel for commands to only be executed in the channel that is set",
    usage: "m?selfrole-channel <channel>",
    code: `
Selfrole channel is set! Selfrole give/take commands can only be executed in <#$findChannel[$message[]]>!
    
        $setServerVar[selfroleChannel;$findChannel[$message[]]]

        $onlyIf[$channelExists[$findChannel[$message[]]]==true;**That's not a channel**]
        $onlyIf[$message[1]!=off;{execute:selfrolechanneloff}]
        $onlyIf[$message[1]!=;Invalid arguments! State a channel you want to set for the selfroles to be executed in. Channel can be an ID, name or can be mentioned channel.]
    
        $onlyBotPerms[managechannels;Bot is missing \`{perms}\` permission]
        $onlyPerms[managechannels;You're missing \`{perms}\` permission]
    `
})