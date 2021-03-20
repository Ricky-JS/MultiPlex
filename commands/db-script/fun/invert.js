let e = "$replaceText[$replaceText[$checkCondition[$findUser[$message[1]]==undefined];true;$authorID];false;$findUser[$message[1]]]";

module.exports = ({
name: "invert",
description: "Invert a Users Avatar",
usage: "m?invert <user>",
code: `
$title[$tag[${e}]]
$image[https://some-random-api.ml/canvas/invert?avatar=$userAvatar[${e};jpg;false;1024]]
$footer[Powered By: some-random-api.ml]
$color[RANDOM]


$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});