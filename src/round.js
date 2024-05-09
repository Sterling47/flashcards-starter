const { evaluateGuess } = require("./card")

function createRound(deck) {
    return {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
}

function takeTurn(guess, round) {
    // console.log('round', round)
    
    const correctAnswer = round.currentCard.correctAnswer
    const result = evaluateGuess(guess, correctAnswer)

    if (result === 'incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id)
    } 
    round.turns++
    round.currentCard = round.deck[round.turns]
    return result
}

module.exports = {
    createRound,
    takeTurn
}