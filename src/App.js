import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Header from './Components/Header';
import Analyse from './Components/Analyse'
import ChangeMdp from './Components/ChangeMdp';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Analyse} />
          <Route path="/modif-password" component={ChangeMdp} />
          <Route  path="/secure-pass" component={Header} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
