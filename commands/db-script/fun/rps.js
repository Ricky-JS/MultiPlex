let bot = "$randomText[rock;paper;scissors]";

module.exports = ({
name: "rps",
description: "Play Rock, Paper, Scissors with MultiPlex :D",
usage: "m?rps <item>",
code: `
$onlyIf[$toLowercase[$message[1]]!=rock;{title:Rock Paper Scissors}
{description:**Lets see who won!**}
{color:RANDOM}
{field:$tag[$authorID] Selected:$toLowercase[$message[1]]:no}
{field:$tag[$client[id]] Selected:${bot}:no}
{field:🏆 Winner:$replaceText[$replaceText[$checkCondition[rock==${bot}];true;Tie];false;$replaceText[$replaceText[$checkCondition[paper==${bot}];true;$tag[$client[id]]];false;$replaceText[$replaceText[$checkCondition[scissors==${bot}];true;$tag[]];false;]]]}]

$onlyIf[$toLowercase[$message[1]]!=paper;{title:Rock Paper Scissors}
{description:**Lets see who won!**}
{color:RANDOM}
{field:$tag[$authorID] Selected:$toLowercase[$message[1]]:no}{field:$tag[$client[id]] Selected:${bot}:no}
{field:🏆 Winner:$replaceText[$replaceText[$checkCondition[paper==${bot}];true;Tie];false;$replaceText[$replaceText[$checkCondition[scissors==${bot}];true;$tag[$client[id]]];false;$replaceText[$replaceText[$checkCondition[rock==${bot}];true;$tag[]];false;]]]}]

$onlyIf[$toLowercase[$message[1]]!=scissors;{title:Rock Paper Scissors}
{description:**Lets see who won!**}
{color:RANDOM}
{field:$tag[$authorID] Selected:$toLowercase[$message[1]]:no}
{field:$tag[$client[id]] Selected:${bot}:no}
{field:🏆 Winner:$replaceText[$replaceText[$checkCondition[scissors==${bot}];true;Tie];false;$replaceText[$replaceText[$checkCondition[rock==${bot}];true;$tag[$client[id]]];false;$replaceText[$replaceText[$checkCondition[paper==${bot}];true;$tag[]];false;]]]}]

$onlyIf[$checkContains[$toLowercase[$message[1]];rock;paper;scissors]==true;{title:You're required to choose an item.}{description:Rock  |  Paper  |  Scissors\n \`\`\`$getServerVar[prefix]rps <item>\`\`\`}{color:RED}]


$suppressErrors[{title:That's not right?}{description:Something went wrong. If this continues, Try contacting my support team}{color:RED}]
`});