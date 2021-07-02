import React, { useEffect } from 'react'
import { Results } from './Results/Results'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faPlay, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import {
  MainContent, MainHeader, SearchInput, SearchIco, UserInfo, Username, MainDisplay, DisplayImage, DisplayIco, DisplayContent, P,
  DisplayTittle, DisplayButtonsDiv, PlayButton, FollowButton, OptionsButton
} from './styles'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getLocalTracklist } from '../../redux/actionCreators'
const Main = ({ user, token, tracklist }) => {
  const getTracklistAsync = (dispatch) => new Promise((resolve, reject) => {
    dispatch(getLocalTracklist())
    resolve()
  })
  useEffect(() => {
    // console.log(user)
    // store.dispatch(getUser(token))
    // if (user) {
    //   store.dispatch(getUserTracklist(user.tracklist, token))
    // }
    getTracklistAsync(store.dispatch)
  }, [])
  const mainTrack = tracklist[0]
  return (
    <MainContent>
      <MainHeader>
        <div>
          <SearchInput type='text' placeholder='Buscar' />
          <SearchIco>
            <FontAwesomeIcon icon={faSearch} color='#bdbdbd' />
          </SearchIco>
        </div>
        <UserInfo>
          <FontAwesomeIcon icon={faUser} color='#e86060' />
          <Username>Diego Sullon</Username>
        </UserInfo>
      </MainHeader>
      {mainTrack &&
        <MainDisplay>
          <div>
            <DisplayImage className='img' src={mainTrack.album.cover_big} alt='Album image' />
            <DisplayIco id='display-ico'>
              <FontAwesomeIcon icon={faPlay} color='white' />
            </DisplayIco>
          </div>
          <DisplayContent id='display-content'>
            <DisplayTittle>{mainTrack.album.title}</DisplayTittle>
            <span>Lo mejor de {mainTrack.artist.name}</span>
            <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita perferendis adipisci voluptatum recusandae unde mollitia nam sunt, nobis ad ratione quo tenetur, minus hic. Excepturi corrupti id distinctio nemo cum!</P>
            <DisplayButtonsDiv className='display-buttons'>
              <PlayButton>Reproducir</PlayButton>
              <FollowButton>Seguir</FollowButton>
              <OptionsButton>
                <FontAwesomeIcon icon={faEllipsisH} color='white' />
              </OptionsButton>
            </DisplayButtonsDiv>
          </DisplayContent>
        </MainDisplay>}
      {/* Diplay results */}
      {tracklist && <Results tracks={tracklist} />}
    </MainContent>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token,
    tracklist: state.tracklist
  }
}
export default connect(mapStateToProps, {})(Main)
