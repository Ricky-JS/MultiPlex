module.exports = ({
    name: "rolecolor",
    aliases: ["rc", "rolec"],
    code: `
    $title[Role color modified!]
    $thumbnail[$serverIcon]
    $color[$getRoleColor[$findRole[$messageSlice[>1]]]]
    $colorRole[$message[1];$findRole[$messageSlice[>1]]]
    $description[
<@&$findRole[$messageSlice[>1]]> role color has been updated/changed!

Color: **$message[1]**
    ]

    $onlyIf[$rolePosition[$highestRole[$client[id]]]<=$rolePosition[$findRole[$messageSlice[>1]]];Please move my role above **$roleName[$findRole[$messageSlice[>1]]]** to be able to change its color]

    $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$findRole[$messageSlice[>1]]];The **$roleName[$findRole[$messageSlice[>1]]]** is hoisted higher than your highest role. You cannot change the color of that role!]

    $onlyIf[$roleExists[$findRole[$messageSlice[>1]]]==true;
{title:2nd argument is not a role or it doesn't exist here}
{description:$getServerVar[prefix]rolecolor <hex> <role>}
{field:Usages:$getServerVar[prefix]rolecolor ff5900 admins
$getServerVar[prefix]rolecolor ff5900 @Admins
$getServerVar[prefix]rolecolor ff5900 010101010101010101010}
{footer:Obviously not a real ID, simply for example!}
{color:RED}]

    $onlyIf[$message[2]!=;
{title:Whats the role you're changing the color of?}
{description:$getServerVar[prefix]rolecolor <hex> <role>}
{field:Usages:$getServerVar[prefix]rolecolor ff5900 admins
$getServerVar[prefix]rolecolor ff5900 @Admins
$getServerVar[prefix]rolecolor ff5900 010101010101010101010}
{footer:Obviously not a real ID, simply for example!}
{color:RED}]

    $onlyIf[$isValidHex[$message[1]]==true;
{title:1st argument is not a valid hex color}
{description:$getServerVar[prefix]rolecolor <hex> <role>}
{field:Usages:$getServerVar[prefix]rolecolor ff5900 admins
$getServerVar[prefix]rolecolor ff5900 @Admins
$getServerVar[prefix]rolecolor ff5900 010101010101010101010}
{footer:Obviously not a real ID, simply for example!}
{color:RED}]

    $onlyIf[$message[1]!=;{title:Supply the color and then the role you're changing the color of!}
{description:$getServerVar[prefix]rolecolor <hex> <role>}
{field:Usages:$getServerVar[prefix]rolecolor ff5900 admins
$getServerVar[prefix]rolecolor ff5900 @Admins
$getServerVar[prefix]rolecolor ff5900 010101010101010101010}
{footer:Obviously not a real ID, simply for example!}
{color:RED}]

$onlyBotPerms[manageroles;Bot is missing the \`{perms}\` permission to change role colors]
$onlyPerms[manageroles;You're missing the \`{perms}\` permission to change role colors in here]
    `
});