import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware))
}

export { configureStore }
