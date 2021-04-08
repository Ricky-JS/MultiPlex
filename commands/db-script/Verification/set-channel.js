module.exports = ({
    name: "set-channel",
    aliases: ["set-c"],
    code: `
    $setServerVar[verifychannel;$findChannel[$message[]]]
    $thumbnail[$serverIcon]
$author[$serverName[$guildID];$serverIcon]
$title[Verification channel is set!]
$color[RANDOM]
$description[
<#$findChannel[$message[]]>
New members will receive a greeting in this channel with a unique verification code to verify themselves with.


**$replaceText[$replaceText[$checkCondition[$getServerVar[verifyrole]==undefined];true;Don't forget to set the Security role!];false;You're all set up! $replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];true;You can optionally set up autokick for \`X\` amount of incorrect attempts:
\`$getServerVar[prefix]set-autokick <numberStrikes>\`];false;Autokick is enabled with $getServerVar[totalkickstrikes] strikes!]]**
]

$onlyIf[$findChannel[$message[]]!=undefined;{title:Verification channel not found!}
{description:Define a channel where I'll be greeting new members with a verification code. This can be in form of channelID, channel name or mentioning a channel.}
{field:Aliases:$getServerVar[prefix]set-channel
$getServerVar[prefix]set-c}
{field:Examples:$getServerVar[prefix]set-channel #verify
$getServerVar[prefix]set-channel verify
$getServerVar[prefix]set-channel 5293402720388963523}
{footer:Not case sensitive :)}
{color:RED}]

$onlyIf[$message[]!=off;{execute:disableChannel}]

$onlyIf[$message[1]!=;{title:What channel are you flowing the verifications through?}
{description:Define a channel where I'll be greeting new members with a verification code. This can be in form of channelID, channel name or mentioning a channel.}
{field:Aliases:$getServerVar[prefix]set-channel
$getServerVar[prefix]set-c}
{field:Examples:$getServerVar[prefix]set-channel #verify
$getServerVar[prefix]set-channel verify
$getServerVar[prefix]set-channel 5293402720388963523}
{color:RED}]

$onlyBotPerms[managechannels;manageroles;manageserver;**The bot needs to have the following permissions for setting up the verification system! These permissions will be asked for later if not changed.**
Required - \`{perms}\`]
$onlyPerms[admin;**For security reasons, you need the \`{perms}\` permission to tamper with the verification commands!**]
`})