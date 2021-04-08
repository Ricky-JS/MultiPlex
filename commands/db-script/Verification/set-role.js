module.exports = ({
    name: "set-role",
    aliases: ["set-r"],
    code: `
    $thumbnail[$serverIcon]
    $author[$serverName[$guildID];$serverIcon]
    $title[Verification role is set!]
    $color[RANDOM]
$description[
<@&$findRole[$message[]]>
New members will receive this role after verification.

**$replaceText[$replaceText[$checkCondition[$getServerVar[verifychannel]==undefined];true;Don't forget to set the Verification channel!];false;You're all set up! $replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];true;You can optionally set up autokick for \`X\` amount of attempts:
\`$getServerVar[prefix]set-autokick <numberStrikes>\`];false;Autokick is enabled with $getServerVar[totalkickstrikes] strikes!]]**
]

$setServerVar[verifyrole;$findRole[$message[]]]

$onlyIf[$findRole[$message[]]!=undefined;
{title:Verification role not found!}
{description:Define a role that I'll be giving new members after they've typed the verification code. This can be in form of roleID, role name or mentioning a role.}
{field:Aliases:$getServerVar[prefix]set-role
$getServerVar[prefix]s-role}
{field:Examples:$getServerVar[prefix]set-role @Verified
$getServerVar[prefix]set-role verified
$getServerVar[prefix]set-role 62938563874529857223}
{color:RED}]

$onlyIf[$message[]!=off;{execute:disableRole}]

$onlyIf[$message[]!=;{title:What role are you setting for new members to get when verified?}
{description:Define a role that I'll be giving new members after they've typed the verification code. This can be in form of roleID, role name or mentioning a role.}
{field:Aliases:$getServerVar[prefix]set-role
$getServerVar[prefix]s-role}
{field:Examples:$getServerVar[prefix]set-role @Verified
$getServerVar[prefix]set-role verified
$getServerVar[prefix]set-role 62938563874529857223}
{color:RED}]

$onlyBotPerms[managechannels;manageroles;manageserver;**The bot needs to have the following permissions for setting up the verification system! These permissions will be asked for later if not changed.**
Required - \`{perms}\`]
$onlyPerms[admin;**For security reasons, you need the \`{perms}\` permission to tamper with the verification commands!**]
`})