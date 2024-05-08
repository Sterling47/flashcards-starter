
function createDeck(...card) {
    let newDeck = []
    newDeck.push(...card)
    return newDeck
}

function countCards(deck){
    return deck.length
}

module.exports = {
    createDeck,
    countCards
}