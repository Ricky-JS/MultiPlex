module.exports = ({
name: "restart",
aliases: ["reboot"],
code: `
$exec[node index.js]

**WARNING:** The bot is now in the process of rebooting. Please allow up-to 10 seconds for all systems to start up!


$onlyIf[$getVar[bypassdevs;$authorID]==true;**:x: Not Authorized!**
]`})