const chai = require('chai');
const expect = chai.expect;
const { createRound } = require('../src/round');
const { createDeck } = require('../src/deck');
const { createCard } = require('../src/card');

describe('round', function() {
    it('should return a round object', function() {
        const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], 'array')
        const deck = createDeck([card, card2])
        const round = createRound(deck)

        expect(round.deck).to.deep.equal(deck)
        expect(round.currentCard).to.deep.equal(deck[0])
        expect(round.turns).to.equal(0)
        expect(round.incorrectGuesses).to.deep.equal([])
    })

})