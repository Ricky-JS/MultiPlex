module.exports = ({
name: "shutdown",
code: `
$djsEval[process.exit()]
$replyIn[2s]
$djsEval[message.channel.send('Shutting Down..')]
Shutting Down..
$onlyForUsers[$getVar[dev1];$getVar[dev2];**Developer command**]
`});