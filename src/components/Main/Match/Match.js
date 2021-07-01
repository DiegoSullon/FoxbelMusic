/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { useLocation } from 'react-router-dom'

const Match = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      {
      location.search !== ''
        ? <h1>Match {location.search.slice(6)}</h1>
        : <div>
          <h1>Click the follow link</h1>
          <a href='https://connect.deezer.com/oauth/auth.php?app_id=489802&redirect_uri=http://localhost:8080/&perms=basic_access,email'>Connect</a>
        </div>
      }
    </div>
  )
}
export default Match
