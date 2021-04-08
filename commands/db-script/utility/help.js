const fs = require('fs');
fun = 0;
logging = 0;
mod = 0;
roles = 0;
suggest = 0;
tickets = 0;
utility = 0;
verify = 0;
fs.readdirSync('./commands/db-script/fun').forEach(() => fun++);
fs.readdirSync('./commands/db-script/Logging').forEach(() => logging++);
fs.readdirSync('./commands/db-script/moderation').forEach(() => mod++);
fs.readdirSync('./commands/db-script/SelfRoles').forEach(() => roles++);
fs.readdirSync('./commands/db-script/Suggestions').forEach(() => suggest++);
fs.readdirSync('./commands/db-script/Tickets').forEach(() => tickets++);
fs.readdirSync('./commands/db-script/utility').forEach(() => utility++);
fs.readdirSync('./commands/db-script/Verification').forEach(() => verify++);
let p = "$getServerVar[prefix]"

module.exports = ({
name: "help",
aliases: ["h"],
description: "Provides help for using MultiPlex",
usage: "m?help",
code: `
$channelSendMessage[$channelID[];{title:⚠️ Failed to find module "$toLowercase[$message[1]]"}{color:RED}]

$onlyIf[$toLowercase[$message[1]]!=utility;{author:Commands: ${utility}}{authoricon:$client[avatarurl]}{title:MultiPlex Utility}{field:TIP:Use ${p}info to get usage and descriptions of commands:no}{description:${p}afk\n${p}avatar\n${p}bot\n${p}bug\n${p}configuration\n${p}help\n${p}info\n${p}invite\n${p}nick\n${p}ping\n${p}policy\n${p}poll-channel\n${p}poll-off\n${p}poll\n${p}prefix\n${p}renick\n${p}rolecolor\n${p}serverinfo\n${p}snipe\n${p}switch\n${p}userinfo}{color:RANDOM}{timestamp}{footer:MultiPlex | Utility}]

$onlyIf[$toLowercase[$message[1]]!=fun;{author:Commands: ${fun}}{authoricon:$client[avatarurl]}{title:MultiPlex Fun}{field:TIP:Use ${p}info to get usage and descriptions of commands:no}{description:${p}8ball\n${p}anifact\n${p}animequote\n${p}coinflip\n${p}decode\n${p}encode\n${p}emote\n${p}google\n${p}invert\n${p}joke\n${p}meme\n${p}pokedex\n${p}rps\n${p}say\n${p}twitter\n${p}youtube}{color:RANDOM}{timestamp}{footer:MultiPlex | Fun}]

$onlyIf[$toLowercase[$message[1]]!=logging;{author:Commands: ${logging}}{authoricon:$client[avatarurl]}{title:MultiPlex Logging}{field:TIP:Use ${p}info to get usage and descriptions of commands:no}{description:${p}joinchannel\n${p}joinmention\n${p}joinmsg\n${p}leavechannel\n${p}leavemsg}
{color:RANDOM}{timestamp}{footer:MultiPlex | Logging}]

$onlyIf[$toLowercase[$message[1]]!=selfroles;{author:Commands: ${roles}}{authoricon:$client[avatarurl]}{title:MultiPlex Self Roles}{field:TIP:Use ${p}info to get usage and descriptions of commands:no}{description:${p}selfrole-add\n${p}selfrole-channel\n${p}selfrole-get\n${p}selfrole-remove\n${p}selfrole-take\n${p}selfroles}
{color:RANDOM}{timestamp}{footer:MultiPlex | Self Roles}]

$onlyIf[$toLowercase[$message[1]]!=security;{author:Commands: ${verify}}{authoricon:$client[avatarurl]}{title:MultiPlex Security}{field:TIP:Use ${p}info to get usage and descriptions of commands:no}{description:${p}code\n${p}disable\n${p}set-autokick\n${p}set-channel\n${p}set-role\n${p}verification-logs}{color:RANDOM}{timestamp}{footer:MultiPlex | Security}]

$onlyIf[$toLowercase[$message[1]]!=tickets;{author:Commands: ${tickets}}{authoricon:$client[avatarurl]}{title:MultiPlex Tickets}{field:TIP:Use ${p}info to get usage and descriptions of commands:no}{description:${p}archive\n${p}blacklist\n${p}close\n${p}find\n${p}forceowner\n${p}new\n${p}notaticket\n${p}owner\n${p}ticket\n${p}ticketlogs}
{color:RANDOM}{timestamp}{footer:MultiPlex | Tickets}]

$onlyIf[$toLowercase[$message[1]]!=suggestions;{author:Commands: ${suggest}}{authoricon:$client[avatarurl]}{title:MultiPlex Suggestions}{field:TIP:Use ${p}info to get usage and descriptions of commands:no}{description:${p}suggestions\n${p}suggest\n${p}accept\n${p}deny}{color:RANDOM}{timestamp}{footer:MultiPlex | Suggestions}]

$onlyIf[$toLowercase[$message[1]]!=moderation;{title:MultiPlex Moderation}{author:Commands: ${mod}}{authoricon:$client[avatarurl]}{field:TIP:Use ${p}info to get usage and descriptions of commands:no}{description:${p}antilink\n${p}ban\n${p}clear\n${p}clearwarns\n${p}logs\n${p}mute\n${p}pardon\n${p}setmuterole\n${p}slowmode\n${p}unban\n${p}unmute\n${p}warn\n${p}warnings}{color:RANDOM}{timestamp}{footer:MultiPlex | Moderation}]

$onlyIf[$message[1]!=;
{author:Commands: $commandCount}
{authoricon:$client[avatarurl]}
{title:Hello, I'm MultiPlex!}
{description:
Welcome to MultiPlex v$getVar[version], **$username[$authorID]**!}
{field:**>** ${p}help utility:Just want some simple utilitizing tools? This modules allows users to learn more and do more!:no}
{field:**>** ${p}help moderation:Moderation Module which allows users to use moderative actions on different users!}
{field:**>** ${p}help fun:Just want some fun? This module is **EPIC** for all discord bots. We have so much!:no}
{field:**>** ${p}help tickets:Need a simple but advanced Ticket System? This module allows users to connect with the staff easily!}
{field:**>** ${p}help selfroles:We have **21** Options for User Self Roles. Completely free!!:no}
{field:**>** ${p}help suggestions:Want some Suggestions? This Modules allows Customizable Suggestions Easily!:no}
{field:**>** ${p}help logging:Want some user Join/Leave logging? This is the best way to have it!:no}
{field:**>** ${p}help security:Want better Server Security? This module allows users to verify after using provided a code!:no}
{color:RANDOM}{timestamp}{footer:MultiPlex | Help}]


$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});