import axios from 'axios'
import { GET_USER } from './actions'
const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/'

export const getUser = (token) => dispatch => {
  console.log('action', token)
  axios.get(`${API_URL}user/me?access_token=${token}`).then(
    res => {
      console.log('DATA:', res.data)
      return dispatch({
        type: GET_USER,
        user: res.data
      })
    })
}
// frms3mEyMuZLLLBvsaDrgDHkFMnpPRyXx3Gf6gfcyY8BzWAQYiZ
