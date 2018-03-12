/***** ACTION TYPE VARIABLES *****/
const ADD_PASSCARD = 'ADD_PASSCARD'
const REMOVE_PASSCARD = 'REMOVE_PASSCARD'
const RESET_PASSCARDS = 'RESET_PASSCARDS'

/***** ACTION CREATORS*****/
const selectPasscard = card => ({
  type: ADD_PASSCARD,
  payload: card
})

const deselectPasscard = card => ({
	type: REMOVE_PASSCARD,
	payload: card
})

const resetPasscards = () => ({
  type: RESET_PASSCARDS,
  payload: []
})

/***** THUNKS *****/
export const newPasscardThunk = card => dispatch => {
  dispatch(selectPasscard(card))
}

export const undoPasscardThunk = card => dispatch => {
	dispatch(deselectPasscard(card))
}

export const clearPasscardsThunk = () => dispatch => {
  dispatch(resetPasscards())
}

const reducer = (passCards = [], action) => {
  switch (action.type) {
    case ADD_PASSCARD:
			return [...passCards, action.payload]
		case REMOVE_PASSCARD:
      return passCards.filter(passCard => passCard !== action.payload)
    case RESET_PASSCARDS:
      return action.payload
    default:
      return passCards
  }
}

export default reducer
