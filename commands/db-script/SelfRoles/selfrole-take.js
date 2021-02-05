module.exports = ({
    name: "selfrole-take",
    description: "Takes away one of the listed selfroles in this channel",
    aliases: ["sr-t", "sr-take"],
    code: `$setServerVar[arg1;None] $setServerVar[arg2;None]
    $title[Role Removed from $username[]#$discriminator[]]
$thumbnail[$authorAvatar[webp;true;128]]
$color[$getRoleColor[$getServerVar[role$message[1]]]]
$description[
Role - <@&$getServerVar[$splitContent[$message[1];1;$message[1];role$message[1]]]>
]
    $takeRole[$authorID;$getServerVar[role$message[1]]]

    $onlyIf[$getServerVar[selfroleChannel]==$channelID[];<@$authorID> Please move to <#$getServerVar[selfroleChannel]> with selfrole commands :)]
    $onlyIf[$channelExists[$getServerVar[selfroleChannel]]==true;{execute:selfroleTakeWhenNoChannelSet}]
    $setServerVar[arg1;$authorID]
    $setServerVar[arg2;$message[1]]

    $onlyIf[$hasRole[$authorID;$getServerVar[role$message[1]]]==true;You don't have this selfrole, Try again!]

$onlyIf[$rolePosition[$highestRole[$client[id]]]<=$rolePosition[$getServerVar[$splitContent[$message[1];1;$message[1];role$message[1]]]];Bot's highest role ($roleName[$highestRole[$client[id]]]) needs to be positioned higher than the selfrole ($roleName[$getServerVar[$splitContent[$message[1];1;$message[1];role$message[1]]]]) to be able to remove it from you.]

$onlyIf[$getServerVar[$splitContent[$message[1];1;$message[1];role$message[1]]]!=None;
{title:That slot is not set with a selfrole, try again :)}
{color:RED}
{thumbnail:$serverIcon}
{description:Aliases :\`$getServerVar[prefix]selfrole-take\`, \`$getServerVar[prefix]sr-take\`, \`$getServerVar[prefix]sr-t\`}
{field:Example:**$getServerVar[prefix]selfrole-take <number>**}
{field:Role 1:$replaceText[<@&$getServerVar[role1]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 2:$replaceText[<@&$getServerVar[role2]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 3:$replaceText[<@&$getServerVar[role3]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 4:$replaceText[<@&$getServerVar[role4]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 5:$replaceText[<@&$getServerVar[role5]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 6:$replaceText[<@&$getServerVar[role6]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 7:$replaceText[<@&$getServerVar[role7]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 8:$replaceText[<@&$getServerVar[role8]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 9:$replaceText[<@&$getServerVar[role9]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 10:$replaceText[<@&$getServerVar[role10]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 11:$replaceText[<@&$getServerVar[role11]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 12:$replaceText[<@&$getServerVar[role12]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 13:$replaceText[<@&$getServerVar[role13]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 14:$replaceText[<@&$getServerVar[role14]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 15:$replaceText[<@&$getServerVar[role15]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 16:$replaceText[<@&$getServerVar[role16]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 17:$replaceText[<@&$getServerVar[role17]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 18:$replaceText[<@&$getServerVar[role18]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 19:$replaceText[<@&$getServerVar[role19]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 20:$replaceText[<@&$getServerVar[role20]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 21:$replaceText[<@&$getServerVar[role21]>;<@&None>;\`Selfrole Not Set\`]:yes}]

$onlyIf[$checkContains[$message[1];1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20;21]==true;
{title:'$message[]' is invalid input, try again :)}
{color:RED}
{thumbnail:$serverIcon}
{description:Aliases :\`$getServerVar[prefix]selfrole-take\`, \`$getServerVar[prefix]sr-take\`, \`$getServerVar[prefix]sr-t\`}
{field:Example:**$getServerVar[prefix]selfrole-take <number>**}
{field:Role 1:$replaceText[<@&$getServerVar[role1]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 2:$replaceText[<@&$getServerVar[role2]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 3:$replaceText[<@&$getServerVar[role3]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 4:$replaceText[<@&$getServerVar[role4]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 5:$replaceText[<@&$getServerVar[role5]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 6:$replaceText[<@&$getServerVar[role6]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 7:$replaceText[<@&$getServerVar[role7]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 8:$replaceText[<@&$getServerVar[role8]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 9:$replaceText[<@&$getServerVar[role9]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 10:$replaceText[<@&$getServerVar[role10]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 11:$replaceText[<@&$getServerVar[role11]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 12:$replaceText[<@&$getServerVar[role12]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 13:$replaceText[<@&$getServerVar[role13]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 14:$replaceText[<@&$getServerVar[role14]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 15:$replaceText[<@&$getServerVar[role15]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 16:$replaceText[<@&$getServerVar[role16]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 17:$replaceText[<@&$getServerVar[role17]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 18:$replaceText[<@&$getServerVar[role18]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 19:$replaceText[<@&$getServerVar[role19]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 20:$replaceText[<@&$getServerVar[role20]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 21:$replaceText[<@&$getServerVar[role21]>;<@&None>;\`Selfrole Not Set\`]:yes}]

$onlyIf[$message[1]!=;
{title:To remove a selfrole from yourself, follow the guide below :)}
{color:RED}
{thumbnail:$serverIcon}
{description:Aliases :\`$getServerVar[prefix]selfrole-take\`, \`$getServerVar[prefix]sr-take\`, \`$getServerVar[prefix]sr-t\`}
{field:Examples:**$getServerVar[prefix]selfrole-take <number>**}
{field:Role 1:$replaceText[<@&$getServerVar[role1]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 2:$replaceText[<@&$getServerVar[role2]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 3:$replaceText[<@&$getServerVar[role3]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 4:$replaceText[<@&$getServerVar[role4]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 5:$replaceText[<@&$getServerVar[role5]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 6:$replaceText[<@&$getServerVar[role6]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 7:$replaceText[<@&$getServerVar[role7]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 8:$replaceText[<@&$getServerVar[role8]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 9:$replaceText[<@&$getServerVar[role9]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 10:$replaceText[<@&$getServerVar[role10]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 11:$replaceText[<@&$getServerVar[role11]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 12:$replaceText[<@&$getServerVar[role12]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 13:$replaceText[<@&$getServerVar[role13]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 14:$replaceText[<@&$getServerVar[role14]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 15:$replaceText[<@&$getServerVar[role15]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 16:$replaceText[<@&$getServerVar[role16]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 17:$replaceText[<@&$getServerVar[role17]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 18:$replaceText[<@&$getServerVar[role18]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 19:$replaceText[<@&$getServerVar[role19]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 20:$replaceText[<@&$getServerVar[role20]>;<@&None>;\`Selfrole Not Set\`]:yes}
{field:Role 21:$replaceText[<@&$getServerVar[role21]>;<@&None>;\`Selfrole Not Set\`]:yes}]

$onlyBotPerms[manageroles;Bot is missing \`{perms}\` permission]
$onlyIf[$getServerVar[selfroles]==on;**Cannot give or take away your selfroles while the server selfroles are switched off**]
    `
});