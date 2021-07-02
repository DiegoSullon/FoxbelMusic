/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward, faPlay, faPause, faStepForward, faVolumeOff } from '@fortawesome/free-solid-svg-icons'
import { DisplayControl, SongInfo, SongImg, InfoText, InfoTittle, PlaybackControls, PlaybackButton, VolumeControls } from './styles'
import { connect } from 'react-redux'
import { pauseTrack, resumeTrack } from '../../redux/actionCreators'

const Controls = ({ play, track, trackTime, pause, resume, trackAudio }) => {
  useEffect(() => {
    if (play) {
      console.log('play', play)
      trackAudio.play()
    }
  }, [track])
  // name: title,
  //               img,
  //               author,
  //               url: trackUrl
  // 'https://images-na.ssl-images-amazon.com/images/I/41OSwd9KC3L.jpg'
  return (
    <DisplayControl id='display-control'>
      <SongInfo>
        <SongImg src={track.img} alt='Album image' />
        <InfoText>
          <InfoTittle>{track.name}</InfoTittle>
          <span>{track.author}</span>
        </InfoText>
      </SongInfo>
      <audio ref={(audio) => { trackAudio = audio }} src={track.url} />
      <PlaybackControls>
        <PlaybackButton><FontAwesomeIcon icon={faStepBackward} color='white' /></PlaybackButton>
        {play
          ? <PlaybackButton onClick={() => {
            resume(0)
            trackAudio.pause()
          }}><FontAwesomeIcon icon={faPause} color='white' /></PlaybackButton>
          : <PlaybackButton onClick={() => {
            pause(0)
            trackAudio.play()
          }}><FontAwesomeIcon icon={faPlay} color='white' /></PlaybackButton>}
        <PlaybackButton><FontAwesomeIcon icon={faStepForward} color='white' /></PlaybackButton>
      </PlaybackControls>
      <VolumeControls className='volume-controls'>
        <input type='range' min='0' max='10' />
        <button id='volume-button'><FontAwesomeIcon icon={faVolumeOff} color='white' /></button>
      </VolumeControls>
    </DisplayControl>
  )
}
const mapStateToProps = state => ({
  play: state.play,
  track: state.track,
  trackTime: state.trackTime
})
const mapDispatchToProps = dispatch => ({
  pause: (trackTime) => {
    dispatch(resumeTrack(trackTime))
  },
  resume: (trackTime) => {
    dispatch(pauseTrack(trackTime))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Controls)
