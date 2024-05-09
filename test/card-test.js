const chai = require('chai');
const expect = chai.expect;
const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {

  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });
});

describe('turns', function() {
  it('should check if the answer is correct', function(){
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const checkGuess = evaluateGuess('object', 'object')

    expect(checkGuess).to.equal('correct!')
  })

  it('should be able to handle if its incorrect as well', function(){
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const checkGuess = evaluateGuess('array', card)

    expect(checkGuess).to.equal('incorrect!')
  })
})