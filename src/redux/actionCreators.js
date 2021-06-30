import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './actions'

export const incrementCounter = (num) => {
  return {
    type: INCREMENT_COUNTER,
    num
  }
}

export const decrementCounter = (num) => {
  return {
    type: DECREMENT_COUNTER,
    num
  }
}
