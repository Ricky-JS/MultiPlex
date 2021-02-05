module.exports = ({
    name: "joke",
    code: `
    $title[Here's a joke for you]
    $color[$getRoleColor[$highestRole[$authorID]]]
    $description[$api[https://some-random-api.ml/joke;joke]]

    $suppressErrors[Something happened while fetching your joke, wait a few seconds and try again]

    `
  });