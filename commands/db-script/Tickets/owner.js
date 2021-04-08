module.exports = ({
    name: "owner",
    description: "Changes the ticket owner",
    usage: "e?owner <user>",
    code: `
    $onlyIf[1==2;{execute:new-owner}]
    
    **$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** is now the owner of this ticket!
    $setChannelVar[ticketowner;$findUser[$message[1]];$getUserVar[ticketchannel;$findUser[$message[1]]]]
    $setUserVar[ticketchannel;$channelID[];$findUser[$message[1]]]
    $setUserVar[ticketchannel;767488482238922782;$getChannelVar[ticketowner]]
    $onlyIf[$isBot[$findUser[$message[1]]]==false;:x: Bots cannot be owners!]
    $onlyIf[$userExists[$findUser[$message[1]]]==true;:x: Not a valid user!]
    $onlyIf[$channelID[]==$getUserVar[ticketchannel;$getChannelVar[ticketowner]];This isn't a ticket]
    $onlyIf[$getChannelVar[archived]==false;:x: Ticket is archived and cannot recieve an owner.]
    $onlyIf[$channelExists[$getUserVar[ticketchannel;$findUser[$message[1]]]]!=true;User already has a ticket open: <#$getUserVar[ticketchannel;$findUser[$message[1]]]>.]
    
    $onlyIf[$findUser[$message[1]]!=$getChannelVar[ticketowner];User already owns this ticket.]
    
    
    $suppressErrors[:x: An error occurred.]
  
  
   $onlyIf[$guildID==792683382563799060;{title:Tickets can only be used in the Support Server. They will be set for Public use soon!}{color:RED}]
    `});