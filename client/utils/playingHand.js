//The first card played in every hand is the two of clubs
//This function will find who has that card after passing is complete
//Our hands are sorted so the 2 of clubs will be the first card in whatever array holds it

export const findTwoOfClubs = hands => {
  let hasTwo;
    const { user, comp1, comp2, comp3 } = hands
    const cards = [user[0], comp1[0], comp2[0], comp3[0]]
    const players = ['user', 'comp1', 'comp2', 'comp3']
    
    for(let i = 0; i < cards.length; i++) {
      const card = cards[i]
      if(card.suit === 'Clubs' && card.values.renderValue === '2') hasTwo = players[i]
    }
    return hands[hasTwo]
}

export const selectComputerCard = ({ hand, suit }) => {
  let selection = {}
  let randomNumber

  const playableCards = hand.filter(card => card.suit === suit)

  if(playableCards.length) {
    randomNumber = Math.floor(Math.random() * playableCards.length)
    selection = playableCards[randomNumber]
  } else {
    randomNum = Math.floor(Math.random() * hand.length)
    selection = lead.hand[randomNumber]
  }

  return selection
}
