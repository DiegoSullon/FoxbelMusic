import styled from 'styled-components'
import { DisplayButtons, OvalButtons } from '../../styles/SharedStyles'

export const MainContent = styled.main`
  background-color: white;
  padding: 2em 2.5em;
`
export const MainHeader = styled.header`
  display: flex;
  margin-bottom: 2em;
  align-items:center;
  justify-content: space-between;
  @media (max-width: 850px){
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`
export const SearchInput = styled.input`
  font-size: 1.4em;
  padding: .2em;
  border-radius: .75em;
  &:focus-visible{
    border:0;
  }
`
export const SearchIco = styled.div`
  position:absolute;
`
export const UserInfo = styled.div`
  display: flex;
  @media (max-width: 850px){
    margin-bottom: 1em;
  }
`
export const Username = styled.span`
  margin-left: .4em;
  font-size: 1.4em;
`
export const MainDisplay = styled.section`
  display: flex;
  height: 18em;
  @media (max-width: 850px){
    flex-direction: column;
    height: auto;
  }
`
export const DisplayImage = styled.img`
  height: 100%;
  width: auto;
  @media (max-width: 850px){
    width: 100%;
    height: auto;
  }
`
export const DisplayIco = styled.div`
  position: absolute;
`
export const DisplayContent = styled.div`
  background-color: rgba(232,96,96,.6);
  color: white;
  padding: 1em 2em;
  font-size: 1.1em;
`
export const P = styled.p`
  font-size: .8em;
`
export const DisplayTittle = styled.h3`
  margin: 0;
  margin-top: .2em;
  font-size: 1.8em;
`
export const DisplayButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const PlayButton = styled.button`
  ${DisplayButtons()}
  ${OvalButtons()}
  background-color: #e86060;
`
export const FollowButton = styled.button`
  ${DisplayButtons()}
  ${OvalButtons()}
  margin-left: .5em;
  margin-right: .5em;
`
export const OptionsButton = styled.button`
  ${DisplayButtons()}
  border: none;
`
