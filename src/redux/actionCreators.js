import axios from 'axios'
import { GET_TOKEN, GET_USER } from './actions'
const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/'
const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/'

export const getUser = (token) => dispatch => {
  axios.get(`${API_URL}user/me?access_token=${token}`).then(
    res => {
      return dispatch({
        type: GET_USER,
        user: res.data
      })
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
    })
}
