const { Status, Other } = require('../../../config/emojis.json')


module.exports = ({
    name: "serverinfo",
    aliases: ["server", "guild", "guildinfo", "si", "gi"],
    description: "Gets info the the current Guild",
    usage: "m?serverinfo",
    code: `
    $title[Server information]
  $thumbnail[$serverIcon]
  $color[RANDOM]

  $description[
  $addField[$membersCount[] Members in total:;${Other.bots} $membersCount[bot] bots | ${Other.members} $membersCount[human] humans
${Status.Online} $membersCount[online] | ${Status.Restarting} $membersCount[idle] | ${Status.DND} $membersCount[dnd] | ${Status.Offline} $membersCount[offline]]
  $addField[Roles:;$roleCount roles]
  $addField[Boosts:;$replaceText[$replaceText[$checkCondition[$serverBoostCount==0];true;No boosts yet];false;$serverBoostCount]]
  $addField[Channel info:;$categoryCount categories / $channelCount channels]
  $addField[Created:;$creationDate[$guildID]
$creationTime[$guildID] ago]
  $addField[Region:;$region]
  $addField[Verification level:;$serverVerificationLvl]
  $addField[System channel:;$replaceText[<#$systemChannelID>;<#>;\`No System Channel\`] $replaceText[(\`$systemChannelID\`);(\`\`);]]
  $addField[Owner:;<@$ownerID> (\`$ownerID\`)]
  $addField[Server:;$serverName[$guildID] (\`$guildID\`)]
  ]
  `
});