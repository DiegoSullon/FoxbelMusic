import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavbarToggle, NavbarMenu, Title, FoxbelImage, TitleText, CloseNavbarIco, CategoryTitle, UlCategory, NavItem, NavLink } from './styles'
export const Navbar = () => {
  let initialLinks = [true, false, false, false, false, false, false, false, false]
  const [navOpen, setNavOpen] = useState(false)
  const [links, setLinks] = useState(initialLinks)
  const setNav = index => {
    initialLinks = [false, false, false, false, false, false, false, false, false]
    initialLinks[index] = true
    setLinks(initialLinks)
  }
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
          <NavItem className={links[0] ? 'selected' : ''}><NavLink onClick={() => setNav(0)}>Recientes</NavLink></NavItem>
          <NavItem className={links[1] ? 'selected' : ''}><NavLink onClick={() => setNav(1)}>Artistas</NavLink></NavItem>
          <NavItem className={links[2] ? 'selected' : ''}><NavLink onClick={() => setNav(2)}>Albums</NavLink></NavItem>
          <NavItem className={links[3] ? 'selected' : ''}><NavLink onClick={() => setNav(3)}>Canciones</NavLink></NavItem>
          <NavItem className={links[4] ? 'selected' : ''}><NavLink onClick={() => setNav(4)}>Estaciones</NavLink></NavItem>
        </UlCategory>
        <CategoryTitle>Playlist</CategoryTitle>
        <UlCategory>
          <NavItem className={links[5] ? 'selected' : ''}><NavLink onClick={() => setNav(5)}>Metal</NavLink></NavItem>
          <NavItem className={links[6] ? 'selected' : ''}><NavLink onClick={() => setNav(6)}>Para bailar</NavLink></NavItem>
          <NavItem className={links[7] ? 'selected' : ''}><NavLink onClick={() => setNav(7)}>Rock 90s</NavLink></NavItem>
          <NavItem className={links[8] ? 'selected' : ''}><NavLink onClick={() => setNav(8)}>Baladas</NavLink></NavItem>
        </UlCategory>
      </NavbarMenu>
    </>
  )
}
