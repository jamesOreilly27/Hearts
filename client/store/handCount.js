const INCREMENT_HAND_COUNT = 'INCREMENT_HAND_COUNT'

const increment = int => ({
  type: INCREMENT_HAND_COUNT,
  payload: int + 1
})

export const incrementHandCountThunk = int => dispatch => {
  dispatch(increment(int))
}

const reducer = (handsPlayed = 0, action) => {
  switch (action.type) {
		case INCREMENT_HAND_COUNT:
			return action.payload
		default:
			return handsPlayed
	}
}

export default reducer
