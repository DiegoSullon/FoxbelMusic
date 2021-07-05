import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { playbackReducer } from './reducer'

export default createStore(playbackReducer, applyMiddleware(thunk))
