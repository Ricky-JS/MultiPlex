module.exports = ({
    name: "owner",
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
    `});