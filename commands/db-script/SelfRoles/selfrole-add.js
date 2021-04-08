module.exports = ({
    name: "selfrole-add",
    description: "Sets a server selfrole",
    usage: "m?selfrole-add <slot> <role>",
    aliases: ["sr-a", "sr-add"],
    code: `
    $author[$serverName[$guildID[]];$serverIcon]
    $thumbnail[$serverIcon]
    $color[$getRoleColor[$getServerVar[role$message[1]]]]
    $description[
Selfrole (<@&$findRole[$messageSlice[>1]]>) has been added to slot ( **$message[1]** )

\`1-\` Members can wear the <@&$findRole[$messageSlice[>1]]> selfrole with \`$getServerVar[prefix]selfrole-add $message[1]\`.
\`2-\` Typing \`$getServerVar[prefix]selfrole-add {help}\` will give you more details

$addField[Role 21;
$replaceText[<@&$getServerVar[role21]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 20;
$replaceText[<@&$getServerVar[role20]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 19;
$replaceText[<@&$getServerVar[role19]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 18;
$replaceText[<@&$getServerVar[role18]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 17;
$replaceText[<@&$getServerVar[role17]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 16;
$replaceText[<@&$getServerVar[role16]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 15;
$replaceText[<@&$getServerVar[role15]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 14;
$replaceText[<@&$getServerVar[role14]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 13;
$replaceText[<@&$getServerVar[role13]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 12;
$replaceText[<@&$getServerVar[role12]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 11;
$replaceText[<@&$getServerVar[role11]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 10;
$replaceText[<@&$getServerVar[role10]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 9;
$replaceText[<@&$getServerVar[role9]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 8;
$replaceText[<@&$getServerVar[role8]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 7;
$replaceText[<@&$getServerVar[role7]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 6;
$replaceText[<@&$getServerVar[role6]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 5;
$replaceText[<@&$getServerVar[role5]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 4;
$replaceText[<@&$getServerVar[role4]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 3;
$replaceText[<@&$getServerVar[role3]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 2;
$replaceText[<@&$getServerVar[role2]>;<@&None>;\`Selfrole Not Added\`];yes]
$addField[Role 1;
$replaceText[<@&$getServerVar[role1]>;<@&None>;\`Selfrole Not Added\`];yes]
]

    $setServerVar[role$message[1];$findRole[$messageSlice[>1]]]

    $onlyIf[$rolePosition[$findRole[$messageSlice[>1]]]>$rolePosition[$highestRole[$authorID]];You cannot add ($roleName[$findRole[$messageSlice[>1]]]) to the selfrole panel, it is positioned higher than your highest role ($roleName[$highestRole[$authorID]])]

    $onlyIf[$roleExists[$findRole[$messageSlice[>1]]]==true;
    {author:Adding selfroles to the list}
    {title:Error: Non-existent role!}
    {description:Don't forget to supply the roleID, role name, or you can mention the role you want to add to a selfrole slot}
    {field:Usage:$getServerVar[prefix]selfrole-add <slot#> <role>
\`2-\` Typing \`$getServerVar[prefix]selfrole-add help\` will give you more details:no}
    {field:<slot#>:Select the selfrole slot you want to alter. Must be a number!:no}
    {field:<role>:Use roleID, role name, or mention the role you want to add to a server selfrole slot.:no}
    {color:RED}]

    $onlyIf[$message[2]!=;
    {author:Adding selfroles to the list}
    {title:Error: Supply a role to set!}
    {description:The **2nd argument** is left empty! You can use role mentions, IDs or just type the name}
    {field:Usage:$getServerVar[prefix]selfrole-add <slot#> <role>
\`2-\` Typing \`$getServerVar[prefix]selfrole-add help\` will give you more details:no}
    {field:<slot#>:Select the selfrole slot you want to alter. Must be a number!:no}
    {field:<role>:Use roleID, role name, or mention the role you want to add to a server selfrole slot.:no}
    {color:RED}]

    $onlyIf[$checkContains[$message[1];1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20;21]==true;
    {author:Adding selfroles to the list}
    {title:Error: Invalid number!}
    {description:The **1st argument** needs to be a number from (\`1-21\`) and don't forget the selfrole!}
    {field:Usage:$getServerVar[prefix]selfrole-add <slot#> <role>
\`2-\` Typing \`$getServerVar[prefix]selfrole-add help\` will give you more details:no}
    {field:<slot#>:Select the selfrole slot you want to add to the server selfroles list. Must be a number!:no}
    {field:<role>:Use roleID, role name, or mention the role you want to add to a server selfrole slot.:no}
    {color:RED}]

    $onlyIf[$message[1]!=;
    {author:Adding selfroles to the list}
    {title:Error: Missing all arguments}
    {thumbnail:$serverIcon}
    {description:Don't leave anything empty!}
    {field:Usage:$getServerVar[prefix]selfrole-add <slot#> <role>
\`2-\` Typing \`$getServerVar[prefix]selfrole-add help\` will give you more details:no}
    {field:<slot#>:Select the selfrole slot (\`1-21\`) you want to add to the server selfroles list. Must be a number!:no}
    {field:<role>:Use roleID, role name, or mention the role you want to add to a server selfrole slot.:no}
    {color:RED}]

    $onlyPerms[manageroles;You're missing the \`{perms}\` permission]
    $onlyBotPerms[manageroles;Bot is missing the \`{perms}\` permission]
    `
});

//$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$highestRole[$authorID]];Bot's highest role ($roleName[$highestRole[$client[id]]]) needs to be positioned higher than your highest role ($roleName[$highestRole[$authorID]]) to add selfroles to the selfrole panel]