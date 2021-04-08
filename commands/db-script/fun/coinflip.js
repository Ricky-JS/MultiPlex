module.exports = ({
name: "coinflip",
description: "Having trouble deciding? You can do a CoinFlip!",
usage: "m?coinflp <choice>",
code: `
$editIn[500ms;{title:Coin Flip}{description:** **}{field:You Chose:$toLowercase[$message[1]]:yes}{field:I Picked:$randomText[Heads;Tails]:yes}{color:RANDOM}]


$title[Okay, I'm flipping!]
$color[RANDOM]




$onlyIf[$checkContains[$toLowercase[$message[1]];heads;tails]==true;{title::x: Please choose Heads or Tails}{color:RED}]
`});