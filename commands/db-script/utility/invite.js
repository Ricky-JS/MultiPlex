module.exports = ({
    name: "invite",
    aliases: ["inv"],
    code: `
$thumbnail[$userAvatar[$client[id]]]
$color[$getRoleColor[$highestRole[$authorID]]]
 $title[invite me to your server]
 $description[1 - {hyper:Recommended Invite:https://discord.com/api/oauth2/authorize?client_id=792692510480138300&permissions=1043721463&scope=bot}

2 - {hyper:Administrator Invite:https://discord.com/api/oauth2/authorize?client_id=792692510480138300&permissions=8&scope=bot}

3 - {hyper:0 Perms Invite:https://discord.com/api/oauth2/authorize?client_id=792692510480138300&permissions=0&scope=bot}

Please report any bugs to the developer by using \`$getServerVar[prefix]bug\` so they can be fixed! :)]
  `
});