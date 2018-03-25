const SET_LEAD_HAND = 'SET_LEAD_HAND'
const SET_LEAD_SUIT = 'SET_LEAD_SUIT'
const SET_FULL_LEAD = 'SET_FULL_LEAD'

const setLeadHand = hand => ({
  type: SET_LEAD_HAND,
  payload: hand
})

const setLeadSuit = suit => ({
  type: SET_LEAD_SUIT,
  payload: suit
})

const setFullLead = (suit, hand) => ({
  type: SET_FULL_LEAD,
  payload: { suit, hand }
})



export const setLeadHandThunk = hand => dispatch => dispatch(setLeadHand(hand))
export const setLeadSuitThunk = suit => dispatch => dispatch(setLeadSuit(suit))
export const setFullLeadThunk = (suit, hand) => dispatch => dispatch(setFullLead(suit, hand))

const reducer = (lead = { suit: '', hand: {} }, action) => {
  switch(action.type) {
    case SET_LEAD_HAND:
      return Object.assign({}, { hand: action.payload, suit: lead.suit })
    case SET_LEAD_SUIT:
      return Object.assign({}, { hand: lead.hand, suit: action.payload })
    case SET_FULL_LEAD:
      return action.payload
    default:
      return lead
  }
}

export default reducer
