import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import DCPortfolio from './DCPortfolio';
import Projects from './Projects'
import MenuBar from "./MenuBar";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Router>
        <MenuBar />
        <Switch>
            <Route exact path='/' component={DCPortfolio}/>
            <Route path='/projects' component={Projects}/>
        </Switch>
    </Router>
  </main>
)

export default Main;