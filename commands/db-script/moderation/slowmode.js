let c = "$replaceText[$replaceText[$checkCondition[$channelExists[$findChannel[$message[1]]]==true];false;$channelID[]];true;$findChannel[$message[1]]]";
let m = "$replaceText[$replaceText[$checkCondition[$findChannel[$message[1]]==undefined];true;$message[1]];false;$message[2]]";
let s =  "$replaceText[$replaceText[$checkCondition[$message[2]==];true;$message[1]];false;$message[2]]";
let cn = "$getServerVar[prefix]slowmode";

module.exports = ({
name: "slowmode",
aliases: ["setslowmode", "sm", "setsm"],
description: "Sets the slowmode for a provided channel (In Seconds)",
usage: "m?slowmode <time>",
code: `
$channelSendMessage[$channelID[];{title:$channelName[${c}] | Set slowmode to ${s} seconds!}{color:GREEN}]

$setSlowMode[${c};${s}]
$onlyIf[${m}>-1;{title:Number cannot be less than 1 second (Use ${cn} 0 to remove slowmode)}{color:RED}]
$onlyIf[${m}<21601;{title:Number cannot be more than 6 hours (21600 Seconds)}{color:RED}]
$onlyIf[$isNumber[${m}]==true;{title:Invalid number provided}{color:RED}]


$onlyIf[$message[1]!=;{title:Invalid Arguments. Need Help? Use ${cn} help!}{color:RED}]
$onlyIf[$message[1]!=help;{title:Setting Slowmode}{description:
Usage: 
\`\`\`
${cn}}slowmode <channel> <time (SECONDS)>
\`\`\`

CHANNEL will be set to **CURRENT CHANNEL** if no channel is provided.}{color:GREEN}]
$onlyPerms[managechannels;{title:You do not have permission to run this command}{color:RED}]
`});