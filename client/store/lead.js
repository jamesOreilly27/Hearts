const SET_LEAD_PLAYER = 'SET_LEAD_PLAYER'
const SET_LEAD_SUIT = 'SET_LEAD_SUIT'
const SET_FULL_LEAD = 'SET_FULL_LEAD'


const setLeadSuit = suit => ({
  type: SET_LEAD_SUIT,
  payload: suit
})

const setLeadPlayer = (player, hands) => {
  let newPlayer = ''
  switch(player) {
    case 'user':
      newPlayer = 'comp1'
    case 'comp1':
      newPlayer = 'comp2'
    case 'comp2':
      newPlayer = 'comp3'
    case 'comp3':
      newPlayer = 'user'
  }
  return {
    type: SET_LEAD_PLAYER,
    payload: {
      newPlayer,
      hand: hands[newPlayer]
    }
  }
}

const setFullLead = (suit, player, hand) => ({
  type: SET_FULL_LEAD,
  payload: { suit, player, hand }
})



export const setLeadPlayerThunk = (player, hand) => dispatch => dispatch(setLeadPlayer(player, hand))
export const setLeadSuitThunk = suit => dispatch => dispatch(setLeadSuit(suit))
export const setFullLeadThunk = (suit, player, hand) => dispatch => dispatch(setFullLead(suit, player, hand))

const reducer = (lead = { suit: '', player: '', hand: [] }, action) => {
  switch(action.type) {
    case SET_LEAD_PLAYER:
      return Object.assign({ suit: lead.suit }, action.payload)
    case SET_LEAD_SUIT:
      return Object.assign({}, { suit: action.payload, player: lead.player, hand: lead.hand })
    case SET_FULL_LEAD:
      return action.payload
    default:
      return lead
  }
}

export default reducer
