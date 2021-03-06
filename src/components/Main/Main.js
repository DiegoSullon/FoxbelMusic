import React, { useEffect, useState } from 'react'
import { Results } from './Results/Results'
import Spinner from './Spinner/Spinner.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlay, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import {
  MainContent, MainHeader, SearchInput, SearchIco, MainDisplay, DisplayImage, DisplayIco, DisplayContent, P,
  DisplayTittle, DisplayButtonsDiv, PlayButton, FollowButton, OptionsButton, AccessLink, ErrorMessage
} from './styles'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getLocalTracklist, playTrack, searchTracklist, setTrack } from '../../redux/actionCreators'
const Main = ({ error, loading, tracklist, searchAction }) => {
  const [search, setSearch] = useState('')
  const [searchList, setSearchList] = useState(tracklist)
  const getTracklistAsync = (dispatch) => new Promise((resolve, reject) => {
    dispatch(getLocalTracklist())
    resolve()
  })
  useEffect(() => {
    getTracklistAsync(store.dispatch)
  }, [])
  const handleKeyPress = event => {
    const { key, keyCode } = event
    if (keyCode === 32 || key === 'Enter') {
      searchAction(search)
    }
  }
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
      {loading && <Spinner />}
      {error && <ErrorMessage>You have reached the limit of requests per hour, request access again later.</ErrorMessage>}
      <MainHeader>
        <div>
          <SearchInput type='text' placeholder='Buscar' value={search} onChange={updateSearch} onKeyDown={handleKeyPress} />
          <SearchIco>
            <FontAwesomeIcon icon={faSearch} color='#bdbdbd' onClick={() => searchAction(search)} />
          </SearchIco>
        </div>
        <AccessLink href='https://cors-anywhere.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Get temporary access</AccessLink>
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
    tracklist: state.tracklist,
    error: state.error,
    loading: state.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchAction: (search) => {
      if (search !== '') {
        dispatch(searchTracklist(search))
      } else {
        dispatch(getLocalTracklist())
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
