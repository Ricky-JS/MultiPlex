const {mode} = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json');

module.exports = ({
name: "snipe",
code: `
$editIn[500ms;Getting Author Information...;{title:$tag[$getChannelVar[user]]}
{description:$getChannelVar[snipes]}
{footer:Sniped by: $tag[$authorID]}
{footericon:$userAvatar[$authorID]}
{thumbnail:$userAvatar[$getChannelVar[user]]}
{color:RANDOM}
{timestamp}]

Gathering Messsages...

${mode}
`});
