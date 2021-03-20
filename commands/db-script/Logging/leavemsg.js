module.exports = ({
    name: "leavemsg",
    description: "Set the message for users to recieve upon leaving!",
    usage: "m?leavemsg <message>",
    code: `
    $title[Leave message is set!]
    $color[RANDOM]
    
    $addField[__Leave configuration__;
Channel - $splitContent[<#$getServerVar[leaveChannel]>;1;<#undefined>;\`$getServerVar[prefix]leavechannel <#channel|ID|name>\`]
Message - $splitContent[$getServerVar[leaveMsg];1;undefined;\`$getServerVar[prefix]leavemsg <message>\`]
]

    $addField[__Join configuration__;
Mention - $replaceText[$replaceText[$checkCondition[$getServerVar[joinMention]==on];true;Enabled];false;Disabled]
Channel - $splitContent[<#$getServerVar[joinChannel]>;1;<#undefined>;\`$getServerVar[prefix]joinchannel <#channel|ID|name>\`]
Message - $splitContent[$getServerVar[joinMsg];1;undefined;\`$getServerVar[prefix]joinmsg <message>\`]
]

     $setServerVar[leaveMsg;$replaceText[$replaceText[$checkCondition[$message[]==off];true;undefined];false;$replaceText[$replaceText[$checkCondition[$message[]==default];true;**{user}#{discrim}** left **{server}**! We have **{members}** members now.];false;$message[]]]]

    $onlyIf[$message[1]!=;
{title:Want to set a custom message for when members leave the server?}
{description:\`\`\`$getServerVar[prefix]leavemsg <type your message here>\`\`\`}
{color:RED}]

$onlyBotPerms[managechannels;**I'm missing \`{perms}\` permissions**]
$onlyPerms[managechannels;**You're missing \`{perms}\` permissions**]
`});
