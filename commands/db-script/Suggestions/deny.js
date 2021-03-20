let reason = "$replaceText[$replaceText[$checkCondition[$message[2]==];true;*No Reason Provided*];false;$messageSlice[>1]]";

module.exports = ({
name: "deny",
description: "Deny a Suggestion",
usage: "m?deny <messageID>",
code: `

$editMessage[$getServerVar[suggestchannel];$message[1];{title:Suggestion Denied | $tag[]}{description:$getFromEmbed[$getServerVar[suggestchannel];$message[1];description]}{field:Denied By:$tag[$authorID]:no}{field:Reason Of Denial:${reason}:no}
{footer:$serverName[$guildID[]] Suggestions!}{color:RED}{timestamp}]


:white_check_mark: **Successfully Denied $textAfter[$getFromEmbed[$getServerVar[suggestchannel];$message[1];title];|]'s Suggestion!**


$onlyIf[$msg[$getServerVar[suggestchannel];$message[1];isdeleted]!=true;{title:Invalid Message ID}{color:RED}]
$onlyIf[$message[1]!=;{title:Provide a Message ID}{color:RED}]
$onlyIf[$hasRole[$authorID;$getServerVar[modrole]]==true;{title:Access Denied}{description:Only users with with set modrole can use this command. If the mod role isn't set, Please use \`$getServerVar[prefix]suggestions modrole <role>\` to set one!}{color:RED}]

$suppressErrors[{title:Something went wrong}{color:RED}]
`});