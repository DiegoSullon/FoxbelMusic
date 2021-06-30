import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faPlay, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import {
  MainContent, MainHeader, SearchInput, SearchIco, UserInfo, Username, MainDisplay, DisplayImage, DisplayIco, DisplayContent, P,
  DisplayTittle, DisplayButtonsDiv, PlayButton, FollowButton, OptionsButton
} from './styles'
export const Main = () => {
  return (
    <MainContent>
      <MainHeader>
        <div>
          <SearchInput type='text' placeholder='Buscar' />
          <SearchIco>
            <FontAwesomeIcon icon={faSearch} color='#bdbdbd' />
          </SearchIco>
        </div>
        <UserInfo>
          <FontAwesomeIcon icon={faUser} color='#e86060' />
          <Username>Diego Sullon</Username>
        </UserInfo>
      </MainHeader>
      <MainDisplay>
        <div>
          <DisplayImage class='img' src='https://images-na.ssl-images-amazon.com/images/I/41OSwd9KC3L.jpg' alt='Album image' />
          <DisplayIco id='display-ico'>
            <FontAwesomeIcon icon={faPlay} color='white' />
          </DisplayIco>
        </div>
        <DisplayContent id='display-content'>
          <DisplayTittle>Adele 21</DisplayTittle>
          <span>Lo mejor de adele</span>
          <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita perferendis adipisci voluptatum recusandae unde mollitia nam sunt, nobis ad ratione quo tenetur, minus hic. Excepturi corrupti id distinctio nemo cum!</P>
          <DisplayButtonsDiv class='display-buttons'>
            <PlayButton>Reproducir</PlayButton>
            <FollowButton>Seguir</FollowButton>
            <OptionsButton>
              <FontAwesomeIcon icon={faEllipsisH} color='white' />
            </OptionsButton>
          </DisplayButtonsDiv>
        </DisplayContent>
      </MainDisplay>
      <section id='results'>
        <h3 class='results-title'>Resultados</h3>
        <div class='results-content'>
          <div class='card'>
            <div class='img-container'>
              <img class='card-image' src='https://mtracks.azureedge.net/public/images/albums/568/1155.jpg' alt='album image' />
              <div class='card-icons'>
                <i class='fas fa-play' />
                <i class='fas fa-ellipsis-v' />
              </div>
            </div>
            <div class='card-description'>
              <h4>The War is Over</h4>
              <span>Josh Baldwin</span>
            </div>
          </div>
        </div>
      </section>
    </MainContent>
  )
}
