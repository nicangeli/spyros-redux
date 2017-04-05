import rootReducer from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import authApi from '../api'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk.withExtraArgument(authApi))))

export default store