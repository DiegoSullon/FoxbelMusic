import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Card, CardImg, CardIcons, CardDescriptionTittle } from './styles'

const TrackCard = ({ img, title, author }) => {
  return (
    <Card className='card'>
      <div>
        <CardImg src={img} alt='album image' />
        <CardIcons id='card-icons'>
          <FontAwesomeIcon icon={faPlay} color='white' />
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

export default TrackCard
