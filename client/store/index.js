import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import hands from './hands'
import passCards from './passCards'
import handCount from './handCount'
import donePassing from './donePassing'
import lead from './lead'

const reducer = combineReducers({ hands, passCards, handCount, donePassing, lead })

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)

export default store
export * from './hands'
export * from './passCards'
export * from './handCount'
export * from './donePassing'
export * from './lead'
