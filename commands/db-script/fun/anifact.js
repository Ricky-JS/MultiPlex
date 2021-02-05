module.exports = ({
    name: "animalfact",
    aliases: ["anifact", "af"],
    code: `
    $title[Cool $toLowercase[$message[1]] fact!]
    $color[$getRoleColor[$highestRole[$authorID]]]
    $description[$api[https://some-random-api.ml/facts/$message[1];fact]]
    $image[$api[https://some-random-api.ml/img/$message[1];link]]

      $onlyIfMessageContains[cat;dog;whale;fox;panda;racoon;koala;kangaroo;{title:Usage:} {description:$getServerVar[prefix]anifact \`animal\`} {footer:Types: cat ,dog, fox, panda, racoon, koala, kangaroo, whale} {color:RED}]

      $cooldown[10s;Relax for {time}]

    `
});