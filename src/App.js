import React from 'react'
import { Navbar } from './components/Navbar/Navbar.js'
import Main from './components/Main/Main.js'
import Controls from './components/Controls/Controls'
import Match from './components/Main/Match/Match.js'
import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Main} />
        <Route exact path='*' component={Match} />
      </Switch>
      <Controls />
    </Router>
  )
}
