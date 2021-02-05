const { Status } = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/emojis.json')

module.exports = ({
    name: "bot",
    code: `$title[Bot Information]
    $color[$getRoleColor[$highestRole[$client[id]]]]
    $thumbnail[$client[avatarURL]]
    $description[
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$status[$client[id]];dnd;${Status.DND}
  ];online;${Status.Online}
  ];invisible;${Status.Offline}];idle;${Status.Restarting}
  ];streaming;${Status.Streaming}
  ];offline;${Status.Offline}] {hyper:Invite the bot here:https://discord.com/api/oauth2/authorize?client_id=792692510480138300&permissions=2147483639&scope=bot}
  
  $addField[__Botlists listed on__;
None
]
  
  $addField[__Other__;
Version: $getVar[version]
Created $creationTime[$client[id]] ago
$creationDate[$client[id]]
  ]
  
  $addField[__Uptime__;
$replaceText[$replaceText[$replaceText[$replaceText[$uptime;d;d, ];h;h, ];m;m, ];s;s, ]
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
  
  $addField[__Hosting__;
undefined  ]
    
  $addField[__Status__;
undefined
  ]
  
  $addField[__Developer__;
$tag[672215920558604332]
  ]
  
  $addField[__Bot__;
$client[name]#$client[discriminator]
$client[id]
  ]
  ]
    `
  });