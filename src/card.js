function createCard(id, question, answers, correctAnswer) {
    return {
        id,
        question,
        answers,
        correctAnswer
    }
}

function evaluateGuess(guess, card) {
    if(guess === card.correctAnswer) {
        true
        return 'correct!'
    } else {
        return 'incorrect!'
    }
}

module.exports = {
    createCard,
    evaluateGuess
}