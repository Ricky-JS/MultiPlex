let cmd = "$getServerVar[prefix]suggestions";
let p = "$getServerVar[prefix]";

module.exports = ({
name: "suggestions",
code: `
$description[**$replaceText[$replaceText[$replaceText[$replaceText[$message[1];enable;Suggestions];mod;Moderator Role];blist;Blacklisted Role];channel;Suggestions Channel]** has been set to $replaceText[$replaceText[$replaceText[$replaceText[$message[1];mod;<@&$findRole[$message[2]]>];blist;<@&$findRole[$message[2]]>];channel;<#$findChannel[$message[2]]>];enable;Enabled!]]
$color[$random[00000;99999]]
$footer[Eyaqtron Suggestions]
$addTimestamp
$setServerVar[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];blist;blistrole];mod;modrole];channel;suggestchannel];enable;suggestions];$replaceText[$replaceText[$replaceText[$replaceText[$message[1];blist;$findRole[$message[2]]];mod;$findRole[$message[1]]];channel;$findChannel[$message[2]]];enable;Enabled]]


$onlyIf[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];blist;$roleExists[$findRole[$message[2]]]];channel;$channelExists[$findChannel[$message[2]]]];mod;$roleExists[$findRole[$message[2]]]];enable;true]==true;:x: Invalid Arguments in \`${cmd} $message[1] <option>\`!]
$onlyIf[$message[3]==;**:x: Something isn't right.. Maybe try to *not* defined a 3rd argument -_-**]
$onlyIf[$checkContains[$message[1];enable;mod;blist;channel]==true;**:x: \`$message[1]\` isn't a valid option! Use \`${cmd} help\` for help!**]
$onlyIf[$checkCondition[$message[1]==]==false;{title:Welcome to Eyaqtron Suggestions}
{description:Eyaqtron makes suggestions so much easier!
How to use!
\`\`\`
${cmd} <option> <field>

Options - channel, blist, mod, enable
\`\`\`}
{field:Suggestions <Required>:$replaceText[$replaceText[$getServerVar[suggestions];Enabled;\`Suggestions are Enabled!\`];Disabled;\`Suggestions are Disabled!\`]}
{field:Suggestion Channel <Required>:$replaceText[$replaceText[$checkCondition[$channelExists[$findChannel[$getServerVar[suggestchannel]]]==true];true;<#$getServerVar[suggestchannel]>];false;\`No Channel Set\`]}
{field:Blacklisted Role <Optional>:$replaceText[$replaceText[$checkCondition[$roleExists[$findRole[$getServerVar[blistrole]]]==true];true;<@&$getServerVar[blistrole]>];false;\`No Role Set\`]}
{field:Moderator Role <Required>:$replaceText[$replaceText[$checkCondition[$roleExists[$findRole[$getServerVar[modrole]]]==true];true;<@&$getServerVar[modrole]>];false;\`No Role Set\`]}
{footer:For help, Use ${cmd} help!}
{color:RANDOM}]

$onlyIf[$message[1]!=help;{author:Tip - Use "${cmd} reset" to reset settings!}
{title:Suggestion Help}
{description:How to use Eyaqtron Suggestions!\n
\`${cmd} <option> <field>\`

Options - channel, blist, mod, enable
Field - Arguments

\`${cmd} mod <role>\` - Gives the provided role access to ${p}deny and ${p}accept!
\`${cmd} blist <role>\` - Blacklists the provided role from using ${p}suggest!
\`${cmd} channel <channel>\` - Marks that provided channel as the Suggestions channel! This channel is where suggestions are posted!
\`${cmd} enable <no arg>\` - Enables the suggestions module, This is disabled by default!


**>** Examples \`\`\`
${cmd} channel suggestions
${cmd} blist Muted
${cmd} mod Moderators
${cmd} enable
\`\`\`}
{footer:Eyaqtron | Suggestions Help}
{color:RANDOM}]
$onlyIf[$message[1]!=reset;{execute:suggest-reset}]

$onlyPerms[managechannels;:x: Access Denied | You Need \`{perms}\` to use this command!]
`});
