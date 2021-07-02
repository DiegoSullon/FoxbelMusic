import { GET_TOKEN, GET_USER, GET_USER_TRACKLIST, PAUSE_TRACK, PLAY_TRACK, RESUME_TRACK } from './actions'

const initialState = {
  token: '',
  user: {},
  tracklist: [],
  track: {},
  play: false,
  trackTime: 0
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
    case GET_USER_TRACKLIST:
      return {
        ...state,
        tracklist: action.tracklist
      }
    case PLAY_TRACK:
      return {
        ...state,
        track: action.track,
        play: true,
        trackTime: 0
      }
    case RESUME_TRACK:
      return {
        ...state,
        play: true,
        trackTime: action.trackTime
      }
    case PAUSE_TRACK:
      return {
        ...state,
        play: false,
        trackTime: action.trackTime
      }
    default:
      return state
  }
}
