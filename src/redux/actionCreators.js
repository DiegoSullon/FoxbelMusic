import axios from 'axios'
import { GET_TOKEN, GET_USER, GET_USER_TRACKLIST } from './actions'
const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/'
const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/'

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
export const getUserTracklist = (url, token) => dispatch => {
  axios.get(`${url}?access_token=${token}`).then(
    res => {
      console.log('DATA:', res.data)
      if (res.data.error) {
        window.location.href = '/'
        return
      }
      return dispatch({
        type: GET_USER_TRACKLIST,
        tracklist: res.data.data
      })
    }).catch(err => {
    console.log(err)
  })
}
export const getLocalTracklist = () => dispatch => {
  axios.get('http://localhost:3000/data').then(
    res => {
      console.log('DATA:', res.data)
      if (res.data.error) {
        window.location.href = '/'
        return
      }
      return dispatch({
        type: GET_USER_TRACKLIST,
        tracklist: res.data
      })
    }).catch(err => {
    console.log(err)
  })
}
