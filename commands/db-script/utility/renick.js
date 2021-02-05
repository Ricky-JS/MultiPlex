module.exports = ({
    name: "renick",
    code: `
    $setNickname[$findUser[$message[1]];$messageSlice[>1]]
$color[$getRoleColor[$highestRole[$findUser[$message[1]]]]]
$thumbnail[$userAvatar[$findUser[$message[1]]]]
$title[Nickname change!]
$description[
    $addField[New Nickname:;$messageSlice[>1];yes]

    $addField[Member:;$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]];yes]

    $addField[Executor:;<@$authorID>;yes]
]
$onlyIf[$messageSlice[>1]!=;You're missing a nickname to set for $username[$findUser[$message[1]]], supply one!]

$onlyIf[$rolePosition[$highestRole[$client[id]]]$replaceText[$replaceText[$checkCondition[$findUser[$message[]]==$client[id]];true;<=];false;<]$rolePosition[$highestRole[$findUser[$message[1]]]];Please move my highest role ($roleName[$highestRole[$client[id]]]) above **$username[$findUser[$message[1]]]**'s highest role ($roleName[$highestRole[$findUser[$message[1]]]]) to be able to change their nickname. Cannot change nicknames of users/bots that share the same highest role as me. I can change my own tho :)]

$onlyIf[$findUser[$message[1]]!=$ownerID;Sorry, I can't change the server owner's nickname.]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;That user doesn't exist or is not in this server!]
$onlyIf[$message[1]!=;Please state **who's** nickname you want me to change in the command! You can use mentions, IDs and usernames with just 1 word in them.]
$onlyBotPerms[managenicknames;I am missing \`{perms}\` permission!]
$onlyPerms[managenicknames;You are missing \`{perms}\` permission!]
    `
});