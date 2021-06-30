import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward, faPlay, faStepForward, faVolumeOff } from '@fortawesome/free-solid-svg-icons'
import { DisplayControl, SongInfo, SongImg, InfoText, InfoTittle, PlaybackControls, PlaybackButton, VolumeControls } from './styles'
export const Controls = () => {
  return (
    <DisplayControl id='display-control'>
      <SongInfo>
        <SongImg src='https://images-na.ssl-images-amazon.com/images/I/41OSwd9KC3L.jpg' alt='Album image' />
        <InfoText>
          <InfoTittle>Cancion</InfoTittle>
          <span>Artista - Album</span>
        </InfoText>
      </SongInfo>
      <PlaybackControls>
        <PlaybackButton><FontAwesomeIcon icon={faStepBackward} color='white' /></PlaybackButton>
        <PlaybackButton><FontAwesomeIcon icon={faPlay} color='white' /></PlaybackButton>
        <PlaybackButton><FontAwesomeIcon icon={faStepForward} color='white' /></PlaybackButton>
      </PlaybackControls>
      <VolumeControls class='volume-controls'>
        <input type='range' min='0' max='10' />
        <button id='volume-button'><FontAwesomeIcon icon={faVolumeOff} color='white' /></button>
      </VolumeControls>
    </DisplayControl>
  )
}
