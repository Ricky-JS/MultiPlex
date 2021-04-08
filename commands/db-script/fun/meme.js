module.exports = ({
name: "meme",
description: "Get some cool memes",
usgae: "m?meme",
code: `
$title[$api[https://meme-api.herokuapp.com/gimme;title]]
$image[$api[https://meme-api.herokuapp.com/gimme;url]]
$footer[Posted on r/$api[https://meme-api.herokuapp.com/gimme;subreddit] | $api[https://meme-api.herokuapp.com/gimme;ups] Upvotes]
`});