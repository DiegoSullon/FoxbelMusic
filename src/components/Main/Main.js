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
  useEffect(() => {
    // console.log(user)
    // store.dispatch(getUser(token))
    // if (user) {
    //   store.dispatch(getUserTracklist(user.tracklist, token))
    // }
    store.dispatch(getLocalTracklist())
  }, [])
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
          <Username>{user && user.name}</Username>
        </UserInfo>
      </MainHeader>
      <MainDisplay>
        <div>
          <DisplayImage className='img' src='https://images-na.ssl-images-amazon.com/images/I/41OSwd9KC3L.jpg' alt='Album image' />
          <DisplayIco id='display-ico'>
            <FontAwesomeIcon icon={faPlay} color='white' />
          </DisplayIco>
        </div>
        <DisplayContent id='display-content'>
          <DisplayTittle>Adele 21</DisplayTittle>
          <span>Lo mejor de adele</span>
          <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita perferendis adipisci voluptatum recusandae unde mollitia nam sunt, nobis ad ratione quo tenetur, minus hic. Excepturi corrupti id distinctio nemo cum!</P>
          <DisplayButtonsDiv className='display-buttons'>
            <PlayButton>Reproducir</PlayButton>
            <FollowButton>Seguir</FollowButton>
            <OptionsButton>
              <FontAwesomeIcon icon={faEllipsisH} color='white' />
            </OptionsButton>
          </DisplayButtonsDiv>
        </DisplayContent>
      </MainDisplay>
      {/* Diplay results */}
      {tracklist && <Results track={tracklist} />}
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
