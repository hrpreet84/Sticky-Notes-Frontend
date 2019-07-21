import React, { Component } from 'react';
import { Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import { islogin } from '../utils/index';
const lStyle = {
    fontFamily: 'Pacifico',
    fontSize: '30px'
  };

class LoggedInNav extends Component{

    render(){
        return(            
            <Navigation>                
                <Link  to="/MyStickies">< span style={lStyle}>Stickies</ span></Link>
                <Link  to="/logout">< span style={lStyle}>Logout</ span></Link>
            </Navigation>
        );
    }
}

export default LoggedInNav;