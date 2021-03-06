//The first card played in every hand is the two of clubs
//This function will find who has that card after passing is complete
//Our hands are sorted so the 2 of clubs will be the first card in whatever array holds it

export const findTwoOfClubsOwner = hands => {
  let hasTwo;
  const { user, comp1, comp2, comp3 } = hands
  const cards = [user[0], comp1[0], comp2[0], comp3[0]]
  const players = ['user', 'comp1', 'comp2', 'comp3']
    
  for(let i = 0; i < cards.length; i++) {
    const card = cards[i]
    if(card.suit === 'Clubs' && card.values.renderValue === '2') hasTwo = players[i]
  }
  return hasTwo
}

export const selectComputerCard = ({ suit, player, hand }) => {
  let selection = {}
  let randomNumber

  const playableCards = hand.filter(card => card.suit === suit)

  if(playableCards.length) {
    randomNumber = Math.floor(Math.random() * playableCards.length)
    selection = playableCards[randomNumber]
  } else {
    randomNumber = Math.floor(Math.random() * hand.length)
    selection = hand[randomNumber]
  }
  console.log('RANDOM NUMBER', randomNumber)
  return selection
}

export const removePlayedCard = (hand, selectedCard, player) => {
  const pullIndex = hand.indexOf(selectedCard)
  const newHand = hand.slice(0, pullIndex).concat(hand.slice(pullIndex + 1))
  return { player: newHand }
}

export const findWhoTakesTrick = (trick, suit, player, newCard) => {
  const { playerToTake, cards } = trick
  let currentLeader = 0
  
  if(newCard.suit !== suit) return playerToTake
  
  cards.forEach(card => {
    if(card.values.sortValue > currentLeader) currentLeader = card.values.sortValue
  })
  
  if(newCard.values.sortValue > currentLeader) return player
  else return playerToTake
}
