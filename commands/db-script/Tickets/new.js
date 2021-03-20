module.exports = ({
    name: "new",
    description: "creates a new ticket",
    usage: "e?new",
    code: `
    $onlyIf[1==2;{execute:new-ticket}]
    
    $modifyChannelPerms[$channelID[ticket-$getVar[ticketnumber]];+viewchannel;+sendmessages;+readhistory;$authorID]
    $channelSendMessage[$channelID[];{title:Ticket Created!}{description:Your ticket has been created: <#$channelID[ticket-$getVar[ticketnumber]]>!}{footer:Ticket Successfully Created!}{color:RANDOM}]
    $setUserVar[ticketchannel;$channelID[ticket-$getVar[ticketnumber]];$authorID]
    $setChannelVar[ticketowner;$authorID;$channelID[ticket-$getVar[ticketnumber]]]
    $createChannel[ticket-$getVar[ticketnumber];text;794468067219472404]
    $setVar[ticketnumber;$sum[$getVar[ticketnumber];1]]
    $onlyIf[$channelExists[$getUserVar[ticketchannel]]!=true;:x: You already have a ticket open in <#$getUserVar[ticketchannel]>.]
    
    
    $onlyIf[$getVar[blacklist;$authorID]==false;:x: You've been blacklisted from using Eyaqtron Ticket System!]
 
 
 
 
 $onlyIf[$guildID==792683382563799060;{title:Tickets can only be used in the Support Server. They will be set for Public use soon!}{color:RED}]
    `});