import React from 'react'
// import './styles/styles.css'
import { Navbar } from './components/Navbar/Navbar.js'
import { Main } from './components/Main/Main'
import { Controls } from './components/Controls/Controls'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main />
      <Controls />
    </>
  )
}
