let dev = "$replaceText[$replaceText[$message[1];add;true];remove;false]";


module.exports = ({
    name: "bypass",
    code: `

**Success!** | $tag[$findUser[$message[2]]] is $replaceText[$replaceText[${dev};true;now Authorized!];false;no longer Authorized!]

$setVar[bypassdevs;${dev};$findUser[$message[2]]]

$onlyIf[$getVar[bypassdevs;$findUser[$message[2]]]!=${dev};User is $replaceText[$replaceText[${dev};true;already Authorized];false;not Authorized!]]

$onlyIf[$findUser[$message[2]]!=undefined;Error!]
$onlyIf[$checkContains[$message[1];add;remove]==true;Error!]

$onlyForUsers[$getVar[dev1];$getVar[dev2];**Only Ricky can use this!**]
    `
  });
