import { GET_TOKEN, GET_USER } from './actions'

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
    case GET_TOKEN:
      return {
        ...state,
        token: action.token.replace('access_token=', '').replace(/&expires=\d*/, '')
      }
    default:
      return state
  }
}
