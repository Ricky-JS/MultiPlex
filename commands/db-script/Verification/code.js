module.exports = ({
    name: "code",
    code: `
<@$authorID>
$color[$getVar[color]]
$author[Simply type your new security code!]
$title[$replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];false;Auto-Kick is enabled!];true;5 second cooldown!]]
$description[> **$random[100000;999999]**

$replaceText[$replaceText[$checkCondition[$getServerVar[totalkickstrikes]==undefined];false;**$sub[$getServerVar[totalkickstrikes];$getUserVar[kickstrikes]]** $replaceText[$replaceText[$checkCondition[$sub[$getServerVar[totalkickstrikes];$getUserVar[kickstrikes]]==1];true;more incorrect submission and you will be kicked!];false;attempts left!]];true;]
]
$footer[$getUserVar[kickstrikes]/$getServerVar[totalkickstrikes] attempted]

$setUserVar[verifycode;$random[100000;999999]]

$cooldown[5s;Cooldown, {time}]
$onlyIf[$channelID[]==$getServerVar[verifychannel];<@$authorID> That doesn't go here, use: <#$getServerVar[verifychannel]>!]
$onlyIf[$hasRole[$authorID;$getServerVar[verifyrole]]==false;You're already verified! This command is of no use to you.]
$onlyIf[$getServerVar[verifychannel]!=undefined;Verification system is disabled. This command is of no use right now.]
`})