const {mode} = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json');

module.exports = ({
 name: "botinfo",
 aliases: ["bot", "info"],
 code: `
$title[Eyaqtron v$getVar[version] | General Information]
$description[
$addField[Developer;$tag[672215920558604332];yes]
$addField[Server Count;$serverCount;yes]
$addField[Usage;$memory mb;yes]
$addField[Version;$getVar[version];yes]
$addField[Ping;$ping ms;yes]
$addField[Prefix;$getServerVar[prefix];yes]
]
$footer[General Info;$authorAvatar[webp;true;1024]]


${mode}
`});