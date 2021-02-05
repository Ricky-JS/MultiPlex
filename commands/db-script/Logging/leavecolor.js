module.exports = ({
    name: "leavecolor",
    code: `
    $title[Embed color for leave logs have been set!]
    $color[$toUppercase[$message[]]]

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

     $setServerVar[leaveColor;$toUppercase[$message[]]]

    $onlyIf[$toLowercase[$message[1]]!=;{title:Want to set the embed color for the leave logs?} {description:On default, the embed colors are set to random but you can customize this with:\`\`\`$getServerVar[prefix]leavecolor <color>\`\`\`You can use HEX color format or just type the color for most common colors.
You can also type **random** for random colors} {footer:TIP: Embed color after execution is your leave color!} {color:RED}]

     $onlyIf[$getServerVar[leaveChannel]!=undefined;{title:No leave channel found!} {description:To set the embed color for the leave logs, you need to have a channel set for it} {footer:$getServerVar[prefix]leavechannel <#channel | ID | name>} {color:RED}]

$onlyBotPerms[managechannels;**I'm missing \`{perms}\` permissions**]
$onlyPerms[managechannels;**You're missing \`{perms}\` permissions**]
`});