module.exports = ({
    name: "emote",
    aliases: ["emoji"],
    description: "Get an emoji from name or ID (CANNOT USE RAW EMOJI)",
    usage: "m?emote <emoji>",
    code:`
$color[RANDOM]
  $author[$emoji[$findEmote[$message[]];name] - (ID: $emoji[$findEmote[$message[]];id])]
  $image[$emoji[$findEmote[$message[]];url]]

$onlyIf[$emoji[$findEmote[$message[]];isdeleted]==false;
{title:Failed to find that emoji}
{color:RED}]

$onlyIf[$findEmote[$message[]]!=undefined;
{title:Failed to find that emoji}
{color:RED}]

$onlyIf[$message[]!=;
{title:Input an emoji name or ID (CANNOT USE RAW EMOJI)}
{color:RED}]
`})