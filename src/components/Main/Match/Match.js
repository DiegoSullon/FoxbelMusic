/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getToken } from '../../../redux/actionCreators'

const Match = ({ token, requestToken }) => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      {
      location.search !== ''
        ? <div>
          <h1>Match {location.search.slice(6)}</h1>
          <button onClick={() => requestToken(location.search.slice(6))}>Get Token</button>
          <h2>{token}</h2>
        </div>
        : <div>
          <h1>Click the follow link</h1>
          <a href='https://connect.deezer.com/oauth/auth.php?app_id=489802&redirect_uri=http://localhost:8080/&perms=basic_access,email'>Connect</a>
        </div>
      }
    </div>
  )
}
const mapStateToProps = state => ({
  token: state.token
})
const mapDispatchToProps = (dispatch) => ({
  requestToken: (code) => {
    dispatch(getToken(code))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Match)
