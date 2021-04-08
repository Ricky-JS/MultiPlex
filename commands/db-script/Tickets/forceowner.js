module.exports = ({
    name: "force-owner",
    aliases: ["f-owner", "force-o" , "f-o"],
    description: "Forces a user to be Ticket Owner",
    usage: "e?force-owner <user>",
    code: `
    $onlyIf[1==2;{execute:f-owner}]
    
    **$tag[$findUser[$message[1]]]** is now the owner of this ticket!
    $setChannelVar[ticketowner;$findUser[$message[1]];$getUserVar[ticketchannel;$findUser[$message[1]]]]
    $setUserVar[ticketchannel;$channelID[];$findUser[$message[1]]]
    $setUserVar[ticketchannel;767488482238922782;$getChannelVar[ticketowner]]
    $onlyIf[$userExists[$findUser[$message[1]]]==true;:x: Not a valid user!]
    
    $onlyIf[$getChannelVar[archived]==false;:x: Ticket is archived and cannot recieve an owner.]
    
    $suppressErrors[:x: An error occurred.]
    $onlyForUsers[$ownerID;:x: This command **FORCES** the user to be the owner, without limiters. So only **The Server Owner** can use this command.]
    
  
  
   $onlyIf[$guildID==792683382563799060;{title:Tickets can only be used in the Support Server. They will be set for Public use soon!}{color:RED}]
    `});