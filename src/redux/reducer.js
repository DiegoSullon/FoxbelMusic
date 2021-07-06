import { GET_TRACKLIST, NEXT_TRACK, PAUSE_TRACK, PLAY_TRACK, PREVIOUS_TRACK, RESUME_TRACK, SET_TRACK, ERROR } from './actions'

const initialState = {
  tracklist: [],
  track: {},
  play: false,
  trackTime: 0,
  error: false
}
export const playbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKLIST:
      return {
        ...state,
        tracklist: action.tracklist,
        error: false
      }
    case SET_TRACK:
      return {
        ...state,
        track: action.track,
        error: false
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
    case NEXT_TRACK:
      return {
        ...state,
        track: customTrack(state.tracklist, action.index, true),
        error: false
      }
    case PREVIOUS_TRACK:
      return {
        ...state,
        track: customTrack(state.tracklist, action.index, false),
        error: false
      }
    case ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}
const customTrack = (tracklist, index, next) => {
  const newIndex = next ? index + 1 : index - 1
  if (newIndex < 0 || newIndex >= tracklist.length) {
    return {
      name: tracklist[index].title,
      img: tracklist[index].album.cover_big,
      author: tracklist[index].artist.name,
      url: tracklist[index].preview,
      index
    }
  }
  return {
    name: tracklist[newIndex].title,
    img: tracklist[newIndex].album.cover_big,
    author: tracklist[newIndex].artist.name,
    url: tracklist[newIndex].preview,
    index: newIndex
  }
}
