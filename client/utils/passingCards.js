const removeRandomIndex = array => {
  const random = Math.floor(Math.random() * array.length)
  return array.slice(0, random).concat(array.slice(random + 1))
}

const removeThree = array => {
  return removeRandomIndex(removeRandomIndex(removeRandomIndex(array)))
}

const setSingleCompPassCards = (hand, holdCards) => {
	return hand.filter(card => {
		return holdCards.indexOf(card) < 0
	})
}

function PassCardsSet(userPassCards, compHandsArray, holdCardsSet) {
	this.user = userPassCards
	this.comp1 = setSingleCompPassCards(compHandsArray[0], holdCardsSet.comp1)
	this.comp2 = setSingleCompPassCards(compHandsArray[1], holdCardsSet.comp2)
	this.comp3 = setSingleCompPassCards(compHandsArray[2], holdCardsSet.comp3)
}
function HoldCardsSet(userHand, compHandsArray) {
	this.user = userHand
	this.comp1 = compHandsArray[0]
	this.comp2 = compHandsArray[1]
	this.comp3 = compHandsArray[2]
}

const setAllPassAndHoldCards = (userHand, userPassCards, compHandsArray) => {
	const holdCards =
		new HoldCardsSet(
			userHand,
			compHandsArray.map(hand => {
				return removeThree(hand)
			})
		)

	const passCards = new PassCardsSet(userPassCards, compHandsArray, holdCards)

	return {
		holdCards,
		passCards
	}

}

const passLeft = (userPassCards, userHand, comp1Hand, comp2Hand, comp3Hand) => {
	const compHandsArray = [comp1Hand, comp2Hand, comp3Hand]
	const holdAndPass = setAllPassAndHoldCards(userHand, userPassCards, compHandsArray)
	console.log('TESTING', holdAndPass)
}

export default passLeft
