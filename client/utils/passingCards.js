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

const setUserHoldCards = (userHand, userPassCards) => {
	return userHand.filter(card => {
		return userPassCards.indexOf(card) < 0
	})
}

function PassCardsSet(userPassCards, compHandsArray, holdCardsSet) {
	this.user = userPassCards
	this.comp1 = setSingleCompPassCards(compHandsArray[0], holdCardsSet.comp1)
	this.comp2 = setSingleCompPassCards(compHandsArray[1], holdCardsSet.comp2)
	this.comp3 = setSingleCompPassCards(compHandsArray[2], holdCardsSet.comp3)
}
function HoldCardsSet(userHand, userPassCards, compHandsArray) {
	this.user = setUserHoldCards(userHand, userPassCards)
	this.comp1 = compHandsArray[0]
	this.comp2 = compHandsArray[1]
	this.comp3 = compHandsArray[2]
}

const setAllPassAndHoldCards = (userHand, userPassCards, compHandsArray) => {
	const holdCards =
		new HoldCardsSet(
			userHand,
			userPassCards,
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

// PassCards function will make sure each player keeps his/her hold cards
// and that his/her pass cards are sent to another player
// depending on what hand it is the pass cards are moved to a different player
// 	-First hand cards go to the left
// 	-Second Hand cards go to the right
// 	-Third Hand cards go across
const passCards = (handCount, userPassCards, userHand, comp1Hand, comp2Hand, comp3Hand) => {
	const compHandsArray = [comp1Hand, comp2Hand, comp3Hand]
	const holdAndPass = setAllPassAndHoldCards(userHand, userPassCards, compHandsArray)
	const passWhereInt = handCount % 3
	const user, comp1, comp2, comp3

	if(passWhereInt === 0) {
		user = holdAndPass.holdCards.user.concat(holdAndPass.passCards.comp3)
		comp1 = holdAndPass.holdCards.comp1.concat(holdAndPass.passCards.user)
		comp2 = holdAndPass.holdCards.comp2.concat(holdAndPass.passCards.comp1)
		comp3 = holdAndPass.holdCards.comp3.concat(holdAndPass.passCards.comp2)
	} else if(passWhereInt === 1) {
		user = holdAndPass.holdCards.user.concat(holdAndPass.passCards.comp1)
		comp1 = holdAndPass.holdCards.comp1.concat(holdAndPass.passCards.comp2)
		comp2 = holdAndPass.holdCards.comp2.concat(holdAndPass.passCards.comp3)
		comp3 = holdAndPass.holdCards.comp3.concat(holdAndPass.passCards.user)
	} else if(passWhereInt === 2) {
		user = holdAndPass.holdCards.user.concat(holdAndPass.passCards.comp2)
		comp1 = holdAndPass.holdCards.comp1.concat(holdAndPass.passCards.comp3)
		comp2 = holdAndPass.holdCards.comp2.concat(holdAndPass.passCards.user)
		comp3 = holdAndPass.holdCards.comp3.concat(holdAndPass.passCards.comp1)
	}

	return {
		user,
		comp1,
		comp2,
		comp3
	}
}

export default passCards
