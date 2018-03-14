import { expect } from 'chai'
import * as deck from './deck'

const {
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
		const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']
		const values = [
			{sortValue: 1, renderValue: '2'},
			{sortValue: 2, renderValue: '3'},
			{sortValue: 3, renderValue: '4'},
			{sortValue: 4, renderValue: '5'},
			{sortValue: 5, renderValue: '6'},
			{sortValue: 6, renderValue: '7'},
			{sortValue: 7, renderValue: '8'},
			{sortValue: 8, renderValue: '9'},
			{sortValue: 9, renderValue: '10'},
			{sortValue: 10, renderValue: 'J'},
			{sortValue: 11, renderValue: 'Q'},
			{sortValue: 12, renderValue: 'K'},
			{sortValue: 13, renderValue: 'A'}
		]
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
