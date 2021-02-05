let u = "$findUser[$message[1]]";

module.exports = ({
name: "clearwarns",
code: `

$setUserVar[infractions;Undefined;${u}]
$setUserVar[warnings;0;${u}]

$channelSendMessage[$channelID[];$replaceText[$replaceText[$checkCondition[$getUserVar[warnings;${u}]>0];true;{title:Successfully Cleared $getUserVar[warnings;${u}] $replaceText[$replaceText[$checkCondition[$getUserVar[warnings;${u}]!=1];true;Warnings];false;Warning]}{color:GREEN}];false;{title:$tag[${u}] has no warnings to be cleared}{color:RED}]]


$onlyIf[$userExists[${u}]==true;{title:That user doesn't exist or isn't in the server}{color:RED}]
$onlyPerms[managemessages;{title:You do not have permission to run this command}{color:RED}]
`});