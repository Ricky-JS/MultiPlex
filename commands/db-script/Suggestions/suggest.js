module.exports = ({
name: "suggest",
code: `


$channelSendMessage[$getServerVar[suggestchannel];{title:New Suggestion! | $tag[]}{description:$message[]}
{footer:$serverName[$guildID[]] Suggestions!}{color:RANDOM}{timestamp}]


:white_check_mark: **Your suggestion has been sent to <#$getServerVar[suggestchannel]>!**

$onlyIf[$message[1]!=;**:x: What are you suggesting?**]
$onlyIf[$channelExists[$findChannel[$getServerVar[suggestchannel]]]==true;**:x: No suggestion channel is defined!**]
$onlyIf[$getServerVar[suggestions]==Enabled;**:x: Suggestions are disabled for this server!**]
`});












// WAIT FOR SPESHUL TO UPDATE THE FUNCTION!!
//$onlyIf[$hasRole[$authorID;$getServerVar[blistrole]]]==false;:x: You have a blacklisted role! \`$roleName[$getServerVar[suggestrole]]\`]