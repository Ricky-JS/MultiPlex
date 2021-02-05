module.exports = ({
    name: "nick",
    code: `
$awaitReactions[1️⃣,2️⃣,3️⃣,4️⃣,5️⃣;$authorID;30s;Hoisting,unmentionable,randomname,takenick,nonick;<@$authorID> You took too long to react so no action has been made!]
$addReactions[1️⃣;2️⃣;3️⃣;4️⃣;5️⃣]

$color[$getRoleColor[$highestRole[$findUser[$message[]]]]]
$thumbnail[$userAvatar[$findUser[$message[]]]]
$title[Nickname board for $username[$findUser[$message[]]]#$discriminator[$findUser[$message[]]]]
$description[
<@$authorID>, what would you like to do with $username[$findUser[$message[]]]'s nickname?

$addField[Other:;
3️⃣ Give random name
4️⃣ Remove nickname
5️⃣ Take no action

Custom nicknames can be done with \`$getServerVar[prefix]renick\`
]

$addField[Change to:;
1️⃣ Hoisting
2️⃣ unmentionable
]
]
$footer[You have 30 seconds to decide!]

$setServerVar[arg1;$findUser[$message[]]]
$setServerVar[arg2;$authorID]

$onlyIf[$rolePosition[$highestRole[$client[id]]]$replaceText[$replaceText[$checkCondition[$findUser[$message[]]==$client[id]];true;<=];false;<]$rolePosition[$highestRole[$findUser[$message[]]]];Please move my highest role ($roleName[$highestRole[$client[id]]]) above **$username[$findUser[$message[]]]**'s highest role ($roleName[$highestRole[$findUser[$message[]]]]) to be able to change their nickname. Cannot change nicknames of users/bots that share the same highest role as me. I can change my own tho :)]

$onlyIf[$findUser[$message[]]!=$ownerID;Sorry, I can't change the server owner's nickname.]
$onlyIf[$findUser[$message[]]!=undefined;That user doesn't exist or is not in this server!]
$onlyIf[$message[1]!=;Please state **who's** nickname you want me to change in the command! You can use mentions, IDs and usernames]
$onlyBotPerms[managenicknames;I am missing **manage nicknames** permission!]
$onlyPerms[managenicknames;You are missing **manage nicknames** permission!]
    `
});