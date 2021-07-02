import React, { useEffect } from 'react'
import { setTrack } from '../../../redux/actionCreators'
import store from '../../../redux/store'
import { ResultSection, ResultTittle, ResultContent } from './styles'
import TrackCard from './TrackCard.js'
export const Results = ({ tracks }) => {
  useEffect(() => {
    store.dispatch(setTrack({
      name: tracks[0]?.title,
      img: tracks[0]?.album.cover_big,
      author: tracks[0]?.artist.name,
      url: tracks[0]?.preview
    }))
  }, [tracks])
  return (
    <ResultSection id='results'>
      <ResultTittle>Resultados</ResultTittle>
      <ResultContent>
        {tracks && tracks.map(t => {
          return (
            <TrackCard key={t.id} img={t.album.cover_big} title={t.title} author={t.artist.name} trackUrl={t.preview} />
          )
        })}
      </ResultContent>
    </ResultSection>
  )
}
