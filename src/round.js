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
    const correctAnswer = round.currentCard.correctAnswer
    const result = evaluateGuess(guess, correctAnswer)

    if (result === 'incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id)
    }
    round.turns++
    round.currentCard = round.deck[round.turns]
    return result
}

function calculatePercentage(round) {
    const totalQuestions = round.turns;
    const incorrectGuesses = round.incorrectGuesses.length;
    const correctAnswers = totalQuestions - incorrectGuesses;

    const percentageRight = (correctAnswers / totalQuestions) * 100;

    return percentageRight;
}

function endRound(round) {
    const percentage = calculatePercentage(round)
    console.log(`** Round over! ** You answered ${percentage}% of the questions correctly!`)
    return `** Round over! ** You answered ${percentage}% of the questions correctly!`;
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentage,
    endRound
}