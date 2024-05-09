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
       console.log(round.incorrectGuesses)
    } 
    round.turns++
    round.currentCard = round.deck[round.turns]
    return result
}
 
function calculatePercentage(round) {
    console.log('round:', round)

    if (round.turns === 0) {
        return 0;
    }

    // Calculate the percentage of correct guesses
    const totalQuestions = round.turns;
    const incorrectGuesses = round.incorrectGuesses.length;
    const correctAnswers = totalQuestions - incorrectGuesses;

    const percentageRight = (correctAnswers / totalQuestions) * 100;
    console.log('round:', round);
    return percentageRight;
}

// function endRound(round) {

// }

module.exports = {
    createRound,
    takeTurn,
    calculatePercentage,
    // endRound
}