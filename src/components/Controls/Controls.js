/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward, faPlay, faPause, faStepForward, faVolumeOff } from '@fortawesome/free-solid-svg-icons'
import { DisplayControl, SongInfo, SongImg, InfoText, InfoTittle, PlaybackControls, PlaybackButton, VolumeControls } from './styles'
import { connect } from 'react-redux'
import { nextTrack, pauseTrack, previousTrack, resumeTrack } from '../../redux/actionCreators'

const Controls = ({ play, track, pause, resume, next, previous }) => {
  const [volumeValue, setVolumeValue] = useState(1)
  const [duration, setDuration] = useState(null)
  const [trackAudio, setTrackAudio] = useState(null)
  const [time, setTime] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [playTime, setPlayTime] = useState(false)
  useEffect(() => {
    if (trackAudio) {
      trackAudio.currentTime = 0
      if (play) {
        setTime(0)
        setPlayTime(false)
        setTimeout(() => {
          setPlayTime(true)
          trackAudio.play()
          trackAudio.volume = volumeValue / 10
          updateTime()
        }, 1000)
      }
    }
    return () => {
      setPlayTime(false)
    }
  }, [track])
  useEffect(() => {
    if (trackAudio) {
      trackAudio.onloadedmetadata = () => {
        setDuration(trackAudio.duration)
      }
      trackAudio.onended = () => {
        setTime(0)
        next(track.index)
        console.log('ENDEEED')
      }
    }
  })
  const updateTime = () => {
    let p = true
    setPlayTime(state => {
      p = state
      return state
    })
    if (p) {
      setTime(time => {
        return time + 1
      })
      setTimeout(() => {
        updateTime()
      }, 1000)
    }
  }
  const updateVolume = (event) => {
    setVolumeValue(event?.target.value)
    trackAudio.volume = volumeValue / 10
  }
  return (
    <DisplayControl id='display-control'>
      <SongInfo>
        <SongImg src={track.img} alt='Album image' />
        <InfoText>
          <InfoTittle>{track.name}</InfoTittle>
          <span>{track.author}</span>
          <span>{formatTime(time)} - {formatTime(duration + 2)}</span>
        </InfoText>
      </SongInfo>
      <audio ref={(audio) => { setTrackAudio(audio) }} src={track.url} onChange={() => console.log('Asdasdasd')} />
      <PlaybackControls>
        <PlaybackButton onClick={() => {
          setTime(0)
          previous(track.index)
        }}
        ><FontAwesomeIcon icon={faStepBackward} color='white' /></PlaybackButton>
        {play
          ? <PlaybackButton onClick={() => {
            pause(0)
            setPlayTime(false)
            trackAudio.pause()
          }}><FontAwesomeIcon icon={faPause} color='white' /></PlaybackButton>
          : <PlaybackButton onClick={() => {
            resume(0)
            setTimeout(() => {
              setPlayTime(true)
              updateTime()
              trackAudio.play()
            }, 1000)
          }}><FontAwesomeIcon icon={faPlay} color='white' /></PlaybackButton>}
        <PlaybackButton onClick={() => {
          setTime(0)
          next(track.index)
        }}
        ><FontAwesomeIcon icon={faStepForward} color='white' /></PlaybackButton>
      </PlaybackControls>
      <VolumeControls className='volume-controls'>
        <input type='range' min='0' max='10' value={volumeValue} onChange={updateVolume} />
        <button id='volume-button'><FontAwesomeIcon icon={faVolumeOff} color='white' /></button>
      </VolumeControls>
    </DisplayControl>
  )
}
const formatTime = time => {
  if (time < 60) {
    return '00:' + digits(parseInt(time))
  }
  return digits(parseInt(time / 60)) + digits(parseInt(time % 60))
}
const digits = time => {
  if (time.toString().length < 2) {
    return '0' + time
  }
  return time
}
const mapStateToProps = state => ({
  play: state.play,
  track: state.track
})
const mapDispatchToProps = dispatch => ({
  pause: (trackTime) => {
    dispatch(pauseTrack(trackTime))
  },
  resume: (trackTime) => {
    dispatch(resumeTrack(trackTime))
  },
  next: (index) => {
    dispatch(nextTrack(index))
  },
  previous: (index) => {
    dispatch(previousTrack(index))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Controls)
