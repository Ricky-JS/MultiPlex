module.exports = ({
name: "update", 
code: `
Set version to **$message[]**!!
$setVar[version;$message[]]
$onlyIf[$message[1]!=;**:x: Provide a Update!**]

$onlyIf[$getVar[bypassdevs;$authorID]==true;**:x: Not Authorized!**]
`});