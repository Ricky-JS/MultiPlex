module.exports = ({
    name: "find",
    description: "Find a ticket by a user",
    usage: "e?find <user>",
    code: `
    $editIn[500ms;<a:loading:793734232349868033> Gathering Information;$replaceText[$replaceText[$channelExists[$getUserVar[ticketchannel;$findUser[$message[1]]]];true;**$tag[$findUser[$message[1]]]**'s Ticket: <#$getUserVar[ticketchannel;$findUser[$message[1]]]>];undefined;**tag[$findUser[$message[1]]]** doesn't have an open ticket.]]
    
    <a:loading:793734232349868033> Searching...
    
    
    $onlyIf[$channelExists[$getUserVar[archivechannel;$findUser[$message[1]]]]!=true;{execute:archive-find}]
    
    
    $onlyIf[$isBot[$findUser[$message[1]]]==false;**$tag[$findUser[$message[1]]]** is a bot, They cannot have a ticket.]
    $onlyIf[$userExists[$findUser[$message[1]]]==true;Cannot find that user!]
    $onlyIf[$message[1]!=;Mention a username/id/mention do SOMETHING!]
  
  
   $onlyIf[$guildID==792683382563799060;{title:Tickets can only be used in the Support Server. They will be set for Public use soon!}{color:RED}]
    `});