module.exports = ({
    name: "encode",
    description: "Encode a binary/base64 message!",
    usage: "m?encode <binary/base64> <code>",
    code: `
      $title[Encoded format - $message[1]]
      $color[$getRoleColor[$highestRole[$authorID]]]
        $description[$replaceText[$api[https://some-random-api.ml/$message[1]$replaceText[$replaceText[$message[1];binary;?text];base64;?encode]=$messageSlice[>1];$message[1]];undefined;Invalid input, try again]]
      
        $onlyIfMessageContains[binary;base64;{title:ERROR} {description:Usage: **$getServerVar[prefix]encode <binary/base64> <code>**} {color:RED}]

      `
});