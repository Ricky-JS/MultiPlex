module.exports = ({
    name: "emote",
    aliases: ["emoji"],
    code:`
    $color[RANDOM]
    $author[Name - $messageSlice[>1]]
    $title[ID - $findEmote[$messageSlice[>1]]]
    $image[https://cdn.discordapp.com/emojis/$findEmote[$messageSlice[>1]].$message[1]]

    $onlyIf[$findEmote[$messageSlice[>1]]!=false;**That's not an emoji. Type the *name* of an emoji from this server only**]
    $onlyIfMessageContains[gif;png;**Please specify the emoji as a \`gif\` or \`png\`, then type the name of an emoji from this server!**]
    $onlyIf[$message[]!=;**Please specify the emoji as a \`gif\` or \`png\`, then type the name of an emoji from this server!**]


`})