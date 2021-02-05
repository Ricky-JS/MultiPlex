module.exports = ({
name: "blacklist",
aliases: ["blist", "bl"],
code: `
$onlyIf[1==2;{execute:blacklist}]

$channelSendMessage[$channelID[];**$username[$findUser[$message[2]]]#$discriminator[$findUser[$message[2]]]** was **$replaceText[$replaceText[$message[1];add;added];remove;removed]** $replaceText[$replaceText[$message[1];add;to];remove;from] the blacklist!]

$setVar[blacklist;$replaceText[$replaceText[$message[1];add;true];remove;false];$findUser[$message[2]]]


$onlyIf[$getVar[blacklist;$findUser[$message[2]]]!=$replaceText[$replaceText[$message[1];add;true];remove;false];:x: **$username[$findUser[$message[2]]]#$discriminator[$findUser[$message[2]]]** $replaceText[$replaceText[$message[1];add;is already];remove;isn't] blacklisted]

$onlyIf[$userExists[$findUser[$message[2]]]==true;:x: Not a valid User!]
$onlyIfMessageContains[add;remove;:x: First argument must be \`add\` or \`remove\`! $getServerVar[prefix]blacklist <add/remove> (user)!]

$suppressErrors[:x: An error occurred.]
`});