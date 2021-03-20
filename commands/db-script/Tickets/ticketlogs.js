module.exports = ({
name: "ticketlogs",
aliases: ["ticket-logs", "t-l", "tl", "tlogs", "tlog"],
description: "Sets the Server Logs Channel (Webhooks)",
usage: "e?logs <channel>",
code: `
$sendWebhook[$getServerVar[ticketLog];{title:Ticket Logging}{description:**$tag[$authorID]** has set the Ticket Logging channel to **$channelName[$findChannel[$message[1]]]**. All Ticket logs will be sent here via Webhook!}{footer:Eyaqtron Ticket Logging}{color:RANDOM}{timestamp}]

**Success** | Ticket logs will now be sent to <#$findChannel[$message[1]]>!

$setServerVar[ticketLog;$createWebhook[$findChannel[$message[1]];Eyaqtron Ticket Logging;$client[avatarurl]]]
$onlyIf[$channelExists[$findChannel[$message[1]]]==true;Please povide a channel name, id, or mention the channel.]
$onlyIf[$webhook[$getServerVar[ticketLog];exists]==false;:x: Ticket Logging has already been set.]
$onlyPerms[managechannels;You're missing the required permissions. \`{perms}\`]
$onlyBotPerms[managewebhooks;:x: I need \`{perms}\` to be able to work properly.]


$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]


 $onlyIf[$guildID==792683382563799060;{title:Tickets can only be used in the Support Server. They will be set for Public use soon!}{color:RED}]
`});