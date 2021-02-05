const {mode} = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json');
let p = "$getServerVar[prefix]"

module.exports = ({
name: "help",
code: `

$author[Commands: $getVar[commands];$client[avatarURL]]
$title[Hello, I'm Eyaqtron!]
$description[
Welcome to Eyaqtron v$getVar[version], **$username[$authorID]**!

$addField[**>** ${p}help logging;Soon:tm:]

$addField[**>** ${p}help moderation;Moderation Module which allows users to use moderative actions on different users!]

$addField[**>** ${p}help tickets;Need a simple but advanced Ticket System? This module allows users to connect with the staff easily!]

$addField[**>** ${p}help selfroles;Soon:tm:]

$addField[**>** ${p}help fun;Just want some fun? This module is **EPIC** for all discord bots. We have so much!]

$addField[**>** ${p}help utility;Just want some simple utilitizing tools? This modules allows users to learn more and do more!]

$addField[**>** ${p}help about;Get information on the bot and how it works! You can also use ${p}bot for more info on the bot!]
]
$footer[Eyaqtron | Help Page;$authorAvatar[webp;true;1024]]
$addTimestamp
$color[$random[00000;99999]]

$onlyIf[$message[]==;:x: Module \`$message[]\` doesn't appear to exist. Make sure you spelled it correctly!]
$onlyIf[$message[1]!=about;{execute:about}]
$onlyIf[$checkContains[$toLowercase[$message[1]];fun;utility;moderation;logging;tickets;selfroles]==false;:x: Module \`$message[1]\` is unavailable right now, check back later!]
`});