import React from 'react'
import checkAuth from './auth';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = async ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const isLoggedIn = await checkAuth();
  console.log("logged in :"+isLoggedIn);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute