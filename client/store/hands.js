const DEAL_CARDS = 'DEAL_CARDS'

const dealCards = hands => ({
  type: DEAL_CARDS,
  payload: hands
})

export const dealCardsThunk = hands => dispatch => {
  dispatch(dealCards(hands))
}

const reducer = (hands = {}, action) => {
  switch (action.type) {
    case DEAL_CARDS:
      return action.payload
    default:
      return hands
  }
}

export default reducer
