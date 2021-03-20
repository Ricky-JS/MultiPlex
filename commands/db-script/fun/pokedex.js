module.exports = ({
    name: "pokedex",
    aliases: ["dex"],
    description: "Find some cool Pokedex!",
    usage: "m?pokedex <pokemon>",
    code: `
$thumbnail[$api[https://some-random-api.ml/pokedex?pokemon=$message[];sprites;animated]]
$color[ff0500]
    $author[Pokédex;https://pbs.twimg.com/profile_images/1870947834/pokedex1.gif]
    $title[No.$api[https://some-random-api.ml/pokedex?pokemon=$message[];id] - $toUppercase[$api[https://some-random-api.ml/pokedex?pokemon=$message[];name]]]

$description[
    $addField[Description;
$replaceText[$api[https://some-random-api.ml/pokedex?pokemon=$message[];description];undefined;*Error retrieving this information, try again sorry :frowning:*]
]

$addField[Other;
Height - $api[https://some-random-api.ml/pokedex?pokemon=$message[];height]
Weight - $api[https://some-random-api.ml/pokedex?pokemon=$message[];weight]
Base Exp - $replaceText[$api[https://some-random-api.ml/pokedex?pokemon=$message[];base_experience];—;Unknown]
Gender - $replaceText[$replaceText[$api[https://some-random-api.ml/pokedex?pokemon=$message[];gender];,; / ];—;Unknown]
Egg groups - $replaceText[$api[https://some-random-api.ml/pokedex?pokemon=$message[];egg_groups];,;, ]
]

$addField[Generation;
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$api[https://some-random-api.ml/pokedex?pokemon=$message[];generation];1;1st];2;2nd];3;3rd];4;4th];5;5th];6;6th];7;7th];8;8th]
]

$addField[Family;
Evo stage: $replaceText[$replaceText[$checkCondition[$api[https://some-random-api.ml/pokedex?pokemon=$message[];family;evolutionStage]==0];true;Doesn't Evolve];false;$api[https://some-random-api.ml/pokedex?pokemon=$message[];family;evolutionStage]]
Evo line: $replaceText[$replaceText[$checkCondition[$api[https://some-random-api.ml/pokedex?pokemon=$message[];family;evolutionLine]==];true;Doesn't Evolve];false;$replaceText[$api[https://some-random-api.ml/pokedex?pokemon=$message[];family;evolutionLine];,; -> ]]
]

$addField[Stats;
HP - $api[https://some-random-api.ml/pokedex?pokemon=$message[];stats;hp]
Attack - $api[https://some-random-api.ml/pokedex?pokemon=$message[];stats;attack]
Defense - $api[https://some-random-api.ml/pokedex?pokemon=$message[];stats;defense]
Sp-Atk - $api[https://some-random-api.ml/pokedex?pokemon=$message[];stats;sp_atk]
Sp-Def - $api[https://some-random-api.ml/pokedex?pokemon=$message[];stats;sp_def]
Speed - $api[https://some-random-api.ml/pokedex?pokemon=$message[];stats;speed]
Total - $api[https://some-random-api.ml/pokedex?pokemon=$message[];stats;total]
]

$addField[Abilities;
$replaceText[$api[https://some-random-api.ml/pokedex?pokemon=$message[];abilities];,; / ]
]

$addField[Species;
$replaceText[$api[https://some-random-api.ml/pokedex?pokemon=$message[];species];,; ]
]

$addField[Type;
$replaceText[$api[https://some-random-api.ml/pokedex?pokemon=$message[];type];,;, ]
]
]

$footer[Pokédex by some-random-api.ml]
$suppressErrors[Something happened. Maybe you typed the Pokémon name wrong? Try again]
$cooldown[15s;Relax, {time}]
$onlyIf[$message[]!=;Type a Pokémon name :)]
    `
});