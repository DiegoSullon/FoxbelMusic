import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Card, CardImg, CardIcons, CardDescriptionTittle } from './styles'
import { connect } from 'react-redux'
import { playTrack } from '../../../redux/actionCreators'

const TrackCard = ({ img, title, author, play, trackUrl, index }) => {
  return (
    <Card className='card'>
      <div>
        <CardImg src={img} alt='album image' />
        <CardIcons id='card-icons'>
          <FontAwesomeIcon
            icon={faPlay} color='white' onClick={() => {
              play({
                name: title,
                img,
                author,
                url: trackUrl,
                index
              })
            }}
          />
          <FontAwesomeIcon icon={faEllipsisV} color='white' />
        </CardIcons>
      </div>
      <div>
        <CardDescriptionTittle>{title}</CardDescriptionTittle>
        <span>{author}</span>
      </div>
    </Card>
  )
}
const mapDispatchToProps = (dispatch) => ({
  play: (track) => {
    dispatch(playTrack(track))
  }
})
export default connect(null, mapDispatchToProps)(TrackCard)
