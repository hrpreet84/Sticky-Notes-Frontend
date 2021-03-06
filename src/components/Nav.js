import React, { Component } from 'react';
import { Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
const lStyle = {
    fontFamily: 'Pacifico',
    fontSize: '30px'
  };

class Nav extends Component{

    render(){
        return(            
            <Navigation>
                <Link  to="/login"><span style={lStyle}>Login</ span></Link>
                <Link  to="/register">< span style={lStyle}>Register</ span></Link>
                
                <Link  to="/faq">< span style={lStyle}>FAQ's</ span></Link>
                
                <Link  to="/about">< span style={lStyle}>About</ span></Link>
            </Navigation>
        );
    }
}

export default Nav;