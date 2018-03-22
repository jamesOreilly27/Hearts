const FLIP_SWITCH = 'FLIP_SWITCH'

const pass = bool => ({
  type: FLIP_SWITCH,
  payload: bool
})

export const flipPassSwitch = bool => dispatch => {
  dispatch(pass(bool))
}

const reducer = (donePassing = false, action) => {
  switch(action.type) {
    case FLIP_SWITCH:
      return true
    default:
      return false
  }
}

export default reducer
