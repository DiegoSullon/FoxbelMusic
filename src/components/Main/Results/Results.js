import React from 'react'
import { ResultSection, ResultTittle, ResultContent } from './styles'
import TrackCard from './TrackCard.js'
export const Results = ({ tracks }) => {
  return (
    <ResultSection id='results'>
      <ResultTittle>Resultados</ResultTittle>
      <ResultContent>
        {tracks && tracks.map(t => {
          return (
            <TrackCard key={t.id} img={t.album.cover_big} title={t.title} author={t.artist.name} trackUrl={t.preview} index={tracks.indexOf(t)} />
          )
        })}
      </ResultContent>
    </ResultSection>
  )
}
