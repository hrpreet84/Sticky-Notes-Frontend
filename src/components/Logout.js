import React, { Component } from 'react';
import { Spinner } from 'react-mdl';
class Logout extends Component {

    componentDidMount () { 
        sessionStorage.clear();
        this.props.history.push('/');
      }

      render(){
          return (
            <div>
                <Spinner />
            </div>
          );
      }
    }
export default Logout;