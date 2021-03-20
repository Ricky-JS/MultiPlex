let u = "$findUser[$message[1]]";
let reason = "$replaceText[$replaceText[$checkCondition[$messageSlice[>1]!=];true;$messageSlice[>1]];false;No Reason Provided]";

module.exports = ({
name: "warn",
description: "Warns a user for a reason",
usage: "m?warn <user> <optional-reason>",
code: `
$sendWebhook[$getServerVar[logs];{title:User Warned}{description:
    Username: $tag[${u}]
    User ID: ${u}
    Action By: $tag[$authorID]
    Reason: ${reason}}{footer:MultiPlex Logging}{color:RANDOM}]
$onlyIf[$webhook[$getServerVar[logs];exists]==true;]

$channelSendMessage[$channelID[];$replaceText[$replaceText[$checkCondition[$webhook[$getServerVar[logs];exists]==true];true;{title:$tag[${u}] has been warned for "${reason}"}{color:GREEN}];false;{title:$tag[${u}] has been warned for "${reason}"}{author:⚠️ Your logging channel isn't set. Use "$getServerVar[prefix]logs" for future logging!}{color:GREEN}]]

$setUserVar[infractions;$replaceText[$getUserVar[infractions;${u}];Undefined;]\n\`$getUserVar[warnings;${u}]-\` ${reason};${u}]
$setUserVar[warnings;$sum[$getUserVar[warnings;${u}];1];${u}]

$onlyIf[${u}!=$client[id];{title:...}{color:RED}]
$onlyIf[${u}!=$authorID;{title:I'm not sure you want to do that}{color:RED}]
$onlyIf[$userExists[${u}]==true;{title:That user doesn't exist or isn't in the server}{color:RED}]
$onlyPerms[managemessages;{title:You do not have permission to run this command}{color:RED}]
`});