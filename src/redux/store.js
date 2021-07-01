import { applyMiddleware, createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { playbackReducer } from './reducer'

export default createStore(playbackReducer, applyMiddleware(thunk))
