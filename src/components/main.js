import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Login from './login';
import Register from './register';
import Mysticky from './MySticky';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Logout from './Logout';
import Categories from './Categories';
import Faq from './Faq';
import About from './about';

const Main = () => (
  <Switch>
    <PublicRoute exact restricted={false} path="/" component={LandingPage} />
    <PublicRoute exact restricted={true} path="/login" component={Login} />
    <PrivateRoute exact path="/logout" component={Logout} />
    <PublicRoute exact path="/register" component={Register} />
    <PrivateRoute exact path="/MyStickies" component={Mysticky}/>
    <PrivateRoute exact path="/category" component={Categories}/>
    <PublicRoute exact path="/faq" component={Faq} />
    <PublicRoute exact path="/about" component={About} />

  </Switch>
  
// {/* <Route path="/" component={LandingPage}>
//   <Route path="/login" component={Login}/>
//   <Route path="/register" component={Register}/>

//   <Route component={EnsureLoggedInContainer}>
//     <Route path="/mystickies" component={MySticky}/>
//   </Route>
// </Route> */}
)

export default Main;
