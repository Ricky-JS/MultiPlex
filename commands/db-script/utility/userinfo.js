const { Status, HypeSquad } = require('../../../config/emojis.json')

module.exports = ({
    name: "userinfo",
    aliases: ["ui"],
    description: "Provides information on the provided user",
    usage: "m?userinfo <user>",
    code: `
    $color[#00FFFF]
    $thumbnail[$userAvatar[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]]]
    $title[User: $username[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]]#$discriminator[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]]
Nick: $replaceText[$replaceText[$checkCondition[$nickname[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]]==$username[]];true;No Nickname];false;$nickname[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]]]
ID: $findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]]
    $description[Created $creationTime[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]] ago]
         
         $addField[__About__;
\`Type\`: $replaceText[$replaceText[$isBot[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]];false;Human];true;Bot]
\`Highest role/position\`: <@&$findRole[$highestRole[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]]]> | #$rolePosition[$findRole[$highestRole[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]]]]
\`Registered\`: $creationDate[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]];user]
\`JoinedServer\`: $creationDate[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]];member]
\`JoinedTime\`: $creationTime[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]];member] ago
\`Badges\`: $splitContent[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]]; ;None];VERIFIED_BOT;<:VerifiedBotTag:743539129509478481>];VERIFIED_DEVELOPER;<:discord_bot_dev:712265059086106676>];HOUSE_BALANCE;${HypeSquad.balance}];HOUSE_BRAVERY;${HypeSquad.bravery}];HOUSE_BRILLIANCE;${HypeSquad.brilliance}];1;,; | ]]
  
          $addField[__Right now__;
\`Platform\`: $splitContent[$replaceText[$replaceText[$replaceText[$replaceText[$platform[$findUser[$replaceText[$replaceText[$checkCondition[$message[1]==];true;$authorID];false;$message[]]]];mobile;Mobile App];offline;Offline];web;Website];desktop;Desktop App];1;,; | ]
\`Activity\`: $replaceText[$activity[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]];none;None]
\`Status\`: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]];dnd;${Status.DND}
];online;${Status.Online}
];invisible;${Status.Offline}];idle;Idle <:IDLE:712371278761295892>
];streaming;${Status.Streaming}
];offline;${Status.Offline}]]

      $footer[Requested: $username[] | $getServerVar[prefix]userinfo (user/ID/mention);$userAvatar[$authorID]]
      $onlyIf[$memberExists[$findUser[$replaceText[$replaceText[$checkCondition[$message[]==];true;$authorID];false;$message[]]]]!=false;**That user doesn't seem to exist or they're not in the server. Try again**]
    `
});