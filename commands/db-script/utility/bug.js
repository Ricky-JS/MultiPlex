module.exports = ({
name: "bug",
description: "Send a bug report",
usage: "m?bug <bug>",
code: ` 
$sendWebhook[https://discord.com/api/webhooks/792908730374160406/zGC0-AqcTjtHYOEoddCRQzLsVOJ9uSbE2vNn880xphINaRiLfxaipyvU3M_EZyqVhpuW;{title:Bug Reported by $tag[$authorID]}{description:$message[]}{footer:Report came from Server: $serverName[$guildID]}{color:RANDOM}]
:white_check_mark: Bug Report Sent!
$onlyIf[$message[1]!=;Provide a bug]
`});