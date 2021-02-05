const {mode} = require('C:/Users/fredd/OneDrive/Documents/Eyaqtron/Eyaqtron/config/dev.json');

module.exports = ({
name: "coinflip",
code: `
$title[Okay, I'm flipping]
$description[and the coin lands on $randomText[<:coin:793734454257647617>**Heads**;<:coin:793734454257647617>**Tails**]]
$color[$random[00000;999999]]


${mode}
`});