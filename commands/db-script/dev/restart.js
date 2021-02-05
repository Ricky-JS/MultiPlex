module.exports = ({
name: "restart",
aliases: ["reboot"],
code: `
$exec[node bot.js]

<a:loading:793734232349868033> Rebooting Server...

$onlyForUsers[$getVar[dev1];**Developer command**]
`})