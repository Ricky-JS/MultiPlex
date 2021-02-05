module.exports = ({
    name: "joinmsg",
    code: `
    $title[Join message is set!]
    $color[$replaceText[$getServerVar[joinColor];undefined;RANDOM]]
    
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

     $setServerVar[joinMsg;$replaceText[$replaceText[$checkCondition[$message[]==off];true;undefined];false;$replaceText[$replaceText[$checkCondition[$message[]==default];true;Hello **{user}#{discrim}** and welcome to **{server}**! There's **{members}** members here now!];false;$message[]]]]

    $onlyIf[$message[1]!=;
{title:Want to set a custom greeting message for newly joined members?}
{description:You can include the rules channel or other important channels in your server, or just tell them hi lol.}
{field:Get more info on this command:\`\`\`$getServerVar[prefix]joinmsg help\`\`\`}
{color:RED}]

    $onlyBotPerms[managechannels;**I'm missing \`{perms}\` permissions**]
    $onlyPerms[managechannels;**You're missing \`{perms}\` permissions**]
`});