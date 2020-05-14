import React, { Component, Fragment } from 'react'
import { makeStyles, Grid, Typography, TextField, Button } from '@material-ui/core'
import Fullscreen from "react-full-screen";
import { ReactComponent as Google } from '../../img/svg/google.svg'
import Header from '../Header';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const style = {
  background: "#000"
}

class ChangeMdp extends Component {




  render() {
    return (
      <Fragment>

        <Header />

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={0}
          style={{ marginTop: '50px' }}
        >
          <Grid item style={{ width: '50%', textAlign: 'center' }}>

            <Google width="100" height="60" style={{ margin: '30px 0' }} />
          </Grid>
          <Grid item style={{ width: '50%' }}>
            <Typography variant="h6" component="h6" style={{ textAlign: 'center' }}>
              Vanjasoa
             </Typography>
          </Grid>
          <Grid item container justify="center" alignItems="center">
            <AccountCircle />
            <Typography variant="subtitle1" style={{ fontSize: '13px', margin: ' 10px 0 10px 3px' }}>
              vanjablou@gmail.com
           </Typography>

          </Grid>
        </Grid>






        <Grid item container style={{ width: '100%', padding: '0 20px' }} justify="flex-start" alignItems="center">
          <Typography>
            Pour continuer,veuillez confirmez votre identité
         </Typography>
          <form noValidate autoComplete="off" style={{ width: '100%', marginTop: '20px' }}>




            <TextField
              id="outlined-basic"
              label="Sasissez votre mot de passe"
              variant="outlined"
              style={{ width: '100%' }}
              type="password"
            />




            <Grid style={{ marginTop: '20px' }}>


              <Button href="#text-buttons" color="primary" style={{ float: 'left', textTransform: 'lowercase' }}>
                <span style={{ textTransform: 'uppercase' }}>m</span>ot de passe oublié
             </Button>



              <Link to="/activity">
              <Button
                variant="contained"
                color="primary"
                startIcon={<LockOutlinedIcon />}
                style={{ float: 'right', textTransform: 'lowercase' }}
              >
                Valider
             </Button>
              </Link>

            </Grid>
          </form>

        </Grid>



      </Fragment>




    );
  }
}

export default ChangeMdp;
