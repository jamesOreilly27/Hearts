/***** ACTION TYPE VARIABLES*****/
const DEAL_CARDS = 'DEAL_CARDS'
const PASS_CARDS = 'PASS_CARDS'
const PLAY_CARD = 'PLAY_CARD'

/***** ACTION CREATORS *****/
const dealCards = hands => ({
  type: DEAL_CARDS,
  payload: hands
})

const passCards = hands => ({
  type: PASS_CARDS,
  payload: hands
})

const updateHandsAfterPlayedCard = hands => ({
  type: PLAY_CARD,
  payload: hands
})

/***** THUNKS *****/
export const dealCardsThunk = hands => dispatch => dispatch(dealCards(hands))
export const passCardsThunk = hands => dispatch => dispatch(passCards(hands))
export const playCardThunk = hands => dispatch => dispatch(updateHandsAfterPlayedCard(hands))



const reducer = (hands = {}, action) => {
  switch (action.type) {
    case DEAL_CARDS:
      return action.payload
    case PASS_CARDS:
      return action.payload
    case PLAY_CARD:
      return action.payload
    default:
      return hands
  }
}

export default reducer
