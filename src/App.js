import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Header from './Components/Header';
import Analyse from './Components/Analyse'
import ChangeMdp from './Components/ChangeMdp';
import Welcome from './Components/Welcome';
import Activity from './Components/Activity';
import Admin from './Components/Admin';




const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/analyse" component={Analyse} />
          <Route path="/modif-password" component={ChangeMdp} />
          <Route  path="/secure-pass" component={Header} />
          <Route  path="/activity" component={Activity} />
          <Route  path="/20admin20" component={Admin} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
