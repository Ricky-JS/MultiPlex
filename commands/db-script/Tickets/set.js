module.exports = ({
    name: "set",
    code: `
    **Ticket Number** has been set
    $setVar[ticketnumber;$message[1]]
    $onlyIf[$isNumber[$message[1]]==true;use a number.]
    $suppressErrors[:x: An error occurred.]
    
    `});