module.exports = ({
    name: "policy",
    code: `
    $thumbnail[$userAvatar[$client[id]]]
    $author[Eyaqtron]
    $title[Privacy Policy]
    $color[RED]

    $description[
        *Click here for the support server*

    $addField[6) If you store data, how can users have that data removed?;
Currently, the only data that is stored on a temporary/permanent basis are the objects in the \`switch\` command, but that data can easily be altered by the Server Owner or an Admin. This may change in the future and the Privacy Policy will be updated to fit the new conditions.
]

    $addField[5) How can users contact you if they have concerns about your bot?;
Joining the support server of course, is the easiest way to contact the developer about any questions or concerns you may have about the bot. The support server can be found inside the command name: \`help\`
]

    $addField[4) Other than Discord the company and the users of the bot on the Discord platform, who do we share the collected data with?;
We don't share any data outside the server the bot is in. In fact, all data is stored in the bots database and is not shared with anyone.
]

    $addField[3) How do you use the data?;
We'll temporarily use the bot to grab the proper IDs required for a command to work to manipulate objects in the server. Taking the \`switch\` command as an example, we'll use the ServerID to be able to switch on/off a module. This is important for *per guild* execution so users are not switching on/off other guilds modules.
]

    $addField[2) Why do you need the data?;
We use this data and information temporarily for setting variables and using the IDs needed for proper execution of some/most commands.
]

    $addField[1) What data do you collect, including but not limited to personal identifying information?;
Just simply user, role, channel and server IDs. The information in the \`ui\` command is not stored in the bot. Instead, is pulled to show the user information.
]
]
    `
})