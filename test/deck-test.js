const chai = require('chai');
const expect = chai.expect;
const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('Deck', function() {
    it('should return an empty array', function(){
        const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], 'array')
        const deck = createDeck([])

        expect(deck).to.deep.equal([])
    })
    
    it('should be able to create a deck and add cards to the deck', function () {
        const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], 'array')
        const deck = createDeck([card, card2])

        expect(deck).to.deep.equal([card, card2])
    })

    it('should be able to count how many cards are in the deck', function(){
        const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], 'array')
        
        const deck = createDeck([card, card2])
        const count = countCards(deck)

        expect(count).to.deep.equal(2)
    })
    
}) 




