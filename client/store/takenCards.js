const ADD_USER_CARDS = 'ADD_USER_CARDS'
const ADD_COMP1_CARDS = 'ADD_COMP1_CARDS'
const ADD_COMP2_CARDS = 'ADD_COMP2_CARDS'
const ADD_COMP3_CARDS = 'ADD_COMP3_CARDS'

const addCards = (player, cards) => {
  let type;
  switch(player) {
    case 'user':
      type = ADD_USER_CARDS
    case 'comp1':
      type = ADD_COMP1_CARDS
    case 'comp2':
      type = ADD_COMP2_CARDS
    case 'comp3':
      type = ADD_COMP3_CARDS
    default:
      type = 'ERROR'
  }
  return {
    type, 
    payload: cards
  }
}

const addCardsThunk = (player, cards) => dispatch => dispatch(addCards(player, cards))

const reducer = (takenCards = {user: [], comp1: [], comp2: [], comp3: []}, action) => {
  switch(action.type) {
    case ADD_USER_CARDS:
      return Object.assign({}, takenCards, { user: takenCards[user].concat(action.payload) })
    case ADD_COMP1_CARDS:
      return Object.assign({}, takenCards, { comp1: takenCards[comp1].concat(action.payload) })
    case ADD_COMP2_CARDS:
      return Object.assign({}, takenCards, { comp2: takenCards[comp2].concat(action.payload) })
    case ADD_COMP3_CARDS:
      return Object.assign({}, takenCards, { comp3: takenCards[comp3].concat(action.payload) })
    default:
      return takenCards
  }
}

export default reducer
