import axios from 'axios'
import DefaultSongs from '../../defaultSongs'
import { GET_TOKEN, GET_USER, GET_TRACKLIST, NEXT_TRACK, PAUSE_TRACK, PLAY_TRACK, PREVIOUS_TRACK, RESUME_TRACK, SET_TRACK, ERROR } from './actions'
const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/'
const API_URL = CORS_ANYWHERE + 'https://api.deezer.com/'

export const getUser = (token) => dispatch => {
  axios.get(`${API_URL}user/me?access_token=${token}`).then(
    res => {
      if (res.data.error) {
        window.location.href = '/'
        return
      }
      return dispatch({
        type: GET_USER,
        user: res.data
      })
    }).catch(err => {
    console.log(err)
  })
}

export const getToken = (code) => dispatch => {
  axios.get(`${CORS_ANYWHERE}https://connect.deezer.com/oauth/access_token.php?app_id=489802&secret=7c842327f55156dcddea823ba79f6d4e&code=${code}`).then(
    res => {
      console.log('DATA:', res.data)
      if (res.data === 'wrong code') {
        window.location.href = '/'
        return
      }
      return dispatch({
        type: GET_TOKEN,
        token: res.data
      })
    }).catch(err => {
    console.log(err)
  })
}
export const searchTracklist = (search) => dispatch => {
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
    return dispatch({
      type: ERROR
    })
  })
}
export const artistTracklist = () => dispatch => {
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
    return dispatch({
      type: ERROR
    })
  })
}
export const albumTracklist = () => dispatch => {
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
    return dispatch({
      type: ERROR
    })
  })
}
export const getTracklist = () => dispatch => {
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
    return dispatch({
      type: ERROR
    })
  })
}
export const stationTracklist = () => dispatch => {
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
    return dispatch({
      type: ERROR
    })
  })
}
export const genrTracklist = (genr) => dispatch => {
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
    return dispatch({
      type: ERROR
    })
  })
}
export const getLocalTracklist = () => dispatch => {
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
