import React, { useState, useEffect } from 'react'
import { ReactComponent as SecureLogo } from '../../img/svg/account.svg'
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid, Button } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom'

const Welcome = () => {



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
      <Grid item>
        <Typography variant="overline" component="h6">
          Cliquez pour analyser votre télephone
        </Typography>
      </Grid>
      <Grid item style={{marginTop: '10%'}}>
        <Link to='/analyse' style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LockOutlinedIcon />}
          >
            Analyser
          </Button>
        </Link>
      </Grid>
    </Grid>
  )

}

export default Welcome
