module.exports = ({
    name: "notaticket",
    aliases: ["nticket", "notatick", "noticket"],
    description: "Did Eyaqtron make a mistake of marking a channel as a ticket? You can un-mark it using this command!",
    usage: "e?notaticket",
    code: `
    $onlyIf[1==2;{execute:no-ticket}]
    
    **Channel is no longer a ticket**
    
    $setChannelVar[ticketowner;UndefinedUser#0000;$channelID[]]
    $setUserVar[ticketchannel;Undefined;$getChannelVar[ticketowner]]
    
    $suppressErrors[:x: An error occurred.]
    $onlyForUsers[$ownerID;:x: Sorry, This command **FORCES** the channel to no longer be a ticket. So only **$tag[$ownerID]]** can use this command.]
 
 
  $onlyIf[$guildID==792683382563799060;{title:Tickets can only be used in the Support Server. They will be set for Public use soon!}{color:RED}]
    `});