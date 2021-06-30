import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './actions'

export const counterReducer = (state = 0, action) => {
  if (action.type === INCREMENT_COUNTER) {
    return state + action.num
  }
  if (action.type === DECREMENT_COUNTER) {
    return state - action.num
  }
}
