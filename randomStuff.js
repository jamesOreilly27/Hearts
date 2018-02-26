const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

function Card(suit, value, pointValue) {
  this.suit = suit
  this.value = value
  this.pointValue = pointValue
}

const makeDeck = (deckCount) => {
  const deck = []
  if(deckCount <= 0) {
    return 'Invalid argument. Must pass in a number greater than 0'
  } else {
    while(deckCount > 0) {
      for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
          let pointValue = 0
          if(suits[i] === 'Hearts') pointValue = 1
          if(suits[i] === 'Spades' && values[j] === 'Q') pointValue = 13
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

const startHand = (deck) => {
  shuffle(deck)
  const player1Hand = []
  const player2Hand = []
  const player3Hand = []
  const player4Hand = []
  
  deal(deck, player1Hand, player2Hand, player3Hand, player4Hand)
  console.log('player 1', player1Hand)
  console.log('player 2', player2Hand)
  console.log('player 3', player3Hand)
  console.log('player 4', player4Hand)
}

const fullDeck = makeDeck(1)

startHand(fullDeck)
