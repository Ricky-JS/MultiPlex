module.exports = ({
    name: "joinchannel",
    description: "Set the Join channel for the bot to welcome new users!",
    usage: "m?joinchannel <channel>",
    code: `
    $title[Join channel has been set!]
    $color[RANDOM]
    $thumbnail[$serverIcon]

    $addField[__Leave configuration__;
Channel - $splitContent[<#$getServerVar[leaveChannel]>;1;<#undefined>;\`$getServerVar[prefix]leavechannel <#channel|ID|name>\`]
Message - $splitContent[$getServerVar[leaveMsg];1;undefined;\`$getServerVar[prefix]leavemsg <message>\`]
]

    $addField[__Join configuration__;
Mention - $replaceText[$replaceText[$checkCondition[$getServerVar[joinMention]==on];true;Enabled];false;Disabled]
Channel - $splitContent[<#$getServerVar[joinChannel]>;1;<#undefined>;\`$getServerVar[prefix]joinchannel <#channel|ID|name>\`]
Message - $splitContent[$getServerVar[joinMsg];1;undefined;\`$getServerVar[prefix]joinmsg <message>\`]
]

     $setServerVar[joinChannel;$findChannel[$message[]]]

     $onlyIf[$findChannel[$message[]]!=undefined;{title:Error: Invalid channel!} {description:Choose a channel where new members will be welcomed by the bot\`\`\`$getServerVar[prefix]joinchannel <#channel | ID | name | off>\`\`\`} {color:RED}]
     
     $onlyIf[$toLowercase[$message[1]]!=off;{execute:joinchannelOFF}]

    $onlyIf[$message[1]!=;{title:Choose a channel!} {description:Choose a channel where new members will be welcomed by the bot. Typing \`$getServerVar[prefix]joinchannel off\` disables the join channel!\`\`\`$getServerVar[prefix]joinchannel <#channel | ID | name | off>\`\`\`} {color:RED}]
       $onlyBotPerms[managechannels;**I'm missing \`{perms}\` permissions**]
       $onlyPerms[managechannels;**You're missing \`{perms}\` permissions**]
`});