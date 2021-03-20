module.exports = ({
name: "logs",
description: "Sets the Server Logs Channel (Webhooks)",
usage: "m?logs <channel>",
code: `
$sendWebhook[$getServerVar[logs];{title:Logging Channel Set!}{description:**$tag[$authorID]** has set the logging channel to **$channelName[$findChannel[$message[1]]]**. All moderation logs will be sent here via Webhook!}{footer:Logging Channel Set Successfully!}{color:RANDOM}{timestamp}]
$title[Server Logs Set]
$description[Success! A webhook has been created in <#$findChannel[$message[1]]>!]
$footer[MultiPlex | Logging;$authorAvatar[webp;true;1024]]
$color[$random[00000;99999]]
$addTimestamp
$setServerVar[logchan;$findChannel[$message[1]]]
$setServerVar[logs;$createWebhook[$findChannel[$message[1]];MultiPlex Logging;$client[avatarurl]]]
$onlyIf[$channelExists[$findChannel[$message[1]]]==true;Please povide a channel name, id, or mention the channel.]
$onlyIf[$webhook[$getServerVar[logs];exists]==false;:x: Logging Channel is already set to <#$getServerVar[logchan]>.]
$onlyPerms[managechannels;You're missing the required permissions. \`{perms}\`]
$onlyBotPerms[managewebhooks;:x: I need \`{perms}\` to be able to work properly.]


$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]`});