import styled from 'styled-components'

export const NavbarToggle = styled.nav`
  background-color: #662323;
  position: fixed;
  padding: 1em 0.5em;
  display: none;
  min-height: 100vh;
  @media (max-width: 850px){
    display:inline-block;
  }
`
export const NavbarMenu = styled.nav`
  background-color: #662323;
  width: 30%;
  min-height: 100vh;
  display:flex;
  flex-direction:column;
  @media (max-width: 850px){
    display: none;
  }
`
export const Title = styled.nav`
  margin-top: 3.5em;
  margin-bottom: 1.5em;
  height: 4em;
  display: flex;
  align-items: center;
  align-self:center;
`
export const FoxbelImage = styled.img`
  height: 100%;
  width:auto;
`
export const TitleText = styled.h1`
  margin:0;
  margin-top: 1em;
  margin-left: .5em;
  color: #e86060;
  display: inline;
  font-size: 2.4em;
  text-align:center;
`
export const CloseNavbarIco = styled.div`
  font-size: 2em;
  cursor: pointer;
  position: absolute;
  display:none;
`
export const CategoryTitle = styled.h2`
  margin:0;
  margin-top: 1em;
  color: white;
  font-size: 1.8em;
  margin-left:1.2em;
`
export const UlCategory = styled.ul`
  padding:0;
  margin:0;
  font-size: 1.4em;
`
export const NavItem = styled.li`
  background-color: #e86060;
  margin-bottom: .2em;
  overflow-x: hidden;
`
export const NavLink = styled.a`
  display:inline-block;
  color: white;
  background-color: #662323;
  height:100%;
  width:100%;
  padding-left:1.5em;
`
