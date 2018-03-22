const PASS_CARDS = 'PASS_CARDS'

const pass = () => ({
  type: PASS_CARDS,
  payload: true
})

export const flipPassSwitch = dispatch => {
  dispatch(pass())
}

const reducer = (donePassing = false, action) => {
  switch(action.type) {
    case PASS_CARDS:
      return true
    default:
      return false
  }
}

export default reducer
