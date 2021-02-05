module.exports = ({
    name: "selfroles",
    description: "See the panel of server Selfroles if any are set",
    aliases: ["sr", "selfrole"],
    code: `
    $author[$serverName[$guildID];$serverIcon]
    $title[Server Selfroles]
    $thumbnail[$serverIcon]
    $color[RANDOM]
$description[
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
$footer[$serverName[$guildID];$serverIcon]
    `
});