const ADD_CARD = 'ADD_CARD'

const addCard = card => ({
  type: ADD_CARD,
  payload: card
})

const addCardThunk = card => dispatch => dispatch(addCard(card))

const reducer = (trick = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return trick.concat(action.payload)
    default:
      return trick
  }
}

export default reducer
