let u = "$findUser[$message[1]]";

module.exports = ({
name: "pardon",
description: "Pardon a user's warning (**:warning: COMMAND DISABLED :warning**)",
usage: "m?pardon <user> <warning>",
code: `
$channelSendMessage[$channelID[];{title:Successfully removed warning from $tag[${u}]}{color:GREEN}]
$setUserVar[warnings;$sub[$getUserVar[warnings;${u}];1];${u}]
$setUserVar[infractions;$replaceText[$getUserVar[infractions;${u}];\n$messageSlice[>1];];${u}]

$onlyIf[$checkContains[$messageSlice[>1]$splitTextJoin[;]]==true;{title:Couldn't find warning with reason "$messageSlice[>1]"}{color:RED}]

$textSplit[$getUserVar[infractions;${u}];\n]
$onlyIf[$message[2]!=;{title:Provide the warn reason to pardon it}{color:RED}]
$onlyIf[$checkCondition[$getUserVar[warnings;${u}]>0]==true;{title:$tag[${u}] has no warnings to be pardoned}{color:RED}]
$onlyIf[$userExists[${u}]==true;{title:That user doesn't exist or isn't in the server.}{color:RED}]

$onlyPerms[managemessages;{title:You do not have permission to run this command}{color:RED}]

$onlyForUsers[$getVar[dev1];:x: This command is under maintenance and cannot be used.]

$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});