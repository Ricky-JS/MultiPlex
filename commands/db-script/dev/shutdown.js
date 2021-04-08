module.exports = ({
name: "shutdown",
code: `
$djsEval[process.exit()]
$replyIn[2s]
$djsEval[message.channel.send('Shutting Down..')]
Shutting Down..

$onlyIf[$getVar[bypassdevs;$authorID]==true;**:x: Not Authorized!**
]`});