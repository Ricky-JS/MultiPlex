module.exports = ({
    name: "leavechannel",
    description: "Set the Leave channel for the bot to wave leaving users!",
    usage: "m?leavechannel <channel>",
    code: `
    $title[Leave channel has been set!]
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

     $setServerVar[leaveChannel;$findChannel[$message[]]]

     $onlyIf[$findChannel[$message[]]!=undefined;{title:Error: Invalid channel!} {description:Choose a channel where the bot will tell you when members leave the server.\`\`\`$getServerVar[prefix]leavechannel <#channel | ID | name | off>\`\`\`} {color:RED}]
     
     $onlyIf[$toLowercase[$message[1]]!=off;{execute:leavechannelOFF}]

    $onlyIf[$message[1]!=;{title:Choose a channel!} {description:Choose a channel where the bot will tell you when members leave the server. Typing \`$getServerVar[prefix]leavechannel off\` disables the leave channel!\`\`\`$getServerVar[prefix]leavechannel <#channel | ID | name | off>\`\`\`} {color:RED}]
    
       $onlyBotPerms[managechannels;**I'm missing \`{perms}\` permissions**]
       $onlyPerms[managechannels;**You're missing \`{perms}\` permissions**]
`});