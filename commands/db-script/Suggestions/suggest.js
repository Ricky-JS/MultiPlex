module.exports = ({
name: "suggest",
description: "Submit a Suggestion",
usage: "m?sugest <suggestion>",
code: `
$channelSendMessage[$getServerVar[suggestchannel];{title:New Suggestion! | $tag[]}{description:$message[]}
{footer:$serverName[$guildID[]] Suggestions!}{color:RANDOM}{timestamp}]


:white_check_mark: **Your suggestion has been sent to <#$getServerVar[suggestchannel]>!**

$onlyIf[$message[1]!=;{title:What are you suggesting?}{color:RED}]


$onlyIf[$hasRole[$authorID;$getServerVar[blistrole]]!=true;{title:You're blacklisted}{description:You're wearing the role \`$roleName[$getServerVar[blistrole]]\`. That role has been blacklisted from making suggestions by a server moderator}{footer:MultiPlex | Suggestions | Blacklisted}{color:RED}]


$onlyIf[$channelExists[$findChannel[$getServerVar[suggestchannel]]]==true;**:x: No suggestion channel is defined!**]
$onlyIf[$getServerVar[suggestions]==Enabled;**:x: Suggestions are disabled for this server!**]

$cooldown[5m;{title:You're under cooldown!}{description:This command has a **5 Minute** cooldown to reduce API lag. You must wait **{time}** before suggesting again}{color:RED}]

$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});