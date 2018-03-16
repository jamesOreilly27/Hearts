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

	it('assigns the correct point values to cards', () => {
		const deck = makeDeck()
		deck.forEach(card => {
			if(card.suit === 'Hearts') expect(card.pointValue).to.equal(1)
			else if(card.suit === 'Spades' && card.values.renderValue === 'Q') expect(card.pointValue).to.equal(13)
			else expect(card.pointValue).to.equal(0)
		})
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

describe('deal function', () => {
	const deck = makeDeck()
	let hand1 = []
	let hand2 = []
	let hand3 = []
	let hand4 = []
	beforeEach(() => {
		hand1 = []
		hand2 = []
		hand3 = []
		hand4 = []
		shuffle(deck)
		deal(deck, hand1, hand2, hand3, hand4)
	})

	it('divides cards equally between 4 hands', () => {
		expect(hand1).to.have.lengthOf(13)
		expect(hand2).to.have.lengthOf(13)
		expect(hand3).to.have.lengthOf(13)
		expect(hand4).to.have.lengthOf(13)
	})

	it('passes instances of Card into four hands', () => {
		hand1.forEach(card => {
			expect(card).to.have.property('suit')
			expect(card).to.have.property('values')
			expect(card).to.have.property('pointValue')
		})
		hand2.forEach(card => {
			expect(card).to.have.property('suit')
			expect(card).to.have.property('values')
			expect(card).to.have.property('pointValue')
		})
		hand3.forEach(card => {
			expect(card).to.have.property('suit')
			expect(card).to.have.property('values')
			expect(card).to.have.property('pointValue')
		})
		hand4.forEach(card => {
			expect(card).to.have.property('suit')
			expect(card).to.have.property('values')
			expect(card).to.have.property('pointValue')
		})
	})
})

describe('sortHand function', () => {
	const deck = makeDeck()
	sortHand(deck)
	it('sorts the cards alphabetically by suit', () => {
		expect(deck[0].suit).to.equal('Clubs')
		expect(deck[12].suit).to.equal('Clubs')
		expect(deck[13].suit).to.equal('Diamonds')
		expect(deck[25].suit).to.equal('Diamonds')
		expect(deck[26].suit).to.equal('Hearts')
		expect(deck[38].suit).to.equal('Hearts')
		expect(deck[39].suit).to.equal('Spades')
		expect(deck[51].suit).to.equal('Spades')
	})
})
