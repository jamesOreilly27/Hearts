const SET_LEAD_PLAYER = 'SET_LEAD_PLAYER'

const setLead = player => ({
  type: SET_LEAD_PLAYER,
  payload: player
})

export const setLeadThunk = player => dispatch => dispatch(setLead(player))

const reducer = (leadPlayer = {}, action) => {
  switch(action.type) {
    case SET_LEAD_PLAYER:
      return action.payload
    default:
      return leadPlayer
  }
}

export default reducer
