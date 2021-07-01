import { GET_USER } from './actions'

const initialState = {
  token: '',
  user: {},
  tracklist: {}
}
export const playbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
