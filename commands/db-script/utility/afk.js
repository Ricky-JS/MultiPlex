module.exports = ({
    name: "afk",
    description: "Need to go? Here's a nice little afk command to alert your buddies!",
    usage: "m?afk <optional-reason>",
    code: `
    <@$authorID> you went AFK! - **$replaceText[$replaceText[$checkCondition[$message[]==];true;I'm unavailable right now, be back later];false;$replaceText[$message[];@;]]**

    $setUserVar[afkReason;$replaceText[$replaceText[$checkCondition[$message[]==];true;I'm unavailable right now, be back later];false;$message[]]]
    $setUserVar[afk;on]
    $onlyIf[$checkCondition[$mentionedRoles[1]!=]!=true;Don't mention roles in your afk response]
    $onlyIf[$checkCondition[$mentioned[1]!=]!=true;Don't mention users in your afk response]
    `
});