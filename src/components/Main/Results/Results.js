import React from 'react'
import { ResultSection, ResultTittle, ResultContent } from './styles'
import TrackCard from './TrackCard.js'
export const Results = ({ track }) => {
  return (
    <ResultSection id='results'>
      <ResultTittle>Resultados</ResultTittle>
      <ResultContent>
        {track && track.map(t => {
          return (
            <TrackCard key={t.id} img={t.album.cover_big} title={t.title} author={t.artist.name} />
          )
        })}
      </ResultContent>
    </ResultSection>
  )
}
