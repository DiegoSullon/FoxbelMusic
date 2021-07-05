import React, { useEffect, useState } from 'react'
import { Results } from './Results/Results'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faPlay, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import {
  MainContent, MainHeader, SearchInput, SearchIco, UserInfo, Username, MainDisplay, DisplayImage, DisplayIco, DisplayContent, P,
  DisplayTittle, DisplayButtonsDiv, PlayButton, FollowButton, OptionsButton
} from './styles'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getLocalTracklist, playTrack, setTrack } from '../../redux/actionCreators'
const Main = ({ user, token, tracklist }) => {
  const [search, setSearch] = useState('')
  const [searchList, setSearchList] = useState(tracklist)
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
  useEffect(() => {
    setSearchList(tracklist)
    store.dispatch(setTrack({
      name: tracklist[0]?.title,
      img: tracklist[0]?.album.cover_big,
      author: tracklist[0]?.artist.name,
      url: tracklist[0]?.preview,
      index: 0
    }))
  }, [tracklist])
  const updateSearch = event => {
    const text = event.target.value
    setSearch(text)
    setSearchList(tracklist.filter(i => i.title.toLowerCase().includes(text.toLowerCase()) || i.artist.name.toLowerCase().includes(text.toLowerCase())))
  }
  const mainTrack = tracklist[0]
  return (
    <MainContent>
      <MainHeader>
        <div>
          <SearchInput type='text' placeholder='Buscar' value={search} onChange={updateSearch} />
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
              <FontAwesomeIcon
                icon={faPlay} color='white' onClick={() => store.dispatch(playTrack({
                  name: mainTrack?.title,
                  img: mainTrack?.album.cover_big,
                  author: mainTrack?.artist.name,
                  url: mainTrack?.preview,
                  index: 0
                }))}
              />
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
      {searchList && <Results tracks={searchList} />}
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
