module.exports = ({
    name: "config",
    aliases: ["cf", "configuration"],
    description: "Config some of MultiPlex Server Settings",
    usage: "m?configuration <option>",
    code: `
    $title[Server configuration]
    $thumbnail[$serverIcon]
    $color[RANDOM]
    $description[
        $addField[Verification System;
            Autokick status: $replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];true;❌ \`$getServerVar[prefix]set-autokick <numberStrikes>\`];false;Enabled with **$getServerVar[totalkickstrikes]** strikes]
            Logging channel: $replaceText[$replaceText[$checkCondition[$getServerVar[verifylogchannel]==undefined];true;❌ \`$getServerVar[prefix]verification-logs <channel>\`];false;<#$getServerVar[verifylogchannel]>]
            Channel status: $replaceText[$replaceText[$checkCondition[$getServerVar[verifychannel]==undefined];true;❌ \`$getServerVar[prefix]set-channel <channel>\`];false;<#$getServerVar[verifychannel]>]
            Role status: $replaceText[$replaceText[$checkCondition[$getServerVar[verifyrole]==undefined];true;❌ \`$getServerVar[prefix]set-role <role>\`];false;<@&$getServerVar[verifyrole]>]
        ]
    $addField[__Leave configuration__;
Channel - $splitContent[<#$getServerVar[leaveChannel]>;1;<#undefined>;\`$getServerVar[prefix]leavechannel help\`]
Message - $splitContent[$getServerVar[leaveMsg];1;undefined;\`$getServerVar[prefix]leavemsg help\`]]

    $addField[__Join configuration__;
Mention - $replaceText[$replaceText[$checkCondition[$getServerVar[joinMention]==on];true;Enabled];false;Disabled]
Channel - $splitContent[<#$getServerVar[joinChannel]>;1;<#undefined>;\`$getServerVar[prefix]joinchannel help\`]
Message - $splitContent[$getServerVar[joinMsg];1;undefined;\`$getServerVar[prefix]joinmsg help\`]]

    $addField[__Selfroles Channel__;
$replaceText[$replaceText[$checkCondition[$getServerVar[selfroleChannel]==None];true;\`$getServerVar[prefix]sr-c help\`];false;<#$getServerVar[selfroleChannel]>]]

    $addField[__Selfrole Status__:;
$replaceText[$replaceText[$getServerVar[selfroles];on;Enabled];off;\`$getServerVar[prefix]switch selfroles on\`]]

    $addField[__NSFW__;
$replaceText[$replaceText[$getServerVar[nsfw];on;Enabled];off;\`$getServerVar[prefix]switch nsfw on\`]]
    
    $addField[__Poll Channel__;
$replaceText[$replaceText[$checkCondition[$getServerVar[poll]==None];true;\`$getServerVar[prefix]p-c help\`];false;<#$getServerVar[poll]>]]

    $footer[$replaceText[$replaceText[$isNumber[$getServerVar[verifyrole]$getServerVar[verifychannel]];false;Need to fix some things];true;Looking good!]]
    
]
`});