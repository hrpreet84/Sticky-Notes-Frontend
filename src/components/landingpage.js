import React, { Component } from 'react';
import { Grid } from 'react-mdl';

const pStyle = {
  fontFamily: 'Pacifico',
  marginLeft: '255px',
  marginTop: '100px'
};

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <h1 style={pStyle}>Hello !! <br/>
          Welcome to Sticky Notes App .
        </h1>
        </Grid>
      </div>
    )
  }
}

export default Landing;
