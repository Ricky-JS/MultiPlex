module.exports = ({
    name: "animequote",
    aliases: ["aq"],
    description: "Some quotes from animes!",
    usage: "m?animequote",
    code: `
    $color[$getRoleColor[$highestRole[$authorID]]]
    $author[Anime: $api[https://some-random-api.ml/animu/quote;anime]]
    $title[Character: $api[https://some-random-api.ml/animu/quote;characther]]
    $description[
$api[https://some-random-api.ml/animu/quote;sentence]
    ]
    $cooldown[10s;Relax for {time}]

    `
});