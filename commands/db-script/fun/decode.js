module.exports = ({
    name: "decode",
    description: "Decode a binary/base64 message!",
    usage: "m?decode <binary/base64> <code>",
    code: `
      $title[Decoded format - $message[1]]
      $color[$getRoleColor[$highestRole[$authorID]]]
        $description[$replaceText[$api[https://some-random-api.ml/$message[1]?decode=$messageSlice[>1];text];undefined;Code is not $message[1]]]
        
          $onlyIfMessageContains[binary;base64;{title:ERROR} {description:Usage: **$getServerVar[prefix]decode <binary/base64> <code>**} {color:RED}]

      `
});