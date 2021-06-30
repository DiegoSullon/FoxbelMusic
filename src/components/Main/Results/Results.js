import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { ResultSection, ResultTittle, ResultContent, Card, CardImg, CardIcons, CardDescriptionTittle } from './styles'
export const Results = () => {
  return (
    <ResultSection id='results'>
      <ResultTittle>Resultados</ResultTittle>
      <ResultContent>
        <Card class='card'>
          <div>
            <CardImg src='https://mtracks.azureedge.net/public/images/albums/568/1155.jpg' alt='album image' />
            <CardIcons id='card-icons'>
              <FontAwesomeIcon icon={faPlay} color='white' />
              <FontAwesomeIcon icon={faEllipsisV} color='white' />
            </CardIcons>
          </div>
          <div>
            <CardDescriptionTittle>The War is Over</CardDescriptionTittle>
            <span>Josh Baldwin</span>
          </div>
        </Card>
      </ResultContent>
    </ResultSection>
  )
}
