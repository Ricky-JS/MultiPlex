module.exports = ({
    name: "ticket",
    description: "Get information on the Ticket Channel",
    usage: "e?ticket",
    code: `
    $sendWebhook[$getChannelVar[webhook];{title:Ticket Information}{description:
    Ticket Channel <#$channelID[]>
    
    Ticket Owner: $replaceText[<@$getChannelVar[ticketowner]>;<@759066490317438978>;No Owner] $replaceText[($getChannelVar[ticketowner]);(759066490317438978);]
    
    Ticket Number:  $replaceText[$channelName[$channelID[]];ticket-;]
    
    Ticket Created: $creationDate[$channelID[]] ($creationTime[$channelID[]] ago)}{footer:Ticket Information}{color:RANDOM}]
    $onlyIf[$channelID[]==$getUserVar[ticketchannel;$getChannelVar[ticketowner]];This isn't a ticket]
    
    $suppressErrors[:x: An error occurred.]
    
    $onlyIf[$getChannelVar[archived]==false;{execute:ticket-archive}]
    $onlyIf[$getVar[blacklist;$authorID]==false;:x: You've been blacklisted from using QAZAЯ Ticket System!]
  
  
  
   $onlyIf[$guildID==792683382563799060;{title:Tickets can only be used in the Support Server. They will be set for Public use soon!}{color:RED}]
    `});