module.exports = ({
  name: "poll",
  description: "Makes a poll",
  code: `
$deletecommand[0.1s]
$title[Poll]
$thumbnail[$serverIcon]
$color[3389e6]
$description[$message[]]
$footer[Thank you for your feedback!;$serverIcon]
$addReactions[👍;👎]
$channelSendMessage[$channelID[];**<@$authorID> Your poll was sent to <#$getServerVar[poll]>!**]
    $useChannel[$getServerVar[poll]]

    $onlyIf[$message[1]!=off;**Invalid input. To disable, use: \`$getServerVar[prefix]poll-off\`**]
    $onlyIf[$message[]!=;**Don't leave it blank! Type something after the command.**]
    $onlyIf[$getServerVar[poll]!=None;**No poll channel is setup yet, use \`$getServerVar[prefix]poll-channel\` to get started**]
    $onlyPerms[managechannels;**Bot is missing \`{perms}\` permission**]
    $onlyPerms[managechannels;**You're missing \`{perms}\` permission**]
`
});