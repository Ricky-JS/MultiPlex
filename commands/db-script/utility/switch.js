module.exports = ({
    name: "switch",
    code: `
**<@$authorID>, Are you sure you want to switch \`$toLowercase[$message[1]]\` \`$toLowercase[$message[2]]\`?**
Type \`yes\` to confirm. 15 seconds.

$awaitMessages[yes;$authorID;15s;yes;Ran out of time]
$setServerVar[arg1;$authorID]
$setServerVar[arg2;$message[1]]
$setServerVar[arg3;$message[2]]

$cooldown[8s;Cooldown for {time}]

$onlyIf[$checkContains[$toLowercase[$message[1]];join;leave]-$checkCondition[$toLowercase[$message[2]]==on]!=true-true;Can only switch off the join/leave configuration. Not on.]

$onlyIf[$checkContains[$toLowercase[$message[2]];on;off]==true;{title:Arg 3 ERROR: \`$message[2]\` is an invalid input}
{field:Categories:nsfw, selfroles, join, leave}
{field:TIP:</> is not needed. <> just means its a mandatory argument}
{field:$getServerVar[prefix]switch <category> <on/off>:Example- \`$getServerVar[prefix]switch selfroles on\`}
{footer:More to come} {color:RED}]

$onlyIf[$message[2]!=;
{title:Arg 2 ERROR: Cannot be left blank!}
{field:$getServerVar[prefix]switch <category> <on/off>:Example-  \`$getServerVar[prefix]switch selfroles on\`}
{field:Categories:nsfw, selfroles, join, leave}
{footer:More to come} {color:RED}]


$onlyIf[$checkContains[$toLowercase[$message[1]];selfroles;join;leave]==true;
{title:Arg 1 ERROR: \`$message[1]\` is an invalid input}
{field:$getServerVar[prefix]switch <category> <on/off>:Example- \`$getServerVar[prefix]switch selfroles on\`}
{field:Categories:nsfw, selfroles, join, leave}
{footer:More to come} {color:RED}]

$onlyIf[$message[1]!=;
{title:Arg 0 ERROR: Missing all fields!}
{field:$getServerVar[prefix]switch <category> <on/off>:Example- \`$getServerVar[prefix]switch selfroles on\`}
{field:Categories:selfroles, join, leave}
{footer:More to come} {color:RED}]

$onlyPerms[manageserver;**You're missing manage server permission!**]
`
});