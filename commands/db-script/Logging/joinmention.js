module.exports = ({
    name: "joinmention",
    code: `
    $title[New members will now be mentioned upon joining!]
    $color[$replaceText[$getServerVar[joinColor];undefined;RANDOM]]
    $thumbnail[$serverIcon]

    $addField[__Leave configuration__;
Color - $splitContent[$getServerVar[leaveColor];1;undefined;\`$getServerVar[prefix]leavecolor <color>\`]
Channel - $splitContent[<#$getServerVar[leaveChannel]>;1;<#undefined>;\`$getServerVar[prefix]leavechannel <#channel|ID|name>\`]
Message - $splitContent[$getServerVar[leaveMsg];1;undefined;\`$getServerVar[prefix]leavemsg <message>\`]
]

    $addField[__Join configuration__;
Mention - $replaceText[$replaceText[$checkCondition[$getServerVar[joinMention]==on];true;Enabled];false;Disabled]
Color - $splitContent[$getServerVar[joinColor];1;undefined;\`$getServerVar[prefix]joincolor <color>\`]
Channel - $splitContent[<#$getServerVar[joinChannel]>;1;<#undefined>;\`$getServerVar[prefix]joinchannel <#channel|ID|name>\`]
Message - $splitContent[$getServerVar[joinMsg];1;undefined;\`$getServerVar[prefix]joinmsg <message>\`]
]

     $setServerVar[joinMention;$message[]]
     
     $onlyIf[$checkContains[$toLowercase[$message[1]];off;on]==true;Type \`$getServerVar[prefix]joinmention on\` to make the join logs mention new members. Type \`$getServerVar[prefix]joinmention off\` to disable the join log mentions]

    $onlyIf[$message[1]!=;{title:Choose whether you want the bot to ping members when they join!} {description:\`\`\`$getServerVar[prefix]joinmention <on | off>\`\`\`}
{field:Usages:\`on\` - Mentions new members
\`off\` - Does not mention new members}
{color:RED}]
    
       $onlyBotPerms[managechannels;**I'm missing \`{perms}\` permissions**]
       $onlyPerms[managechannels;**You're missing \`{perms}\` permissions**]
`});