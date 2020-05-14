import React, { Component } from 'react'
import { makeStyles, Grid, Typography, TextField, Button, Divider } from '@material-ui/core'
import Fullscreen from "react-full-screen";

import Header from '../Header';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';


const style = {
  background: "#000"
}

class Activity extends Component {
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
              //justify="center"
              //alignItems="center"
              spacing={0}
              style={{ marginTop: '55px' }}
            >
              


              <Grid
              container
              direction="ROW"
              //justify="center"
              //alignItems="center"
              spacing={0}
             
            >
              


              <Grid item xs={3} style={{  border: '2px solid black', background: "#F8F9F9" }}>
                <PhoneIphoneIcon style={{ fontSize: '100px'}} />

              </Grid>
              <Grid item xs={9} style={{padding: '50px', border: '2px solid black',background: "#F8F9F9"}}>
              text
              </Grid>

              <Grid item xs={12} style={{padding: '50px', border: '2px solid black',background: "#F8F9F9"}}>
              Description Suspect
              </Grid>

            </Grid>
<Divider />


<Grid
              container
              direction="ROW"
              //justify="center"
              //alignItems="center"
              spacing={0}
             
            >
              


              <Grid item xs={3} style={{  border: '2px solid black', background: "#F8F9F9" }}>
                <PhoneIphoneIcon style={{ fontSize: '100px'}} />

              </Grid>
              <Grid item xs={9} style={{padding: '50px', border: '2px solid black',background: "#F8F9F9"}}>
              text
              </Grid>

              <Grid item xs={12} style={{padding: '50px', border: '2px solid black',background: "#F8F9F9"}}>
              Description Suspect
              </Grid>

            </Grid>



            </Grid>


          </div>
        </Fullscreen>
      </div>
    );
  }
}

export default Activity;
