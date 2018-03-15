import chai, { expect } from 'chai'
import spies from 'chai-spies'
import * as deck from './deck'

chai.use(spies)

const {
	suits,
	values,
  Card,
	makeDeck,
	shuffle,
	deal,
	sortHand,
	startHand
} = deck

describe('Card constructor function', () => {
	let card1;
	beforeEach(() => {
		card1 = new Card(suits[2], values[5], 1)
	})
	it('creates an instance of card', () => {
		expect(typeof card1).to.equal('object')
	})
		
	it('gives properties (suit, values, pointValue', () => {
		expect(card1).to.have.property('suit')
		expect(card1).to.have.property('values')
		expect(card1).to.have.property('pointValue')
	})
		
	it('has a property sortValue', () => {
			expect(card1.values).to.have.property('sortValue')
	})

	it('has a property renderValue', () => {
		expect(card1.values).to.have.property('renderValue')
	})
})

describe('makeDeck function', () => {
	it('returns an error message when invoked with a non-number or a number less than 0', () => {
		expect(makeDeck('hello')).to.equal('Invalid argument. Must pass a number greater than 0')
		expect(makeDeck(-1)).to.equal('Invalid argument. Must pass a number greater than 0')
		expect(makeDeck(true)).to.equal('Invalid argument. Must pass a number greater than 0')
	})
	it('returns an array', () => {
		expect(Array.isArray(makeDeck())).to.equal(true)
	})
	
	it('returns 1 deck when invoked with no arguements', () => {
		expect(makeDeck()).to.have.lengthOf(52)
	})

	it('if number x is passed into function it returns x decks', () => {
		expect(makeDeck(1)).to.have.lengthOf(52)
		expect(makeDeck(2)).to.have.lengthOf(104)
		expect(makeDeck(10)).to.have.lengthOf(520)
	})
})

describe('shuffle function', () => {
	const deck = makeDeck()
	const checkCard1 = deck[1]
	const checkCard2 = deck[10]
	const checkCard3 = deck[20]
	const checkCard4 = deck[51]

	
	beforeEach(() => {
		shuffle(deck)
	})
	it('changes the order of the deck', () => {
		expect(deck[1]).to.not.equal(checkCard1)
		expect(deck[10]).to.not.equal(checkCard2)
		expect(deck[20]).to.not.equal(checkCard3)
		expect(deck[51]).to.not.equal(checkCard4)
	})
})


