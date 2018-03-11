const ADD_PASSCARD = 'ADD_PASSCARD'

const selectPasscard = card => ({
  type: ADD_PASSCARD,
  payload: card
})

export const newPassCardThunk = card => dispatch => {
  dispatch(selectPasscard(card))
}

const reducer = (prevState = [], action) => {
  switch (action.type) {
    case ADD_PASSCARD:
      return prevState.concat(action.payload)
    default:
      return prevState
  }
}

export default reducer
