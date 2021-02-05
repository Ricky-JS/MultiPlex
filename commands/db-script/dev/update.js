module.exports = ({
name: "update", 
code: `
Set version to **$message[]**!!
$setVar[version;$message[]]
$onlyIf[$message[1]!=;**:x: Provide a Update!**]
$onlyForUsers[$getVar[dev1];$getVar[dev2];**Developer command**]
`});