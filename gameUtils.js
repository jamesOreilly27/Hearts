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

function Card(suit, values, pointValue) {
  this.suit = suit
  this.values = values
  this.pointValue = pointValue
}

export const makeDeck = (deckCount) => {
  const deck = []
  if(deckCount <= 0) {
    return 'Invalid argument. Must pass in a number greater than 0'
  } else {
    while(deckCount > 0) {
      for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
          let pointValue = 0
          if(suits[i] === 'Hearts') pointValue = 1
          if(suits[i] === 'Spades' && values[j].renderValue === 'Q') pointValue = 13
          deck.push(new Card(suits[i], values[j], pointValue))
        }
      }
      deckCount--
    }
    return deck
  }
}

const shuffle = (deck) => {
  for(let i = 0; i < 1000; i++) {
    const location1 = Math.floor(Math.random() * deck.length)
    const location2 = Math.floor(Math.random() * deck.length)
    
    const placeHolder = deck[location1]
    
    deck[location1] = deck[location2]
    deck[location2] = placeHolder
  }
}

const deal = (deck, hand1, hand2, hand3, hand4) => {
  for(let i = 0; i < deck.length; i++) {
    if(i % 4 === 0) hand1.push(deck[i])
    else if(i % 4 === 1) hand2.push(deck[i])
    else if(i % 4 === 2) hand3.push(deck[i])
    else hand4.push(deck[i])
  }
}

const sortHand = (hand) => {
  hand.sort((a, b) => {
    const aSuit = a.suit.toUpperCase()
    const bSuit = b.suit.toUpperCase()
    
    const aValue = a.values.sortValue
    const bValue = b.values.sortValue
    
    if(aSuit < bSuit || (aSuit === bSuit && aValue < bValue) ) return -1
    if(aSuit > bSuit || (aSuit === bSuit && aValue > bValue) ) return 1
    
    return 0
  })
}

const startHand = (deck) => {
  shuffle(deck)
  const player1Hand = []
  const player2Hand = []
  const player3Hand = []
  const player4Hand = []
  
  deal(deck, player1Hand, player2Hand, player3Hand, player4Hand)
  
  sortHand(player1Hand)
  sortHand(player2Hand)
  sortHand(player3Hand)
  sortHand(player4Hand)

  console.log(player1Hand)
  console.log(player2Hand)
  console.log(player3Hand)
  console.log(player4Hand)
}

export default startHand
