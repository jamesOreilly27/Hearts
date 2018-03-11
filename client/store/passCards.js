const ADD_PASSCARD = 'ADD_PASSCARD'
const REMOVE_PASSCARD = 'REMOVE_PASSCARD'

const selectPasscard = card => ({
  type: ADD_PASSCARD,
  payload: card
})

const deselectPasscard = card => ({
	type: REMOVE_PASSCARD,
	payload: card
})

export const newPasscardThunk = card => dispatch => {
  dispatch(selectPasscard(card))
}

export const undoPasscardThunk = card => dispatch => {
	dispatch(deselectPasscard(card))
}

const reducer = (passCards = [], action) => {
  switch (action.type) {
    case ADD_PASSCARD:
			return [...passCards, action.payload]
		case REMOVE_PASSCARD:
			return passCards.filter(passCard => passCard !== action.payload)
    default:
      return passCards
  }
}

export default reducer
