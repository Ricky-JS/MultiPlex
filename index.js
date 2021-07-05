const discordScript = require("discordbot-script")
const bot = new discordScript({
  token: "NzkyNjkyNTEwNDgwMTM4MzAw.X-habg.oYaPFE-91s2hZMzqFghLl_uODq0",
  prefix: [process.env.Prefix1, process.env.Prefix2, process.env.Prefix3]
});
bot.MessageEvent()
bot.MessageEditEvent()
const fs = require('fs');
const folders = fs.readdirSync("./commands/db-script/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/db-script/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/db-script/${files}/${commands}`)
        bot.Command(command);
    }
}
bot.Status({
  0: {
      description: "m?help | $serverCount Guilds!", 
      type: "PLAYING" 
  }, 
  1: {
      description: "I am not dead. kinda", 
      type: "WATCHING" 
  }
}, 25000)

  bot.Variables({
  devSwitch: "enabled",
  dev1: "672215920558604332",
  dev2: "450842899630784532",
  prefix: "m?",
  muted: "Undefined",
  logs: "https://discord.com/api/webhooks/798380573215162420/yxKjjNmTy-MMPK7V01eEtZ6mkYcYXmszEE2XYUK9UxnbyKYv8OLTMtLTkqS0cFLS2k2w",
  logchan: "Undefined",
  version: "0.2.1",
  snipes: "I can't snipe anything, *yet*.",
  user: "792692510480138300",
  antilink: "Disabled",
  afk: "DISABLED",
  afkReason: "Nothing",
  arg1: "None",
  arg2: "None",
  arg3: "None",
  poll: "None",
  role1: "None",
  role2: "None",
  role3: "None",
  role4: "None",
  role5: "None",
  role6: "None",
  role7: "None",
  role8: "None",
  role9: "None",
  role10: "None",
  role11: "None",
  role12: "None",
  role13: "None",
  role14: "None",
  role15: "None",
  role16: "None",
  role17: "None",
  role18: "None",
  role19: "None",
  role20: "None",
  role21: "None",
  selfroleChannel: "None",
  selfroles: "off",
  poll: "None",
  joinChannel: "undefined",
  joinMsg: "undefined",
  joinMention: "off",
  leaveChannel: "undefined",
  leaveMsg: "undefined",
  suggestions: "Disabled",
  suggestchannel: "Undefined",
  blistrole: "Undefined",
  modrole: "Undefined",
  warnings: 0,
  infractions: "Undefined",
  ticketnumber: "0",
  ticketchannel: "794479046712098837",
  ticketowner: "792692510480138300",
  ticketLog: "https://discord.com/api/webhooks/798380573215162420/yxKjjNmTy-MMPK7V01eEtZ6mkYcYXmszEE2XYUK9UxnbyKYv8OLTMtLTkqS0cFLS2k2w",
  blacklist: "false",
  reason: "N/A",
  archived: "false",
  archivechannel: "794479046712098837",
  archiveowner: "792692510480138300",
  tempvar1: "N/A",
  webhook: "N/A",
  verifychannel: 'undefined',
  verifycode: 'undefined',
  verifyrole: 'undefined',
  verifylogchannel: 'undefined',
  kickstrikes: '0',
  totalkickstrikes: 'undefined',
  t1: 'undefined',
  t2: 'undefined',
  t3: 'undefined',
  t4: 'undefined',
  bypassdevs: "false",
})



bot.MessageDeleteCommand({
name: "$channelID[]",
code: `
$sendWebhook[$getServerVar[logs];{title:Message Deleted}{field:User:$tag[$authorID] ($authorID):yes}{field:Deleted From:<#$channelID[]> ($channelID[]):yes}{field:Message:$replaceText[$replaceText[$checkCondition[$message[]==];true;:warning: **Message couldn't be retrieved**];false;$message[]]:yes}{footer:MultiPlex Logging}{color:RANDOM}]

$onlyIf[$charCount[$message[]]<1025;]

$onlyIf[$webhook[$getServerVar[logs];exists]==true;]
$setChannelVar[snipes;$replaceText[$replaceText[$message[];a2008A;];a2008E;]]
$setChannelVar[user;$authorID]
$onlyIf[$guildID!=;]

$suppressErrors[]
`})

bot.ExecutableCommand({
name: "suggest-reset",
code: `
Settings have been reset!
$setServerVar[suggestions;Disabled]
$setServerVar[suggestchannel;Undefined]
$setServerVar[blistrole;Undefined]
$setServerVar[modrole;Undefined]
`});

let ticket  = "$getServerVar[ticketLog]"

bot.ExecutableCommand({
  name: "blacklist",
  code: `
  $sendWebhook[${ticket};{title:$replaceText[$replaceText[$message[1];add;Blacklisted User];remove;Whitelisted User]}{description:** **}
  {field:User:$username[$findUser[$message[2]]]#$discriminator[$findUser[$message[2]]] ($findUser[$message[2]]):yes}{field:Moderator:$username[$authorID]#$discriminator[$authorID] ($authorID):yes}{footer:MultiPlex Ticket System}{color:RANDOM}]
  
  $onlyIf[$webhook[${ticket};exists]==true;]
  `})
  
  bot.ExecutableCommand({
  name: "no-ticket",
  code: `
  $sendWebhook[${ticket};{title:Ticket Un-Marked}{description:** **}{field:Channel:$channelID[]):yes}{field:Moderator:$username[$authorID]#$discriminator[$authorID] ($authorID):yes}{footer:MultiPlex Ticket System}{color:RANDOM}]
 
   $onlyIf[$webhook[${ticket};exists]==true;]
  `})
  
  bot.ExecutableCommand({
  name: "new-owner",
  code: `
  $sendWebhook[${ticket};{title:New Owner}{description:** **}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] ($findUser[$message[1]]):yes}{field:Moderator:$username[$authorID]#$discriminator[$authorID] ($authorID):yes}{footer:MultiPlex Ticket System}{color:RANDOM}]
  
  $onlyIf[$webhook[${ticket};exists]==true;]
  `})
  
  bot.ExecutableCommand({
  name: "new-log",
  code: `
   $sendWebhook[${ticket};{title:New Ticket}{description:** **}{field:Owner:$username[]#$discriminator[] ($authorID):yes}{field:Channel:<#$getUserVar[ticketchannel]> ($getUserVar[ticketchannel]):yes}{footer:MultiPlex Ticket System}{color:RANDOM}]
    $onlyIf[$webhook[${ticket};exists]==true;]
    `})
  
  bot.ExecutableCommand({
  name: "f-owner",
  code: `
  $sendWebhook[${ticket};{title:Owner Forced}{description:** **}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] ($findUser[$message[1]]):yes}{field:Channel:<#$channelID[]> ($channelID[]):yes}{field:Moderator:$username[$authorID]#$discriminator[$authorID] ($authorID):yes}{footer:MultiPlex Ticket System}{color:RANDOM}]

  $onlyIf[$webhook[${ticket};exists]==true;]
  `})
  
  bot.ExecutableCommand({
  name: "close",
  code: `
  $sendWebhook[${ticket};{title:Ticket Closed}
  {field:Closed By:$username[$authorID]#$discriminator[$authorID] ($authorID):no}
  {field:Owner:<@$getChannelVar[ticketowner;$getUserVar[ticketchannel]]> ($getChannelVar[ticketowner;$getUserVar[ticketchannel]]):no}
  {footer:MultiPlex Ticket System}{color:RANDOM}]

  $onlyIf[$webhook[${ticket};exists]==true;]
  $deleteChannels[$channelID[]]
  $replyIn[15s]
  `})
  
  bot.ExecutableCommand({
  name: "new-ticket",
  code: `
 $onlyIf[1==2;{execute:new-log}]
 
  $sendWebhook[$getChannelVar[webhook;$channelID[ticket-$getVar[ticketnumber]]];<@$authorID>, Welcome to your ticket!
  {title:Thanks for creating a ticket!}
  {description:Make sure to follow these guidelines!
  
  \`-\` Follow all the Rules
  \`-\` Don't disrespect the staff
  \`-\` Describe your problem the best you can
  \`-\` Don't leave out any details
  
  **__Thanks for using the MultiPlex Ticket System!__**}{footer:Welcome to your ticket!}{color:RANDOM} 
  $setChannelVar[webhook;$createWebhook[$channelID[ticket-$getVar[ticketnumber]];MultiPlex Ticket System;$userAvatar[792692510480138300]];$channelID[ticket-$getVar[ticketnumber]]]]
  `})
  
  bot.ExecutableCommand({
  name: "archive",
  code: `
  $setVar[tempvar1;]
  $sendWebhook[${ticket};{title:Ticket Achived.}
    {field:Channel:<#$channelID[]>:no}
    {field:Owner:$getVar[tempvar1]:no}
    {field:Archived By:<@$authorID> ($authorID):no}
    {footer:MultiPlex Ticket System}{color:RANDOM}]

      $onlyIf[$webhook[${ticket};exists]==true;]
  `})
  
  bot.ExecutableCommand({
  name: "ticket-archive",
  code: `
  $title[Archived Ticket Information]
  $description[
  Ticket Channel: <#$channelID[]>
  
  Ticket Owner: <@$getChannelVar[archiveowner]> ($getChannelVar[archiveowner])
  
  Ticket Number:  $replaceText[$channelName[$channelID[]];ticket-;]
  
  Ticket Created: $creationDate[$channelID[]] ($creationTime[$channelID[]] ago)
  ]
  $footer[Archived Ticket Information]
  $color[RANDOM]
  $suppressErrors[:x: An error occurred.]
  `})
  
  
  bot.ExecutableCommand({
  name: "both-find",
  code: `
  $editIn[500ms;<a:loading:793734232349868033> Gathering Information;**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** has:
  Open Ticket: <#$getUserVar[ticketchannel;$findUser[$message[1]]]>
  Archived Ticket: <#$getUserVar[archivechannel;$findUser[$message[1]]]>]
  
  <a:loading:793734232349868033> Searching...
  `})
  
  
  bot.ExecutableCommand({
  name: "archive-find",
  code: `
  $editIn[500ms;<a:loading:793734232349868033> Gathering Information;$replaceText[$replaceText[$channelExists[$getUserVar[archivechannel;$findUser[$message[1]]]];true;**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** has an archived Ticket: <#$getUserVar[archivechannel;$findUser[$message[1]]]>];undefined;**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** doesn't have an open ticket.]]
  
  <a:loading:793734232349868033> Searching...
  
  
  $onlyIf[$channelExists[$getUserVar[ticketchannel;$findUser[$message[1]]]]!=true;{execute:both-find}]
  `})

bot.onMessageDelete()

bot.ExecutableCommand({
name: "antilink-on",
code: `
$setServerVar[antilink;Enabled]
$title[Anti-Link | Enabled]
$description[
You've enabled Anti-Link!!

Users will no longer be able to send links.
(Users with \`MANAGE_MESSAGES\` aren't affected)]
$footer[Anti-Link Enabled | $username[$authorID]#$discriminator[$authorID];$authorAvatar[webp;true;1024]]
$addTimestamp
$color[RANDOM]
$onlyPerms[managemessages;<:xmark:761828801474723870> You do  not have permission to run this command.]
`})
bot.ExecutableCommand({
name: "antilink-off",
code: `
$setServerVar[antilink;Disabled]
$title[Anti-Link | Disabled]
$description[
You've Disabled Anti-Link!

Users are now able to send links.]
$footer[Anti-Link Disabled | $username[$authorID]#$discriminator[$authorID];$authorAvatar[webp;true;1024]]
$addTimestamp
$color[RANDOM]
$onlyPerms[managemessages;<:xmark:761828801474723870> You do  not have permission to run this command.]
`})
bot.SpaceCommand({
name: "antilink",
code: `
$setUserVar[infractions;$replaceText[$getUserVar[infractions];Undefined;]\n\`$getUserVar[warnings]-\` (AUTO-MOD) Anti-Link]
$setUserVar[warnings;$sum[$getUserVar[warnings];1]]
<@!$authorID>
$title[⚠️ MultiPlex Anti-Link ⚠️️]
$description[
\`Links aren't allowed here, 1 warning has been added to your account\`]
$footer[MultiPlex Anti-Link]
$addTimestamp
$color[RANDOM]
$deletecommand[1ms]
$onlyIf[$hasPerm[$authorID;managemessages]==false;]
$onlyIf[$getServerVar[antilink]==Enabled;]
$onlyIfMessageContains[https://;www.;.com;.ca;.xyz;.gg;discord.com;discord.gg;youtube.com;]
`})

bot.BotJoinCommand({
  name: "$systemChannelID",
  code: `
  Hello and thank you for inviting me!
  My prefix is: \`$getServerVar[prefix]\`
  You can check out my help page with:\`\`\`$getServerVar[prefix]help\`\`\`
  `
})
bot.onBotJoin()

bot.JoinedCommand({
name: "$getServerVar[verifychannel]",
code: `
$replaceText[$replaceText[$isBot[$authorID];true;**A bot joined the server <@$authorID>, manual verification may be required!**];false;<@$authorID> **Thanks for joining *$serverName[$guildID]***!]
$thumbnail[$authorAvatar[webp;true;512]]
$author[ID: $authorID]
$title[$replaceText[$replaceText[$isBot[$authorID];true;$tag[]];false;--> Code: **$getUserVar[verifycode]**]]

$description[$replaceText[$replaceText[$isBot[$authorID];true;$creationDate[$authorID]];false;Just type your code. 5 second cooldown.

$replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];true;];false;**Auto-Kick is enabled!**
**$getUserVar[kickstrikes]/$getServerVar[totalkickstrikes]** chances before being autokicked! Type your code carefully!]]]
$color[RANDOM]

$setUserVar[verifycode;$random[100000;999999]]
$onlyIf[$getServerVar[verifyrole]!=undefined;]
$onlyIf[$getServerVar[verifychannel]!=undefined;]
`})

bot.JoinedCommand({
  name: "$getServerVar[joinChannel]",
  description: "Welcomes the member on join",
  code: `
  $replaceText[$replaceText[$checkCondition[$getServerVar[joinMention]==on];true;<@$authorID>];false;]
  $author[$tag[] ($authorID)]
  $title[Welcome to the Server!]
  $thumbnail[$authorAvatar[webp;true;512]]
  $color[RANDOM]
  $description[$replaceText[$replaceText[$checkCondition[$getServerVar[joinMsg]==undefined];false;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[joinMsg];{user};$username[]];{mention};<@$authorID>];{server};$serverName[$guildID]];{discrim};$discriminator[]];{members};$membersCount[]]];true;**$tag[]** joined the server!]
  
Created: $creationTime[$authorID] ago]
  
  $onlyIf[$getServerVar[joinChannel]!=undefined;]
`})
bot.onJoined()


// $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[joinMsg];{user};$username[]];{mention};<@$authorID>];{server};$serverName[$guildID]];{discrim};$discriminator[]];{members};$membersCount[]]

// {user} - {discrim} - {mention} - {server} - {members}

bot.LeaveCommand({
  name: "$getServerVar[leaveChannel]",
  description: "Lets you know when a member leaves the server",
  code: `
$setUserVar[verifycode;undefined;$authorID]
$setUserVar[kickstrikes;0;$authorID]

  $author[$tag[] ($authorID)]
  $title[Hope you have a great day!]
  $thumbnail[$authorAvatar[webp;true;512]]
  $color[RANDOM]
  $description[$replaceText[$replaceText[$checkCondition[$getServerVar[leaveMsg]==undefined];false;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[leaveMsg];{user};$username[]];{mention};<@$authorID>];{discrim};$discriminator[]];{members};$membersCount[]];{server};$serverName[$guildID]]];true;**$tag[]** Left the server.]]

  
  $onlyIf[$getServerVar[leaveChannel]!=undefined;]
`})
bot.onLeave()


// <----Space Commands---->
bot.SpaceCommand({
  name: "pingforprefix",
  code: `
Prefix:  **\`$getServerVar[prefix]\`**
Set custom prefix with:  **$getServerVar[prefix]setprefix <newPrefix>**
  $onlyIf[$message[2]==;]
  $onlyIfMessageContains[<@$client[id]>;<@!$client[id]>;]
  `
})
bot.SpaceCommand({
  name: "afk response",
  code: `
  $deleteIn[10s]
<@$authorID> 
$username[$mentioned[1]]#$discriminator[$mentioned[1]] is afk - **$replaceText[$getUserVar[afkReason;$mentioned[1]];@;]**

      $onlyIf[$getUserVar[afk;$mentioned[1]]==on;]
      $onlyIf[$mentioned[1]!=$authorID;]
      $onlyIf[$mentioned[1]!=;]
  `
})
bot.SpaceCommand({
  name: "afk return",
  code: `
  $deleteIn[10s]
<@$authorID> welcome back! You're no longer afk
      $setUserVar[afk;DISABLED]
          $onlyIf[$getUserVar[afk]==on;]
  `
})

bot.ExecutableCommand({
  name: "leavechannelOFF",
  code: `**Leave logs have been disabled!**
  $setServerVar[leaveChannel;undefined]
`})

bot.ExecutableCommand({
  name: "joinchannelOFF",
  code: `**Join logs have been disabled!**
  $setServerVar[joinChannel;undefined]
`})

// <----Awaits---->
bot.AwaitedCommand({
  name: "yes",
  code: `
  $setServerVar[arg1;None] $setServerVar[arg2;None] $setServerVar[arg3;None]
  $setServerVar[$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==join];true;joinChannel];false;$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==leave];true;leaveChannel];false;$toLowercase[$getServerVar[arg2]]]];$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==join];true;undefined];false;$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==leave];true;undefined];false;$toLowercase[$getServerVar[arg3]]]]]
  
  $setServerVar[$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==join];true;joinColor];false;$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==leave];true;leaveColor];false;$toLowercase[$getServerVar[arg2]]]];$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==join];true;undefined];false;$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==leave];true;undefined];false;$toLowercase[$getServerVar[arg3]]]]]
  
  $setServerVar[$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==join];true;joinMsg];false;$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==leave];true;leaveMsg];false;$toLowercase[$getServerVar[arg2]]]];$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==join];true;undefined];false;$replaceText[$replaceText[$checkCondition[$toLowercase[$getServerVar[arg2]]==leave];true;undefined];false;$toLowercase[$getServerVar[arg3]]]]]
  
**<@$getServerVar[arg1]> has switched \`$toLowercase[$getServerVar[arg2]]\` \`$toLowercase[$getServerVar[arg3]]\`**
`})


bot.AwaitedCommand({
  name: "no",
  code: `$setServerVar[arg1;None] $setServerVar[arg2;None] $setServerVar[arg3;None]
**<@$getServerVar[arg2]> $toUppercase[$getServerVar[arg1]] remains untouched**
  `
})
// Nickname changes_down
bot.AwaitedCommand({
  name: "Hoisting",
  code: `$setServerVar[arg1;None] $setServerVar[arg2;None]
<@$getServerVar[arg2]> changed $username[$getServerVar[arg1]]#$discriminator[$getServerVar[arg1]]'s nickname to **Hoisting** for having a Hoisted username!

$setNickname[$getServerVar[arg1];Hoisting]
  `
})
bot.AwaitedCommand({
  name: "unmentionable",
  code: `$setServerVar[arg1;None] $setServerVar[arg2;None]
<@$getServerVar[arg2]> changed **$username[$getServerVar[arg1]]#$discriminator[$getServerVar[arg1]]**'s nickname to **unmentionable** for having an unmentionable username!

$setNickname[$getServerVar[arg1];unmentionable]
  `
})
bot.AwaitedCommand({
  name: "randomname",
  code: `$setServerVar[arg1;None] $setServerVar[arg2;None]

<@$getServerVar[arg2]> chose a random nickname for **$username[$getServerVar[arg1]]#$discriminator[$getServerVar[arg1]]** ($randomText[Butternut;Blimpie;Baldie;Fun Size;Inchworm;Dingleberry;Ace;Amiga;Amigo;Amour;Babs;Backbone;Bacon;Bambino;Bean;Boo;Braveheart;Brown;Bub;Bubba;Bubble;Bubbles;Buds;Bug;Butt;Buttercup;Butterfinger;Butternut;Catwoman;Chain;Chili;Chiquita;Chubs;Coach;Coke;Colonel;Conductor;Dally;Diesel;Dilly;Dimples;Dimpling;Dinosaur;Dirty;Doc;Fellow;First;Focker;Frankfurter;Frauline;Freak;French;Frodo;Frogger;Fry;Fury;Gams;General;Genius;Giggles;Ginger;Golden;Goldilocks;Goon;Goonie;Graham;Guy;Harry;Harry;Hawk;Hot;Huggie;Hulk;Junior;Kitty;Ladybug;Lefty;Lovey;Lulu;Man;Marshmallow;Mate;Me;Mini;Muffin;Music;Numbers;Pebbles;Peep;Pepper;Pickles;Potter;Princess;Psycho;Punk;Queenie;Rabbit;Rambo;Redbull;Senior;Senorita;Shrinkwrap;Smarty;Snow;Snuggles;Sour;Spicy;Spud;Starbuck;Stud;Sugar;Sunny;Superman;Sweet;T - Dawg;Tater;Teeny;Thighs;Thunder;Turkey;White;Zero])

$setNickname[$getServerVar[arg1];$randomText[Butternut;Blimpie;Baldie;Fun Size;Inchworm;Dingleberry;Ace;Amiga;Amigo;Amour;Babs;Backbone;Bacon;Bambino;Bean;Boo;Braveheart;Brown;Bub;Bubba;Bubble;Bubbles;Buds;Bug;Butt;Buttercup;Butterfinger;Butternut;Catwoman;Chain;Chili;Chiquita;Chubs;Coach;Coke;Colonel;Conductor;Dally;Diesel;Dilly;Dimples;Dimpling;Dinosaur;Dirty;Doc;Fellow;First;Focker;Frankfurter;Frauline;Freak;French;Frodo;Frogger;Fry;Fury;Gams;General;Genius;Giggles;Ginger;Golden;Goldilocks;Goon;Goonie;Graham;Guy;Harry;Harry;Hawk;Hot;Huggie;Hulk;Junior;Kitty;Ladybug;Lefty;Lovey;Lulu;Man;Marshmallow;Mate;Me;Mini;Muffin;Music;Numbers;Pebbles;Peep;Pepper;Pickles;Potter;Princess;Psycho;Punk;Queenie;Rabbit;Rambo;Redbull;Senior;Senorita;Shrinkwrap;Smarty;Snow;Snuggles;Sour;Spicy;Spud;Starbuck;Stud;Sugar;Sunny;Superman;Sweet;T - Dawg;Tater;Teeny;Thighs;Thunder;Turkey;White;Zero]]
  `
})
bot.AwaitedCommand({
  name: "nonick",
  code: `$setServerVar[arg1;None] $setServerVar[arg2;None]
<@$getServerVar[arg2]> decided to leave **$username[$getServerVar[arg1]]#$discriminator[$getServerVar[arg1]]'s** nickname alone.
  `
})
bot.AwaitedCommand({
  name: "takenick",
  code: `$setServerVar[arg1;None] $setServerVar[arg2;None]
<@$getServerVar[arg2]> removed **$username[$getServerVar[arg1]]#$discriminator[$getServerVar[arg1]]**'s nickname.

$setNickname[$getServerVar[arg1];$username[$getServerVar[arg1]]]
  `
})
bot.AwaitedCommand({
  name: "polloff",
  code: `$setServerVar[arg1;None] 
  Polls in **$serverName[$guildID]** has been disabled by <@$getServerVar[arg1]>

  $setServerVar[poll;None]
`
})


// <----Error Executables---->
bot.ExecutableCommand({
  name: "youtried",
  code: `https://ci.memecdn.com/2006703.gif
  $cooldown[10s;]
  `
})



// Selfrole Help
bot.ExecutableCommand({
  name: "selfroleadd",
  code: `$author[Permission required: Manage Roles]
  $title[__Cmd Info: Selfrole-add__]
  $color[RANDOM]
  $description[
Add a selfrole to the selfroles panel to be given or taken freefully by members in the server.
$addField[Usage examples:;
$getServerVar[prefix]selfrole-add 1 blue
$getServerVar[prefix]selfrole-add 2 @Blue
$getServerVar[prefix]selfrole-add 3 010101010101010101010

TIP: *That's obvs not a real role ID and character case does not matter when typing the role name, just make sure you type the selfrole slot number first*
]
$addField[$getServerVar[prefix]selfrole-add <slot#> <role>;
\`<slot>\` = The slot number you want to set the selfrole at.
\`<role>\` = The role you want to set to the selfrole slot. Can use role name, ID, or @mention
]
$addField[Aliases:;
$getServerVar[prefix]selfrole-add
$getServerVar[prefix]sr-add
$getServerVar[prefix]sr-a]
  ]
`
})
bot.ExecutableCommand({
  name: "selfroleget",
  code: `$author[Permission required: Send Messages]
  $title[__Cmd Info: Selfrole-get__]
  $color[RANDOM]
  $description[
Get a selfrole from the selfrole panel by typing the selfrole slot number next to the valid selfrole.
$addField[Usage examples:;
$getServerVar[prefix]selfrole-get 1
$getServerVar[prefix]selfrole-get 2
$getServerVar[prefix]selfrole-get 3

TIP: *That's obvs not a real role ID and character case does not matter when typing the role name, just make sure you type the selfrole slot number first*
]
$addField[$getServerVar[prefix]selfrole-get <slot#>;
\`<slot>\` = Type the selfrole slot number after the command for the role you want to have
]
$addField[Aliases:;
$getServerVar[prefix]selfrole-get
$getServerVar[prefix]sr-get
$getServerVar[prefix]sr-g]

  $addField[Status:;
$replaceText[$replaceText[$getServerVar[selfroles];on;✅];off;❌] $replaceText[$replaceText[$getServerVar[selfroles];on;Enabled];off;\`$getServerVar[prefix]switch selfroles on\`]]
  ]
`
})
bot.ExecutableCommand({
  name: "selfroles",
  code: `$author[Permission required: Send Messages]
  $title[__Cmd Info: Selfroles__]
  $color[RANDOM]
  $description[
Return the entire selfrole panel
$addField[Usage examples:;
Just type the command or alias
]
$addField[$getServerVar[prefix]selfroles;
Just type the command or alias
]
$addField[Aliases:;
$getServerVar[prefix]selfroles
$getServerVar[prefix]selfrole
$getServerVar[prefix]sr]
  ]
`
})
bot.ExecutableCommand({
  name: "selfroleremove",
  code: `$author[Permission required: Manage Roles]
  $title[__Cmd Info: Selfrole-remove__]
  $color[RANDOM]
  $description[
Remove a selfrole from the selfrole panel by typing the number next to the selfrole you want to remove. Must be a number with a valid selfrole!
$addField[Usage examples:;
$getServerVar[prefix]selfrole-remove 1
$getServerVar[prefix]selfrole-remove 2
$getServerVar[prefix]selfrole-remove 3
]
$addField[$getServerVar[prefix]selfrole-remove <slot#>;
\`<slot>\` = Type the selfrole slot number after the command for the role you want to remove from the selfroles panel.
]
$addField[Aliases:;
$getServerVar[prefix]selfrole-remove
$getServerVar[prefix]sr-remove
$getServerVar[prefix]sr-r]
  ]
`
})
bot.ExecutableCommand({
  name: "selfroletake",
  code: `$author[Permission required: Send Messages]
  $title[__Cmd Info: Selfrole-take__]
  $color[RANDOM]
  $description[
Remove a selfrole from the selfroles panel by typing the selfrole slot number next to the valid selfrole.
$addField[Usage examples:;
$getServerVar[prefix]selfrole-take 1
$getServerVar[prefix]selfrole-take 2
$getServerVar[prefix]selfrole-take 3
]
$addField[$getServerVar[prefix]selfrole-take <slot#>;
\`<slot>\` = Type the selfrole slot number after the command for the role you want to take from the selfroles panel.
]
$addField[Aliases:;
$getServerVar[prefix]selfrole-take
$getServerVar[prefix]sr-take
$getServerVar[prefix]sr-t]

$addField[Status:;
$replaceText[$replaceText[$getServerVar[selfroles];on;✅];off;❌] $replaceText[$replaceText[$getServerVar[selfroles];on;Enabled];off;\`$getServerVar[prefix]switch selfroles on\`]]
  ]
`
})

bot.ExecutableCommand({
  name: "selfrolechannel",
  code: `$author[Permission required: Manage Channels]
  $title[__Cmd Info: Selfrole-channel__]
  $color[RANDOM]
  $description[
Assign or unnassign a channel for the give/take selfrole command traffic. Members can only give/take away thier selfroles while in the channel you assign.
$addField[Usage examples:;
$getServerVar[prefix]selfrole-channel off
$getServerVar[prefix]selfrole-channel bot-channel
$getServerVar[prefix]selfrole-channel #bot-channel
$getServerVar[prefix]selfrole-channel 0101010101010101001010

TIP: *That's obvs not a real channel ID and character case does not matter when typing the channel name*
]
$addField[$getServerVar[prefix]selfrole-take <slot#/off>;
\`<slot>\` = Type the selfrole slot number after the command for the role you want to take from the selfroles panel.
\`off\` = Type **off** to unassign the selfrole channel. This will allow members to use the command anywhere the bot can see the commands.]
$addField[Aliases:;
$getServerVar[prefix]selfrole-channel
$getServerVar[prefix]sr-channel
$getServerVar[prefix]sr-c]
  ]
`
})
bot.ExecutableCommand({
  name: "selfrolechanneloff",
  description: "Disables a selfrole channel so commands can be executed in any channel the bot can see the commands",
  code: `
**Selfrole channel removed! Selfrole give/take commands can be executed in any channel the bot can see the commands**
      $setServerVar[selfroleChannel;None]
  `
})
// Selfroles
bot.ExecutableCommand({
  name: "selfroleGetWhenNoChannelSet",
  description: "Give yourself a selfrole in this channel",
  code: `$setServerVar[arg1;None] $setServerVar[arg2;None]
  $title[Role Applied to $username[$getServerVar[arg1]]#$discriminator[$getServerVar[arg1]]]
  $thumbnail[$authorAvatar]
  $color[$getRoleColor[$getServerVar[$splitContent[$getServerVar[arg2];1;$getServerVar[arg2];role$getServerVar[arg2]]]]]
  $description[
  Role - <@&$getServerVar[$splitContent[$getServerVar[arg2];1;$getServerVar[arg2];role$getServerVar[arg2]]]>
  ]
  
      $giveRole[$getServerVar[arg1];$getServerVar[role$getServerVar[arg2]]]
  `
})
bot.ExecutableCommand({
  name: "selfroleTakeWhenNoChannelSet",
  description: "Take a selfrole away in this channel",
  code: `$setServerVar[arg1;None] $setServerVar[arg2;None]
  $title[Role Removed from $username[$getServerVar[arg1]]#$discriminator[$getServerVar[arg1]]]
  $thumbnail[$authorAvatar]
  $color[$getRoleColor[$getServerVar[$splitContent[$getServerVar[arg2];1;$getServerVar[arg2];role$getServerVar[arg2]]]]]
  $description[
  Role - <@&$getServerVar[$splitContent[$getServerVar[arg2];1;$getServerVar[arg2];role$getServerVar[arg2]]]>
  ]
  
  $takeRole[$getServerVar[arg1];$getServerVar[role$getServerVar[arg2]]]

`})


bot.ExecutableCommand({
  name: "verifyLogger",
  code: `
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Verification logs]
$description[
  {hyper:Jump to message:https://discord.com/channels/$guildID/$getServerVar[t1]/$getServerVar[t2]}

  $addField[Account Created:;
\`Date\`: $creationDate[$authorID]
\`Age\`: $creationTime[$authorID]]

  $addField[Time spent unverified:;
$creationTime[$authorID;member]]

  $addField[Strikes:;
$replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];true;\`Autokick disabled\`];false;$getUserVar[kickstrikes]/$getServerVar[totalkickstrikes]]]

  $addField[Location:;
<#$getServerVar[t1]> ($getServerVar[t1])]

  $addField[Verified:;
<@$authorID> ($authorID)]
]
$footer[Verified with code: $getServerVar[t3]]

$useChannel[$getServerVar[verifylogchannel]]

  $onlyIf[$getServerVar[t1]==$getServerVar[verifychannel];]
  $onlyIf[$getServerVar[verifychannel]!=undefined;]
  $onlyIf[$getServerVar[verifyrole]!=undefined;]
  $onlyIf[$getServerVar[verifylogchannel]!=undefined;]
`})

bot.SpaceCommand({
  name: "Try-code",
  description: "Checks if security code is correct, gives error if it's not. 5 second cooldown. When code is correct, bot will give the verified role to the user",
  code: `
  $onlyIf[$message[]!=$getUserVar[verifycode];{execute:verifyLogger}]
$channelSendMessage[$channelID[];
{title:ID: $authorID}
{thumbnail:$authorAvatar[webp;true;512]}
{description:Verified: <@$authorID>, Welcome to $serverName[$guildID]!}
{color:RANDOM}]

$giveRole[$authorID;$getServerVar[verifyrole]]

$onlyIf[$message[]==$getUserVar[verifycode];{execute:addKickStrike}]
$onlyIf[$getUserVar[kickstrikes]!=$sub[$getServerVar[totalkickstrikes];1];{execute:autoKick}]

$setServerVar[t1;$channelID[]]
$setServerVar[t2;$messageID]
$setServerVar[t3;$message[]]

$cooldown[5s;]
$onlyIf[$checkContains[$message[];$getServerVar[prefix]code;$getServerVar[prefix] code]!=true;]

$onlyIf[$getUserVar[verifycode]!=undefined;]
  $onlyIf[$hasRole[$authorID;$getServerVar[verifyrole]]!=true;]
  $onlyIf[$channelID[]==$getServerVar[verifychannel];]
  $onlyIf[$getServerVar[verifychannel]!=undefined;]
  $onlyIf[$getServerVar[verifyrole]!=undefined;]
`})

bot.ExecutableCommand({
  name: "addKickStrike",
  description: "Adds a strike to get kicked",
  code: `
  $color[FF0000]
  $title[Incorrect, try again!]
  $description[
<@$authorID> **Auto-Kick is enabled! | $getUserVar[kickstrikes]/$getServerVar[totalkickstrikes] strikes!**

**$sub[$getServerVar[totalkickstrikes];$getUserVar[kickstrikes]]** chances before being autokicked, Just type your code!

You can type \`$getServerVar[prefix]code\` for a *new* code!

> Your Code: **$getUserVar[verifycode]**
]

$setUserVar[kickstrikes;$sum[$getUserVar[kickstrikes];1]]
$onlyIf[$getServerVar[totalkickstrikes]!=undefined;
{color:FF0000}
{title:Incorrect, try again!}
{description:<@$authorID> **Incorrect code!** 5 second cooldown.\n\nYou can type \`$getServerVar[prefix]code\` for a *new* code!}
{field:Your code:> **$getUserVar[verifycode]**}]
`})

bot.ExecutableCommand({
  name: "autoKick",
  description: "Auto kicks the user (if enabled) for 'X' amount of false attempts",
  code: `
  $kick[$authorID;Auto kicked for $getServerVar[totalkickstrikes] invalid attempts]
  $setUserVar[kickstrikes;0]
  $setUserVar[verifycode;undefined]

  $channelSendMessage[$channelID[];
{color:FF0000}
{author:$authorID}
{title:$username[]#$discriminator[]}
{description:Kicked for **$sum[$getUserVar[kickstrikes];1]/$getServerVar[totalkickstrikes]** false verification code attempts}]

  $dm[$authorID]
You've been auto kicked from **$serverName[$guildID]** for submitting **$sum[$getUserVar[kickstrikes];1]/$getServerVar[totalkickstrikes]** false verification code attempts. You can rejoin and try again.
`})

bot.ExecutableCommand({
  name: "disableLogChannel",
  code: `
  $setServerVar[verifylogchannel;undefined]
Verification Logs have been disabled! Bot will NOT log verified members in <#$getServerVar[verifylogchannel]> anymore.
`})

bot.ExecutableCommand({
  name: "disableChannel",
  code: `
  $setServerVar[verifychannel;undefined]
Verification Channel has been removed! New members will NOT receive anything from the bot in <#$getServerVar[verifychannel]> anymore.
`})

bot.ExecutableCommand({
  name: "disableRole",
  code: `
  $setServerVar[verifyrole;undefined]
Verification Role has been removed! 
`})

bot.ExecutableCommand({
  name: "disableAutoKick",
  code: `
  $setServerVar[totalkickstrikes;undefined]
Autokick has been disabled! Bot will NOT auto kick members for incorrect security code attempts!
`})

bot.AwaitedCommand({
  name: "disableAll",
  code: `
  $setServerVar[totalkickstrikes;undefined]
  $setServerVar[verifylogchannel;undefined]
  $setServerVar[verifyrole;undefined]
  $setServerVar[verifychannel;undefined]

Verification configuration has been completely disabled! See \`$getServerVar[prefix]config\`
`})
