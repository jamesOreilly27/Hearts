const ADD_CARD = 'ADD_CARD'
const UPDATE_PLAYER_TO_TAKE = 'UPDATE_PLAYER_TO_TAKE'

const addCard = card => ({
  type: ADD_CARD,
  payload: card
})

const updatePlayerToTake = player => ({
  type: UPDATE_PLAYER_TO_TAKE,
  payload: player
})

const addCardThunk = card => dispatch => dispatch(addCard(card))

const reducer = (trick = { playerToTake: '', cards: [] }, action) => {
  switch(action.type) {
    case ADD_CARD:
      return { ...trick, cards: trick[cards].concat(action.payload) }
    case UPDATE_PLAYER_TO_TAKE:
      return { ...trick, player: action.payload }
    default:
      return trick
  }
}

export default reducer
