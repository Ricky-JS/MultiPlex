const {mode} = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json');

module.exports = ({
name: "support",
code: `
$title[Need Help?]
$description[We are so sorry you need help with our bot.
Here are a few tips:

**Use $getServerVar[prefix]help**
Our help command will give you more info on Eyactron!

**Support Server**
If you really feel you need more help. Contact a dev in our {hyper:Support Server:https://discord.gg/RPqNRHsuRk}]
$footer[Eyaqtron | Support;$authorAvatar[webp;true;1024]]


${mode}
`});