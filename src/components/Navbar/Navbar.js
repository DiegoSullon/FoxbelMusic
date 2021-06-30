import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavbarToggle, NavbarMenu, Title, FoxbelImage, TitleText, CloseNavbarIco, CategoryTitle, UlCategory, NavItem, NavLink } from './styles'
export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <NavbarToggle>
        <button id='burguer-button' onClick={() => setNavOpen(true)}>
          <FontAwesomeIcon icon={faBars} color='white' />
        </button>
      </NavbarToggle>
      <NavbarMenu className={navOpen ? 'navbar-open' : ''}>
        <Title>
          <FoxbelImage src='https://i.ibb.co/RCL7LKs/Foxbel-Music-Icon.png' alt='Foxble icon' />
          <TitleText>Foxbel Music</TitleText>
          <CloseNavbarIco id='close-navbar-ico' className={navOpen ? 'navbar-open-ico' : ''}>
            <FontAwesomeIcon icon={faTimes} color='white' onClick={() => setNavOpen(false)} />
          </CloseNavbarIco>
        </Title>
        <CategoryTitle>Mi Libreria</CategoryTitle>
        <UlCategory>
          <NavItem className='selected'><NavLink href=''>Recientes</NavLink></NavItem>
          <NavItem><NavLink href=''>Artistas</NavLink></NavItem>
          <NavItem><NavLink href=''>Albums</NavLink></NavItem>
          <NavItem><NavLink href=''>Canciones</NavLink></NavItem>
          <NavItem><NavLink href=''>Estaciones</NavLink></NavItem>
        </UlCategory>
        <CategoryTitle>Playlist</CategoryTitle>
        <UlCategory>
          <NavItem><NavLink href=''>Metal</NavLink></NavItem>
          <NavItem><NavLink href=''>Para bailar</NavLink></NavItem>
          <NavItem><NavLink href=''>Rock 90s</NavLink></NavItem>
          <NavItem><NavLink href=''>Baladas</NavLink></NavItem>
        </UlCategory>
      </NavbarMenu>
    </>
  )
}
