let u = `$findUser[$message[1]]`;
let t = `$textBefore[$getUserVar[infractions;${u}];\`$sum[$message[2];1]-\`]`;

module.exports = ({
name: "t",
code: `

Test 1 - $textAfter[$getUserVar[infractions;${u}];\`$message[2]-\` ]

Test 2 - ${t}

$onlyIf[$getVar[bypassdevs;$authorID]==true;**:x: Not Authorized!**]
`});

//$channelSendMessage[$channelID[];{title:Successfully removed warning from $tag[${u}]}{color:GREEN}]
//$setUserVar[warnings;$sub[$getUserVar[warnings;${u}];1];${u}]
//$setUserVar[infractions;$replaceText[$getUserVar[infractions;${u}];\n$messageSlice[>1];];${u}]

//$onlyIf[$checkContains[$messageSlice[>1];$splitTextFrom[$message[2];\n;]]==true;{title:Couldn't find that warning}{color:RED}]
//$textSplit[$getUserVar[infractions;${u}];\n]
//$textSplit[$getUserVar[infractions;${u}];\n]
//$onlyIf[$isNumber[$message[2]]!=false;{title:Provide the warn number to pardon it}{color:RED}]
//$onlyIf[$checkCondition[$getUserVar[warnings;${u}]>0]==true;{title:$tag[${u}] has no warnings to be pardoned}{color:RED}]
//$onlyIf[$userExists[${u}]==true;{title:That user doesn't exist or isn't in the server.}{color:RED}]

//$onlyPerms[managemessages;{title:You do not have permission to run this command}{color:RED}]
//$onlyIf[1==2;]