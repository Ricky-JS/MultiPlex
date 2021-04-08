module.exports = ({
    name: "selfrole-remove",
    aliases: ["sr-r", "sr-remove"],
    description: "Removes a server selfrole",
    usage: "m?selfrole-remove <slot>",
    code: `
    $author[$serverName[$guildID];$serverIcon]
    $thumbnail[$serverIcon]
    
    $description[
    $addField[Role 21;
$splitContent[<@&$getServerVar[role21]>;1;<@&None>;\`Selfrole Not Added\`];yes]

    $addField[Role 20;
$splitContent[<@&$getServerVar[role20]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                        
    $addField[Role 19;
$splitContent[<@&$getServerVar[role19]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                        
    $addField[Role 18;
$splitContent[<@&$getServerVar[role18]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                        
    $addField[Role 17;
$splitContent[<@&$getServerVar[role17]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                        
    $addField[Role 16;
$splitContent[<@&$getServerVar[role16]>;1;<@&None>;\`Selfrole Not Added\`];yes]

    $addField[Role 15;
$splitContent[<@&$getServerVar[role15]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 14;
$splitContent[<@&$getServerVar[role14]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 13;
$splitContent[<@&$getServerVar[role13]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 12;
$splitContent[<@&$getServerVar[role12]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 11;
$splitContent[<@&$getServerVar[role11]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 10;
$splitContent[<@&$getServerVar[role10]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 9;
$splitContent[<@&$getServerVar[role9]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 8;
$splitContent[<@&$getServerVar[role8]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 7;
$splitContent[<@&$getServerVar[role7]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 6;
$splitContent[<@&$getServerVar[role6]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 5;
$splitContent[<@&$getServerVar[role5]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 4;
$splitContent[<@&$getServerVar[role4]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 3;
$splitContent[<@&$getServerVar[role3]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 2;
$splitContent[<@&$getServerVar[role2]>;1;<@&None>;\`Selfrole Not Added\`];yes]
                
    $addField[Role 1;
$splitContent[<@&$getServerVar[role1]>;1;<@&None>;\`Selfrole Not Added\`];yes]
$setServerVar[role$message[1];None]
$color[$getRoleColor[$getServerVar[role$message[1]]]]
Selfrole (<@&$getServerVar[role$message[1]]>) has been removed from the slot ( **$message[1]** )

\`1-\` **The <@&$getServerVar[role$message[1]]> role is no longer accessible!**.
\`2-\` Typing \`$getServerVar[prefix]selfrole-remove {help}\` will give you more details
]

    $onlyIf[$rolePosition[$getServerVar[role$message[1]]]>$rolePosition[$highestRole[$authorID]];You cannot remove ($roleName[$getServerVar[role$message[1]]]) from the selfrole panel, it is positioned higher than your highest role ($roleName[$highestRole[$authorID]])]

        $onlyIf[$getServerVar[role$message[1]]!=None;
        {author:Removing selfroles from the list}
    {title:Error: Invalid number!}
    {thumbnail:$serverIcon}
    {description:Made a mistake? Be sure you chose an actual role that's been added to the list.}
    {field:Usage:$getServerVar[prefix]selfrole-remove <slot#>:no}
    {field:<slot>:Select the selfrole slot you want to remove from the server selfroles list. Must be a number!:no}
    {color:RED}]

    $onlyIf[$checkContains[$message[1];1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20;21]==true;{author:Removing selfroles from the list}
    {title:Error: Invalid number!}
    {thumbnail:$serverIcon}
    {description:Type the selfrole slot number. Pick from **1-21**}
    {field:Usage:$getServerVar[prefix]selfrole-remove <slot#>:no}
    {field:<slot>:Select the selfrole slot you want to remove from the server selfroles list. Must be a number!:no}
    {color:RED}]

    $onlyPerms[manageroles;You're missing the \`{perms}\` permission]
    $onlyBotPerms[manageroles;Bot is missing the \`{perms}\` permission]
    `
});