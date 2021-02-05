module.exports = ({
    name: "getblacklist",
    aliases: ["gbl"],
    code: `
    $replaceText[$replaceText[$checkCondition[$getBlackList[$message[1]]==];true;No $message[1] blacklisted from the bot];false;$getBlackList[$message[1]]]

    $onlyIfMessageContains[users;servers;Type either **servers** or **users** to get the list]

    $onlyForUsers[$getVar[dev1];$getVar[dev2];**Developer command**]

    `
  });