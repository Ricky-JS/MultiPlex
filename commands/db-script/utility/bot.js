const {Status} = require('../../../config/emojis.json')

module.exports = ({
    name: "bot",
    description: "Get some information about the bot",
    usage: "m?bot",
    code: `$title[Bot Information]
    $color[$getRoleColor[$highestRole[$client[id]]]]
    $thumbnail[$client[avatarurl]]
    $description[
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$status[$client[id]];dnd;${Status.DND}
  ];online;${Status.Online}
  ];invisible;${Status.Offline}];idle;${Status.Restarting}
  ];streaming;${Status.Streaming}
  ];offline;${Status.Offline}] {hyper:Invite the bot here:https://discord.com/api/oauth2/authorize?client_id=$client[id]&permissions=2147483639&scope=bot}
  
  $addField[__Botlists listed on__;
{hyper:Cyclone Bot List:https://cyclonebots.xyz/bots/792692510480138300/}
{hyper:Botrix:https://botrix.cc/bots/792692510480138300}
]
  
  $addField[__Other__;
Version: $getVar[version]
Created $creationTime[$client[id]] ago
$creationDate[$client[id]]
  ]
  
  $addField[__Users__;
$numberSeparator[$allMembersCount;,]
  ]
  
  $addField[__Server Count__;
$serverCount 
  ]
  
  $addField[__RAM usage__;
$memoryMB
  ]
      
  $addField[__Status__;
$client[status]
  ]
  
  $addField[__Developer__;
$tag[$getVar[dev1]]
  ]
  
  $addField[__Bot__;
$tag[$client[id]]
$client[id]
  ]
  ]
    `
  });