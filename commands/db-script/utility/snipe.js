module.exports = ({
name: "snipe",
description: "Gets the most recent deleted message of the channel",
usage: "m?snipe",
code: `
$editIn[500ms;Getting Author Information...;{title:$tag[$getChannelVar[user]]}
{description:$getChannelVar[snipes]}
{footer:Sniped by: $tag[$authorID]}
{footericon:$userAvatar[$authorID]}
{thumbnail:$userAvatar[$getChannelVar[user]]}
{color:RANDOM}
{timestamp}]

Gathering Messsages...
`});
