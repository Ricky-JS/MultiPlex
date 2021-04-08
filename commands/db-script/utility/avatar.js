let u = "$replaceText[$replaceText[$checkCondition[$userExists[$findUser[$message[1]]]==true];true;$findUser[$message[1]]];false;$authorID]";

module.exports = ({
name: "avatar",
description: "Get the avatar of someone",
usage: "m?avatar / e?avatar <user>",
code: `
$title[Avatar for $username[${u}]#$discriminator[${u}]]
$image[$userAvatar[${u};jpg;true;1024]]
$color[$random[00000;99999]]
$footer[Avatar of $username[${u}];$userAvatar[${u};jpg;true;1024]]
`});