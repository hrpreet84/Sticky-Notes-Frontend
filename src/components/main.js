import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Login from './login';
import Register from './register';
import Mysticky from './MySticky';
import PrivateRoute from './PrivateRoute';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={Login} />
    <Route path="/Register" component={Register} />
    <PrivateRoute path="/MyStickies" component={Mysticky}/>
  </Switch>
)

export default Main;
