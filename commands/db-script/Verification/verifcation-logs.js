module.exports = ({
    name: "verification-logs",
    aliases: ["ver-logs", "vlogs"],
    code: `
    $setServerVar[verifylogchannel;$findChannel[$message[]]]
    $thumbnail[$serverIcon]
$author[$serverName[$guildID];$serverIcon]
$title[Logging channel is set!]
$color[RANDOM]
$description[
<#$findChannel[$message[]]>
I will log information about the members who successfully verify themselves!

**$replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$getServerVar[verifyrole]==undefined]-$checkCondition[$getServerVar[verifychannel]==undefined];true-true;Don't forget to set both the verification role and channel! $replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];true;You can optionally set up autokick for \`X\` amount of incorrect attempts:
\`$getServerVar[prefix]set-autokick <numberStrikes>\`];false;Autokick is enabled with **$getServerVar[totalkickstrikes]** strikes!]];true-false;Don't forget to set the verification channel! $replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];true;You can optionally set up autokick for \`X\` amount of incorrect attempts:
\`$getServerVar[prefix]set-autokick <numberStrikes>\`];false;Autokick is enabled with **$getServerVar[totalkickstrikes]** strikes!]];false-true;Don't forget to set the verification role! $replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];true;You can optionally set up autokick for \`X\` amount of incorrect attempts:
\`$getServerVar[prefix]set-autokick <numberStrikes>\`];false;Autokick is enabled with **$getServerVar[totalkickstrikes]** strikes!]];false-false;You're all set up! $replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];true;You can optionally set up autokick for \`X\` amount of incorrect attempts:
\`$getServerVar[prefix]set-autokick <numberStrikes>\`];false;Autokick is enabled with **$getServerVar[totalkickstrikes]** strikes!]]**
]

$onlyIf[$findChannel[$message[]]!=undefined;{title:Verification logging channel not found!}
{description:Define a channel where I'll be logging information about new members after they've entered their verification code successfully. This can be in form of channelID, channel name or mentioning a channel.}
{field:Aliases:$getServerVar[prefix]set-logs
$getServerVar[prefix]set-l}
{field:Examples:$getServerVar[prefix]set-logs #verify-log
$getServerVar[prefix]set-logs verify-log
$getServerVar[prefix]set-logs 4293602768385969522}
{color:RED}]

$onlyIf[$message[]!=off;{execute:disableLogChannel}]

$onlyIf[$message[1]!=;{title:Don't leave anything blank!}
{description:Define a channel where I'll be logging information about new members after they've entered their verification code successfully. This can be in form of channelID, channel name or mentioning a channel.}
{field:Aliases:$getServerVar[prefix]set-logs
$getServerVar[prefix]set-l}
{field:Examples:$getServerVar[prefix]set-logs #verify-log
$getServerVar[prefix]set-logs verify-log
$getServerVar[prefix]set-logs 4293602768385969522}
{color:RED}]

$onlyBotPerms[managechannels;manageroles;manageserver;**The bot needs to have the following permissions for setting up the bot to log members after they've verified themselves! These permissions will be asked for later to set up the rest of the bot if not changed.**
Required - \`{perms}\`]
$onlyPerms[admin;**For security reasons, you need the \`{perms}\` permission to tamper with the security commands!**]
`})