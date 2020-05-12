import React, { useState, useEffect } from 'react'
import { ReactComponent as SecureLogo } from '../../img/svg/account.svg'
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid, Button } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link } from 'react-router-dom'

const Analyse = () => {

  const [completed, setCompleted] = React.useState(0);
  const [percent, setPercent] = useState(0)
  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        console.log(oldCompleted)
        if (oldCompleted === 100) {
         
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, [percent]);




  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >

      <Grid item style={{ width: '50%' }}>

        <SecureLogo />
      </Grid>
      <Grid item style={{ width: '50%', textAlign: 'center' }}>
        <h3>Analyse de votre téléphone pour enlever toute ménace</h3>
        <LinearProgress variant="determinate" value={completed} />
        <p>{Math.round(completed)}%</p>
      </Grid>
      
{

  Math.round(completed) == 100 && (<Grid item style={{ width: '50%', textAlign: 'center' }}>
  <p>Vuillez Sécuriser votre compte</p>
  <Link to='/modif-password' style={{textDecoration: 'none'}}>
  <Button
    variant="contained"
    color="primary"
    startIcon={<LockOutlinedIcon />}
  >
    Suivant
</Button>
  </Link>
</Grid>)

}

      
      
      
    </Grid>
  )
}

export default Analyse
