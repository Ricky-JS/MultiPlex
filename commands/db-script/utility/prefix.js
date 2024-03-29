module.exports = ({
name: "prefix",
description: "Set a new Server Prefix for MultiPlex",
usage: "m?prefix <new prefix>",
code: `
$setServerVar[prefix;$message[1]]
I have set the prefix to **$message[1]**
$onlyIf[$message[]!=;My prefix is \`$getServerVar[prefix]\`. You can change it by using **$getServerVar[prefix]prefix <new prefix>**]
$onlyPerms[managemessages;You need \`Manage Messages\` to use that]
`});