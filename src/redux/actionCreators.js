import axios from 'axios'
import DefaultSongs from '../../defaultSongs'
import { GET_TRACKLIST, NEXT_TRACK, PAUSE_TRACK, PLAY_TRACK, PREVIOUS_TRACK, RESUME_TRACK, SET_TRACK, ERROR, LOADING } from './actions'
const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/'
const API_URL = CORS_ANYWHERE + 'https://api.deezer.com/'

export const setLoading = (loading) => dispatch => {
  dispatch({
    type: LOADING,
    loading
  })
}
export const searchTracklist = (search) => dispatch => {
  setLoading(true)(dispatch)
  axios.get(`${API_URL}search?q=${search}`).then(
    res => {
      console.log('DATA:', res.data)
      if (res.data.error) {
        window.location.href = '/'
        return
      }
      return dispatch({
        type: GET_TRACKLIST,
        tracklist: res.data.data
      })
    }).catch(() => {
    setLoading(false)(dispatch)
    return dispatch({
      type: ERROR
    })
  })
}
export const artistTracklist = () => dispatch => {
  setLoading(true)(dispatch)
  axios.get(`${API_URL}artist/27/top?limit=50`).then(
    res => {
      console.log('DATA:', res.data)
      if (res.data.error) {
        window.location.href = '/'
        return
      }
      return dispatch({
        type: GET_TRACKLIST,
        tracklist: res.data.data
      })
    }).catch(() => {
    setLoading(false)(dispatch)
    return dispatch({
      type: ERROR
    })
  })
}
export const albumTracklist = () => dispatch => {
  setLoading(true)(dispatch)
  axios.get(`${API_URL}album/302127/tracks`).then(
    res => {
      console.log('DATA:', res.data)
      if (res.data.error) {
        window.location.href = '/'
        return
      }
      return dispatch({
        type: GET_TRACKLIST,
        tracklist: res.data.data
      })
    }).catch(() => {
    setLoading(false)(dispatch)
    return dispatch({
      type: ERROR
    })
  })
}
export const getTracklist = () => dispatch => {
  setLoading(true)(dispatch)
  axios.get(`${API_URL}radio/37151/tracks`).then(
    res => {
      console.log('DATA:', res.data)
      if (res.data.error) {
        window.location.href = '/'
        return
      }
      return dispatch({
        type: GET_TRACKLIST,
        tracklist: res.data.data
      })
    }).catch(() => {
    setLoading(false)(dispatch)
    return dispatch({
      type: ERROR
    })
  })
}
export const stationTracklist = () => dispatch => {
  setLoading(true)(dispatch)
  axios.get(`${API_URL}radio/38215/tracks`).then(
    res => {
      console.log('DATA:', res.data)
      if (res.data.error) {
        window.location.href = '/'
        return
      }
      return dispatch({
        type: GET_TRACKLIST,
        tracklist: res.data.data
      })
    }).catch(() => {
    setLoading(false)(dispatch)
    return dispatch({
      type: ERROR
    })
  })
}
export const genrTracklist = (genr) => dispatch => {
  setLoading(true)(dispatch)
  axios.get(`${API_URL}search?q=${genr}`).then(
    res => {
      console.log('DATA:', res.data)
      if (res.data.error) {
        window.location.href = '/'
        return
      }
      return dispatch({
        type: GET_TRACKLIST,
        tracklist: res.data.data
      })
    }).catch(() => {
    setLoading(false)(dispatch)
    return dispatch({
      type: ERROR
    })
  })
}
export const getLocalTracklist = () => dispatch => {
  setLoading(true)(dispatch)
  return dispatch({
    type: GET_TRACKLIST,
    tracklist: DefaultSongs
  })
}
export const setTrack = (track) => dispatch => {
  return dispatch({
    type: SET_TRACK,
    track
  })
}
export const playTrack = (track) => dispatch => {
  return dispatch({
    type: PLAY_TRACK,
    track
  })
}
export const resumeTrack = (trackTime) => dispatch => {
  return dispatch({
    type: RESUME_TRACK,
    trackTime
  })
}
export const pauseTrack = (trackTime) => dispatch => {
  return dispatch({
    type: PAUSE_TRACK,
    trackTime
  })
}
export const nextTrack = (index) => dispatch => {
  return dispatch({
    type: NEXT_TRACK,
    index
  })
}
export const previousTrack = (index) => dispatch => {
  return dispatch({
    type: PREVIOUS_TRACK,
    index
  })
}
