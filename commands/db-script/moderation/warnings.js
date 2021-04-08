let u = "$findUser[$message[1]]";

module.exports = ({
name: "warnings",
description: "Checks the provideds users warnings",
usage: "m?warnings <user>",
code: `
$channelSendMessage[$channelID[];$replaceText[$replaceText[$checkCondition[$getUserVar[warnings;${u}]>0];true;{author:$tag[${u}] (${u})}{color:GREEN}{authoricon:$userAvatar[${u}]}{title:$getUserVar[warnings;${u}] $replaceText[$replaceText[$checkCondition[$getUserVar[warnings;${u}]!=1];true;Warnings];false;Warning]}{description:$getUserVar[infractions;${u}]}];false;{title:$tag[${u}] has no warnings}{color:GREEN}]]



$onlyIf[${u}!=$client[id];{title:MultiPlex is superior, Warnings do not exist :-)}{color:RED}]
$onlyIf[$userExists[${u}]==true;{title:That user doesn't exist or isn't in the server}{color:RED}]
$onlyPerms[managemessages;{title:You do not have permission to run this command}{color:RED}]
`});