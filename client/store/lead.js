const SET_LEAD_PLAYER = 'SET_LEAD_PLAYER'
const SET_LEAD_SUIT = 'SET_LEAD_SUIT'
const SET_FULL_LEAD = 'SET_FULL_LEAD'

const setLeadPlayer = player => ({
  type: SET_LEAD_PLAYER,
  payload: player
})

const setLeadSuit = suit => ({
  type: SET_LEAD_SUIT,
  payload: suit
})

const setFullLead = (suit, player) => ({
  type: SET_FULL_LEAD,
  payload: { suit, player }
})



export const setLeadPlayerThunk = player => dispatch => dispatch(setLeadPlayer(player))
export const setLeadSuitThunk = suit => dispatch => dispatch(setLeadSuit(suit))
export const setFullLeadThunk = (suit, player) => dispatch => dispatch(setFullLead(suit, player))

const reducer = (lead = { suit: '', player: {} }, action) => {
  switch(action.type) {
    case SET_LEAD_PLAYER:
      return { suit: lead.suit, player: action.payload }
    case SET_LEAD_SUIT:
      return { suit: action.payload, player: lead.player }
    case SET_FULL_LEAD:
      return action.payload
    default:
      return lead
  }
}

export default reducer
