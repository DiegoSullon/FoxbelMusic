import styled from 'styled-components'

export const DisplayControl = styled.div`
  background-color: #eb5757;
  width: 100%;
  height: 120px;
  position: fixed;
  display: flex;
  bottom: 0;
  z-index: 2;
`
export const SongInfo = styled.div`
  display:flex;
`
export const SongImg = styled.img`
  height:100%;
  width:auto;
`
export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-left:1.5em;
  color: white;
  @media (max-width: 850px){
    margin-left: .5em;
  }
`
export const InfoTittle = styled.h4`
  margin:0;
  font-size: 1.1em;
  overflow: hidden;
`
export const PlaybackControls = styled.div`
  align-self:center;
  margin-left: auto;
  justify-self:center;
  display: flex;
  width:20%;
  justify-content: space-evenly;
  @media (max-width: 850px){
    width: 50%;
  }
`
export const PlaybackButton = styled.button`
  font-size: 2.5em;
  height:2em;
  width:2em;
  border-radius:50%;
  &:hover{
    background-color: rgba(232,96,96,.9);
  }
`
export const VolumeControls = styled.div`
  margin-left: auto;
  margin-right: 2em;
  align-self:center;
  display:flex;
  align-items: center;
  width:auto;
  justify-content: space-between;
  @media (max-width: 850px){
    display:none;
  }
`
