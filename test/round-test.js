const chai = require('chai');
const expect = chai.expect;
const { createRound, takeTurn } = require('../src/round');
const { createDeck } = require('../src/deck');
const { createCard } = require('../src/card');

describe('round', function() {
    let deck, card, card2
    beforeEach(() => {
        card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], 'array')
        deck = createDeck([card, card2])

    })

    it('should return a round object', function() {
        
        const round = createRound(deck)

        expect(round.deck).to.deep.equal(deck)
        expect(round.currentCard).to.deep.equal(deck[0])
        expect(round.turns).to.equal(0)
        expect(round.incorrectGuesses).to.deep.equal([])
    })

    it('should update turns value by 1 and return feedback', function (){
        const round = createRound(deck)
        takeTurn('object',round)

        expect(round.turns).to.equal(1)
    })

    it('should change currentCard to next card in deck.', function(){
        const round = createRound(deck)
        takeTurn('object',round)

        expect(round.currentCard).to.deep.equal(card2)

    })

    it('should evaluate guess and update incorrectGuesses array with card id if incorrect.', function(){
        const round = createRound(deck)
         takeTurn('array',round)

        expect(round.incorrectGuesses).to.deep.equal([card.id])
        expect(round.currentCard).to.equal(card2)
        
    })

    it('should return feedback', function() {
        const round = createRound(deck)
        const turn = takeTurn('array',round)

        expect(turn).to.equal('incorrect!')
    })
})

